'use client'

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
  Building2,
  Download,
  Quote,
} from 'lucide-react'
import {
  org,
  images,
  domains,
  projects,
  news,
  partners,
  globalStats,
  formatNumber,
  formatDate,
  statusLabel,
  impactSentence,
} from '@/lib/data'
import { InteractiveMap } from '@/components/InteractiveMap'
import { RotatingWords, CountUp } from '@/components/Motion'

export default function HomePage() {
  const activeProjects = projects.filter((p) => p.status === 'en-cours')
  const pasea = projects.find((p) => p.slug === 'pasea') ?? projects[0]
  const recentNews = news.slice(0, 3)

  const domainIcons: Record<string, React.ReactNode> = {
    Users: <Users size={22} />,
    GraduationCap: <GraduationCap size={22} />,
    Baby: <Baby size={22} />,
    HandHeart: <HandHeart size={22} />,
    Briefcase: <Briefcase size={22} />,
    HeartPulse: <HeartPulse size={22} />,
    Droplets: <Droplets size={22} />,
    Scale: <Scale size={22} />,
    Handshake: <Handshake size={22} />,
    Sprout: <Sprout size={22} />,
    LifeBuoy: <LifeBuoy size={22} />,
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-media">
          <img
            src={images.hero}
            alt="Enfants et communauté en Côte d'Ivoire"
          />
        </div>

        <div className="container hero-inner">
          <h1 className="anim-up">
            Agir aujourd’hui<br />
            <em>
              <RotatingWords
                words={[
                  'pour un avenir durable.',
                  'pour l’accès à l’eau potable.',
                  'pour l’éducation des filles.',
                  'pour la résilience locale.',
                  'avec les communautés.',
                ]}
              />
            </em>
          </h1>

          <p className="hero-copy anim-up anim-d2">
            L’ONG <strong>EICF</strong> agit aux côtés des communautés pour
            l’éducation, la santé, l’eau-assainissement, l’autonomisation des
            femmes et des jeunes, et la cohésion sociale dans 11 régions de Côte
            d’Ivoire.
          </p>

          <div className="hero-actions anim-up anim-d3">
            <Link href="/projets-actualites" className="btn btn-gold">
              <span>Découvrir nos projets</span>
              <ArrowRight size={15} />
            </Link>

            <Link href="/appels-a-partenariat" className="btn btn-ghost">
              <span>Devenir partenaire</span>
            </Link>
          </div>
        </div>

        {/* Chiffres macro ancrés en bas du hero avec compteurs animés */}
        <div className="hero-stats">
          <div className="container">
            <div className="hero-stat">
              <strong>
                <CountUp value={globalStats.beneficiaires} suffix="+" />
              </strong>
              <p>Bénéficiaires directs accompagnés</p>
            </div>
            <div className="hero-stat">
              <strong>
                <CountUp value={globalStats.regions} suffix=" régions" />
              </strong>
              <p>Présence territoriale nationale</p>
            </div>
            <div className="hero-stat">
              <strong>
                <CountUp value={globalStats.communautes} suffix=" comités" />
              </strong>
              <p>Communautés et villages mobilisés</p>
            </div>
            <div className="hero-stat">
              <strong>
                <CountUp value={globalStats.projets} suffix=" projets" />
              </strong>
              <p>Réalisés, en cours et en conception</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RAISON D'ÊTRE & VISION / MISSION */}
      <section className="section bg-paper">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="display" style={{ marginBottom: '22px' }}>
                Des communautés autonomes,<br />
                <em>actrices de leur avenir.</em>
              </h2>
              <p className="intro-quote">
                « EICF conçoit et met en œuvre des réponses concrètes,{' '}
                <em>avec les communautés et pour elles</em>, en partant de leurs
                propres priorités. »
              </p>

              <div className="vm-grid">
                <div className="vm-card">
                  <span className="badge badge-gold" style={{ marginBottom: '8px' }}>
                    Notre vision
                  </span>
                  <h3>Communautés résilientes</h3>
                  <p>{org.vision}</p>
                </div>

                <div className="vm-card">
                  <span className="badge" style={{ marginBottom: '8px' }}>
                    Notre mission
                  </span>
                  <h3>Action participative</h3>
                  <p>{org.mission}</p>
                </div>
              </div>

              <div style={{ marginTop: '30px' }}>
                <Link href="/a-propos" className="text-link">
                  <span>En savoir plus sur l’histoire et la gouvernance d’EICF</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="media-stack">
              <div className="main">
                <img
                  src={images.dialogue}
                  alt="Dialogue communautaire sous le manguier"
                />
              </div>
              <div className="float">
                <strong>2012</strong>
                <span>Année de création d’EICF à Abidjan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOS 11 DOMAINES D'INTERVENTION */}
      <section className="section bg-white" id="domaines">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="display">
                Une approche intégrée,<br />
                <em>des résultats durables.</em>
              </h2>
            </div>
            <Link href="/domaines-intervention" className="text-link">
              <span>Consulter les fiches des 11 domaines</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="domain-grid">
            {domains.map((dom) => (
              <Link
                key={dom.slug}
                href={`/domaines-intervention/${dom.slug}`}
                className="domain-card"
              >
                <div className="bg">
                  <img src={dom.image} alt={dom.title} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="num">{dom.num}</span>
                  <div className="icon-tile">
                    {domainIcons[dom.icon] ?? <Users size={22} />}
                  </div>
                </div>
                <h3>{dom.title}</h3>
                <p>{dom.short}</p>
                <div className="go">
                  <span style={{ fontSize: '11.5px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Fiche domaine
                  </span>
                  <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BANDEAU IMPACT & SYNTHÈSE IA */}
      <section className="section impact-band">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="display" style={{ color: '#fff' }}>
                Mesurer l’impact,<br />
                <em>rendre compte avec rigueur.</em>
              </h2>
            </div>
            <Link href="/impact" className="btn btn-outline">
              <Sparkles size={15} />
              <span>Tableau de bord complet des KPI</span>
            </Link>
          </div>

          {/* Synthèse automatique par IA */}
          <div className="ai-summary">
            <div className="ai-icon">
              <Sparkles size={22} />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-2)' }}>
                Synthèse générée automatiquement par l’IA EICF
              </span>
              <p style={{ marginTop: '4px' }}>
                {impactSentence}
                <span className="caret" />
              </p>
              <small>
                Consolidation automatisée des indicateurs certifiés de nos 10 projets de terrain.
              </small>
            </div>
          </div>

          {/* Grille des chiffres avec compteurs CountUp */}
          <div className="impact-grid">
            <div className="impact-item">
              <strong>
                <CountUp value={10000} suffix="+" />
              </strong>
              <p>Bénéficiaires directs dans les communautés</p>
            </div>

            <div className="impact-item">
              <strong>
                <CountUp value={5200} suffix="+" />
              </strong>
              <p>Enfants scolarisés ou réinsérés (classes passerelles)</p>
            </div>

            <div className="impact-item">
              <strong>
                <CountUp value={788} suffix=" latrines" />
              </strong>
              <p>Ouvrages construits dans le cadre du projet PASEA</p>
            </div>

            <div className="impact-item">
              <strong>
                <CountUp value={1850} suffix=" filles" />
              </strong>
              <p>Adolescentes accompagnées en espaces sûrs (SWEDD)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJETS EN COURS & PROJET PASEA VEDETTE */}
      <section className="section bg-paper" id="projets">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="display">
                Transformer les engagements<br />
                <em>en réalités de terrain.</em>
              </h2>
            </div>
            <Link href="/projets-actualites" className="text-link">
              <span>Voir tous nos projets (en cours, achevés, en conception)</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Projet vedette : PASEA */}
          <div className="project-feature" style={{ marginBottom: '32px' }}>
            <div className="img">
              <img src={pasea.image} alt="Projet PASEA - Eau et assainissement" />
            </div>
            <div className="copy">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span className="badge badge-live">
                  <span className="dot" /> En cours
                </span>
                <span className="badge badge-gold">
                  {pasea.zone}
                </span>
              </div>

              <h3>{pasea.name}</h3>
              <p style={{ fontSize: '17px', color: 'var(--green-2)', fontWeight: 600 }}>
                {pasea.fullName}
              </p>
              <p style={{ color: 'var(--muted)' }}>{pasea.summary}</p>

              <dl className="kv">
                <div>
                  <dt>Bénéficiaires</dt>
                  <dd>{formatNumber(pasea.beneficiaires)} personnes</dd>
                </div>
                <div>
                  <dt>Partenaire clé</dt>
                  <dd>Banque mondiale</dd>
                </div>
                <div>
                  <dt>Période</dt>
                  <dd>{pasea.periode}</dd>
                </div>
              </dl>

              {pasea.temoignage && (
                <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--paper)', borderLeft: '3px solid var(--gold)' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '14px', color: 'var(--ink)' }}>
                    « {pasea.temoignage.quote} »
                  </p>
                  <small style={{ color: 'var(--muted)', fontWeight: 700, display: 'block', marginTop: '6px' }}>
                    — {pasea.temoignage.author}, {pasea.temoignage.role}
                  </small>
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <Link href={`/projets-actualites/${pasea.slug}`} className="btn btn-green btn-sm">
                  <span>Consulter la fiche projet complète</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Autres projets en cours */}
          <div className="grid-3">
            {activeProjects
              .filter((p) => p.slug !== 'pasea')
              .map((p) => (
                <div key={p.slug} className="project-card">
                  <div className="thumb">
                    <img src={p.image} alt={p.name} />
                    <span className="badge">
                      <span className="dot" /> {statusLabel[p.status]}
                    </span>
                  </div>
                  <div className="body">
                    <span className="zone">
                      <MapPin size={13} />
                      {p.zone}
                    </span>
                    <h3>{p.name}</h3>
                    <p className="full">{p.fullName}</p>
                    <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
                      {p.summary}
                    </p>

                    <dl className="meta">
                      <div>
                        <dt>Bénéficiaires</dt>
                        <dd>{formatNumber(p.beneficiaires)}</dd>
                      </div>
                      <div>
                        <dt>Échéance</dt>
                        <dd>{p.periode}</dd>
                      </div>
                    </dl>

                    <div style={{ marginTop: '12px' }}>
                      <Link
                        href={`/projets-actualites/${p.slug}`}
                        className="text-link"
                      >
                        <span>Voir la fiche projet</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 6. CARTOGRAPHIE INTERACTIVE DES INTERVENTIONS */}
      <section className="section bg-white" id="cartographie">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="display">
                Explorer nos interventions<br />
                <em>par région et localité.</em>
              </h2>
              <p className="lead" style={{ marginTop: '12px' }}>
                Naviguez de la région jusqu’aux villages d’intervention (ex. :
                Hambol &rarr; Katiola &rarr; PASEA &rarr; 10 villages &rarr; 788 latrines).
              </p>
            </div>
            <Link href="/cartographie" className="btn btn-ghost">
              <span>Vue plein écran & détails</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <InteractiveMap />
        </div>
      </section>

      {/* 7. DERNIÈRES ACTUALITÉS DE TERRAIN */}
      <section className="section bg-paper" id="actualites">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="display">
                Sur le terrain,<br />
                <em>chaque jour aux côtés des populations.</em>
              </h2>
            </div>
            <Link href="/actualites" className="text-link">
              <span>Toutes les actualités (8 catégories)</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid-3">
            {recentNews.map((n) => (
              <article key={n.slug} className="news-card card card-hover">
                <div className="thumb">
                  <img src={n.image} alt={n.title} />
                </div>
                <div className="date">
                  <span className="badge badge-gold">{n.category}</span>
                  <span>{formatDate(n.date)}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
                <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                  <Link href={`/actualites/${n.slug}`} className="text-link">
                    <span>Lire l’article complet</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PARTENAIRES TECHNIQUES, FINANCIERS ET INSTITUTIONNELS */}
      <section className="section bg-white" id="partenaires">
        <div className="container">
          <div className="section-head center">
            <h2 className="display">
              Nos partenaires pour<br />
              <em>un impact démultiplié.</em>
            </h2>
            <p className="lead">
              L’action d’EICF s’appuie sur des alliances solides avec les bailleurs
              internationaux, les ministères et les organisations locales.
            </p>
          </div>

          {/* Ruban animé infini (Marquee ticker inspiré du projet 50 Front-end) */}
          <div className="marquee-container" style={{ margin: '0 auto 40px' }}>
            <div className="marquee-track">
              {[...partners, ...partners].map((part, idx) => (
                <Link
                  key={`${part.slug}-${idx}`}
                  href="/partenaires"
                  className="marquee-item"
                >
                  <span className="marquee-badge">{part.short}</span>
                  <span>{part.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mur de logos / sigles des partenaires clés */}
          <div className="logo-wall">
            {partners.slice(0, 12).map((part) => (
              <Link
                key={part.slug}
                href="/partenaires"
                className="logo-cell"
                title={`${part.name} (${part.type})`}
              >
                <div className="logo-mark">{part.short}</div>
                <span>{part.name}</span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/partenaires" className="btn btn-ghost">
              <span>Voir la liste complète des 4 collèges de partenaires</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. BANDEAU DE MOBILISATION & APPEL À PARTENARIAT */}
      <section className="section-sm bg-paper">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>
                Devenez partenaire<br />
                <em>d’un projet à fort impact.</em>
              </h2>
              <p>
                Bailleurs, entreprises engagées (RSE), fondations et agences :
                co-finançons ensemble les projets en préparation dans le Nord,
                l’Est et le Centre de la Côte d’Ivoire.
              </p>
            </div>

            <div className="actions">
              <Link href="/appels-a-partenariat" className="btn btn-gold">
                <span>Consulter les projets à financer</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact?type=partenariat"
                className="btn btn-outline"
              >
                <span>Proposer un partenariat</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
