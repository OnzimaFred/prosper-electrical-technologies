import type { Metadata } from 'next';
import SitePage from '../site-page';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Request a quotation for electrical automation, panel building, generator services, hydropower works, industrial electrical maintenance or supplies in Uganda.',
  alternates: { canonical: '/request-quote/' },
};

export default function Page() {
  return <SitePage page="request-quote" />;
}
