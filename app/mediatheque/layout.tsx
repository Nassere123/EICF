import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Centre Documentaire & Médiathèque Institutionnelle',
  description:
    'Téléchargez les statuts officiels, rapports annuels, audits financiers, politiques de sauvegarde (PSEA), manuels de procédures et notes de capitalisation de l’ONG EICF.',
  openGraph: {
    title: 'Centre Documentaire & Médiathèque | ONG EICF',
    description:
      'Transparence intégrale : pièces maîtresses de gouvernance et de capitalisation méthodologique en libre accès ou sur demande formelle.',
  },
}

export default function MediathequeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
