'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { org } from '@/lib/data'
import { AskEicf } from './AskEicf'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 360)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="floating-actions" aria-label="Actions rapides">
      {showTop && (
        <button
          type="button"
          className="floating-action-btn"
          onClick={scrollToTop}
          aria-label="Retour en haut de page"
          title="Retour en haut"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <a
        href={`https://wa.me/${org.whatsapp}?text=Bonjour%20ONG%20EICF`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action-btn is-whatsapp"
        aria-label="Contacter EICF sur WhatsApp"
        title="WhatsApp EICF"
      >
        <MessageCircle size={20} />
      </a>

      <AskEicf />
    </div>
  )
}
