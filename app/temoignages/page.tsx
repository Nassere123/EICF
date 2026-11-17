import Link from 'next/link'
import { ArrowRight, Quote, Sparkles } from 'lucide-react'
import { stories, beforeAfter, projects } from '@/lib/data'

export default function TemoignagesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Bénéficiaires & Témoignages</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Impact Humain & Récits de Vie
          </span>

          <h1 className="display">
            Histoires de changement &<br />
            <em>voix des communautés.</em>
          </h1>

          <p className="lead">
            Derrière chaque chiffre, il y a des femmes, des jeunes et des
            familles qui construisent leur autonomie. Découvrez leurs parcours.
          </p>
        </div>
      </section>

      {/* 1. Histoires de changement & Portraits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Portraits de Terrain
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2">
              Des vies transformées,{' '}
              <span className="italic text-primary">par et pour les communautés.</span>
            </h2>
          </div>

          <div className="space-y-10">
            {stories.map((s, idx) => {
              const p = projects.find((x) => x.slug === s.project)
              const isEven = idx % 2 === 1

              return (
                <article
                  key={s.slug}
                  data-reveal
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-black/5 grid grid-cols-1 lg:grid-cols-12"
                >
                  <div
                    className={`lg:col-span-5 relative min-h-[320px] lg:min-h-[420px] overflow-hidden ${
                      isEven ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block bg-secondary/25 text-textDark px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                        Histoire de changement {p ? `· Projet ${p.name}` : ''}
                      </span>
                    </div>

                    <blockquote className="text-2xl sm:text-3xl font-heading font-bold text-primary leading-snug mb-5">
                      « {s.quote} »
                    </blockquote>

                    <p className="text-muted text-base leading-relaxed mb-6">
                      {s.story}
                    </p>

                    <div className="pt-5 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <strong className="block text-base font-heading font-bold text-textDark">
                          {s.name}
                        </strong>
                        <span className="text-xs sm:text-sm text-muted font-medium">
                          {s.role}
                        </span>
                      </div>

                      {p && (
                        <Link
                          href={`/projets-actualites/${p.slug}`}
                          className="px-5 py-2.5 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
                        >
                          <span>Projet {p.name}</span>
                          <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2. Comparatifs « Avant / Après » (CDC §5) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Mesure d’Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2">
              Avant & Après :{' '}
              <span className="italic text-primary">les indicateurs de transformation.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {beforeAfter.map((ba, idx) => (
              <div
                key={idx}
                data-reveal
                className="ba-card bg-background rounded-3xl p-7 sm:p-8 border border-black/5 shadow-xs hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-heading font-bold text-textDark mb-5">
                  {ba.label}
                </h3>

                <div className="ba">
                  <div className="before">
                    <small>Avant intervention</small>
                    <strong>{ba.before}</strong>
                  </div>

                  <ArrowRight size={20} />

                  <div className="after">
                    <small>Résultat actuel</small>
                    <strong>{ba.after}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
