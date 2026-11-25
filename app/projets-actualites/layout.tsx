import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projets & Réalisations de Terrain',
  description:
    'Explorez le portefeuille des projets certifiés de l’ONG EICF : PASEA (Banque mondiale), SWEDD (UNFPA), PEJEDEC (BCP-Emploi), CLEF (UNICEF) et programmes PNUD.',
  openGraph: {
    title: 'Projets & Réalisations de Terrain | ONG EICF',
    description:
      'Traçabilité et résultats certifiés : 50 570+ bénéficiaires directs à travers 11 régions de Côte d’Ivoire.',
  },
}

export default function ProjetsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
