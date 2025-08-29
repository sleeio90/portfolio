import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Elabzone - Creazione Siti Web Professionali',
  description: 'Specialisti nella creazione di siti web per B&B, case vacanze, ristoranti e portfolio. Design moderno e ottimizzato per i motori di ricerca.',
  keywords: 'siti web, b&b, case vacanze, ristoranti, portfolio, web design, siti vetrina, elabzone',
  metadataBase: new URL('https://www.elabzone.it'),
  openGraph: {
    title: 'Elabzone - Creazione Siti Web Professionali',
    description: 'Specialisti nella creazione di siti web per B&B, case vacanze, ristoranti e portfolio',
    url: 'https://www.elabzone.it',
    siteName: 'Elabzone',
    locale: 'it_IT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
