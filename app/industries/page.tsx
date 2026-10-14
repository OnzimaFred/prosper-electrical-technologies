import type { Metadata } from 'next';
import SitePage from '../site-page';

export const metadata: Metadata = {
  title: 'Industries We Support',
  description: 'Electrical, automation and power engineering support for hydropower, manufacturing, commercial facilities, construction, agriculture, institutions and telecommunications in Uganda.',
  alternates: { canonical: '/industries/' },
};

export default function Page() {
  return <SitePage page="industries" />;
}
