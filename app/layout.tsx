import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClientShell } from '@/components/ClientShell'
import 'leaflet/dist/leaflet.css'
import './globals.css'

/* Titres : grotesque expressive à axe optique */
const fontDisplay = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

/* Accent éditorial (italique) pour les <em> des titres */
const fontAccent = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-accent',
  display: 'swap',
})

/* Texte courant & interface */
const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EICF — Ensemble Imaginons et Construisons le Futur',
  description:
    'ONG ivoirienne de développement communautaire, d’éducation, d’eau-assainissement et de consolidation de la paix. Plateforme institutionnelle et cartographie des interventions.',
  icons: {
    icon: [
      { url: '/images/logo-eicf.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/logo-eicf.png',
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
  return (
    <html
      lang="fr"
      className={`${fontDisplay.variable} ${fontAccent.variable} ${fontSans.variable}`}
    >
      <body>
        <ClientShell>{children}</ClientShell>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
