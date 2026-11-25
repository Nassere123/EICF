import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClientShell } from '@/components/ClientShell'
import 'leaflet/dist/leaflet.css'
import './globals.css'

/* Titres : Libre Baskerville (Design System Charity Organization) */
const fontHeading = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

/* Texte courant & interface : Inter */
const fontBody = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ongeicf.org'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ONG EICF — Ensemble Imaginons et Construisons le Futur | Organisation Non Gouvernementale',
    template: '%s | ONG EICF',
  },
  description:
    'Organisation Non Gouvernementale ivoirienne créée le 1er février 2008. Reconnue pour son expertise fiduciaire et communautaire en Eau & Assainissement, Genre, Éducation, Insertion des Jeunes et Consolidation de la Paix. Partenaire de la Banque mondiale, UNICEF, UNFPA et PNUD.',
  keywords: [
    'ONG EICF',
    'ONG Côte d’Ivoire',
    'Ensemble Imaginons et Construisons le Futur',
    'Développement communautaire Côte d’Ivoire',
    'Eau et assainissement rural',
    'Projet PASEA Banque mondiale',
    'Projet SWEDD Côte d’Ivoire',
    'Espaces sûrs adolescentes',
    'PEJEDEC Banque mondiale BCP-Emploi',
    'Classes passerelles UNICEF',
    'Consolidation de la paix PNUD',
    'Inclusion financière caisses AVEC',
    'ONG Katiola Bouna Boundiali San Pédro',
    'Aide humanitaire Côte d’Ivoire',
    'Gouvernance ONG SYSCOHADA',
  ],
  authors: [{ name: 'ONG EICF', url: siteUrl }],
  creator: 'ONG EICF',
  publisher: 'ONG EICF',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    url: siteUrl,
    siteName: 'ONG EICF — Ensemble Imaginons et Construisons le Futur',
    title: 'ONG EICF — 18 ans d’action continue au service des communautés en Côte d’Ivoire',
    description:
      'Organisation Non Gouvernementale ivoirienne de développement communautaire, partenaire d’exécution certifié de la Banque mondiale, de l’UNICEF, de l’UNFPA et du PNUD.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'ONG EICF — Actions de développement communautaire sur le terrain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ONG EICF — Ensemble Imaginons et Construisons le Futur',
    description:
      '18 ans d’impact certifié en Côte d’Ivoire : Eau-Assainissement, Genre & Droits des filles, Insertion des jeunes, Éducation et Paix.',
    images: ['/images/hero.jpg'],
  },
  icons: {
    icon: [
      { url: '/WhatsApp_Image_2026-11-02_at_14.26.35-removebg-preview.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/WhatsApp_Image_2026-11-02_at_14.26.35-removebg-preview.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#06352a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': `${siteUrl}/#organization`,
    name: 'ONG EICF - Ensemble Imaginons et Construisons le Futur',
    alternateName: 'ONG EICF',
    url: siteUrl,
    logo: `${siteUrl}/WhatsApp_Image_2026-11-02_at_14.26.35-removebg-preview.png`,
    image: `${siteUrl}/images/hero.jpg`,
    foundingDate: '2008-02-01',
    description:
      'Organisation Non Gouvernementale ivoirienne créée le 1er février 2008. Interventions certifiées en Eau, Hygiène & Assainissement, Genre, Éducation, Emploi des Jeunes et Cohésion Sociale.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cocody Angré 8ème Tranche',
      addressLocality: 'Abidjan',
      addressRegion: 'District Autonome d’Abidjan',
      addressCountry: 'CI',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+225-27-22-53-46-40',
      contactType: 'Siège administratif',
      areaServed: 'CI',
      availableLanguage: ['French'],
    },
    sameAs: [
      'https://facebook.com',
      'https://linkedin.com',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Côte d’Ivoire',
    },
    knowsAbout: [
      'Développement Communautaire',
      'Eau, Hygiène et Assainissement (ATPC)',
      'Autonomisation des Femmes et Droits des Filles',
      'Insertion Professionnelle et Emploi Jeune',
      'Protection de l’Enfance et Éducation Passerelle',
      'Consolidation de la Paix et Médiation Pastorale',
    ],
  }

  return (
    <html
      lang="fr"
      className={`${fontHeading.variable} ${fontBody.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <ClientShell>{children}</ClientShell>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
