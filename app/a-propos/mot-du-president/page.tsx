'use client'

import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { founder, images } from '@/lib/data'

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

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Tribune Présidentielle Officielle
          </span>

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

      {/* Message officiel complet (Style Charity Organization) */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-black/5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Colonne Portrait officiel */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 relative">
              <div className="hidden sm:block absolute -inset-3 bg-primary/10 rounded-3xl -rotate-2 -z-0" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-primary">
                <img
                  src={founder.photo}
                  alt={`${founder.name} — ${founder.role}`}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent text-white">
                  <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-secondary mb-1">
                    {founder.role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    {founder.name}
                  </h3>
                  <p className="text-xs text-white/80 mt-1">{founder.institution}</p>
                  <span className="inline-block mt-2 text-[11px] font-semibold px-3 py-0.5 rounded-full bg-white/15 text-accent">
                    {founder.since}
                  </span>
                </div>
              </div>
            </div>

            {/* Colonne Texte Intégral */}
            <div className="lg:col-span-7">
              <span className="inline-block bg-secondary/25 text-textDark px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
                Message institutionnel officiel
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-textDark mb-6">
                Construire ensemble{' '}
                <span className="italic text-primary">un avenir solidaire et durable.</span>
              </h2>

              <blockquote className="font-heading italic text-lg sm:text-xl text-primary border-l-4 border-secondary bg-background p-5 sm:p-6 rounded-r-2xl mb-6 leading-relaxed">
                « {founder.citation} »
              </blockquote>

              <p className="font-semibold text-textDark mb-4 text-base">
                {founder.salutations.join(' ')}
              </p>

              <div className="space-y-4 text-text text-base leading-relaxed">
                {founder.message.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                <p className="font-bold text-primary pt-3 text-base sm:text-lg">
                  {founder.conclusion}
                </p>

                <div className="bg-background border-l-4 border-primary p-5 rounded-r-2xl mt-6">
                  <strong className="block font-heading text-lg text-textDark">
                    {founder.signature.name}
                  </strong>
                  <span className="block text-sm font-bold text-primary mt-0.5">
                    {founder.signature.title}
                  </span>
                  <small className="block text-xs text-muted mt-1">
                    {founder.signature.org} · {founder.signature.date}
                  </small>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-10 pt-6 border-t border-black/5">
                <Link
                  href="/a-propos"
                  className="px-6 py-3.5 rounded-full bg-background border border-black/10 hover:border-primary text-textDark hover:text-primary font-bold text-sm transition-colors inline-flex items-center gap-2"
                >
                  <ArrowLeft size={15} />
                  <span>Retour à la présentation d’EICF</span>
                </Link>

                <Link
                  href="/appels-a-partenariat"
                  className="px-7 py-3.5 rounded-full bg-secondary hover:bg-secondaryHover text-textDark font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Rejoindre nos partenaires</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
