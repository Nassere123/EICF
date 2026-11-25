import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Siège National',
  description:
    'Contactez la Direction Exécutive de l’ONG EICF à Abidjan Cocody Angré ou adressez une requête au Mécanisme de Gestion des Plaintes et des Retours (MGP).',
  openGraph: {
    title: 'Contactez l’ONG EICF | Siège d’Abidjan',
    description:
      'Coordonnées officielles, formulaire de contact et canaux d’écoute communautaire sécurisés.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
