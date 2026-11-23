'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Users,
  GraduationCap,
  Baby,
  HandHeart,
  Briefcase,
  HeartPulse,
  Droplets,
  Scale,
  Handshake,
  Sprout,
  LifeBuoy,
  Search,
} from 'lucide-react'
import { domains, projects } from '@/lib/data'

export default function DomainesPage() {
  const [search, setSearch] = useState('')

  const domainIcons: Record<string, React.ReactNode> = {
    Users: <Users size={24} />,
    GraduationCap: <GraduationCap size={24} />,
    Baby: <Baby size={24} />,
    HandHeart: <HandHeart size={24} />,
    Briefcase: <Briefcase size={24} />,
    HeartPulse: <HeartPulse size={24} />,
    Droplets: <Droplets size={24} />,
    Scale: <Scale size={24} />,
    Handshake: <Handshake size={24} />,
    Sprout: <Sprout size={24} />,
    LifeBuoy: <LifeBuoy size={24} />,
  }

  const filtered = domains.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.short.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Domaines d’intervention</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            11 Secteurs Stratégiques d’Action
          </span>

          <h1 className="display">
            Des réponses concrètes<br />
            <em>aux défis majeurs des communautés.</em>
          </h1>

          <p className="lead">
            De l’éducation de base à la cohésion sociale, découvrez les 11
            secteurs dans lesquels l’ONG EICF conçoit et pilote des programmes à
            fort impact en Côte d’Ivoire.
          </p>
        </div>
      </section>

      {/* GRILLE DES 11 DOMAINES */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Barre de recherche rapide de domaine */}
          <div className="max-w-xl mx-auto mb-14">
            <div className="search-field">
              <Search size={18} className="lead-icon" />
              <input
                type="text"
                placeholder="Filtrer un domaine (eau, éducation, femmes, santé, paix...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((dom) => {
              const domProjects = projects.filter((p) => p.domain === dom.slug)

              return (
                <Link
                  key={dom.slug}
                  href={`/domaines-intervention/${dom.slug}`}
                  data-reveal
                  className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all group flex flex-col"
                >
                  {/* Image avec badge numéro et icône */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dom.image}
                      alt={dom.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                    <div className="absolute top-4 left-4 bg-secondary text-textDark px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-xs">
                      Domaine {dom.num}
                    </div>
                    <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-secondary transition-colors">
                      {domainIcons[dom.icon] ?? <Users size={22} />}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-textDark group-hover:text-primary transition-colors mb-2 leading-snug">
                        {dom.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-5">
                        {dom.short}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {domProjects.length} projet{domProjects.length > 1 ? 's' : ''} associé{domProjects.length > 1 ? 's' : ''}
                      </span>
                      <span className="text-primary inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        <span>Explorer</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Structure type d'une fiche domaine (CDC §3) */}
          <div className="mt-20 bg-white rounded-3xl p-8 sm:p-10 border border-black/5 shadow-xs text-center">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs">
              Architecture des Fiches Sectorielles (CDC §3)
            </span>
            <h3 className="text-2xl font-heading font-bold text-textDark mt-1 mb-6">
              Chaque domaine documente l’intégralité de la chaîne de résultats
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
              {[
                'Objectif',
                'Approche EICF',
                'Projets réalisés',
                'Projets en cours',
                'Résultats & KPI',
                'Photothèque',
                'Publications',
              ].map((step, i, arr) => (
                <div key={step} className="inline-flex items-center gap-2 sm:gap-3">
                  <span className="px-4 py-2 rounded-full bg-background border border-black/10 text-primary">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight size={14} className="text-secondary" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
