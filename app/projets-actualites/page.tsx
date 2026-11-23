'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin,
  ArrowRight,
  Sparkles,
  Handshake,
} from 'lucide-react'
import {
  projects,
  statusLabel,
  formatNumber,
  type ProjectStatus,
} from '@/lib/data'

export default function ProjetsIndexPage() {
  const [filter, setFilter] = useState<'all' | ProjectStatus>('all')

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.status === filter)

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Nos projets</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Portefeuille Opérationnel & Terrain
          </span>

          <h1 className="display">
            Une base structurée<br />
            <em>de nos projets et interventions.</em>
          </h1>

          <p className="lead">
            Consultez les fiches détaillées de nos projets en cours de réalisation,
            les bilans de nos projets achevés ainsi que les projets en phase de
            conception ouverts au cofinancement.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/cartographie"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <MapPin size={16} />
              <span>Voir sur la carte interactive</span>
            </Link>
            <Link
              href="/impact"
              className="px-7 py-3.5 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-lg inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <Sparkles size={16} />
              <span>Consulter le tableau d’impact</span>
            </Link>
          </div>
        </div>
      </section>

      {/* LISTE DES PROJETS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtres par statut (CDC §4 : En cours, Achevés, En conception) */}
          <div className="flex justify-center mb-14">
            <div className="chips">
              <button
                type="button"
                className={`chip ${filter === 'all' ? 'is-active' : ''}`}
                onClick={() => setFilter('all')}
              >
                <span>Tous les projets</span>
                <span className="count">{projects.length}</span>
              </button>
              <button
                type="button"
                className={`chip ${filter === 'en-cours' ? 'is-active' : ''}`}
                onClick={() => setFilter('en-cours')}
              >
                <span>Projets en cours</span>
                <span className="count">
                  {projects.filter((p) => p.status === 'en-cours').length}
                </span>
              </button>
              <button
                type="button"
                className={`chip ${filter === 'acheve' ? 'is-active' : ''}`}
                onClick={() => setFilter('acheve')}
              >
                <span>Projets achevés</span>
                <span className="count">
                  {projects.filter((p) => p.status === 'acheve').length}
                </span>
              </button>
              <button
                type="button"
                className={`chip ${filter === 'conception' ? 'is-active' : ''}`}
                onClick={() => setFilter('conception')}
              >
                <span>En conception (recherche de fonds)</span>
                <span className="count">
                  {projects.filter((p) => p.status === 'conception').length}
                </span>
              </button>
            </div>
          </div>

          {/* Grille des cartes projets (Style Charity Organization) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <div
                key={p.slug}
                data-reveal
                className="project-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-black/5 flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-4 left-4 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-sm inline-flex items-center gap-1.5 ${
                      p.status === 'en-cours'
                        ? 'bg-white/95 backdrop-blur text-primary'
                        : p.status === 'conception'
                        ? 'bg-secondary text-textDark'
                        : 'bg-primary text-white'
                    }`}
                  >
                    {p.status === 'en-cours' && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                    {statusLabel[p.status]}
                  </span>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-primary/85 mb-2 inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-secondary" />
                    {p.zone}
                  </span>

                  <h3 className="text-2xl font-heading font-bold text-textDark mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary mb-3">
                    {p.fullName}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                    {p.summary}
                  </p>

                  {p.tauxRealisation !== undefined && (
                    <div className="mb-5">
                      <div className="flex justify-between text-xs font-bold text-muted mb-1.5">
                        <span>Taux de réalisation</span>
                        <span className="text-primary">{p.tauxRealisation}%</span>
                      </div>
                      <div className="progress">
                        <span style={{ width: `${Math.min(100, p.tauxRealisation)}%` }} />
                      </div>
                    </div>
                  )}

                  <dl className="grid grid-cols-2 gap-4 pt-4 border-t border-black/5 mb-5">
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider font-bold text-muted">
                        Bénéficiaires
                      </dt>
                      <dd className="text-sm font-extrabold text-textDark mt-0.5">
                        {formatNumber(p.beneficiaires)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider font-bold text-muted">
                        Budget
                      </dt>
                      <dd className="text-sm font-extrabold text-textDark mt-0.5">
                        {p.budget}
                      </dd>
                    </div>
                  </dl>

                  <Link
                    href={`/projets-actualites/${p.slug}`}
                    className="w-full py-3 px-5 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>Fiche projet complète</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANDEAU D'APPEL AU COFINANCEMENT */}
      <section className="py-20 bg-primaryDark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
            Projets en Conception
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2 mb-4">
            Co-finançons ensemble <span className="italic text-secondary">les prochaines interventions</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Consultez nos études de faisabilité validées pour l’accès à l’eau solaire, l’alphabétisation numérique et l’agroforesterie communautaire.
          </p>
          <Link
            href="/appels-a-partenariat"
            className="px-8 py-4 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-lg inline-flex items-center gap-2"
          >
            <Handshake size={17} />
            <span>Voir les projets à financer</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
