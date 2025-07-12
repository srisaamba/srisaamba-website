'use client';

export const cloudinaryLoader = ({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `https://res.cloudinary.com/ddhfjoo0u/image/upload/c_limit,w_${width},q_${quality || 'auto'}/v1752315391/${src}`;
};