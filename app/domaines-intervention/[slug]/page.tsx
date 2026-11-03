import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  Check,
  MapPin,
  FileText,
  Download,
  Users,
  Target,
  Layers,
  Sparkles,
} from 'lucide-react'
import {
  domains,
  getDomain,
  projects,
  documents,
  media,
  statusLabel,
  formatNumber,
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
  const domDocs = documents.filter((d) => d.domain === domain.slug || domProjects.some((p) => p.slug === d.project))
  const domPhotos = media.photos.filter((ph) => domProjects.some((p) => p.slug === ph.project))

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
      <section className="section bg-white">
        <div className="container">
          <div className="detail-layout">
            <div>
              {/* 1. Objectif */}
              <div className="detail-block">
                <h2>
                  <span className="step">01</span>
                  <span>Objectif général</span>
                </h2>
                <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink)' }}>
                  {domain.objective}
                </p>
              </div>

              {/* 2. Approche EICF */}
              <div className="detail-block">
                <h2>
                  <span className="step">02</span>
                  <span>Approche méthodologique EICF</span>
                </h2>
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
              <div className="detail-block">
                <h2>
                  <span className="step">03</span>
                  <span>Projets associés ({domProjects.length})</span>
                </h2>

                {activeProjects.length > 0 && (
                  <div style={{ marginBottom: '26px' }}>
                    <h3 style={{ fontSize: '18px', color: 'var(--green)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Projets en cours de réalisation
                    </h3>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      {activeProjects.map((p) => (
                        <div
                          key={p.slug}
                          style={{
                            padding: '20px',
                            borderRadius: '14px',
                            background: 'var(--paper)',
                            border: '1px solid var(--line)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '14px',
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                              <span className="badge badge-live">
                                <span className="dot" /> En cours
                              </span>
                              <strong style={{ fontSize: '18px', color: 'var(--green)' }}>
                                {p.name}
                              </strong>
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px' }}>
                              {p.fullName} · {p.zone}
                            </p>
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
                  <div style={{ marginBottom: '26px' }}>
                    <h3 style={{ fontSize: '18px', color: 'var(--green)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Projets achevés & capitalisés
                    </h3>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      {completedProjects.map((p) => (
                        <div
                          key={p.slug}
                          style={{
                            padding: '20px',
                            borderRadius: '14px',
                            background: 'var(--paper)',
                            border: '1px solid var(--line)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '14px',
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                              <span className="badge">Achevé</span>
                              <strong style={{ fontSize: '18px', color: 'var(--green)' }}>
                                {p.name}
                              </strong>
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px' }}>
                              {p.fullName} · {p.zone}
                            </p>
                          </div>
                          <Link href={`/projets-actualites/${p.slug}`} className="btn btn-ghost btn-sm">
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
                    <h3 style={{ fontSize: '18px', color: 'var(--green)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Projets en conception (recherche de partenaires)
                    </h3>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      {conceptionProjects.map((p) => (
                        <div
                          key={p.slug}
                          style={{
                            padding: '20px',
                            borderRadius: '14px',
                            background: 'var(--gold-soft)',
                            border: '1px solid #ebdcb2',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '14px',
                          }}
                        >
                          <div>
                            <span className="badge badge-gold">En conception</span>
                            <strong style={{ fontSize: '18px', color: 'var(--green)', display: 'block', marginTop: '6px' }}>
                              {p.name} — {p.fullName}
                            </strong>
                            <p style={{ fontSize: '13.5px', color: 'var(--ink)', marginTop: '4px' }}>
                              Besoin de financement : <strong>{p.besoinFinancement}</strong>
                            </p>
                          </div>
                          <Link href="/appels-a-partenariat" className="btn btn-gold btn-sm">
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
              <div className="detail-block">
                <h2>
                  <span className="step">04</span>
                  <span>Résultats & Impact mesuré</span>
                </h2>
                <div className="grid-2">
                  {domain.results.map((res, i) => (
                    <div key={i} className="card" style={{ padding: '24px', background: 'var(--green-soft)' }}>
                      <strong style={{ fontFamily: 'var(--serif)', fontSize: '42px', color: 'var(--green)', lineHeight: 1 }}>
                        {res.value}
                      </strong>
                      <p style={{ fontSize: '15px', color: 'var(--ink)', marginTop: '8px', fontWeight: 600 }}>
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Photos de terrain */}
              {domPhotos.length > 0 && (
                <div className="detail-block">
                  <h2>
                    <span className="step">05</span>
                    <span>Photographies de terrain</span>
                  </h2>
                  <div className="photo-strip">
                    {domPhotos.map((ph, i) => (
                      <img key={i} src={ph.src} alt={ph.caption} />
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Publications & Rapports téléchargeables */}
              <div className="detail-block">
                <h2>
                  <span className="step">06</span>
                  <span>Publications & Documentation associée</span>
                </h2>
                {domDocs.length > 0 ? (
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {domDocs.map((doc) => (
                      <div key={doc.slug} className="doc-row">
                        <div className="ficon">PDF</div>
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
                  <p style={{ color: 'var(--muted)' }}>
                    Rapports trimestriels en cours de numérisation dans la médiathèque.
                  </p>
                )}
              </div>
            </div>

            {/* Barre latérale récapitulative */}
            <aside className="detail-aside">
              <div className="fact-card">
                <h4>Fiche domaine EICF</h4>
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
                    <dd style={{ color: 'var(--green-3)' }}>Actif</dd>
                  </div>
                </dl>

                <div style={{ marginTop: '22px' }}>
                  <Link href="/contact?type=partenariat" className="btn btn-gold btn-sm" style={{ width: '100%' }}>
                    <span>Co-financer une action</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="card" style={{ padding: '24px', background: 'var(--green)', color: '#fff' }}>
                <Sparkles size={20} style={{ color: 'var(--gold-2)', marginBottom: '10px' }} />
                <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '8px' }}>
                  Poser une question sur ce domaine
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>
                  Interrogez ASK EICF pour connaître les interventions dans vos localités d’intérêt.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '14px', width: '100%' }}
                >
                  <span>Contacter le responsable de secteur</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
