// Updated page.tsx with correct Next.js App Router typing
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import React from 'react';
import Image from 'next/image';
import TableOfContents from '@/components/TableOfContents';
import type { BundledLanguage } from 'shiki';

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

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

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

interface ImageData {
  imageName: string;
  caption?: string;
}

const parseImageContent = (content: string): ImageData => {
  const imageMatch = content.match(/!\[\[(.*?)\]\](?:\(caption: (.*?)\))?/);
  if (!imageMatch) return { imageName: '' };

  return {
    imageName: imageMatch[1],
    caption: imageMatch[2]
  };
};

const ObsidianImage = ({ content, postSlug }: { content: string; postSlug: string }) => {
  const { imageName, caption } = parseImageContent(content);
  const imagePath = `/iot-research/images/posts/${postSlug}/${imageName}`;

  return (
    <figure className="my-8 flex flex-col items-center">
      <div className="relative w-full max-h-[800px] bg-mantle/50 rounded-lg flex justify-center">
        <div className="relative min-h-[200px] w-full flex justify-center items-center">
          <Image
            src={imagePath}
            alt={caption || imageName.split('-').join(' ')}
            fill
            className="object-contain rounded-lg"
            quality={100}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            style={{
              maxHeight: '800px',
              width: 'auto',
              height: 'auto',
              position: 'relative'
            }}
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-subtext0 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

const ImageContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    {children}
  </div>
);

const mdxComponents = (slug: string) => ({
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
        return <ObsidianImage content={children} postSlug={slug} />;
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
                return <ObsidianImage key={index} content={child} postSlug={slug} />;
              }
              return child;
            })}
          </ImageContainer>
        );
      }
    }

    return <p className="my-6 leading-relaxed text-subtext0">{children}</p>;
  },
});

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

// FIX: Correct type definition for Next.js App Router page component
export default async function Post({
  params,
}: {
  params: { slug: string };
}) {
  const { frontmatter, content } = await getPost(params.slug);
  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-base to-mantle">
      {/* Header Banner */}
      <div className="w-full bg-surface0/10 border-b border-surface0/50">
        <div className="max-w-[1600px] mx-auto px-6 py-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-text mb-6 leading-tight">
            {frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <time className="text-sm px-4 py-1.5 rounded-full bg-surface0/30 text-subtext0 font-medium">
              {formattedDate}
            </time>
            {frontmatter.excerpt && (
              <p className="text-lg text-subtext0 leading-relaxed max-w-2xl">
                {frontmatter.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="hidden lg:block w-72 h-[calc(100vh-4rem)] sticky top-16 shrink-0 overflow-y-auto border-r border-surface0/50">
            <div className="p-8">
              <h2 className="text-lg font-semibold text-text mb-6">Table of Contents</h2>
              <TableOfContents content={content} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <article className="max-w-4xl mx-auto px-6 lg:px-16 py-12">
              <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-text 
                prose-headings:font-semibold
                prose-headings:scroll-mt-20
                prose-p:text-subtext0 
                prose-p:leading-7
                prose-p:my-6
                prose-a:text-blue 
                prose-a:no-underline
                prose-a:border-b
                prose-a:border-blue/30
                hover:prose-a:border-blue
                prose-strong:text-mauve
                prose-strong:font-semibold
                prose-code:text-peach
                prose-pre:bg-mantle
                prose-pre:border
                prose-pre:border-surface0/50
                prose-pre:rounded-xl
                prose-pre:shadow-lg
                prose-pre:my-8
                [&>*:first-child]:mt-0
                [&>pre]:p-6
                [&>:not(pre)>code]:px-2
                [&>:not(pre)>code]:py-1
                [&>:not(pre)>code]:rounded-md
                [&>:not(pre)>code]:bg-surface0/40
                [&>hr]:my-12
                [&>hr]:border-surface0/50
                [&>blockquote]:border-l-4
                [&>blockquote]:border-blue
                [&>blockquote]:bg-surface0/10
                [&>blockquote]:px-8
                [&>blockquote]:py-6
                [&>blockquote]:rounded-r-xl
                [&>blockquote]:shadow-sm
                [&>table]:border-collapse
                [&>table]:w-full
                [&>table]:my-8
                [&>table>thead>tr>th]:bg-surface0/30
                [&>table>thead>tr>th]:p-3
                [&>table>tbody>tr>td]:border
                [&>table>tbody>tr>td]:border-surface0/50
                [&>table>tbody>tr>td]:p-3">
                <MDXRemote
                  source={content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [],
                      rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
                      format: 'mdx'
                    }
                  }}
                  components={mdxComponents(params.slug)}
                />
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}