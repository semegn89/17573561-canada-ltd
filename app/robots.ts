import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: process.env.NODE_ENV === 'production'
      ? 'https://semegn89.github.io/17573561-canada-ltd/sitemap.xml'
      : 'http://localhost:3000/sitemap.xml',
  }
}

