import React from 'react';
import Image from 'next/image';
import Mermaid from 'mermaid';

// interface MDXComponentProps {
//   children?: React.ReactNode;
//   className?: string;
// }

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
    <div className="relative w-full h-[400px] my-4">
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

const ImageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4">
      {children}
    </div>
  );
};

const MermaidDiagram = ({ content }: { content: string }) => {
  const [svg, setSvg] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const renderDiagram = async () => {
      try {
        await Mermaid.initialize({
          startOnLoad: true,
          theme: 'dark',
          securityLevel: 'loose',
        });

        const { svg } = await Mermaid.render('mermaid-svg-' + Math.random(), content);
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
  }, [content]);

  if (error) {
    return <div className="text-red-500">Error rendering diagram: {error}</div>;
  }

  return (
    <div 
      className="my-8 overflow-x-auto"
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
      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4 w-full">
        {children}
      </pre>
    );
  },
  code: ({ children, className }: CodeProps) => {
    if (className === 'language-mermaid') {
      return <MermaidDiagram content={children || ''} />;
    }
  
    return (
      <code className="bg-gray-800 px-1 py-0.5 rounded text-sm whitespace-pre-wrap">
        {children}
      </code>
    );
  },
};