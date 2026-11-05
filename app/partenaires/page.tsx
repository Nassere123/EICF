'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ExternalLink,
  MapPin,
  Building2,
  Briefcase,
  ArrowRight,
  Handshake,
} from 'lucide-react'
import {
  partners,
  partnerCategories,
  projects,
  images,
  type PartnerCategory,
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
            <span>Nos partenaires</span>
          </div>
          <h1 className="display">
            Agir ensemble pour<br />
            <em>un impact plus grand et durable.</em>
          </h1>
          <p className="lead">
            Notre action s’appuie sur 4 collèges d’alliances complémentaires :
            bailleurs multilatéraux, ministères et collectivités, ONG
            opérationnelles et leaders communautaires.
          </p>

          <div style={{ marginTop: '26px' }}>
            <Link href="/appels-a-partenariat" className="btn btn-gold btn-sm">
              <Handshake size={14} />
              <span>Consulter les appels à partenariat</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          {/* Filtres par collège de partenaires (4 collèges du CDC §6) */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
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

          {/* Cérémonies officielles et missions de terrain avec nos partenaires */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px', marginBottom: '50px' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#fff', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={images.signatureMinistere}
                  alt="Signature de convention officielle avec les autorités nationales"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '18px 22px' }}>
                <span className="badge badge-gold" style={{ fontSize: '11px', marginBottom: '6px' }}>Conventions officielles</span>
                <h3 style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--green)', margin: '4px 0 6px' }}>Alliances ministérielles & programmes nationaux</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: 1.55 }}>Signature officielle d’accords cadre et conventions opérationnelles avec les ministères techniques et les programmes sectoriels de Côte d’Ivoire.</p>
              </div>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#fff', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={images.missionPartenaires}
                  alt="Supervision conjointe sur le terrain avec les partenaires techniques et financiers"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '18px 22px' }}>
                <span className="badge badge-live" style={{ fontSize: '11px', marginBottom: '6px' }}><span className="dot" /> Suivi & Redevabilité</span>
                <h3 style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--green)', margin: '4px 0 6px' }}>Missions conjointes de supervision de terrain</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: 1.55 }}>Évaluation conjointe de l’avancement et de l’impact des projets directement au contact des communautés avec les bailleurs de fonds.</p>
              </div>
            </div>
          </div>

          {/* Affichage structuré par collège */}
          <div style={{ display: 'grid', gap: '50px' }}>
            {displayedCategories.map((cat) => {
              const catPartners = partners.filter((p) => p.category === cat.id)

              return (
                <div key={cat.id}>
                  <div style={{ marginBottom: '22px' }}>
                    <span className="badge badge-gold" style={{ marginBottom: '6px' }}>
                      Collège de partenariat
                    </span>
                    <h2 className="h2" style={{ color: 'var(--green)' }}>
                      {cat.label}
                    </h2>
                    <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '4px' }}>
                      {cat.desc}
                    </p>
                  </div>

                  <div className="grid-3">
                    {catPartners.map((pt) => {
                      const linkedProjects = projects.filter((p) =>
                        p.partners.includes(pt.slug)
                      )

                      return (
                        <div key={pt.slug} className="card card-hover partner-card">
                          <div className="head">
                            {pt.logo ? (
                              <div
                                className="logo-mark"
                                style={{
                                  background: '#fff',
                                  border: '1px solid var(--line)',
                                  padding: '8px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <img
                                  src={pt.logo}
                                  alt={pt.name}
                                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                />
                              </div>
                            ) : (
                              <div className="logo-mark">{pt.short}</div>
                            )}
                            <div>
                              <span className="type">{pt.type}</span>
                              <h3>{pt.name}</h3>
                            </div>
                          </div>

                          <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
                            {pt.description}
                          </p>

                          <div className="rows">
                            <div>
                              <MapPin size={15} />
                              <span>Zone : <strong>{pt.zone}</strong></span>
                            </div>

                            {linkedProjects.length > 0 && (
                              <div>
                                <Briefcase size={15} />
                                <div>
                                  <span>Projets associés :</span>
                                  <div className="tags" style={{ marginTop: '4px' }}>
                                    {linkedProjects.map((p) => (
                                      <Link
                                        key={p.slug}
                                        href={`/projets-actualites/${p.slug}`}
                                        className="badge"
                                        style={{ fontSize: '10px' }}
                                      >
                                        {p.name} &rarr;
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {pt.url !== '#' && (
                              <div style={{ marginTop: '4px' }}>
                                <a
                                  href={pt.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-link"
                                  style={{ fontSize: '11px' }}
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
    </>
  )
}
