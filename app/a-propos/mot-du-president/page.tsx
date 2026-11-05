'use client'

import Link from 'next/link'
import { ArrowRight, ArrowLeft, Calendar, ShieldCheck, Heart, Users } from 'lucide-react'
import { founder, org, images } from '@/lib/data'

export default function MotDuPresidentPage() {
  return (
    <>
      {/* Hero Mot du Président */}
      <section className="page-hero has-image">
        <div className="page-hero-img">
          <img src={images.hero} alt="ONG EICF - Présidence" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/a-propos">À propos d’EICF</Link>
            <span>/</span>
            <span>Mot du Président Fondateur</span>
          </div>
          <h1 className="display">
            Le mot du Président<br />
            <em>Fondateur de l’ONG EICF.</em>
          </h1>
          <p className="lead">
            « Ensemble, imaginons et construisons un avenir meilleur, fondé sur la solidarité,
            la dignité humaine et le développement durable. »
          </p>
        </div>
      </section>

      {/* Message officiel complet */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <div className="president-block">
              {/* Colonne Portrait officiel */}
              <div className="president-portrait-col">
                <div className="president-portrait-card">
                  <div className="president-img-wrap">
                    <img
                      src={founder.photo}
                      alt={`${founder.name} — ${founder.role}`}
                      className="president-img"
                    />
                    <div className="president-badge-overlay">
                      <span className="president-role-tag">{founder.role}</span>
                      <h3 className="president-name">{founder.name}</h3>
                      <p className="president-sub">{founder.institution}</p>
                      <span className="president-since">{founder.since}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne Texte Intégral */}
              <div className="president-content-col">
                <span className="badge badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '14px' }}>
                  Message institutionnel officiel
                </span>

                <h2 className="display" style={{ marginBottom: '18px' }}>
                  Construire ensemble<br />
                  <em>un avenir solidaire et durable.</em>
                </h2>

                <blockquote className="president-quote">
                  « {founder.citation} »
                </blockquote>

                <p className="president-salutations">
                  {founder.salutations.join(' ')}
                </p>

                <div className="president-text">
                  {founder.message.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                  <p className="president-conclusion" style={{ marginTop: '16px' }}>
                    <strong>{founder.conclusion}</strong>
                  </p>

                  <div className="president-signature">
                    <strong>{founder.signature.name}</strong>
                    <span>{founder.signature.title}</span>
                    <small>{founder.signature.org} · {founder.signature.date}</small>
                  </div>
                </div>

                <div className="president-actions" style={{ marginTop: '36px' }}>
                  <Link href="/a-propos" className="btn btn-secondary">
                    <ArrowLeft size={15} />
                    <span>Retour à la présentation d’EICF</span>
                  </Link>

                  <Link href="/appels-a-partenariat" className="btn btn-gold">
                    <span>Rejoindre nos partenaires</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

