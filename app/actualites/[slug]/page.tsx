import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  User,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Share2,
} from 'lucide-react'
import { news, formatDate, projects, getPartner } from '@/lib/data'

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

  const others = news.filter((n) => n.slug !== article.slug).slice(0, 3)

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
            <span className="truncate max-w-xs">{article.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-gold">{article.category}</span>
            <span className="text-xs sm:text-sm text-white/80 font-semibold inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(article.date)}
            </span>
            {article.location && (
              <span className="text-xs sm:text-sm text-white/80 font-semibold inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-secondary" />
                {article.location}
              </span>
            )}
          </div>

          <h1 className="display max-w-4xl">{article.title}</h1>
          <p className="lead max-w-3xl text-secondary">{article.excerpt}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* CORPS PRINCIPAL DE L'ARTICLE */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm">
                {/* EN-TÊTE D'AUTORITÉ DE L'ARTICLE */}
                <div className="pb-6 mb-8 border-b border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <User size={15} />
                    </div>
                    <div>
                      <strong className="block text-textDark font-bold">
                        {article.author || 'Cellule Communication & Redevabilité EICF'}
                      </strong>
                      <span>Publication certifiée ONG EICF</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full font-semibold border border-emerald-200">
                    <CheckCircle2 size={13} />
                    <span>Information documentée de terrain</span>
                  </span>
                </div>

                {/* CALLOUT FAITS SAILLANTS (KEY POINTS) */}
                {article.keyPoints && article.keyPoints.length > 0 && (
                  <div className="mb-8 p-6 rounded-2xl bg-secondary/15 border-l-4 border-secondary">
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-textDark mb-3 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span>Faits saillants &amp; Chiffres clés</span>
                    </h3>
                    <ul className="space-y-2">
                      {article.keyPoints.map((kp, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-textDark flex items-start gap-2"
                        >
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span>{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* TEXTE COMPLET DE L'ARTICLE */}
                <div className="space-y-6 text-base sm:text-lg text-textDark/90 leading-relaxed font-sans">
                  {article.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* PROJET ASSOCIÉ (AVEC RESPECT DE LA CONFIDENTIALITÉ BUDGÉTAIRE) */}
                {relatedProject && (
                  <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-background border-l-4 border-primary flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
                    <div>
                      <span className="inline-block bg-secondary/25 text-textDark px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider mb-2">
                        Projet terrain associé
                      </span>
                      <h3 className="text-xl font-heading font-bold text-textDark">
                        {relatedProject.name} — {relatedProject.fullName}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted mt-2">
                        <span>Zone : {relatedProject.zone}</span>
                        <span>•</span>
                        <span>
                          Bailleurs :{' '}
                          <strong className="text-textDark font-semibold">
                            {relatedProject.partners
                              .map((s) => getPartner(s)?.short ?? s)
                              .join(', ')}
                          </strong>
                        </span>
                        {relatedProject.tauxRealisation && (
                          <>
                            <span>•</span>
                            <span className="text-emerald-700 font-bold">
                              Taux d’avancement : {relatedProject.tauxRealisation}%
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <Link
                      href={`/projets-actualites/${relatedProject.slug}`}
                      className="px-6 py-3 rounded-full bg-primary hover:bg-primaryDark text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 shrink-0 shadow-xs"
                    >
                      <span>Fiche projet complète</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}

                {/* NAVIGATION RETOUR */}
                <div className="mt-12 pt-6 border-t border-black/5 flex items-center justify-between">
                  <Link
                    href="/actualites"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
                  >
                    <ArrowLeft size={16} />
                    <span>Retour à toutes les actualités</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* COLONNE LATÉRALE (SIDEBAR) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* FAITS & MÉTADONNÉES */}
              <div className="bg-white rounded-3xl p-7 border border-black/5 shadow-sm">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-secondary mb-4">
                  Fiche de publication
                </h4>
                <dl className="facts">
                  <div>
                    <dt>Rubrique CDC</dt>
                    <dd className="font-semibold text-primary">{article.category}</dd>
                  </div>
                  <div>
                    <dt>Date de parution</dt>
                    <dd>{formatDate(article.date)}</dd>
                  </div>
                  {article.location && (
                    <div>
                      <dt>Localisation</dt>
                      <dd>{article.location}</dd>
                    </div>
                  )}
                  <div>
                    <dt>Source</dt>
                    <dd>{article.author || 'Cellule Communication EICF'}</dd>
                  </div>
                </dl>
              </div>

              {/* AUTRES ARTICLES */}
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
