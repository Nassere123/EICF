'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin,
  ArrowRight,
  Sparkles,
  Calendar,
  Users,
  Briefcase,
  Layers,
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
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Nos projets</span>
          </div>
          <h1 className="display">
            Une base structurée<br />
            <em>de nos projets et interventions.</em>
          </h1>
          <p className="lead">
            Consultez les fiches détaillées de nos projets en cours de réalisation,
            les bilans de nos projets achevés ainsi que les projets en phase de
            conception ouverts au cofinancement.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '30px' }}>
            <Link href="/cartographie" className="btn btn-outline btn-sm">
              <MapPin size={14} />
              <span>Voir sur la carte interactive</span>
            </Link>
            <Link href="/impact" className="btn btn-gold btn-sm">
              <Sparkles size={14} />
              <span>Consulter le tableau d’impact</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          {/* Filtres par statut (CDC §4 : En cours, Achevés, En conception) */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
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

          {/* Grille des cartes projets */}
          <div className="grid-3">
            {filtered.map((p) => (
              <div key={p.slug} className="project-card">
                <div className="thumb">
                  <img src={p.image} alt={p.name} />
                  <span
                    className={`badge ${
                      p.status === 'en-cours'
                        ? 'badge-live'
                        : p.status === 'conception'
                        ? 'badge-gold'
                        : ''
                    }`}
                  >
                    {p.status === 'en-cours' && <span className="dot" />}
                    {statusLabel[p.status]}
                  </span>
                </div>

                <div className="body">
                  <span className="zone">
                    <MapPin size={13} />
                    {p.zone}
                  </span>

                  <h3>{p.name}</h3>
                  <p className="full">{p.fullName}</p>
                  <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
                    {p.summary}
                  </p>

                  {p.tauxRealisation !== undefined && (
                    <div style={{ marginTop: '4px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '11.5px',
                          fontWeight: 700,
                          color: 'var(--muted)',
                          marginBottom: '4px',
                        }}
                      >
                        <span>Taux de réalisation</span>
                        <span>{p.tauxRealisation}%</span>
                      </div>
                      <div className="progress">
                        <span style={{ width: `${Math.min(100, p.tauxRealisation)}%` }} />
                      </div>
                    </div>
                  )}

                  <dl className="meta">
                    <div>
                      <dt>Bénéficiaires</dt>
                      <dd>{formatNumber(p.beneficiaires)}</dd>
                    </div>
                    <div>
                      <dt>Budget</dt>
                      <dd>{p.budget}</dd>
                    </div>
                  </dl>

                  <div style={{ marginTop: '14px' }}>
                    <Link
                      href={`/projets-actualites/${p.slug}`}
                      className="btn btn-green btn-sm"
                      style={{ width: '100%' }}
                    >
                      <span>Fiche projet complète</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
