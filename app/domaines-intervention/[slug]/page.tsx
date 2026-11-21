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
    (d) => d.domain === domain.slug || domProjects.some((p) => p.slug === d.project)
  )
  const domPhotos = media.photos.filter((ph) =>
    domProjects.some((p) => p.slug === ph.project)
  )

  return (
    <>
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

          <span className="badge badge-gold mb-4">Domaine Stratégique {domain.num} / 11</span>
          <h1 className="display">{domain.title}</h1>
          <p className="lead">{domain.short}</p>

          <div className="steps-flow">
            <span>Objectif</span>
            <ArrowRight size={13} />
            <span>Approche EICF</span>
            <ArrowRight size={13} />
            <span>Projets associés</span>
            <ArrowRight size={13} />
            <span>Résultats</span>
            <ArrowRight size={13} />
            <span>Publications</span>
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge badge-gold">01</span>
                  <h2 className="text-2xl font-heading font-bold text-[#0b1813]">Objectif général</h2>
                </div>
                <p className="text-base leading-relaxed text-[#1c2a24]">{domain.objective}</p>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge badge-gold">02</span>
                  <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
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

              <div className="card">
                <div className="flex items-center gap-3 mb-5">
                  <span className="badge badge-gold">03</span>
                  <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                    Projets associés ({domProjects.length})
                  </h2>
                </div>

                {activeProjects.length > 0 && (
                  <div className="mb-5">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#06352a] mb-3">
                      Projets en cours
                    </h3>
                    <div className="space-y-3">
                      {activeProjects.map((p) => (
                        <div key={p.slug} className="p-4 border border-[#d4d4d4] bg-white flex flex-wrap justify-between items-center gap-4">
                          <div>
                            <span className="badge badge-gold mb-1">En cours</span>
                            <strong className="block text-lg font-heading text-[#0b1813]">{p.name}</strong>
                            <p className="text-xs text-[#4c5a53]">{p.fullName} · {p.zone}</p>
                          </div>
                          <Link href={`/projets-actualites/${p.slug}`} className="btn btn-green btn-sm">
                            <span>Voir le projet</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {completedProjects.length > 0 && (
                  <div className="mb-5">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#4c5a53] mb-3">
                      Projets achevés &amp; capitalisés
                    </h3>
                    <div className="space-y-3">
                      {completedProjects.map((p) => (
                        <div key={p.slug} className="p-4 border border-[#d4d4d4] bg-white flex flex-wrap justify-between items-center gap-4">
                          <div>
                            <span className="badge mb-1">Achevé</span>
                            <strong className="block text-lg font-heading text-[#0b1813]">{p.name}</strong>
                            <p className="text-xs text-[#4c5a53]">{p.fullName} · {p.zone}</p>
                          </div>
                          <Link href={`/projets-actualites/${p.slug}`} className="btn btn-ghost btn-sm">
                            <span>Bilan &amp; Leçons</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {conceptionProjects.length > 0 && (
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#06352a] mb-3">
                      Projets en conception
                    </h3>
                    <div className="space-y-3">
                      {conceptionProjects.map((p) => (
                        <div key={p.slug} className="p-4 border border-[#f2b31a] bg-[#fffbeb] flex flex-wrap justify-between items-center gap-4">
                          <div>
                            <span className="badge badge-gold mb-1">En conception</span>
                            <strong className="block text-lg font-heading text-[#0b1813]">
                              {p.name} — {p.fullName}
                            </strong>
                            <p className="text-xs text-[#1c2a24]">{p.besoinFinancement}</p>
                          </div>
                          <Link href="/appels-a-partenariat" className="btn btn-gold btn-sm">
                            <span>Soutenir</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-5">
                  <span className="badge badge-gold">04</span>
                  <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                    Résultats &amp; Impact mesuré
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {domain.results.map((res, i) => (
                    <div key={i} className="p-5 border border-[#d4d4d4] bg-[#f4f7f5]">
                      <strong className="text-3xl font-heading font-bold text-[#06352a] block">
                        {res.value}
                      </strong>
                      <p className="text-sm font-semibold text-[#0b1813] mt-1">{res.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {domPhotos.length > 0 && (
                <div className="card">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="badge badge-gold">05</span>
                    <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
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

              <div className="card">
                <div className="flex items-center gap-3 mb-5">
                  <span className="badge badge-gold">06</span>
                  <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                    Publications &amp; Documentation associée
                  </h2>
                </div>
                {domDocs.length > 0 ? (
                  <div className="space-y-3">
                    {domDocs.map((doc) => (
                      <div key={doc.slug} className="doc-row">
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
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Rapports disponibles dans le centre documentaire.
                  </p>
                )}
              </div>

              <div>
                <Link href="/domaines-intervention" className="btn btn-gold">
                  <ArrowLeft size={15} />
                  <span>Retour aux 11 domaines</span>
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="fact-card">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#06352a] mb-4">
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
                    <dd className="text-[#06352a]">Actif</dd>
                  </div>
                </dl>
                <div className="mt-5">
                  <Link href="/contact?type=partenariat" className="btn btn-gold w-full">
                    <span>Co-financer une action</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="card" style={{ background: '#06352a', color: '#ffffff', borderColor: '#f2b31a' }}>
                <Sparkles size={22} className="text-[#f2b31a] mb-3" />
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  Poser une question sur ce domaine
                </h4>
                <p className="text-xs sm:text-sm text-white/85 mb-4">
                  Contactez notre responsable sectoriel pour connaître nos interventions dans vos localités.
                </p>
                <Link href="/contact" className="btn btn-outline w-full btn-sm">
                  Contacter l’équipe EICF
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
