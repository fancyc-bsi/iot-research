'use client';

import React from 'react';
import mermaid from 'mermaid';

export default function MermaidDiagram({ content }: { content: string }) {
  const [svg, setSvg] = React.useState<string>('');
  const elementId = React.useId();

  React.useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#cdd6f4',
        primaryTextColor: '#cdd6f4',
        primaryBorderColor: '#45475a',
        lineColor: '#45475a',
        secondaryColor: '#1e1e2e',
        tertiaryColor: '#181825',
      },
      flowchart: {
        htmlLabels: true,
        curve: 'basis',
        padding: 20,
      },
      securityLevel: 'loose',
    });

    if (content) {
      mermaid.render(`mermaid-${elementId}`, content)
        .then(({ svg }) => {
          setSvg(svg);
        })
        .catch((error) => {
          console.error('Mermaid rendering error:', error);
        });
    }
  }, [content, elementId]);

  return (
    <div 
      className="my-8 p-6 bg-base rounded-lg border border-surface0 shadow-lg overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}