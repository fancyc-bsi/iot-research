// src/components/mdx-components.tsx
import React from 'react';
import Image from 'next/image';

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Custom component to handle Obsidian image syntax
const ObsidianImage = ({ content }: { content: string }) => {
  const imageName = content.replace(/!\[\[(.*?)\]\]/, '$1');
  const imagePath = `/images/posts/geeni-glimpse/${imageName}`;

  return (
    <Image
      src={imagePath}
      alt={imageName}
      width={1200}  // Increased width
      height={600}  // Increased height proportionally
      className="w-full object-contain my-2"
      quality={90}
      loading="lazy"
    />
  );
};

// Custom component to handle consecutive images
const ImageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  );
};

export const mdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => {
    const id = slugify(children?.toString() || '');
    return (
      <h1 id={id} className="scroll-mt-24 text-3xl font-bold mt-8 mb-4">
        {children}
      </h1>
    );
  },

  h2: ({ children }: { children: React.ReactNode }) => {
    const id = slugify(children?.toString() || '');
    return (
      <h2 id={id} className="scroll-mt-24 text-2xl font-bold mt-8 mb-4">
        {children}
      </h2>
    );
  },

  h3: ({ children }: { children: React.ReactNode }) => {
    const id = slugify(children?.toString() || '');
    return (
      <h3 id={id} className="scroll-mt-24 text-xl font-bold mt-6 mb-2">
        {children}
      </h3>
    );
  },

  // Handle raw text that includes Obsidian image syntax
  p: ({ children }: { children: React.ReactNode }) => {
    // If it's an image
    if (typeof children === 'string' && children.startsWith('![[')) {
      return <ObsidianImage content={children} />;
    }
    
    // If it's regular text
    if (typeof children === 'string' && !children.startsWith('![[')) {
      return <p className="my-4 leading-relaxed">{children}</p>;
    }

    // If it might be multiple images
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

    // Default case
    return <p className="my-4 leading-relaxed">{children}</p>;
  },

  // Pre-formatted code blocks
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4 w-full">
      {children}
    </pre>
  ),

  // Inline code
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-800 px-1 py-0.5 rounded text-sm whitespace-pre-wrap">
      {children}
    </code>
  ),
};