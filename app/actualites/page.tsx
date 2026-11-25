'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Calendar,
  ArrowRight,
  MapPin,
  Search,
  Sparkles,
  BookOpen,
  Filter,
} from 'lucide-react'
import {
  news,
  newsCategories,
  formatDate,
  projects,
  getPartner,
} from '@/lib/data'

export default function ActualitesIndexPage() {
  const [selectedCat, setSelectedCat] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Filtrage combiné catégorie + recherche
  const filtered = news.filter((n) => {
    const matchesCat = selectedCat === 'all' || n.category === selectedCat
    const matchesSearch =
      searchQuery === '' ||
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (n.location && n.location.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCat && matchesSearch
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

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Récits de Terrain &amp; Vie Institutionnelle
          </span>

          <h1 className="display">
            Actualités, missions &amp;<br />
            <em>activités au plus près des communautés.</em>
          </h1>

          <p className="lead max-w-3xl">
            Suivez les temps forts de l’ONG EICF : cérémonies officielles, missions de
            supervision de bailleurs, ateliers de formation, communiqués institutionnels et
            histoires concrètes de terrain.
          </p>
        </div>
      </section>

      {/* SECTION ACTUALITÉS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* BARRE DE RECHERCHE ET FILTRES DANS UN CADRE INSTITUTIONNEL ÉLÉGANT */}
          <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-black/6">
              <div>
                <span className="inline-flex items-center gap-2 text-secondary font-bold tracking-wider uppercase text-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  8 Catégories Institutionnelles CDC
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mt-1">
                  Toutes les parutions EICF
                </h2>
              </div>

              {/* Champ de recherche avec cadre soigné */}
              <div className="relative w-full md:w-80 lg:w-96">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="text"
                  placeholder="Rechercher une actualité, une localité..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-black/12 bg-[#FBF8F3] text-xs sm:text-sm text-textDark placeholder-muted/80 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary focus:bg-white transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Chips catégories avec cadres harmonieux et état actif doré/doux */}
            <div className="flex flex-wrap gap-2.5 pt-6">
              <button
                type="button"
                className={`group px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 border ${
                  selectedCat === 'all'
                    ? 'bg-secondary text-textDark border-secondary font-bold shadow-xs'
                    : 'bg-[#FBF8F3] text-textDark/85 hover:text-textDark hover:bg-white border-black/10 hover:border-black/20'
                }`}
                onClick={() => setSelectedCat('all')}
              >
                <span>Toutes les publications</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full transition-colors ${
                    selectedCat === 'all'
                      ? 'bg-black/12 text-textDark font-bold'
                      : 'bg-black/5 text-muted group-hover:text-textDark'
                  }`}
                >
                  {news.length}
                </span>
              </button>

              {newsCategories.map((cat) => {
                const count = news.filter((n) => n.category === cat).length
                const isActive = selectedCat === cat

                return (
                  <button
                    key={cat}
                    type="button"
                    className={`group px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 border ${
                      isActive
                        ? 'bg-secondary text-textDark border-secondary font-bold shadow-xs'
                        : 'bg-[#FBF8F3] text-textDark/85 hover:text-textDark hover:bg-white border-black/10 hover:border-black/20'
                    }`}
                    onClick={() => setSelectedCat(cat)}
                  >
                    <span>{cat}</span>
                    {count > 0 && (
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? 'bg-black/12 text-textDark font-bold'
                            : 'bg-black/5 text-muted group-hover:text-textDark'
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* RÉSULTAT VIDE */}
          {filtered.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-border max-w-xl mx-auto my-12">
              <BookOpen size={36} className="mx-auto text-muted mb-3" />
              <p className="text-base font-bold text-textDark">
                Aucun article ne correspond à votre recherche.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCat('all')
                  setSearchQuery('')
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-secondary hover:bg-secondaryHover text-textDark text-xs font-bold transition-all shadow-sm"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <>
              {/* ARTICLE MIS EN AVANT (Style Charity Organization) */}
              {featured && (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group mb-12 min-h-[420px] sm:min-h-[480px] flex items-end">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                  <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-3xl text-white">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-secondary text-textDark px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                        À la une · {featured.category}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white/80 inline-flex items-center gap-1.5">
                        <Calendar size={14} />
                        {formatDate(featured.date)}
                      </span>
                      {featured.location && (
                        <span className="text-xs text-white/80 inline-flex items-center gap-1">
                          <MapPin size={13} className="text-secondary" />
                          <span>{featured.location}</span>
                        </span>
                      )}
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

              {/* AUTRES ARTICLES EN GRILLE */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((n) => {
                  const p = n.project ? projects.find((x) => x.slug === n.project) : null

                  return (
                    <article
                      key={n.slug}
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

                        {p && (
                          <div className="absolute bottom-3 left-3 bg-primary/90 text-white backdrop-blur px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                            Projet {p.name}
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted mb-3">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar size={13} />
                            <span>{formatDate(n.date)}</span>
                          </span>

                          {n.location && (
                            <span className="inline-flex items-center gap-1 text-[11px] text-textDark/70">
                              <MapPin size={12} className="text-secondary" />
                              <span className="truncate max-w-[140px]">{n.location}</span>
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-heading font-bold text-textDark mb-3 group-hover:text-primary transition-colors leading-snug">
                          <Link href={`/actualites/${n.slug}`}>{n.title}</Link>
                        </h3>

                        <p className="text-muted text-xs sm:text-sm mb-5 line-clamp-3 flex-1 leading-relaxed">
                          {n.excerpt}
                        </p>

                        <div className="pt-4 border-t border-border/60">
                          <Link
                            href={`/actualites/${n.slug}`}
                            className="text-primary font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                          >
                            <span>Lire l’article complet</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* BANDEAU NEWSLETTER INSTITUTIONNELLE */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-3xl p-8 sm:p-12 border border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1.5">
                Veille &amp; Communication Institutionnelle
              </span>
              <h3 className="text-2xl font-heading font-bold text-textDark mb-2">
                Recevez notre bulletin d’information trimestriel
              </h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">
                Résultats de missions, clôtures de projets et publications de notes de capitalisation directement dans votre boîte de réception.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Merci de votre intérêt ! Votre inscription au bulletin d’information EICF a bien été enregistrée.')
              }}
              className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto"
            >
              <input
                type="email"
                required
                placeholder="Votre adresse email professionnelle"
                className="px-4 py-3 rounded-full border border-border bg-white text-xs sm:text-sm text-textDark focus:outline-none focus:ring-2 focus:ring-primary/20 min-w-[280px]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-primary hover:bg-primaryDark text-white font-bold text-xs sm:text-sm transition-colors shrink-0"
              >
                S’abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
