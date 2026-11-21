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
  ShieldAlert,
  MapPin,
  Building2,
} from 'lucide-react'
import {
  regions,
  projects,
  partners,
  statusLabel,
  formatNumber,
  type Region,
} from '@/lib/data'

function createCustomPin(
  count: number,
  isActive: boolean,
  dominantStatus: 'en-cours' | 'acheve' | 'conception'
) {
  const bg =
    dominantStatus === 'en-cours'
      ? '#06352a'
      : dominantStatus === 'acheve'
      ? '#134e32'
      : '#f2b31a'
  const shapeRadius =
    dominantStatus === 'en-cours'
      ? '50%'
      : dominantStatus === 'acheve'
      ? '0px'
      : '4px'

  return L.divIcon({
    className: 'eicf-custom-marker',
    html: `
      <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px;">
        ${isActive ? '<span class="marker-ring"></span>' : ''}
        <div class="marker-pin ${isActive ? 'is-active' : ''}" style="background:${
      isActive ? '#f2b31a' : bg
    }; color:${isActive ? '#0b1813' : '#fff'}; border-radius:${shapeRadius};">
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
  Toutes: { center: [7.54, -5.55], zoom: 6.9 },
  Nord: { center: [9.55, -6.2], zoom: 7.3 },
  'Nord-Est': { center: [8.8, -3.0], zoom: 7.4 },
  Centre: { center: [7.6, -5.1], zoom: 7.3 },
  Ouest: { center: [7.0, -7.4], zoom: 7.4 },
  Sud: { center: [5.4, -5.0], zoom: 7.2 },
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

function MarkerClickHandler() {
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
  const [statusFilter, setStatusFilter] = useState<'all' | 'en-cours' | 'acheve' | 'conception'>('all')
  const [activeRegionId, setActiveRegionId] = useState<string>('hambol')

  const zones = ['Toutes', 'Nord', 'Nord-Est', 'Centre', 'Ouest', 'Sud']

  const filteredRegions = regions.filter((r) => {
    const matchZone = selectedZone === 'Toutes' || r.zone === selectedZone
    if (!matchZone) return false
    if (statusFilter === 'all') return true
    const regProjs = projects.filter((p) => p.regions.includes(r.id))
    return regProjs.some((p) => p.status === statusFilter)
  })

  const activeRegion =
    regions.find((r) => r.id === activeRegionId) ?? filteredRegions[0] ?? regions[0]
  const activeRegionProjects = projects.filter((p) =>
    p.regions.includes(activeRegion.id)
  )

  const handleMarkerClick = (reg: Region) => {
    setActiveRegionId(reg.id)
    if (typeof (window as any)?.__eicfPanToMarker === 'function') {
      ;(window as any).__eicfPanToMarker(reg.lat, reg.lng)
    }
  }

  const initialView = zoneViews.Toutes

  return (
    <div className="space-y-6">
      <div className="map-shell full-map">
        <div className="map-toolbar">
          <div className="flex flex-wrap items-center gap-3">
            <select
              aria-label="Filtrer par macro-zone"
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="select-pill"
            >
              {zones.map((zone) => (
                <option key={zone} value={zone}>
                  Zone : {zone}
                </option>
              ))}
            </select>

            <select
              aria-label="Filtrer par statut de projet"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'all' | 'en-cours' | 'acheve' | 'conception')}
              className="select-pill"
            >
              <option value="all">Tous statuts</option>
              <option value="en-cours">En cours</option>
              <option value="acheve">Achevés (Références)</option>
              <option value="conception">En conception</option>
            </select>
          </div>

          <span className="badge badge-gold">
            {filteredRegions.length} région{filteredRegions.length > 1 ? 's' : ''} affichée{filteredRegions.length > 1 ? 's' : ''}
          </span>
        </div>

        <div className="map-canvas">
          <MapContainer
            center={initialView.center}
            zoom={initialView.zoom}
            minZoom={6.2}
            maxZoom={12}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%', minHeight: '580px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom={18}
            />

            <ZoneController selectedZone={selectedZone} />
            <MarkerClickHandler />

            {filteredRegions.map((reg) => {
              const regProjects = projects.filter((p) => p.regions.includes(reg.id))
              const isActive = reg.id === activeRegion.id
              const totalBeneficiaires = regProjects.reduce((sum, p) => sum + p.beneficiaires, 0)
              const dominantStatus = regProjects.some((p) => p.status === 'en-cours')
                ? 'en-cours'
                : regProjects.some((p) => p.status === 'acheve')
                ? 'acheve'
                : 'conception'

              const regBailleurs = Array.from(
                new Set(
                  regProjects.flatMap((p) =>
                    p.partners
                      .map((slug) => partners.find((pt) => pt.slug === slug)?.short)
                      .filter(Boolean)
                  )
                )
              )

              return (
                <Marker
                  key={reg.id}
                  position={[reg.lat, reg.lng]}
                  icon={createCustomPin(regProjects.length, isActive, dominantStatus)}
                  eventHandlers={{
                    click: () => handleMarkerClick(reg),
                  }}
                >
                  <Popup
                    maxWidth={340}
                    autoPan={true}
                    autoPanPaddingTopLeft={L.point(20, 20)}
                    autoPanPaddingBottomRight={L.point(20, 20)}
                    offset={L.point(0, -10)}
                  >
                    <div style={{ padding: '2px 1px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, color: 'var(--green-3)' }}>
                          Zone {reg.zone}
                        </span>
                        <span style={{ fontSize: '10.5px', fontWeight: 700, color: 'var(--muted)' }}>
                          Chef-lieu : {reg.chefLieu}
                        </span>
                      </div>

                      <h4 style={{ margin: '4px 0 8px', fontSize: '18px', fontWeight: 700, color: 'var(--green)', lineHeight: 1.2 }}>
                        {reg.name}
                      </h4>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', padding: '8px', background: '#f4f7f5', border: '1px solid #d4d4d4', textAlign: 'center', marginBottom: '10px' }}>
                        <div>
                          <strong style={{ display: 'block', fontSize: '16px', color: 'var(--green)' }}>{regProjects.length}</strong>
                          <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 700 }}>Projets</span>
                        </div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '16px', color: 'var(--green)' }}>{reg.departements.length}</strong>
                          <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 700 }}>Départements</span>
                        </div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '16px', color: 'var(--green)' }}>{formatNumber(totalBeneficiaires)}</strong>
                          <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 700 }}>Bénéficiaires</span>
                        </div>
                      </div>

                      {regBailleurs.length > 0 && (
                        <div style={{ fontSize: '11px', marginBottom: '8px', color: 'var(--ink)' }}>
                          <strong>Bailleurs &amp; partenaires :</strong> {regBailleurs.join(' · ')}
                        </div>
                      )}

                      {regProjects.length > 0 && (
                        <div style={{ marginBottom: '10px', display: 'grid', gap: '5px' }}>
                          {regProjects.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/projets-actualites/${p.slug}`}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '6px 9px',
                                background: 'var(--green-soft)',
                                color: 'var(--green)',
                                fontSize: '11.5px',
                                fontWeight: 700,
                                textDecoration: 'none',
                                border: '1px solid #d4d4d4',
                              }}
                            >
                              <span><strong>{p.name}</strong> · {statusLabel[p.status]}</span>
                              <ArrowRight size={12} />
                            </Link>
                          ))}
                        </div>
                      )}

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
                          background: 'var(--gold)',
                          color: 'var(--ink)',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        <Bot size={13} />
                        <span>Interroger ASK EICF sur {reg.name}</span>
                      </button>
                    </div>
                  </Popup>
                </Marker>
              )
            })}
          </MapContainer>

          <div className="map-legend flex-wrap">
            <span>
              <i style={{ background: '#06352a', borderRadius: '50%' }} /> En cours (PASEA)
            </span>
            <span>
              <i style={{ background: '#134e32', borderRadius: '0px' }} /> Achevés (Références)
            </span>
            <span>
              <i style={{ background: '#f2b31a', borderRadius: '2px' }} /> Sélectionné / Conception
            </span>
          </div>
        </div>
      </div>

      {/* FICHE OPÉRATIONNELLE DE LA RÉGION SÉLECTIONNÉE */}
      <div className="card">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 mb-6 border-b border-[#d4d4d4]">
          <div>
            <span className="badge badge-gold mb-2">Détail Opérationnel par Région</span>
            <h3 className="text-2xl font-heading font-bold text-[#0b1813]">
              Région : {activeRegion.name} (Chef-lieu : {activeRegion.chefLieu})
            </h3>
          </div>

          <div>
            <label htmlFor="select-region-detail" className="visually-hidden">
              Choisir une région
            </label>
            <select
              id="select-region-detail"
              value={activeRegion.id}
              onChange={(e) => {
                const reg = regions.find((r) => r.id === e.target.value)
                if (reg) handleMarkerClick(reg)
              }}
              className="select-pill"
            >
              {regions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} ({r.chefLieu})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#06352a] flex items-center gap-2">
              <MapPin size={15} />
              Départements, Sous-préfectures, Localités &amp; Réalisations
            </h4>
            {activeRegion.departements.map((dep) => (
              <div key={dep.name} className="p-4 border border-[#d4d4d4] bg-[#f4f7f5] space-y-2">
                <strong className="text-sm font-heading font-bold text-[#06352a] block">
                  Département de {dep.name}
                </strong>
                {dep.sousPrefectures.map((sp) => (
                  <div key={sp.name} className="pl-3 border-l-2 border-[#f2b31a] space-y-1 text-xs sm:text-sm">
                    <span className="font-bold text-[#0b1813] block">
                      Sous-préfecture / Commune : {sp.name}
                    </span>
                    {sp.localites.map((loc) => (
                      <p key={loc.name} className="text-[#4c5a53]">
                        • <strong>{loc.name}</strong> : {loc.detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#06352a] flex items-center gap-2">
              <Building2 size={15} />
              Projets exécutés, Bailleurs, Bénéficiaires &amp; Statut
            </h4>
            <div className="space-y-3">
              {activeRegionProjects.map((p) => {
                const projBailleurs = p.partners
                  .map((slug) => partners.find((pt) => pt.slug === slug)?.name)
                  .filter(Boolean)

                return (
                  <div
                    key={p.slug}
                    className="p-4 border border-[#d4d4d4] bg-white flex flex-col justify-between gap-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <strong className="text-base font-heading font-bold text-[#0b1813]">
                        {p.name} — {p.fullName}
                      </strong>
                      <span className={`badge ${p.status === 'en-cours' || p.status === 'conception' ? 'badge-gold' : ''}`}>
                        {statusLabel[p.status]}
                      </span>
                    </div>

                    <div className="text-xs text-[#4c5a53] space-y-1">
                      <p>
                        <strong className="text-[#0b1813]">Bailleurs &amp; partenaires :</strong>{' '}
                        {projBailleurs.length > 0 ? projBailleurs.join(', ') : 'En mobilisation'}
                      </p>
                      <p>
                        <strong className="text-[#0b1813]">Bénéficiaires :</strong>{' '}
                        {formatNumber(p.beneficiaires)} {p.beneficiairesLabel} ({p.periode})
                      </p>
                      <p>
                        <strong className="text-[#0b1813]">Réalisations :</strong> {p.resultats.join(' · ')}
                      </p>
                    </div>

                    <div>
                      <Link href={`/projets-actualites/${p.slug}`} className="text-link">
                        <span>Ouvrir la fiche projet complète</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#d4d4d4] flex items-start gap-2.5 text-xs text-[#4c5a53]">
          <ShieldAlert size={16} className="text-[#06352a] flex-shrink-0 mt-0.5" />
          <span>
            <strong>Protection &amp; confidentialité :</strong> Conformément aux politiques PSEA et Sauvegarde de l’enfant, les coordonnées sont positionnées à l’échelle du chef-lieu de région, de département ou de sous-préfecture.
          </span>
        </div>
      </div>
    </div>
  )
}
