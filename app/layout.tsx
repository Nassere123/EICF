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

export const metadata: Metadata = {
  title: 'EICF — Ensemble Imaginons et Construisons le Futur',
  description:
    'ONG ivoirienne de développement communautaire, d’éducation, d’eau-assainissement et de consolidation de la paix. Plateforme institutionnelle et cartographie des interventions.',
  icons: {
    icon: [
      { url: '/WhatsApp_Image_2026-11-02_at_14.26.35-removebg-preview.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/WhatsApp_Image_2026-11-02_at_14.26.35-removebg-preview.png',
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
      className={`${fontHeading.variable} ${fontBody.variable} scroll-smooth`}
    >
      <body className="font-body antialiased">
        <ClientShell>{children}</ClientShell>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
