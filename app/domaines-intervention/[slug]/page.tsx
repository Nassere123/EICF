import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  ArrowLeft,
  Check,
  FileText,
  Download,
  Sparkles,
} from 'lucide-react'
import {
  domains,
  getDomain,
  projects,
  documents,
  media,
} from '@/lib/data'

export function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }))
}

export default async function DomaineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const domain = getDomain(slug)
  if (!domain) notFound()

  const domProjects = projects.filter((p) => p.domain === domain.slug)
  const activeProjects = domProjects.filter((p) => p.status === 'en-cours')
  const completedProjects = domProjects.filter((p) => p.status === 'acheve')
  const conceptionProjects = domProjects.filter((p) => p.status === 'conception')
  const domDocs = documents.filter(
    (d) =>
      d.domain === domain.slug || domProjects.some((p) => p.slug === d.project)
  )
  const domPhotos = media.photos.filter((ph) =>
    domProjects.some((p) => p.slug === ph.project)
  )

  return (
    <>
      {/* Hero Domaine */}
      <section className="page-hero has-image">
        <div className="page-hero-img">
          <img src={domain.image} alt={domain.title} />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/domaines-intervention">Domaines d’intervention</Link>
            <span>/</span>
            <span>{domain.title}</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Domaine Stratégique {domain.num} / 11
          </span>

          <h1 className="display">{domain.title}</h1>
          <p className="lead">{domain.short}</p>

          <div className="steps-flow">
            <span>Objectif</span>
            <ArrowRight size={13} />
            <span>Approche EICF</span>
            <ArrowRight size={13} />
            <span>Projets en cours</span>
            <ArrowRight size={13} />
            <span>Résultats</span>
            <ArrowRight size={13} />
            <span>Publications</span>
          </div>
        </div>
      </section>

      {/* Contenu structuré : Objectif -> Approche -> Projets -> Résultats -> Photos -> Publications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Objectif */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                    01
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-textDark">
                    Objectif général
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-text leading-relaxed">
                  {domain.objective}
                </p>
              </div>

              {/* 2. Approche EICF */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                    02
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-textDark">
                    Approche méthodologique EICF
                  </h2>
                </div>
                <ul className="check-list">
                  {domain.approach.map((a, i) => (
                    <li key={i}>
                      <Check size={18} />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Projets en cours & Projets réalisés */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                    03
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-textDark">
                    Projets associés ({domProjects.length})
                  </h2>
                </div>

                {activeProjects.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-secondary mb-3">
                      Projets en cours de réalisation
                    </h3>
                    <div className="space-y-3">
                      {activeProjects.map((p) => (
                        <div
                          key={p.slug}
                          className="p-5 rounded-2xl bg-background border border-black/5 flex flex-wrap justify-between items-center gap-4"
                        >
                          <div>
                            <div className="flex items-center gap-2.5">
                              <span className="badge badge-live">
                                <span className="dot" /> En cours
                              </span>
                              <strong className="text-lg font-heading font-bold text-textDark">
                                {p.name}
                              </strong>
                            </div>
                            <p className="text-xs sm:text-sm text-muted mt-1">
                              {p.fullName} · {p.zone}
                            </p>
                          </div>
                          <Link
                            href={`/projets-actualites/${p.slug}`}
                            className="px-5 py-2.5 rounded-full bg-primary hover:bg-primaryDark text-white font-bold text-xs transition-colors inline-flex items-center gap-1.5"
                          >
                            <span>Voir le projet</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {completedProjects.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted mb-3">
                      Projets achevés & capitalisés
                    </h3>
                    <div className="space-y-3">
                      {completedProjects.map((p) => (
                        <div
                          key={p.slug}
                          className="p-5 rounded-2xl bg-background border border-black/5 flex flex-wrap justify-between items-center gap-4"
                        >
                          <div>
                            <div className="flex items-center gap-2.5">
                              <span className="badge">Achevé</span>
                              <strong className="text-lg font-heading font-bold text-textDark">
                                {p.name}
                              </strong>
                            </div>
                            <p className="text-xs sm:text-sm text-muted mt-1">
                              {p.fullName} · {p.zone}
                            </p>
                          </div>
                          <Link
                            href={`/projets-actualites/${p.slug}`}
                            className="px-5 py-2.5 rounded-full bg-white border border-black/15 hover:border-primary text-primary font-bold text-xs transition-colors inline-flex items-center gap-1.5"
                          >
                            <span>Bilan & Leçons</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {conceptionProjects.length > 0 && (
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-secondary mb-3">
                      Projets en conception (recherche de partenaires)
                    </h3>
                    <div className="space-y-3">
                      {conceptionProjects.map((p) => (
                        <div
                          key={p.slug}
                          className="p-5 rounded-2xl bg-accent/60 border border-secondary/30 flex flex-wrap justify-between items-center gap-4"
                        >
                          <div>
                            <span className="badge badge-gold">En conception</span>
                            <strong className="text-lg font-heading font-bold text-textDark block mt-1.5">
                              {p.name} — {p.fullName}
                            </strong>
                            <p className="text-xs sm:text-sm text-text mt-1">
                              Besoin de financement :{' '}
                              <strong className="text-primary">
                                {p.besoinFinancement}
                              </strong>
                            </p>
                          </div>
                          <Link
                            href="/appels-a-partenariat"
                            className="px-5 py-2.5 rounded-full bg-secondary hover:bg-secondaryHover text-textDark font-bold text-xs transition-colors inline-flex items-center gap-1.5"
                          >
                            <span>Soutenir ce projet</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Résultats chiffrés */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                    04
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-textDark">
                    Résultats & Impact mesuré
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {domain.results.map((res, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-background border border-black/5"
                    >
                      <strong className="text-3xl sm:text-4xl font-heading font-bold text-primary block">
                        {res.value}
                      </strong>
                      <p className="text-sm font-semibold text-textDark mt-2">
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Photos de terrain */}
              {domPhotos.length > 0 && (
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                      05
                    </span>
                    <h2 className="text-2xl font-heading font-bold text-textDark">
                      Photographies de terrain
                    </h2>
                  </div>
                  <div className="photo-strip">
                    {domPhotos.map((ph, i) => (
                      <img key={i} src={ph.src} alt={ph.caption} />
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Publications & Rapports téléchargeables */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-full bg-primary text-secondary font-heading font-bold text-xs flex items-center justify-center">
                    06
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-textDark">
                    Publications & Documentation associée
                  </h2>
                </div>
                {domDocs.length > 0 ? (
                  <div className="space-y-3">
                    {domDocs.map((doc) => (
                      <div key={doc.slug} className="doc-row bg-background">
                        <div className="ficon">
                          <FileText size={18} />
                        </div>
                        <div>
                          <h3>{doc.title}</h3>
                          <p>{doc.summary}</p>
                        </div>
                        <div className="meta">
                          <span>{doc.type}</span> · <span>{doc.size}</span>
                        </div>
                        <Link href="/mediatheque" className="dl-btn">
                          <Download size={14} />
                          <span>Consulter</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted text-sm">
                    Rapports trimestriels disponibles dans la médiathèque générale.
                  </p>
                )}
              </div>

              <div>
                <Link
                  href="/domaines-intervention"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  <ArrowLeft size={15} />
                  <span>Retour aux 11 domaines d’intervention</span>
                </Link>
              </div>
            </div>

            {/* Barre latérale récapitulative */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl p-7 border border-black/5 shadow-sm">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-secondary mb-4">
                  Fiche domaine EICF
                </h4>
                <dl className="facts">
                  <div>
                    <dt>Numéro</dt>
                    <dd>{domain.num} / 11</dd>
                  </div>
                  <div>
                    <dt>Projets rattachés</dt>
                    <dd>{domProjects.length}</dd>
                  </div>
                  <div>
                    <dt>Statut opérationnel</dt>
                    <dd className="text-primary">Actif</dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <Link
                    href="/contact?type=partenariat"
                    className="w-full py-3.5 px-5 rounded-full bg-secondary hover:bg-secondaryHover text-textDark font-bold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
                  >
                    <span>Co-financer une action</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="bg-primary text-white rounded-3xl p-7 shadow-md">
                <Sparkles size={22} className="text-secondary mb-3" />
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  Poser une question sur ce domaine
                </h4>
                <p className="text-xs sm:text-sm text-white/80 mb-5 leading-relaxed">
                  Interrogez ASK EICF ou contactez notre responsable sectoriel pour connaître les interventions dans vos localités d’intérêt.
                </p>
                <Link
                  href="/contact"
                  className="w-full py-3 px-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center justify-center"
                >
                  Contacter le responsable de secteur
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
