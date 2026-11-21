'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CardCarouselProps {
  label: string
  children: React.ReactNode[]
}

export function CardCarousel({ label, children }: CardCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const [statusMessage, setStatusMessage] = useState('')
  const hasInteractedRef = useRef(false)
  const total = children.length
  const maxIndex = Math.max(0, total - visibleCount)

  const scrollToSlide = (index: number) => {
    const track = trackRef.current
    if (!track || total === 0) return
    const stopCount = maxIndex + 1
    const wrapped = ((index % stopCount) + stopCount) % stopCount
    const slide = track.children[wrapped] as HTMLElement | undefined
    if (!slide) return
    hasInteractedRef.current = true
    track.scrollTo({ left: slide.offsetLeft })
    setActiveIndex(wrapped)
    setStatusMessage(`Position ${wrapped + 1} sur ${stopCount}`)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateVisibleCount = () => {
      const firstSlide = track.children[0] as HTMLElement | undefined
      if (!firstSlide || firstSlide.offsetWidth <= 0) return
      const nextVisible = Math.max(
        1,
        Math.min(total, Math.round(track.clientWidth / firstSlide.offsetWidth))
      )
      setVisibleCount(nextVisible)
      const nextMax = Math.max(0, total - nextVisible)
      setActiveIndex((prev) => Math.min(prev, nextMax))
    }

    updateVisibleCount()

    let ro: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(updateVisibleCount)
      ro.observe(track)
    } else {
      window.addEventListener('resize', updateVisibleCount)
    }

    return () => {
      ro?.disconnect()
      window.removeEventListener('resize', updateVisibleCount)
    }
  }, [total])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let raf = 0
    let debounceTimer: ReturnType<typeof setTimeout> | null = null

    const computeNearest = () => {
      const scrollLeft = track.scrollLeft
      let nearest = 0
      let minDist = Infinity
      const limit = Math.max(0, total - visibleCount)
      for (let idx = 0; idx <= limit; idx++) {
        const el = track.children[idx] as HTMLElement | undefined
        if (!el) continue
        const dist = Math.abs(el.offsetLeft - scrollLeft)
        if (dist < minDist) {
          minDist = dist
          nearest = idx
        }
      }
      setActiveIndex(nearest)
      return nearest
    }

    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          computeNearest()
          raf = 0
        })
      }
      if (!('onscrollend' in window)) {
        if (debounceTimer) clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
          const idx = computeNearest()
          if (hasInteractedRef.current) {
            setStatusMessage(`Position ${idx + 1} sur ${maxIndex + 1}`)
          }
        }, 160)
      }
    }

    const onScrollEnd = () => {
      const idx = computeNearest()
      if (hasInteractedRef.current) {
        setStatusMessage(`Position ${idx + 1} sur ${maxIndex + 1}`)
      }
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    if ('onscrollend' in window) {
      track.addEventListener('scrollend', onScrollEnd)
    }

    return () => {
      track.removeEventListener('scroll', onScroll)
      if ('onscrollend' in window) {
        track.removeEventListener('scrollend', onScrollEnd)
      }
      if (debounceTimer) clearTimeout(debounceTimer)
      cancelAnimationFrame(raf)
    }
  }, [total, visibleCount, maxIndex])

  const handleTrackKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      scrollToSlide(activeIndex + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      scrollToSlide(activeIndex - 1)
    }
  }

  return (
    <div className="carousel-shell" role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={trackRef}
        className="carousel-track"
        tabIndex={0}
        role="group"
        aria-label={`Liste : ${label}`}
        onKeyDown={handleTrackKeyDown}
      >
        {children.map((child, idx) => (
          <div
            key={idx}
            className="carousel-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} sur ${total}`}
          >
            {child}
          </div>
        ))}
      </div>

      <p className="visually-hidden" role="status" aria-live="polite">
        {statusMessage}
      </p>

      {maxIndex > 0 && (
        <div className="carousel-controls-bar">
          <div className="carousel-markers" role="group" aria-label={`Navigation ${label}`}>
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className="carousel-marker-btn"
                aria-label={`Aller à la position ${idx + 1}`}
                aria-current={idx === activeIndex ? 'true' : undefined}
                onClick={() => scrollToSlide(idx)}
              />
            ))}
          </div>

          <div className="carousel-nav-group">
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={() => scrollToSlide(activeIndex - 1)}
              aria-label="Élément précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={() => scrollToSlide(activeIndex + 1)}
              aria-label="Élément suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
