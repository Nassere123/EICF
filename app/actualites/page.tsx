'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight, MapPin, Search } from 'lucide-react'
import { news, newsCategories, formatDate } from '@/lib/data'

export default function ActualitesIndexPage() {
  const [selectedCat, setSelectedCat] = useState<string>('all')
  const [search, setSearch] = useState('')

  const filtered = news.filter((n) => {
    const matchCat = selectedCat === 'all' || n.category === selectedCat
    const q = search.trim().toLowerCase()
    const matchQuery =
      !q ||
      n.title.toLowerCase().includes(q) ||
      n.excerpt.toLowerCase().includes(q) ||
      (n.location ?? '').toLowerCase().includes(q)
    return matchCat && matchQuery
  })

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Actualités &amp; Événements</span>
          </div>

          <span className="badge badge-gold mb-4">
            Récits de Terrain, Missions &amp; Cérémonies
          </span>

          <h1 className="display">
            Actualités, missions &amp;<br />
            <em>activités au plus près des communautés.</em>
          </h1>

          <p className="lead">
            Suivez les temps forts de l’ONG EICF : lancements de projets,
            signatures de conventions, missions de supervision, ateliers de formation et cérémonies de clôture.
          </p>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          {/* Barre de filtre avec select (<= 5 chips respecté) */}
          <div className="filter-bar">
            <div className="search-inline">
              <Search size={18} />
              <input
                type="text"
                placeholder="Rechercher une actualité, un lieu, un projet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              aria-label="Filtrer par catégorie d’actualité"
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="select-pill"
            >
              <option value="all">Toutes les catégories ({news.length})</option>
              {newsCategories.map((cat) => {
                const count = news.filter((n) => n.category === cat).length
                return (
                  <option key={cat} value={cat}>
                    {cat} ({count})
                  </option>
                )
              })}
            </select>
          </div>

          {featured && (
            <div className="card mb-8" style={{ padding: '16px' }}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6">
                  <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', border: '1px solid #d4d4d4' }}>
                    <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="badge badge-gold">À la une · {featured.category}</span>
                    <span className="text-xs font-bold text-[#4c5a53] inline-flex items-center gap-1">
                      <Calendar size={13} /> {formatDate(featured.date)}
                    </span>
                    {featured.location && (
                      <span className="text-xs font-bold text-[#06352a] inline-flex items-center gap-1">
                        <MapPin size={13} /> {featured.location}
                      </span>
                    )}
                  </div>
                  <h2 className="h3" style={{ color: 'var(--ink)' }}>{featured.title}</h2>
                  <p style={{ color: 'var(--muted)' }}>{featured.excerpt}</p>
                  <Link href={`/actualites/${featured.slug}`} className="btn btn-green">
                    <span>Lire l’article complet</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {rest.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((n) => (
                <article key={n.slug} className="card-mia">
                  <div className="card-mia-media">
                    <img src={n.image} alt={n.title} />
                    <span className="badge badge-gold" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                      {n.category}
                    </span>
                  </div>
                  <div className="card-mia-body">
                    <div className="card-mia-meta">
                      <Calendar size={13} />
                      <span>{formatDate(n.date)}</span>
                      {n.location && <span>· {n.location}</span>}
                    </div>
                    <h3 className="card-mia-title">
                      <Link href={`/actualites/${n.slug}`}>{n.title}</Link>
                    </h3>
                    <p className="card-mia-desc">{n.excerpt}</p>
                    <Link href={`/actualites/${n.slug}`} className="card-mia-btn">
                      <span>Lire l’article</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            !featured && (
              <div className="empty-state">
                <p>Aucune actualité ne correspond à votre recherche.</p>
              </div>
            )
          )}
        </div>
      </section>
    </>
  )
}
