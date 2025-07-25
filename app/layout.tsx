import './globals.css';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu'
});

export const metadata: Metadata = {
  title: 'Portfolio - Jessica RAKOTOZAFY',
  description: 'Portfolio professionnel spécialisé en prospection commerciale B2B et automatisation des ventes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={ubuntu.variable}>
      <body className={`${ubuntu.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}