'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet'
import L from 'leaflet'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Building,
  Users,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Filter,
} from 'lucide-react'
import {
  regions,
  projects,
  statusLabel,
  formatNumber,
  getPartner,
  type Region,
  type Project,
} from '@/lib/data'

// Helper to create custom HTML Leaflet Icon according to project status
function createCustomPin(
  count: number,
  isActive: boolean,
  hasInProgress: boolean,
  hasConceptionOnly: boolean
) {
  let pinClass = 'marker-pin'
  let ringHtml = ''

  if (hasInProgress) {
    pinClass += ' pin-in-progress'
    ringHtml = '<span class="marker-ring"></span>'
  } else if (hasConceptionOnly) {
    pinClass += ' pin-conception'
  } else {
    pinClass += ' pin-completed'
  }

  if (isActive) {
    pinClass += ' is-active'
  }

  return L.divIcon({
    className: 'eicf-custom-marker',
    html: `
      <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px;">
        ${ringHtml}
        <div class="${pinClass}">
          ${count}
        </div>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -22],
  })
}

const zoneViews: Record<string, { center: [number, number]; zoom: number }> = {
  Toutes: { center: [7.54, -5.55], zoom: 7.0 },
  Nord: { center: [9.5, -5.8], zoom: 7.5 },
  'Nord-Est': { center: [8.8, -3.2], zoom: 7.5 },
  Centre: { center: [7.9, -5.1], zoom: 7.5 },
  Est: { center: [7.4, -3.3], zoom: 7.5 },
  Ouest: { center: [7.5, -7.1], zoom: 7.5 },
  Sud: { center: [5.4, -5.2], zoom: 7.5 },
}

function ZoneController({ selectedZone }: { selectedZone: string }) {
  const map = useMap()

  useEffect(() => {
    const target = zoneViews[selectedZone] ?? zoneViews.Toutes
    map.flyTo(target.center, target.zoom, {
      duration: 0.8,
      easeLinearity: 0.25,
    })
  }, [selectedZone, map])

  return null
}

function MarkerClickHandler({
  onMarkerSelect,
}: {
  onMarkerSelect: (reg: Region) => void
}) {
  const map = useMap()

  useEffect(() => {
    ;(window as any).__eicfPanToMarker = (lat: number, lng: number) => {
      map.panTo([lat, lng], { animate: true, duration: 0.4 })
    }
    return () => {
      delete (window as any).__eicfPanToMarker
    }
  }, [map])

  return null
}

interface LeafletMapProps {
  onAskAi?: (question: string) => void
  showTitle?: boolean
}

export default function LeafletMapInner({ onAskAi }: LeafletMapProps) {
  const [selectedZone, setSelectedZone] = useState<string>('Toutes')
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'en-cours' | 'acheve' | 'conception'>('all')
  const [activeRegionId, setActiveRegionId] = useState<string>('hambol')

  const zones = ['Toutes', 'Nord', 'Nord-Est', 'Centre', 'Ouest', 'Sud']

  // Filtrage par zone et par statut de projet
  const filteredRegions = regions.filter((r) => {
    const matchesZone = selectedZone === 'Toutes' || r.zone === selectedZone
    if (!matchesZone) return false

    if (selectedStatus === 'all') return true
    const regProjects = projects.filter((p) => p.regions.includes(r.id))
    return regProjects.some((p) => p.status === selectedStatus)
  })

  const activeRegion = regions.find((r) => r.id === activeRegionId) ?? regions[0]
  const activeRegionProjects = projects.filter((p) => p.regions.includes(activeRegion.id))

  const handleMarkerClick = (reg: Region) => {
    setActiveRegionId(reg.id)
    if (typeof (window as any)?.__eicfPanToMarker === 'function') {
      ;(window as any).__eicfPanToMarker(reg.lat, reg.lng)
    }
  }

  const initialView = zoneViews.Toutes

  return (
    <div className="space-y-8">
      {/* CONTENEUR CARTE */}
      <div className="map-shell full-map rounded-3xl overflow-hidden border border-border shadow-lg bg-white">
        {/* BARRE D'OUTILS ET FILTRES OPÉRATIONNELS */}
        <div className="map-toolbar p-4 bg-background border-b border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Filtres par zone */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-muted uppercase tracking-wider mr-1">Zone :</span>
            {zones.map((zone) => (
              <button
                key={zone}
                type="button"
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  selectedZone === zone
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-white text-textDark border border-border hover:bg-muted/10'
                }`}
                onClick={() => setSelectedZone(zone)}
              >
                {zone}
              </button>
            ))}
          </div>

          {/* Filtre par statut opérationnel (Exigence Audit Page 7) */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-muted uppercase tracking-wider mr-1">Statut :</span>
            <button
              type="button"
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedStatus === 'all'
                  ? 'bg-textDark text-white shadow-xs'
                  : 'bg-white text-muted border border-border hover:text-textDark'
              }`}
              onClick={() => setSelectedStatus('all')}
            >
              Tous
            </button>
            <button
              type="button"
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                selectedStatus === 'en-cours'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50'
              }`}
              onClick={() => setSelectedStatus('en-cours')}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>En cours</span>
            </button>
            <button
              type="button"
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                selectedStatus === 'acheve'
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-white text-primary border border-primary/30 hover:bg-primary/5'
              }`}
              onClick={() => setSelectedStatus('acheve')}
            >
              <CheckCircle2 size={12} className="text-secondary" />
              <span>Achevés</span>
            </button>
            <button
              type="button"
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                selectedStatus === 'conception'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-amber-700 border border-amber-300 hover:bg-amber-50'
              }`}
              onClick={() => setSelectedStatus('conception')}
            >
              <Clock size={12} className="text-amber-500" />
              <span>En conception</span>
            </button>
          </div>
        </div>

        {/* MAP CONTAINER LEAFLET */}
        <div className="map-canvas relative">
          <MapContainer
            center={initialView.center}
            zoom={initialView.zoom}
            minZoom={6.5}
            maxZoom={12}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '560px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom={18}
            />

            <ZoneController selectedZone={selectedZone} />
            <MarkerClickHandler onMarkerSelect={handleMarkerClick} />

            {/* MARQUEURS D'INTERVENTION LEAFLET */}
            {filteredRegions.map((reg) => {
              const regProjects = projects.filter((p) => p.regions.includes(reg.id))
              const isActive = reg.id === activeRegionId
              const totalBeneficiaires = regProjects.reduce((sum, p) => sum + p.beneficiaires, 0)

              const hasInProgress = regProjects.some((p) => p.status === 'en-cours')
              const hasConceptionOnly =
                regProjects.length > 0 && regProjects.every((p) => p.status === 'conception')

              return (
                <Marker
                  key={reg.id}
                  position={[reg.lat, reg.lng]}
                  icon={createCustomPin(
                    regProjects.length,
                    isActive,
                    hasInProgress,
                    hasConceptionOnly
                  )}
                  eventHandlers={{
                    click: () => handleMarkerClick(reg),
                  }}
                >
                  <Popup
                    maxWidth={330}
                    autoPan={true}
                    autoPanPaddingTopLeft={L.point(20, 20)}
                    autoPanPaddingBottomRight={L.point(20, 20)}
                    offset={L.point(0, -10)}
                  >
                    <div style={{ padding: '4px 2px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '4px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            fontWeight: 800,
                            color: 'var(--green)',
                          }}
                        >
                          Zone {reg.zone}
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            color: 'var(--muted)',
                          }}
                        >
                          Chef-lieu : {reg.chefLieu}
                        </span>
                      </div>

                      <h4
                        style={{
                          margin: '2px 0 6px',
                          fontSize: '18px',
                          fontWeight: 700,
                          color: 'var(--green)',
                          lineHeight: 1.2,
                        }}
                      >
                        {reg.name}
                      </h4>

                      {/* CHIFFRES CLÉS POPUP */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: '6px',
                          padding: '8px',
                          borderRadius: '8px',
                          background: 'var(--paper)',
                          textAlign: 'center',
                          marginBottom: '10px',
                        }}
                      >
                        <div>
                          <strong style={{ display: 'block', fontSize: '16px', color: 'var(--green)' }}>
                            {regProjects.length}
                          </strong>
                          <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 700 }}>
                            Projets
                          </span>
                        </div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '16px', color: 'var(--green)' }}>
                            {reg.departements.length}
                          </strong>
                          <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 700 }}>
                            Dépts
                          </span>
                        </div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '16px', color: 'var(--green)' }}>
                            {formatNumber(totalBeneficiaires)}
                          </strong>
                          <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 700 }}>
                            Bénéf.
                          </span>
                        </div>
                      </div>

                      {/* PROJETS DE LA RÉGION */}
                      <div style={{ marginBottom: '10px' }}>
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--muted)',
                            display: 'block',
                            marginBottom: '4px',
                          }}
                        >
                          Projets exécutés :
                        </span>
                        <div style={{ display: 'grid', gap: '4px' }}>
                          {regProjects.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/projets-actualites/${p.slug}`}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '5px 8px',
                                borderRadius: '6px',
                                background:
                                  p.status === 'en-cours'
                                    ? '#ecfdf5'
                                    : p.status === 'acheve'
                                    ? '#eff6ff'
                                    : '#fefce8',
                                color:
                                  p.status === 'en-cours'
                                    ? '#065f46'
                                    : p.status === 'acheve'
                                    ? '#1e40af'
                                    : '#854d0e',
                                fontSize: '11px',
                                fontWeight: 700,
                                textDecoration: 'none',
                              }}
                            >
                              <span>
                                {p.name} · {statusLabel[p.status]}
                              </span>
                              <ArrowRight size={11} />
                            </Link>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleMarkerClick(reg)}
                        style={{
                          width: '100%',
                          padding: '6px 10px',
                          borderRadius: '6px',
                          background: 'var(--green)',
                          color: '#fff',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          border: 'none',
                        }}
                      >
                        Consulter la fiche opérationnelle ci-dessous
                      </button>
                    </div>
                  </Popup>
                </Marker>
              )
            })}
          </MapContainer>

          {/* LÉGENDE OPÉRATIONNELLE DE LA CARTE */}
          <div className="p-3 bg-white/95 backdrop-blur border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block" />
                <strong>Projet(s) en cours</strong>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-primary inline-block" />
                <strong>Projet(s) achevé(s) &amp; capitalisé(s)</strong>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <strong>En conception</strong>
              </span>
            </div>
            <span className="text-muted text-[11px]">
              {filteredRegions.length} région(s) affichée(s) · Cliquez sur un point pour inspecter le territoire
            </span>
          </div>
        </div>
      </div>

      {/* FICHE OPÉRATIONNELLE DE TERRITOIRE (INSPECTION DRAWER) */}
      <div id="fiche-territoire" className="bg-white rounded-3xl p-6 sm:p-10 border border-border shadow-sm scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-1">
              <MapPin size={15} />
              <span>Fiche Opérationnelle de Territoire</span>
              <span>·</span>
              <span>Zone {activeRegion.zone}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-primary font-bold">
              Région du {activeRegion.name}
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-0.5">
              Chef-lieu régional : <strong>{activeRegion.chefLieu}</strong> · {activeRegion.departements.length} département(s) couvert(s)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const q = `Quelles sont les réalisations physiques et les projets de l'ONG EICF dans la région du ${activeRegion.name} ?`
                if (onAskAi) onAskAi(q)
                else {
                  const fab = document.querySelector('.ask-fab') as HTMLElement
                  if (fab) fab.click()
                }
              }}
              className="px-4 py-2.5 rounded-full bg-secondary/15 hover:bg-secondary/25 text-primary text-xs font-bold transition-all inline-flex items-center gap-2"
            >
              <Bot size={15} className="text-secondary" />
              <span>Interroger Ask EICF sur {activeRegion.name}</span>
            </button>
          </div>
        </div>

        {/* 4 MACRO CHIFFRES RÉGIONAUX */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          <div className="p-4 rounded-2xl bg-background border border-border">
            <span className="text-xs uppercase font-bold text-muted block">Projets exécutés</span>
            <span className="font-serif text-2xl font-extrabold text-primary block mt-1">
              {activeRegionProjects.length}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-background border border-border">
            <span className="text-xs uppercase font-bold text-muted block">Bénéficiaires directs</span>
            <span className="font-serif text-2xl font-extrabold text-secondary block mt-1">
              {formatNumber(activeRegionProjects.reduce((s, p) => s + p.beneficiaires, 0))}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-background border border-border">
            <span className="text-xs uppercase font-bold text-muted block">Départements</span>
            <span className="font-serif text-2xl font-extrabold text-primary block mt-1">
              {activeRegion.departements.length}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-background border border-border">
            <span className="text-xs uppercase font-bold text-muted block">Villages &amp; localités</span>
            <span className="font-serif text-2xl font-extrabold text-primary block mt-1">
              {activeRegion.villagesCount ?? 12}+
            </span>
          </div>
        </div>

        {/* DÉTAIL DES PROJETS DANS LA RÉGION AVEC RÉALISATIONS PHYSIQUES */}
        <div className="space-y-4 pt-2">
          <h4 className="font-serif text-lg font-bold text-primary flex items-center gap-2">
            <Building size={18} className="text-secondary" />
            <span>Détail des projets, bailleurs et réalisations physiques dans le {activeRegion.name}</span>
          </h4>

          <div className="space-y-4">
            {activeRegionProjects.map((p) => {
              const statusBadge =
                p.status === 'en-cours' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>En cours</span>
                  </span>
                ) : p.status === 'acheve' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-300 text-xs font-bold">
                    <CheckCircle2 size={13} className="text-blue-600" />
                    <span>Achevé &amp; Capitalisé</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-300 text-xs font-bold">
                    <Clock size={13} className="text-amber-600" />
                    <span>En conception</span>
                  </span>
                )

              return (
                <div
                  key={p.slug}
                  className="p-5 rounded-2xl bg-background border border-border hover:border-secondary transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <h5 className="font-serif text-base sm:text-lg font-bold text-primary">
                        {p.name}
                      </h5>
                      {statusBadge}
                    </div>

                    <Link
                      href={`/projets-actualites/${p.slug}`}
                      className="text-xs font-bold text-primary hover:text-secondary inline-flex items-center gap-1 shrink-0"
                    >
                      <span>Fiche projet complète</span>
                      <ExternalLink size={13} />
                    </Link>
                  </div>

                  <p className="text-xs sm:text-sm text-textDark/85 mb-3 leading-relaxed">
                    {p.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-border/60 text-xs">
                    <div>
                      <strong className="text-muted uppercase tracking-wider block text-[10px]">
                        Bailleur / Partenaire :
                      </strong>
                      <span className="font-semibold text-textDark">
                        {p.partners.map((s) => getPartner(s)?.short ?? s).join(', ')}
                      </span>
                    </div>

                    <div>
                      <strong className="text-muted uppercase tracking-wider block text-[10px]">
                        Bénéficiaires certifiés :
                      </strong>
                      <span className="font-semibold text-secondary">
                        {formatNumber(p.beneficiaires)} {p.beneficiairesLabel}
                      </span>
                    </div>

                    <div>
                      <strong className="text-muted uppercase tracking-wider block text-[10px]">
                        Période / Taux d’avancement :
                      </strong>
                      <span className="font-semibold text-textDark">
                        {p.periode} {p.tauxRealisation ? `(${p.tauxRealisation}%)` : ''}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* DÉCOUPAGE PAR DÉPARTEMENTS ET VILLAGES */}
        <div className="mt-8 pt-6 border-t border-border">
          <h4 className="font-serif text-base sm:text-lg font-bold text-primary mb-4 flex items-center gap-2">
            <Users size={17} className="text-secondary" />
            <span>Départements, sous-préfectures et villages bénéficiaires</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeRegion.departements.map((dep, dIdx) => (
              <div key={dIdx} className="p-4 rounded-2xl bg-white border border-border">
                <span className="text-xs font-bold uppercase text-primary tracking-wider block mb-2">
                  Département de {dep.name}
                </span>

                <div className="space-y-3">
                  {dep.sousPrefectures.map((sp, spIdx) => (
                    <div key={spIdx} className="text-xs">
                      <span className="font-bold text-textDark block mb-1">
                        Sous-préfecture de {sp.name} :
                      </span>
                      {sp.localites.map((loc, locIdx) => (
                        <div key={locIdx} className="pl-3 border-l-2 border-secondary/40 my-1 text-muted">
                          <strong className="text-textDark">{loc.name}</strong> — {loc.detail}
                          {loc.villages && loc.villages.length > 0 && (
                            <span className="block text-[11px] text-muted/80 mt-0.5">
                              Villages : {loc.villages.join(', ')}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MENTION LÉGALE DE SAUVEGARDE ÉTHIQUE (Conformité Audit Page 7) */}
        <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3 text-xs text-textDark/85">
          <ShieldCheck size={18} className="text-primary shrink-0 mt-0.5" />
          <div>
            <strong className="text-primary font-bold block mb-0.5">
              Sauvegarde éthique et protection des données sensibles (Audit EICF Page 7) :
            </strong>
            <span>
              Conformément à la politique de sauvegarde des populations vulnérables et aux directives internationales,
              les coordonnées géographiques publiées correspondent aux chefs-lieux et aux centres communautaires agrégés
              afin de préserver la vie privée et la sécurité des bénéficiaires.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
