'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const MermaidDiagram = dynamic(() => import('./MermaidDiagram'), {
  ssr: false,
  loading: () => (
    <div className="my-8 p-6 bg-base rounded-lg border border-surface0 shadow-lg">
      Loading diagram...
    </div>
  ),
});

export default function ClientMermaidDiagram({ content }: { content: string }) {
  return <MermaidDiagram content={content} />;
}