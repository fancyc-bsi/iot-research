import Image from 'next/image';

interface MdxImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const MdxImage = ({ src, alt = '', className = '' }: MdxImageProps) => {
  // Handle Obsidian-style image paths
  const getImagePath = (src: string) => {
    // Handle ![[Pasted image YYYYMMDDHHMMSS.png]] format
    const obsidianMatch = src.match(/!\[\[Pasted image (\d{14})\.png\]\]/);
    if (obsidianMatch) {
      return `/images/posts/geeni-glimpse/image_${obsidianMatch[1]}.png`;
    }

    // Handle regular markdown ![alt](path) format
    const markdownMatch = src.match(/!\[(.*?)\]\((.*?)\)/);
    if (markdownMatch) {
      return markdownMatch[2];
    }

    // If the path is already clean, just use it
    if (src.startsWith('/') || src.startsWith('./') || src.startsWith('http')) {
      return src;
    }

    // For any other format, assume it's a direct path in the public/images folder
    return `/images/${src}`;
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