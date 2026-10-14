import type { Metadata } from 'next';
import SitePage from '../site-page';

export const metadata: Metadata = {
  title: 'Engineering Services',
  description: 'Electrical automation, PLC and control systems, panel building, standby generator services, hydropower electrical works, industrial electrical maintenance and instrumentation in Uganda.',
  alternates: { canonical: '/services/' },
};

export default function Page() {
  return <SitePage page="services" />;
}
