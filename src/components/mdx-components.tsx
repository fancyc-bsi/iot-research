'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Client component for Mermaid diagrams
const ClientMermaidDiagram = dynamic(
  () => import('./MermaidDiagram'),
  {
    loading: () => (
      <div className="my-8 p-6 bg-base rounded-lg border border-surface0 shadow-lg">
        Loading diagram...
      </div>
    ),
  }
);

// Types
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
      return <ClientMermaidDiagram content={children.props.children.trim()} />;
    }

    return (
      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
        {children}
      </pre>
    );
  },
  code: ({ children, className }: CodeProps) => {
    if (className === 'language-mermaid') {
      return <ClientMermaidDiagram content={children?.trim() || ''} />;
    }
  
    return (
      <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    );
  },
};