'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Quote,
  Sparkles,
  MapPin,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Search,
  Filter,
} from 'lucide-react'
import { stories, beforeAfter, projects, type Story } from '@/lib/data'

export default function TemoignagesPage() {
  const [selectedDomain, setSelectedDomain] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Extraire les domaines uniques
  const domains = Array.from(new Set(stories.map((s) => s.domain)))

  // Filtrage
  const filteredStories = stories.filter((s) => {
    const matchesDomain =
      selectedDomain === 'all' || s.domain === selectedDomain
    const matchesSearch =
      searchQuery === '' ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.locality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.story.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDomain && matchesSearch
  })

  return (
    <>
      {/* HERO BANNER */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Bénéficiaires &amp; Témoignages</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Récits de Changement &amp; Voix des Communautés
          </span>

          <h1 className="display">
            Des vies transformées,<br />
            <em>la dignité restaurée.</em>
          </h1>

          <p className="lead max-w-3xl">
            Derrière chaque chiffre certifié, il y a des femmes, des jeunes, des
            artisans et des familles qui construisent leur autonomie. Découvrez
            leurs parcours vécus et documentés au plus près du terrain.
          </p>
        </div>
      </section>

      {/* CHARTE DE PROTECTION ÉTHIQUE & SAUVEGARDE COMMUNAUTAIRE (Audit Point 6) */}
      <section className="bg-primary/5 py-8 border-y border-primary/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-primary/20 shadow-xs flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-bold text-primary flex items-center gap-2">
                <span>Charte éthique de recueil des témoignages &amp; Protection des bénéficiaires</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  Protocole PSEA / Sauvegarde
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-textDark/85 mt-1 leading-relaxed">
                Tous les témoignages présentés sur ce portail sont collectés avec le consentement libre, préalable et éclairé des participants. Conformément à notre politique de Sauvegarde de l’Enfance et aux standards humanitaires internationaux, les identités des mineurs ou personnes en situation de vulnérabilité sont anonymisées ou abrégées. L’ONG EICF s’interdit toute mise en scène misérabiliste et valorise rigoureusement la résilience et le pouvoir d’agir des populations.
              </p>
            </div>
            <Link
              href="/capacites-institutionnelles"
              className="shrink-0 text-xs font-bold text-primary hover:text-secondary inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              <span>Voir nos garanties institutionnelles</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES AVEC FILTRES & RECHERCHE */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* BARRE D'OUTILS ET FILTRES */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
              <div>
                <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                  Portraits &amp; Récits de Terrain
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mt-1">
                  Paroles de bénéficiaires certifiés
                </h2>
              </div>

              {/* Champ de recherche */}
              <div className="relative max-w-md w-full">
                <Search
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="text"
                  placeholder="Rechercher par prénom, localité ou projet..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-white text-xs sm:text-sm text-textDark placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Chips de filtrage par domaine */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSelectedDomain('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedDomain === 'all'
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-textDark hover:bg-white/80 border border-border'
                }`}
              >
                Tous les domaines ({stories.length})
              </button>

              {domains.map((dom) => {
                const count = stories.filter((s) => s.domain === dom).length
                const isActive = selectedDomain === dom

                return (
                  <button
                    key={dom}
                    type="button"
                    onClick={() => setSelectedDomain(dom)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-white text-textDark hover:bg-white/80 border border-border'
                    }`}
                  >
                    <span>{dom}</span>
                    <span className="ml-1.5 opacity-70">({count})</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* LISTE DES TÉMOIGNAGES */}
          {filteredStories.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-border max-w-xl mx-auto">
              <MessageSquare size={36} className="mx-auto text-muted mb-3" />
              <p className="text-base font-bold text-textDark">
                Aucun témoignage ne correspond à vos critères.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedDomain('all')
                  setSearchQuery('')
                }}
                className="mt-4 px-5 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-primaryDark transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredStories.map((s, idx) => {
                const p = projects.find((x) => x.slug === s.project)
                const isEven = idx % 2 === 1

                return (
                  <article
                    key={s.slug}
                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-black/5 grid grid-cols-1 lg:grid-cols-12"
                  >
                    {/* Colonne Image & Badges */}
                    <div
                      className={`lg:col-span-5 relative min-h-[340px] lg:min-h-[460px] overflow-hidden ${
                        isEven ? 'lg:order-2' : ''
                      }`}
                    >
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent lg:hidden" />
                      
                      {/* Badge flottant sur l'image */}
                      <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                        <strong className="block text-lg font-bold">
                          {s.name}
                        </strong>
                        <span className="text-xs opacity-90">{s.role}</span>
                      </div>

                      <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur text-primary text-[11px] font-extrabold uppercase tracking-wider shadow-xs">
                          {s.domain}
                        </span>
                        {s.consentProtected && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-900/90 text-white text-[10px] font-bold flex items-center gap-1 backdrop-blur shadow-xs">
                            <ShieldCheck size={11} />
                            <span>Identité protégée · PSEA</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Colonne Contenu Textuel & Mesures d'Impact */}
                    <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                      <div>
                        {/* Méta badges du haut */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-border/60">
                          <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                            <span className="inline-flex items-center gap-1 text-primary font-bold">
                              <MapPin size={13} className="text-secondary" />
                              <span>{s.locality}</span>
                            </span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-1">
                              <Calendar size={13} />
                              <span>{s.year}</span>
                            </span>
                          </div>

                          {p && (
                            <Link
                              href={`/projets-actualites/${p.slug}`}
                              className="px-3 py-1 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-xs transition-colors inline-flex items-center gap-1"
                            >
                              <span>Projet {p.name}</span>
                              <ArrowRight size={12} />
                            </Link>
                          )}
                        </div>

                        {/* Citation principale */}
                        <div className="relative mb-5">
                          <Quote
                            size={32}
                            className="text-secondary/30 absolute -top-2 -left-2 pointer-events-none"
                          />
                          <blockquote className="text-xl sm:text-2xl font-heading font-bold text-primary leading-snug pl-6 italic">
                            « {s.quote} »
                          </blockquote>
                        </div>

                        {/* Récit détaillé */}
                        <p className="text-textDark/85 text-xs sm:text-sm leading-relaxed mb-6">
                          {s.story}
                        </p>

                        {/* Micro-bloc Avant / Après certifié */}
                        <div className="p-4 rounded-2xl bg-background border border-border/80 mb-6">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-textDark mb-2">
                            <TrendingUp size={14} className="text-secondary" />
                            <span>Impact mesuré sur le terrain : {s.beforeAfterImpact.indicator}</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div className="p-2.5 rounded-xl bg-white border border-border">
                              <span className="block text-[10px] uppercase font-bold text-muted">
                                Situation initiale
                              </span>
                              <span className="font-semibold text-rose-700">
                                {s.beforeAfterImpact.before}
                              </span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                              <span className="block text-[10px] uppercase font-bold text-emerald-800">
                                Changement constaté
                              </span>
                              <span className="font-bold text-emerald-900">
                                {s.beforeAfterImpact.after}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Signature & Consentement */}
                      <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <strong className="block text-base font-heading font-bold text-textDark">
                            {s.name}
                          </strong>
                          <span className="text-xs text-muted font-medium">
                            {s.role}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                            <CheckCircle2 size={12} />
                            <span>Consentement éclairé vérifié</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* 2. COMPARATIFS « AVANT / APRÈS » CERTIFIÉS (CDC §5) */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Indicateurs de Performance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2">
              Avant &amp; Après :{' '}
              <span className="italic text-primary">la preuve par les indicateurs.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base mt-4">
              Comparaison rigoureuse des données de référence initiales et des résultats consolidés au terme des cycles d’exécution de nos projets phares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beforeAfter.map((ba, idx) => (
              <div
                key={idx}
                className="bg-background rounded-3xl p-6 sm:p-7 border border-black/5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <h3 className="text-base font-heading font-bold text-textDark mb-4 leading-snug">
                  {ba.label}
                </h3>

                <div className="space-y-3 pt-3 border-t border-border">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted font-medium">Avant intervention :</span>
                    <strong className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded font-mono">
                      {ba.before}
                    </strong>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-800 font-bold">Résultat certifié :</span>
                    <strong className="text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-bold font-mono">
                      {ba.after}
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. APPEL À L'ÉCOUTE & REDEVABILITÉ COMMUNAUTAIRE (MGP) */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primaryDark/60 rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-2">
                Redevabilité &amp; Dialogue Continu
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
                Vous êtes bénéficiaire ou partenaire de l’ONG EICF ?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Votre retour d’expérience, vos propositions d’amélioration ou vos signalements sont essentiels pour garantir la qualité de nos actions. Le Mécanisme de Gestion des Plaintes et des Retours (MGP) est accessible en toute confidentialité.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-secondary hover:bg-secondaryDark text-textDark font-bold text-xs sm:text-sm transition-colors text-center"
              >
                Partager un témoignage
              </Link>
              <Link
                href="/capacites-institutionnelles"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors text-center border border-white/20"
              >
                Consulter le MGP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
