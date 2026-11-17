'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Calendar,
  ArrowRight,
} from 'lucide-react'
import {
  news,
  newsCategories,
  formatDate,
} from '@/lib/data'

export default function ActualitesIndexPage() {
  const [selectedCat, setSelectedCat] = useState<string>('all')

  const filtered =
    selectedCat === 'all'
      ? news
      : news.filter((n) => n.category === selectedCat)

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Actualités & Événements</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Récits de Terrain & Vie Institutionnelle
          </span>

          <h1 className="display">
            Actualités, missions &<br />
            <em>activités au plus près des communautés.</em>
          </h1>

          <p className="lead">
            Suivez les temps forts de l’EICF : cérémonies, missions de
            supervision, ateliers de formation, communiqués institutionnels et
            histoires de terrain.
          </p>
        </div>
      </section>

      {/* Liste des articles avec les 8 catégories du CDC */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtres par catégorie */}
          <div className="flex justify-center mb-12">
            <div className="chips">
              <button
                type="button"
                className={`chip ${selectedCat === 'all' ? 'is-active' : ''}`}
                onClick={() => setSelectedCat('all')}
              >
                <span>Toutes les publications ({news.length})</span>
              </button>

              {newsCategories.map((cat) => {
                const count = news.filter((n) => n.category === cat).length
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`chip ${selectedCat === cat ? 'is-active' : ''}`}
                    onClick={() => setSelectedCat(cat)}
                  >
                    <span>{cat}</span>
                    {count > 0 && <span className="count">{count}</span>}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Article mis en avant (Style Charity Organization blog.html) */}
          {featured && (
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group mb-12 min-h-[420px] sm:min-h-[480px] flex items-end">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
              <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-3xl text-white">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-secondary text-textDark px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                    À la une · {featured.category}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white/80">
                    {formatDate(featured.date)}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-snug">
                  {featured.title}
                </h3>
                <p className="text-white/85 text-sm sm:text-base md:text-lg mb-6 line-clamp-2 leading-relaxed">
                  {featured.excerpt}
                </p>
                <Link
                  href={`/actualites/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-secondary font-bold hover:underline text-sm sm:text-base"
                >
                  <span>Lire l’article complet</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}

          {/* Autres articles (Style Charity Organization blog.html) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((n) => (
              <article
                key={n.slug}
                data-reveal
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group border border-black/5 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {n.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <Calendar size={14} />
                    <span>{formatDate(n.date)}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-textDark mb-3 group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/actualites/${n.slug}`}>{n.title}</Link>
                  </h3>
                  <p className="text-muted text-sm mb-5 line-clamp-3 flex-1 leading-relaxed">
                    {n.excerpt}
                  </p>
                  <Link
                    href={`/actualites/${n.slug}`}
                    className="text-primary font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                  >
                    <span>Lire l’article complet</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
