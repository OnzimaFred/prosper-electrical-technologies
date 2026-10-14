import type { Metadata } from 'next';
import SitePage from '../../site-page';

export const serviceSlugs = ['automation', 'panel-building', 'generator-services', 'hydropower', 'industrial-electrical', 'instrumentation'];

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

const titles: Record<string, string> = {
  automation: 'Electrical Automation & Control Systems',
  'panel-building': 'Electrical Panel Design & Building',
  'generator-services': 'Standby Diesel Generator Services',
  hydropower: 'Hydropower Plant Electrical Works',
  'industrial-electrical': 'Industrial Electrical Works & Maintenance',
  instrumentation: 'Instrumentation & Control',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = titles[slug] ?? 'Engineering Services';
  return {
    title,
    description: `Professional ${title.toLowerCase()} services in Uganda from Prosper Electrical Technologies – SMC Limited.`,
    alternates: { canonical: `/services/${slug}/` },
    openGraph: { title, url: `/services/${slug}/` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SitePage page="services" serviceSlug={slug} />;
}
