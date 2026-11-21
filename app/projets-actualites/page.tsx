'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin,
  ArrowRight,
  Sparkles,
  Handshake,
  ShieldCheck,
  LayoutGrid,
  TableProperties,
} from 'lucide-react'
import {
  projects,
  statusLabel,
  formatNumber,
  type ProjectStatus,
} from '@/lib/data'

const historicalReferencesTable = [
  {
    program: 'Projet PEJEDEC II et III dans la Région de la Bagoué',
    experience: 'THIMO, AVEC et autonomisation économique',
    slug: 'pejedec-bagoue',
    status: 'Achevé',
  },
  {
    program: 'Projet PEJEDEC II et III dans la Région de l’Agnéby-Tiassa',
    experience: 'Insertion socio-économique des jeunes',
    slug: 'pejedec-agneby-tiassa',
    status: 'Achevé',
  },
  {
    program: 'Projet AVEC-AEJ dans la Région du Folon',
    experience: 'Accompagnement des AVEC / autonomisation économique',
    slug: 'avec-aej-folon',
    status: 'Achevé',
  },
  {
    program: 'Projet SWEDD dans les régions Bounkani, Gontougo, Bélier, N’Zi, Moronou, Iffou',
    experience: 'Autonomisation des femmes et des adolescentes (2022–2024, clôturé le 31/12/2024)',
    slug: 'swedd',
    status: 'Achevé',
  },
  {
    program: 'Projet CLEF / Classes passerelles dans la région de San Pédro',
    experience: 'Éducation et réinsertion scolaire',
    slug: 'classes-passerelles',
    status: 'Achevé',
  },
  {
    program: 'Projet PDDIVS dans la commune de Bouna',
    experience: 'Développement durable et inclusif des villes secondaires',
    slug: 'pddivs-bouna',
    status: 'Achevé',
  },
  {
    program: 'Projet PASEA dans la région du Hambol (Katiola)',
    experience: 'Eau, hygiène et assainissement (9 TPE accompagnées, 788 latrines dans 10 villages)',
    slug: 'pasea',
    status: 'En cours',
  },
  {
    program: 'Programmes PNUD dans les régions du Tonkpi, Cavally',
    experience: 'Paix, Cohésion sociale et entrepreneuriat',
    slug: 'pnud-tonkpi-cavally',
    status: 'Achevé',
  },
  {
    program: 'Projet GIZ à Bouna',
    experience: 'Paix et Cohésion sociale',
    slug: 'giz-bouna',
    status: 'Achevé',
  },
]

export default function ProjetsIndexPage() {
  const [filter, setFilter] = useState<'all' | ProjectStatus>('all')
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.status === filter)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Projets &amp; Références historiques</span>
          </div>

          <span className="badge badge-gold mb-4">
            Portefeuille Opérationnel &amp; Références (2008 – 2026)
          </span>

          <h1 className="display">
            Projets en cours, projets achevés<br />
            <em>et références historiques d’EICF.</em>
          </h1>

          <p className="lead">
            Consultez les fiches validées de nos interventions en cours, le bilan
            de nos programmes achevés avec la Banque mondiale, le PNUD, la GIZ,
            l’UNICEF, l’UNFPA et l’AEJ, ainsi que nos projets en phase de conception.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/cartographie" className="btn btn-outline">
              <MapPin size={16} />
              <span>Carte opérationnelle</span>
            </Link>
            <Link href="/impact" className="btn btn-gold">
              <Sparkles size={16} />
              <span>Tableau de bord EICF Impact</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          {/* Barre de contrôles : Statut + Vue Cartes / Tableau */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="chips">
              <button
                type="button"
                className={`chip ${filter === 'all' ? 'is-active' : ''}`}
                onClick={() => { setFilter('all'); setViewMode('cards') }}
              >
                <span>Tous</span>
                <span className="count">{projects.length}</span>
              </button>
              <button
                type="button"
                className={`chip ${filter === 'en-cours' ? 'is-active' : ''}`}
                onClick={() => { setFilter('en-cours'); setViewMode('cards') }}
              >
                <span>En cours</span>
                <span className="count">
                  {projects.filter((p) => p.status === 'en-cours').length}
                </span>
              </button>
              <button
                type="button"
                className={`chip ${filter === 'acheve' ? 'is-active' : ''}`}
                onClick={() => { setFilter('acheve'); setViewMode('cards') }}
              >
                <span>Achevés</span>
                <span className="count">
                  {projects.filter((p) => p.status === 'acheve').length}
                </span>
              </button>
              <button
                type="button"
                className={`chip ${filter === 'conception' ? 'is-active' : ''}`}
                onClick={() => { setFilter('conception'); setViewMode('cards') }}
              >
                <span>En conception</span>
                <span className="count">
                  {projects.filter((p) => p.status === 'conception').length}
                </span>
              </button>
            </div>

            <div className="chips">
              <button
                type="button"
                className={`chip ${viewMode === 'cards' ? 'is-active' : ''}`}
                onClick={() => setViewMode('cards')}
              >
                <LayoutGrid size={14} />
                <span>Vue Cartes</span>
              </button>
              <button
                type="button"
                className={`chip ${viewMode === 'table' ? 'is-active' : ''}`}
                onClick={() => setViewMode('table')}
              >
                <TableProperties size={14} />
                <span>Tableau des références</span>
              </button>
            </div>
          </div>

          {viewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <article key={p.slug} className="card-mia">
                  <div className="card-mia-media">
                    <img src={p.image} alt={p.name} />
                    <span
                      className={`badge ${p.status === 'en-cours' || p.status === 'conception' ? 'badge-gold' : ''}`}
                      style={{ position: 'absolute', top: '10px', left: '10px' }}
                    >
                      {statusLabel[p.status]}
                    </span>
                  </div>

                  <div className="card-mia-body">
                    <div className="card-mia-meta">
                      <MapPin size={13} />
                      <span>{p.zone}</span>
                    </div>

                    <h3 className="card-mia-title">{p.name}</h3>
                    <p style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--green)' }}>
                      {p.fullName}
                    </p>
                    <p className="card-mia-desc">{p.summary}</p>

                    {p.tauxRealisation !== undefined && (
                      <div className="mt-2">
                        <div className="flex justify-between text-xs font-bold mb-1" style={{ color: 'var(--muted)' }}>
                          <span>Exécution physique</span>
                          <span style={{ color: 'var(--green)' }}>{p.tauxRealisation}%</span>
                        </div>
                        <div className="progress">
                          <span style={{ width: `${Math.min(100, p.tauxRealisation)}%` }} />
                        </div>
                      </div>
                    )}

                    <div className="card-mia-footer">
                      <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--ink)' }}>
                        {formatNumber(p.beneficiaires)} bénéficiaires
                      </span>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--green-3)' }}>
                        {p.duree}
                      </span>
                    </div>

                    <Link href={`/projets-actualites/${p.slug}`} className="card-mia-btn">
                      <span>Fiche projet complète</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="card" style={{ padding: '24px' }}>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="badge badge-gold mb-2">Références historiques et sectorielles</span>
                  <h2 style={{ fontSize: '24px', color: 'var(--ink)' }}>
                    Tableau consolidé des programmes exécutés par l’ONG EICF
                  </h2>
                </div>
                <span className="badge">
                  <ShieldCheck size={14} /> Validé Direction Exécutive
                </span>
              </div>

              <div className="overflow-x-auto border border-[#d4d4d4]">
                <table className="w-full text-left border-collapse bg-white text-sm">
                  <thead>
                    <tr className="bg-[#06352a] text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-extrabold">Projet / Programme &amp; Région</th>
                      <th className="py-3.5 px-4 font-extrabold">Expérience &amp; Compétences valorisées</th>
                      <th className="py-3.5 px-4 font-extrabold">Statut</th>
                      <th className="py-3.5 px-4 font-extrabold text-right">Fiche</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d4d4d4]">
                    {historicalReferencesTable.map((item) => (
                      <tr key={item.slug} className="hover:bg-[#f4f7f5] transition-colors">
                        <td className="py-3.5 px-4 font-bold text-[#0b1813]">{item.program}</td>
                        <td className="py-3.5 px-4 text-[#1c2a24]">{item.experience}</td>
                        <td className="py-3.5 px-4">
                          <span className={`badge ${item.status === 'En cours' ? 'badge-gold' : ''}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <Link
                            href={`/projets-actualites/${item.slug}`}
                            className="text-[#06352a] font-bold text-xs inline-flex items-center gap-1 hover:underline"
                          >
                            <span>Consulter</span>
                            <ArrowRight size={13} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-sm section-white">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="badge badge-gold">Mobilisation des Partenaires</span>
              <h2 className="mt-3 text-white">
                Co-construisons <em>les prochaines interventions</em>
              </h2>
              <p>
                Consultez nos notes conceptuelles en phase de conception ou évaluez nos capacités
                institutionnelles pour une mise en œuvre déléguée.
              </p>
            </div>
            <div className="actions">
              <Link href="/appels-a-partenariat" className="btn btn-gold">
                <Handshake size={16} />
                <span>Projets en conception</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/capacites-institutionnelles" className="btn btn-outline">
                <span>Capacités institutionnelles</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
