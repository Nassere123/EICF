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
  Filter,
  RotateCcw,
} from 'lucide-react'
import {
  kpiGroups,
  globalStats,
  impactSentence,
  formatNumber,
  regions,
  domains,
} from '@/lib/data'
import { CountUp } from '@/components/Motion'

interface ImpactDashboardProps {
  showHero?: boolean
}

export function ImpactDashboard({ showHero = false }: ImpactDashboardProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [selectedRegion, setSelectedRegion] = useState<string>('all')
  const [selectedDomain, setSelectedDomain] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<string>('all')

  const icons: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap size={22} />,
    Droplets: <Droplets size={22} />,
    HandHeart: <HandHeart size={22} />,
    Shield: <Shield size={22} />,
    HeartPulse: <HeartPulse size={22} />,
  }

  const resetFilters = () => {
    setSelectedGroup('all')
    setSelectedYear('all')
    setSelectedRegion('all')
    setSelectedDomain('all')
    setSelectedProject('all')
  }

  const hasActiveFilters =
    selectedGroup !== 'all' ||
    selectedYear !== 'all' ||
    selectedRegion !== 'all' ||
    selectedDomain !== 'all' ||
    selectedProject !== 'all'

  const filteredGroups = kpiGroups
    .filter((g) => selectedGroup === 'all' || g.id === selectedGroup)
    .map((group) => ({
      ...group,
      kpis: group.kpis.filter((kpi) => {
        const matchYear =
          selectedYear === 'all' || kpi.yearFilter.includes(selectedYear)
        const matchRegion =
          selectedRegion === 'all' || kpi.regionFilter.includes(selectedRegion)
        const matchDomain =
          selectedDomain === 'all' || kpi.domainFilter === selectedDomain
        const matchProject =
          selectedProject === 'all' ||
          kpi.contributingProjects.some((cp) =>
            cp.toLowerCase().includes(selectedProject.toLowerCase())
          )
        return matchYear && matchRegion && matchDomain && matchProject
      }),
    }))
    .filter((g) => g.kpis.length > 0)

  return (
    <div className="space-y-8">
      {/* 1. Synthèse consolidée */}
      <div className="card" style={{ background: '#06352a', color: '#ffffff', borderColor: '#f2b31a' }}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#f2b31a] text-[#0b1813] flex items-center justify-center flex-shrink-0">
            <Bot size={24} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="badge badge-gold">
                <Sparkles size={12} /> Performance institutionnelle (2008 – 2026)
              </span>
              <span className="badge badge-dark">Sans double comptage</span>
            </div>
            <p className="text-white text-base sm:text-xl font-heading leading-relaxed">
              {impactSentence}
            </p>
            <small className="block text-xs text-white/80 mt-2">
              Méthodologie S&amp;E : distinction stricte entre bénéficiaires directs uniques ({formatNumber(globalStats.beneficiairesDirectsUniques)}) et bénéficiaires indirects ({formatNumber(globalStats.beneficiairesIndirects)}+).
            </small>
          </div>
        </div>
      </div>

      {/* 2. EICF en chiffres */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#d4d4d4]">
          <div>
            <span className="badge badge-gold mb-2">Bilan Consolidé (Depuis le 1er fév. 2008)</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0b1813]">
              EICF en chiffres : indicateurs globaux de performance
            </h2>
          </div>
          <span className="badge">Référence : 2008 – 2026</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-5">
          <div className="p-4 border border-[#d4d4d4] bg-[#f4f7f5]">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#06352a] block">
              Années d’expérience
            </span>
            <strong className="text-3xl font-heading font-bold text-[#06352a] mt-1 block">
              <CountUp value={globalStats.experienceYears} suffix="+" />
            </strong>
            <p className="text-xs text-[#4c5a53] mt-1">Créée le 1er février 2008</p>
          </div>

          <div className="p-4 border border-[#d4d4d4] bg-[#f4f7f5]">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#06352a] block">
              Régions d’intervention
            </span>
            <strong className="text-3xl font-heading font-bold text-[#06352a] mt-1 block">
              <CountUp value={globalStats.regions} />
            </strong>
            <p className="text-xs text-[#4c5a53] mt-1">Couverture nationale &amp; 4 bases</p>
          </div>

          <div className="p-4 border border-[#d4d4d4] bg-[#f4f7f5]">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#06352a] block">
              Villages bénéficiaires
            </span>
            <strong className="text-3xl font-heading font-bold text-[#06352a] mt-1 block">
              <CountUp value={globalStats.villages} suffix="+" />
            </strong>
            <p className="text-xs text-[#4c5a53] mt-1">Communautés accompagnées</p>
          </div>

          <div className="p-4 border border-[#d4d4d4] bg-[#f4f7f5]">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#06352a] block">
              Projets réalisés
            </span>
            <strong className="text-3xl font-heading font-bold text-[#06352a] mt-1 block">
              <CountUp value={globalStats.projetsRealises} suffix="+" />
            </strong>
            <p className="text-xs text-[#4c5a53] mt-1">Conventions exécutées</p>
          </div>

          <div className="p-4 bg-[#f2b31a] border border-[#06352a] text-[#0b1813]">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0b1813] block">
              Bénéficiaires directs uniques
            </span>
            <strong className="text-3xl font-heading font-bold text-[#06352a] mt-1 block">
              <CountUp value={globalStats.beneficiairesDirectsUniques} />
            </strong>
            <p className="text-xs font-bold text-[#0b1813] mt-1">
              + <CountUp value={globalStats.beneficiairesIndirects} suffix="+" /> indirects
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-4 border-t border-[#d4d4d4]">
          <div className="p-3 border border-[#d4d4d4] bg-white">
            <strong className="text-xl font-heading font-bold text-[#06352a] block">
              <CountUp value={globalStats.bailleursMobilises} suffix="+ bailleurs" />
            </strong>
            <span className="text-xs text-[#4c5a53]">BM, PNUD, GIZ, UNICEF, UNFPA, AEJ</span>
          </div>
          <div className="p-3 border border-[#d4d4d4] bg-white">
            <strong className="text-xl font-heading font-bold text-[#06352a] block">
              <CountUp value={globalStats.femmesAccompagnees} />
            </strong>
            <span className="text-xs text-[#4c5a53]">Femmes &amp; filles (SWEDD/AVEC)</span>
          </div>
          <div className="p-3 border border-[#d4d4d4] bg-white">
            <strong className="text-xl font-heading font-bold text-[#06352a] block">
              <CountUp value={globalStats.jeunesFormesInseres} />
            </strong>
            <span className="text-xs text-[#4c5a53]">Jeunes formés et insérés</span>
          </div>
          <div className="p-3 border border-[#d4d4d4] bg-white">
            <strong className="text-xl font-heading font-bold text-[#06352a] block">
              <CountUp value={globalStats.enfantsReinseres} />
            </strong>
            <span className="text-xs text-[#4c5a53]">Enfants réintégrés à l’école</span>
          </div>
          <div className="p-3 border border-[#d4d4d4] bg-white">
            <strong className="text-xl font-heading font-bold text-[#06352a] block">
              <CountUp value={globalStats.infrastructuresRealisees} />
            </strong>
            <span className="text-xs text-[#4c5a53]">Ouvrages &amp; dispositifs</span>
          </div>
          <div className="p-3 border border-[#d4d4d4] bg-white">
            <strong className="text-xl font-heading font-bold text-[#06352a] block">
              <CountUp value={89} />
            </strong>
            <span className="text-xs text-[#4c5a53]">Caisses AVEC &amp; TPE</span>
          </div>
        </div>
      </div>

      {/* 3. Filtres multicritères via select dans une filter-bar propre */}
      <div className="card space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#0b1813]">
            <Filter size={17} className="text-[#06352a]" />
            <span>Filtrer les indicateurs :</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {hasActiveFilters && (
              <button type="button" onClick={resetFilters} className="btn btn-ghost btn-sm">
                <RotateCcw size={13} />
                <span>Réinitialiser</span>
              </button>
            )}
            <Link href="/mediatheque" className="btn btn-green btn-sm">
              <Download size={13} />
              <span>Rapport annuel (PDF)</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div>
            <label htmlFor="filter-group" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#4c5a53] mb-1">
              Thématique
            </label>
            <select
              id="filter-group"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="select-pill w-full"
            >
              <option value="all">Toutes thématiques</option>
              {kpiGroups.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-year" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#4c5a53] mb-1">
              Période
            </label>
            <select
              id="filter-year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="select-pill w-full"
            >
              <option value="all">Toutes périodes (2008–2026)</option>
              <option value="2025-2026">2025 – 2026 (PASEA)</option>
              <option value="2023-2024">2022 – 2024 (SWEDD, CLEF)</option>
              <option value="2020-2022">2020 – 2022 (PDDIVS, GIZ, AEJ)</option>
              <option value="2016-2019">2016 – 2019 (PEJEDEC, PNUD)</option>
            </select>
          </div>

          <div>
            <label htmlFor="filter-region" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#4c5a53] mb-1">
              Région
            </label>
            <select
              id="filter-region"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="select-pill w-full"
            >
              <option value="all">Toutes régions ({regions.length})</option>
              {regions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} ({r.chefLieu})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-domain" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#4c5a53] mb-1">
              Domaine
            </label>
            <select
              id="filter-domain"
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="select-pill w-full"
            >
              <option value="all">Tous domaines</option>
              {domains.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.num}. {d.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-project" className="block text-[11px] font-extrabold uppercase tracking-wider text-[#4c5a53] mb-1">
              Projet
            </label>
            <select
              id="filter-project"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="select-pill w-full"
            >
              <option value="all">Tous projets</option>
              <option value="PASEA">PASEA (Hambol)</option>
              <option value="SWEDD">SWEDD (6 régions)</option>
              <option value="PEJEDEC">PEJEDEC II &amp; III</option>
              <option value="AVEC-AEJ">AVEC-AEJ (Folon)</option>
              <option value="CLEF">CLEF (San Pédro)</option>
              <option value="PDDIVS">PDDIVS (Bouna)</option>
              <option value="PNUD">PNUD (Tonkpi &amp; Cavally)</option>
              <option value="GIZ">GIZ (Bouna)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 4. Grille des KPI */}
      {filteredGroups.length > 0 ? (
        <div className="space-y-6">
          {filteredGroups.map((group) => (
            <div key={group.id} className="card">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#d4d4d4]">
                <div className="icon-tile" style={{ marginBottom: 0 }}>
                  {icons[group.icon] ?? <TrendingUp size={22} />}
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', marginBottom: '2px' }}>{group.label}</h3>
                  <span className="text-xs text-[#4c5a53] font-medium">
                    Indicateurs vérifiés avec période de référence et projets contributeurs
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.kpis.map((kpi, idx) => {
                  const percent = Math.min(100, Math.round((kpi.value / kpi.target) * 100))
                  return (
                    <div
                      key={idx}
                      className="p-4 border border-[#d4d4d4] bg-white flex flex-col justify-between gap-3"
                    >
                      <div>
                        <span className="badge mb-2">{kpi.beneficiaryType}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#0b1813] block leading-snug">
                          {kpi.label}
                        </span>
                      </div>

                      <div>
                        <strong className="text-3xl font-heading font-bold text-[#06352a] leading-none my-1 block">
                          <CountUp value={kpi.value} suffix={kpi.suffix ?? ''} />
                        </strong>
                        <span className="text-[11px] font-semibold text-[#4c5a53] block mt-1">
                          {kpi.period}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-[#d4d4d4] space-y-2">
                        <div>
                          <div className="flex justify-between text-[11px] font-bold text-[#4c5a53] mb-1">
                            <span>Cible : {formatNumber(kpi.target)}{kpi.suffix ?? ''}</span>
                            <span className="text-[#06352a]">{percent}%</span>
                          </div>
                          <div className="progress">
                            <span style={{ width: `${percent}%` }} />
                          </div>
                        </div>

                        <div className="text-[11px] text-[#4c5a53] pt-1">
                          <strong className="text-[#0b1813] block">Projets contributeurs :</strong>
                          <span>{kpi.contributingProjects.join(' · ')}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="font-bold text-[#0b1813] mb-3">
            Aucun indicateur ne correspond à cette combinaison de filtres.
          </p>
          <button type="button" onClick={resetFilters} className="btn btn-green btn-sm">
            Afficher tous les indicateurs
          </button>
        </div>
      )}
    </div>
  )
}
