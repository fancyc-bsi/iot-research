import React from 'react';
import Image from 'next/image';
import Mermaid from 'mermaid';

// Define component prop interfaces
interface MDXComponentProps {
  children?: React.ReactNode;
  className?: string;
}

// type MDXComponents = {
//   h1: React.FC<MDXComponentProps>;
//   h2: React.FC<MDXComponentProps>;
//   h3: React.FC<MDXComponentProps>;
//   p: React.FC<MDXComponentProps>;
//   pre: React.FC<MDXComponentProps>;
//   code: React.FC<MDXComponentProps>;
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

  React.useEffect(() => {
    Mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
    });

    Mermaid.render('mermaid-svg', content)
      .then(({ svg }) => {
        setSvg(svg);
      })
      .catch(console.error);
  }, [content]);

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
      return <MermaidDiagram content={children.props.children as string} />;
    }

    return (
      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4 w-full">
        {children}
      </pre>
    );
  },
  code: (props: MDXComponentProps) => {
    if (props.className === 'language-mermaid') {
      return <MermaidDiagram content={props.children as string} />;
    }
  
    return (
      <code className="bg-gray-800 px-1 py-0.5 rounded text-sm whitespace-pre-wrap">
        {props.children}
      </code>
    );
  },  
};