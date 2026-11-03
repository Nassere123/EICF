'use client'

import dynamic from 'next/dynamic'

interface InteractiveMapProps {
  onAskAi?: (question: string) => void
  showTitle?: boolean
}

// Chargement dynamique côté client uniquement pour Leaflet + OpenStreetMap
const LeafletMap = dynamic(() => import('./LeafletMapInner'), {
  ssr: false,
  loading: () => (
    <div
      className="map-shell"
      style={{
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#edf1ea',
      }}
    >
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '4px solid var(--green-soft)',
            borderTopColor: 'var(--gold)',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px',
          }}
        />
        <strong style={{ display: 'block', fontSize: '17px', color: 'var(--green)' }}>
          Chargement de la carte OpenStreetMap...
        </strong>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>
          Cartographie interactive des interventions de l’EICF
        </p>
      </div>
    </div>
  ),
})

export function InteractiveMap(props: InteractiveMapProps) {
  return <LeafletMap {...props} />
}
