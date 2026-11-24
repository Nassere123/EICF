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
      {/* Hero Fiche Projet */}
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
                project.status === 'en-cours'
                  ? 'badge-live'
                  : project.status === 'conception'
                  ? 'badge-gold'
                  : ''
              }`}
            >
              {project.status === 'en-cours' && <span className="dot" />}
              Projet {statusLabel[project.status]}
            </span>
            <span className="badge badge-dark">
              <MapPin size={12} /> {project.zone}
            </span>
          </div>

          <h1 className="display">{project.name}</h1>
          <p className="text-xl sm:text-2xl font-heading italic text-secondary mt-2">
            {project.fullName}
          </p>
          <p className="lead">{project.summary}</p>
        </div>
      </section>

      {/* Contenu de la fiche projet */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Colonne principale */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Objectifs assignés */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                    01
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-textDark">
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

              {/* 2. Activités prévues & réalisées */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                    02
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-textDark">
                    Activités de terrain
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

              {/* 3. Résultats attendus ou obtenus */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                    03
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-textDark">
                    Résultats obtenus
                  </h2>
                </div>
                <ul className="check-list">
                  {project.resultats.map((res, i) => (
                    <li key={i}>
                      <Check size={18} />
                      <strong className="text-primary">{res}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Tableau des indicateurs (KPI) avec progression */}
              {project.indicateurs && project.indicateurs.length > 0 && (
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                      04
                    </span>
                    <h2 className="text-2xl font-heading font-bold text-textDark">
                      Indicateurs de performance (KPI)
                    </h2>
                  </div>

                  <table className="ind-table">
                    <thead>
                      <tr>
                        <th>Indicateur</th>
                        <th>Atteint / Cible</th>
                        <th>Taux</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.indicateurs.map((ind, i) => {
                        const pct = Math.min(
                          100,
                          Math.round((ind.atteint / ind.cible) * 100)
                        )
                        return (
                          <tr key={i}>
                            <td>{ind.label}</td>
                            <td>
                              <strong className="text-primary">
                                {formatNumber(ind.atteint)}
                              </strong>{' '}
                              / {formatNumber(ind.cible)}
                              {ind.unite ? ` ${ind.unite}` : ''}
                            </td>
                            <td>
                              <div className="progress">
                                <span style={{ width: `${pct}%` }} />
                              </div>
                              <span className="font-extrabold text-xs text-primary">
                                {pct}%
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* 5. Témoignage de bénéficiaire */}
              {project.temoignage && (
                <div className="quote-card shadow-lg">
                  <Quote className="q" />
                  <blockquote>« {project.temoignage.quote} »</blockquote>
                  <cite>
                    {project.temoignage.author}
                    <span>{project.temoignage.role}</span>
                  </cite>
                </div>
              )}

              {/* 6. Leçons apprises & capitalisation (CDC §4) */}
              {project.lecons && project.lecons.length > 0 && (
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                      06
                    </span>
                    <h2 className="text-2xl font-heading font-bold text-textDark">
                      Leçons apprises & Capitalisation
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {project.lecons.map((l, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-background border-l-4 border-secondary flex items-start gap-3.5"
                      >
                        <Lightbulb
                          size={20}
                          className="text-secondary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm sm:text-base text-text leading-relaxed">
                          {l}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. Documents & Rapports du projet */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                    07
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-textDark">
                    Rapports & Documents du projet
                  </h2>
                </div>

                {projectDocs.length > 0 ? (
                  <div className="space-y-3">
                    {projectDocs.map((doc) => (
                      <div key={doc.slug} className="doc-row bg-background">
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
                          <span>Télécharger</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted text-sm">
                    Rapport annuel et fiches de capitalisation accessibles dans la médiathèque générale.
                  </p>
                )}
              </div>

              <div>
                <Link
                  href="/projets-actualites"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  <ArrowLeft size={15} />
                  <span>Retour à la liste des projets</span>
                </Link>
              </div>
            </div>

            {/* Barre latérale : Métadonnées du projet */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl p-7 border border-black/5 shadow-sm">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-secondary mb-4">
                  Fiche technique du projet
                </h4>

                <dl className="facts">
                  <div>
                    <dt>Statut</dt>
                    <dd className="text-primary">
                      {statusLabel[project.status]}
                    </dd>
                  </div>

                  <div>
                    <dt>Zone géographique</dt>
                    <dd>{project.zone}</dd>
                  </div>

                  <div>
                    <dt>Période d’exécution</dt>
                    <dd>{project.periode}</dd>
                  </div>

                  <div>
                    <dt>Durée</dt>
                    <dd>{project.duree}</dd>
                  </div>

                  {project.budget && (
                    <div>
                      <dt>Budget global</dt>
                      <dd className="text-primary text-base">
                        {project.budget}
                      </dd>
                    </div>
                  )}

                  {project.dateReference && (
                    <div>
                      <dt>Référence d’exécution</dt>
                      <dd className="text-xs font-semibold text-textDark">
                        {project.dateReference}
                      </dd>
                    </div>
                  )}

                  <div>
                    <dt>Bénéficiaires</dt>
                    <dd>
                      {formatNumber(project.beneficiaires)}{' '}
                      {project.beneficiairesLabel}
                    </dd>
                  </div>

                  {project.tauxRealisation !== undefined && (
                    <div>
                      <dt>Taux de réalisation</dt>
                      <dd className="text-primary">{project.tauxRealisation}%</dd>
                    </div>
                  )}
                </dl>

                {/* Bailleurs & Partenaires associés */}
                {projectPartners.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-black/5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-muted block mb-3">
                      Partenaires & Bailleurs associés
                    </span>
                    <div className="space-y-2.5">
                      {projectPartners.map((pt) => (
                        <div
                          key={pt.slug}
                          className="flex items-center gap-3 p-3 rounded-xl bg-background border border-black/5"
                        >
                          {pt.logo ? (
                            <img
                              src={pt.logo}
                              alt={pt.name}
                              className="w-8 h-8 object-contain flex-shrink-0"
                            />
                          ) : (
                            <Building2
                              size={18}
                              className="text-primary flex-shrink-0"
                            />
                          )}
                          <div className="min-w-0">
                            <strong className="text-xs font-bold text-textDark block truncate">
                              {pt.name}
                            </strong>
                            <small className="text-[11px] text-muted block">
                              {pt.type}
                            </small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <Link
                    href="/contact?type=partenariat"
                    className="w-full py-3.5 px-5 rounded-full bg-secondary hover:bg-secondaryHover text-textDark font-bold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
                  >
                    <span>Rejoindre ou co-financer</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Raccourci vers la carte */}
              <div className="bg-primary text-white rounded-3xl p-7 shadow-md">
                <MapPin size={22} className="text-secondary mb-3" />
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  Localiser sur la carte interactive
                </h4>
                <p className="text-xs sm:text-sm text-white/80 mb-4 leading-relaxed">
                  Visualisez les localités, départements et villages bénéficiaires de ce projet.
                </p>
                <Link
                  href="/cartographie"
                  className="text-secondary font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 hover:underline"
                >
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
