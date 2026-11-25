import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actualités, Missions & Communiqués Officiels',
  description:
    'Suivez la vie institutionnelle de l’ONG EICF : lancements de chantiers, cérémonies de remise de kits, missions conjointes de supervision et communiqués officiels.',
  openGraph: {
    title: 'Actualités & Événements | ONG EICF',
    description:
      'L’actualité de nos interventions au plus près du terrain à travers 8 catégories institutionnelles documentées.',
  },
}

export default function ActualitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
