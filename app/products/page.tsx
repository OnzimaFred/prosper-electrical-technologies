import type { Metadata } from 'next';
import SitePage from '../site-page';

export const metadata: Metadata = {
  title: 'Products & Supplies',
  description: 'Electrical components, circuit breakers, contactors, cables, PLC components, sensors, generator spares, instrumentation and safety items supplied in Uganda.',
  alternates: { canonical: '/products/' },
};

export default function Page() {
  return <SitePage page="products" />;
}
