'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Target,
  Sparkles,
  MapPin,
  Users,
  Compass,
  Award,
  BookOpen,
} from 'lucide-react'
import { org, governance, history, values, images, founder } from '@/lib/data'
import { SixtySeconds } from '@/components/SixtySeconds'

export default function AProposPage() {
  return (
    <>
      {/* Hero À propos */}
      <section className="page-hero has-image">
        <div className="page-hero-img">
          <img src={images.dialogue} alt="Équipe EICF" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>À propos d’EICF</span>
          </div>
          <h1 className="display">
            Une organisation engagée<br />
            <em>pour l’humain et la paix.</em>
          </h1>
          <p className="lead">
            Depuis sa création officielle le 1er février 2008, l’ONG EICF conçoit et met en œuvre avec les communautés
            des réponses concrètes, adaptées aux réalités locales et durables.
          </p>
        </div>
      </section>

      {/* Mot du Président Fondateur (CDC / Référence EICF) */}
      <section className="section bg-white" id="mot-du-president">
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fbf8f1 100%)',
              borderRadius: '24px',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-md)',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            }}
          >
            <div style={{ position: 'relative', minHeight: '400px' }}>
              <img
                src={founder.photo}
                alt={founder.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '28px 24px 20px',
                  background: 'linear-gradient(to top, rgba(10,38,26,0.96) 0%, rgba(10,38,26,0.6) 70%, transparent 100%)',
                  color: '#fff',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {founder.role}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 800, marginTop: '4px' }}>
                  {founder.name}
                </div>
              </div>
            </div>

            <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="badge badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '16px' }}>
                Message institutionnel
              </span>
              <div
                style={{
                  borderLeft: '4px solid var(--gold)',
                  paddingLeft: '20px',
                  marginBottom: '22px',
                  fontStyle: 'italic',
                  fontSize: '17px',
                  lineHeight: 1.6,
                  color: 'var(--green)',
                  fontWeight: 600,
                }}
              >
                « {founder.citation} »
              </div>

              <div style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: 1.75, display: 'grid', gap: '12px' }}>
                <p style={{ fontWeight: 700, color: 'var(--green)' }}>
                  {founder.salutations.join(' ')}
                </p>
                {founder.message.slice(0, 3).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Présentation & Histoire */}
      <section className="section bg-paper" id="presentation">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="display" style={{ marginBottom: '20px' }}>
                Plus de 15 ans d’action<br />
                <em>sur le terrain ivoirien.</em>
              </h2>
              <p className="lead" style={{ marginBottom: '24px' }}>
                Créée le 1er février 2008 à Abidjan par son Président Fondateur BROU N’guessan Albert
                et des professionnels engagés du développement communautaire, EICF s’est imposée
                comme un partenaire de référence pour les populations et les bailleurs internationaux.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                Notre méthodologie repose sur le renforcement du pouvoir d’agir :
                plutôt que d’apporter des solutions prédéfinies, nous formons les
                comités villageois, les coopératives de femmes et les jeunes pour
                qu’ils deviennent les premiers artisans de leur développement.
              </p>
            </div>

            <div className="timeline">
              {history.map((h) => (
                <div key={h.year} className="tl-item">
                  <strong>{h.year}</strong>
                  <p>{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. « EICF en 60 secondes » — Module IA (CDC §2) */}
      <section className="section-sm bg-paper" id="sixty">
        <div className="container">
          <SixtySeconds />
        </div>
      </section>

      {/* 3. Vision, Mission & Valeurs */}
      <section className="section bg-white" id="vision">
        <div className="container">
          <div className="section-head center">
            <h2 className="display">
              Vision, Mission & Valeurs<br />
              <em>qui guident nos pas.</em>
            </h2>
          </div>

          <div className="grid-2" style={{ marginBottom: '40px' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--gold)', padding: '34px' }}>
              <span className="badge badge-gold" style={{ marginBottom: '10px' }}>
                Notre vision
              </span>
              <h3 style={{ fontSize: '28px', color: 'var(--green)' }}>
                Des communautés autonomes et résilientes
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', marginTop: '12px' }}>
                {org.vision}
              </p>
            </div>

            <div className="card" style={{ borderLeft: '4px solid var(--green-3)', padding: '34px' }}>
              <span className="badge" style={{ marginBottom: '10px' }}>
                Notre mission
              </span>
              <h3 style={{ fontSize: '28px', color: 'var(--green)' }}>
                Amélioration durable des conditions de vie
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', marginTop: '12px' }}>
                {org.mission}
              </p>
            </div>
          </div>

          {/* 4 Valeurs fondamentales */}
          <div className="grid-4" id="valeurs">
            {values.map((v, i) => (
              <div key={v.title} className="card card-hover" style={{ padding: '26px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.1em' }}>
                  0{i + 1}
                </span>
                <h3 style={{ fontSize: '20px', marginTop: '10px', color: 'var(--green)' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '14px', marginTop: '8px' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Notre approche d'intervention */}
      <section className="section bg-paper" id="approche">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="display">
                Une démarche en 4 étapes,<br />
                <em>ancrée dans le réel.</em>
              </h2>
            </div>
          </div>

          <div className="approach">
            <div>
              <h3>Diagnostic participatif</h3>
              <p>
                Immersion avec les villageois, leaders communautaires et femmes
                pour identifier les besoins réels et les ressources locales.
              </p>
            </div>
            <div>
              <h3>Co-conception & Plan</h3>
              <p>
                Élaboration conjointe des plans d’action communautaires avec des
                objectifs mesurables et des responsabilités claires.
              </p>
            </div>
            <div>
              <h3>Mise en œuvre locale</h3>
              <p>
                Réalisation des ouvrages et activités par les bénéficiaires
                appuyés par nos ingénieurs et animateurs de terrain.
              </p>
            </div>
            <div>
              <h3>Pérennisation & Mesure</h3>
              <p>
                Formation des comités de gestion, capitalisation des leçons
                apprises et mesure d’impact à 12 et 24 mois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gouvernance : Conseil d'administration & Direction exécutive */}
      <section className="section bg-white" id="gouvernance">
        <div className="container">
          <div className="section-head center">
            <h2 className="display">
              Des instances claires,<br />
              <em>une direction responsable.</em>
            </h2>
            <p className="lead">
              Conformément à nos statuts, EICF s’appuie sur une stricte séparation
              entre le Conseil d’Administration (orientation et contrôle) et la
              Direction Exécutive (mise en œuvre opérationnelle).
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--green)', marginBottom: '18px' }}>
              Conseil d’Administration
            </h3>
            <div className="people">
              {governance.board.map((m) => (
                <div key={m.name} className="person">
                  <div className="avatar">
                    {m.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--green)', marginBottom: '18px' }}>
              Direction Exécutive
            </h3>
            <div className="people">
              {governance.direction.map((m) => (
                <div key={m.name} className="person">
                  <div className="avatar">
                    {m.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Organigramme institutionnel */}
          <div className="card" style={{ padding: '34px', background: 'var(--paper)' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--green)', textAlign: 'center', marginBottom: '24px' }}>
              Organigramme fonctionnel d’EICF
            </h3>

            <div className="org-chart">
              <div className="org-level">
                <div className="org-node">Assemblée Générale</div>
                <div className="org-link" />
              </div>

              <div className="org-level">
                <div className="org-node" style={{ background: 'var(--green-2)' }}>
                  Conseil d’Administration
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 700 }}>
                  Contrôlé par un Commissaire aux Comptes assermenté
                </div>
                <div className="org-link" />
              </div>

              <div className="org-level">
                <div className="org-node" style={{ background: 'var(--green-3)' }}>
                  Direction Exécutive
                </div>
                <div className="org-link" />
              </div>

              <div className="org-level">
                <div className="org-children">
                  {governance.orgChart[3].children.map((c) => (
                    <span key={c}>Département {c}</span>
                  ))}
                </div>
                <div className="org-link" />
              </div>

              <div className="org-level">
                <div className="org-children">
                  {governance.orgChart[4].children.map((c) => (
                    <span key={c} style={{ background: 'var(--gold-soft)', color: '#7a5a06' }}>
                      Base opérationnelle : {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Implantation territoriale (4 bases opérationnelles) */}
      <section className="section bg-paper" id="implantation">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="display" style={{ marginBottom: '20px' }}>
                4 bases opérationnelles<br />
                <em>au plus près des communautés.</em>
              </h2>
              <p className="lead" style={{ marginBottom: '20px' }}>
                Pour assurer la réactivité et la qualité du suivi, les équipes
                d’EICF sont installées de manière permanente au sein des régions
                d’intervention :
              </p>

              <div style={{ display: 'grid', gap: '14px' }}>
                <div className="card" style={{ padding: '18px 24px' }}>
                  <strong style={{ fontSize: '18px', color: 'var(--green)' }}>
                    Base de Katiola (Région du Hambol)
                  </strong>
                  <p style={{ fontSize: '14px', marginTop: '4px' }}>
                    Pilotage des programmes Eau, hygiène & assainissement (PASEA)
                    et insertion professionnelle des jeunes.
                  </p>
                </div>

                <div className="card" style={{ padding: '18px 24px' }}>
                  <strong style={{ fontSize: '18px', color: 'var(--green)' }}>
                    Base de Bouna (Région du Bounkani)
                  </strong>
                  <p style={{ fontSize: '14px', marginTop: '4px' }}>
                    Coordination du projet SWEDD (espaces sûrs pour adolescentes)
                    et des classes passerelles d’éducation.
                  </p>
                </div>

                <div className="card" style={{ padding: '18px 24px' }}>
                  <strong style={{ fontSize: '18px', color: 'var(--green)' }}>
                    Base de Korhogo (Région du Poro)
                  </strong>
                  <p style={{ fontSize: '14px', marginTop: '4px' }}>
                    Antenne Nord pour la protection de l’enfant, la filière
                    karité et la consolidation de la paix.
                  </p>
                </div>

                <div className="card" style={{ padding: '18px 24px' }}>
                  <strong style={{ fontSize: '18px', color: 'var(--green)' }}>
                    Base de Bondoukou (Région du Gontougo)
                  </strong>
                  <p style={{ fontSize: '14px', marginTop: '4px' }}>
                    Santé communautaire, nutrition et appui aux coopératives
                    agricoles féminines de l’Est.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '26px' }}>
                <Link href="/cartographie" className="btn btn-green btn-sm">
                  <span>Explorer la cartographie interactive</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <img
                  src={images.femmes}
                  alt="Femmes réunies en coopérative en Côte d'Ivoire"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Engagements institutionnels & Redevabilité */}
      <section className="section bg-white" id="engagements">
        <div className="container">
          <div className="section-head center">
            <h2 className="display">
              Nos engagements<br />
              <em>institutionnels.</em>
            </h2>
          </div>

          <div className="grid-3">
            <div className="card" style={{ padding: '28px' }}>
              <ShieldCheck size={28} style={{ color: 'var(--green-3)', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '20px', color: 'var(--green)' }}>Tolérance Zéro VBG & Abus</h3>
              <p style={{ fontSize: '14px' }}>
                Politique stricte de protection contre l’exploitation et les abus
                sexuels (PSEA) appliquée à tous nos collaborateurs et partenaires.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <Award size={28} style={{ color: 'var(--gold)', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '20px', color: 'var(--green)' }}>Audits financiers externes</h3>
              <p style={{ fontSize: '14px' }}>
                Comptes audités annuellement par des cabinets agréés et rapports
                accessibles en toute transparence dans la médiathèque.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <Users size={28} style={{ color: 'var(--green-3)', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '20px', color: 'var(--green)' }}>Mécanisme de gestion des plaintes</h3>
              <p style={{ fontSize: '14px' }}>
                Numéro vert et boîtes à suggestions communautaires installés dans
                chaque village bénéficiaire pour recueillir les retours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
