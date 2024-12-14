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

const options = {
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
      langs: ['typescript', 'javascript', 'jsx', 'tsx'] as BundledLanguage[],
    });
  },
  filterMetaString: (str: string) => str,
  transformMetaString: (str: string) => str,
  customStyle: {
    'pre': {
      background: 'var(--mantle)',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid var(--surface0)',
    },
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
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Post({ params, searchParams }: Props) {
  const { frontmatter, content } = await getPost(params.slug);

  return (
    <div className="min-h-screen bg-base pt-16">
      <div className="flex justify-between">
        <div className="hidden lg:block w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-mantle border-r border-surface0">
          <div className="px-4 py-6">
            <TableOfContents content={content} />
          </div>
        </div>

        <article className="flex-1 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:ml-64">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-text mb-2">
              {frontmatter.title}
            </h1>
            <time className="text-subtext0">
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>

          <div className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-text 
            prose-p:text-subtext0 
            prose-a:text-blue hover:prose-a:text-sapphire
            prose-strong:text-mauve
            prose-code:text-peach
            [&>pre]:!bg-mantle
            [&>pre]:border
            [&>pre]:border-surface0
            [&>pre]:rounded-lg
            [&>pre]:shadow-lg">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [],
                  rehypePlugins: [
                    [rehypePrettyCode, options]
                  ],
                  format: 'mdx'
                }
              }}
              components={mdxComponents}
            />
          </div>
        </article>

        <div className="hidden lg:block w-64 shrink-0" />
      </div>
    </div>
  );
}