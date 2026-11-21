'use client'

/**
 * Motion toolkit EICF — animations natives (sans jQuery) :
 * reveal au défilement, compteurs CountUp (0 -> cible au scroll),
 * mots rotatifs, parallaxe légère et barre de progression de lecture.
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
  'main .card-mia',
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

    const getTargets = () =>
      Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
        (el) =>
          !el.closest('[data-reveal="off"]') &&
          !el.closest('.carousel-track') &&
          !el.closest('.hero-slider') &&
          !el.classList.contains('is-revealed')
      )

    if (reduce || !('IntersectionObserver' in window)) {
      getTargets().forEach((el) => el.classList.add('is-revealed'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('is-revealed')
            io.unobserve(el)
            window.setTimeout(() => el.classList.remove('reveal-init'), 550)
          }
        })
      },
      { rootMargin: '0px 0px 40px 0px', threshold: 0.01 }
    )

    const scan = () => {
      const vh = window.innerHeight
      const atBottom = window.scrollY + vh >= document.documentElement.scrollHeight - 24
      const els = getTargets()
      els.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (atBottom || rect.top < vh) {
          el.classList.add('is-revealed')
          io.unobserve(el)
        } else if (!el.classList.contains('reveal-init')) {
          const parent = el.parentElement
          if (parent) {
            const siblings = Array.from(parent.children).filter((c) => els.includes(c as HTMLElement))
            const i = siblings.indexOf(el)
            el.style.setProperty('--reveal-delay', `${Math.min(i, 4) * 40}ms`)
          }
          el.classList.add('reveal-init')
          io.observe(el)
        }
      })
    }

    scan()

    let scrollRaf = 0
    const onScroll = () => {
      if (scrollRaf) return
      scrollRaf = requestAnimationFrame(() => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 24) {
          scan()
        }
        scrollRaf = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const mainEl = document.querySelector('main')
    const mo = mainEl
      ? new MutationObserver(() => {
          scan()
        })
      : null
    if (mainEl && mo) {
      mo.observe(mainEl, { childList: true, subtree: true })
    }

    return () => {
      io.disconnect()
      mo?.disconnect()
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(scrollRaf)
    }
  }, [pathname])
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
/* Compteur animé (démarre à 0 et s'incrémente au scroll)               */
/* ------------------------------------------------------------------ */

const fmt = (n: number) => n.toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' ')

export function CountUp({
  value,
  duration = 1600,
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
    if (!el || value <= 0) {
      setDisplay(value)
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }

    setDisplay(0)
    let raf = 0
    let hasAnimated = false

    const startAnimation = () => {
      if (hasAnimated) return
      hasAnimated = true
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 4)
        setDisplay(Math.round(value * eased))
        if (t < 1) {
          raf = requestAnimationFrame(tick)
        } else {
          setDisplay(value)
        }
      }
      raf = requestAnimationFrame(tick)
    }

    if (!('IntersectionObserver' in window)) {
      startAnimation()
      return () => cancelAnimationFrame(raf)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        startAnimation()
      },
      { threshold: 0.2 }
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block' }}>
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
  useParallax()
  return <ScrollProgress />
}
