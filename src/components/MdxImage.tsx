import Image from 'next/image';

interface MdxImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const MdxImage = ({ src, alt = '', className = '' }: MdxImageProps) => {
  const getImagePath = (src: string) => {
    // Handle ![[Pasted image YYYYMMDDHHMMSS.png]] format
    const obsidianMatch = src.match(/!\[\[Pasted image (\d{14})\.png\]\]/);
    if (obsidianMatch) {
      return `/iot-research/images/posts/geeni-glimpse/Pasted image ${obsidianMatch[1]}.png`;
    }

    // Handle regular markdown ![alt](path) format
    const markdownMatch = src.match(/!\[(.*?)\]\((.*?)\)/);
    if (markdownMatch) {
      return `/iot-research${markdownMatch[2]}`;
    }

    // If the path is already clean, just use it
    if (src.startsWith('/') || src.startsWith('./') || src.startsWith('http')) {
      return src.startsWith('/') ? `/iot-research${src}` : src;
    }

    // For any other format, assume it's a direct path in the public/images folder
    return `/iot-research/images/${src}`;
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