// src/components/MdxImage.tsx
import Image from 'next/image';
import path from 'path';

interface MdxImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const MdxImage = ({ src, alt = '', className = '' }: MdxImageProps) => {
  // Handle Obsidian-style image paths
  const getImagePath = (src: string) => {
    // Extract filename from Obsidian format: ![[Pasted image 20241206103431.png]]
    const match = src.match(/Pasted image (\d{14})\.png/);
    if (match) {
      return `/images/posts/geeni-glimpse/image_${match[1]}.png`;
    }
    // Return original path if not in Obsidian format
    return src;
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