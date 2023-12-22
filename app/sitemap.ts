import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://basalt-mobilier.fr',
      lastModified: new Date()
    },
    {
      url: 'https://basalt-mobilier.fr/mentions-legales',
      lastModified: new Date()
    },
    {
      url: 'https://basalt-mobilier.fr/politique-de-confidentialite',
      lastModified: new Date(),
    },
    {
      url: 'https://basalt-mobilier.fr/plan-du-site',
      lastModified: new Date(),
    },
    {
      url: 'https://basalt-mobilier.fr/category/2/hotels',
      lastModified: new Date()
    },
    {
      url: 'https://basalt-mobilier.fr/category/1/restaurants',
      lastModified: new Date()
    },
    {
      url: 'https://basalt-mobilier.fr/category/3/locations-saisonnieres',
      lastModified: new Date()
    },
    {
      url: 'https://basalt-mobilier.fr/category/5/moodboards',
      lastModified: new Date()
    },
    {
      url: 'https://basalt-mobilier.fr/category/6/tout-voir',
      lastModified: new Date()
    },
  ]
}