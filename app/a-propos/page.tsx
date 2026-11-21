'use client'

import Link from 'next/link'
import {
  ArrowRight,
  MapPin,
  Compass,
  HeartHandshake,
  CheckCircle2,
  Building2,
} from 'lucide-react'
import {
  org,
  governance,
  history,
  values,
  images,
  founder,
  executiveDirector,
} from '@/lib/data'

export default function AProposPage() {
  return (
    <>
      {/* HERO À PROPOS */}
      <section className="page-hero has-image">
        <div className="page-hero-img">
          <img src={images.dialogue} alt="Équipe EICF sur le terrain" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>L’ONG EICF</span>
          </div>

          <span className="badge badge-gold mb-4">
            Fondée officiellement le 1er février 2008 · 18+ années d’expérience
          </span>

          <h1 className="display">
            Une organisation expérimentée,<br />
            <em>structurée et redevable.</em>
          </h1>

          <p className="lead">
            Depuis sa création officielle le 1er février 2008, l’ONG EICF conçoit et exécute
            avec les communautés et les bailleurs internationaux des programmes de développement
            à fort impact dans 14 régions et plus de 100 localités de Côte d’Ivoire.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#gouvernance" className="btn btn-gold">
              <span>Gouvernance &amp; Organigramme</span>
              <ArrowRight size={16} />
            </a>
            <Link href="/capacites-institutionnelles" className="btn btn-outline">
              <span>Capacités institutionnelles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 1. PRÉSENTATION & CHRONOLOGIE HISTORIQUE (2008 – 2026) — Bande Verte */}
      <section className="section section-green" id="presentation">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="badge badge-gold">Évolution Institutionnelle (2008 – 2026)</span>
                <h2 className="h2 mt-3 text-white">
                  18 années d’expérience <em>et de références vérifiables.</em>
                </h2>
                <p className="mt-4 text-white/85 leading-relaxed">
                  Créée officiellement le <strong className="text-white">1er février 2008</strong> à Abidjan,
                  l’ONG EICF a construit sa crédibilité à travers l’exécution rigoureuse de programmes
                  financés par la Banque mondiale, le PNUD, la GIZ, l’UNICEF, l’UNFPA et l’État de Côte d’Ivoire (AEJ / BCP-Emploi).
                </p>
              </div>

              {/* Encart lien court vers le Mot du Président */}
              <div className="card" style={{ padding: '22px' }}>
                <div className="flex items-center gap-4">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-20 h-24 object-cover object-top border border-[#d4d4d4] flex-shrink-0"
                  />
                  <div>
                    <span className="badge">Présidence</span>
                    <h3 className="mt-1.5" style={{ fontSize: '18px', marginBottom: '4px' }}>
                      {founder.name}
                    </h3>
                    <p style={{ fontSize: '13px', marginBottom: '10px' }}>
                      {founder.role}
                    </p>
                    <Link href="/a-propos/mot-du-president" className="text-link">
                      <span>Lire le mot du Président</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 card" style={{ padding: '32px' }}>
              <h3 className="h3 mb-6" style={{ color: 'var(--green)' }}>
                Chronologie historique des réalisations d’EICF (2008 – 2026)
              </h3>
              <div className="timeline">
                {history.map((h) => (
                  <div key={h.year} className="tl-item">
                    <strong>{h.year}</strong>
                    <p>{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECTION EXÉCUTIVE, VISION, MISSION & VALEURS — Bande Blanche */}
      <section className="section section-white" id="direction-executive">
        <div className="container space-y-16">
          <div className="card" style={{ padding: '32px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="badge">Pilotage Opérationnel &amp; Fiduciaire</span>
                <h2 className="h2" style={{ color: 'var(--ink)' }}>
                  {executiveDirector.title}
                </h2>
                <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--green)' }}>
                  {executiveDirector.subtitle}
                </p>
                <blockquote
                  style={{
                    borderLeft: '4px solid var(--gold)',
                    background: '#f4f7f5',
                    padding: '16px 20px',
                    fontStyle: 'italic',
                    color: 'var(--ink)',
                    fontFamily: 'var(--serif)',
                  }}
                >
                  « {executiveDirector.quote} »
                </blockquote>

                <div className="space-y-3 pt-2">
                  {executiveDirector.pillars.map((pil) => (
                    <div
                      key={pil.label}
                      style={{ padding: '14px', border: '1px solid #d4d4d4', background: '#ffffff' }}
                    >
                      <strong
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'var(--green)',
                          display: 'block',
                          marginBottom: '4px',
                        }}
                      >
                        {pil.label}
                      </strong>
                      <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>{pil.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4" style={{ color: 'var(--ink-2)', fontSize: '15.5px' }}>
                {executiveDirector.message.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
                <div className="pt-5 mt-5 border-t border-[#d4d4d4] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <strong className="font-heading text-lg text-[#0b1813] block">
                      La Direction Exécutive de l’ONG EICF
                    </strong>
                    <span className="text-xs text-[#4c5a53]">
                      Siège national (Abidjan) &amp; 4 bases opérationnelles régionales
                    </span>
                  </div>
                  <Link href="/capacites-institutionnelles" className="btn btn-gold btn-sm">
                    <span>Nos 7 piliers de capacités</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div id="vision">
            <div className="section-head center" style={{ marginBottom: '32px' }}>
              <span className="badge">Boussole Institutionnelle</span>
              <h2 className="h2 mt-3" style={{ color: 'var(--ink)' }}>
                Vision, Mission &amp; <em>Valeurs</em>
              </h2>
            </div>

            <div className="grid-2 mb-8">
              <div className="vm-card">
                <span className="badge badge-gold mb-3">
                  <Compass size={13} /> Notre Vision
                </span>
                <h3>Des communautés autonomes et résilientes</h3>
                <p>{org.vision}</p>
              </div>
              <div className="vm-card">
                <span className="badge mb-3">
                  <HeartHandshake size={13} /> Notre Mission
                </span>
                <h3>Amélioration durable des conditions de vie</h3>
                <p>{org.mission}</p>
              </div>
            </div>

            <div className="grid-4" id="valeurs">
              {values.map((v, i) => (
                <div key={v.title} className="card">
                  <span className="badge badge-gold mb-3">0{i + 1}</span>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontSize: '14px' }}>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOUVERNANCE & DIRECTION EXÉCUTIVE — Bande Verte */}
      <section className="section section-green" id="gouvernance">
        <div className="container">
          <div className="section-head center">
            <span className="badge badge-gold">Conformité Statutaire &amp; Organisation Réelle</span>
            <h2 className="h2 mt-3 text-white">
              Gouvernance, Organes de contrôle &amp; <em>Direction Exécutive</em>
            </h2>
            <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Séparation stricte entre le rôle institutionnel du Président Fondateur, le Conseil d’Administration,
              le Commissariat aux Comptes et la Direction Exécutive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5 card" style={{ padding: '28px' }}>
              <span className="badge badge-gold mb-3">Rôle Institutionnel &amp; Statutaire</span>
              <h3 style={{ fontSize: '22px', color: 'var(--green)', marginBottom: '4px' }}>
                {governance.founderRole.name}
              </h3>
              <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--green-3)', marginBottom: '12px' }}>
                {governance.founderRole.title} · {governance.founderRole.statut}
              </p>
              <p style={{ fontSize: '14px', marginBottom: '20px' }}>
                {governance.founderRole.description}
              </p>

              <div className="pt-4 border-t border-[#d4d4d4] space-y-3">
                <span className="badge">Organes de contrôle indépendant</span>
                {governance.controlOrgans.map((ctrl) => (
                  <div key={ctrl.name} style={{ padding: '12px', border: '1px solid #d4d4d4', background: '#f4f7f5' }}>
                    <strong className="text-xs font-bold text-[#06352a] block">
                      {ctrl.name} ({ctrl.role})
                    </strong>
                    <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{ctrl.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 card" style={{ padding: '28px' }}>
              <div className="flex items-center gap-3 mb-6">
                <Building2 size={22} className="text-[#06352a]" />
                <div>
                  <h3 style={{ fontSize: '22px', marginBottom: '2px' }}>Le Conseil d’Administration</h3>
                  <p style={{ fontSize: '13px' }}>
                    Orientation stratégique, vote du budget et contrôle de l’exécutif
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {governance.board.map((m) => (
                  <div key={m.name} style={{ padding: '16px', border: '1px solid #d4d4d4', background: '#ffffff' }}>
                    <strong className="text-sm font-heading font-bold text-[#06352a] block mb-1">
                      {m.name}
                    </strong>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{m.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Départements exécutifs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {governance.executiveDepartments.map((dept) => (
              <div key={dept.num} className="card" style={{ padding: '24px' }}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="badge badge-gold">Fonction {dept.num}</span>
                  <span className="text-[11px] font-bold uppercase text-[#4c5a53]">{dept.head}</span>
                </div>
                <h4 className="font-heading font-bold text-lg text-[#0b1813] mb-3">{dept.title}</h4>
                <ul className="space-y-2">
                  {dept.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1c2a24]">
                      <CheckCircle2 size={15} className="text-[#06352a] flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Organigramme */}
          <div className="card" style={{ padding: '32px' }}>
            <h3 className="text-2xl font-heading font-bold text-center mb-2" style={{ color: 'var(--green)' }}>
              Organigramme institutionnel et opérationnel
            </h3>
            <p className="text-xs sm:text-sm text-center mb-8" style={{ color: 'var(--muted)' }}>
              Organisation réelle des instances statutaires, du contrôle et des départements exécutifs
            </p>
            <div className="org-chart">
              <div className="org-level">
                <div className="org-node">{governance.orgChart[0].level}</div>
                <div className="org-link" />
              </div>
              <div className="org-level">
                <div className="org-node" style={{ background: 'var(--green-2)' }}>
                  {governance.orgChart[1].level}
                </div>
                <span className="badge">Organe de contrôle : {governance.orgChart[1].children[0]}</span>
                <div className="org-link" />
              </div>
              <div className="org-level">
                <div className="org-node" style={{ background: 'var(--green-3)' }}>
                  {governance.orgChart[2].level}
                </div>
                <div className="org-link" />
              </div>
              <div className="org-level">
                <div className="org-children">
                  {governance.orgChart[3].children.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
                <div className="org-link" />
              </div>
              <div className="org-level">
                <div className="org-children">
                  {governance.orgChart[4].children.map((c) => (
                    <span key={c} style={{ background: 'var(--gold-soft)', color: '#0b1813' }}>
                      Base opérationnelle : {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMPLANTATION TERRITORIALE (4 BASES OPÉRATIONNELLES) — Bande Blanche */}
      <section className="section section-white" id="implantation">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="badge badge-gold">Présence Permanente</span>
              <h2 className="h2 mt-3 mb-4" style={{ color: 'var(--ink)' }}>
                Siège national à Abidjan &amp; <em>4 bases opérationnelles régionales.</em>
              </h2>
              <p className="mb-6" style={{ color: 'var(--muted)' }}>
                Pour garantir la proximité et le suivi quotidien des chantiers, EICF dispose d’antennes régionales permanentes :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    title: 'Base de Katiola (Hambol)',
                    desc: 'Pilotage du projet PASEA (9 TPE accompagnées, 788 latrines dans 10 villages) et couverture Centre-Nord.',
                  },
                  {
                    title: 'Base de Bouna (Bounkani)',
                    desc: 'Exécution des projets SWEDD, PDDIVS (commune de Bouna), GIZ (Paix & Cohésion) et classes passerelles.',
                  },
                  {
                    title: 'Base de Korhogo (Poro / Nord)',
                    desc: 'Coordination des interventions dans le Nord : PEJEDEC II & III (Bagoué) et AVEC-AEJ (Folon).',
                  },
                  {
                    title: 'Base de Bondoukou (Gontougo / Est)',
                    desc: 'Couverture du Gontougo et des régions de l’Est et du Centre-Est (SWEDD, santé et autonomisation).',
                  },
                ].map((base) => (
                  <div key={base.title} className="card" style={{ padding: '18px' }}>
                    <div className="flex items-center gap-2 text-[#06352a] font-heading font-bold text-base mb-1.5">
                      <MapPin size={16} className="text-[#f2b31a] flex-shrink-0" />
                      <span>{base.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>{base.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/cartographie" className="btn btn-green">
                  <span>Cartographie opérationnelle</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/capacites-institutionnelles" className="btn btn-ghost">
                  <span>Capacités institutionnelles</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card" style={{ padding: '14px' }}>
                <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
                  <img
                    src={images.femmes}
                    alt="Femmes réunies en AVEC en Côte d'Ivoire"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-4">
                  <span className="badge badge-gold mb-2">Proximité &amp; Écoute</span>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Nos superviseurs et animateurs résident au cœur des départements d’intervention pour accompagner quotidiennement les groupements AVEC, les TPE et les comités villageois.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
