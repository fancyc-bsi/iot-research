import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import React from 'react';
import Image from 'next/image';
import TableOfContents from '@/components/TableOfContents';
import type { BundledLanguage } from 'shiki';

// Types and interfaces remain the same
interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
}

interface VisitedNode {
  children: Array<{ type: string; value: string }>;
  properties?: {
    className?: string[];
  };
}

interface HeadingProps {
  children: React.ReactNode;
}

interface ParagraphProps {
  children: React.ReactNode | React.ReactNode[];
}

// Utility Functions
const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Updated Rehype Options
const rehypeOptions = {
  theme: 'catppuccin-mocha',
  keepBackground: true,
  onVisitLine(node: VisitedNode) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node: VisitedNode) {
    if (node.properties) {
      node.properties.className = ['line--highlighted'];
    }
  },
  onVisitHighlightedWord(node: VisitedNode) {
    if (node.properties) {
      node.properties.className = ['word--highlighted'];
    }
  },
  getHighlighter: async () => {
    const { getHighlighter } = await import('shiki');
    return getHighlighter({
      themes: ['catppuccin-mocha'],
      langs: ['typescript', 'javascript', 'jsx', 'tsx', 'mermaid'] as BundledLanguage[],
    });
  },
};

// Enhanced ObsidianImage Component
const ObsidianImage = ({ content }: { content: string }) => {
  const imageName = content.replace(/!\[\[(.*?)\]\]/, '$1');
  const imagePath = `/iot-research/images/posts/geeni-glimpse/${imageName}`;
  
  return (
    <figure className="my-8">
      <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-mantle border border-surface0 shadow-lg">
        <Image
          src={imagePath}
          alt={imageName}
          fill
          className="object-contain"
          quality={95}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-subtext0">
        {imageName.split('-').join(' ')}
      </figcaption>
    </figure>
  );
};

// Enhanced ImageContainer Component
const ImageContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
    {children}
  </div>
);

// MDX Components
export const mdxComponents = {
  h1: ({ children }: HeadingProps) => {
    const id = slugify(children?.toString() || '');
    return (
      <h1 id={id} className="scroll-mt-24 text-3xl font-bold mt-12 mb-6 text-text">
        {children}
      </h1>
    );
  },
  h2: ({ children }: HeadingProps) => {
    const id = slugify(children?.toString() || '');
    return (
      <h2 id={id} className="scroll-mt-24 text-2xl font-bold mt-10 mb-4 text-text">
        {children}
      </h2>
    );
  },
  h3: ({ children }: HeadingProps) => {
    const id = slugify(children?.toString() || '');
    return (
      <h3 id={id} className="scroll-mt-24 text-xl font-bold mt-8 mb-3 text-text">
        {children}
      </h3>
    );
  },
  p: ({ children }: ParagraphProps) => {
    if (typeof children === 'string') {
      if (children.startsWith('![[')) {
        return <ObsidianImage content={children} />;
      }
      return <p className="my-6 leading-relaxed text-subtext0">{children}</p>;
    }

    if (Array.isArray(children)) {
      const hasOnlyImages = children.every(
        child => typeof child === 'string' && child.startsWith('![[')
      );
      if (hasOnlyImages) {
        return (
          <ImageContainer>
            {children.map((child, index) => {
              if (typeof child === 'string' && child.startsWith('![[')) {
                return <ObsidianImage key={index} content={child} />;
              }
              return child;
            })}
          </ImageContainer>
        );
      }
    }

    return <p className="my-6 leading-relaxed text-subtext0">{children}</p>;
  },
};

// Post Fetching Function
async function getPost(slug: string) {
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), 'src/content/posts', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownFile);
  return {
    frontmatter: frontmatter as Frontmatter,
    content,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content/posts'));
  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

// Props Type
type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Enhanced Post Component
export default async function Post({ params }: Props) {
  const resolvedParams = await params;
  const { frontmatter, content } = await getPost(resolvedParams.slug);
  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-base to-mantle">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Enhanced Sidebar */}
          <aside className="hidden lg:block w-72 h-[calc(100vh-4rem)] sticky top-16 shrink-0 overflow-y-auto border-r border-surface0 bg-base/50 backdrop-blur-sm">
            <div className="p-8">
              <h2 className="text-lg font-semibold text-text mb-6">Table of Contents</h2>
              <TableOfContents content={content} />
            </div>
          </aside>

          {/* Enhanced Main Content */}
          <main className="flex-1 min-w-0 bg-base/50 backdrop-blur-sm">
            <article className="max-w-3xl mx-auto px-6 lg:px-12 py-16">
              {/* Enhanced Header */}
              <header className="mb-16 border-b border-surface0 pb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-text mb-6 leading-tight">
                  {frontmatter.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-subtext0">
                  <time className="text-sm bg-surface0/50 px-3 py-1 rounded-full">
                    {formattedDate}
                  </time>
                  {frontmatter.excerpt && (
                    <p className="text-sm">{frontmatter.excerpt}</p>
                  )}
                </div>
              </header>

              {/* Enhanced Content */}
              <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-text 
                prose-headings:font-semibold
                prose-p:text-subtext0 
                prose-p:leading-relaxed
                prose-a:text-blue 
                prose-a:no-underline
                hover:prose-a:text-sapphire
                hover:prose-a:underline
                prose-strong:text-mauve
                prose-code:text-peach
                prose-pre:my-8
                prose-pre:bg-mantle
                prose-pre:border
                prose-pre:border-surface0
                prose-pre:rounded-lg
                prose-pre:shadow-lg
                prose-img:rounded-xl
                prose-img:shadow-xl
                prose-img:border-2
                prose-img:border-surface0
                [&>*:first-child]:mt-0
                [&>pre]:p-6
                [&>:not(pre)>code]:px-1.5
                [&>:not(pre)>code]:py-0.5
                [&>:not(pre)>code]:rounded
                [&>:not(pre)>code]:bg-surface0/50
                [&>hr]:border-surface0
                [&>blockquote]:border-l-4
                [&>blockquote]:border-blue
                [&>blockquote]:bg-surface0/20
                [&>blockquote]:px-6
                [&>blockquote]:py-4
                [&>blockquote]:rounded-r-lg
                [&>blockquote]:shadow-sm
                [&>table]:border-collapse
                [&>table]:w-full
                [&>table>thead>tr>th]:bg-surface0/50
                [&>table>thead>tr>th]:p-2
                [&>table>tbody>tr>td]:border
                [&>table>tbody>tr>td]:border-surface0
                [&>table>tbody>tr>td]:p-2">
                <MDXRemote
                  source={content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [],
                      rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
                      format: 'mdx'
                    }
                  }}
                  components={mdxComponents}
                />
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}