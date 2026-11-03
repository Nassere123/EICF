import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  Check,
  MapPin,
  Calendar,
  Users,
  Briefcase,
  Download,
  Building2,
  TrendingUp,
  Quote,
  Lightbulb,
  FileText,
  Sparkles,
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

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
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
          <p className="lead" style={{ fontSize: '22px', color: 'var(--gold-2)' }}>
            {project.fullName}
          </p>
          <p className="lead">{project.summary}</p>
        </div>
      </section>

      {/* Contenu de la fiche projet */}
      <section className="section bg-white">
        <div className="container">
          <div className="detail-layout">
            <div>
              {/* 1. Objectifs assignés */}
              <div className="detail-block">
                <h2>
                  <span className="step">01</span>
                  <span>Objectifs stratégiques</span>
                </h2>
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
              <div className="detail-block">
                <h2>
                  <span className="step">02</span>
                  <span>Activités de terrain</span>
                </h2>
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
              <div className="detail-block">
                <h2>
                  <span className="step">03</span>
                  <span>Résultats obtenus</span>
                </h2>
                <ul className="check-list">
                  {project.resultats.map((res, i) => (
                    <li key={i}>
                      <Check size={18} />
                      <strong style={{ color: 'var(--green)' }}>{res}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Tableau des indicateurs (KPI) avec progression */}
              {project.indicateurs && project.indicateurs.length > 0 && (
                <div className="detail-block">
                  <h2>
                    <span className="step">04</span>
                    <span>Indicateurs de performance (KPI)</span>
                  </h2>

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
                        const pct = Math.min(100, Math.round((ind.atteint / ind.cible) * 100))
                        return (
                          <tr key={i}>
                            <td>{ind.label}</td>
                            <td>
                              <strong>{formatNumber(ind.atteint)}</strong> / {formatNumber(ind.cible)}{ind.unite ? ` ${ind.unite}` : ''}
                            </td>
                            <td>
                              <div className="progress">
                                <span style={{ width: `${pct}%` }} />
                              </div>
                              <span style={{ fontWeight: 800, fontSize: '13px' }}>{pct}%</span>
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
                <div className="detail-block">
                  <h2>
                    <span className="step">05</span>
                    <span>Témoignage du terrain</span>
                  </h2>

                  <div className="quote-card">
                    <Quote className="q" />
                    <blockquote>« {project.temoignage.quote} »</blockquote>
                    <cite>
                      {project.temoignage.author}
                      <span>{project.temoignage.role}</span>
                    </cite>
                  </div>
                </div>
              )}

              {/* 6. Leçons apprises & capitalisation (CDC §4) */}
              {project.lecons && project.lecons.length > 0 && (
                <div className="detail-block">
                  <h2>
                    <span className="step">06</span>
                    <span>Leçons apprises & Capitalisation</span>
                  </h2>

                  <div style={{ display: 'grid', gap: '12px' }}>
                    {project.lecons.map((l, i) => (
                      <div
                        key={i}
                        style={{
                          padding: '18px 22px',
                          borderRadius: '12px',
                          background: 'var(--paper)',
                          borderLeft: '4px solid var(--green-3)',
                          display: 'flex',
                          gap: '14px',
                          alignItems: 'flex-start',
                        }}
                      >
                        <Lightbulb size={20} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '15px' }}>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. Documents & Rapports du projet */}
              <div className="detail-block">
                <h2>
                  <span className="step">07</span>
                  <span>Rapports & Documents du projet</span>
                </h2>

                {projectDocs.length > 0 ? (
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {projectDocs.map((doc) => (
                      <div key={doc.slug} className="doc-row">
                        <div className="ficon">PDF</div>
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
                  <p style={{ color: 'var(--muted)' }}>
                    Rapport annuel et fiches de capitalisation accessibles dans la médiathèque générale.
                  </p>
                )}
              </div>
            </div>

            {/* Barre latérale : Métadonnées du projet */}
            <aside className="detail-aside">
              <div className="fact-card">
                <h4>Fiche technique du projet</h4>

                <dl className="facts">
                  <div>
                    <dt>Statut</dt>
                    <dd style={{ color: 'var(--green-2)' }}>
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

                  <div>
                    <dt>Budget global</dt>
                    <dd style={{ color: 'var(--green)', fontSize: '16px' }}>
                      {project.budget}
                    </dd>
                  </div>

                  <div>
                    <dt>Bénéficiaires</dt>
                    <dd>
                      {formatNumber(project.beneficiaires)} {project.beneficiairesLabel}
                    </dd>
                  </div>

                  {project.tauxRealisation !== undefined && (
                    <div>
                      <dt>Taux de réalisation</dt>
                      <dd>{project.tauxRealisation}%</dd>
                    </div>
                  )}
                </dl>

                {/* Bailleurs & Partenaires associés */}
                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', display: 'block', marginBottom: '10px' }}>
                    Partenaires & Bailleurs associés
                  </span>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    {projectPartners.map((pt) => (
                      <div
                        key={pt.slug}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: 'var(--paper)',
                        }}
                      >
                        <Building2 size={16} style={{ color: 'var(--green)' }} />
                        <div>
                          <strong style={{ fontSize: '13px', display: 'block' }}>
                            {pt.name}
                          </strong>
                          <small style={{ color: 'var(--muted)', fontSize: '11px' }}>
                            {pt.type}
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '22px' }}>
                  <Link
                    href="/contact?type=partenariat"
                    className="btn btn-gold btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>Rejoindre ou co-financer</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Raccourci vers la carte */}
              <div className="card" style={{ padding: '24px', background: 'var(--green-soft)' }}>
                <MapPin size={22} style={{ color: 'var(--green-2)', marginBottom: '8px' }} />
                <h4 style={{ color: 'var(--green)', fontSize: '16px', marginBottom: '6px' }}>
                  Localiser sur la carte interactive
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
                  Visualisez les localités et villages bénéficiaires de ce projet.
                </p>
                <Link
                  href="/cartographie"
                  className="text-link"
                  style={{ marginTop: '10px' }}
                >
                  <span>Ouvrir la cartographie</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
