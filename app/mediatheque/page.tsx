'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Download,
  FileText,
  Search,
  Filter,
  Sparkles,
  Play,
  Image as ImageIcon,
  Video as VideoIcon,
  PieChart,
  ArrowRight,
  Check,
} from 'lucide-react'
import {
  documents,
  docTypes,
  media,
  type DocType,
} from '@/lib/data'

export default function MediathequePage() {
  const [activeTab, setActiveTab] = useState<'documents' | 'multimedia'>('documents')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [search, setSearch] = useState('')
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null)

  const filteredDocs = documents.filter((d) => {
    const matchesType = selectedType === 'all' || d.type === selectedType
    const matchesSearch =
      !search ||
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.summary.toLowerCase().includes(search.toLowerCase())
    return matchesType && matchesSearch
  })

  const handleDownload = (slug: string, title: string) => {
    setDownloadSuccess(title)
    setTimeout(() => setDownloadSuccess(null), 3000)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Médiathèque</span>
          </div>
          <h1 className="display">
            Les connaissances utiles,<br />
            <em>à portée de main.</em>
          </h1>
          <p className="lead">
            Rapports annuels, évaluations finales, manuels de formation, études
            de capitalisation et photothèque de terrain : un espace ouvert aux
            bailleurs, chercheurs et partenaires.
          </p>

          <div style={{ display: 'flex', gap: '8px', marginTop: '30px' }}>
            <button
              type="button"
              className={`btn btn-sm ${activeTab === 'documents' ? 'btn-gold' : 'btn-outline'}`}
              onClick={() => setActiveTab('documents')}
            >
              <FileText size={14} />
              <span>Documents & Rapports ({documents.length})</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm ${activeTab === 'multimedia' ? 'btn-gold' : 'btn-outline'}`}
              onClick={() => setActiveTab('multimedia')}
            >
              <ImageIcon size={14} />
              <span>Multimédia & Photothèque</span>
            </button>
          </div>
        </div>
      </section>

      {/* Notification de téléchargement simulé */}
      {downloadSuccess && (
        <div
          style={{
            position: 'fixed',
            top: '90px',
            right: '24px',
            zIndex: 100,
            padding: '14px 20px',
            borderRadius: '12px',
            background: 'var(--green)',
            color: '#fff',
            boxShadow: 'var(--shadow)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '13.5px',
            animation: 'fade-up 0.3s var(--ease)',
          }}
        >
          <Check size={18} style={{ color: 'var(--gold-2)' }} />
          <span>Téléchargement préparé : <strong>{downloadSuccess}</strong></span>
        </div>
      )}

      {/* 1. ONGLET DOCUMENTS */}
      {activeTab === 'documents' && (
        <section className="section bg-paper">
          <div className="container">
            {/* Barre de recherche documentaire */}
            <div style={{ maxWidth: '640px', margin: '0 auto 36px' }}>
              <div className="search-field">
                <Search size={18} className="lead-icon" />
                <input
                  type="text"
                  placeholder="Rechercher un rapport, une étude, un manuel..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* 9 types de documents du CDC §5 */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
              <div className="chips">
                <button
                  type="button"
                  className={`chip ${selectedType === 'all' ? 'is-active' : ''}`}
                  onClick={() => setSelectedType('all')}
                >
                  <span>Tous les types ({documents.length})</span>
                </button>

                {docTypes.map((t) => {
                  const count = documents.filter((d) => d.type === t).length
                  return (
                    <button
                      key={t}
                      type="button"
                      className={`chip ${selectedType === t ? 'is-active' : ''}`}
                      onClick={() => setSelectedType(t)}
                    >
                      <span>{t}</span>
                      {count > 0 && <span className="count">{count}</span>}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Liste des documents */}
            <div style={{ display: 'grid', gap: '12px' }}>
              {filteredDocs.map((doc) => (
                <div key={doc.slug} className="doc-row">
                  <div className="ficon">PDF</div>

                  <div>
                    <h3>{doc.title}</h3>
                    <p>{doc.summary}</p>
                  </div>

                  <div className="meta">
                    <span className="badge badge-gold" style={{ fontSize: '10px' }}>
                      {doc.type}
                    </span>
                    <span style={{ display: 'block', marginTop: '4px' }}>
                      {doc.year} · {doc.size}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="dl-btn"
                    onClick={() => handleDownload(doc.slug, doc.title)}
                  >
                    <Download size={14} />
                    <span>Télécharger</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. ONGLET MULTIMÉDIA */}
      {activeTab === 'multimedia' && (
        <section className="section bg-white" id="multimedia">
          <div className="container">
            {/* Vidéos de terrain */}
            <div style={{ marginBottom: '60px' }}>
              <h2 className="h2" style={{ marginBottom: '24px' }}>
                Nos interventions en images animées.
              </h2>

              <div className="grid-3">
                {media.videos.map((vid, idx) => (
                  <div key={idx} className="video-card">
                    <img src={vid.thumb} alt={vid.title} />
                    <div className="play">
                      <Play size={24} style={{ marginLeft: '4px' }} />
                    </div>
                    <div className="info">
                      <span>Durée : {vid.duration}</span>
                      <h3>{vid.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Infographies institutionnelles */}
            <div style={{ marginBottom: '60px' }}>
              <h2 className="h2" style={{ marginBottom: '24px' }}>
                Infographies & fiches visuelles.
              </h2>

              <div className="grid-4">
                {media.infographies.map((info, idx) => (
                  <div key={idx} className="infographic">
                    <div>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8, fontWeight: 800 }}>
                        Infographie #{idx + 1}
                      </span>
                      <h3>{info.title}</h3>
                    </div>
                    <p>{info.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photothèque de terrain */}
            <div>
              <h2 className="h2" style={{ marginBottom: '24px' }}>
                Instantanés du quotidien des communautés.
              </h2>

              <div className="gallery">
                {media.photos.map((ph, idx) => (
                  <figure key={idx}>
                    <img src={ph.src} alt={ph.caption} />
                    <figcaption>{ph.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
