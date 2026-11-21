'use client'

import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { founder, images } from '@/lib/data'

export default function MotDuPresidentPage() {
  return (
    <>
      <section className="page-hero has-image">
        <div className="page-hero-img">
          <img src={images.hero} alt="ONG EICF - Présidence" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/a-propos">L’ONG EICF</Link>
            <span>/</span>
            <span>Mot du Président Fondateur</span>
          </div>

          <span className="badge badge-gold mb-4">Tribune Présidentielle Officielle</span>

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

      <section className="section section-green">
        <div className="container">
          <div className="card" style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div style={{ border: '1px solid #d4d4d4', background: '#06352a' }}>
                  <img
                    src={founder.photo}
                    alt={`${founder.name} — ${founder.role}`}
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  <div className="p-5 bg-[#06352a] text-white">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#f2b31a] block mb-1">
                      {founder.role}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">{founder.name}</h3>
                    <p className="text-xs text-white/80 mt-1">{founder.institution}</p>
                    <span className="badge badge-gold mt-3">{founder.since}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="badge mb-4">Message institutionnel officiel</span>
                <h2 className="h2 mb-5" style={{ color: 'var(--ink)' }}>
                  Construire ensemble <em>un avenir solidaire et durable.</em>
                </h2>

                <blockquote
                  style={{
                    borderLeft: '4px solid var(--gold)',
                    background: '#f4f7f5',
                    padding: '18px 22px',
                    fontFamily: 'var(--serif)',
                    fontStyle: 'italic',
                    fontSize: '18px',
                    color: 'var(--green)',
                    marginBottom: '22px',
                  }}
                >
                  « {founder.citation} »
                </blockquote>

                <p className="font-semibold text-[#0b1813] mb-4">{founder.salutations.join(' ')}</p>

                <div className="space-y-4 text-[#1c2a24] leading-relaxed">
                  {founder.message.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                  <p className="font-bold text-[#06352a] pt-2">{founder.conclusion}</p>

                  <div style={{ borderLeft: '4px solid var(--green)', background: '#f4f7f5', padding: '18px 20px', marginTop: '20px' }}>
                    <strong className="block font-heading text-lg text-[#0b1813]">
                      {founder.signature.name}
                    </strong>
                    <span className="block text-sm font-bold text-[#06352a] mt-0.5">
                      {founder.signature.title}
                    </span>
                    <small className="block text-xs text-[#4c5a53] mt-1">
                      {founder.signature.org} · {founder.signature.date}
                    </small>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-[#d4d4d4]">
                  <Link href="/a-propos" className="btn btn-ghost">
                    <ArrowLeft size={15} />
                    <span>Retour à L’ONG EICF</span>
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
