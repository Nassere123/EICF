'use client'

import dynamic from 'next/dynamic'

const ContactMapComponent = dynamic(() => import('./ContactMapInner'), {
  ssr: false,
  loading: () => (
    <div
      className="contact-leaflet-shell"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#edf1ea',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '3px solid var(--green-soft)',
            borderTopColor: 'var(--gold)',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 10px',
          }}
        />
        <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 600 }}>
          Localisation OpenStreetMap...
        </span>
      </div>
    </div>
  ),
})

export function ContactMap() {
  return <ContactMapComponent />
}

