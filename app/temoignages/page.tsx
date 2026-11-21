import Link from 'next/link'
import {
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'
import { stories, beforeAfter, projects } from '@/lib/data'

export default function TemoignagesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Témoignages documentés</span>
          </div>

          <span className="badge badge-gold mb-4">
            Impact Humain Vérifié &amp; Éthique de Sauvegarde
          </span>

          <h1 className="display">
            Histoires de changement &amp;<br />
            <em>témoignages documentés de terrain.</em>
          </h1>

          <p className="lead">
            Chaque témoignage publié précise le projet concerné, la localité, la
            période de recueil et le changement concret observé, dans le strict
            respect du consentement éclairé et de l’anonymisation des mineurs.
          </p>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          <div className="card mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="icon-tile" style={{ marginBottom: 0 }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0b1813]">
                  Protocole éthique, consentement et protection des mineurs
                </h2>
                <p className="text-xs sm:text-sm text-[#4c5a53] mt-1 leading-relaxed">
                  Conformément à notre Politique de Sauvegarde de l’Enfant et à notre Politique PSEA, tous les témoignages sont documentés avec consentement autorisé et anonymisation systématique lorsque la protection des mineurs l’exige.
                </p>
              </div>
            </div>
            <Link href="/mediatheque" className="btn btn-green btn-sm flex-shrink-0">
              Politique Sauvegarde &amp; PSEA
            </Link>
          </div>

          <div className="space-y-8">
            {stories.map((s) => {
              const p = projects.find((x) => x.slug === s.project)

              return (
                <article key={s.slug} className="story">
                  <div className="story-img">
                    <img src={s.image} alt={s.name} />
                  </div>

                  <div className="story-copy">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="badge badge-gold">
                        {p ? `Projet : ${p.name}` : 'Histoire de changement'}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#06352a]">
                        <MapPin size={13} /> {s.localite}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#4c5a53]">
                        <Calendar size={13} /> {s.date}
                      </span>
                    </div>

                    <blockquote>« {s.quote} »</blockquote>

                    <p className="text-sm sm:text-base text-[#4c5a53] leading-relaxed">{s.story}</p>

                    <div className="p-4 bg-[#f4f7f5] border-l-4 border-[#06352a] text-xs sm:text-sm">
                      <strong className="text-[#06352a] flex items-center gap-1.5 mb-1">
                        <CheckCircle2 size={15} /> Changement concret observé :
                      </strong>
                      <span className="text-[#1c2a24]">{s.observedChange}</span>
                    </div>

                    <div className="pt-4 border-t border-[#d4d4d4] flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <strong className="block text-base font-heading font-bold text-[#0b1813]">
                          {s.name}
                        </strong>
                        <span className="text-xs sm:text-sm text-[#4c5a53] font-medium block">
                          {s.role}
                        </span>
                        <small className="text-[11px] text-[#06352a] italic block mt-1">
                          {s.consentNote}
                        </small>
                      </div>

                      {p && (
                        <Link href={`/projets-actualites/${p.slug}`} className="btn btn-ghost btn-sm">
                          <span>Fiche {p.name}</span>
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

      <section className="section section-white">
        <div className="container">
          <div className="section-head center">
            <span className="badge badge-gold">Mesure d’Impact</span>
            <h2 className="h2 mt-3" style={{ color: 'var(--ink)' }}>
              Avant &amp; Après : <em>les indicateurs de transformation.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beforeAfter.map((ba, idx) => (
              <div key={idx} className="ba-card">
                <h3>{ba.label}</h3>
                <div className="ba">
                  <div className="before">
                    <small>Situation initiale</small>
                    <strong>{ba.before}</strong>
                  </div>
                  <ArrowRight size={20} />
                  <div className="after">
                    <small>Résultat observé</small>
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
