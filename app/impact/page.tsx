import Link from 'next/link'
import { ArrowRight, Download, Users } from 'lucide-react'
import { ImpactDashboard } from '@/components/ImpactDashboard'

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

          <span className="badge badge-gold mb-4">
            Tableau de Bord &amp; Redevabilité (KPI)
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

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/temoignages" className="btn btn-gold">
              <Users size={16} />
              <span>Histoires de changement</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/mediatheque" className="btn btn-outline">
              <Download size={16} />
              <span>Rapports &amp; bilans annuels</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          <ImpactDashboard showHero={false} />
        </div>
      </section>
    </>
  )
}
