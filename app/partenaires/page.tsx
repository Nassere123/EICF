'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ExternalLink,
  MapPin,
  Briefcase,
  ArrowRight,
  Handshake,
  ShieldCheck,
  Award,
} from 'lucide-react'
import {
  partners,
  partnerCategories,
  projects,
  images,
} from '@/lib/data'

export default function PartenairesPage() {
  const [selectedCat, setSelectedCat] = useState<string>('all')

  const displayedCategories =
    selectedCat === 'all'
      ? partnerCategories
      : partnerCategories.filter((c) => c.id === selectedCat)

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Nos partenaires</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Écosystème & Alliances Stratégiques
          </span>

          <h1 className="display">
            Agir ensemble pour<br />
            <em>un impact plus grand et durable.</em>
          </h1>

          <p className="lead">
            Notre action s’appuie sur 4 collèges d’alliances complémentaires :
            bailleurs multilatéraux, ministères et collectivités, ONG
            opérationnelles et leaders communautaires.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/appels-a-partenariat"
              className="px-7 py-3.5 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-lg inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <Handshake size={17} />
              <span>Consulter les appels à partenariat</span>
            </Link>
            <Link
              href="/contact?type=partenariat"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Proposer une alliance</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION PRINCIPALE : PHOTOS DE TERRAIN & 4 COLLÈGES */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cérémonies officielles et missions de terrain avec nos partenaires */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div
              data-reveal
              className="rounded-3xl overflow-hidden bg-white border border-black/5 shadow-md hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={images.signatureMinistere}
                  alt="Signature de convention officielle avec les autorités nationales"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-secondary text-textDark px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  Conventions officielles
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-textDark mb-2">
                    Alliances ministérielles & programmes nationaux
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    Signature officielle d’accords-cadres et conventions opérationnelles avec les ministères techniques et les programmes sectoriels de Côte d’Ivoire.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-black/5 flex items-center gap-2 text-xs font-bold text-primary">
                  <ShieldCheck size={16} className="text-secondary" />
                  <span>Alignement complet avec le Plan National de Développement (PND)</span>
                </div>
              </div>
            </div>

            <div
              data-reveal
              className="rounded-3xl overflow-hidden bg-white border border-black/5 shadow-md hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={images.missionPartenaires}
                  alt="Supervision conjointe sur le terrain avec les partenaires techniques et financiers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-primary px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Suivi & Redevabilité
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-textDark mb-2">
                    Missions conjointes de supervision de terrain
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    Évaluation conjointe de l’avancement physique et financier et mesure de l’impact des projets directement au contact des communautés avec nos bailleurs.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-black/5 flex items-center gap-2 text-xs font-bold text-primary">
                  <Award size={16} className="text-secondary" />
                  <span>Audits réguliers et reporting aux normes internationales (BM, ONU, UE)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filtres par collège de partenaires (4 collèges du CDC §6) */}
          <div className="flex justify-center mb-14">
            <div className="chips">
              <button
                type="button"
                className={`chip ${selectedCat === 'all' ? 'is-active' : ''}`}
                onClick={() => setSelectedCat('all')}
              >
                <span>Tous les collèges ({partners.length})</span>
              </button>

              {partnerCategories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`chip ${selectedCat === c.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedCat(c.id)}
                >
                  <span>{c.label}</span>
                  <span className="count">
                    {partners.filter((p) => p.category === c.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Affichage structuré par collège */}
          <div className="space-y-16">
            {displayedCategories.map((cat) => {
              const catPartners = partners.filter((p) => p.category === cat.id)

              return (
                <div key={cat.id}>
                  <div className="mb-8 pb-4 border-b border-black/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                        Collège de partenariat
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mt-1">
                        {cat.label}
                      </h2>
                      <p className="text-muted text-sm sm:text-base mt-1 max-w-2xl">
                        {cat.desc}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full self-start md:self-end">
                      {catPartners.length} institution{catPartners.length > 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {catPartners.map((pt) => {
                      const linkedProjects = projects.filter((p) =>
                        p.partners.includes(pt.slug)
                      )

                      return (
                        <div
                          key={pt.slug}
                          data-reveal
                          className="card partner-card bg-white rounded-2xl p-7 border border-black/5 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-4 mb-5">
                              {pt.logo ? (
                                <div className="w-16 h-16 rounded-2xl bg-white border border-black/10 p-2 flex items-center justify-center flex-shrink-0 shadow-xs">
                                  <img
                                    src={pt.logo}
                                    alt={pt.name}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="logo-mark flex-shrink-0">{pt.short}</div>
                              )}
                              <div className="min-w-0">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary block">
                                  {pt.type}
                                </span>
                                <h3 className="text-lg sm:text-xl font-heading font-bold text-textDark leading-snug mt-0.5">
                                  {pt.name}
                                </h3>
                              </div>
                            </div>

                            <p className="text-muted text-sm leading-relaxed mb-6">
                              {pt.description}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-black/5 space-y-3 text-xs sm:text-sm">
                            <div className="flex items-start gap-2.5 text-text">
                              <MapPin size={15} className="text-secondary flex-shrink-0 mt-0.5" />
                              <span>
                                Zone : <strong className="text-textDark">{pt.zone}</strong>
                              </span>
                            </div>

                            {linkedProjects.length > 0 && (
                              <div className="flex items-start gap-2.5 text-text">
                                <Briefcase size={15} className="text-secondary flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  <span className="text-muted block mb-1.5">Projets associés :</span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {linkedProjects.map((p) => (
                                      <Link
                                        key={p.slug}
                                        href={`/projets-actualites/${p.slug}`}
                                        className="px-2.5 py-1 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary font-bold text-[11px] transition-colors inline-flex items-center gap-1"
                                      >
                                        <span>{p.name}</span>
                                        <ArrowRight size={10} />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {pt.url !== '#' && (
                              <div className="pt-2">
                                <a
                                  href={pt.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary font-bold text-xs inline-flex items-center gap-1.5 hover:underline"
                                >
                                  <span>Visiter le site officiel</span>
                                  <ExternalLink size={12} />
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BANDEAU D'ENGAGEMENT PARTENAIRE */}
      <section className="py-20 bg-primaryDark text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
            Mobilisation des Ressources
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-2 mb-5">
            Vous souhaitez bâtir un partenariat <span className="italic text-secondary">avec l’EICF ?</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos projets en phase de conception prêts au déploiement ou contactez notre direction exécutive pour co-construire un programme sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appels-a-partenariat"
              className="px-8 py-4 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-xl inline-flex items-center justify-center gap-2"
            >
              <span>Voir les projets à financer</span>
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/contact?type=partenariat"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold rounded-full transition-all inline-flex items-center justify-center"
            >
              <span>Contacter la Direction des Partenariats</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
