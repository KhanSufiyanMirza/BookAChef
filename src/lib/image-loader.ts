import { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  // For absolute URLs (external images)
  if (src.startsWith('https://') || src.startsWith('http://')) {
    return src;
  }
  
  // For relative URLs (local images)
  // In production (GitHub Pages), we need to prefix with the repo name
  const prefix = process.env.NODE_ENV === 'production' ? '/BookAChef' : '';
  return `${prefix}${src}?w=${width}&q=${quality}`;
} 