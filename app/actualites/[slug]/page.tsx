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
            <span className="text-xs sm:text-sm text-white/80 font-semibold inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(article.date)}
            </span>
          </div>

          <h1 className="display max-w-4xl">{article.title}</h1>
          <p className="lead max-w-3xl text-secondary">{article.excerpt}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm">
                <div className="space-y-6 text-base sm:text-lg text-text leading-relaxed">
                  {article.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {relatedProject && (
                  <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-background border-l-4 border-primary flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <span className="inline-block bg-secondary/25 text-textDark px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider mb-1.5">
                        Projet associé
                      </span>
                      <h3 className="text-xl font-heading font-bold text-textDark">
                        {relatedProject.name} — {relatedProject.fullName}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted mt-1">
                        {relatedProject.zone} · {relatedProject.budget}
                      </p>
                    </div>
                    <Link
                      href={`/projets-actualites/${relatedProject.slug}`}
                      className="px-6 py-3 rounded-full bg-primary hover:bg-primaryDark text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
                    >
                      <span>Fiche projet</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}

                <div className="mt-10 pt-6 border-t border-black/5">
                  <Link
                    href="/actualites"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                  >
                    <ArrowLeft size={15} />
                    <span>Retour aux actualités</span>
                  </Link>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl p-7 border border-black/5 shadow-sm">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-secondary mb-4">
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

              <div className="bg-white rounded-3xl p-7 border border-black/5 shadow-sm">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-secondary mb-4">
                  À lire également
                </h4>
                <div className="space-y-3">
                  {others.map((o) => (
                    <Link
                      key={o.slug}
                      href={`/actualites/${o.slug}`}
                      className="block p-4 rounded-2xl bg-background hover:bg-primary/5 border border-black/5 transition-colors group"
                    >
                      <span className="inline-block bg-secondary/25 text-textDark px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-1.5">
                        {o.category}
                      </span>
                      <strong className="block text-sm font-heading font-bold text-textDark group-hover:text-primary transition-colors leading-snug">
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
