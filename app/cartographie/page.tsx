import Link from 'next/link'
import { InteractiveMap } from '@/components/InteractiveMap'
import { regions, globalStats } from '@/lib/data'

export default function CartographiePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Cartographie interactive</span>
          </div>
          <h1 className="display">
            Cartographie interactive<br />
            <em>des interventions de l’EICF.</em>
          </h1>
          <p className="lead">
            Naviguez à travers les 11 régions de Côte d’Ivoire, découvrez nos
            départements, sous-préfectures et villages d’intervention, et
            consultez les réalisations directes au plus près des communautés.
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          <InteractiveMap showTitle={false} />
        </div>
      </section>
    </>
  )
}
