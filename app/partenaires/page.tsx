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
  Calendar,
  CheckCircle2,
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
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Bailleurs &amp; Partenaires</span>
          </div>

          <span className="badge badge-gold mb-4">
            Références Contractuelles &amp; Alliances (2008 – 2026)
          </span>

          <h1 className="display">
            Nos bailleurs de fonds &amp;<br />
            <em>partenaires institutionnels et opérationnels.</em>
          </h1>

          <p className="lead">
            Nous distinguons clairement les bailleurs ayant financé des projets exécutés par EICF
            de nos partenaires institutionnels, opérationnels et communautaires.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/capacites-institutionnelles" className="btn btn-gold">
              <ShieldCheck size={16} />
              <span>Évaluer nos capacités institutionnelles</span>
            </Link>
            <Link href="/appels-a-partenariat" className="btn btn-outline">
              <Handshake size={16} />
              <span>Appels à partenariat</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          {/* Cérémonies officielles et missions de terrain */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <article className="card-mia">
              <div className="card-mia-media">
                <img
                  src={images.signatureMinistere}
                  alt="Signature de convention officielle avec les autorités nationales"
                />
                <span className="badge badge-gold" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  Conventions &amp; Tutelles
                </span>
              </div>
              <div className="card-mia-body">
                <h3 className="card-mia-title">
                  Coordination avec les ministères, agences et collectivités
                </h3>
                <p className="card-mia-desc">
                  Exécution des conventions en étroite synergie avec les ministères techniques (MINHAS, MCNSLP, MENA), l’Agence Emploi Jeunes (AEJ / BCP-Emploi), les Conseils régionaux et les communes.
                </p>
                <div className="card-mia-footer">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06352a]">
                    <ShieldCheck size={14} /> Alignement avec les priorités sectorielles nationales
                  </span>
                </div>
              </div>
            </article>

            <article className="card-mia">
              <div className="card-mia-media">
                <img
                  src={images.missionPartenaires}
                  alt="Supervision conjointe sur le terrain avec les partenaires techniques et financiers"
                />
                <span className="badge badge-gold" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  Supervision &amp; Redevabilité
                </span>
              </div>
              <div className="card-mia-body">
                <h3 className="card-mia-title">
                  Missions conjointes de supervision et d’audit sur le terrain
                </h3>
                <p className="card-mia-desc">
                  Suivi rigoureux de l’exécution physique et financière des projets (PASEA, SWEDD, PEJEDEC, CLEF, PNUD, GIZ, PDDIVS) au contact des bénéficiaires, TPE et AVEC.
                </p>
                <div className="card-mia-footer">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06352a]">
                    <Award size={14} /> Conformité fiduciaire et sauvegardes PGES/PSEA/MGP
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* Filtres par collège (5 chips max) */}
          <div className="flex justify-center mb-12">
            <div className="chips">
              <button
                type="button"
                className={`chip ${selectedCat === 'all' ? 'is-active' : ''}`}
                onClick={() => setSelectedCat('all')}
              >
                <span>Tous ({partners.length})</span>
              </button>
              {partnerCategories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`chip ${selectedCat === c.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedCat(c.id)}
                >
                  <span>{c.label.split('&')[0].trim()}</span>
                  <span className="count">{partners.filter((p) => p.category === c.id).length}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {displayedCategories.map((cat) => {
              const catPartners = partners.filter((p) => p.category === cat.id)

              return (
                <div key={cat.id}>
                  <div className="mb-6 pb-4 border-b border-white/20 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <span className="badge badge-gold mb-2">Collège de partenariat</span>
                      <h2 className="h3 text-white">{cat.label}</h2>
                      <p className="text-sm text-white/80 mt-1 max-w-2xl">{cat.desc}</p>
                    </div>
                    <span className="badge badge-dark">
                      {catPartners.length} institution{catPartners.length > 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {catPartners.map((pt) => {
                      const linkedProjects = projects.filter((p) => p.partners.includes(pt.slug))

                      return (
                        <div key={pt.slug} className="card partner-card flex flex-col justify-between">
                          <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                              <span
                                className={`badge ${
                                  pt.relationStatus === 'Bailleur — Financement en cours' ||
                                  pt.relationStatus === 'Bailleur — Projets exécutés'
                                    ? 'badge-gold'
                                    : ''
                                }`}
                              >
                                {pt.relationStatus}
                              </span>
                              <span className="text-xs font-bold text-[#4c5a53]">{pt.type}</span>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                              {pt.logo ? (
                                <div className="w-16 h-16 bg-white border border-[#d4d4d4] p-2 flex items-center justify-center flex-shrink-0">
                                  <img src={pt.logo} alt={pt.name} className="max-w-full max-h-full object-contain" />
                                </div>
                              ) : (
                                <div className="logo-mark flex-shrink-0">{pt.short}</div>
                              )}
                              <h3 style={{ fontSize: '19px', marginBottom: 0 }}>{pt.name}</h3>
                            </div>

                            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                              {pt.description}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-[#d4d4d4] space-y-2 text-xs sm:text-sm">
                            <div className="flex items-start gap-2 text-[#1c2a24]">
                              <MapPin size={15} className="text-[#06352a] flex-shrink-0 mt-0.5" />
                              <span><strong>Zone :</strong> {pt.zone}</span>
                            </div>

                            {pt.period && (
                              <div className="flex items-start gap-2 text-[#1c2a24]">
                                <Calendar size={15} className="text-[#06352a] flex-shrink-0 mt-0.5" />
                                <span><strong>Période :</strong> {pt.period}</span>
                              </div>
                            )}

                            {pt.contractRef && (
                              <div className="flex items-start gap-2 text-[#1c2a24]">
                                <Briefcase size={15} className="text-[#06352a] flex-shrink-0 mt-0.5" />
                                <span><strong>Cadre :</strong> {pt.contractRef}</span>
                              </div>
                            )}

                            {pt.resultsObtained && (
                              <div className="flex items-start gap-2 p-3 bg-[#f4f7f5] border border-[#d4d4d4] text-[#1c2a24]">
                                <CheckCircle2 size={15} className="text-[#06352a] flex-shrink-0 mt-0.5" />
                                <span><strong>Résultats :</strong> {pt.resultsObtained}</span>
                              </div>
                            )}

                            {linkedProjects.length > 0 && (
                              <div className="pt-2 flex flex-wrap gap-1.5">
                                {linkedProjects.map((p) => (
                                  <Link
                                    key={p.slug}
                                    href={`/projets-actualites/${p.slug}`}
                                    className="badge hover:bg-[#06352a] hover:text-white transition-colors"
                                  >
                                    <span>{p.name}</span>
                                    <ArrowRight size={10} />
                                  </Link>
                                ))}
                              </div>
                            )}

                            {pt.url !== '#' && (
                              <div className="pt-2">
                                <a
                                  href={pt.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-link"
                                >
                                  <span>Site officiel</span>
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

      <section className="section-sm section-white">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="badge badge-gold">Due Diligence &amp; Partenariats</span>
              <h2 className="mt-3 text-white">
                Vérifiez nos capacités et <em>bâtissons un partenariat</em>
              </h2>
              <p>
                Consultez nos 7 piliers de capacités institutionnelles ou accédez à nos manuels et rapports d’audit.
              </p>
            </div>
            <div className="actions">
              <Link href="/capacites-institutionnelles" className="btn btn-gold">
                <span>Capacités institutionnelles</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact?type=partenariat" className="btn btn-outline">
                <span>Contacter la Direction Exécutive</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
