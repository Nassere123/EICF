'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Send, CheckCircle2, Paperclip, Lock } from 'lucide-react'
import { domains } from '@/lib/data'

export type ContactInitialType =
  | 'contact'
  | 'partenariat'
  | 'projet'
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
    if (t === 'projet') return 'projet'
    if (t === 'benevole') return 'benevole'
    if (t === 'candidature') return 'candidature'
    return 'contact'
  }

  const [activeTab, setActiveTab] = useState<string>(() => resolveTab(initialType))
  const [submitted, setSubmitted] = useState(false)
  const [consentGiven, setConsentGiven] = useState(true)
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
          <CheckCircle2 size={34} />
        </div>
        <span className="badge badge-gold mb-3">Transmission enregistrée</span>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0b1813] mb-3">
          Merci pour votre message à l’ONG EICF !
        </h3>
        <p className="text-[#4c5a53] text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
          Votre dossier a été transmis au département compétent de la Direction Exécutive d’EICF.
          Vous recevrez une réponse sous 48 heures ouvrées.
        </p>
        <button type="button" className="btn btn-green" onClick={handleReset}>
          Envoyer une nouvelle demande
        </button>
      </div>
    )
  }

  return (
    <div className="form-card">
      <div className="form-tabs">
        <button
          type="button"
          className={activeTab === 'partenariat' ? 'is-active' : ''}
          onClick={() => setActiveTab('partenariat')}
        >
          Devenir partenaire
        </button>
        <button
          type="button"
          className={activeTab === 'projet' ? 'is-active' : ''}
          onClick={() => setActiveTab('projet')}
        >
          Soumettre un projet
        </button>
        <button
          type="button"
          className={activeTab === 'benevole' ? 'is-active' : ''}
          onClick={() => setActiveTab('benevole')}
        >
          Devenir volontaire
        </button>
        <button
          type="button"
          className={activeTab === 'candidature' ? 'is-active' : ''}
          onClick={() => setActiveTab('candidature')}
        >
          Recrutement
        </button>
        <button
          type="button"
          className={activeTab === 'contact' ? 'is-active' : ''}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="field">
          <label htmlFor="nom">Nom et prénoms *</label>
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

        {(activeTab === 'partenariat' || activeTab === 'projet') && (
          <>
            <div className="field">
              <label htmlFor="organisation">Institution / Organisation / Entreprise *</label>
              <input
                id="organisation"
                type="text"
                required
                value={formData.organisation}
                onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                placeholder="Nom de votre institution"
              />
            </div>

            <div className="field">
              <label htmlFor="typeOrg">Catégorie d’organisation</label>
              <select
                id="typeOrg"
                value={formData.typeOrg}
                onChange={(e) => setFormData({ ...formData, typeOrg: e.target.value })}
              >
                <option>Bailleur technique et financier</option>
                <option>Agence des Nations Unies / Coopération</option>
                <option>Ministère / Collectivité territoriale</option>
                <option>Entreprise privée (RSE / Mécénat)</option>
                <option>ONG / Consortium d’exécution</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="domaineCible">Secteur d’intervention concerné</label>
              <select
                id="domaineCible"
                value={formData.domaineCible}
                onChange={(e) => setFormData({ ...formData, domaineCible: e.target.value })}
              >
                <option>Multi-secteurs / Programme global</option>
                {domains.map((d) => (
                  <option key={d.slug}>{d.title}</option>
                ))}
              </select>
            </div>
          </>
        )}

        {(activeTab === 'candidature' || activeTab === 'benevole') && (
          <>
            <div className="field">
              <label htmlFor="expertise">Département / Domaine d’expertise *</label>
              <select
                id="expertise"
                value={formData.domaineCible}
                onChange={(e) => setFormData({ ...formData, domaineCible: e.target.value })}
              >
                <option>Département des Opérations et des programmes</option>
                <option>Département suivi-évaluation (S&amp;E)</option>
                <option>Département comptable et financier</option>
                <option>Département Administration, RH &amp; Passation des marchés</option>
                <option>Département communication et partenariats</option>
                <option>Animation terrain / Base régionale (Katiola, Bouna, Korhogo, Bondoukou)</option>
              </select>
            </div>

            <div className="field full">
              <label>Curriculum Vitae &amp; Lettre de motivation (PDF / Word) *</label>
              <div className="file">
                <Paperclip size={18} style={{ color: 'var(--green-3)' }} />
                <span>Joindre votre dossier de candidature (max 5 Mo)</span>
              </div>
            </div>
          </>
        )}

        {activeTab === 'contact' && (
          <div className="field">
            <label htmlFor="sujet">Objet de votre message *</label>
            <input
              id="sujet"
              type="text"
              required
              value={formData.sujet}
              onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
              placeholder="Ex : Demande de dossier de qualification, rapport annuel..."
            />
          </div>
        )}

        <div className="field full">
          <label htmlFor="message">
            {activeTab === 'candidature'
              ? 'Motivations et disponibilités *'
              : activeTab === 'benevole'
              ? 'Compétences proposées et disponibilités pour le volontariat *'
              : activeTab === 'projet'
              ? 'Présentation synthétique du projet à soumettre ou co-construire *'
              : activeTab === 'partenariat'
              ? 'Objet du partenariat ou de la mission d’évaluation (Due diligence) *'
              : 'Votre message *'}
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Précisez votre demande, les régions ou domaines ciblés..."
          />
        </div>

        <div className="full p-4 bg-[#f4f7f5] border border-[#d4d4d4]">
          <label className="flex items-start gap-2.5 text-xs text-[#1c2a24] cursor-pointer">
            <input
              type="checkbox"
              required
              checked={consentGiven}
              onChange={(e) => setConsentGiven(e.target.checked)}
              className="mt-1"
            />
            <span>
              J’accepte que mes données personnelles soient collectées et traitées par la Direction Exécutive de l’ONG EICF aux seules fins d’instruire ma demande, conformément à la <strong>Loi n° 2013-450 relative à la protection des données à caractère personnel en Côte d’Ivoire (ARTCI)</strong>. Consultez notre{' '}
              <Link href="/mentions-legales#confidentialite" className="text-[#06352a] font-bold underline">
                Politique de confidentialité
              </Link>.
            </span>
          </label>
        </div>

        <div className="full flex flex-wrap justify-between items-center gap-4 pt-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-[#4c5a53] font-semibold">
            <Lock size={13} className="text-[#06352a]" />
            Formulaire sécurisé · Confidentialité garantie
          </span>

          <button type="submit" className="btn btn-green">
            <span>
              {activeTab === 'candidature'
                ? 'Transmettre ma candidature'
                : activeTab === 'benevole'
                ? 'Proposer mon volontariat'
                : activeTab === 'projet'
                ? 'Soumettre le projet'
                : activeTab === 'partenariat'
                ? 'Envoyer la proposition'
                : 'Envoyer le message'}
            </span>
            <Send size={15} />
          </button>
        </div>
      </form>
    </div>
  )
}
