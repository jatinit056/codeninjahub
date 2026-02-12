import { programmingLanguages } from '@/lib/languagesData';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  // Language pages
  const languagePages = programmingLanguages.map((lang) => ({
    url: `${baseUrl}/languages/${lang.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...languagePages,
  ];
}
