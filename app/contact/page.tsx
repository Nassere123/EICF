'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Clock,
  Building2,
  ArrowRight,
} from 'lucide-react'
import { org } from '@/lib/data'
import { ContactForm } from '@/components/ContactForm'
import { ContactMap } from '@/components/ContactMap'

function ContactFormSection() {
  const searchParams = useSearchParams()
  const initialType = (searchParams.get('type') as any) || 'contact'

  return <ContactForm initialType={initialType} />
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Contact & Nous rejoindre</span>
          </div>
          <h1 className="display">
            Construisons ensemble<br />
            <em>le prochain chapitre.</em>
          </h1>
          <p className="lead">
            Une question institutionnelle, une idée de partenariat, une demande
            d’information ou une candidature spontanée ? Notre équipe vous répond.
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          <div className="detail-layout">
            {/* Formulaire multi-onglets (Contact, Partenariat, Info, Candidature) */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h2 className="h2" style={{ color: 'var(--green)' }}>
                  Envoyez-nous un message
                </h2>
              </div>

              <Suspense fallback={<div className="form-card" style={{ padding: '40px', textAlign: 'center' }}>Chargement du formulaire...</div>}>
                <ContactFormSection />
              </Suspense>
            </div>

            {/* Coordonnées, WhatsApp professionnel & Localisation */}
            <aside className="detail-aside">
              <div className="contact-cards">
                {/* WhatsApp professionnel (CDC §8) */}
                <a
                  href={`https://wa.me/${org.whatsapp}?text=Bonjour%20EICF,%20je%20souhaite%20des%20informations`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card whatsapp"
                >
                  <div className="icon-tile">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <small>WhatsApp professionnel</small>
                    <strong>Discuter en direct</strong>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block' }}>
                      Réponse rapide aux demandes urgentes
                    </span>
                  </div>
                </a>

                {/* Téléphone fixe / mobile */}
                <a href={`tel:${org.phone}`} className="contact-card">
                  <div className="icon-tile">
                    <Phone size={22} />
                  </div>
                  <div>
                    <small>Standard téléphonique</small>
                    <strong>{org.phone}</strong>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block' }}>
                      Du lundi au vendredi · 8h - 17h GMT
                    </span>
                  </div>
                </a>

                {/* Email institutionnel */}
                <a href={`mailto:${org.email}`} className="contact-card">
                  <div className="icon-tile">
                    <Mail size={22} />
                  </div>
                  <div>
                    <small>Courrier électronique</small>
                    <strong>{org.email}</strong>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block' }}>
                      Direction & Partenariats
                    </span>
                  </div>
                </a>

                {/* Siège social */}
                <div className="contact-card">
                  <div className="icon-tile">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <small>Siège social national</small>
                    <strong>{org.address}</strong>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block' }}>
                      Abidjan, Côte d’Ivoire
                    </span>
                  </div>
                </div>
              </div>

              {/* Carte Leaflet & OpenStreetMap (siège national à Abidjan) */}
              <div style={{ marginTop: '16px' }}>
                <span
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--muted)',
                    marginBottom: '8px',
                  }}
                >
                  Localisation OpenStreetMap :
                </span>
                <ContactMap />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
