'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Play, Pause, RotateCcw, Volume2, Check } from 'lucide-react'
import { org, globalStats } from '@/lib/data'

export function SixtySeconds() {
  const [profile, setProfile] = useState<'general' | 'bailleur' | 'communaute'>('general')
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const speeches = {
    general: `L'ONG EICF — Ensemble Imaginons et Construisons le Futur — est une organisation ivoirienne créée en 2012. Présente aujourd'hui dans 11 régions de Côte d'Ivoire, elle agit aux côtés des communautés locales dans 11 domaines essentiels : éducation, eau et assainissement, autonomisation des femmes, protection de l'enfance et santé publique. Avec plus de 10 000 bénéficiaires directs et 57 communautés accompagnées, EICF transforme des défis de terrain en résultats durables et mesurables.`,
    bailleur: `Pour les partenaires techniques et financiers, EICF offre un ancrage territorial prouvé et une gouvernance transparente. Déjà partenaire de la Banque mondiale, de l'UNICEF et de l'AFD, EICF pilote des projets structurants tels que le PASEA dans le Hambol (788 latrines réalisées) et le SWEDD dans le Nord-Est (1 850 adolescentes en espaces sûrs, 96 % de maintien scolaire). Notre système de suivi-évaluation garantit la redevabilité à chaque étape.`,
    communaute: `Aux côtés des villages et des familles, EICF applique une démarche résolument participative. Rien n'est imposé : chaque projet naît d'un diagnostic communautaire et s'appuie sur des comités locaux formés pour gérer eux-mêmes les points d'eau, les classes passerelles et les activités génératrices de revenus. L'autonomie des communautés est notre raison d'être.`,
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 100
          }
          return prev + 1.66 // ~60 seconds to reach 100%
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const handleToggle = () => {
    if (progress >= 100) {
      setProgress(0)
    }
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <div className="sixty">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', position: 'relative', zIndex: 1 }}>
        <div>
          <h3 style={{ fontSize: '32px', color: '#fff', marginTop: '4px' }}>
            « EICF en 60 secondes »
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14.5px', maxWidth: '580px', marginTop: '6px' }}>
            Génération instantanée d’une présentation synthétique adaptée au profil de l’interlocuteur à partir des données institutionnelles certifiées.
          </p>
        </div>

        {/* Profils d'écoute */}
        <div style={{ display: 'flex', gap: '6px', background: 'rgba(255,255,255,0.1)', padding: '5px', borderRadius: '999px' }}>
          <button
            type="button"
            className={`chip ${profile === 'general' ? 'is-active' : ''}`}
            onClick={() => { setProfile('general'); handleReset() }}
            style={{ fontSize: '12px', padding: '6px 14px' }}
          >
            Grand public
          </button>
          <button
            type="button"
            className={`chip ${profile === 'bailleur' ? 'is-active' : ''}`}
            onClick={() => { setProfile('bailleur'); handleReset() }}
            style={{ fontSize: '12px', padding: '6px 14px' }}
          >
            Bailleurs & Partenaires
          </button>
          <button
            type="button"
            className={`chip ${profile === 'communaute' ? 'is-active' : ''}`}
            onClick={() => { setProfile('communaute'); handleReset() }}
            style={{ fontSize: '12px', padding: '6px 14px' }}
          >
            Communautés
          </button>
        </div>
      </div>

      {/* Barre de défilement des 60 secondes */}
      <div className="timer">
        <span style={{ width: `${progress}%` }} />
      </div>

      {/* Texte généré */}
      <div className="sixty-text">
        <p>« {speeches[profile]} »</p>
      </div>

      {/* Contrôles */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            type="button"
            className="btn btn-gold btn-sm"
            onClick={handleToggle}
          >
            {isPlaying ? (
              <>
                <Pause size={15} />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play size={15} />
                <span>{progress > 0 && progress < 100 ? 'Reprendre' : 'Lancer les 60 secondes'}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            style={{
              background: 'transparent',
              border: 0,
              color: 'rgba(255,255,255,0.7)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12.5px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={14} />
            <span>Réinitialiser</span>
          </button>
        </div>

        <span style={{ fontSize: '13px', color: 'var(--gold-2)', fontWeight: 800 }}>
          {Math.round((progress / 100) * 60)}s / 60s
        </span>
      </div>
    </div>
  )
}
