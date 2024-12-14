import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime?: string;
}

async function getBlogPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const markdownWithMeta = fs.readFileSync(
        path.join(postsDirectory, filename),
        'utf-8'
      );
      const { data } = matter(markdownWithMeta);
      return {
        slug: filename.replace('.mdx', ''),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export default async function Home() {
  const posts = await getBlogPosts();
  return (
    <div className="min-h-screen bg-base">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-text">Latest Research</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              readingTime={post.readingTime}
            />
          ))}
        </div>
        {posts.length === 0 && (
          <div className="text-center bg-surface0 rounded-lg p-12 border border-surface1">
            <h3 className="text-xl font-semibold text-text mb-2">No Posts Yet</h3>
            <p className="text-subtext0">
              Start by adding your first post in src/content/posts!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}