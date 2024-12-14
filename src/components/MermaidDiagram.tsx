'use client';

import React from 'react';
import mermaid from 'mermaid';

export default function MermaidDiagram({ content }: { content: string }) {
  const [svg, setSvg] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);
  const elementId = React.useId();

  React.useEffect(() => {
    const initializeMermaid = async () => {
      try {
        await mermaid.initialize({
          startOnLoad: true,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#cdd6f4',
            primaryTextColor: '#cdd6f4',
            primaryBorderColor: '#45475a',
            lineColor: '#45475a',
            secondaryColor: '#1e1e2e',
            tertiaryColor: '#181825',
            background: '#1e1e2e',
            nodeBorder: '#45475a',
            edgeLabelBackground: '#181825',
            clusterBkg: '#1e1e2e',
            clusterBorder: '#45475a',
            labelBoxBkgColor: '#1e1e2e',
            labelBoxBorderColor: '#45475a',
            labelTextColor: '#cdd6f4',
          },
          flowchart: {
            htmlLabels: true,
            curve: 'basis',
            padding: 20,
            nodeSpacing: 50,
            rankSpacing: 50,
          },
          securityLevel: 'loose',
        });

        if (content) {
          const { svg } = await mermaid.render(`mermaid-${elementId}`, content);
          setSvg(svg);
          setError(null);
        }
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError(err instanceof Error ? err.message : 'Error rendering diagram');
      }
    };

    initializeMermaid();
  }, [content, elementId]);

  if (error) {
    return (
      <div className="p-4 my-4 bg-red-900/20 border border-red-500 rounded-lg text-red-500">
        Error rendering diagram: {error}
      </div>
    );
  }

  return (
    <div className="my-8 p-6 bg-base rounded-lg border border-surface0 shadow-lg overflow-x-auto">
      <div id={elementId} style={{ display: 'none' }} />
      <div
        className="mermaid-diagram"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}