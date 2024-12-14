import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import React from 'react';
import Image from 'next/image';
import mermaid from 'mermaid';
import TableOfContents from '@/components/TableOfContents';
import type { BundledLanguage } from 'shiki';
import dynamic from 'next/dynamic';


// Types
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

interface PreProps {
  children: React.ReactElement & { props: { className?: string; children: string } };
}

interface CodeProps {
  children?: string;
  className?: string;
}

// Utility Functions
const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Rehype Pretty Code Options
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

// MDX Components
const ObsidianImage = ({ content }: { content: string }) => {
  const imageName = content.replace(/!\[\[(.*?)\]\]/, '$1');
  const imagePath = `/iot-research/images/posts/geeni-glimpse/${imageName}`;
  
  return (
    <div className="relative w-full h-[300px] my-2">
      <Image
        src={imagePath}
        alt={imageName}
        fill
        className="object-contain"
        quality={90}
        loading="lazy"
      />
    </div>
  );
};

const ImageContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    {children}
  </div>
);

const MermaidDiagram = ({ content }: { content: string }) => {
  const [svg, setSvg] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);
  const elementId = React.useId();

  React.useEffect(() => {
    const initializeMermaid = async () => {
      try {
        await mermaid.initialize({
          startOnLoad: true,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#cdd6f4',
            primaryTextColor: '#cdd6f4',
            primaryBorderColor: '#45475a',
            lineColor: '#45475a',
            secondaryColor: '#1e1e2e',
            tertiaryColor: '#181825',
            background: '#1e1e2e',
            nodeBorder: '#45475a',
            edgeLabelBackground: '#181825',
            clusterBkg: '#1e1e2e',
            clusterBorder: '#45475a',
            labelBoxBkgColor: '#1e1e2e',
            labelBoxBorderColor: '#45475a',
            labelTextColor: '#cdd6f4',
          },
          flowchart: {
            htmlLabels: true,
            curve: 'basis',
            padding: 20,
            nodeSpacing: 50,
            rankSpacing: 50,
          },
          securityLevel: 'loose',
        });
      } catch (error) {
        console.error('Mermaid initialization error:', error);
      }
    };

    initializeMermaid();
  }, []);

  React.useEffect(() => {
    const renderDiagram = async () => {
      if (!content) return;

      try {
        // Clear any previous content
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = content;
        }

        // Render new diagram
        const { svg } = await mermaid.render(elementId, content);
        setSvg(svg);
        setError(null);
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError(err instanceof Error ? err.message : 'Error rendering diagram');
      }
    };

    renderDiagram();
  }, [content, elementId]);

  if (error) {
    return (
      <div className="p-4 my-4 bg-red-900/20 border border-red-500 rounded-lg text-red-500">
        Error rendering diagram: {error}
      </div>
    );
  }

  return (
    <div className="my-8 p-6 bg-base rounded-lg border border-surface0 shadow-lg overflow-x-auto">
      <div id={elementId} style={{ display: 'none' }} />
      <div
        className="mermaid-diagram"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
};

export const mdxComponents = {
  h1: ({ children }: HeadingProps) => {
    const id = slugify(children?.toString() || '');
    return (
      <h1 id={id} className="scroll-mt-24 text-3xl font-bold mt-8 mb-4">
        {children}
      </h1>
    );
  },
  h2: ({ children }: HeadingProps) => {
    const id = slugify(children?.toString() || '');
    return (
      <h2 id={id} className="scroll-mt-24 text-2xl font-bold mt-8 mb-4">
        {children}
      </h2>
    );
  },
  h3: ({ children }: HeadingProps) => {
    const id = slugify(children?.toString() || '');
    return (
      <h3 id={id} className="scroll-mt-24 text-xl font-bold mt-6 mb-2">
        {children}
      </h3>
    );
  },
  p: ({ children }: ParagraphProps) => {
    if (typeof children === 'string') {
      if (children.startsWith('![[')) {
        return <ObsidianImage content={children} />;
      }
      return <p className="my-4 leading-relaxed">{children}</p>;
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

    return <p className="my-4 leading-relaxed">{children}</p>;
  },
  pre: ({ children }: PreProps) => {
    if (
      React.isValidElement(children) &&
      children.props?.className?.includes('language-mermaid')
    ) {
      return <MermaidDiagram content={children.props.children.trim()} />;
    }

    return (
      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
        {children}
      </pre>
    );
  },
  code: ({ children, className }: CodeProps) => {
    if (className === 'language-mermaid') {
      return <MermaidDiagram content={children?.trim() || ''} />;
    }
  
    return (
      <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    );
  },
};

// Post Fetching Functions
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

// Main Post Component
type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Post({ params }: Props) {
  const resolvedParams = await params;
  const { frontmatter, content } = await getPost(resolvedParams.slug);

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
                    [rehypePrettyCode, rehypeOptions]
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