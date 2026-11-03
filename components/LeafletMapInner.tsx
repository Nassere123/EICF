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
} from 'lucide-react'
import {
  regions,
  projects,
  statusLabel,
  formatNumber,
  type Region,
} from '@/lib/data'

// Helper to create a custom HTML Leaflet Icon
function createCustomPin(count: number, isActive: boolean) {
  return L.divIcon({
    className: 'eicf-custom-marker',
    html: `
      <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px;">
        ${isActive ? '<span class="marker-ring"></span>' : ''}
        <div class="marker-pin ${isActive ? 'is-active' : ''}">
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
  Toutes: { center: [7.54, -5.55], zoom: 7.1 },
  Nord: { center: [9.35, -5.5], zoom: 7.4 },
  'Nord-Est': { center: [8.8, -3.3], zoom: 7.4 },
  Centre: { center: [7.85, -5.1], zoom: 7.4 },
  Est: { center: [7.1, -3.3], zoom: 7.4 },
  Ouest: { center: [7.5, -7.2], zoom: 7.4 },
  Sud: { center: [5.6, -4.5], zoom: 7.4 },
}

// Controller pour gérer la vue lors du changement de filtre de zone sans sur-zoomer
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

// Composant interne pour recentrer doucement lors du clic sans saut de zoom brutal
function MarkerClickHandler({
  onMarkerSelect,
}: {
  onMarkerSelect: (reg: Region) => void
}) {
  const map = useMap()

  useEffect(() => {
    (window as any).__eicfPanToMarker = (lat: number, lng: number) => {
      // Recentrage doux sur le marqueur, sans changer le niveau de zoom
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
  const [activeRegionId, setActiveRegionId] = useState<string>('hambol')

  const zones = ['Toutes', 'Nord', 'Nord-Est', 'Centre', 'Est', 'Ouest', 'Sud']

  const filteredRegions =
    selectedZone === 'Toutes'
      ? regions
      : regions.filter((r) => r.zone === selectedZone)

  const handleMarkerClick = (reg: Region) => {
    setActiveRegionId(reg.id)
    if (typeof (window as any)?.__eicfPanToMarker === 'function') {
      ;(window as any).__eicfPanToMarker(reg.lat, reg.lng)
    }
  }

  const initialView = zoneViews.Toutes

  return (
    <div className="map-shell full-map">
      {/* Barre d'outils dédiée au-dessus de la carte : zéro obstruction des marqueurs et des fenêtres popup */}
      <div className="map-toolbar">
        <div className="map-zone-filters" role="tablist" aria-label="Filtrer par zone géographique">
          {zones.map((zone) => (
            <button
              key={zone}
              type="button"
              className={selectedZone === zone ? 'is-active' : ''}
              onClick={() => setSelectedZone(zone)}
            >
              {zone}
              {zone !== 'Toutes' && (
                <span style={{ fontSize: '10px', opacity: 0.75, marginLeft: '4px' }}>
                  ({regions.filter((r) => r.zone === zone).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="map-live-badge">
          <span className="dot" style={{ background: 'var(--gold-2)' }} />
          <span>OpenStreetMap · 11 régions actives</span>
        </div>
      </div>

      <div className="map-canvas">
        {/* MapContainer Leaflet plein écran avec niveau de zoom national stable */}
        <MapContainer
          center={initialView.center}
          zoom={initialView.zoom}
          minZoom={6.5}
          maxZoom={12}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '100%', minHeight: '640px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={18}
          />

          <ZoneController selectedZone={selectedZone} />
          <MarkerClickHandler onMarkerSelect={handleMarkerClick} />

          {/* Marqueurs d'intervention Leaflet */}
          {filteredRegions.map((reg) => {
            const regProjects = projects.filter((p) => p.regions.includes(reg.id))
            const isActive = reg.id === activeRegionId
            const totalBeneficiaires = regProjects.reduce((sum, p) => sum + p.beneficiaires, 0)
            const totalSousPrefectures = reg.departements.reduce(
              (sum, d) => sum + d.sousPrefectures.length,
              0
            )

            return (
              <Marker
                key={reg.id}
                position={[reg.lat, reg.lng]}
                icon={createCustomPin(regProjects.length, isActive)}
                eventHandlers={{
                  click: () => handleMarkerClick(reg),
                }}
              >
                <Popup
                  maxWidth={320}
                  autoPan={true}
                  autoPanPaddingTopLeft={L.point(20, 20)}
                  autoPanPaddingBottomRight={L.point(20, 20)}
                  offset={L.point(0, -10)}
                >
                  <div style={{ padding: '2px 1px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          fontWeight: 800,
                          color: 'var(--green-3)',
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
                        margin: '4px 0 8px',
                        fontSize: '19px',
                        fontWeight: 700,
                        color: 'var(--green)',
                        lineHeight: 1.2,
                      }}
                    >
                      {reg.name}
                    </h4>

                    {/* Chiffres clés */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '6px',
                        padding: '8px',
                        borderRadius: '10px',
                        background: 'var(--paper)',
                        textAlign: 'center',
                        marginBottom: '10px',
                      }}
                    >
                      <div>
                        <strong style={{ display: 'block', fontSize: '17px', color: 'var(--green)' }}>
                          {regProjects.length}
                        </strong>
                        <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 700 }}>
                          Projets
                        </span>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '17px', color: 'var(--green)' }}>
                          {totalSousPrefectures}
                        </strong>
                        <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 700 }}>
                          Sous-préf.
                        </span>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '17px', color: 'var(--green)' }}>
                          {formatNumber(totalBeneficiaires)}
                        </strong>
                        <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 700 }}>
                          Bénéficiaires
                        </span>
                      </div>
                    </div>

                    {/* Projets associés */}
                    {regProjects.length > 0 && (
                      <div style={{ marginBottom: '10px' }}>
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--muted)',
                            display: 'block',
                            marginBottom: '5px',
                          }}
                        >
                          Projets dans la région :
                        </span>
                        <div style={{ display: 'grid', gap: '5px' }}>
                          {regProjects.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/projets-actualites/${p.slug}`}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '6px 9px',
                                borderRadius: '8px',
                                background: 'var(--green-soft)',
                                color: 'var(--green)',
                                fontSize: '11.5px',
                                fontWeight: 700,
                                textDecoration: 'none',
                              }}
                            >
                              <span>
                                <strong>{p.name}</strong> · {statusLabel[p.status]}
                              </span>
                              <ArrowRight size={12} />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bouton IA EICF */}
                    <button
                      type="button"
                      onClick={() => {
                        const q = `Quels sont les projets d'EICF dans la région du ${reg.name} ?`
                        if (onAskAi) onAskAi(q)
                        else {
                          const fab = document.querySelector('.ask-fab') as HTMLElement
                          if (fab) fab.click()
                        }
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        width: '100%',
                        padding: '7px 10px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, var(--gold-soft), #fff)',
                        border: '1px solid #ecdcae',
                        color: 'var(--green)',
                        fontSize: '11px',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      <Bot size={13} style={{ color: 'var(--gold)' }} />
                      <span>Interroger l’IA sur {reg.name}</span>
                    </button>
                  </div>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>

        {/* Légende */}
        <div className="map-legend">
          <span>
            <i style={{ background: 'var(--green)' }} /> Région couverte
          </span>
          <span>
            <i style={{ background: 'var(--gold)' }} /> Région active
          </span>
          <span>
            <strong>11</strong> régions d’intervention · Cliquez sur un point pour voir les projets
          </span>
        </div>
      </div>
    </div>
  )
}
