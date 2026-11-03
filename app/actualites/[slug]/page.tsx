import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Tag, ArrowRight, Share2, Briefcase } from 'lucide-react'
import { news, formatDate, projects } from '@/lib/data'

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }))
}

export default async function ActualiteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = news.find((n) => n.slug === slug)
  if (!article) notFound()

  const relatedProject = article.project
    ? projects.find((p) => p.slug === article.project)
    : null

  const others = news.filter((n) => n.slug !== article.slug).slice(0, 2)

  return (
    <>
      <section className="page-hero has-image">
        <div className="page-hero-img">
          <img src={article.image} alt={article.title} />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/actualites">Actualités</Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
            <span className="badge badge-gold">{article.category}</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>
              {formatDate(article.date)}
            </span>
          </div>

          <h1 className="display" style={{ maxWidth: '900px' }}>
            {article.title}
          </h1>
          <p className="lead" style={{ maxWidth: '780px', color: 'var(--gold-2)' }}>
            {article.excerpt}
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="detail-layout">
            <div>
              <div style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--ink)' }}>
                {article.body.map((para, i) => (
                  <p key={i} style={{ marginBottom: '22px' }}>
                    {para}
                  </p>
                ))}
              </div>

              {relatedProject && (
                <div
                  className="card"
                  style={{
                    marginTop: '40px',
                    padding: '24px',
                    background: 'var(--green-soft)',
                    borderLeft: '4px solid var(--green)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '14px',
                  }}
                >
                  <div>
                    <span className="badge badge-gold" style={{ marginBottom: '6px' }}>
                      Projet associé
                    </span>
                    <h3 style={{ fontSize: '20px', color: 'var(--green)' }}>
                      {relatedProject.name} — {relatedProject.fullName}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--muted)', marginTop: '2px' }}>
                      {relatedProject.zone} · {relatedProject.budget}
                    </p>
                  </div>
                  <Link
                    href={`/projets-actualites/${relatedProject.slug}`}
                    className="btn btn-green btn-sm"
                  >
                    <span>Fiche projet</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              )}

              <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid var(--line)' }}>
                <Link href="/actualites" className="text-link">
                  <ArrowLeft size={15} />
                  <span>Retour aux actualités</span>
                </Link>
              </div>
            </div>

            <aside className="detail-aside">
              <div className="fact-card">
                <h4>Informations</h4>
                <dl className="facts">
                  <div>
                    <dt>Rubrique</dt>
                    <dd>{article.category}</dd>
                  </div>
                  <div>
                    <dt>Date de parution</dt>
                    <dd>{formatDate(article.date)}</dd>
                  </div>
                  <div>
                    <dt>Source</dt>
                    <dd>Équipe terrain EICF</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h4 style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '12px' }}>
                  À lire également
                </h4>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {others.map((o) => (
                    <Link
                      key={o.slug}
                      href={`/actualites/${o.slug}`}
                      className="card"
                      style={{ padding: '16px', textDecoration: 'none' }}
                    >
                      <span className="badge badge-gold" style={{ fontSize: '9px', marginBottom: '6px' }}>
                        {o.category}
                      </span>
                      <strong style={{ fontSize: '14px', display: 'block', color: 'var(--green)' }}>
                        {o.title}
                      </strong>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
