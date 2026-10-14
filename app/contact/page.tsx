import type { Metadata } from 'next';
import SitePage from '../site-page';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Prosper Electrical Technologies in Uganda for electrical engineering, automation, generator, hydropower and maintenance support. Call 0781 301 004.',
  alternates: { canonical: '/contact/' },
};

export default function Page() {
  return <SitePage page="contact" />;
}
