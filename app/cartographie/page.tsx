import Link from 'next/link'
import { MapPin, ArrowRight, Sparkles } from 'lucide-react'
import { InteractiveMap } from '@/components/InteractiveMap'

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

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Système d’Information Géographique & Terrain
          </span>

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

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Parcours territorial hiérarchique du CDC §4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-secondary block">
                  Exemple de traçabilité WASH (CDC §4)
                </span>
                <p className="text-sm sm:text-base font-heading font-bold text-textDark mt-0.5">
                  Hambol &rarr; Katiola &rarr; PASEA &rarr; 10 villages &rarr;{' '}
                  <span className="text-primary">788 latrines réalisées</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-secondary/20 text-primary flex items-center justify-center flex-shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-secondary block">
                  Exemple de traçabilité Autonomisation (CDC §4)
                </span>
                <p className="text-sm sm:text-base font-heading font-bold text-textDark mt-0.5">
                  Bounkani &rarr; Bouna &rarr; SWEDD &rarr; 74 espaces sûrs &rarr;{' '}
                  <span className="text-primary">1 850 jeunes filles</span>
                </p>
              </div>
            </div>
          </div>

          {/* Carte interactive OpenStreetMap */}
          <InteractiveMap showTitle={false} />

          {/* Raccourci vers les fiches projets */}
          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-heading font-bold text-textDark">
                Consulter le détail de chaque intervention régionale
              </h2>
              <p className="text-muted text-sm sm:text-base mt-1">
                Accédez aux fiches complètes, budgets, bailleurs et taux de réalisation par projet.
              </p>
            </div>
            <Link
              href="/projets-actualites"
              className="px-7 py-3.5 bg-primary hover:bg-primaryDark text-white font-bold rounded-full transition-all shadow-md inline-flex items-center gap-2 text-sm flex-shrink-0"
            >
              <span>Voir toutes les fiches projets</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
