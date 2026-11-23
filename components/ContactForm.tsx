'use client'

import { useEffect, useState } from 'react'
import {
  Send,
  CheckCircle2,
  Paperclip,
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
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    organisation: '',
    typeOrg: initialType === 'rse' ? 'Entreprise privée (RSE)' : 'Bailleur technique et financier',
    domaineCible: domains[0].title,
    sujet: '',
    message: '',
    fichier: null as string | null,
  })

  useEffect(() => {
    setActiveTab(resolveTab(initialType))
    if (initialType === 'rse') {
      setFormData((prev) => ({ ...prev, typeOrg: 'Entreprise privée (RSE)' }))
    }
  }, [initialType])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      organisation: '',
      typeOrg: 'Bailleur technique et financier',
      domaineCible: domains[0].title,
      sujet: '',
      message: '',
      fichier: null,
    })
  }

  if (submitted) {
    return (
      <div className="form-card form-success">
        <div className="ok">
          <CheckCircle2 size={36} />
        </div>
        <span className="inline-block bg-secondary/25 text-textDark px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
          Message bien reçu
        </span>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mb-3">
          Merci pour votre prise de contact !
        </h3>
        <p className="text-muted text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
          Votre message a été transmis à l’équipe compétente d’EICF. Nous reviendrons vers vous dans un délai de 48 heures ouvrées.
        </p>
        <button
          type="button"
          className="px-7 py-3 bg-primary hover:bg-primaryDark text-white font-bold rounded-full text-sm transition-colors"
          onClick={handleReset}
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <div className="form-card">
      {/* 4 onglets conformément au CDC §8 */}
      <div className="form-tabs">
        <button
          type="button"
          className={activeTab === 'contact' ? 'is-active' : ''}
          onClick={() => setActiveTab('contact')}
        >
          Message général
        </button>
        <button
          type="button"
          className={activeTab === 'partenariat' ? 'is-active' : ''}
          onClick={() => setActiveTab('partenariat')}
        >
          Demande de partenariat
        </button>
        <button
          type="button"
          className={activeTab === 'information' ? 'is-active' : ''}
          onClick={() => setActiveTab('information')}
        >
          Demande d’information
        </button>
        <button
          type="button"
          className={activeTab === 'candidature' ? 'is-active' : ''}
          onClick={() => setActiveTab('candidature')}
        >
          Candidature / Bénévolat
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="field">
          <label htmlFor="nom">Nom complet *</label>
          <input
            id="nom"
            type="text"
            required
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            placeholder="Ex : Kouamé Koffi"
          />
        </div>

        <div className="field">
          <label htmlFor="email">Adresse email professionnelle *</label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="vous@organisation.org"
          />
        </div>

        <div className="field">
          <label htmlFor="telephone">Téléphone (avec indicatif pays)</label>
          <input
            id="telephone"
            type="tel"
            value={formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            placeholder="+225 07 00 00 00 00"
          />
        </div>

        {activeTab === 'partenariat' && (
          <>
            <div className="field">
              <label htmlFor="organisation">Organisation / Entreprise *</label>
              <input
                id="organisation"
                type="text"
                required
                value={formData.organisation}
                onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                placeholder="Nom de votre structure"
              />
            </div>

            <div className="field">
              <label htmlFor="typeOrg">Type de partenaire</label>
              <select
                id="typeOrg"
                value={formData.typeOrg}
                onChange={(e) => setFormData({ ...formData, typeOrg: e.target.value })}
              >
                <option>Bailleur technique et financier</option>
                <option>Organisme international / ONU</option>
                <option>Entreprise privée (RSE)</option>
                <option>Fondation / Mécénat</option>
                <option>ONG / Association partenaire</option>
                <option>Collectivité territoriale</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="domaineCible">Domaine d’intervention ciblé</label>
              <select
                id="domaineCible"
                value={formData.domaineCible}
                onChange={(e) => setFormData({ ...formData, domaineCible: e.target.value })}
              >
                <option>Multi-secteurs / Global</option>
                {domains.map((d) => (
                  <option key={d.slug}>{d.title}</option>
                ))}
              </select>
            </div>
          </>
        )}

        {activeTab === 'candidature' && (
          <>
            <div className="field">
              <label htmlFor="expertise">Domaine d’expertise principal *</label>
              <select
                id="expertise"
                value={formData.domaineCible}
                onChange={(e) => setFormData({ ...formData, domaineCible: e.target.value })}
              >
                <option>Gestion de projet / Programmes</option>
                <option>Suivi-évaluation & Gestion des connaissances</option>
                <option>Eau, hygiène et assainissement (WASH)</option>
                <option>Éducation & protection de l’enfance</option>
                <option>Santé communautaire & nutrition</option>
                <option>Administration, finances & logistique</option>
                <option>Communication & plaidoyer</option>
              </select>
            </div>

            <div className="field">
              <label>Curriculum Vitae (PDF / Word) *</label>
              <div className="file">
                <Paperclip size={18} style={{ color: 'var(--green-3)' }} />
                <span>Cliquez pour joindre votre CV (max 5 Mo)</span>
              </div>
            </div>
          </>
        )}

        {activeTab === 'information' && (
          <div className="field full">
            <label htmlFor="sujet">Objet de votre demande d’information *</label>
            <input
              id="sujet"
              type="text"
              required
              value={formData.sujet}
              onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
              placeholder="Ex : Demande de rapport annuel, modalités d’intervention dans le Hambol..."
            />
          </div>
        )}

        <div className="field full">
          <label htmlFor="message">
            {activeTab === 'candidature'
              ? 'Lettre de motivation ou proposition d’engagement *'
              : activeTab === 'partenariat'
              ? 'Présentation de votre projet ou opportunité de collaboration *'
              : 'Votre message *'}
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={
              activeTab === 'partenariat'
                ? 'Précisez les objectifs, la zone géographique ciblée et le calendrier prévisionnel...'
                : 'Parlez-nous de votre demande...'
            }
          />
        </div>

        <div className="full flex flex-wrap justify-between items-center gap-4 pt-3">
          <p className="text-xs text-muted">
            Les informations recueillies sont protégées conformément à nos engagements de confidentialité.
          </p>

          <button
            type="submit"
            className="px-8 py-3.5 bg-primary hover:bg-primaryDark text-white font-bold rounded-full transition-all shadow-md inline-flex items-center gap-2 text-sm"
          >
            <span>
              {activeTab === 'candidature'
                ? 'Envoyer ma candidature'
                : activeTab === 'partenariat'
                ? 'Soumettre la demande de partenariat'
                : 'Envoyer le message'}
            </span>
            <Send size={15} />
          </button>
        </div>
      </form>
    </div>
  )
}
