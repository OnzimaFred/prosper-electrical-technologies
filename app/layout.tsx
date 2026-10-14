import type { Metadata } from 'next';
import './globals.css';
import './executive.css';

const siteUrl = 'https://prosper-apps.net';
const siteName = 'Prosper Electrical Technologies';
const defaultTitle = 'Prosper Electrical Technologies – Electrical Automation & Power Engineering Uganda';
const description = 'Prosper Electrical Technologies – SMC Limited provides electrical automation, panel building, standby generator services, hydropower electrical works, industrial electrical maintenance and technical supplies in Uganda.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: `%s | ${siteName}` },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: '/',
    siteName,
    title: defaultTitle,
    description,
    images: [{ url: '/prosper-logo.jpeg', width: 1393, height: 1274, alt: 'Prosper Electrical Technologies logo' }],
  },
  twitter: { card: 'summary', title: defaultTitle, description, images: ['/prosper-logo.jpeg'] },
  icons: { icon: '/favicon.svg' },
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Prosper Electrical Technologies – SMC Limited',
  alternateName: siteName,
  url: siteUrl,
  logo: `${siteUrl}/prosper-logo.jpeg`,
  email: 'info@prosper-apps.net',
  telephone: '+256781301004',
  description,
  areaServed: { '@type': 'Country', name: 'Uganda' },
  address: { '@type': 'PostalAddress', addressCountry: 'UG' },
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'customer service', telephone: '+256781301004', email: 'info@prosper-apps.net', areaServed: 'UG', availableLanguage: 'English' },
    { '@type': 'ContactPoint', contactType: 'technical support', telephone: '+256754895055', areaServed: 'UG', availableLanguage: 'English' },
  ],
  knowsAbout: ['Electrical automation', 'PLC and SCADA systems', 'Electrical panel building', 'Standby diesel generators', 'ATS and AMF systems', 'Hydropower electrical works', 'Industrial electrical maintenance', 'Instrumentation and control'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        {children}
      </body>
    </html>
  );
}
