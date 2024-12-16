'use client';

import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

const TableOfContents = ({ content }: { content: string }) => {
  const [activeId, setActiveId] = useState<string>('');

  // Parse headers from markdown content, ignoring code blocks
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
      if (line.startsWith(' ') || line.startsWith('\t')) {
        return;
      }

      // Only process headers if we're not in a code block
      if (!isInCodeBlock) {
        // Match both h1 and h2 headers
        const match = line.trim().match(/^(#{1,2})\s+([^#].*)$/);
        if (match) {
          // Check if previous line is blank or start of file
          const prevLine = index > 0 ? lines[index - 1].trim() : '';
          if (prevLine === '') {
            const title = match[2].trim();
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
      rootMargin: '-100px 0px -80% 0px'
    });

    // Observe both h1 and h2 elements
    const headers = document.querySelectorAll('h1, h2');
    headers.forEach((header) => observer.observe(header));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll function with offset
  const scrollToHeader = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 32;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  const headers = getHeaders(content);
  if (headers.length === 0) return null;

  return (
    <nav className="text-sm">
      <ul className="space-y-2">
        {headers.map((header) => (
          <li key={header.id}>
            <button
              onClick={() => scrollToHeader(header.id)}
              className={`group flex items-center w-full text-left transition-colors
                ${
                  activeId === header.id
                    ? 'text-blue font-medium'
                    : 'text-subtext0 hover:text-blue'
                }`}
            >
              <ChevronRight 
                className={`h-4 w-4 mr-2 transition-colors
                  ${
                    activeId === header.id
                      ? 'text-blue'
                      : 'text-surface0 group-hover:text-blue'
                  }`}
              />
              <span className="line-clamp-2">{header.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;