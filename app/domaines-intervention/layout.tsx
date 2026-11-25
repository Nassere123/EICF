import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos 11 Domaines d’Intervention',
  description:
    'Découvrez les 11 domaines d’expertise technique de l’ONG EICF : Eau & Assainissement, Éducation, Protection de l’Enfance, Genre, Cohésion Sociale et Développement Durable.',
  openGraph: {
    title: '11 Domaines d’Intervention | ONG EICF',
    description:
      'Des solutions intégrées, durables et co-construites avec les communautés locales et les bailleurs internationaux.',
  },
}

export default function DomainesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
