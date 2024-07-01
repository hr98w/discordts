import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://discordts.com',
      lastModified: new Date(),
    },
    {
      url: 'https://discordts.com/timestamp',
      lastModified: new Date(),
    },
  ]
}