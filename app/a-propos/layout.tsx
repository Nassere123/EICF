import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos & Gouvernance institutionnelle',
  description:
    'Découvrez l’histoire de l’ONG EICF créée le 1er février 2008, notre vision, nos valeurs humanitaires et notre modèle de gouvernance rigoureusement audité.',
  openGraph: {
    title: 'À propos & Gouvernance | ONG EICF',
    description:
      '18 ans d’engagement ininterrompu en Côte d’Ivoire : Présidence Fondatrice, Conseil d’Administration et Direction Exécutive certifiée.',
  },
}

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
