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
  TrendingUp,
  Download,
  Bot,
} from 'lucide-react'
import {
  kpiGroups,
  globalStats,
  impactSentence,
  formatNumber,
} from '@/lib/data'
import { CountUp } from '@/components/Motion'

interface ImpactDashboardProps {
  showHero?: boolean
}

export function ImpactDashboard({ showHero = false }: ImpactDashboardProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('all')

  const icons: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap size={22} />,
    Droplets: <Droplets size={22} />,
    HandHeart: <HandHeart size={22} />,
    Shield: <Shield size={22} />,
    HeartPulse: <HeartPulse size={22} />,
  }

  const displayedGroups =
    selectedGroup === 'all'
      ? kpiGroups
      : kpiGroups.filter((g) => g.id === selectedGroup)

  return (
    <div className="space-y-12">
      {/* Synthèse générée automatiquement par IA (CDC §7) */}
      <div className="rounded-3xl bg-primary text-white p-7 sm:p-9 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-4xl">
            <div className="w-12 h-12 rounded-2xl bg-secondary text-textDark flex items-center justify-center flex-shrink-0 shadow-md">
              <Bot size={24} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-extrabold tracking-widest uppercase text-secondary inline-flex items-center gap-1.5">
                  <Sparkles size={13} /> Synthèse automatisée des indicateurs
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-accent text-[10px] font-bold uppercase">
                  IA EICF
                </span>
              </div>
              <p className="text-white text-base sm:text-xl font-heading leading-relaxed">
                {impactSentence}
                <span className="caret" />
              </p>
              <small className="block text-xs text-white/70 mt-2">
                Indicateurs consolidés au 4e trimestre 2026 à partir des rapports de suivi-évaluation et des fiches bailleurs.
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Chiffres macro animés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          data-reveal
          className="kpi-card bg-white rounded-2xl p-6 border border-black/5 shadow-xs hover:shadow-md transition-all"
        >
          <span className="text-xs font-extrabold uppercase tracking-wider text-secondary">
            Bénéficiaires directs
          </span>
          <strong className="text-3xl sm:text-4xl font-heading font-bold text-primary mt-1 block">
            <CountUp value={globalStats.beneficiaires} suffix="+" />
          </strong>
          <p className="text-xs sm:text-sm text-muted mt-1">
            Personnes touchées directement
          </p>
        </div>

        <div
          data-reveal
          className="kpi-card bg-white rounded-2xl p-6 border border-black/5 shadow-xs hover:shadow-md transition-all"
        >
          <span className="text-xs font-extrabold uppercase tracking-wider text-secondary">
            Régions d’intervention
          </span>
          <strong className="text-3xl sm:text-4xl font-heading font-bold text-primary mt-1 block">
            <CountUp value={globalStats.regions} />
          </strong>
          <p className="text-xs sm:text-sm text-muted mt-1">
            Présence territoriale nationale
          </p>
        </div>

        <div
          data-reveal
          className="kpi-card bg-white rounded-2xl p-6 border border-black/5 shadow-xs hover:shadow-md transition-all"
        >
          <span className="text-xs font-extrabold uppercase tracking-wider text-secondary">
            Communautés suivies
          </span>
          <strong className="text-3xl sm:text-4xl font-heading font-bold text-primary mt-1 block">
            <CountUp value={globalStats.communautes} suffix="+" />
          </strong>
          <p className="text-xs sm:text-sm text-muted mt-1">
            Villages et comités locaux
          </p>
        </div>

        <div
          data-reveal
          className="kpi-card bg-white rounded-2xl p-6 border border-black/5 shadow-xs hover:shadow-md transition-all"
        >
          <span className="text-xs font-extrabold uppercase tracking-wider text-secondary">
            Projets documentés
          </span>
          <strong className="text-3xl sm:text-4xl font-heading font-bold text-primary mt-1 block">
            <CountUp value={globalStats.projets} />
          </strong>
          <p className="text-xs sm:text-sm text-muted mt-1">
            {globalStats.projetsEnCours} en cours · {globalStats.projetsAcheves} achevés
          </p>
        </div>
      </div>

      {/* Onglets thématiques */}
      <div className="flex flex-wrap justify-between items-center gap-4">
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

        <Link
          href="/mediatheque"
          className="px-5 py-2.5 rounded-full bg-white border border-black/10 hover:border-primary text-primary font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 shadow-xs"
        >
          <Download size={14} />
          <span>Télécharger le rapport d’impact</span>
        </Link>
      </div>

      {/* Grille des KPI par groupe */}
      <div className="space-y-8">
        {displayedGroups.map((group) => (
          <div
            key={group.id}
            data-reveal
            className="bg-white rounded-3xl p-7 sm:p-9 border border-black/5 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-7 pb-5 border-b border-black/5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                {icons[group.icon] ?? <TrendingUp size={22} />}
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-textDark">
                  {group.label}
                </h3>
                <span className="text-xs text-muted font-medium">
                  Suivi des indicateurs clés de performance (KPI)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {group.kpis.map((kpi, idx) => {
                const percent = Math.min(100, Math.round((kpi.value / kpi.target) * 100))
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-background border border-black/5 flex flex-col justify-between gap-3"
                  >
                    <span className="text-xs sm:text-sm font-bold text-text">
                      {kpi.label}
                    </span>

                    <strong className="text-3xl font-heading font-bold text-primary leading-none my-1">
                      <CountUp value={kpi.value} suffix={kpi.suffix ?? ''} />
                    </strong>

                    <div className="pt-2 border-t border-black/5">
                      <div className="flex justify-between text-[11px] font-bold text-muted mb-1.5">
                        <span>Cible : {formatNumber(kpi.target)}</span>
                        <span className="text-primary">{percent}%</span>
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
