'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Download,
  FileText,
  Search,
  Sparkles,
  Play,
  Image as ImageIcon,
  ArrowRight,
  Check,
  Bot,
  ShieldCheck,
  Lock,
} from 'lucide-react'
import { documents, docTypes, media } from '@/lib/data'
import { answer, normalize } from '@/lib/ask-engine'

const aiSampleQueries = [
  'Banque mondiale',
  'SWEDD',
  'PASEA Katiola',
  'PEJEDEC',
]

export default function MediathequePage() {
  const [activeTab, setActiveTab] = useState<'documents' | 'multimedia'>('documents')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [search, setSearch] = useState('')
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null)

  const filteredDocs = documents.filter((d) => {
    const matchesType = selectedType === 'all' || d.type === selectedType
    if (!search.trim()) return matchesType

    const q = normalize(search)
    const hay = normalize(`${d.title} ${d.summary} ${d.type} ${d.project ?? ''} ${d.year}`)
    const terms = q.split(' ').filter((w) => w.length > 2)
    const matchesSearch =
      hay.includes(q) || (terms.length > 0 && terms.some((t) => hay.includes(t)))

    return matchesType && matchesSearch
  })

  const aiInsight = search.trim().length > 3 ? answer(search) : null

  const handleDownload = (title: string, accessLevel: string) => {
    if (accessLevel.includes('Due diligence')) {
      setDownloadSuccess(`${title} (Dossier due diligence préparé)`)
    } else {
      setDownloadSuccess(title)
    }
    setTimeout(() => setDownloadSuccess(null), 3500)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Centre documentaire &amp; Médiathèque</span>
          </div>

          <span className="badge badge-gold mb-4">
            Centre Documentaire Institutionnel &amp; Due Diligence Bailleurs
          </span>

          <h1 className="display">
            Centre documentaire &amp;<br />
            <em>ressources institutionnelles d’EICF.</em>
          </h1>

          <p className="lead">
            Statuts et règlement intérieur (2008), organigramme officiel, manuels
            de procédures administratives, financières et de passation des marchés,
            politiques PSEA/MGP, rapports annuels, audits et photothèque terrain.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              type="button"
              className={`btn ${activeTab === 'documents' ? 'btn-gold' : 'btn-outline'}`}
              onClick={() => setActiveTab('documents')}
            >
              <FileText size={16} />
              <span>Centre documentaire ({documents.length})</span>
            </button>
            <button
              type="button"
              className={`btn ${activeTab === 'multimedia' ? 'btn-gold' : 'btn-outline'}`}
              onClick={() => setActiveTab('multimedia')}
            >
              <ImageIcon size={16} />
              <span>Multimédia &amp; Photothèque</span>
            </button>
          </div>
        </div>
      </section>

      {downloadSuccess && (
        <div className="fixed top-24 right-6 z-50 px-5 py-3.5 bg-[#06352a] border border-[#f2b31a] text-white flex items-center gap-3 text-sm">
          <Check size={18} className="text-[#f2b31a] flex-shrink-0" />
          <span>
            Document prêt : <strong>{downloadSuccess}</strong>
          </span>
        </div>
      )}

      {activeTab === 'documents' && (
        <section className="section section-green">
          <div className="container">
            {/* Barre de recherche & filtre select (sans surcharge de chips) */}
            <div className="filter-bar">
              <div className="search-inline">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Rechercher un manuel, statut, politique PSEA/MGP, audit..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select
                aria-label="Filtrer par catégorie documentaire"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="select-pill"
              >
                <option value="all">Tous les documents ({documents.length})</option>
                {docTypes.map((t) => {
                  const count = documents.filter((d) => d.type === t).length
                  return (
                    <option key={t} value={t}>
                      {t} ({count})
                    </option>
                  )
                })}
              </select>
            </div>

            <div className="search-hints justify-center mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#f2b31a]" />
                Recherches rapides :
              </span>
              {aiSampleQueries.map((q) => (
                <button key={q} type="button" onClick={() => setSearch(q)}>
                  {q}
                </button>
              ))}
            </div>

            {aiInsight && (
              <div className="card mb-8" style={{ borderLeft: '4px solid var(--gold)' }}>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#06352a] mb-2">
                  <Bot size={16} />
                  <span>Réponse documentaire (Sources validées EICF)</span>
                </div>
                <p className="text-[#0b1813] text-sm sm:text-base font-medium leading-relaxed">
                  {aiInsight.text}
                </p>
                {aiInsight.bullets && aiInsight.bullets.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-[#1c2a24]">
                    {aiInsight.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#f2b31a] mt-2 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {aiInsight.sources.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#d4d4d4] flex flex-wrap items-center gap-2">
                    {aiInsight.sources.map((s, i) => (
                      <Link key={i} href={s.href} className="badge hover:bg-[#06352a] hover:text-white">
                        <span>{s.label}</span>
                        <ArrowRight size={11} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="space-y-4">
              {filteredDocs.map((doc) => {
                const isDueDiligence = doc.accessLevel.includes('Due diligence')
                return (
                  <div key={doc.slug} className="doc-row">
                    <div className="ficon">
                      <FileText size={20} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="badge badge-gold">{doc.type}</span>
                        <span className="badge">
                          {isDueDiligence ? <Lock size={11} /> : <ShieldCheck size={11} />}
                          {doc.accessLevel}
                        </span>
                      </div>
                      <h3>{doc.title}</h3>
                      <p>{doc.summary}</p>
                    </div>

                    <div className="meta">
                      <span className="block text-xs text-[#0b1813] font-extrabold">
                        Édition {doc.year}
                      </span>
                      <span className="block text-xs font-bold mt-0.5">{doc.size}</span>
                    </div>

                    <button
                      type="button"
                      className="dl-btn"
                      onClick={() => handleDownload(doc.title, doc.accessLevel)}
                    >
                      <Download size={14} />
                      <span>{isDueDiligence ? 'Obtenir (Bailleur)' : 'Télécharger'}</span>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'multimedia' && (
        <section className="section section-white" id="multimedia">
          <div className="container space-y-16">
            <div>
              <span className="badge badge-gold mb-2">Reportages &amp; Documentaires</span>
              <h2 className="h2 mb-6" style={{ color: 'var(--ink)' }}>
                Nos interventions en images animées
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {media.videos.map((vid, idx) => (
                  <div key={idx} className="video-card">
                    <img src={vid.thumb} alt={vid.title} />
                    <div className="play">
                      <Play size={24} style={{ marginLeft: '3px' }} />
                    </div>
                    <div className="info">
                      <span>Durée : {vid.duration}</span>
                      <h3>{vid.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="badge badge-gold mb-2">Synthèses Visuelles</span>
              <h2 className="h2 mb-6" style={{ color: 'var(--ink)' }}>
                Infographies &amp; fiches visuelles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {media.infographies.map((info, idx) => (
                  <div key={idx} className="infographic">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest opacity-85 font-extrabold">
                        Infographie #{idx + 1}
                      </span>
                      <h3 className="mt-2">{info.title}</h3>
                    </div>
                    <p className="mt-4">{info.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="badge badge-gold mb-2">Photothèque Officielle</span>
              <h2 className="h2 mb-6" style={{ color: 'var(--ink)' }}>
                Photographies authentiques des activités de terrain
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
