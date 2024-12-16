import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import TableOfContents from '@/components/TableOfContents';
import { mdxComponents } from '@/components/mdx-components';
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

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

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
      <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto">
        {/* Sidebar */}
        <div className="hidden lg:block w-72 h-[calc(100vh-4rem)] sticky top-16 shrink-0 overflow-y-auto border-r border-surface0/50">
          <div className="p-8">
            <h2 className="text-lg font-semibold text-text mb-6">Table of Contents</h2>
            <TableOfContents content={content} />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <article className="max-w-3xl mx-auto px-6 lg:px-12 py-16">
            {/* Article Header */}
            <header className="mb-16 pb-8 border-b border-surface0/50">
              <h1 className="text-4xl lg:text-5xl font-bold text-text mb-6 leading-tight">
                {frontmatter.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <time className="text-sm px-3 py-1 rounded-full bg-surface0/30 text-subtext0">
                  {formattedDate}
                </time>
                {frontmatter.excerpt && (
                  <span className="text-sm text-subtext0">{frontmatter.excerpt}</span>
                )}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-text 
              prose-headings:font-semibold
              prose-headings:scroll-mt-20
              prose-h1:text-4xl
              prose-h1:mt-16
              prose-h1:mb-8
              prose-h2:text-3xl
              prose-h2:mt-12
              prose-h2:mb-6
              prose-h3:text-2xl
              prose-h3:mt-8
              prose-h3:mb-4
              prose-p:text-subtext0 
              prose-p:leading-relaxed
              prose-p:my-6
              prose-a:text-blue 
              prose-a:no-underline
              hover:prose-a:text-sapphire
              hover:prose-a:underline
              prose-strong:text-mauve
              prose-code:text-peach
              prose-pre:my-8
              prose-pre:bg-mantle
              prose-pre:border
              prose-pre:border-surface0/50
              prose-pre:rounded-lg
              prose-pre:shadow-md
              prose-img:rounded-lg
              prose-img:shadow-md
              prose-img:border
              prose-img:border-surface0/50
              prose-img:my-8
              prose-figcaption:text-center
              prose-figcaption:text-sm
              prose-figcaption:text-subtext0
              prose-figcaption:mt-3
              [&>*:first-child]:mt-0
              [&>pre]:p-6
              [&>:not(pre)>code]:px-1.5
              [&>:not(pre)>code]:py-0.5
              [&>:not(pre)>code]:rounded
              [&>:not(pre)>code]:bg-surface0/30
              [&>hr]:border-surface0/50
              [&>blockquote]:border-l-4
              [&>blockquote]:border-blue
              [&>blockquote]:bg-surface0/10
              [&>blockquote]:px-6
              [&>blockquote]:py-4
              [&>blockquote]:rounded-r-lg
              [&>blockquote]:not-italic
              [&>table]:border-collapse
              [&>table]:w-full
              [&>table>thead>tr>th]:bg-surface0/30
              [&>table>thead>tr>th]:p-2
              [&>table>tbody>tr>td]:border
              [&>table>tbody>tr>td]:border-surface0/50
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
  );
}