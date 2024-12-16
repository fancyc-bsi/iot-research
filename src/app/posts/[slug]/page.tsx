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
    <div className="min-h-screen bg-base">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 h-[calc(100vh-4rem)] sticky top-16 shrink-0 overflow-y-auto border-r border-surface0">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-text mb-4">Table of Contents</h2>
            <TableOfContents content={content} />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-text mb-4">
                {frontmatter.title}
              </h1>
              <div className="flex items-center gap-2 text-subtext0">
                <time className="text-sm">{formattedDate}</time>
                {frontmatter.excerpt && (
                  <>
                    <span className="text-surface0">•</span>
                    <span className="text-sm">{frontmatter.excerpt}</span>
                  </>
                )}
              </div>
            </header>

            {/* Article Content */}
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
              prose-img:max-w-3xl
              prose-img:mx-auto
              prose-img:rounded-lg
              prose-img:shadow-lg
              prose-img:border
              prose-img:border-surface0
              prose-img:!my-8
              [&_figure]:my-8
              [&_figure]:mx-auto
              [&_figure]:max-w-3xl
              [&_figure>img]:!my-0
              [&_figure>figcaption]:text-center
              [&_figure>figcaption]:text-sm
              [&_figure>figcaption]:text-subtext0
              [&_figure>figcaption]:mt-2
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
              [&>blockquote]:px-4
              [&>blockquote]:py-2
              [&>table]:border-collapse
              [&>table]:w-full
              [&>table>thead>tr>th]:bg-surface0/50
              [&>table>thead>tr>th]:p-2
              [&>table>tbody>tr>td]:border
              [&>table>tbody>tr>td]:border-surface0
              [&>table>tbody>tr>td]:p-2
              divide-y divide-surface0">
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