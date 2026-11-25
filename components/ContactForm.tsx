'use client'

import { useEffect, useState, useRef } from 'react'
import {
  Send,
  CheckCircle2,
  Paperclip,
  X,
  FileText,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Clock,
  Building2,
} from 'lucide-react'
import { domains } from '@/lib/data'

export type ContactInitialType =
  | 'contact'
  | 'partenariat'
  | 'information'
  | 'candidature'
  | 'rse'
  | 'benevole'

interface ContactFormProps {
  initialType?: ContactInitialType
}

export function ContactForm({ initialType = 'contact' }: ContactFormProps) {
  const resolveTab = (t: string) => {
    if (t === 'partenariat' || t === 'rse') return 'partenariat'
    if (t === 'candidature' || t === 'benevole') return 'candidature'
    if (t === 'information') return 'information'
    return 'contact'
  }

  const [activeTab, setActiveTab] = useState<string>(() => resolveTab(initialType))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [referenceCode, setReferenceCode] = useState('')
  const [submissionDate, setSubmissionDate] = useState('')
  const [fileError, setFileError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>(null)
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    organisation: '',
    typeOrg: initialType === 'rse' ? 'Entreprise privée (RSE)' : 'Bailleur technique et financier',
    domaineCible: domains[0].title,
    sujet: '',
    message: '',
    consentement: true,
    honeypot: '', // Piège anti-spam invisible
  })

  useEffect(() => {
    setActiveTab(resolveTab(initialType))
    if (initialType === 'rse') {
      setFormData((prev) => ({ ...prev, typeOrg: 'Entreprise privée (RSE)' }))
    }
  }, [initialType])

  // Gestion du fichier joint réel
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null)
    const file = e.target.files?.[0]
    if (!file) return

    // Vérification de la taille max (5 Mo = 5 * 1024 * 1024 octets)
    if (file.size > 5 * 1024 * 1024) {
      setFileError('Le fichier dépasse la taille maximale autorisée de 5 Mo.')
      if (fileInputRef.current) fileInputRef.current.value = ''
      return
    }

    // Vérification de l'extension
    const validExtensions = ['.pdf', '.doc', '.docx']
    const ext = '.' + file.name.split('.').pop()?.toLowerCase()
    if (!validExtensions.includes(ext)) {
      setFileError('Format non accepté. Veuillez joindre un document PDF ou Word (.pdf, .doc, .docx).')
      if (fileInputRef.current) fileInputRef.current.value = ''
      return
    }

    const sizeFormatted =
      file.size > 1024 * 1024
        ? (file.size / (1024 * 1024)).toFixed(1) + ' Mo'
        : Math.round(file.size / 1024) + ' Ko'

    setSelectedFile({
      name: file.name,
      size: sizeFormatted,
    })
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    setFileError(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Vérification anti-spam bot
    if (formData.honeypot) {
      console.warn('Spam submission detected and blocked.')
      return
    }

    setIsSubmitting(true)

    // Simulation d'envoi réseau sécurisé
    setTimeout(() => {
      const randomRef = 'REF-EICF-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000)
      const nowFormatted = new Date().toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })

      setReferenceCode(randomRef)
      setSubmissionDate(nowFormatted)
      setIsSubmitting(false)
      setSubmitted(true)
    }, 700)
  }

  const handleReset = () => {
    setSubmitted(false)
    setSelectedFile(null)
    setFileError(null)
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      organisation: '',
      typeOrg: 'Bailleur technique et financier',
      domaineCible: domains[0].title,
      sujet: '',
      message: '',
      consentement: true,
      honeypot: '',
    })
  }

  // Déterminer le département cible selon l'onglet
  const getRecipientDepartment = () => {
    switch (activeTab) {
      case 'partenariat':
        return 'Pôle Mobilisation de Ressources & Partenariats Stratégiques'
      case 'candidature':
        return 'Département Administration & Ressources Humaines'
      case 'information':
        return 'Cellule Communication Institutionnelle & Relations Publiques'
      default:
        return 'Direction Exécutive & Secrétariat Général'
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-md text-center animate-in fade-in zoom-in-95">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={36} />
        </div>

        <span className="inline-block bg-secondary/25 text-textDark px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
          Transmission certifiée
        </span>

        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-2">
          Accusé de réception formel
        </h3>

        <p className="text-textDark/85 text-xs sm:text-sm max-w-lg mx-auto mb-6 leading-relaxed">
          Votre requête a été transmise avec succès au <strong>{getRecipientDepartment()}</strong> de l’ONG EICF.
        </p>

        {/* REÇU DE CONFIRMATION */}
        <div className="bg-background rounded-2xl p-5 max-w-md mx-auto mb-8 border border-border/80 text-left text-xs space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-border/60">
            <span className="text-muted font-bold">Référence du dossier :</span>
            <span className="font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
              {referenceCode}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted">Demandeur :</span>
            <strong className="text-textDark">{formData.nom}</strong>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted">Courriel de réponse :</span>
            <strong className="text-textDark">{formData.email}</strong>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted">Horodatage :</span>
            <span className="text-textDark">{submissionDate}</span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/60">
            <span className="text-emerald-800 font-bold flex items-center gap-1">
              <Clock size={13} />
              <span>Délai d’engagement :</span>
            </span>
            <span className="font-bold text-emerald-800">48h ouvrées maximum</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            className="w-full sm:w-auto px-7 py-3 bg-primary hover:bg-primaryDark text-white font-bold rounded-full text-xs sm:text-sm transition-colors shadow-sm"
            onClick={handleReset}
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="form-card bg-white rounded-3xl p-6 sm:p-10 border border-border shadow-md">
      {/* 4 onglets conformément au CDC §8 */}
      <div className="form-tabs mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
            activeTab === 'contact'
              ? 'bg-primary text-white shadow-sm'
              : 'bg-background text-textDark hover:bg-muted/10 border border-border'
          }`}
          onClick={() => setActiveTab('contact')}
        >
          Message général
        </button>
        <button
          type="button"
          className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
            activeTab === 'partenariat'
              ? 'bg-primary text-white shadow-sm'
              : 'bg-background text-textDark hover:bg-muted/10 border border-border'
          }`}
          onClick={() => setActiveTab('partenariat')}
        >
          Demande de partenariat
        </button>
        <button
          type="button"
          className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
            activeTab === 'information'
              ? 'bg-primary text-white shadow-sm'
              : 'bg-background text-textDark hover:bg-muted/10 border border-border'
          }`}
          onClick={() => setActiveTab('information')}
        >
          Demande d’information
        </button>
        <button
          type="button"
          className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
            activeTab === 'candidature'
              ? 'bg-primary text-white shadow-sm'
              : 'bg-background text-textDark hover:bg-muted/10 border border-border'
          }`}
          onClick={() => setActiveTab('candidature')}
        >
          Candidature / Bénévolat
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form-grid space-y-4">
        {/* CHAMP HONEYPOT INVISIBLE (Anti-Spam Bot) */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <input
            type="text"
            name="_gotcha_trap"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="field">
            <label htmlFor="nom" className="block text-xs font-bold text-textDark mb-1">
              Nom complet *
            </label>
            <input
              id="nom"
              type="text"
              required
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              placeholder="Ex : Kouamé Koffi Jean"
              className="w-full px-4 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
            />
          </div>

          <div className="field">
            <label htmlFor="email" className="block text-xs font-bold text-textDark mb-1">
              Adresse email professionnelle *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="vous@organisation.org"
              className="w-full px-4 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="telephone" className="block text-xs font-bold text-textDark mb-1">
            Numéro de téléphone <span className="text-muted font-normal">(avec indicatif pays)</span>
          </label>
          <input
            id="telephone"
            type="tel"
            value={formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            placeholder="+225 07 00 00 00 00 ou +33 6..."
            className="w-full px-4 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
          />
          <span className="text-[10px] text-muted mt-1 block">
            Pour la Côte d’Ivoire, merci de préciser l’indicatif +225 suivi de votre numéro à 10 chiffres.
          </span>
        </div>

        {activeTab === 'partenariat' && (
          <div className="space-y-4 pt-2 border-t border-border/60">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="field">
                <label htmlFor="organisation" className="block text-xs font-bold text-textDark mb-1">
                  Organisation / Entreprise *
                </label>
                <input
                  id="organisation"
                  type="text"
                  required
                  value={formData.organisation}
                  onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                  placeholder="Nom de votre structure ou institution"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-background focus:outline-none focus:border-primary"
                />
              </div>

              <div className="field">
                <label htmlFor="typeOrg" className="block text-xs font-bold text-textDark mb-1">
                  Type de partenaire
                </label>
                <select
                  id="typeOrg"
                  value={formData.typeOrg}
                  onChange={(e) => setFormData({ ...formData, typeOrg: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-background focus:outline-none focus:border-primary"
                >
                  <option>Bailleur technique et financier (Multilatéral/Bilatéral)</option>
                  <option>Organisme international / Agence des Nations Unies</option>
                  <option>Entreprise privée (Mécénat / RSE)</option>
                  <option>Fondation philanthropique</option>
                  <option>ONG / Consortium international</option>
                  <option>Ministère ou Collectivité territoriale</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="domaineCible" className="block text-xs font-bold text-textDark mb-1">
                Domaine d’intervention ciblé
              </label>
              <select
                id="domaineCible"
                value={formData.domaineCible}
                onChange={(e) => setFormData({ ...formData, domaineCible: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-background focus:outline-none focus:border-primary"
              >
                <option>Multi-secteurs / Global</option>
                {domains.map((d) => (
                  <option key={d.slug}>{d.title}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {activeTab === 'candidature' && (
          <div className="space-y-4 pt-2 border-t border-border/60">
            <div className="field">
              <label htmlFor="expertise" className="block text-xs font-bold text-textDark mb-1">
                Domaine d’expertise principal *
              </label>
              <select
                id="expertise"
                value={formData.domaineCible}
                onChange={(e) => setFormData({ ...formData, domaineCible: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-background focus:outline-none focus:border-primary"
              >
                <option>Gestion de projet / Coordination de programmes</option>
                <option>Suivi-évaluation &amp; Gestion des connaissances (MEL)</option>
                <option>Eau, hygiène et assainissement (WASH / ATPC)</option>
                <option>Éducation &amp; protection de l’enfance</option>
                <option>Genre, droits des filles &amp; mentorat SWEDD</option>
                <option>Santé communautaire &amp; nutrition</option>
                <option>Administration, finances SYSCOHADA &amp; passation de marchés</option>
                <option>Communication institutionnelle &amp; redevabilité</option>
                <option>Bénévolat de terrain &amp; engagement civique</option>
              </select>
            </div>

            {/* VÉRITABLE SÉLECTEUR DE FICHIER JOINT (CV / LETTRE) */}
            <div className="field">
              <label className="block text-xs font-bold text-textDark mb-1">
                Curriculum Vitae ou Dossier (PDF / Word, max 5 Mo)
              </label>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="cv-upload"
              />

              {!selectedFile ? (
                <label
                  htmlFor="cv-upload"
                  className="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-border hover:border-primary/50 bg-background hover:bg-primary/5 cursor-pointer transition-all text-xs text-textDark/80"
                >
                  <Paperclip size={18} className="text-secondary" />
                  <span>Cliquez pour sélectionner votre fichier (.pdf, .doc, .docx - max 5 Mo)</span>
                </label>
              ) : (
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-emerald-700 shrink-0" />
                    <div>
                      <span className="font-bold text-emerald-950 block truncate max-w-[240px]">
                        {selectedFile.name}
                      </span>
                      <span className="text-[10px] text-emerald-700">{selectedFile.size}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="p-1 rounded-full text-emerald-800 hover:bg-emerald-200 transition-colors"
                    title="Supprimer le fichier"
                  >
                    <X size={15} />
                  </button>
                </div>
              )}

              {fileError && (
                <p className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle size={13} />
                  <span>{fileError}</span>
                </p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'information' && (
          <div className="field pt-2 border-t border-border/60">
            <label htmlFor="sujet" className="block text-xs font-bold text-textDark mb-1">
              Objet de votre demande d’information *
            </label>
            <input
              id="sujet"
              type="text"
              required
              value={formData.sujet}
              onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
              placeholder="Ex : Modalités d’audit, rapport annuel, intervention dans le Hambol..."
              className="w-full px-4 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-background focus:outline-none focus:border-primary"
            />
          </div>
        )}

        <div className="field">
          <label htmlFor="message" className="block text-xs font-bold text-textDark mb-1">
            {activeTab === 'candidature'
              ? 'Lettre de motivation ou description de votre profil *'
              : activeTab === 'partenariat'
              ? 'Présentation de votre projet ou opportunité de cofinancement *'
              : 'Votre message détaillé *'}
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={
              activeTab === 'partenariat'
                ? 'Précisez les objectifs, la zone géographique ciblée, la contribution envisagée et le calendrier prévisionnel...'
                : 'Décrivez précisément l’objet de votre requête...'
            }
            className="w-full px-4 py-2.5 rounded-xl border border-border text-xs sm:text-sm bg-background focus:outline-none focus:border-primary leading-relaxed"
          />
        </div>

        {/* CASE À COCHER DE CONSENTEMENT ET PROTECTION DES DONNÉES (Loi 2013-450) */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 text-xs text-muted cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.consentement}
              onChange={(e) => setFormData({ ...formData, consentement: e.target.checked })}
              className="mt-0.5 rounded border-border text-primary focus:ring-primary/20"
            />
            <span>
              J’accepte que les données renseignées soient traitées par l’ONG EICF dans le strict cadre de cette demande, conformément à la réglementation ivoirienne relative à la protection des données à caractère personnel.
            </span>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-border/60">
          <span className="text-[11px] text-muted flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-secondary shrink-0" />
            <span>Traitement sécurisé · Réponse sous 48h ouvrées</span>
          </span>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primaryDark disabled:bg-primary/60 text-white font-bold rounded-full transition-all shadow-md inline-flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Transmission sécurisée...</span>
              </>
            ) : (
              <>
                <span>
                  {activeTab === 'candidature'
                    ? 'Transmettre ma candidature'
                    : activeTab === 'partenariat'
                    ? 'Soumettre la proposition partenariale'
                    : 'Transmettre ma demande'}
                </span>
                <Send size={15} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
