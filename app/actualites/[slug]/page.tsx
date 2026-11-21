import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react'
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

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-gold">{article.category}</span>
            <span className="text-xs sm:text-sm text-white/85 font-semibold inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(article.date)}
            </span>
          </div>

          <h1 className="display max-w-4xl">{article.title}</h1>
          <p className="lead max-w-3xl text-[#f8cc4d]">{article.excerpt}</p>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="card" style={{ padding: 'clamp(24px, 4vw, 44px)' }}>
                <div className="space-y-5 text-base sm:text-lg text-[#1c2a24] leading-relaxed">
                  {article.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {relatedProject && (
                  <div className="mt-8 p-6 bg-[#f4f7f5] border-l-4 border-[#06352a] border border-[#d4d4d4] flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <span className="badge badge-gold mb-2">Projet associé</span>
                      <h3 className="text-xl font-heading font-bold text-[#0b1813]">
                        {relatedProject.name} — {relatedProject.fullName}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4c5a53] mt-1">
                        {relatedProject.zone} · {relatedProject.budget}
                      </p>
                    </div>
                    <Link href={`/projets-actualites/${relatedProject.slug}`} className="btn btn-green btn-sm">
                      <span>Fiche projet</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-[#d4d4d4]">
                  <Link href="/actualites" className="btn btn-ghost btn-sm">
                    <ArrowLeft size={15} />
                    <span>Retour aux actualités</span>
                  </Link>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="fact-card">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#06352a] mb-4">
                  Informations de publication
                </h4>
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

              <div className="fact-card">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#06352a] mb-4">
                  À lire également
                </h4>
                <div className="space-y-3">
                  {others.map((o) => (
                    <Link
                      key={o.slug}
                      href={`/actualites/${o.slug}`}
                      className="block p-4 border border-[#d4d4d4] bg-[#ffffff] hover:border-[#06352a] transition-colors"
                    >
                      <span className="badge badge-gold mb-1.5">{o.category}</span>
                      <strong className="block text-sm font-heading font-bold text-[#0b1813]">
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
