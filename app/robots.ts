import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/projectmanager/',
    },
    sitemap: 'https://basalt-mobilier.fr/sitemap.xml',
  }
}