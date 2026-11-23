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
} from 'lucide-react'
import {
  documents,
  docTypes,
  media,
} from '@/lib/data'
import { answer, normalize } from '@/lib/ask-engine'

const aiSampleQueries = [
  'Trouve-moi les projets d’EICF financés par la Banque mondiale',
  'Quels sont les résultats du projet SWEDD ?',
  'Rapports annuels',
  'PASEA latrines Katiola',
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

  const handleDownload = (slug: string, title: string) => {
    setDownloadSuccess(title)
    setTimeout(() => setDownloadSuccess(null), 3000)
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Médiathèque & Centre de ressources</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Centre de Ressources & Capitalisation
          </span>

          <h1 className="display">
            Les connaissances utiles,<br />
            <em>à portée de main.</em>
          </h1>

          <p className="lead">
            Rapports annuels, évaluations finales, manuels de formation, études
            de capitalisation et photothèque de terrain : un espace ouvert aux
            bailleurs, chercheurs et partenaires.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              type="button"
              className={`px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all inline-flex items-center gap-2 ${
                activeTab === 'documents'
                  ? 'bg-secondary text-textDark shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 border border-white/30 text-white'
              }`}
              onClick={() => setActiveTab('documents')}
            >
              <FileText size={16} />
              <span>Documents & Rapports ({documents.length})</span>
            </button>
            <button
              type="button"
              className={`px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all inline-flex items-center gap-2 ${
                activeTab === 'multimedia'
                  ? 'bg-secondary text-textDark shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 border border-white/30 text-white'
              }`}
              onClick={() => setActiveTab('multimedia')}
            >
              <ImageIcon size={16} />
              <span>Multimédia & Photothèque</span>
            </button>
          </div>
        </div>
      </section>

      {/* Notification de téléchargement simulé */}
      {downloadSuccess && (
        <div className="fixed top-24 right-6 z-50 px-5 py-3.5 rounded-2xl bg-primary text-white shadow-2xl flex items-center gap-3 text-sm animate-in fade-in slide-in-from-top-3">
          <Check size={18} className="text-secondary flex-shrink-0" />
          <span>
            Téléchargement préparé : <strong>{downloadSuccess}</strong>
          </span>
        </div>
      )}

      {/* 1. ONGLET DOCUMENTS */}
      {activeTab === 'documents' && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Moteur de recherche documentaire intelligent (CDC §5) */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="search-field">
                <Search size={18} className="lead-icon" />
                <input
                  type="text"
                  placeholder="Posez une question ou cherchez un rapport (ex. projets financés par la Banque mondiale, SWEDD...)"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="px-3 py-1 text-xs font-bold text-muted hover:text-primary"
                  >
                    Effacer
                  </button>
                )}
              </div>

              <div className="search-hints justify-center">
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles size={13} className="text-secondary" />
                  Exemples IA :
                </span>
                {aiSampleQueries.map((q) => (
                  <button key={q} type="button" onClick={() => setSearch(q)}>
                    {q}
                  </button>
                ))}
              </div>

              {/* Réponse synthétique IA issue des documents institutionnels validés */}
              {aiInsight && (
                <div className="mt-6 p-6 rounded-2xl bg-white border-l-4 border-secondary shadow-md text-left">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-primary mb-2">
                    <Bot size={16} className="text-secondary" />
                    <span>Réponse documentaire IA (Sources validées EICF)</span>
                  </div>
                  <p className="text-textDark text-sm sm:text-base font-medium leading-relaxed">
                    {aiInsight.text}
                  </p>
                  {aiInsight.bullets && aiInsight.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-text">
                      {aiInsight.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {aiInsight.sources.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-black/5 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                        Fiches & sources :
                      </span>
                      {aiInsight.sources.map((s, i) => (
                        <Link
                          key={i}
                          href={s.href}
                          className="px-3 py-1 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary text-xs font-bold transition-colors inline-flex items-center gap-1"
                        >
                          <span>{s.label}</span>
                          <ArrowRight size={11} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 9 types de documents du CDC §5 */}
            <div className="flex justify-center mb-12">
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
            <div className="space-y-4">
              {filteredDocs.map((doc) => (
                <div
                  key={doc.slug}
                  data-reveal
                  className="doc-row bg-white rounded-2xl p-5 sm:p-6 border border-black/5 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="ficon">
                    <FileText size={20} />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-textDark">
                      {doc.title}
                    </h3>
                    <p className="text-muted text-xs sm:text-sm mt-1">
                      {doc.summary}
                    </p>
                  </div>

                  <div className="meta">
                    <span className="inline-block bg-secondary/25 text-textDark px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider">
                      {doc.type}
                    </span>
                    <span className="block text-xs text-muted font-bold mt-1.5">
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
        <section className="py-20 bg-white" id="multimedia">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Vidéos de terrain */}
            <div>
              <div className="mb-8">
                <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                  Reportages & Documentaires
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mt-1">
                  Nos interventions en images animées
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {media.videos.map((vid, idx) => (
                  <div key={idx} className="video-card shadow-md">
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
            <div>
              <div className="mb-8">
                <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                  Synthèses Visuelles
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mt-1">
                  Infographies & fiches visuelles
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {media.infographies.map((info, idx) => (
                  <div key={idx} className="infographic shadow-sm">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest opacity-80 font-extrabold">
                        Infographie #{idx + 1}
                      </span>
                      <h3 className="mt-2">{info.title}</h3>
                    </div>
                    <p className="mt-4">{info.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photothèque de terrain */}
            <div>
              <div className="mb-8">
                <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                  Photothèque Officielle
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mt-1">
                  Instantanés du quotidien des communautés
                </h2>
              </div>

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
