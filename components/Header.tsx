'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Search, ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { org, navigation } from '@/lib/data'

interface HeaderProps {
  onOpenSearch?: () => void
}

export function Header({ onOpenSearch }: HeaderProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // En-tête qui se rétracte en descendant et réapparaît en remontant
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > 320 && y > last + 4)
      if (y < last - 4) setHidden(false)
      last = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const isActive = (match?: string[]) =>
    !!match?.some((m) => (m === '/' ? pathname === '/' : pathname === m || pathname.startsWith(m + '/')))

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'is-scrolled' : ''} ${hidden && !mobileOpen ? 'is-hidden' : ''}`}
      >
        <div className="header-bar">
          <Link href="/" className="brand" aria-label="EICF — Accueil">
            <img src={org.logo} alt="" />
            <span className="brand-text">
              <strong>{org.name}</strong>
              <small>Imaginons &amp; construisons le futur</small>
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="nav" aria-label="Navigation principale">
            {navigation.map((item) => (
              <div key={item.label} className="nav-item">
                <Link
                  href={item.href}
                  prefetch={true}
                  className={`nav-link ${isActive(item.match) ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown size={14} />}
                </Link>

                {item.children && (
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} prefetch={true}>
                        <span>
                          <strong>{child.label}</strong>
                          {child.desc && <small>{child.desc}</small>}
                        </span>
                        <ArrowUpRight size={15} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={onOpenSearch}
              aria-label="Rechercher sur le site"
              title="Recherche (Ctrl+K)"
            >
              <Search size={17} />
            </button>

            <Link href="/appels-a-partenariat" className="btn btn-gold btn-sm header-cta-desktop">
              <span>Devenir partenaire</span>
              <ArrowUpRight size={15} />
            </Link>

            <button
              type="button"
              className="icon-btn menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      <div className={`mobile-nav ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-nav-inner">
          {navigation.map((item, i) =>
            item.children ? (
              <details key={item.label} style={{ ['--i' as string]: i }}>
                <summary>
                  <span>{item.label}</span>
                  <ChevronDown size={20} />
                </summary>
                <div>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="mobile-link"
                style={{ ['--i' as string]: i }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}

          <Link href="/appels-a-partenariat" className="btn btn-gold" onClick={() => setMobileOpen(false)}>
            Devenir partenaire <ArrowUpRight size={16} />
          </Link>

          <div className="mobile-contact">
            <a href={`tel:${org.phone}`}>
              <Phone size={15} /> {org.phone}
            </a>
            <a href={`https://wa.me/${org.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
