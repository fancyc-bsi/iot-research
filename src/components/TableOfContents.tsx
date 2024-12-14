'use client';

// src/components/TableOfContents.tsx
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

const TableOfContents = ({ content }: { content: string }) => {
  const [activeId, setActiveId] = useState<string>('');
  
  // Parse only true h1 headers from markdown content, ignoring code blocks
  const getHeaders = (markdown: string): TOCItem[] => {
    const headers: TOCItem[] = [];
    const lines = markdown.split('\n');
    let isInCodeBlock = false;
    
    lines.forEach((line, index) => {
      // Check for code block delimitation
      if (line.trim().startsWith('```') || line.trim().match(/^~~~+/)) {
        isInCodeBlock = !isInCodeBlock;
        return;
      }

      // Skip indented code blocks (4 spaces or tab)
      if (line.startsWith('    ') || line.startsWith('\t')) {
        return;
      }

      // Only process headers if we're not in a code block
      if (!isInCodeBlock) {
        // Strict match for markdown h1 headers at the start of the line
        const match = line.trim().match(/^#\s+([^#].*)$/);
        if (match) {
          // Check if previous line is blank or start of file
          const prevLine = index > 0 ? lines[index - 1].trim() : '';
          if (prevLine === '') {  // Only consider headers that have a blank line before them
            const title = match[1].trim();
            const id = title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            headers.push({ id, title });
          }
        }
      }
    });
    
    return headers;
  };

  // Set up intersection observer for active header tracking
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-80px 0px -80% 0px'
    });

    // Only observe h1 elements
    const headers = document.querySelectorAll('h1');
    headers.forEach((header) => observer.observe(header));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll function with offset
  const scrollToHeader = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64; // Height of your navigation bar
      const offset = element.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  const headers = getHeaders(content);

  if (headers.length <= 1) return null; // Don't show TOC if there's only one or no headers

  return (
    <nav className="hidden lg:block fixed left-8 top-24 w-64 overflow-y-auto max-h-[calc(100vh-8rem)]">
      <div className="border-l-2 border-gray-700 pl-4">
        <h2 className="text-sm font-semibold text-gray-400 mb-4">Main Sections</h2>
        <ul className="space-y-3">
          {headers.map((header) => (
            <li key={header.id}>
              <button
                onClick={() => scrollToHeader(header.id)}
                className={`text-sm flex items-center hover:text-blue-400 w-full text-left ${
                  activeId === header.id
                    ? 'text-blue-500 font-medium'
                    : 'text-gray-400'
                }`}
              >
                <ChevronRight className={`h-3 w-3 mr-1 flex-shrink-0 ${
                  activeId === header.id ? 'text-blue-500' : 'text-gray-600'
                }`} />
                <span className="line-clamp-2">{header.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;