import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Prosper Electrical Technologies – Electrical Automation & Power Engineering Uganda',
  description: 'Prosper Electrical Technologies – SMC Limited provides electrical automation, panel building, standby generator services, hydropower electrical works, industrial electrical maintenance and technical supplies in Uganda.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
