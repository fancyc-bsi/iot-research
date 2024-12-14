// src/components/PostCard.tsx
import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime?: string;
}

const PostCard = ({ slug, title, date, excerpt, readingTime = '5 min read' }: PostCardProps) => {
  return (
    <div className="bg-mantle rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-surface0 hover:border-surface1">
      <Link href={`/posts/${slug}`}>
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-subtext0 mb-3">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <time>{new Date(date).toLocaleDateString()}</time>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{readingTime}</span>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-text mb-3 line-clamp-2">
            {title}
          </h2>
          
          <p className="text-subtext1 mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center text-blue hover:text-sapphire transition-colors duration-200">
            <span className="text-sm font-medium">Read more</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;