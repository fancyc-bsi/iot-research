import Image from 'next/image';
import { useRouter } from 'next/router';

interface MdxImageProps {
  src: string;
  alt?: string;
  className?: string;
  postSlug?: string;
}

const MdxImage = ({ src, alt = '', className = '', postSlug }: MdxImageProps) => {
  const router = useRouter();
  const slug = postSlug || router.query.postSlug;

  const getImagePath = (src: string) => {
    // Handle Obsidian-style pasted images
    const obsidianMatch = src.match(/!\[\[\s*Pasted image (\d{14})\.png\s*\]\]/i);
    if (obsidianMatch) {
      const imageName = `Pasted image ${obsidianMatch[1]}.png`.replace(/ /g, '%20'); // Encode spaces
      return `/iot-research/images/posts/${slug}/${imageName}`;
    }
  
    // Handle standard Markdown format
    const markdownMatch = src.match(/!\[(.*?)\]\((.*?)\)/);
    if (markdownMatch) {
      return `/iot-research${markdownMatch[2]}`;
    }
  
    if (src.startsWith('/') || src.startsWith('./') || src.startsWith('http')) {
      return src.startsWith('/') ? `/iot-research${src.replace(/ /g, '%20')}` : src;
    }
  
    return `/iot-research/images/posts/${slug}/${src.replace(/ /g, '%20')}`;
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
