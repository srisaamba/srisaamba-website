interface CloudinaryImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  fill?: boolean;
  fill?: boolean;
}

export default function CloudinaryImage({ 
  src, 
  alt, 
  className = "", 
  width = 800, 
  height = 600, 
  quality = 85,
  fill = false
  fill = false
}: CloudinaryImageProps) {
  const cloudinaryUrl = fill 
    ? `https://res.cloudinary.com/ddhfjoo0u/image/upload/c_fill,q_${quality || "auto"}/v1752315391/${src}`
    : `https://res.cloudinary.com/ddhfjoo0u/image/upload/c_limit,w_${width},q_${quality || "auto"}/v1752315391/${src}`;

  const imageClassName = fill 
    ? `absolute inset-0 w-full h-full ${className}`
    : className;

  if (fill) {
    return (
      <img
        src={cloudinaryUrl}
        alt={alt}
        className={`${className} absolute inset-0 w-full h-full object-cover`}
        loading="lazy"
      />
    );
  }

  return (
    <img
      src={cloudinaryUrl}
      alt={alt}
      className={imageClassName}
      loading="lazy"
      width={fill ? undefined : width}
      height={fill ? undefined : height}
    />
  );
}