'use client'

import { useState } from 'react'
import { Sparkles, Wand2, Check, ArrowRight, RefreshCw, Send } from 'lucide-react'
import { images } from '@/lib/data'

export function AiArticleGenerator() {
  const [fieldNotes, setFieldNotes] = useState(
    `Mission de suivi à Fronan (Katiola). 3 nouveaux forages réceptionnés avec le comité villageois. Les femmes témoignent d'un gain de 2 heures par jour pour la corvée d'eau. 18 membres du comité formés à la maintenance des pompes.`
  )
  const [step, setStep] = useState<number>(1)
  const [generating, setGenerating] = useState(false)
  const [draft, setDraft] = useState<{
    title: string
    category: string
    lead: string
    body: string
    tags: string[]
  } | null>(null)
  const [validated, setValidated] = useState(false)

  const handleGenerate = () => {
    setGenerating(true)
    setValidated(false)
    setTimeout(() => {
      setDraft({
        title: 'À Fronan, l’accès à l’eau potable redonne du temps et de l’autonomie aux femmes',
        category: 'Activités terrain',
        lead: 'Dans le département de Katiola, la réception de trois nouveaux points d’eau équipés d’une pompe à motricité humaine transforme le quotidien de plus de 1 200 personnes.',
        body: `Ce mardi, l'équipe de l'ONG EICF a accompagné les autorités traditionnelles et le comité villageois de Fronan pour la remise officielle de trois forages réhabilités. Pour Awa et les femmes du village, c'est la fin d'un calvaire : « Nous marchions plus d'une heure chaque matin pour puiser une eau souvent trouble. Aujourd'hui, l'eau coule à deux pas du village. »\n\nPour garantir la pérennité des ouvrages, 18 villageois ont suivi une formation pratique à la petite maintenance et à la gestion transparente de la caisse d'entretien.`,
        tags: ['PASEA', 'Eau & Assainissement', 'Hambol', 'Autonomisation'],
      })
      setGenerating(false)
      setStep(2)
    }, 650)
  }

  const handleValidate = () => {
    setValidated(true)
    setStep(3)
  }

  return (
    <div className="ai-demo">
      {/* Panneau gauche : Saisie de terrain */}
      <div className="pane">
        <div className="label">
          <Sparkles size={16} />
          <span>1. Données brutes saisies par l’équipe de terrain</span>
        </div>

        <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.7)' }}>
          L’agent de terrain saisit quelques notes et sélectionne les photos prises lors de la mission :
        </p>

        <textarea
          value={fieldNotes}
          onChange={(e) => setFieldNotes(e.target.value)}
          placeholder="Entrez les notes de terrain..."
        />

        <div>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
            Photos associées :
          </span>
          <div className="thumbs" style={{ marginTop: '6px' }}>
            <img src={images.latrines} alt="Ouvrage WASH" />
            <img src={images.dialogue} alt="Comité villageois" />
          </div>
        </div>

        <div className="actions" style={{ marginTop: 'auto' }}>
          <button
            type="button"
            className="btn btn-gold btn-sm"
            onClick={handleGenerate}
            disabled={generating}
          >
            {generating ? (
              <>
                <RefreshCw size={14} className="animate-spin" />
                <span>Génération par l’IA en cours...</span>
              </>
            ) : (
              <>
                <Wand2 size={14} />
                <span>Générer la proposition d’article</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Panneau droit : Proposition automatique de l'IA & Validation humaine */}
      <div className="pane">
        <div className="label">
          <Sparkles size={16} />
          <span>2. Proposition IA & Validation humaine (CDC §8)</span>
        </div>

        {/* Étapes du workflow */}
        <div className="workflow">
          <span className={step >= 1 ? 'on' : ''}>1. Saisie terrain</span>
          <span>&rarr;</span>
          <span className={step >= 2 ? 'on' : ''}>2. Proposition IA</span>
          <span>&rarr;</span>
          <span className={step >= 3 ? 'on' : ''}>3. Validation humaine</span>
          <span>&rarr;</span>
          <span>4. Publication</span>
        </div>

        <div className="draft">
          {draft ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                <span className="badge badge-gold">{draft.category}</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 700 }}>
                  Généré en 0.6s
                </span>
              </div>
              <h4>{draft.title}</h4>
              <p style={{ fontWeight: 600, color: 'var(--green-2)', marginBottom: '10px' }}>
                {draft.lead}
              </p>
              <p style={{ whiteSpace: 'pre-line', color: 'var(--muted)', fontSize: '13.5px' }}>
                {draft.body}
              </p>

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px' }}>
                {draft.tags.map((t) => (
                  <span key={t} className="badge" style={{ fontSize: '10px' }}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="empty">
              <p>
                Cliquez sur « <strong>Générer la proposition d’article</strong> » pour tester le module de rédaction assistée par IA prévu dans le cahier des charges.
              </p>
            </div>
          )}
        </div>

        {draft && (
          <div className="actions" style={{ marginTop: 'auto' }}>
            {validated ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--gold-2)',
                  fontWeight: 800,
                  fontSize: '13px',
                }}
              >
                <Check size={18} />
                <span>Article validé par la chargée de communication — Prêt à être publié</span>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-green btn-sm"
                onClick={handleValidate}
                style={{ background: 'var(--gold)', color: 'var(--ink)' }}
              >
                <Check size={15} />
                <span>Valider et programmer la publication</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
