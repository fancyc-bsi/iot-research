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
      {/* Header Banner */}
      <div className="w-full bg-surface0/10 border-b border-surface0/50">
        <div className="max-w-[1600px] mx-auto px-6 py-12 lg:py-16">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text mb-6 leading-tight">
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

      <div className="flex flex-col lg:flex-row">
        <aside className="hidden lg:block w-96 sticky top-16 h-[calc(100vh-4rem)] shrink-0 overflow-y-auto border-r border-surface0/50 p-6">
          <TableOfContents content={content} />
        </aside>

        {/* Main Content */}
        {/* <main className="flex-1 min-w-0"> */}
        <main className="flex-1 px-6 py-12">
          <article className="max-w-4xl mx-auto px-6 lg:px-16 py-12">
            <div className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-text 
              prose-headings:font-semibold
              prose-headings:scroll-mt-20
              prose-h1:text-4xl
              prose-h1:mt-20
              prose-h1:mb-10
              prose-h2:text-3xl
              prose-h2:mt-16
              prose-h2:mb-8
              prose-h3:text-2xl
              prose-h3:mt-12
              prose-h3:mb-6
              prose-p:text-subtext0 
              prose-p:leading-7
              prose-p:text-lg
              prose-p:my-6
              prose-a:text-blue 
              prose-a:no-underline
              prose-a:border-b
              prose-a:border-blue/30
              hover:prose-a:border-blue
              hover:prose-a:text-sapphire
              prose-strong:text-mauve
              prose-strong:font-semibold
              prose-code:text-peach
              prose-pre:my-10
              prose-pre:bg-mantle
              prose-pre:border
              prose-pre:border-surface0/50
              prose-pre:rounded-xl
              prose-pre:shadow-lg
              prose-img:rounded-xl
              prose-img:shadow-lg
              prose-img:border
              prose-img:border-surface0/50
              prose-img:my-10
              prose-figcaption:text-center
              prose-figcaption:text-base
              prose-figcaption:text-subtext0
              prose-figcaption:mt-4
              [&>*:first-child]:mt-0
              [&>pre]:p-8
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
              [&>blockquote]:not-italic
              [&>blockquote]:shadow-sm
              [&>table]:border-collapse
              [&>table]:w-full
              [&>table]:my-8
              [&>table>thead>tr>th]:bg-surface0/30
              [&>table>thead>tr>th]:p-3
              [&>table>tbody>tr>td]:border
              [&>table>tbody>tr>td]:border-surface0/50
              [&>table>tbody>tr>td]:p-3
              [&>ul]:pl-2
              [&>ol]:pl-2
              [&>ul>li]:mb-3
              [&>ol>li]:mb-3">
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

        {/* Right Sidebar - For additional content */}
        <div className="hidden 2xl:block w-72 h-[calc(100vh-4rem)] sticky top-16 shrink-0 overflow-y-auto border-l border-surface0/50">
          <div className="p-8">
          </div>
        </div>
      </div>
    </div>
  );
}