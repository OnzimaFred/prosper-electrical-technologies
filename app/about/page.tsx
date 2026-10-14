import type { Metadata } from 'next';
import SitePage from '../site-page';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Prosper Electrical Technologies – SMC Limited is a Ugandan electrical engineering and technical services company serving energy, industrial, commercial and infrastructure operations.',
  alternates: { canonical: '/about/' },
};

export default function Page() {
  return <SitePage page="about" />;
}
