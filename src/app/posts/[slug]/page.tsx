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
      {/* Header Section */}
      <header className="fixed top-16 left-0 right-0 z-10 bg-base/80 backdrop-blur-sm border-b border-surface0">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-text">{frontmatter.title}</h1>
            <div className="flex items-center gap-2 mt-2 text-subtext0">
              <time className="text-sm">{formattedDate}</time>
              <span className="text-surface0">•</span>
              <span className="text-sm">{frontmatter.excerpt}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-44 pb-16 flex justify-between max-w-[1600px] mx-auto">
        {/* Table of Contents Sidebar */}
        <aside className="hidden lg:block w-72 fixed left-0 top-44 h-[calc(100vh-11rem)] overflow-y-auto border-r border-surface0">
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-text mb-4">Table of Contents</h2>
            <TableOfContents content={content} />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full lg:w-[calc(100%-18rem)] lg:ml-72">
          <article className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-text 
              prose-headings:scroll-mt-32
              prose-h1:text-4xl
              prose-h2:text-3xl
              prose-h3:text-2xl
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
              prose-img:rounded-lg
              prose-img:shadow-lg
              prose-img:border
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
  );
}