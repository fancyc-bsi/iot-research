'use client';

import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

const TableOfContents = ({ content }: { content: string }) => {
  const [activeId, setActiveId] = useState<string>('');

  const getHeaders = (markdown: string): TOCItem[] => {
    const headers: TOCItem[] = [];
    const lines = markdown.split('\n');
    let isInCodeBlock = false;

    lines.forEach((line, index) => {
      if (line.trim().startsWith('```') || line.trim().match(/^~~~+/)) {
        isInCodeBlock = !isInCodeBlock;
        return;
      }
      if (line.startsWith(' ') || line.startsWith('\t')) {
        return;
      }
      if (!isInCodeBlock) {
        const match = line.trim().match(/^(#{1,2})\s+([^#].*)$/);
        if (match) {
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
    const headers = document.querySelectorAll('h1, h2');
    headers.forEach((header) => observer.observe(header));
    return () => observer.disconnect();
  }, []);

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
    <div className="bg-surface0/30 rounded-lg p-4 backdrop-blur-sm">
      <h2 className="text-lg font-semibold text-text mb-4 px-2">
        Table of Contents
      </h2>
      <nav className="text-base">
        <ul className="space-y-1">
          {headers.map((header) => (
            <li key={header.id}>
              <button
                onClick={() => scrollToHeader(header.id)}
                className={`group flex items-center w-full px-4 py-2.5 rounded-md transition-all
                  ${
                    activeId === header.id
                      ? 'bg-blue/10 text-blue font-medium'
                      : 'text-subtext0 hover:bg-surface0/50 hover:text-text'
                  }`}
              >
                <ChevronRight
                  className={`h-4 w-4 mr-3 flex-shrink-0 transition-transform
                    ${
                      activeId === header.id
                        ? 'text-blue transform rotate-90'
                        : 'text-surface1 group-hover:text-text'
                    }`}
                />
                <span className="truncate">{header.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;