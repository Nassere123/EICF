'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  GraduationCap,
  Droplets,
  HandHeart,
  Shield,
  HeartPulse,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Download,
  CheckCircle,
} from 'lucide-react'
import {
  kpiGroups,
  globalStats,
  impactSentence,
  formatNumber,
  type KpiGroup,
} from '@/lib/data'

interface ImpactDashboardProps {
  showHero?: boolean
}

export function ImpactDashboard({ showHero = false }: ImpactDashboardProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('all')

  const icons: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap size={20} />,
    Droplets: <Droplets size={20} />,
    HandHeart: <HandHeart size={20} />,
    Shield: <Shield size={20} />,
    HeartPulse: <HeartPulse size={20} />,
  }

  const displayedGroups =
    selectedGroup === 'all'
      ? kpiGroups
      : kpiGroups.filter((g) => g.id === selectedGroup)

  return (
    <div style={{ display: 'grid', gap: '34px' }}>
      {/* Synthèse générée automatiquement par IA (CDC §7) */}
      <div className="ai-summary on-light">
        <div className="ai-icon">
          <Sparkles size={22} />
        </div>
        <div style={{ flex: 1 }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--green-3)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '6px',
            }}
          >
            <span>Synthèse automatisée des indicateurs</span>
            <span className="badge badge-gold" style={{ fontSize: '9.5px', padding: '2px 8px' }}>
              IA EICF
            </span>
          </span>
          <p>
            {impactSentence}
            <span className="caret" />
          </p>
          <small>
            Indicateurs consolidés au 4e trimestre 2026 à partir des rapports de suivi-évaluation et des fiches bailleurs.
          </small>
        </div>
      </div>

      {/* Chiffres macro */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}
      >
        <div className="card" style={{ padding: '24px' }}>
          <span className="eyebrow plain" style={{ marginBottom: '6px' }}>Bénéficiaires directs</span>
          <strong style={{ fontFamily: 'var(--serif)', fontSize: '38px', color: 'var(--green)' }}>
            {formatNumber(globalStats.beneficiaires)}
            <span style={{ color: 'var(--gold)' }}>+</span>
          </strong>
          <p style={{ fontSize: '13px', marginTop: '4px' }}>Personnes touchées directement</p>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <span className="eyebrow plain" style={{ marginBottom: '6px' }}>Régions d’intervention</span>
          <strong style={{ fontFamily: 'var(--serif)', fontSize: '38px', color: 'var(--green)' }}>
            {globalStats.regions}
          </strong>
          <p style={{ fontSize: '13px', marginTop: '4px' }}>Présence territoriale nationale</p>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <span className="eyebrow plain" style={{ marginBottom: '6px' }}>Communautés suivies</span>
          <strong style={{ fontFamily: 'var(--serif)', fontSize: '38px', color: 'var(--green)' }}>
            {globalStats.communautes}
          </strong>
          <p style={{ fontSize: '13px', marginTop: '4px' }}>Villages et comités locaux</p>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <span className="eyebrow plain" style={{ marginBottom: '6px' }}>Projets documentés</span>
          <strong style={{ fontFamily: 'var(--serif)', fontSize: '38px', color: 'var(--green)' }}>
            {globalStats.projets}
          </strong>
          <p style={{ fontSize: '13px', marginTop: '4px' }}>
            {globalStats.projetsEnCours} en cours · {globalStats.projetsAcheves} achevés
          </p>
        </div>
      </div>

      {/* Onglets thématiques */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        <div className="chips">
          <button
            type="button"
            className={`chip ${selectedGroup === 'all' ? 'is-active' : ''}`}
            onClick={() => setSelectedGroup('all')}
          >
            <span>Toutes les thématiques</span>
          </button>
          {kpiGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              className={`chip ${selectedGroup === g.id ? 'is-active' : ''}`}
              onClick={() => setSelectedGroup(g.id)}
            >
              <span>{g.label}</span>
            </button>
          ))}
        </div>

        <Link href="/mediatheque" className="btn btn-ghost btn-sm">
          <Download size={14} />
          <span>Télécharger le rapport d’impact 2025</span>
        </Link>
      </div>

      {/* Grille des KPI par groupe */}
      <div style={{ display: 'grid', gap: '30px' }}>
        {displayedGroups.map((group) => (
          <div key={group.id} className="card" style={{ padding: '32px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '26px',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--line)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--green-soft)',
                  color: 'var(--green)',
                }}
              >
                {icons[group.icon] ?? <TrendingUp size={20} />}
              </div>
              <div>
                <h3 style={{ fontSize: '24px', margin: 0, color: 'var(--green)' }}>
                  {group.label}
                </h3>
                <small style={{ color: 'var(--muted)', fontSize: '13px' }}>
                  Suivi des indicateurs clés de performance (KPI)
                </small>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
              }}
            >
              {group.kpis.map((kpi, idx) => {
                const percent = Math.min(100, Math.round((kpi.value / kpi.target) * 100))
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '18px',
                      borderRadius: '14px',
                      backgroundColor: 'var(--paper)',
                      border: '1px solid var(--line)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--muted)' }}>
                      {kpi.label}
                    </span>

                    <strong
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: '34px',
                        color: 'var(--green)',
                        lineHeight: 1,
                      }}
                    >
                      {formatNumber(kpi.value)}
                      {kpi.suffix && (
                        <span style={{ fontSize: '20px', color: 'var(--gold)' }}>
                          {kpi.suffix}
                        </span>
                      )}
                    </strong>

                    <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '11px',
                          color: 'var(--muted)',
                          marginBottom: '6px',
                          fontWeight: 700,
                        }}
                      >
                        <span>Cible : {formatNumber(kpi.target)}</span>
                        <span>{percent}%</span>
                      </div>
                      <div className="progress">
                        <span style={{ width: `${percent}%` }} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
