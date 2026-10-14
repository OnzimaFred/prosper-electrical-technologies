import type { MetadataRoute } from 'next';
import { serviceSlugs } from './services/[slug]/page';

export const dynamic = 'force-static';

const siteUrl = 'https://prosper-apps.net';
const pages = ['', 'about/', 'services/', 'industries/', 'projects/', 'products/', 'contact/', 'request-quote/'];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({ url: `${siteUrl}/${path}`, changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.8 })),
    ...serviceSlugs.map((slug) => ({ url: `${siteUrl}/services/${slug}/`, changeFrequency: 'monthly' as const, priority: 0.9 })),
  ];
}
