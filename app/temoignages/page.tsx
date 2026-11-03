import Link from 'next/link'
import { Quote, ArrowRight, TrendingUp, Sparkles, MapPin } from 'lucide-react'
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
      <section className="section bg-paper">
        <div className="container">
          <div className="section-head center">
            <h2 className="display">
              Des vies transformées,<br />
              <em>par et pour les communautés.</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gap: '34px' }}>
            {stories.map((s) => {
              const p = projects.find((x) => x.slug === s.project)
              return (
                <article key={s.slug} className="story">
                  <div className="story-img">
                    <img src={s.image} alt={s.name} />
                  </div>

                  <div className="story-copy">
                    <span className="badge badge-gold" style={{ alignSelf: 'flex-start' }}>
                      Histoire de changement · Projet {p ? p.name : ''}
                    </span>

                    <blockquote>« {s.quote} »</blockquote>

                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--muted)' }}>
                      {s.story}
                    </p>

                    <div className="who">
                      <strong>{s.name}</strong>
                      <span>{s.role}</span>
                    </div>

                    {p && (
                      <div style={{ marginTop: '10px' }}>
                        <Link
                          href={`/projets-actualites/${p.slug}`}
                          className="text-link"
                        >
                          <span>Découvrir le projet {p.name} ({p.fullName})</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2. Comparatifs « Avant / Après » (CDC §5) */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-head center">
            <h2 className="display">
              Avant & Après :<br />
              <em>les indicateurs de transformation.</em>
            </h2>
          </div>

          <div className="grid-2">
            {beforeAfter.map((ba, idx) => (
              <div key={idx} className="ba-card">
                <h3>{ba.label}</h3>

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
