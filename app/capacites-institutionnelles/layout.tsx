import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capacités Institutionnelles & Conformité Fiduciaire',
  description:
    'Standards fiduciaires, gestion comptable SYSCOHADA, manuels de procédures certifiés, commissariat aux comptes et politique de redevabilité de l’ONG EICF.',
  openGraph: {
    title: 'Capacités Institutionnelles & Garanties Fiduciaires | ONG EICF',
    description:
      'Gouvernance transparente et conformité rigoureuse aux exigences de la Banque mondiale, de l’UNICEF et des bailleurs multilatéraux.',
  },
}

export default function CapacitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
