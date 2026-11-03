'use client'

/**
 * Motion toolkit EICF — équivalents natifs (sans jQuery) des plugins
 * utilisés dans The-50-Front-end-Project : waypoints/animate.css (reveal),
 * counterup/countTo (compteurs), typed.js (mots rotatifs), rellax (parallaxe)
 * et hoverbox (cartes « spotlight »).
 */

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

/* ------------------------------------------------------------------ */
/* Reveal automatique au défilement                                     */
/* ------------------------------------------------------------------ */

const REVEAL_SELECTOR = [
  '[data-reveal]:not([data-reveal="off"])',
  'main .section-head',
  'main .card',
  'main .project-card',
  'main .project-feature',
  'main .domain-card',
  'main .news-card',
  'main .vm-card',
  'main .impact-item',
  'main .kpi-card',
  'main .doc-row',
  'main .story',
  'main .ba-card',
  'main .funding-card',
  'main .opp',
  'main .person',
  'main .tl-item',
  'main .approach > div',
  'main .gallery figure',
  'main .video-card',
  'main .infographic',
  'main .contact-card',
  'main .form-card',
  'main .map-shell',
  'main .cta-band',
  'main .media-stack',
  'main .intro-quote',
].join(',')

export function useRevealOnScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (el) => !el.closest('[data-reveal="off"]') && !el.classList.contains('is-revealed')
    )

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-revealed'))
      return
    }

    const vh = window.innerHeight

    // Les éléments déjà visibles dans l'écran s'affichent instantanément sans délai de chargement
    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < vh * 0.95) {
        el.classList.add('is-revealed')
      } else {
        const parent = el.parentElement
        if (parent) {
          const siblings = Array.from(parent.children).filter((c) => els.includes(c as HTMLElement))
          const i = siblings.indexOf(el)
          el.style.setProperty('--reveal-delay', `${Math.min(i, 4) * 40}ms`)
        }
        el.classList.add('reveal-init')
      }
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('is-revealed')
            io.unobserve(el)
            window.setTimeout(() => el.classList.remove('reveal-init'), 500)
          }
        })
      },
      { rootMargin: '0px 0px -4% 0px', threshold: 0.05 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}

/* ------------------------------------------------------------------ */
/* Spotlight : lumière qui suit la souris sur les cartes                */
/* ------------------------------------------------------------------ */

export function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        '.card, .project-card, .domain-card, .opp, .contact-card, .funding-card, .kpi-card'
      )
      if (!target) return
      const r = target.getBoundingClientRect()
      target.style.setProperty('--mx', `${e.clientX - r.left}px`)
      target.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
}

/* ------------------------------------------------------------------ */
/* Parallaxe légère (variable CSS --py)                                 */
/* ------------------------------------------------------------------ */

export function useParallax() {
  const pathname = usePathname()
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.15
        const r = el.getBoundingClientRect()
        const offset = (r.top + r.height / 2 - window.innerHeight / 2) * -speed
        el.style.setProperty('--py', `${offset.toFixed(1)}px`)
      })
      raf = 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [pathname])
}

/* ------------------------------------------------------------------ */
/* Barre de progression de lecture                                      */
/* ------------------------------------------------------------------ */

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? window.scrollY / h : 0
      ref.current?.style.setProperty('transform', `scaleX(${p})`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />
}

/* ------------------------------------------------------------------ */
/* Compteur animé                                                       */
/* ------------------------------------------------------------------ */

const fmt = (n: number) => n.toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' ')

export function CountUp({
  value,
  duration = 1800,
  prefix = '',
  suffix = '',
  className,
}: {
  value: number
  duration?: number
  prefix?: string
  suffix?: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 4)
          setDisplay(Math.round(value * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {fmt(display)}
      {suffix}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Mots rotatifs (alternative légère à typed.js)                        */
/* ------------------------------------------------------------------ */

export function RotatingWords({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="rotator" aria-live="polite">
      {/* Mot le plus long pour réserver la largeur */}
      <span className="rotator-sizer" aria-hidden="true">
        {words.reduce((a, b) => (b.length > a.length ? b : a), '')}
      </span>
      {words.map((w, idx) => (
        <span key={w} className={`rotator-word ${idx === i ? 'is-in' : ''}`} aria-hidden={idx !== i}>
          {w}
        </span>
      ))}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Texte révélé ligne par ligne (masque)                                */
/* ------------------------------------------------------------------ */

export function LineReveal({ lines, delay = 0 }: { lines: React.ReactNode[]; delay?: number }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <span className="line-inner" style={{ animationDelay: `${delay + i * 120}ms` }}>
            {line}
          </span>
        </span>
      ))}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Hook composite appelé une seule fois dans le shell                   */
/* ------------------------------------------------------------------ */

export function MotionEffects() {
  useRevealOnScroll()
  useSpotlight()
  useParallax()
  return <ScrollProgress />
}
