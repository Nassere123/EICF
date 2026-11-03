'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, X, ArrowRight, FileText, Briefcase, Newspaper, Sparkles, Layers } from 'lucide-react'
import { smartSearch, type SearchHit } from '@/lib/ask-engine'

interface SmartSearchProps {
  open: boolean
  onClose: () => void
}

export function SmartSearch({ open, onClose }: SmartSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchHit[]>([])

  useEffect(() => {
    if (!open) {
      setQuery('')
      setResults([])
      return
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const hits = smartSearch(query)
    setResults(hits)
  }, [query])

  if (!open) return null

  const getIcon = (type: SearchHit['type']) => {
    switch (type) {
      case 'Projet':
        return <Briefcase size={16} />
      case 'Document':
        return <FileText size={16} />
      case 'Actualité':
        return <Newspaper size={16} />
      case 'Domaine':
        return <Layers size={16} />
    }
  }

  const sampleQueries = ['Banque mondiale', 'PASEA', 'Eau', 'Bounkani', 'Rapport annuel', 'SWEDD', 'Femmes']

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        backgroundColor: 'rgba(7, 35, 27, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px 20px 20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: 'min(680px, 100%)',
          backgroundColor: '#fff',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          animation: 'pop-in 0.25s var(--ease)',
          border: '1px solid var(--line)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barre de recherche */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <Search size={20} style={{ color: 'var(--green-3)' }} />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un projet, rapport, région, bailleur..."
            style={{
              flex: 1,
              border: 0,
              outline: 0,
              fontSize: '16px',
              fontFamily: 'inherit',
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              style={{
                background: 'transparent',
                border: 0,
                color: 'var(--muted)',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '6px 12px',
              borderRadius: '999px',
              border: '1px solid var(--line)',
              background: 'var(--paper)',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.06em',
            }}
          >
            ECHAP
          </button>
        </div>

        {/* Suggestions rapides si pas de requête */}
        {!query && (
          <div style={{ padding: '24px' }}>
            <p
              style={{
                fontSize: '11.5px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--gold)' }} />
              Recherches fréquentes dans la base EICF
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {sampleQueries.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuery(s)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '999px',
                    border: '1px solid var(--line)',
                    background: 'var(--paper)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--green)',
                    cursor: 'pointer',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Résultats */}
        {query && (
          <div
            style={{
              maxHeight: '440px',
              overflowY: 'auto',
              padding: '16px 20px',
              display: 'grid',
              gap: '8px',
            }}
          >
            {results.length > 0 ? (
              results.map((hit, i) => (
                <Link
                  key={i}
                  href={hit.href}
                  onClick={onClose}
                  className="search-hit"
                >
                  <span
                    className="badge"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    {getIcon(hit.type)}
                    <span>{hit.type}</span>
                  </span>
                  <div>
                    <h4>{hit.title}</h4>
                    <p>{hit.excerpt}</p>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--green-3)' }} />
                </Link>
              ))
            ) : (
              <div className="search-empty">
                <p>Aucun résultat trouvé pour « {query} ».</p>
                <small style={{ color: 'var(--muted)' }}>
                  Essayez avec un nom de région (ex. <em>Hambol</em>), un bailleur (ex. <em>Banque mondiale</em>) ou un secteur.
                </small>
              </div>
            )}
          </div>
        )}

        {/* Pied de la modale */}
        <div
          style={{
            padding: '12px 20px',
            backgroundColor: 'var(--paper)',
            borderTop: '1px solid var(--line)',
            fontSize: '12px',
            color: 'var(--muted)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>Indexé : 10 projets, 15 rapports, 11 domaines & 8 actualités</span>
          <span style={{ color: 'var(--green-3)', fontWeight: 700 }}>
            Plateforme EICF 2026
          </span>
        </div>
      </div>
    </div>
  )
}
