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
        return <Briefcase size={15} />
      case 'Document':
        return <FileText size={15} />
      case 'Actualité':
        return <Newspaper size={15} />
      case 'Domaine':
        return <Layers size={15} />
    }
  }

  const sampleQueries = ['Banque mondiale', 'PASEA', 'Eau', 'Bounkani', 'Rapport annuel', 'SWEDD', 'Femmes']

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        backgroundColor: 'rgba(4, 35, 27, 0.72)',
        backdropFilter: 'blur(6px)',
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
          borderRadius: '0px',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          border: '2px solid var(--green)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 18px',
            borderBottom: '1px solid var(--border-card)',
          }}
        >
          <Search size={20} style={{ color: 'var(--green)' }} />
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
              aria-label="Effacer la recherche"
              style={{ color: 'var(--muted)' }}
            >
              <X size={18} />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '6px 12px',
              borderRadius: '0px',
              border: '1px solid var(--border-card)',
              background: '#f4f7f5',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.06em',
            }}
          >
            ECHAP
          </button>
        </div>

        {!query && (
          <div style={{ padding: '22px' }}>
            <p
              style={{
                fontSize: '11.5px',
                fontWeight: 800,
                letterSpacing: '0.1em',
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
                    padding: '7px 14px',
                    borderRadius: '0px',
                    border: '1px solid var(--border-card)',
                    background: '#ffffff',
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

        {query && (
          <div
            style={{
              maxHeight: '440px',
              overflowY: 'auto',
              padding: '16px 18px',
              display: 'grid',
              gap: '8px',
            }}
          >
            {results.length > 0 ? (
              results.map((hit, i) => (
                <Link key={i} href={hit.href} onClick={onClose} className="search-hit">
                  <span className="badge">
                    {getIcon(hit.type)}
                    <span>{hit.type}</span>
                  </span>
                  <div>
                    <h4>{hit.title}</h4>
                    <p>{hit.excerpt}</p>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--green)' }} />
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

        <div
          style={{
            padding: '12px 18px',
            backgroundColor: '#f4f7f5',
            borderTop: '1px solid var(--border-card)',
            fontSize: '12px',
            color: 'var(--muted)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>Indexé : projets, rapports, domaines &amp; actualités</span>
          <span style={{ color: 'var(--green)', fontWeight: 700 }}>Plateforme EICF</span>
        </div>
      </div>
    </div>
  )
}
