import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Partenaires Techniques & Financiers',
  description:
    'L’ONG EICF collabore avec les institutions multilatérales, agences des Nations Unies, ministères de tutelle et ONG internationales pour maximiser son impact.',
  openGraph: {
    title: 'Partenaires & Alliances Stratégiques | ONG EICF',
    description:
      'Partenaire de confiance de la Banque mondiale, UNICEF, UNFPA, PNUD, GIZ, AEJ et Ministères sectoriels.',
  },
}

export default function PartenairesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
