import Link from 'next/link'
import { Sparkles, Download, ArrowRight } from 'lucide-react'
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
          <h1 className="display">
            EICF Impact :<br />
            <em>mesurer chaque changement.</em>
          </h1>
          <p className="lead">
            Notre système de suivi-évaluation et de redevabilité consolide les
            résultats obtenus sur le terrain : éducation, eau, hygiène,
            assainissement, autonomisation, protection et santé communautaire.
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          <ImpactDashboard showHero={false} />
        </div>
      </section>
    </>
  )
}
