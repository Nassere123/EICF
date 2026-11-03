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
import { org, domains } from '@/lib/data'

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
            </Link>
            <p>
              <strong>{org.fullName} (EICF)</strong> est une organisation non
              gouvernementale ivoirienne dédiée au développement communautaire,
              à l’autonomisation et à la paix.
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

          {/* Colonne 2 : Navigation institutionnelle */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <div className="footer-links">
              <Link href="/">Accueil</Link>
              <Link href="/a-propos">À propos d’EICF</Link>
              <Link href="/a-propos#gouvernance">Gouvernance & organigramme</Link>
              <Link href="/cartographie">Cartographie des interventions</Link>
              <Link href="/impact">EICF Impact — nos résultats</Link>
              <Link href="/partenaires">Nos partenaires</Link>
              <Link href="/appels-a-partenariat">Appels à partenariat</Link>
              <Link href="/contact">Contact & nous rejoindre</Link>
            </div>
          </div>

          {/* Colonne 3 : Domaines clés */}
          <div>
            <h4 className="footer-title">Domaines clés</h4>
            <div className="footer-links">
              {domains.slice(0, 6).map((dom) => (
                <Link
                  key={dom.slug}
                  href={`/domaines-intervention/${dom.slug}`}
                >
                  {dom.title}
                </Link>
              ))}
              <Link
                href="/domaines-intervention"
                style={{ color: 'var(--gold-2)', fontWeight: 700 }}
              >
                Voir les 11 domaines &rarr;
              </Link>
            </div>
          </div>

          {/* Colonne 4 : Coordonnées & Newsletter */}
          <div>
            <h4 className="footer-title">Nous contacter</h4>
            <div className="footer-contact">
              <div>
                <MapPin size={16} />
                <span>{org.address}</span>
              </div>
              <div>
                <Phone size={16} />
                <a href={`tel:${org.phone}`}>{org.phone}</a>
              </div>
              <div>
                <Mail size={16} />
                <a href={`mailto:${org.email}`}>{org.email}</a>
              </div>
            </div>

            <h4 className="footer-title" style={{ marginTop: '26px' }}>
              Lettre d’information
            </h4>
            <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.6)' }}>
              Recevez trimestriellement nos résultats et actualités de terrain.
            </p>

            {subscribed ? (
              <div
                style={{
                  marginTop: '14px',
                  padding: '10px 14px',
                  borderRadius: '999px',
                  background: 'var(--green-3)',
                  color: '#fff',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Check size={16} />
                <span>Merci pour votre inscription !</span>
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
            &copy; {new Date().getFullYear()} {org.fullName} (EICF). Tous droits
            réservés.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/a-propos#engagements">Transparence & Redevabilité</Link>
            <Link href="/mediatheque">Rapports annuels</Link>
            <Link href="/contact">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
