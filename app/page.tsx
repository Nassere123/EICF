'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Sparkles,
  Users,
  GraduationCap,
  Droplets,
  HeartPulse,
  Baby,
  Briefcase,
  Scale,
  Handshake,
  Sprout,
  LifeBuoy,
  HandHeart,
  MapPin,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Bot,
} from 'lucide-react'
import {
  org,
  images,
  domains,
  projects,
  news,
  partners,
  globalStats,
  history,
  formatNumber,
  formatDate,
  statusLabel,
  impactSentence,
  founder,
} from '@/lib/data'
import { InteractiveMap } from '@/components/InteractiveMap'
import { RotatingWords, CountUp } from '@/components/Motion'

export default function HomePage() {
  const [showFullPresidentMessage, setShowFullPresidentMessage] = useState(false)
  const [showAllDomains, setShowAllDomains] = useState(false)

  const featuredProjects = projects.filter((p) => p.slug === 'pasea' || p.slug === 'swedd' || p.status === 'en-cours').slice(0, 3)
  const recentNews = news.slice(0, 3)
  const displayedDomains = showAllDomains ? domains : domains.slice(0, 6)

  const domainIcons: Record<string, React.ReactNode> = {
    Users: <Users size={24} />,
    GraduationCap: <GraduationCap size={24} />,
    Baby: <Baby size={24} />,
    HandHeart: <HandHeart size={24} />,
    Briefcase: <Briefcase size={24} />,
    HeartPulse: <HeartPulse size={24} />,
    Droplets: <Droplets size={24} />,
    Scale: <Scale size={24} />,
    Handshake: <Handshake size={24} />,
    Sprout: <Sprout size={24} />,
    LifeBuoy: <LifeBuoy size={24} />,
  }

  const featuredLogos = partners.filter((p) => p.logo)

  return (
    <>
      {/* 1. HERO SECTION — Patron Charity Organization sur fond crème texturé & vert/or EICF */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs sm:text-sm mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse flex-shrink-0" />
                <span>
                  <CountUp value={globalStats.beneficiaires} suffix="+" /> bénéficiaires accompagnés dans {globalStats.regions} régions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-textDark mb-6 leading-tight">
                Agir aujourd’hui<br />
                <span className="text-primary italic font-heading">
                  <RotatingWords
                    words={[
                      'pour un avenir durable.',
                      'pour l’accès à l’eau potable.',
                      'pour l’éducation des filles.',
                      'pour la résilience locale.',
                      'avec les communautés.',
                    ]}
                  />
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-text mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                L’ONG <strong className="text-primary">EICF</strong> agit aux côtés des communautés pour
                l’éducation, la santé, l’eau-assainissement, l’autonomisation des femmes et des jeunes,
                et la cohésion sociale en Côte d’Ivoire depuis 2008.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Link
                  href="/projets-actualites"
                  className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full text-base sm:text-lg transition-all shadow-lg shadow-secondary/25 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                >
                  <span>Découvrir nos projets</span>
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/appels-a-partenariat"
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-black/10 hover:border-primary text-textDark hover:text-primary font-semibold rounded-full text-base sm:text-lg transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Devenir partenaire</span>
                </Link>
              </div>

              {/* Compteurs d'impact compacts intégrés */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-black/10 text-left">
                <div>
                  <div className="text-2xl font-heading font-bold text-primary">
                    <CountUp value={globalStats.beneficiaires} suffix="+" />
                  </div>
                  <p className="text-xs text-muted mt-0.5">Bénéficiaires directs</p>
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-primary">
                    <CountUp value={globalStats.regions} suffix=" régions" />
                  </div>
                  <p className="text-xs text-muted mt-0.5">Présence nationale</p>
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-primary">
                    <CountUp value={globalStats.communautes} suffix="+" />
                  </div>
                  <p className="text-xs text-muted mt-0.5">Comités mobilisés</p>
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-primary">
                    <CountUp value={globalStats.projets} suffix=" projets" />
                  </div>
                  <p className="text-xs text-muted mt-0.5">Terrain & conception</p>
                </div>
              </div>
            </div>

            {/* Carte photo inclinée du template Charity Organization */}
            <div className="relative mt-6 lg:mt-0">
              <div className="absolute -inset-4 bg-accent rounded-full blur-3xl -z-10 opacity-80" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl lg:rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <img
                  src={images.hero}
                  alt="Enfants et communautés accompagnés par l’ONG EICF en Côte d’Ivoire"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 sm:p-8">
                  <p className="text-white font-heading italic text-lg sm:text-xl leading-snug">
                    « Ensemble, imaginons et construisons un avenir fondé sur la dignité et la solidarité. »
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TROIS AXES PHARES — Cartes icônes centrées (style Charity Organization) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/domaines-intervention/eau-hygiene-assainissement"
              data-reveal
              className="p-8 rounded-2xl bg-background border border-black/5 hover:shadow-xl transition-all text-center group block"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Droplets size={30} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-textDark mb-3">Eau & Assainissement</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Ouvrages durables, latrines familiales (PASEA — 788 latrines à Katiola) et hygiène en milieu rural.
              </p>
            </Link>

            <Link
              href="/domaines-intervention/education-formation-alphabetisation"
              data-reveal
              className="p-8 rounded-2xl bg-background border border-black/5 hover:shadow-xl transition-all text-center group block"
            >
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-textDark transition-colors">
                <GraduationCap size={30} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-textDark mb-3">Éducation & Jeunes Filles</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Classes passerelles et espaces sûrs (SWEDD) pour le maintien scolaire et l’émancipation des adolescentes.
              </p>
            </Link>

            <Link
              href="/domaines-intervention/paix-cohesion-sociale"
              data-reveal
              className="p-8 rounded-2xl bg-background border border-black/5 hover:shadow-xl transition-all text-center group block"
            >
              <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Scale size={30} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-textDark mb-3">Paix & Cohésion Sociale</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Dialogues intercommunautaires, médiation locale et prévention des conflits dans les zones frontalières.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. MOT DU PRÉSIDENT FONDATEUR — Patron « How It Started » avec cadre vert incliné */}
      <section className="py-24 bg-background" id="mot-du-president">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Portrait officiel avec cadre pivoté */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 relative">
              <div className="hidden sm:block absolute -inset-4 bg-primary/10 rounded-3xl -rotate-2 -z-0" />
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

            {/* Texte institutionnel */}
            <div className="lg:col-span-7">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Mot du Président Fondateur
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-textDark mt-2 mb-6">
                Construire ensemble <span className="italic text-primary">un avenir solidaire et durable</span>
              </h2>

              <blockquote className="font-heading italic text-lg sm:text-xl text-primary border-l-4 border-secondary bg-white p-5 sm:p-6 rounded-r-2xl shadow-sm mb-6 leading-relaxed">
                « {founder.citation} »
              </blockquote>

              <p className="font-semibold text-textDark mb-4 text-sm sm:text-base">
                {founder.salutations.join(' ')}
              </p>

              <div className="space-y-4 text-text text-base leading-relaxed">
                <p>{founder.message[0]}</p>
                <p>{founder.message[1]}</p>

                {showFullPresidentMessage && (
                  <div className="space-y-4 pt-2 anim-up">
                    {founder.message.slice(2).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                    <p className="font-semibold text-primary pt-2">{founder.conclusion}</p>
                    <div className="bg-white border-l-4 border-primary p-5 rounded-r-xl shadow-sm">
                      <div className="font-heading font-bold text-textDark text-lg">
                        {founder.signature.name}
                      </div>
                      <div className="text-sm font-semibold text-primary">{founder.signature.title}</div>
                      <div className="text-xs text-muted mt-0.5">
                        {founder.signature.org} · {founder.signature.date}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-8 my-8 py-6 border-y border-black/10">
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-primary">18+</div>
                  <p className="text-xs sm:text-sm text-muted mt-1">Années d’action (depuis le 1er fév. 2008)</p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-primary">11</div>
                  <p className="text-xs sm:text-sm text-muted mt-1">Régions de Côte d’Ivoire</p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-primary">100+</div>
                  <p className="text-xs sm:text-sm text-muted mt-1">Villages & comités mobilisés</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setShowFullPresidentMessage(!showFullPresidentMessage)}
                  aria-expanded={showFullPresidentMessage}
                  className="px-7 py-3.5 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>{showFullPresidentMessage ? 'Réduire la lecture' : 'Lire le message complet'}</span>
                  {showFullPresidentMessage ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
                </button>

                <Link
                  href="/a-propos/mot-du-president"
                  className="px-7 py-3.5 bg-white border border-black/10 hover:border-primary text-textDark hover:text-primary font-semibold rounded-full transition-all inline-flex items-center gap-2"
                >
                  <span>Page dédiée & gouvernance</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 bis. PARCOURS HISTORIQUE & CRÉDIBILITÉ INSTITUTIONNELLE (18 ANS D'ACTION CONTINUE) */}
      <section className="py-20 bg-white border-y border-black/5" id="histoire">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Expérience & Ancrage Réel
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2">
                18 ans d’action continue{' '}
                <span className="italic text-primary">(2008 – 2026)</span>
              </h2>
              <p className="text-muted text-base max-w-2xl mt-2">
                Créée le 1er février 2008, l’ONG EICF a bâti au fil des années une expérience diversifiée reconnue par les bailleurs multilatéraux (Banque mondiale, PNUD, GIZ, UNICEF) et l’État de Côte d’Ivoire.
              </p>
            </div>
            <Link
              href="/a-propos#histoire"
              className="inline-flex items-center gap-2 text-primary hover:text-primaryHover font-semibold text-sm transition-colors group"
            >
              <span>Consulter l’historique détaillé</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {history.slice(0, 6).map((h) => (
              <div
                key={h.year}
                data-reveal
                className="bg-background rounded-2xl p-6 border border-black/5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-2xl font-heading font-bold text-primary">{h.year}</span>
                    {h.partner && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-secondary/20 text-textDark">
                        {h.partner}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-textDark text-base mb-2">{h.title}</h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">{h.text}</p>
                </div>
                {h.region && (
                  <div className="mt-4 pt-3 border-t border-black/5 text-xs text-muted font-medium flex items-center gap-1.5">
                    <span>📍</span>
                    <span>{h.region}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOS PROJETS & 11 DOMAINES — Patron « Where We Make a Difference » */}
      <section className="py-24 bg-white" id="projets">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Nos Projets Phares
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2 mb-4">
              Là où nous faisons <span className="italic text-primary">la différence</span>
            </h2>
            <p className="text-center text-lg text-muted max-w-2xl mx-auto">
              Des interventions concrètes sur le terrain, co-construites avec les communautés, l’État et nos partenaires techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((p) => (
              <div
                key={p.slug}
                data-reveal
                className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-black/5 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[11px] font-bold text-primary uppercase tracking-wider shadow-sm">
                    {statusLabel[p.status]}
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-primary/80 mb-2 inline-flex items-center gap-1.5">
                    <MapPin size={13} /> {p.zone}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-2">{p.name}</h3>
                  <p className="text-xs font-semibold text-primary mb-3">{p.fullName}</p>
                  <p className="text-muted text-sm mb-6 leading-relaxed flex-1">{p.summary}</p>
                  <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-textDark">
                      {formatNumber(p.beneficiaires)} {p.beneficiairesLabel}
                    </span>
                    <Link
                      href={`/projets-actualites/${p.slug}`}
                      className="text-primary font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                    >
                      <span>Voir la fiche</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projets-actualites"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <span>Voir tous nos projets (en cours, achevés, en conception)</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 11 Domaines d'intervention */}
          <div className="mt-20 pt-16 border-t border-black/10" id="domaines">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                  11 Domaines d’intervention
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mt-1">
                  Une approche intégrée au service des territoires
                </h3>
              </div>
              <Link
                href="/domaines-intervention"
                className="text-primary font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                <span>Explorer les 11 fiches domaines</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayedDomains.map((dom) => (
                <Link
                  key={dom.slug}
                  href={`/domaines-intervention/${dom.slug}`}
                  className="p-6 rounded-2xl bg-background border border-black/5 hover:border-primary/30 hover:shadow-lg transition-all group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {domainIcons[dom.icon] ?? <Users size={22} />}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-secondary tracking-wider uppercase">
                      Domaine {dom.num}
                    </span>
                    <h4 className="font-heading font-bold text-lg text-textDark group-hover:text-primary transition-colors mt-0.5 leading-snug">
                      {dom.title}
                    </h4>
                    <p className="text-xs text-muted mt-1.5 line-clamp-2 leading-relaxed">{dom.short}</p>
                  </div>
                </Link>
              ))}
            </div>

            {domains.length > 6 && (
              <div className="text-center mt-8">
                <button
                  type="button"
                  onClick={() => setShowAllDomains(!showAllDomains)}
                  className="px-6 py-2.5 rounded-full bg-background border border-black/10 hover:border-primary text-sm font-semibold text-textDark hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <span>{showAllDomains ? 'Afficher moins de domaines' : `Afficher les ${domains.length} domaines`}</span>
                  {showAllDomains ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. COMMUNAUTÉS & CARTOGRAPHIE — Patron « Communities We Serve » */}
      <section className="py-24 bg-primaryDark text-white relative overflow-hidden" id="cartographie">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(226,178,58,0.28), transparent 45%), radial-gradient(circle at 80% 80%, rgba(18,119,90,0.35), transparent 50%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Ancrage Territorial
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-2 mb-6">
                Les communautés au cœur <span className="italic text-secondary">de notre action</span>
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
                Nous travaillons main dans la main avec les chefs de villages, les groupements de femmes
                et les jeunes pour bâtir des solutions durables dans 11 régions de Côte d’Ivoire.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-secondary">
                    <MapPin size={20} />
                  </div>
                  <span className="text-base sm:text-lg font-medium">
                    Hambol (Katiola) — 10 villages · 788 latrines familiales PASEA
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-secondary">
                    <MapPin size={20} />
                  </div>
                  <span className="text-base sm:text-lg font-medium">
                    Bounkani & Gontougo — 74 espaces sûrs SWEDD pour adolescentes
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-secondary">
                    <MapPin size={20} />
                  </div>
                  <span className="text-base sm:text-lg font-medium">
                    Tchologo, Poro & Tonkpi — Médiation & cohésion sociale (COHÉSION+)
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-secondary">
                    <MapPin size={20} />
                  </div>
                  <span className="text-base sm:text-lg font-medium">
                    Gbêkê & Agnéby-Tiassa — Emploi des jeunes & insertion PEJEDEC
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/cartographie"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-lg"
                >
                  <span>Ouvrir la cartographie plein écran</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Collage 2x2 décalé avec les photos réelles WhatsApp de terrain */}
            <div className="grid grid-cols-2 gap-4 pb-8">
              <img
                src={images.assembleeVillage}
                alt="Assemblée villageoise participative sous l’arbre à palabres"
                className="rounded-2xl shadow-xl w-full h-44 sm:h-52 object-cover"
              />
              <img
                src={images.dialoguePaix}
                alt="Dialogue communautaire pour la paix et la cohésion sociale"
                className="rounded-2xl shadow-xl w-full h-44 sm:h-52 object-cover translate-y-6 sm:translate-y-8"
              />
              <img
                src={images.pejedecJeunes}
                alt="Jeunes bénéficiaires du programme PEJEDEC"
                className="rounded-2xl shadow-xl w-full h-44 sm:h-52 object-cover"
              />
              <img
                src={images.missionPartenaires}
                alt="Mission conjointe de supervision sur le terrain avec les bailleurs"
                className="rounded-2xl shadow-xl w-full h-44 sm:h-52 object-cover translate-y-6 sm:translate-y-8"
              />
            </div>
          </div>

          {/* Carte Leaflet OSM interactive conservée */}
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white text-textDark border-4 border-white/15">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* 6. NOTRE MÉTHODE D'IMPACT & SYNTHÈSE IA — Patron « Our Path to Impact » */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Comment Nous Agissons
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2">
              Notre démarche vers <span className="italic text-primary">l’impact durable</span>
            </h2>
          </div>

          <div className="relative mb-16">
            <div className="hidden md:block absolute top-14 left-0 w-full h-0.5 bg-black/10 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-white p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-heading font-bold mb-6 shadow-lg border-4 border-white">
                  1
                </div>
                <h3 className="text-xl font-heading font-bold text-textDark mb-2">Écouter</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Diagnostic participatif au plus près des villages, femmes et jeunes leaders.
                </p>
              </div>

              <div className="bg-white p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-heading font-bold mb-6 shadow-md">
                  2
                </div>
                <h3 className="text-xl font-heading font-bold text-textDark mb-2">Co-concevoir</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Plans d’action communautaires avec objectifs chiffrés et gouvernance locale.
                </p>
              </div>

              <div className="bg-white p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-heading font-bold mb-6 shadow-md">
                  3
                </div>
                <h3 className="text-xl font-heading font-bold text-textDark mb-2">Déployer</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Réalisation transparente sur le terrain avec nos équipes et partenaires techniques.
                </p>
              </div>

              <div className="bg-white p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-heading font-bold mb-6 shadow-md">
                  4
                </div>
                <h3 className="text-xl font-heading font-bold text-textDark mb-2">Pérenniser</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Formation de comités locaux de gestion et suivi d’impact à 12 et 24 mois.
                </p>
              </div>
            </div>
          </div>

          {/* Synthèse IA & KPI animés */}
          <div className="rounded-3xl bg-primary text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/15">
              <div className="flex items-start gap-4 max-w-3xl">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-textDark flex items-center justify-center flex-shrink-0">
                  <Bot size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-secondary inline-flex items-center gap-1.5">
                    <Sparkles size={13} /> Synthèse consolidée EICF Impact
                  </span>
                  <p className="text-white/95 text-base sm:text-lg font-medium mt-1.5 leading-relaxed">
                    {impactSentence}
                  </p>
                </div>
              </div>
              <Link
                href="/impact"
                className="px-6 py-3 bg-white text-primary font-bold rounded-full hover:bg-accent transition-colors inline-flex items-center gap-2 self-start lg:self-center flex-shrink-0 text-sm"
              >
                <span>Tableau de bord KPI</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-secondary">
                  <CountUp value={globalStats.beneficiairesDirects} suffix="+" />
                </div>
                <p className="text-xs sm:text-sm text-white/75 mt-1">Bénéficiaires directs certifiés</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-secondary">
                  <CountUp value={globalStats.femmesAGR} suffix=" femmes" />
                </div>
                <p className="text-xs sm:text-sm text-white/75 mt-1">Bénéficiaires d’AGR & autonomisation</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-secondary">
                  <CountUp value={788} suffix=" latrines" />
                </div>
                <p className="text-xs sm:text-sm text-white/75 mt-1">Ouvrages PASEA réalisés (10 villages)</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-secondary">
                  <CountUp value={1850} suffix=" filles" />
                </div>
                <p className="text-xs sm:text-sm text-white/75 mt-1">Accompagnées en espaces sûrs SWEDD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. S'ENGAGER AUX CÔTÉS D'EICF — Patron « Your Gift Changes Lives » (3 cartes dont centrale élevée) */}
      <section className="py-24 bg-accent/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Rejoindre la Dynamique
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2 mb-4">
              Votre partenariat change des vies
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Choisissez la forme d’engagement adaptée à votre institution, entreprise ou organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Formule 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-black/5 text-center flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-textDark mb-2">Appui Technique & RSE</h3>
              <div className="text-3xl font-heading font-bold text-primary my-4">Entreprises</div>
              <p className="text-muted text-sm mb-8 leading-relaxed flex-1">
                Soutien matériel, transfert de compétences, sponsoring d’écoles rurales ou dotation en équipements hydrauliques.
              </p>
              <Link
                href="/contact?type=rse"
                className="block w-full py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                Proposer un appui RSE
              </Link>
            </div>

            {/* Formule 2 (Mise en avant centrale) */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-secondary text-center md:-translate-y-4 relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-textDark px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase">
                Prioritaire
              </div>
              <h3 className="text-2xl font-heading font-bold text-textDark mb-2">Partenaire Projet</h3>
              <div className="text-3xl font-heading font-bold text-primary my-4">Bailleurs & ONG</div>
              <p className="text-muted text-sm mb-8 leading-relaxed flex-1">
                Cofinancement et mise en œuvre de programmes structurants (PASEA, SWEDD, classes passerelles, cohésion sociale).
              </p>
              <Link
                href="/appels-a-partenariat"
                className="block w-full py-3.5 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-colors shadow-lg shadow-secondary/20"
              >
                Voir les projets à financer
              </Link>
            </div>

            {/* Formule 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-black/5 text-center flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-textDark mb-2">Bénévolat & Expertise</h3>
              <div className="text-3xl font-heading font-bold text-primary my-4">Talents</div>
              <p className="text-muted text-sm mb-8 leading-relaxed flex-1">
                Rejoignez nos bases opérationnelles de Katiola, Bouna, Korhogo ou Abidjan sur nos missions de terrain.
              </p>
              <Link
                href="/contact?type=benevole"
                className="block w-full py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                Devenir volontaire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ACTUALITÉS DE TERRAIN & PARTENAIRES — Patron « blog.html » + « Trusted Partners » */}
      <section className="py-24 bg-white" id="actualites">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Récits de Terrain
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-textDark mt-2">
                Dernières actualités <span className="italic text-primary">de nos équipes</span>
              </h2>
            </div>
            <Link
              href="/actualites"
              className="text-primary font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              <span>Toutes les actualités (8 catégories)</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((n) => (
              <article
                key={n.slug}
                data-reveal
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group border border-black/5 flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {n.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <Calendar size={14} />
                    <span>{formatDate(n.date)}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-textDark mb-3 group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/actualites/${n.slug}`}>{n.title}</Link>
                  </h3>
                  <p className="text-muted text-sm mb-5 line-clamp-3 flex-1 leading-relaxed">
                    {n.excerpt}
                  </p>
                  <Link
                    href={`/actualites/${n.slug}`}
                    className="text-primary font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                  >
                    <span>Lire l’article complet</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau Partenaires (Trusted by Partners) */}
      <section className="py-16 bg-background border-t border-black/5" id="partenaires">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg sm:text-xl font-heading font-bold text-muted mb-10">
            Ils nous font confiance sur le terrain
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-10">
            {featuredLogos.map((part) => (
              <Link
                key={part.slug}
                href="/partenaires"
                title={part.name}
                className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl border border-black/5 shadow-sm grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={part.logo}
                  alt={part.name}
                  className="h-9 w-auto max-w-[110px] object-contain"
                />
                <span className="text-xs font-bold text-textDark hidden sm:inline">{part.short}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link
              href="/partenaires"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              <span>Découvrir les 4 collèges de partenaires ({partners.length} institutions)</span>
              <ArrowRight size={14} />
            </Link>
            <span className="text-muted/40 hidden sm:inline">·</span>
            <Link
              href="/capacites-institutionnelles"
              className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:underline"
            >
              <span>Nos capacités institutionnelles &amp; conformité fiduciaire</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. BANDEAU FINAL D'ENGAGEMENT — Patron « Be the Change You Wish to See » */}
      <section className="py-24 relative overflow-hidden bg-primaryDark text-white">
        <div className="absolute inset-0">
          <img
            src={images.signatureMinistere}
            alt="Partenariats institutionnels ONG EICF"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Devenez acteur <span className="italic text-secondary">du changement</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Bailleurs internationaux, institutions publiques, entreprises et mécènes : agissons ensemble
            pour la dignité humaine et la résilience durable en Côte d’Ivoire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appels-a-partenariat"
              className="px-9 py-4 bg-secondary hover:bg-secondaryHover text-textDark font-bold text-lg rounded-full transition-all shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <span>Devenir partenaire</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact?type=partenariat"
              className="px-9 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold text-lg rounded-full transition-all inline-flex items-center justify-center"
            >
              <span>Nous contacter</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
