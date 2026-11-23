'use client'

import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Users,
  Award,
  CheckCircle2,
  Compass,
  HeartHandshake,
} from 'lucide-react'
import { org, governance, history, values, images, founder } from '@/lib/data'
import { SixtySeconds } from '@/components/SixtySeconds'

export default function AProposPage() {
  return (
    <>
      {/* HERO À PROPOS */}
      <section className="page-hero has-image">
        <div className="page-hero-img">
          <img src={images.dialogue} alt="Équipe EICF sur le terrain" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>À propos d’EICF</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Identité, Histoire & Gouvernance
          </span>

          <h1 className="display">
            Une organisation engagée<br />
            <em>pour l’humain et la paix.</em>
          </h1>

          <p className="lead">
            Depuis sa création officielle le 1er février 2008, l’ONG EICF conçoit et met en œuvre avec les communautés
            des réponses concrètes, adaptées aux réalités locales et durables.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#mot-du-president"
              className="px-7 py-3.5 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-lg inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Mot du Président Fondateur</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#gouvernance"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Instances & Organigramme</span>
            </a>
          </div>
        </div>
      </section>

      {/* 1. MOT DU PRÉSIDENT FONDATEUR (Style Charity Organization « How It Started ») */}
      <section className="py-24 bg-white" id="mot-du-president">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait officiel avec cadre pivoté */}
            <div className="lg:col-span-5 relative">
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

            {/* Extrait du message présidentiel */}
            <div className="lg:col-span-7">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Message Institutionnel
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-textDark mt-2 mb-6">
                Construire ensemble{' '}
                <span className="italic text-primary">un avenir solidaire et durable</span>
              </h2>

              <blockquote className="font-heading italic text-lg sm:text-xl text-primary border-l-4 border-secondary bg-background p-5 sm:p-6 rounded-r-2xl shadow-xs mb-6 leading-relaxed">
                « {founder.citation} »
              </blockquote>

              <p className="font-semibold text-textDark mb-4 text-sm sm:text-base">
                {founder.salutations.join(' ')}
              </p>

              <div className="space-y-4 text-text text-base leading-relaxed mb-8">
                {founder.message.slice(0, 3).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/a-propos/mot-du-president"
                  className="px-7 py-3.5 bg-primary hover:bg-primaryDark text-white font-bold rounded-full transition-all shadow-md inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  <span>Lire l’intégralité du message</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/projets-actualites"
                  className="px-7 py-3.5 bg-background border border-black/10 hover:border-primary text-textDark hover:text-primary font-semibold rounded-full transition-all inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  <span>Découvrir nos interventions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRÉSENTATION & HISTOIRE */}
      <section className="py-24 bg-background" id="presentation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Notre Parcours depuis 2008
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2 mb-6">
                Plus de 18 ans d’action{' '}
                <span className="italic text-primary">sur le terrain ivoirien.</span>
              </h2>
              <p className="text-lg text-text leading-relaxed mb-5">
                Créée le 1er février 2008 à Abidjan par son Président Fondateur{' '}
                <strong className="text-primary">BROU N’guessan Albert</strong> et des professionnels engagés du développement communautaire, EICF s’est imposée comme un partenaire de référence pour les populations et les bailleurs internationaux.
              </p>
              <p className="text-muted text-base leading-relaxed mb-8">
                Notre méthodologie repose sur le renforcement du pouvoir d’agir : plutôt que d’apporter des solutions prédéfinies, nous formons les comités villageois, les coopératives de femmes et les jeunes pour qu’ils deviennent les premiers artisans de leur développement.
              </p>

              <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-primary">2008</div>
                  <p className="text-xs text-muted mt-1">Fondation officielle</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-primary">4 bases</div>
                  <p className="text-xs text-muted mt-1">Antennes régionales</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-primary">11</div>
                  <p className="text-xs text-muted mt-1">Domaines d’action</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-black/5 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-textDark mb-6">
                Jalons historiques de l’organisation
              </h3>
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
        </div>
      </section>

      {/* 3. « EICF EN 60 SECONDES » — MODULE IA (CDC §2) */}
      <section className="py-16 bg-background" id="sixty">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SixtySeconds />
        </div>
      </section>

      {/* 4. VISION, MISSION & VALEURS */}
      <section className="py-24 bg-white" id="vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Boussole Institutionnelle
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2">
              Vision, Mission & Valeurs{' '}
              <span className="italic text-primary">qui guident nos pas.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div
              data-reveal
              className="bg-background rounded-3xl p-8 sm:p-10 border border-black/5 border-l-4 border-l-secondary shadow-xs"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/25 text-textDark px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
                <Compass size={14} />
                <span>Notre Vision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mb-4">
                Des communautés autonomes et résilientes
              </h3>
              <p className="text-text text-base leading-relaxed">
                {org.vision}
              </p>
            </div>

            <div
              data-reveal
              className="bg-background rounded-3xl p-8 sm:p-10 border border-black/5 border-l-4 border-l-primary shadow-xs"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
                <HeartHandshake size={14} />
                <span>Notre Mission</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mb-4">
                Amélioration durable des conditions de vie
              </h3>
              <p className="text-text text-base leading-relaxed">
                {org.mission}
              </p>
            </div>
          </div>

          {/* 4 Valeurs fondamentales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="valeurs">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-reveal
                className="bg-background rounded-2xl p-7 border border-black/5 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-secondary font-heading font-bold text-sm mb-4">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-heading font-bold text-textDark mb-2">
                  {v.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NOTRE APPROCHE D'INTERVENTION (Style « Our Path to Impact ») */}
      <section className="py-24 bg-background" id="approche">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Méthodologie de Terrain
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2">
              Une démarche en 4 étapes,{' '}
              <span className="italic text-primary">ancrée dans le réel.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: '1',
                title: 'Diagnostic participatif',
                desc: 'Immersion avec les villageois, leaders communautaires et femmes pour identifier les besoins réels et les ressources locales.',
              },
              {
                num: '2',
                title: 'Co-conception & Plan',
                desc: 'Élaboration conjointe des plans d’action communautaires avec des objectifs mesurables et des responsabilités claires.',
              },
              {
                num: '3',
                title: 'Mise en œuvre locale',
                desc: 'Réalisation des ouvrages et activités par les bénéficiaires appuyés par nos ingénieurs et animateurs de terrain.',
              },
              {
                num: '4',
                title: 'Pérennisation & Mesure',
                desc: 'Formation des comités de gestion, capitalisation des leçons apprises et mesure d’impact à 12 et 24 mois.',
              },
            ].map((step, idx) => (
              <div
                key={step.num}
                data-reveal
                className="bg-white p-7 rounded-2xl border border-black/5 shadow-xs hover:shadow-lg transition-all text-center"
              >
                <div
                  className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl font-heading font-bold mb-5 shadow-md ${
                    idx === 0
                      ? 'bg-primary text-white'
                      : 'bg-background border-2 border-primary text-primary'
                  }`}
                >
                  {step.num}
                </div>
                <h3 className="text-xl font-heading font-bold text-textDark mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GOUVERNANCE : CONSEIL D'ADMINISTRATION, DIRECTION EXÉCUTIVE & ORGANIGRAMME */}
      <section className="py-24 bg-white" id="gouvernance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Transparence & Redevabilité
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2 mb-4">
              Des instances claires,{' '}
              <span className="italic text-primary">une direction responsable.</span>
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Conformément à nos statuts, EICF s’appuie sur une stricte séparation entre le Conseil d’Administration (orientation et contrôle) et la Direction Exécutive (mise en œuvre opérationnelle).
            </p>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-heading font-bold text-textDark mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              Conseil d’Administration
            </h3>
            <div className="people">
              {governance.board.map((m) => (
                <div key={m.name} className="person">
                  <div className="avatar">
                    {m.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-textDark mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Direction Exécutive
            </h3>
            <div className="people">
              {governance.direction.map((m) => (
                <div key={m.name} className="person">
                  <div className="avatar">
                    {m.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Organigramme institutionnel */}
          <div className="bg-background rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xs">
            <h3 className="text-2xl font-heading font-bold text-textDark text-center mb-8">
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
                <div className="text-xs text-muted font-bold">
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
                    <span
                      key={c}
                      style={{ background: 'var(--gold-soft)', color: '#7a5a06' }}
                    >
                      Base opérationnelle : {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. IMPLANTATION TERRITORIALE (4 BASES OPÉRATIONNELLES) */}
      <section className="py-24 bg-background" id="implantation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Présence Permanente
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-textDark mt-2 mb-4">
                4 bases opérationnelles{' '}
                <span className="italic text-primary">au plus près des communautés.</span>
              </h2>
              <p className="text-muted text-base sm:text-lg mb-8 leading-relaxed">
                Pour assurer la réactivité et la qualité du suivi, les équipes d’EICF sont installées de manière permanente au sein des régions d’intervention :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    title: 'Base de Katiola (Hambol)',
                    desc: 'Pilotage des programmes Eau, hygiène & assainissement (PASEA) et insertion des jeunes.',
                  },
                  {
                    title: 'Base de Bouna (Bounkani)',
                    desc: 'Coordination du projet SWEDD (espaces sûrs pour adolescentes) et classes passerelles.',
                  },
                  {
                    title: 'Base de Korhogo (Poro)',
                    desc: 'Antenne Nord pour la protection de l’enfant, la filière karité et la cohésion sociale.',
                  },
                  {
                    title: 'Base de Bondoukou (Gontougo)',
                    desc: 'Santé communautaire, nutrition et appui aux coopératives agricoles féminines de l’Est.',
                  },
                ].map((base) => (
                  <div
                    key={base.title}
                    className="bg-white p-5 rounded-2xl border border-black/5 shadow-xs"
                  >
                    <div className="flex items-center gap-2 text-primary font-heading font-bold text-base mb-1.5">
                      <MapPin size={16} className="text-secondary flex-shrink-0" />
                      <span>{base.title}</span>
                    </div>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed">
                      {base.desc}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/cartographie"
                className="px-7 py-3.5 bg-primary hover:bg-primaryDark text-white font-bold rounded-full transition-all shadow-md inline-flex items-center gap-2 text-sm"
              >
                <span>Explorer la cartographie interactive</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={images.femmes}
                  alt="Femmes réunies en coopérative en Côte d'Ivoire"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary block mb-1">
                    Proximité & Écoute
                  </span>
                  <p className="text-sm font-medium text-white/90">
                    Nos équipes résident au cœur des départements d’intervention pour accompagner quotidiennement les groupements villageois.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ENGAGEMENTS INSTITUTIONNELS & REDEVABILITÉ */}
      <section className="py-24 bg-white" id="engagements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Éthique & Conformité
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2">
              Nos engagements <span className="italic text-primary">institutionnels.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              data-reveal
              className="p-8 rounded-2xl bg-background border border-black/5 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-textDark mb-3">
                Tolérance Zéro VBG & Abus
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Politique stricte de protection contre l’exploitation et les abus sexuels (PSEA) appliquée à tous nos collaborateurs, prestataires et partenaires.
              </p>
            </div>

            <div
              data-reveal
              className="p-8 rounded-2xl bg-background border border-black/5 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 text-primary flex items-center justify-center mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-textDark mb-3">
                Audits financiers externes
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Comptes audités annuellement par des cabinets agréés et rapports accessibles en toute transparence dans notre centre de ressources.
              </p>
            </div>

            <div
              data-reveal
              className="p-8 rounded-2xl bg-background border border-black/5 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-textDark mb-3">
                Mécanisme de gestion des plaintes
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Ligne d’écoute et comités de redevabilité communautaires installés dans chaque localité bénéficiaire pour recueillir et traiter les retours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
