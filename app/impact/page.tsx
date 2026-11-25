import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Download, Users } from 'lucide-react'
import { ImpactDashboard } from '@/components/ImpactDashboard'

export const metadata: Metadata = {
  title: 'Tableau de Bord d’Impact & Résultats Certifiés',
  description:
    'Indicateurs clés de performance (KPI), bénéficiaires directs certifiés (50 570+) et réalisations physiques consolidées de l’ONG EICF depuis 2008.',
  openGraph: {
    title: 'Tableau de Bord d’Impact EICF',
    description:
      'Mesurer chaque changement : 50 570+ bénéficiaires, 11 régions, 788 latrines, 1 560 adolescentes et 3 200 jeunes formés.',
  },
}

export default function ImpactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>EICF Impact — Nos résultats</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Tableau de Bord & Redevabilité (KPI)
          </span>

          <h1 className="display">
            EICF Impact :<br />
            <em>mesurer chaque changement.</em>
          </h1>

          <p className="lead">
            Notre système de suivi-évaluation et de redevabilité consolide les
            résultats obtenus sur le terrain : éducation, eau, hygiène,
            assainissement, autonomisation, protection et santé communautaire.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/temoignages"
              className="px-7 py-3.5 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-lg inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <Users size={16} />
              <span>Découvrir les histoires de changement</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/mediatheque"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <Download size={16} />
              <span>Rapports & bilans annuels</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImpactDashboard showHero={false} />
        </div>
      </section>
    </>
  )
}
