import React from 'react';
import Image from 'next/image';
import mermaid from 'mermaid';

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

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

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
  const diagramId = React.useId();

  React.useEffect(() => {
    const renderDiagram = async () => {
      try {
        // Initialize mermaid with custom config
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          securityLevel: 'loose',
          flowchart: {
            curve: 'basis',
            padding: 20
          },
          themeVariables: {
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '16px',
            lineColor: '#666',
            mainBkg: '#1a1a1a',
            textColor: '#fff'
          }
        });

        const { svg } = await mermaid.render(`mermaid-${diagramId}`, content);
        setSvg(svg);
        setError(null);
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError(err instanceof Error ? err.message : 'Error rendering diagram');
      }
    };

    if (content) {
      renderDiagram();
    }
  }, [content, diagramId]);

  if (error) {
    return (
      <div className="p-4 my-4 bg-red-900/20 border border-red-500 rounded-lg text-red-500">
        Error rendering diagram: {error}
      </div>
    );
  }

  return (
    <div 
      className="my-4 p-4 bg-gray-900/50 rounded-lg overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
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
      return <MermaidDiagram content={children.props.children} />;
    }

    return (
      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
        {children}
      </pre>
    );
  },
  code: ({ children, className }: CodeProps) => {
    if (className === 'language-mermaid') {
      return <MermaidDiagram content={children || ''} />;
    }
  
    return (
      <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    );
  },
};