import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  ArrowLeft,
  Check,
  MapPin,
  Download,
  Building2,
  Quote,
  Lightbulb,
  FileText,
  ShieldCheck,
} from 'lucide-react'
import {
  projects,
  getProject,
  partners,
  documents,
  statusLabel,
  formatNumber,
} from '@/lib/data'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const projectPartners = partners.filter((pt) =>
    project.partners.includes(pt.slug)
  )
  const projectDocs = documents.filter((d) => d.project === project.slug)

  return (
    <>
      <section className="page-hero has-image">
        <div className="page-hero-img">
          <img src={project.image} alt={project.name} />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/projets-actualites">Nos projets</Link>
            <span>/</span>
            <span>{project.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span
              className={`badge ${
                project.status === 'en-cours' || project.status === 'conception'
                  ? 'badge-gold'
                  : ''
              }`}
            >
              Projet {statusLabel[project.status]}
            </span>
            <span className="badge badge-dark">
              <MapPin size={12} /> {project.zone}
            </span>
            <span className="badge badge-dark">
              <ShieldCheck size={12} /> Fiche validée Direction Exécutive
            </span>
          </div>

          <h1 className="display">{project.name}</h1>
          <p className="text-xl sm:text-2xl font-heading italic text-[#f8cc4d] mt-2">
            {project.fullName}
          </p>
          <p className="lead">{project.summary}</p>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              {/* 1. Objectifs */}
              <div className="card">
                <div className="flex items-center gap-3 mb-5">
                  <span className="badge badge-gold">01</span>
                  <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                    Objectifs stratégiques
                  </h2>
                </div>
                <ul className="check-list">
                  {project.objectifs.map((obj, i) => (
                    <li key={i}>
                      <Check size={18} />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Activités */}
              <div className="card">
                <div className="flex items-center gap-3 mb-5">
                  <span className="badge badge-gold">02</span>
                  <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                    Activités &amp; Mise en œuvre opérationnelle
                  </h2>
                </div>
                <ul className="check-list">
                  {project.activites.map((act, i) => (
                    <li key={i}>
                      <Check size={18} />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Résultats */}
              <div className="card">
                <div className="flex items-center gap-3 mb-5">
                  <span className="badge badge-gold">03</span>
                  <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                    Résultats &amp; Réalisations vérifiés
                  </h2>
                </div>
                <ul className="check-list">
                  {project.resultats.map((res, i) => (
                    <li key={i}>
                      <Check size={18} />
                      <strong className="text-[#06352a]">{res}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Indicateurs */}
              {project.indicateurs && project.indicateurs.length > 0 && (
                <div className="card">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="badge badge-gold">04</span>
                      <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                        Indicateurs d’exécution physique (KPI)
                      </h2>
                    </div>
                    {project.dateReferenceTaux && (
                      <span className="badge">{project.dateReferenceTaux}</span>
                    )}
                  </div>

                  <table className="ind-table">
                    <thead>
                      <tr>
                        <th>Indicateur</th>
                        <th>Réalisé / Cible</th>
                        <th>Taux</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.indicateurs.map((ind, i) => {
                        const pct = Math.min(100, Math.round((ind.atteint / ind.cible) * 100))
                        return (
                          <tr key={i}>
                            <td>{ind.label}</td>
                            <td>
                              <strong className="text-[#06352a]">
                                {formatNumber(ind.atteint)}
                              </strong>{' '}
                              / {formatNumber(ind.cible)}
                              {ind.unite ? ` ${ind.unite}` : ''}
                            </td>
                            <td>
                              <div className="progress">
                                <span style={{ width: `${pct}%` }} />
                              </div>
                              <span className="font-extrabold text-xs text-[#06352a]">{pct}%</span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* 5. Témoignage */}
              {project.temoignage && (
                <div className="quote-card">
                  <Quote className="q" />
                  <blockquote>« {project.temoignage.quote} »</blockquote>
                  <cite>
                    {project.temoignage.author}
                    <span>{project.temoignage.role}</span>
                  </cite>
                </div>
              )}

              {/* 6. Leçons apprises */}
              {project.lecons && project.lecons.length > 0 && (
                <div className="card">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="badge badge-gold">06</span>
                    <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                      Leçons apprises &amp; Capitalisation
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {project.lecons.map((l, i) => (
                      <div
                        key={i}
                        style={{
                          padding: '16px',
                          background: '#f4f7f5',
                          borderLeft: '4px solid var(--gold)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                        }}
                      >
                        <Lightbulb size={18} className="text-[#06352a] flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-[#1c2a24]">{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. Documents */}
              <div className="card">
                <div className="flex items-center gap-3 mb-5">
                  <span className="badge badge-gold">07</span>
                  <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                    Documentation &amp; Capitalisation associée
                  </h2>
                </div>

                {projectDocs.length > 0 ? (
                  <div className="space-y-3">
                    {projectDocs.map((doc) => (
                      <div key={doc.slug} className="doc-row">
                        <div className="ficon">
                          <FileText size={18} />
                        </div>
                        <div>
                          <h3>{doc.title}</h3>
                          <p>{doc.summary}</p>
                        </div>
                        <div className="meta">
                          <span>{doc.size}</span>
                        </div>
                        <Link href="/mediatheque" className="dl-btn">
                          <Download size={14} />
                          <span>Consulter</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Les documents de capitalisation sont consultables dans le{' '}
                    <Link href="/mediatheque" className="text-[#06352a] font-bold underline">
                      Centre documentaire institutionnel
                    </Link>.
                  </p>
                )}
              </div>

              <div>
                <Link href="/projets-actualites" className="btn btn-gold">
                  <ArrowLeft size={15} />
                  <span>Retour aux projets</span>
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="fact-card">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#06352a] mb-4">
                  Fiche technique validée
                </h4>

                <dl className="facts">
                  <div>
                    <dt>Statut</dt>
                    <dd className="text-[#06352a]">{statusLabel[project.status]}</dd>
                  </div>
                  <div>
                    <dt>Zone géographique</dt>
                    <dd>{project.zone}</dd>
                  </div>
                  <div>
                    <dt>Période / Clôture</dt>
                    <dd>{project.periode}</dd>
                  </div>
                  <div>
                    <dt>Durée contractuelle</dt>
                    <dd>{project.duree}</dd>
                  </div>
                  <div>
                    <dt>Cadre contractuel</dt>
                    <dd className="text-[#06352a] text-xs">{project.budget}</dd>
                  </div>
                  <div>
                    <dt>Bénéficiaires</dt>
                    <dd>
                      {formatNumber(project.beneficiaires)} {project.beneficiairesLabel}
                    </dd>
                  </div>
                  {project.tauxRealisation !== undefined && (
                    <div>
                      <dt>Exécution physique</dt>
                      <dd className="text-[#06352a]">{project.tauxRealisation}%</dd>
                    </div>
                  )}
                </dl>

                {projectPartners.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-[#d4d4d4]">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#4c5a53] block mb-3">
                      Bailleurs &amp; Partenaires associés
                    </span>
                    <div className="space-y-2">
                      {projectPartners.map((pt) => (
                        <div
                          key={pt.slug}
                          className="flex items-center gap-3 p-2.5 border border-[#d4d4d4] bg-white"
                        >
                          {pt.logo ? (
                            <img src={pt.logo} alt={pt.name} className="w-8 h-8 object-contain flex-shrink-0" />
                          ) : (
                            <Building2 size={18} className="text-[#06352a] flex-shrink-0" />
                          )}
                          <div className="min-w-0">
                            <strong className="text-xs font-bold text-[#0b1813] block truncate">
                              {pt.name}
                            </strong>
                            <small className="text-[11px] text-[#4c5a53] block">
                              {pt.relationStatus}
                            </small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-5">
                  <Link href="/contact?type=partenariat" className="btn btn-gold w-full">
                    <span>Demander une fiche de référence</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="card" style={{ background: '#06352a', color: '#ffffff', borderColor: '#f2b31a' }}>
                <MapPin size={22} className="text-[#f2b31a] mb-3" />
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  Localiser sur la cartographie
                </h4>
                <p className="text-xs sm:text-sm text-white/85 mb-4">
                  Visualisez les régions, départements et réalisations physiques rattachés à cette intervention.
                </p>
                <Link href="/cartographie" className="btn btn-gold btn-sm">
                  <span>Ouvrir la cartographie</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
