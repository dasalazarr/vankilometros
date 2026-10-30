import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {LanguageProvider} from '@/lib/i18n/context';
import './globals.css';

const outfit = localFont({
  src: [
    {path: '../node_modules/@fontsource/outfit/files/outfit-latin-600-normal.woff2', weight: '600', style: 'normal'},
    {path: '../node_modules/@fontsource/outfit/files/outfit-latin-700-normal.woff2', weight: '700', style: 'normal'},
  ],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakarta = localFont({
  src: [
    {path: '../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-400-normal.woff2', weight: '400', style: 'normal'},
    {path: '../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-500-normal.woff2', weight: '500', style: 'normal'},
    {path: '../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-600-normal.woff2', weight: '600', style: 'normal'},
    {path: '../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-700-normal.woff2', weight: '700', style: 'normal'},
  ],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrainsMono = localFont({
  src: [
    {path: '../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2', weight: '400', style: 'normal'},
    {path: '../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff2', weight: '500', style: 'normal'},
    {path: '../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff2', weight: '600', style: 'normal'},
  ],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kilómetros con Propósito · Fase piloto Ecuador',
  description:
    'Docuserie viva, estudio móvil y motor permanente de recaudación y alianzas para el servicio rotario en el Distrito 4400 de Ecuador.',
  openGraph: {
    title: 'Kilómetros con Propósito: Ecuador',
    description:
      'Documentación audiovisual de proyectos rotarios en Ecuador durante seis meses, solo sábados y domingos. Fase piloto · Distrito 4400.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kilómetros con Propósito: Ecuador',
    description:
      'Documentación audiovisual de proyectos rotarios en Ecuador durante seis meses, solo sábados y domingos. Fase piloto · Distrito 4400.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#F8FAFC] text-[#0A2540] antialiased selection:bg-[#F59E0B]/20 selection:text-[#0A2540]"
        style={{fontFamily: 'var(--font-jakarta), sans-serif'}}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
