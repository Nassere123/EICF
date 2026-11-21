'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Globe,
  Check,
} from 'lucide-react'
import { org } from '@/lib/data'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setTimeout(() => {
      setEmail('')
      setSubscribed(false)
    }, 4000)
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Colonne 1 : Marque & Mission */}
          <div className="footer-brand">
            <Link href="/" className="brand">
              <img src={org.logo} alt="Logo EICF" />
              <span className="brand-text">
                <strong>{org.name}</strong>
                <small>Fondée le 1er février 2008 · Côte d’Ivoire</small>
              </span>
            </Link>
            <p>
              <strong>{org.fullName} (EICF)</strong> — 18 ans d’engagement et de
              solidarité pour l’éducation, la nutrition, l’eau-assainissement,
              l’autonomisation des femmes et des jeunes et la cohésion sociale.
            </p>

            <div className="socials">
              <a
                href={`https://wa.me/${org.whatsapp}?text=Bonjour%20EICF`}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp EICF"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={org.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Facebook"
              >
                <Globe size={18} />
              </a>
              <a
                href={org.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Colonne 2 : L'ONG & Nos actions */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <div className="footer-links">
              <Link href="/">Accueil</Link>
              <Link href="/a-propos">L’ONG &amp; Gouvernance</Link>
              <Link href="/capacites-institutionnelles">Capacités institutionnelles</Link>
              <Link href="/projets-actualites">Projets &amp; Références</Link>
              <Link href="/domaines-intervention">11 Domaines d’intervention</Link>
              <Link href="/cartographie">Cartographie &amp; Impact</Link>
            </div>
          </div>

          {/* Colonne 3 : Ressources & Partenaires */}
          <div>
            <h4 className="footer-title">Ressources &amp; Alliances</h4>
            <div className="footer-links">
              <Link href="/actualites">Actualités de terrain</Link>
              <Link href="/temoignages">Témoignages documentés</Link>
              <Link href="/mediatheque">Centre documentaire</Link>
              <Link href="/partenaires">Bailleurs &amp; Partenaires</Link>
              <Link href="/appels-a-partenariat">Appels à partenariat</Link>
              <Link href="/contact">Nous contacter</Link>
            </div>
          </div>

          {/* Colonne 4 : Coordonnées complètes brochure & Newsletter */}
          <div>
            <h4 className="footer-title">Coordonnées officielles</h4>
            <div className="footer-contact">
              <div>
                <MapPin size={16} />
                <span>
                  {org.address} · {org.postalAddress}
                </span>
              </div>
              <div>
                <Phone size={16} />
                <div style={{ display: 'grid', gap: '2px', fontSize: '13px' }}>
                  {org.phones.map((num) => (
                    <a key={num} href={`tel:${num.replace(/\s+/g, '')}`}>
                      {num}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <Mail size={16} />
                <div style={{ display: 'grid', gap: '2px' }}>
                  <a href={`mailto:${org.email}`}>{org.email}</a>
                  <a href={`mailto:${org.secondaryEmail}`}>{org.secondaryEmail}</a>
                </div>
              </div>
            </div>

            <h4 className="footer-title" style={{ marginTop: '24px' }}>
              Lettre d’information
            </h4>

            {subscribed ? (
              <div
                style={{
                  marginTop: '12px',
                  padding: '10px 14px',
                  background: 'var(--green-3)',
                  color: '#fff',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Check size={16} />
                <span>Inscription confirmée !</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@organisation.org"
                  required
                />
                <button type="submit" aria-label="S’inscrire à la newsletter">
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bas de page */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {org.fullName} (EICF) — Fondée le 1er février 2008. Tous droits réservés.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/capacites-institutionnelles">Capacités institutionnelles</Link>
            <Link href="/mediatheque">Centre documentaire</Link>
            <Link href="/mentions-legales">Mentions légales &amp; Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
