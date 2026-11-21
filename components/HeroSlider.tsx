'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { heroSlides } from '@/lib/data'

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [announcement, setAnnouncement] = useState('')

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const total = heroSlides.length

  const goTo = useCallback(
    (index: number, announce = true) => {
      const next = ((index % total) + total) % total
      setActiveIndex(next)
      if (announce) {
        setAnnouncement(`Diapositive ${next + 1} sur ${total} : ${heroSlides[next].title}`)
      }
    },
    [total]
  )

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion || total <= 1) return
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [paused, hovered, focused, reducedMotion, total])

  const current = heroSlides[activeIndex]

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Présentation des actions de l’ONG EICF"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setFocused(false)
        }
      }}
    >
      {/* Images plein écran */}
      <div className="hero-slide-bg" aria-hidden="true">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.image + idx}
            className={`hero-slide-img ${idx === activeIndex ? 'is-active' : ''}`}
          >
            <img src={slide.image} alt="" />
          </div>
        ))}
        <div className="hero-slide-overlay" />
      </div>

      {/* Cartouche de contenu net */}
      <div className="container hero-slider-content">
        <div
          className="hero-cartouche"
          role="group"
          aria-roledescription="slide"
          aria-label={`Diapositive ${activeIndex + 1} sur ${total}`}
        >
          <span className="badge badge-gold">{current.tag}</span>
          <h1>{current.title}</h1>
          <p>{current.subtitle}</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link href={current.primaryCta.href} className="btn btn-gold">
              <span>{current.primaryCta.label}</span>
              <ArrowRight size={16} />
            </Link>
            <Link href={current.secondaryCta.href} className="btn btn-outline">
              <span>{current.secondaryCta.label}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Barre de contrôles : pagination + pause + flèches */}
      <div className="hero-slider-controls">
        <div className="container hero-slider-bar">
          <div className="hero-slider-dots" role="group" aria-label="Choisir une diapositive">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.title}
                type="button"
                className="hero-slider-dot"
                aria-label={`Afficher la diapositive ${idx + 1} : ${slide.tag}`}
                aria-current={idx === activeIndex ? 'true' : undefined}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>

          <div className="hero-slider-arrows">
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Reprendre le défilement automatique' : 'Mettre en pause le défilement automatique'}
              title={paused ? 'Reprendre' : 'Pause'}
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Diapositive précédente"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Diapositive suivante"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <p className="visually-hidden" role="status" aria-live="polite">
          {announcement}
        </p>
      </div>
    </section>
  )
}
