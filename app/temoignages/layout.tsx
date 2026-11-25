import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Récits de Changement & Voix des Communautés',
  description:
    'Témoignages vérifiés de femmes leaders, mentores d’espaces sûrs, maîtres artisans et présidents de comités villageois formés et accompagnés par l’ONG EICF.',
  openGraph: {
    title: 'Témoignages & Récits de Vie | ONG EICF',
    description:
      'L’impact humain derrière chaque chiffre certifié, dans le strict respect de la charte éthique et de la sauvegarde de l’enfance.',
  },
}

export default function TemoignagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
