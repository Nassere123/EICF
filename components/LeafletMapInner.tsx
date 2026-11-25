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
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  ChevronRight,
  Filter,
} from 'lucide-react'
import {
  regions,
  projects,
  statusLabel,
  formatNumber,
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
                    ? 'bg-secondary text-textDark border-secondary font-bold shadow-xs'
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
              {filteredRegions.length} région(s) affichée(s) · Cliquez sur un point pour voir les projets
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
