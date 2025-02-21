"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface MdxImageProps {
  src: string;
  alt?: string;
  className?: string;
  postSlug?: string;
}

const MdxImage = ({ src, alt = '', className = '', postSlug }: MdxImageProps) => {
  const pathname = usePathname();
  const slug = postSlug || pathname.split('/').pop();

  const getImagePath = (src: string) => {
    // console.log("Original src:", src);
  
    // Handle Obsidian-style pasted images
    const obsidianMatch = src.match(/!\[\[\s*Pasted image (\d{14})\.png\s*\]\]/i);
    if (obsidianMatch) {
      return `/iot-research/images/posts/${slug}/Pasted image ${obsidianMatch[1]}.png`;
    }
  
    // Handle standard Markdown format
    const markdownMatch = src.match(/!\[(.*?)\]\((.*?)\)/);
    if (markdownMatch) {
      return `/iot-research${markdownMatch[2]}`;
    }
  
    // Ensure correct prefix for direct src values
    if (src.startsWith('/') || src.startsWith('./') || src.startsWith('http')) {
      return src.startsWith('/') ? `/iot-research${src}` : src;
    }
  
    // Default to ensuring the proper base path
    return `/iot-research/images/posts/${slug}/${src}`;
  };
  
  

  const imagePath = getImagePath(src);

  return (
    <div className="relative w-full h-[400px] my-8">
      <Image
        src={imagePath}
        alt={alt}
        fill
        className={`object-contain ${className}`}
      />
    </div>
  );
};

export default MdxImage;
