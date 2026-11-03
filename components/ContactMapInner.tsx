'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { org } from '@/lib/data'
import { MapPin, Navigation } from 'lucide-react'

// Custom headquarters marker
const hqIcon = L.divIcon({
  className: 'eicf-custom-marker',
  html: `
    <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 48px; height: 48px;">
      <span class="marker-ring" style="width: 58px; height: 58px; background: var(--green-3);"></span>
      <div class="marker-pin" style="width: 42px; height: 42px; background: var(--green); border-color: var(--gold-2);">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>
    </div>
  `,
  iconSize: [48, 48],
  iconAnchor: [24, 24],
  popupAnchor: [0, -24],
})

export default function ContactMapInner() {
  // Coordonnées Abidjan Cocody Riviera 3: 5.3582, -3.9785
  const position: [number, number] = [5.3582, -3.9785]

  return (
    <div className="contact-leaflet-shell">
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        <Marker position={position} icon={hqIcon}>
          <Popup>
            <div style={{ padding: '4px', maxWidth: '220px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'var(--green-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Siège national
              </span>
              <h4 style={{ margin: '4px 0 6px', fontSize: '15px', color: 'var(--green)' }}>
                {org.name} — Siège Social
              </h4>
              <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: 0 }}>
                {org.address}
              </p>
              <a
                href={`https://www.openstreetmap.org/?mlat=${position[0]}&mlon=${position[1]}#map=16/${position[0]}/${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '8px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--green)',
                  textDecoration: 'underline',
                }}
              >
                <Navigation size={12} /> Ouvrir l’itinéraire OpenStreetMap
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

