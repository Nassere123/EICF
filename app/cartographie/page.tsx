import Link from 'next/link'
import { MapPin, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'
import { InteractiveMap } from '@/components/InteractiveMap'

export default function CartographiePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Cartographie opérationnelle</span>
          </div>

          <span className="badge badge-gold mb-4">
            Système d’Information Géographique (2008 – 2026)
          </span>

          <h1 className="display">
            Cartographie opérationnelle<br />
            <em>des interventions de l’ONG EICF.</em>
          </h1>

          <p className="lead">
            Visualisez nos 14 régions, départements, sous-préfectures et localités
            d’intervention, avec pour chaque zone les projets exécutés, les bailleurs
            associés, les bénéficiaires et le statut du projet.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/impact" className="btn btn-gold">
              <Sparkles size={16} />
              <span>Tableau de bord EICF Impact</span>
            </Link>
            <Link href="/projets-actualites" className="btn btn-outline">
              <span>Toutes les fiches projets</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="card flex items-start gap-4" style={{ padding: '20px' }}>
              <div className="icon-tile" style={{ marginBottom: 0 }}>
                <MapPin size={20} />
              </div>
              <div>
                <span className="badge badge-gold mb-1.5">En cours · Eau &amp; WASH</span>
                <p className="text-sm font-heading font-bold text-[#0b1813]">
                  Hambol &rarr; Katiola &rarr; PASEA &rarr; 10 villages ·{' '}
                  <span className="text-[#06352a]">788 latrines &amp; 9 TPE</span>
                </p>
              </div>
            </div>

            <div className="card flex items-start gap-4" style={{ padding: '20px' }}>
              <div className="icon-tile" style={{ marginBottom: 0 }}>
                <Sparkles size={20} />
              </div>
              <div>
                <span className="badge mb-1.5">Achevé (2022–2024) · SWEDD</span>
                <p className="text-sm font-heading font-bold text-[#0b1813]">
                  6 régions (Bounkani, Gontougo, Bélier, N’Zi, Moronou, Iffou) ·{' '}
                  <span className="text-[#06352a]">74 espaces sûrs</span>
                </p>
              </div>
            </div>

            <div className="card flex items-start gap-4" style={{ padding: '20px' }}>
              <div className="icon-tile" style={{ marginBottom: 0 }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="badge mb-1.5">Achevés · Insertion, Éducation &amp; Paix</span>
                <p className="text-sm font-heading font-bold text-[#0b1813]">
                  Bagoué, Agnéby-Tiassa, Folon, San Pédro, Tonkpi, Cavally, Bouna
                </p>
              </div>
            </div>
          </div>

          <InteractiveMap showTitle={false} />

          <div className="card flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                Consulter le détail de chaque intervention régionale
              </h2>
              <p className="text-sm sm:text-base text-[#4c5a53] mt-1">
                Accédez aux fiches complètes, périodes d’exécution, bailleurs et résultats vérifiés par projet.
              </p>
            </div>
            <Link href="/projets-actualites" className="btn btn-green flex-shrink-0">
              <span>Voir les fiches projets</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
