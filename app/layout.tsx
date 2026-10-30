import type {Metadata} from 'next';
import {Outfit, Plus_Jakarta_Sans, JetBrains_Mono} from 'next/font/google';
import {LanguageProvider} from '@/lib/i18n/context';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
