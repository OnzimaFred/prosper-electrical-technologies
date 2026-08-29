import type { Metadata } from 'next';
import './globals.css';

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
      <body>
        {children}
      </body>
    </html>
  );
}
