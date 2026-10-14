import type { Metadata } from 'next';
import SitePage from '../site-page';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Electrical engineering, automation, panel building, generator and hydropower projects delivered by Prosper Electrical Technologies in Uganda.',
  alternates: { canonical: '/projects/' },
};

export default function Page() {
  return <SitePage page="projects" />;
}
