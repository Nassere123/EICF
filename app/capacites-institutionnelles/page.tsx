'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Briefcase,
  Scale,
  FileText,
  BarChart3,
  ShieldCheck,
  Users,
  Building,
  CheckCircle2,
  ArrowRight,
  Download,
  ExternalLink,
  Lock,
  Check,
  ChevronDown,
  Layers,
  Award,
  AlertCircle,
  Clock,
  Coins,
  FileCheck2,
  Building2,
  PhoneCall,
  Search,
} from 'lucide-react'
import {
  org,
  institutionalCapacities,
  images,
  globalStats,
  formatNumber,
  type InstitutionalCapacityPillar,
} from '@/lib/data'

export default function CapacitesInstitutionnellesPage() {
  const [activePillar, setActivePillar] = useState<string>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const displayedPillars =
    activePillar === 'all'
      ? institutionalCapacities
      : institutionalCapacities.filter((p) => p.id === activePillar)

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'gestion-projets':
        return <Briefcase size={22} />
      case 'gestion-financiere':
        return <Scale size={22} />
      case 'passation-marches':
        return <FileText size={22} />
      case 'suivi-evaluation':
        return <BarChart3 size={22} />
      case 'sauvegardes-sociales-environnementales':
        return <ShieldCheck size={22} />
      case 'ressources-humaines':
        return <Users size={22} />
      case 'gestion-partenariats':
        return <Building size={22} />
      default:
        return <CheckCircle2 size={22} />
    }
  }

  const faqs = [
    {
      q: 'Comment EICF garantit-elle l’étanchéité absolue des fonds entre différents projets ?',
      a: 'EICF applique une règle stricte de non-commingling : pour chaque convention signée avec un bailleur de fonds (Banque mondiale, agences de l’ONU, AFD), un compte bancaire dédié et exclusif est ouvert auprès d’une institution de premier rang. La comptabilité informatisée (SAGE / Tompro) isole chaque projet par un plan analytique et un journal de trésorerie autonome. Tout virement inter-projets est formellement prohibé par nos statuts.',
    },
    {
      q: 'Quelles procédures de passation des marchés sont appliquées pour l’acquisition de biens et travaux ?',
      a: 'Nos acquisitions sont régies par notre Manuel de passation des marchés, harmonisé avec les directives de la Banque mondiale et le Code des marchés publics ivoirien. Les achats sous seuil exigent un minimum de 3 cotations proforma indépendantes. Les marchés d’envergure font l’objet de dossiers d’appels d’offres publics et sont évalués par une Commission interne d’attribution collégiale avec procès-verbal d’ouverture et de jugement des offres.',
    },
    {
      q: 'Quelles sont les garanties d’indépendance du contrôle financier et des audits ?',
      a: 'La séparation ordonnateur (Direction Exécutive) / payeur (Responsable Financier) est doublée par la règle de la double signature statutaire obligatoire. En outre, les comptes annuels de l’ONG sont certifiés par un Commissaire aux comptes indépendant agréé. Enfin, chaque convention de financement fait l’objet d’un audit externe de clôture par un cabinet d’audit international retenu avec l’accord préalable du bailleur.',
    },
    {
      q: 'Comment est vérifiée la réalité physique des réalisations et des bénéficiaires sur le terrain ?',
      a: 'Le département MEL déploie une collecte numérique géolocalisée (KoboToolbox / ODK). 100 % des infrastructures (comme les 788 latrines du projet PASEA) et des comités villageois sont cartographiés par coordonnées GPS avec photos horodatées. Un protocole d’assurance qualité (DQA) audit 10 % des données par échantillonnage aléatoire physique avant toute transmission de rapport d’étape.',
    },
    {
      q: 'Quel est le dispositif en matière de tolérance zéro envers les abus sexuels (PSEA) et les plaintes ?',
      a: '100 % du personnel, des consultants et des prestataires signent obligatoirement la Charte PSEA et la Politique de Sauvegarde de l’Enfant. Parallèlement, un Mécanisme de Gestion des Plaintes (MGP) multi-canaux (boîtes scellées au village, ligne téléphonique dédiée, comités locaux de médiation) garantit à toute personne le dépôt anonyme et sécurisé d’une alerte, instruite sous 15 jours ouvrés.',
    },
  ]

  const workflowSteps = [
    {
      num: '01',
      title: 'Expression du besoin',
      actor: 'Chefs de projets & Terrain',
      desc: 'Identification participative avec les comités villageois et validation dans le Plan de Travail Budgétisé (PTBA).',
    },
    {
      num: '02',
      title: 'Contrôle budgétaire',
      actor: 'Service Administratif & Financier',
      desc: 'Vérification de l’éligibilité de la dépense, de la ligne budgétaire bailleur et du respect des seuils de passation.',
    },
    {
      num: '03',
      title: 'Mise en concurrence',
      actor: 'Commission de Passation des Marchés',
      desc: 'Demandes de 3 cotations ou appel d’offres public, dépouillement collégial et PV d’attribution.',
    },
    {
      num: '04',
      title: 'Double signature',
      actor: 'Direction Exécutive + CA',
      desc: 'Émission de l’ordre de paiement signé conjointement par deux mandataires statutaires autorisés.',
    },
    {
      num: '05',
      title: 'Réception sur site',
      actor: 'Comité de réception & Usagers',
      desc: 'Contrôle technique contradictoire, PV de réception certifié conforme et géolocalisation des livrables.',
    },
    {
      num: '06',
      title: 'Audit & Certification',
      actor: 'Commissaire aux comptes & Auditeurs',
      desc: 'Examen des pièces justificatives, rapprochements bancaires et certification sans réserve des états.',
    },
  ]

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero has-image">
        <div className="page-hero-img">
          <img src={images.signatureMinistere} alt="Coordination institutionnelle EICF" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/a-propos">L’ONG</Link>
            <span>/</span>
            <span>Nos Capacités Institutionnelles</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Standards Fiduciaires &amp; Bailleurs Internationaux
          </span>

          <h1 className="display">
            Nos Capacités Institutionnelles<br />
            <em>pour la gestion de financements d’envergure.</em>
          </h1>

          <p className="lead">
            Forte de 18 années d’exercice continu en Côte d’Ivoire (2008 – 2026), l’ONG EICF dispose d’un appareil
            fiduciaire et opérationnel certifié, aligné sur les critères stricts de la Banque mondiale, des agences des
            Nations Unies (UNFPA, UNICEF, PNUD) et de la coopération bilatérale (AFD, GIZ).
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#les-7-piliers"
              className="px-7 py-3.5 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-lg inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Découvrir les 7 piliers institutionnels</span>
              <ArrowRight size={16} />
            </a>
            <Link
              href="/mediatheque"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <Download size={16} />
              <span>Consulter les manuels &amp; audits</span>
            </Link>
            <Link
              href="/contact?type=partenariat"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <PhoneCall size={16} />
              <span>Demander un audit préalable</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BANDEAU DE GARANTIES FIDUCIAIRES (TRUST BAR) */}
      <section className="bg-white border-b border-border py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4 rounded-xl bg-background border border-border/60">
              <span className="block font-serif text-3xl font-extrabold text-primary">18 ans</span>
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block mt-1">
                Action continue
              </span>
              <p className="text-xs text-textDark/80 mt-1">Depuis le 1er février 2008</p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60">
              <span className="block font-serif text-3xl font-extrabold text-secondary">100 %</span>
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block mt-1">
                Audits sans réserve
              </span>
              <p className="text-xs text-textDark/80 mt-1">Comptes certifiés conformes</p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60">
              <span className="block font-serif text-3xl font-extrabold text-primary">8+</span>
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block mt-1">
                Bailleurs majeurs
              </span>
              <p className="text-xs text-textDark/80 mt-1">Banque mondiale, ONU, AFD, GIZ</p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60">
              <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-primary">SYSCOHADA</span>
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block mt-1">
                Comptabilité
              </span>
              <p className="text-xs text-textDark/80 mt-1">Logiciel SAGE / Tompro</p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60">
              <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-secondary">Double</span>
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block mt-1">
                Signature
              </span>
              <p className="text-xs text-textDark/80 mt-1">Séparation ordonnateur/payeur</p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60">
              <span className="block font-serif text-3xl font-extrabold text-primary">11</span>
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block mt-1">
                Régions d’ancrage
              </span>
              <p className="text-xs text-textDark/80 mt-1">Antennes &amp; relais de terrain</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION INSTITUTIONNELLE */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-border">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
              <Award size={15} />
              <span>Engagement Fiduciaire &amp; Redevabilité Bailleurs</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold mb-4">
              Une gouvernance conçue pour rassurer les auditeurs et accélérer l’impact
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              Pour une organisation non gouvernementale intervenant au cœur des territoires vulnérables, la confiance
              des partenaires techniques et financiers ne se présume pas : elle se démontre par des faits, des manuels
              éprouvés et des certifications tangibles.
            </p>
            <p className="text-textDark/90 text-sm sm:text-base leading-relaxed">
              L’ONG EICF a bâti son modèle organisationnel autour d’une séparation étanche des fonctions, d’une
              comptabilité SYSCOHADA rigoureuse paramétrée par projet, d’une passation des marchés transparente et
              d’un suivi-évaluation digitalisé (MEL) garantissant à chaque bailleur de fonds la traçabilité complète de
              chaque franc investi.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION PRINCIPALE : LES 7 PILIERS INSTITUTIONNELS (Audit Page 5, Point B) */}
      <section id="les-7-piliers" className="py-20 bg-paper">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Architecture des Capacités
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold mt-2">
              Les 7 Piliers de nos Capacités Institutionnelles
            </h2>
            <p className="text-muted text-base mt-3">
              Découvrez en détail l’organisation, les référentiels normatifs, les logiciels et les garanties
              opérationnelles déployés sur chaque composante de gestion.
            </p>

            {/* FILTRES INTERACTIFS */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <button
                type="button"
                onClick={() => setActivePillar('all')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activePillar === 'all'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-textDark border border-border hover:bg-muted/10'
                }`}
              >
                Tous les 7 piliers
              </button>
              {institutionalCapacities.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePillar(p.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 ${
                    activePillar === p.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-textDark border border-border hover:bg-muted/10'
                  }`}
                >
                  <span className="text-[11px] opacity-75">{p.num}</span>
                  <span>{p.title.split('&')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* LISTE DES PILIERS */}
          <div className="space-y-16">
            {displayedPillars.map((pillar) => (
              <div
                key={pillar.id}
                id={pillar.id}
                className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-border scroll-mt-24 transition-all"
              >
                {/* EN-TÊTE DU PILIER */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-8 border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {getPillarIcon(pillar.id)}
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                        <span>Pilier {pillar.num}</span>
                        <span>·</span>
                        <span>Capacité Fiduciaire &amp; Opérationnelle</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-primary font-bold">
                        {pillar.title}
                      </h3>
                      <p className="text-secondary font-medium text-sm sm:text-base mt-1">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="px-4 py-1.5 rounded-full bg-background border border-border text-xs font-semibold text-textDark">
                    18 ans de pratique certifiée
                  </span>
                </div>

                {/* VUE D'ENSEMBLE */}
                <div className="py-6">
                  <p className="text-textDark/90 text-base sm:text-lg leading-relaxed">
                    {pillar.overview}
                  </p>
                </div>

                {/* 2 COLONNES : NORMES DE RÉFÉRENCE & MÉCANISMES */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                  {/* Colonne gauche : Normes & Outils */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="bg-background rounded-2xl p-6 border border-border">
                      <h4 className="font-serif text-lg font-bold text-primary mb-3 flex items-center gap-2">
                        <Scale size={18} className="text-secondary" />
                        <span>Normes &amp; Référentiels appliqués</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {pillar.standards.map((std, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-textDark/85">
                            <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                            <span>{std}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-background rounded-2xl p-6 border border-border">
                      <h4 className="font-serif text-lg font-bold text-primary mb-3 flex items-center gap-2">
                        <Layers size={18} className="text-secondary" />
                        <span>Outils &amp; Systèmes déployés</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pillar.toolsAndSoftwares.map((tool, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-white border border-border/80 text-xs font-semibold text-primary"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Preuve de terrain */}
                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                      <span className="text-xs uppercase font-bold text-primary tracking-wider block mb-1">
                        Preuve d’exécution sur le terrain
                      </span>
                      <p className="text-xs sm:text-sm text-textDark leading-relaxed">
                        {pillar.concreteEvidence}
                      </p>
                    </div>
                  </div>

                  {/* Colonne droite : 4 mécanismes clés */}
                  <div className="lg:col-span-7">
                    <h4 className="font-serif text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <ShieldCheck size={18} className="text-secondary" />
                      <span>Mécanismes opérationnels &amp; Procédures de contrôle</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pillar.keyMechanisms.map((mech, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-white border border-border hover:border-secondary/50 transition-all shadow-sm flex flex-col justify-between"
                        >
                          <div>
                            <span className="inline-block w-6 h-6 rounded-full bg-secondary/15 text-secondary text-xs font-bold text-center leading-6 mb-2">
                              {i + 1}
                            </span>
                            <h5 className="font-semibold text-sm sm:text-base text-primary mb-2">
                              {mech.title}
                            </h5>
                            <p className="text-xs sm:text-sm text-muted leading-relaxed">
                              {mech.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Documents de référence rattachés */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-3">
                        Documents institutionnels certifiés rattachés :
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {pillar.keyDocuments.map((doc, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-2.5 overflow-hidden">
                              <FileCheck2 size={16} className="text-primary shrink-0" />
                              <div className="truncate">
                                <strong className="text-textDark block truncate">{doc.title}</strong>
                                <span className="text-muted text-[11px]">{doc.type} · {doc.code}</span>
                              </div>
                            </div>
                            <Link
                              href="/mediatheque"
                              className="text-primary hover:text-secondary shrink-0 ml-2"
                              title="Consulter dans la médiathèque"
                            >
                              <ExternalLink size={14} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SÉPARATION DES POUVOIRS & FLUX DE DÉPENSE */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Étanchéité Fiduciaire
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold mt-2">
              Le Cycle Fiduciaire &amp; Séparation Stricte des Pouvoirs
            </h2>
            <p className="text-muted text-base mt-3">
              Chaque mouvement financier est assujetti à un protocole à 6 étapes empêchant tout risque de conflit
              d’intérêts, d’engagement non budgétisé ou de détournement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-7 border border-border shadow-sm hover:border-secondary transition-all relative overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-4xl font-serif font-black text-muted/15 select-none">
                  {step.num}
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                  Étape {step.num}
                </span>
                <h3 className="font-serif text-xl font-bold text-primary mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-semibold text-secondary block mb-3">
                  Acteur : {step.actor}
                </span>
                <p className="text-sm text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RÉSUMÉ VISUEL DE SÉPARATION DES POUVOIRS */}
          <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <Lock size={22} className="text-secondary" />
              <span>Matrice d’indépendance des organes de contrôle</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-background border border-border">
                <span className="font-bold text-primary block text-sm mb-1">1. Ordonnateur</span>
                <p className="text-xs text-muted leading-relaxed">
                  <strong>Direction Exécutive</strong> : engage les dépenses dans les stricts plafonds du budget
                  approuvé par le bailleur et le Conseil d’Administration. Ne manipule aucun compte bancaire.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-background border border-border">
                <span className="font-bold text-primary block text-sm mb-1">2. Comptable Payeur</span>
                <p className="text-xs text-muted leading-relaxed">
                  <strong>Département Administratif &amp; Financier</strong> : vérifie la conformité des pièces
                  justificatives et prépare les paiements. Ne peut ordonner une dépense de sa propre initiative.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-background border border-border">
                <span className="font-bold text-primary block text-sm mb-1">3. Contrôle &amp; Surveillance</span>
                <p className="text-xs text-muted leading-relaxed">
                  <strong>Commissariat aux Comptes &amp; Comité d’Audit</strong> : accès direct et permanent aux grands
                  livres, relevés bancaires et inventaires physiques pour audit indépendant sans filtre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POLITIQUES TRANSVERSALES & SAUVEGARDES */}
      <section className="py-20 bg-paper">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Éthique &amp; Tolérance Zéro
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold mt-2">
              Sauvegardes Éthiques, PSEA &amp; Protection des Bénéficiaires
            </h2>
            <p className="text-muted text-base mt-3">
              Des politiques contraignantes appliquées à l’ensemble des collaborateurs, sous-traitants et partenaires
              pour préserver l’intégrité des populations vulnérables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-5">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  Politique PSEA (Exploitation &amp; Abus Sexuels)
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Alignée sur les protocoles du Comité Permanent Interorganisations (IASC). Tolérance zéro absolue.
                  Signature contractuelle obligatoire de la charte par 100 % des équipes et prestataires.
                </p>
                <ul className="space-y-2 text-xs text-textDark/85">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-secondary shrink-0" />
                    <span>Sensibilisation obligatoire des bénéficiaires</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-secondary shrink-0" />
                    <span>Canal de signalement direct et confidentiel</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <Link
                  href="/mediatheque"
                  className="text-xs font-bold text-primary hover:text-secondary inline-flex items-center gap-1.5"
                >
                  <span>Télécharger la politique PSEA</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <AlertCircle size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  Mécanisme de Gestion des Plaintes (MGP)
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Dispositif multi-niveaux permettant aux communautés de formuler une réclamation ou suggestion sans
                  crainte de représailles. Traitement et réponse formelle garantis sous 15 jours ouvrés.
                </p>
                <ul className="space-y-2 text-xs text-textDark/85">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-secondary shrink-0" />
                    <span>Boîtes à plaintes villageoises sécurisées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-secondary shrink-0" />
                    <span>Comités locaux de médiation représentatifs</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <Link
                  href="/mediatheque"
                  className="text-xs font-bold text-primary hover:text-secondary inline-flex items-center gap-1.5"
                >
                  <span>Consulter le manuel de procédure MGP</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-5">
                  <Users size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  Sauvegarde de l’Enfant &amp; Inclusion Genre
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Interdiction absolue du travail des enfants et des discriminations. Valorisation de la parole des
                  mineurs et priorité donnée aux femmes et ménages vulnérables dans tous les programmes.
                </p>
                <ul className="space-y-2 text-xs text-textDark/85">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-secondary shrink-0" />
                    <span>Protocole de protection de l’image des mineurs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-secondary shrink-0" />
                    <span>Objectif de parité dans les instances communautaires</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <Link
                  href="/mediatheque"
                  className="text-xs font-bold text-primary hover:text-secondary inline-flex items-center gap-1.5"
                >
                  <span>Consulter la politique de sauvegarde</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ AUDITEURS & BAILLEURS */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Questions Fréquentes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold mt-2">
              Questions &amp; Réponses pour Auditeurs et Spécialistes Fiduciaires
            </h2>
            <p className="text-muted text-base mt-3">
              Les éléments d’éligibilité institutionnelle fréquemment audités lors des missions de préqualification.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 font-serif font-bold text-primary text-base sm:text-lg flex items-center justify-between gap-4 hover:bg-muted/5 transition-all"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-secondary transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-muted leading-relaxed border-t border-border/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION : PRÉQUALIFICATION ET PARTENARIAT */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="container max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-secondary font-bold text-xs uppercase tracking-wider mb-6">
            <Building2 size={15} />
            <span>Mission de Préqualification &amp; Co-construction</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-6">
            Vous représentez un bailleur, une agence de coopération ou une institution ?
          </h2>

          <p className="text-white/80 text-base sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Notre Direction Exécutive et notre Direction Administrative et Financière mettent à votre disposition notre
            dossier complet de préqualification (statuts, manuels de procédures, 3 derniers bilans audités, attestations
            fiscales et sociales) et se tiennent prêtes pour un audit préalable sur pièces ou sur site.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=partenariat"
              className="px-8 py-4 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-lg inline-flex items-center gap-2 text-base"
            >
              <span>Prendre attache avec la Direction Exécutive</span>
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/appels-a-partenariat"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2 text-base"
            >
              <span>Consulter les projets en recherche de financement</span>
            </Link>

            <Link
              href="/mediatheque"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2 text-base"
            >
              <Download size={17} />
              <span>Accéder au Centre Documentaire</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
