'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Calendar,
  ArrowRight,
  Sparkles,
  Tag,
  Newspaper,
  Wand2,
} from 'lucide-react'
import {
  news,
  newsCategories,
  formatDate,
  type NewsCategory,
} from '@/lib/data'
import { AiArticleGenerator } from '@/components/AiArticleGenerator'

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

      {/* Module IA : Rédaction d'article assistée par IA (CDC §8) */}
      <section className="section-sm bg-white" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="h2">
                Génération automatique d’articles<br />
                <em>à partir des données de terrain.</em>
              </h2>
              <p className="lead" style={{ marginTop: '8px' }}>
                Testez ci-dessous le workflow prévu : saisie des notes par
                l’équipe &rarr; proposition instantanée par l’IA &rarr; validation
                humaine &rarr; publication.
              </p>
            </div>
          </div>

          <AiArticleGenerator />
        </div>
      </section>

      {/* Liste des articles avec les 8 catégories du CDC */}
      <section className="section bg-paper">
        <div className="container">
          {/* Filtres par catégorie */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
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

          {/* Article mis en avant */}
          {featured && (
            <div
              className="card card-hover"
              style={{
                marginBottom: '40px',
                padding: '0',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
              }}
            >
              <div style={{ minHeight: '380px', position: 'relative' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  padding: 'clamp(28px, 4vw, 44px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className="badge badge-gold">{featured.category}</span>
                  <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 700 }}>
                    {formatDate(featured.date)}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', color: 'var(--green)', lineHeight: 1.15 }}>
                  {featured.title}
                </h3>

                <p style={{ color: 'var(--muted)', fontSize: '16px' }}>
                  {featured.excerpt}
                </p>

                <div style={{ marginTop: '12px' }}>
                  <Link
                    href={`/actualites/${featured.slug}`}
                    className="btn btn-green btn-sm"
                  >
                    <span>Lire l’article complet</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Autres articles */}
          <div className="grid-3">
            {rest.map((n) => (
              <article key={n.slug} className="news-card card card-hover">
                <div className="thumb">
                  <img src={n.image} alt={n.title} />
                </div>
                <div className="date">
                  <span className="badge badge-gold">{n.category}</span>
                  <span>{formatDate(n.date)}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
                <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                  <Link href={`/actualites/${n.slug}`} className="text-link">
                    <span>Lire l’article</span>
                    <ArrowRight size={13} />
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
