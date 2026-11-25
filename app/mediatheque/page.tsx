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
  Lock,
  ShieldCheck,
  Scale,
  Building,
  CheckCircle2,
  X,
  ExternalLink,
  Layers,
  Send,
  FileCheck2,
  FolderArchive,
  Award,
  AlertCircle,
  HelpCircle,
} from 'lucide-react'
import {
  documents,
  docTypes,
  documentCategories,
  media,
  type DocumentItem,
  type DocCategory,
  images,
} from '@/lib/data'
import { answer, normalize } from '@/lib/ask-engine'

const aiSampleQueries = [
  'Quels sont les rapports d’audit financier disponibles ?',
  'Télécharger la politique PSEA et sauvegarde de l’enfant',
  'Où trouver les statuts et l’organigramme certifié ?',
  'Rapport de capitalisation PASEA et SWEDD',
]

export default function MediathequePage() {
  const [activeTab, setActiveTab] = useState<'documents' | 'multimedia'>('documents')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedAccess, setSelectedAccess] = useState<'all' | 'public' | 'sur-demande'>('all')
  const [search, setSearch] = useState('')
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null)

  // État du modal de demande institutionnelle (pour documents sur demande)
  const [requestModalDoc, setRequestModalDoc] = useState<DocumentItem | null>(null)
  const [requestSubmitted, setRequestSubmitted] = useState(false)
  const [isSubmittingRequest, setIsSubmittingRequest] = useState(false)
  const [requestRefCode, setRequestRefCode] = useState('')
  const [requestForm, setRequestForm] = useState({
    name: '',
    organization: '',
    email: '',
    purpose: '',
    honeypot: '',
  })

  const filteredDocs = documents.filter((d) => {
    const matchesCat = selectedCategory === 'all' || d.category === selectedCategory
    const matchesAccess = selectedAccess === 'all' || d.confidentiality === selectedAccess

    if (!matchesCat || !matchesAccess) return false
    if (!search.trim()) return true

    const q = normalize(search)
    const hay = normalize(
      `${d.title} ${d.summary} ${d.type} ${d.code} ${d.project ?? ''} ${d.year} ${d.category}`
    )
    const terms = q.split(' ').filter((w) => w.length > 2)
    return hay.includes(q) || (terms.length > 0 && terms.some((t) => hay.includes(t)))
  })

  const aiInsight = search.trim().length > 3 ? answer(search) : null

  const handleDownload = (doc: DocumentItem) => {
    setDownloadSuccess(doc.title)
    setTimeout(() => setDownloadSuccess(null), 4000)

    // Déclenchement effectif du téléchargement du document PDF
    const link = document.createElement('a')
    link.href = doc.fileUrl ?? '/CAHIER DE CHARGES_SITE WEB EICF.pdf'
    link.download = `${doc.code}_${doc.slug}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (requestForm.honeypot) return

    setIsSubmittingRequest(true)
    setTimeout(() => {
      const ref = 'DEM-DOC-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000)
      setRequestRefCode(ref)
      setIsSubmittingRequest(false)
      setRequestSubmitted(true)
    }, 600)
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero has-image">
        <div className="page-hero-img">
          <img src={images.signatureMinistere} alt="Centre documentaire et archives institutionnelles EICF" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/a-propos">L’ONG</Link>
            <span>/</span>
            <span>Centre Documentaire &amp; Ressources</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Transparence, Redevabilité &amp; Capitalisation (18 ans d’action)
          </span>

          <h1 className="display">
            Centre Documentaire Institutionnel<br />
            <em>et espace de ressources certifiées.</em>
          </h1>

          <p className="lead">
            Conformément aux normes internationales d’intégrité, l’ONG EICF met à la disposition des bailleurs de
            fonds, partenaires techniques, ministères et auditeurs ses statuts, manuels de procédures, rapports
            financiers audités et documents de capitalisation.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              type="button"
              className={`px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all inline-flex items-center gap-2 ${
                activeTab === 'documents'
                  ? 'bg-secondary text-textDark shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 border border-white/30 text-white'
              }`}
              onClick={() => setActiveTab('documents')}
            >
              <FileText size={17} />
              <span>Documents Institutionnels ({documents.length})</span>
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
              <ImageIcon size={17} />
              <span>Photothèque &amp; Missions Terrain</span>
            </button>

            <a
              href="/CAHIER DE CHARGES_SITE WEB EICF.pdf"
              download="Pack_Fiduciaire_Institutionnel_EICF_2026.pdf"
              className="px-7 py-3.5 bg-primary hover:bg-primaryDark border border-secondary/50 text-white font-bold rounded-full transition-all shadow-md inline-flex items-center gap-2 text-sm sm:text-base"
              title="Télécharger le dossier complet de préqualification institutionnelle (18 ans d’existence, statuts, audits et gouvernance)"
            >
              <FolderArchive size={17} className="text-secondary" />
              <span>Pack Fiduciaire Bailleurs (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* BANDEAU DE SYNTHÈSE DU CENTRE DOCUMENTAIRE */}
      <section className="bg-white border-b border-border py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-background border border-border/60">
              <span className="block font-serif text-3xl font-extrabold text-primary">{documents.length}</span>
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block mt-1">
                Documents certifiés
              </span>
              <p className="text-xs text-textDark/80 mt-1">Gouvernance, audits &amp; projets</p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60">
              <span className="block font-serif text-3xl font-extrabold text-secondary">100 %</span>
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block mt-1">
                Audits Sans Réserve
              </span>
              <p className="text-xs text-textDark/80 mt-1">États financiers certifiés</p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60">
              <span className="block font-serif text-3xl font-extrabold text-primary">PSEA &amp; MGP</span>
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block mt-1">
                Sauvegardes Éthiques
              </span>
              <p className="text-xs text-textDark/80 mt-1">Accès public et téléchargeable</p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60">
              <span className="block font-serif text-3xl font-extrabold text-primary">SYSCOHADA</span>
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block mt-1">
                Manuels de Gestion
              </span>
              <p className="text-xs text-textDark/80 mt-1">Directives Banque mondiale &amp; CI</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTIFICATION FLOTTANTE DE TÉLÉCHARGEMENT EFFECTIF */}
      {downloadSuccess && (
        <div className="fixed top-24 right-6 z-50 px-6 py-4 rounded-2xl bg-primary text-white shadow-2xl flex items-center gap-3 text-sm animate-in fade-in slide-in-from-top-3 border border-secondary/40">
          <CheckCircle2 size={20} className="text-secondary shrink-0" />
          <div>
            <strong className="block font-semibold">Téléchargement en cours :</strong>
            <span className="text-xs text-white/90">{downloadSuccess}</span>
          </div>
        </div>
      )}

      {/* 1. ONGLET PRINCIPAL : DOCUMENTS INSTITUTIONNELS */}
      {activeTab === 'documents' && (
        <section className="py-16 bg-background">
          <div className="container">
            {/* MOTEUR DE RECHERCHE DOCUMENTAIRE INTELLIGENT */}
            <div className="max-w-3xl mx-auto mb-10">
              <div className="search-field">
                <Search size={18} className="lead-icon" />
                <input
                  type="text"
                  placeholder="Rechercher par titre, mot-clé, code ou référence (ex. PSEA, SYSCOHADA, SWEDD, PASEA, 2024)..."
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

              <div className="search-hints justify-center mt-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                  <Sparkles size={13} className="text-secondary" />
                  Suggestions :
                </span>
                {aiSampleQueries.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setSearch(q)}
                    className="text-xs hover:text-primary transition-colors underline decoration-dotted"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* RÉPONSE SYNTHÉTIQUE IA ISSUE DE LA BASE DOCUMENTAIRE VALIDÉE */}
              {aiInsight && (
                <div className="mt-6 p-6 rounded-2xl bg-white border-l-4 border-secondary shadow-md text-left">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-primary mb-2">
                    <Bot size={16} className="text-secondary" />
                    <span>Réponse documentaire certifiée EICF</span>
                  </div>
                  <p className="text-textDark text-sm sm:text-base font-medium leading-relaxed">
                    {aiInsight.text}
                  </p>
                  {aiInsight.bullets && aiInsight.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-textDark/80">
                      {aiInsight.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {aiInsight.sources.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-border flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                        Documents &amp; fiches associés :
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

            {/* FILTRES PAR CATÉGORIES INSTITUTIONNELLES & ACCÈS */}
            <div className="space-y-4 mb-10">
              {/* Filtre par catégorie */}
              <div className="flex justify-center flex-wrap gap-2">
                {documentCategories.map((cat) => {
                  const count =
                    cat.id === 'all'
                      ? documents.length
                      : documents.filter((d) => d.category === cat.id).length
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 ${
                        selectedCategory === cat.id
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-white text-textDark border border-border hover:bg-muted/10'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full ${
                          selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-muted/15 text-muted'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Filtre par niveau de confidentialité */}
              <div className="flex justify-center items-center gap-2 text-xs">
                <span className="text-muted font-bold uppercase tracking-wider mr-2">Niveau d’accès :</span>
                <button
                  type="button"
                  onClick={() => setSelectedAccess('all')}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                    selectedAccess === 'all'
                      ? 'bg-secondary text-textDark font-bold'
                      : 'bg-white text-muted hover:text-textDark border border-border'
                  }`}
                >
                  Tous ({documents.length})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedAccess('public')}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all inline-flex items-center gap-1.5 ${
                    selectedAccess === 'public'
                      ? 'bg-primary text-white font-bold'
                      : 'bg-white text-muted hover:text-textDark border border-border'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Accès Libre ({documents.filter((d) => d.confidentiality === 'public').length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedAccess('sur-demande')}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all inline-flex items-center gap-1.5 ${
                    selectedAccess === 'sur-demande'
                      ? 'bg-amber-700 text-white font-bold'
                      : 'bg-white text-muted hover:text-textDark border border-border'
                  }`}
                >
                  <Lock size={12} className="text-amber-500" />
                  <span>Accès Bailleurs sur demande ({documents.filter((d) => d.confidentiality === 'sur-demande').length})</span>
                </button>
              </div>
            </div>

            {/* GRILLE DES DOCUMENTS */}
            {filteredDocs.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-border max-w-xl mx-auto">
                <FileText size={40} className="text-muted mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Aucun document ne correspond</h3>
                <p className="text-muted text-sm mb-6">
                  Modifiez vos critères de recherche ou réinitialisez les filtres.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all')
                    setSelectedAccess('all')
                    setSearch('')
                  }}
                  className="btn btn-primary btn-sm"
                >
                  Réinitialiser tous les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocs.map((doc) => {
                  const isPublic = doc.confidentiality === 'public'
                  return (
                    <div
                      key={doc.slug}
                      className="bg-white rounded-2xl p-6 border border-border hover:border-secondary transition-all shadow-sm flex flex-col justify-between group"
                    >
                      <div>
                        {/* EN-TÊTE DE CARTE : BADGES */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[11px] font-bold tracking-wider uppercase">
                            {doc.type}
                          </span>

                          {isPublic ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span>Accès Libre</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold uppercase">
                              <Lock size={10} className="text-amber-600" />
                              <span>Sur demande bailleur</span>
                            </span>
                          )}
                        </div>

                        {/* CODE DE RÉFÉRENCE */}
                        <span className="text-[11px] font-mono text-muted/80 block mb-1">
                          Réf. {doc.code}
                        </span>

                        {/* TITRE */}
                        <h3 className="font-serif text-base sm:text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                          {doc.title}
                        </h3>

                        {/* RÉSUMÉ */}
                        <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mb-4">
                          {doc.summary}
                        </p>
                      </div>

                      {/* PIED DE CARTE : MÉTADONNÉES & BOUTON D'ACTION */}
                      <div className="pt-4 border-t border-border mt-2">
                        <div className="flex items-center justify-between text-xs text-muted mb-4">
                          <span>{doc.year} · {doc.pages}</span>
                          <span className="font-semibold text-textDark/80">{doc.size}</span>
                        </div>

                        {isPublic ? (
                          <button
                            type="button"
                            onClick={() => handleDownload(doc)}
                            className="w-full py-2.5 px-4 rounded-xl bg-primary hover:bg-primaryDark text-white font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-2 group-hover:bg-secondary group-hover:text-textDark"
                          >
                            <Download size={15} />
                            <span>Télécharger le PDF</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setRequestModalDoc(doc)}
                            className="w-full py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs transition-all flex items-center justify-center gap-2"
                          >
                            <Lock size={14} className="text-amber-700" />
                            <span>Demander la transmission</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 2. ONGLET MULTIMÉDIA : PHOTOTHÈQUE & VIDÉOS DE TERRAIN */}
      {activeTab === 'multimedia' && (
        <section className="py-16 bg-white" id="multimedia">
          <div className="container space-y-16">
            {/* PHOTOTHÈQUE OFFICIELLE DE TERRAIN */}
            <div>
              <div className="mb-8">
                <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                  Photothèque Officielle
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-1">
                  Missions de terrain, cérémonies officielles et réalisations
                </h2>
                <p className="text-muted text-sm mt-1">
                  Photographies authentiques des interventions d’EICF en milieu rural et urbain.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {media.photos.map((ph, idx) => (
                  <div
                    key={idx}
                    className="group bg-background rounded-2xl overflow-hidden border border-border shadow-xs hover:shadow-lg transition-all flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-primary/10">
                      <img
                        src={ph.src}
                        alt={ph.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <p className="text-xs sm:text-sm font-medium text-textDark/90 leading-snug">
                        {ph.caption}
                      </p>
                      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mt-3">
                        Documentation EICF Terrain
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VIDÉOS DE TERRAIN */}
            <div>
              <div className="mb-8">
                <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                  Reportages Vidéo
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-1">
                  Nos projets en images animées
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {media.videos.map((vid, idx) => (
                  <div key={idx} className="video-card shadow-md rounded-2xl overflow-hidden border border-border">
                    <img src={vid.thumb} alt={vid.title} className="w-full h-48 object-cover" />
                    <div className="play">
                      <Play size={22} style={{ marginLeft: '3px' }} />
                    </div>
                    <div className="info p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-xs text-white/80">Durée : {vid.duration}</span>
                      <h3 className="text-sm font-bold text-white mt-1">{vid.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SYNTHÈSES VISUELLES & INFOGRAPHIES */}
            <div>
              <div className="mb-8">
                <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                  Synthèses Graphiques
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-1">
                  Infographies &amp; fiches de synthèse
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {media.infographies.map((info, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-paper border border-border shadow-xs hover:border-secondary transition-all"
                  >
                    <span className="text-[11px] uppercase tracking-widest text-secondary font-extrabold block mb-2">
                      Fiche #{idx + 1}
                    </span>
                    <h3 className="font-serif text-base font-bold text-primary mb-2">{info.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{info.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BANNIÈRE DE LIAISON AVEC LES CAPACITÉS INSTITUTIONNELLES */}
      <section className="py-16 bg-primary text-white border-t border-border">
        <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold uppercase tracking-wider text-xs block mb-2">
              Préqualification Bailleurs &amp; Audits
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
              Besoin d’un audit préalable ou d’une convention de cofinancement ?
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Consultez notre dispositif institutionnel détaillé (SYSCOHADA, double signature, logiciel de gestion,
              dispositif MEL et matrice de séparation des pouvoirs) sur la page dédiée.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/capacites-institutionnelles"
              className="px-6 py-3.5 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all text-sm shadow-md inline-flex items-center gap-2"
            >
              <ShieldCheck size={16} />
              <span>Nos Capacités Institutionnelles</span>
            </Link>

            <Link
              href="/contact?type=partenariat"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all text-sm inline-flex items-center gap-2"
            >
              <span>Contacter la Direction</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL DE DEMANDE DE DOCUMENT SUR DEMANDE / BAILLEUR */}
      {requestModalDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setRequestModalDoc(null)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-border relative animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setRequestModalDoc(null)}
              className="absolute top-5 right-5 text-muted hover:text-textDark p-2 rounded-full hover:bg-background transition-all"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            {requestSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary">Demande transmise avec succès</h3>
                <div className="bg-background rounded-xl p-4 text-xs text-left max-w-sm mx-auto space-y-1.5 border border-border">
                  <div className="flex justify-between">
                    <span className="text-muted">Numéro de suivi :</span>
                    <strong className="font-mono text-primary font-bold">{requestRefCode}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Document :</span>
                    <strong className="text-textDark truncate max-w-[190px]">{requestModalDoc.title}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Délai d’envoi :</span>
                    <span className="text-emerald-800 font-bold">Sous 24h ouvrées</span>
                  </div>
                </div>
                <p className="text-muted text-xs leading-relaxed max-w-sm mx-auto">
                  Notre Direction Exécutive procède à la vérification de votre affiliation institutionnelle et vous fera parvenir le lien de téléchargement sécurisé.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setRequestSubmitted(false)
                    setRequestModalDoc(null)
                    setRequestForm({ name: '', organization: '', email: '', purpose: '', honeypot: '' })
                  }}
                  className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold hover:bg-primaryDark transition-colors"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                  <Lock size={14} />
                  <span>Document réservé aux Bailleurs &amp; Partenaires</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2">
                  Demande d’accès institutionnel
                </h3>
                <p className="text-xs sm:text-sm text-muted mb-4">
                  Pour obtenir <strong>{requestModalDoc.title}</strong> (Réf. {requestModalDoc.code}), merci de
                  renseigner vos coordonnées professionnelles.
                </p>

                <form onSubmit={handleRequestSubmit} className="space-y-3.5">
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input
                      type="text"
                      name="_gotcha_doc"
                      tabIndex={-1}
                      autoComplete="off"
                      value={requestForm.honeypot}
                      onChange={(e) => setRequestForm({ ...requestForm, honeypot: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-textDark mb-1">
                      Nom et Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex. Dr. Kouamé Jean"
                      value={requestForm.name}
                      onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm focus:border-primary focus:outline-none bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-textDark mb-1">
                      Organisation / Institution bailleur *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex. Banque mondiale, Agence Française de Développement, Ministère..."
                      value={requestForm.organization}
                      onChange={(e) => setRequestForm({ ...requestForm, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm focus:border-primary focus:outline-none bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-textDark mb-1">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean.kouame@organisation.org"
                      value={requestForm.email}
                      onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm focus:border-primary focus:outline-none bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-textDark mb-1">
                      Motif de la consultation
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ex. Mission d’audit préalable, préparation d’un appel d’offres, évaluation de projet..."
                      value={requestForm.purpose}
                      onChange={(e) => setRequestForm({ ...requestForm, purpose: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm focus:border-primary focus:outline-none bg-background"
                    />
                  </div>

                  <p className="text-[10px] text-muted leading-relaxed">
                    Les informations recueillies sont strictement confidentielles et réservées au traitement de votre demande de communication documentaire.
                  </p>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setRequestModalDoc(null)}
                      className="flex-1 py-3 px-4 rounded-xl border border-border text-xs font-semibold text-muted hover:text-textDark"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmittingRequest}
                      className="flex-1 py-3 px-4 rounded-xl bg-primary hover:bg-primaryDark disabled:bg-primary/60 text-white font-bold text-xs shadow-md transition-all inline-flex items-center justify-center gap-2"
                    >
                      {isSubmittingRequest ? (
                        <span>Transmission...</span>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Transmettre la demande</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
