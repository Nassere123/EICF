'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Briefcase,
  HeartPulse,
  GraduationCap,
  BookOpen,
  Users,
  Compass,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  Calendar,
  Handshake,
} from 'lucide-react'
import {
  org,
  founder,
  brochureKeyFigures,
  projects,
  news,
  partners,
  statusLabel,
  formatDate,
  formatNumber,
} from '@/lib/data'
import { HeroSlider } from '@/components/HeroSlider'
import { CardCarousel } from '@/components/CardCarousel'
import { CountUp } from '@/components/Motion'

const keyFigureIcons: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase size={24} />,
  HeartPulse: <HeartPulse size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  BookOpen: <BookOpen size={24} />,
  Users: <Users size={24} />,
}

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.status !== 'conception')
  const recentNews = news
  const trustedPartners = partners

  return (
    <>
      {/* 1. HERO SLIDER PLEINE LARGEUR */}
      <HeroSlider />

      {/* 2. IDENTITÉ & VISION (Bande verte dominante + encadrés blancs carrés MIA-JFEM) */}
      <section className="section section-green" id="identite">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="badge badge-gold">Depuis le {org.foundedDate}</span>
              <h2 className="h2 mt-3 text-white">
                Identité, Vision &amp; <em>Engagement institutionnel</em>
              </h2>
            </div>
            <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              {org.fullName} ({org.name}) œuvre depuis 18 ans aux côtés des communautés
              ivoiriennes et des partenaires techniques et financiers.
            </p>
          </div>

          <div className="grid-3 mb-8">
            <div className="card-mia">
              <div className="icon-tile">
                <Users size={24} />
              </div>
              <h3 className="card-mia-title">Qui sommes-nous ?</h3>
              <p className="card-mia-desc mt-2">{org.mission}</p>
              <Link href="/a-propos" className="card-mia-btn">
                <span>Découvrir l’ONG</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="card-mia">
              <div className="icon-tile">
                <Compass size={24} />
              </div>
              <h3 className="card-mia-title">Notre Vision</h3>
              <p className="card-mia-desc mt-2">{org.vision}</p>
              <Link href="/domaines-intervention" className="card-mia-btn">
                <span>11 Domaines d’action</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="card-mia">
              <div className="icon-tile">
                <ShieldCheck size={24} />
              </div>
              <h3 className="card-mia-title">Nos Valeurs &amp; Redevabilité</h3>
              <p className="card-mia-desc mt-2">
                Intégrité, transparence fiduciaire (SYSCOHADA), équité de genre,
                sauvegardes PGES/PSEA/MGP et ancrage communautaire durable.
              </p>
              <Link href="/capacites-institutionnelles" className="card-mia-btn">
                <span>Capacités &amp; Audits</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Aperçu concis du Mot du Président Fondateur */}
          <div className="card" style={{ padding: '24px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', border: '1px solid #d4d4d4' }}>
                  <img
                    src={founder.photo}
                    alt={`${founder.name} — ${founder.role}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <span className="badge">Mot du Président Fondateur</span>
                <h3 className="mt-2" style={{ fontSize: '22px', color: 'var(--green)' }}>
                  {founder.name}
                </h3>
                <p className="mt-2" style={{ fontStyle: 'italic', color: 'var(--ink-2)', fontSize: '15.5px' }}>
                  « {founder.citation} »
                </p>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end">
                <Link href="/a-propos/mot-du-president" className="btn btn-green">
                  <span>Lire la tribune</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BANDE JAUNE « CHIFFRES CLÉS » (Brochure EICF — 18 ans & 165 000+ personnes touchées) */}
      <section className="key-figures-band" aria-labelledby="chiffres-cles-title">
        <div className="container">
          <div className="key-figures-header">
            <span
              className="badge"
              style={{ background: 'var(--green)', color: '#ffffff', borderColor: 'var(--green)' }}
            >
              {brochureKeyFigures.title}
            </span>
            <h2
              id="chiffres-cles-title"
              className="h2 mt-3"
              style={{ color: 'var(--green)' }}
            >
              <CountUp value={brochureKeyFigures.years} suffix=" ans" /> d’engagement et de solidarité
            </h2>
            <p
              className="mt-3"
              style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)' }}
            >
              auprès des populations avec plus de{' '}
              <span style={{ color: 'var(--green)', fontWeight: 800 }}>
                <CountUp value={brochureKeyFigures.totalReached} suffix="+" />
              </span>{' '}
              personnes touchées dont :
            </p>
          </div>

          <div className="key-figures-grid">
            {brochureKeyFigures.items.map((item) => (
              <div key={item.label} className="key-figure-card">
                <div className="key-figure-icon" aria-hidden="true">
                  {keyFigureIcons[item.icon] ?? <Users size={24} />}
                </div>
                <strong className="key-figure-value">
                  <CountUp value={item.value} />
                </strong>
                <p className="key-figure-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CARROUSEL « NOS PROJETS & PROGRAMMES » (Bande blanche + cartes carrées .card-mia) */}
      <section className="section section-white" id="projets">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="badge">Références opérationnelles (2008 – 2026)</span>
              <h2 className="h2 mt-3" style={{ color: 'var(--ink)' }}>
                Nos Projets &amp; <em>Programmes</em>
              </h2>
            </div>
            <Link href="/projets-actualites" className="btn btn-green">
              <span>Tous nos projets</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <CardCarousel label="Nos Projets et Programmes">
            {featuredProjects.map((p) => (
              <article key={p.slug} className="card-mia h-full">
                <div className="card-mia-media">
                  <img src={p.image} alt={p.fullName} />
                  <span
                    className={`badge ${p.status === 'en-cours' ? 'badge-gold' : ''}`}
                    style={{ position: 'absolute', top: '10px', left: '10px' }}
                  >
                    {statusLabel[p.status]}
                  </span>
                </div>
                <div className="card-mia-body">
                  <div className="card-mia-meta">
                    <MapPin size={13} />
                    <span>{p.zone}</span>
                  </div>
                  <h3 className="card-mia-title">{p.name}</h3>
                  <p className="card-mia-desc">{p.summary}</p>
                  <div className="card-mia-footer">
                    <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--green)' }}>
                      {formatNumber(p.beneficiaires)} bénéficiaires
                    </span>
                  </div>
                  <Link href={`/projets-actualites/${p.slug}`} className="card-mia-btn">
                    <span>Voir la fiche</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </CardCarousel>
        </div>
      </section>

      {/* 5. CARROUSEL « ACTUALITÉS RÉCENTES » (Bande verte + cartes carrées .card-mia blanches) */}
      <section className="section section-green" id="actualites">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="badge badge-gold">Terrain, Missions &amp; Cérémonies</span>
              <h2 className="h2 mt-3 text-white">
                Actualités <em>récentes</em>
              </h2>
            </div>
            <Link href="/actualites" className="btn btn-gold">
              <span>Toutes les actualités</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <CardCarousel label="Actualités récentes">
            {recentNews.map((n) => (
              <article key={n.slug} className="card-mia h-full">
                <div className="card-mia-media">
                  <img src={n.image} alt={n.title} />
                  <span
                    className="badge badge-gold"
                    style={{ position: 'absolute', top: '10px', left: '10px' }}
                  >
                    {n.category}
                  </span>
                </div>
                <div className="card-mia-body">
                  <div className="card-mia-meta">
                    <Calendar size={13} />
                    <span>{formatDate(n.date)}</span>
                    {n.location && <span>· {n.location}</span>}
                  </div>
                  <h3 className="card-mia-title">{n.title}</h3>
                  <p className="card-mia-desc">{n.excerpt}</p>
                  <Link href={`/actualites/${n.slug}`} className="card-mia-btn">
                    <span>Lire l’article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </CardCarousel>
        </div>
      </section>

      {/* 6. BANDE BLANCHE « ILS NOUS ONT FAIT CONFIANCE » + BANDE VERTE FINALE « ACCOMPAGNEZ-NOUS ! » */}
      <section className="section-sm section-white" aria-labelledby="confiance-title">
        <div className="container">
          <div className="section-head center" style={{ marginBottom: '28px' }}>
            <span className="badge">Partenaires &amp; Bailleurs</span>
            <h2 id="confiance-title" className="h2 mt-3" style={{ color: 'var(--ink)' }}>
              Ils nous ont fait <em>confiance</em>
            </h2>
          </div>

          <div className="marquee-container">
            <div className="marquee-track">
              {[...trustedPartners, ...trustedPartners].map((pt, idx) => (
                <Link key={pt.slug + '-' + idx} href="/partenaires" className="marquee-item">
                  {pt.logo ? (
                    <img
                      src={pt.logo}
                      alt={pt.name}
                      style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
                    />
                  ) : (
                    <span className="marquee-badge">{pt.short}</span>
                  )}
                  <span>{pt.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm section-green-dark">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="badge badge-gold">Donateurs · Bénévoles · Mécènes</span>
              <h2 className="mt-3 text-white">
                Accompagnez-<em>nous !</em>
              </h2>
              <p>
                Bailleurs de fonds, entreprises engagées en RSE, volontaires ou
                partenaires techniques : co-construisons des programmes à impact
                durable auprès des communautés ivoiriennes.
              </p>
            </div>
            <div className="actions">
              <Link href="/appels-a-partenariat" className="btn btn-gold">
                <Handshake size={16} />
                <span>Appels à partenariat</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                <HeartHandshake size={16} />
                <span>Nous contacter / Devenir volontaire</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
