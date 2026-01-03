'use client'

import Image from 'next/image'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  priority?: boolean
  width?: number
  height?: number
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

export default function SmartImage({
  src,
  alt,
  className,
  fill,
  priority = false,
  width,
  height,
  objectFit = 'cover',
}: SmartImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        style={{ objectFit }}
        unoptimized
      />
    )
  }

  if (!width || !height) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ objectFit }}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{ objectFit }}
      unoptimized
    />
  )
}

