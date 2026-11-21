'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Building2,
  ShieldCheck,
} from 'lucide-react'
import { org } from '@/lib/data'
import { ContactForm, type ContactInitialType } from '@/components/ContactForm'
import { ContactMap } from '@/components/ContactMap'

function ContactFormSection() {
  const searchParams = useSearchParams()
  const initialType = (searchParams.get('type') as ContactInitialType) || 'contact'

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
            <span>Contact &amp; Nous rejoindre</span>
          </div>

          <span className="badge badge-gold mb-4">
            Partenariat, Soumission de Projet, Volontariat, Recrutement &amp; Contact
          </span>

          <h1 className="display">
            Construisons ensemble<br />
            <em>le prochain chapitre.</em>
          </h1>

          <p className="lead">
            Devenir partenaire, soumettre un projet, devenir volontaire, postuler à un
            recrutement ou contacter la Direction Exécutive : notre équipe vous répond sous 48 heures ouvrées.
          </p>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="mb-5">
                <span className="badge badge-gold mb-2">Guichet Unique EICF</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Transmettre une demande à la Direction Exécutive
                </h2>
              </div>

              <Suspense fallback={<ContactForm initialType="contact" />}>
                <ContactFormSection />
              </Suspense>
            </div>

            <aside className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
              <div>
                <span className="badge badge-gold mb-2">Canaux Officiels</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-5">
                  Nos coordonnées
                </h2>

                <div className="contact-cards">
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
                      <strong className="block">Discuter en direct</strong>
                      <span className="text-xs text-[#4c5a53] block mt-0.5">
                        Ligne directe Direction &amp; Partenariats
                      </span>
                    </div>
                  </a>

                  <div className="contact-card">
                    <div className="icon-tile">
                      <Phone size={22} />
                    </div>
                    <div>
                      <small>Standards téléphoniques (Lun – Ven · 8h – 17h GMT)</small>
                      <div className="grid gap-0.5 mt-1">
                        {org.phones.map((num) => (
                          <a
                            key={num}
                            href={`tel:${num.replace(/\s+/g, '')}`}
                            className="text-sm font-bold text-[#0b1813] hover:text-[#06352a]"
                          >
                            {num}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="icon-tile">
                      <Mail size={22} />
                    </div>
                    <div>
                      <small>Courriers électroniques</small>
                      <div className="grid gap-0.5 mt-1">
                        <a
                          href={`mailto:${org.email}`}
                          className="text-sm font-bold text-[#0b1813] hover:text-[#06352a]"
                        >
                          {org.email}
                        </a>
                        <a
                          href={`mailto:${org.secondaryEmail}`}
                          className="text-sm font-bold text-[#0b1813] hover:text-[#06352a]"
                        >
                          {org.secondaryEmail}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="icon-tile">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <small>Siège social national (Depuis le 1er fév. 2008)</small>
                      <strong className="block">
                        {org.address} · {org.postalAddress}
                      </strong>
                      <span className="text-xs text-[#4c5a53] block mt-0.5">
                        + 4 bases opérationnelles : Katiola, Bouna, Korhogo, Bondoukou
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: '18px' }}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#06352a] inline-flex items-center gap-1.5">
                    <Building2 size={14} />
                    Siège social — Cocody Angré, Abidjan
                  </span>
                  <Link href="/cartographie" className="text-link">
                    <span>Carte des régions</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
                <ContactMap />
              </div>

              <div className="card flex items-start gap-2.5 text-xs text-[#4c5a53]" style={{ padding: '16px' }}>
                <ShieldCheck size={16} className="text-[#06352a] flex-shrink-0 mt-0.5" />
                <span>
                  Vos données sont protégées conformément à la Loi n° 2013-450 / ARTCI. Consultez nos{' '}
                  <Link href="/mentions-legales" className="text-[#06352a] font-bold underline">
                    Mentions légales &amp; Confidentialité
                  </Link>.
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
