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
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Contact & Nous rejoindre</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Écoute, Partenariat & Recrutement
          </span>

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

      {/* SECTION PRINCIPALE : FORMULAIRE + COORDONNÉES & CARTE */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Formulaire multi-onglets (Contact, Partenariat, Info, Candidature) */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                  Formulaire Direct
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mt-1">
                  Envoyez-nous un message
                </h2>
              </div>

              <Suspense
                fallback={
                  <div className="form-card text-center py-12 text-muted">
                    Chargement du formulaire...
                  </div>
                }
              >
                <ContactFormSection />
              </Suspense>
            </div>

            {/* Coordonnées, WhatsApp professionnel & Localisation */}
            <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div>
                <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                  Canaux Officiels
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mt-1 mb-6">
                  Nos coordonnées
                </h2>

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
                      <strong className="block text-textDark">Discuter en direct</strong>
                      <span className="text-xs text-muted block mt-0.5">
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
                      <strong className="block text-textDark">{org.phone}</strong>
                      <span className="text-xs text-muted block mt-0.5">
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
                      <strong className="block text-textDark">{org.email}</strong>
                      <span className="text-xs text-muted block mt-0.5">
                        Direction Exécutive & Partenariats
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
                      <strong className="block text-textDark">{org.address}</strong>
                      <span className="text-xs text-muted block mt-0.5">
                        Abidjan, Côte d’Ivoire (+ 4 bases régionales : Katiola, Bouna, Korhogo, Bondoukou)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Leaflet & OpenStreetMap (siège national à Abidjan) */}
              <div className="bg-white p-5 rounded-3xl border border-black/5 shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-primary inline-flex items-center gap-1.5">
                    <Building2 size={14} className="text-secondary" />
                    Localisation OpenStreetMap (Siège)
                  </span>
                  <Link
                    href="/cartographie"
                    className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Carte des projets</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
                <ContactMap />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
