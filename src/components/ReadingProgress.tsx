// src/components/ReadingProgress.tsx
'use client';

import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector('article');
      if (article) {
        const totalHeight = article.clientHeight;
        const windowHeight = window.innerHeight;
        const scrolled = window.scrollY;
        const percentage = (scrolled / (totalHeight - windowHeight)) * 100;
        setProgress(Math.min(100, Math.max(0, percentage)));
      }
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div 
        className="h-full bg-blue-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;