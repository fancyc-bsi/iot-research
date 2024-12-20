#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <sys/types.h>
#include <sys/inotify.h>
#include <limits.h>
#include <unistd.h>
#include <string.h>
#include <fcntl.h>
#include <ftw.h>

#define EVENT_SIZE  ( sizeof (struct inotify_event) )
#define EVENT_BUF_LEN     ( 1024 * ( EVENT_SIZE + 16 ) )
#define MAX_WATCHES 524288  // Maximum number of watches, adjust if needed

int fd;                     // Global inotify file descriptor
int *watch_descriptors;     // Array to store watch descriptors
int watch_count = 0;
char **watch_paths;         // Array to store paths

// Add excluded paths
const char *excluded_paths[] = {
    "/sys",
    "/proc",           // Virtual filesystem for process info
    "/dev",            // Device files
    "/run",            // Runtime files
    NULL
};

int is_excluded_path(const char *path) {
    for (const char **excluded = excluded_paths; *excluded; excluded++) {
        if (strncmp(path, *excluded, strlen(*excluded)) == 0) {
            return 1;
        }
    }
    return 0;
}

void copy_file(const char *source_path) {
    char dest_path[PATH_MAX];
    char buffer[4096];
    int source_fd, dest_fd, ret;
    
    // Create destination path in /tmp
    const char *filename = strrchr(source_path, '/');
    if (filename == NULL) filename = source_path;
    else filename++;
    
    snprintf(dest_path, sizeof(dest_path), "/tmp/_files/%s", filename);
    
    // Open source file
    source_fd = open(source_path, O_RDONLY);
    if (source_fd == -1) {
        fprintf(stderr, "Failed to open source file %s: %s\n", 
                source_path, strerror(errno));
        return;
    }
    
    // Create destination file
    dest_fd = open(dest_path, O_WRONLY | O_CREAT | O_TRUNC, 0644);
    if (dest_fd == -1) {
        fprintf(stderr, "Failed to create destination file %s: %s\n", 
                dest_path, strerror(errno));
        close(source_fd);
        return;
    }
    
    // Copy file contents
    while ((ret = read(source_fd, buffer, sizeof(buffer))) > 0) {
        if (write(dest_fd, buffer, ret) != ret) {
            fprintf(stderr, "Write error to %s: %s\n", 
                    dest_path, strerror(errno));
            break;
        }
    }
    
    close(source_fd);
    close(dest_fd);
    printf("Copied %s to %s\n", source_path, dest_path);
}

// Function to add a new watch for a directory
int add_watch(const char *path) {
    // Skip excluded paths
    if (is_excluded_path(path)) {
        printf("Skipping excluded path: %s\n", path);
        return -1;
    }

    int wd = inotify_add_watch(fd, path, 
                              IN_CREATE | IN_MOVED_TO | IN_CREATE | IN_ISDIR);
    if (wd >= 0) {
        watch_descriptors[watch_count] = wd;
        watch_paths[watch_count] = strdup(path);
        watch_count++;
        printf("Watching: %s\n", path);
    }
    return wd;
}

// Callback function for ftw()
int handle_path(const char *fpath, const struct stat *sb, int typeflag) {
    if (typeflag == FTW_D && watch_count < MAX_WATCHES && !is_excluded_path(fpath)) {
        add_watch(fpath);
    }
    return 0;
}

// Function to handle new directory creation
void handle_new_directory(const char *path) {
    if (watch_count >= MAX_WATCHES) {
        fprintf(stderr, "Maximum watch limit reached\n");
        return;
    }
    
    if (is_excluded_path(path)) {
        printf("Skipping new excluded directory: %s\n", path);
        return;
    }
    
    // Add watch for the new directory
    add_watch(path);
    
    // Recursively add watches for any subdirectories
    ftw(path, handle_path, 16);
}

char* get_path_from_wd(int wd) {
    for (int i = 0; i < watch_count; i++) {
        if (watch_descriptors[i] == wd) {
            return watch_paths[i];
        }
    }
    return NULL;
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        fprintf(stderr, "Usage: %s <directory>\n", argv[0]);
        exit(EXIT_FAILURE);
    }

    // Initialize arrays for storing watch descriptors and paths
    watch_descriptors = malloc(MAX_WATCHES * sizeof(int));
    watch_paths = malloc(MAX_WATCHES * sizeof(char*));
    if (!watch_descriptors || !watch_paths) {
        fprintf(stderr, "Failed to allocate memory\n");
        exit(EXIT_FAILURE);
    }

    fd = inotify_init();
    if (fd < 0) {
        perror("inotify_init");
        exit(EXIT_FAILURE);
    }

    printf("Starting file monitoring (excluding: /sys, /proc, /dev, /run, /tmp)\n");

    // Add watches recursively starting from the root directory
    if (ftw(argv[1], handle_path, 16) == -1) {
        fprintf(stderr, "Failed to traverse directory tree\n");
        exit(EXIT_FAILURE);
    }

    printf("Monitoring directory tree starting at: %s\n", argv[1]);
    printf("Number of watches set: %d\n", watch_count);
    
    char buffer[EVENT_BUF_LEN];
    while (1) {
        int length = read(fd, buffer, EVENT_BUF_LEN);
        if (length < 0) {
            perror("read");
            break;
        }

        int i = 0;
        while (i < length) {
            struct inotify_event *event = 
                (struct inotify_event *) &buffer[i];
            
            if (event->len) {
                char *watch_path = get_path_from_wd(event->wd);
                if (watch_path) {
                    char filepath[PATH_MAX];
                    snprintf(filepath, sizeof(filepath), "%s/%s", 
                            watch_path, event->name);
                    
                    if (!is_excluded_path(filepath)) {
                        if (event->mask & IN_ISDIR) {
                            printf("New directory detected: %s\n", filepath);
                            handle_new_directory(filepath);
                        } else if (event->mask & (IN_CREATE | IN_MOVED_TO)) {
                            printf("New file detected: %s\n", filepath);
                            copy_file(filepath);
                        }
                    }
                }
            }
            i += EVENT_SIZE + event->len;
        }
    }

    // Cleanup
    for (int i = 0; i < watch_count; i++) {
        inotify_rm_watch(fd, watch_descriptors[i]);
        free(watch_paths[i]);
    }
    free(watch_descriptors);
    free(watch_paths);
    close(fd);
    return 0;
}