import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://discordts.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://discordts.com',
          "en-UK": 'https://discordts.com/en-UK',
          "zh-CN": 'https://discordts.com/zh-CN',
          "zh-TW": 'https://discordts.com/zh-TW',
          "ja": 'https://discordts.com/ja',
          "ar": 'https://discordts.com/ar',
          "es": 'https://discordts.com/es',
          "ru": 'https://discordts.com/ru',
          "ko": 'https://discordts.com/ko',
          "de": 'https://discordts.com/de',
          "fr": 'https://discordts.com/fr',
        },
      },
    },
    {
      url: 'https://discordts.com/timestamp',
      lastModified: new Date(),
    },
  ]
}