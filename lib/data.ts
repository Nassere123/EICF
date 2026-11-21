/**
 * Base de données institutionnelle EICF (consolidée et fiabilisée).
 * ------------------------------------------------------------------
 * Conformément au Rapport d'observations et de recommandations de la
 * Direction d'EICF :
 * - Date officielle de création : 1er février 2008 (18+ ans d'expérience)
 * - Suppression des projets fictifs PROTÈGE et SANTÉ-NUT
 * - Suppression des montants budgétaires non publiables sur SWEDD et PASEA
 * - Correction de la fiche SWEDD (contrat signé en oct. 2021, durée 3 ans
 *   2022–2024, clôturé le 31 décembre 2024, régions Bounkani, Gontougo,
 *   Bélier, N'Zi, Moronou, Iffou)
 * - Correction de la fiche PASEA (Hambol / Katiola, 10 villages, 788 latrines,
 *   9 TPE accompagnées, 8 400 bénéficiaires, taux harmonisé)
 * - Intégration des références historiques réelles (PEJEDEC II & III Bagoué
 *   et Agnéby-Tiassa, AVEC-AEJ Folon, CLEF San Pédro, PDDIVS Bouna,
 *   Programmes PNUD Tonkpi & Cavally, Projet GIZ Bouna)
 * - Gouvernance conforme aux statuts et rubrique Capacités institutionnelles.
 */

export const org = {
  name: 'EICF',
  fullName: 'Ensemble Imaginons et Construisons le Futur',
  tagline: 'Ensemble Sauvons des Vies · Agir aujourd’hui pour un avenir durable.',
  logo: '/WhatsApp_Image_2026-11-02_at_14.26.35-removebg-preview.png',
  address: 'Cocody Angré, Abidjan, Côte d’Ivoire',
  postalAddress: '27 BP 219 Abidjan 27',
  phone: '+225 27 22 53 46 40',
  phones: [
    '+225 27 22 53 46 40',
    '+225 27 22 01 65 24',
    '+225 07 07 66 91 76',
    '+225 01 03 16 67 84',
    '+225 07 07 08 12 85',
  ],
  whatsapp: '2252722534640',
  email: 'ongeicf@gmail.com',
  secondaryEmail: 'info@ongeicf.com',
  founded: 2008,
  foundedDate: '1er février 2008',
  experienceYears: 18,
  villagesCount: 100,
  projectsRealizedCount: 20,
  vision:
    'Des communautés autonomes, solidaires et résilientes, où chaque personne peut exercer ses droits et contribuer durablement au développement de son territoire.',
  mission:
    'Améliorer durablement les conditions de vie des populations vulnérables à travers des interventions participatives, structurées et ancrées dans les dynamiques locales.',
  socials: {
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
    x: 'https://x.com',
  },
}

export const brochureKeyFigures = {
  years: 18,
  totalReached: 165000,
  title: 'CHIFFRES CLÉS',
  headline: '18 ans d’engagement et de solidarité',
  subtitle: 'auprès des populations avec plus de 165 000 personnes touchées dont :',
  items: [
    {
      value: 4831,
      label: 'Femmes et jeunes filles bénéficiaires d’AGR',
      icon: 'Briefcase',
    },
    {
      value: 100012,
      label: 'Femmes formées à la nutrition infantile',
      icon: 'HeartPulse',
    },
    {
      value: 55056,
      label: 'Adolescentes formées aux droits humains et à l’entrepreneuriat',
      icon: 'GraduationCap',
    },
    {
      value: 2665,
      label: 'Jeunes filles scolarisées avec un appui alimentaire',
      icon: 'BookOpen',
    },
    {
      value: 1682,
      label: 'Hommes et adolescents formés au genre transformationnel',
      icon: 'Users',
    },
  ],
}

export const images = {
  hero: '/images/hero.jpg',
  education: '/images/education.jpg',
  sante: '/images/sante.jpg',
  communaute: '/images/communaute-groupe-notables.jpg',
  eau: '/images/eau.jpg',
  femmes: '/images/femmes.jpg',
  espaceSur: '/images/espace-sur.jpg',
  latrines: '/images/latrines.jpg',
  dialogue: '/images/communaute-dialogue-paix.jpg',
  aminata: '/images/portrait-aminata.jpg',
  moussa: '/images/portrait-moussa.jpg',
  signatureMinistere: '/images/signature-convention-ministere.jpg',
  remiseAccord: '/images/remise-accord-partenariat.jpg',
  missionPartenaires: '/images/mission-supervision-partenaires.jpg',
  pejedecJeunes: '/images/pejedec-jeunes-emploi.jpg',
  dialoguePaix: '/images/communaute-dialogue-paix.jpg',
  assembleeVillage: '/images/assemblee-villageoise.jpg',
  groupeNotables: '/images/communaute-groupe-notables.jpg',
  fondateur: '/images/president.jpeg',
  president: '/images/president.jpeg',
  swedd: '/images/projets/swedd.jpeg',
  sweddGenre: '/images/projets/swedd-genre.jpeg',
  pejedecThimo: '/images/projets/pejedec-thimo-agneby-tiassa.jpeg',
  pejedecBanqueMondiale: '/images/projets/pejedec-partenaire-banque-mondiale.jpeg',
  sensibilisationPaix: '/images/projets/sensibilisation-paix.jpeg',
  terrain: '/images/projets/terrain.jpeg',
  imageTerrain: '/images/projets/image-terrain.jpeg',
  terrain01: '/images/terrain/terrain-01.jpeg',
  terrain02: '/images/terrain/terrain-02.jpeg',
  terrain03: '/images/terrain/terrain-03.jpeg',
  terrain04: '/images/terrain/terrain-04.jpeg',
  terrain05: '/images/terrain/terrain-05.jpeg',
  terrain06: '/images/terrain/terrain-06.jpeg',
  terrain07: '/images/terrain/terrain-07.jpg',
  carteInterventions: '/interventions_eicf.jpeg',
}

export const heroSlides = [
  {
    image: images.terrain01,
    tag: 'Depuis le 1er février 2008 · 18 ans d’action',
    title: 'Agir aujourd’hui pour des communautés autonomes et résilientes.',
    subtitle:
      'Plus de 165 000 personnes touchées dans 14 régions de Côte d’Ivoire en partenariat avec la Banque mondiale, le PNUD, la GIZ, l’UNICEF, l’UNFPA et l’AEJ.',
    primaryCta: { label: 'Découvrir nos projets', href: '/projets-actualites' },
    secondaryCta: { label: 'Devenir partenaire', href: '/appels-a-partenariat' },
  },
  {
    image: images.terrain02,
    tag: 'Eau, Hygiène & Assainissement · PASEA Hambol',
    title: '788 latrines familiales réalisées avec 9 TPE locales à Katiola.',
    subtitle:
      'Un modèle d’assainissement durable et d’appui aux très petites entreprises rurales au bénéfice de 8 400 habitants dans 10 villages.',
    primaryCta: { label: 'Fiche du projet PASEA', href: '/projets-actualites/pasea' },
    secondaryCta: { label: 'Cartographie terrain', href: '/cartographie' },
  },
  {
    image: images.terrain03,
    tag: 'Autonomisation & Éducation · SWEDD & CLEF',
    title: '55 056 adolescentes formées et 5 200 enfants réinsérés à l’école.',
    subtitle:
      'Espaces sûrs, droits humains, maintien scolaire et insertion socio-économique des femmes et des jeunes filles sur l’ensemble du territoire.',
    primaryCta: { label: 'Nos 11 domaines', href: '/domaines-intervention' },
    secondaryCta: { label: 'Capacités institutionnelles', href: '/capacites-institutionnelles' },
  },
  {
    image: images.terrain04,
    tag: 'Insertion, AVEC & Cohésion · PEJEDEC, PNUD & GIZ',
    title: 'Paix, solidarité et insertion économique dans plus de 100 localités.',
    subtitle:
      'Des dialogues intercommunautaires à la structuration des caisses AVEC et des chantiers THIMO pour l’emploi durable des jeunes et des femmes.',
    primaryCta: { label: 'Nous rejoindre', href: '/contact' },
    secondaryCta: { label: 'Centre documentaire', href: '/mediatheque' },
  },
]

/* ------------------------------------------------------------------ */
/* Mot du Président Fondateur (Observation 6.A)                        */
/* ------------------------------------------------------------------ */

export const founder = {
  name: 'BROU N’guessan Albert',
  role: 'Président Fondateur de l’ONG EICF',
  institution: 'ONG EICF — Ensemble Imaginons et Construisons le Futur',
  since: 'Créée officiellement le 1er février 2008',
  photo: '/images/president.jpeg',
  citation:
    'Depuis le 1er février 2008, nous bâtissons avec les communautés et nos partenaires une organisation rigoureuse, redevable et tournée vers des résultats durables.',
  salutations: [
    'Chers visiteurs,',
    'Chers partenaires techniques et financiers,',
    'Chers collaborateurs et acteurs du développement,',
  ],
  message: [
    'C’est avec un profond sentiment de responsabilité, de fierté et d’espérance que je vous souhaite la bienvenue sur la plateforme institutionnelle de l’ONG Ensemble Imaginons et Construisons le Futur (EICF), officiellement créée le 1er février 2008.',
    'Les circonstances de création de notre organisation procèdent d’un constat de terrain : face aux défis d’accès à l’éducation, à l’eau potable, à l’assainissement, à l’emploi des jeunes et à la cohésion sociale, les communautés ivoiriennes recèlent un potentiel considérable qui ne demande qu’à être structuré et accompagné avec méthode.',
    'Au cours de nos 18 années d’existence, l’ONG EICF a connu une évolution institutionnelle majeure. D’une initiative citoyenne engagée au plus près des villages, elle s’est hissée au rang d’organisation nationale dotée d’instances statutaires solides, d’une Direction Exécutive professionnalisée, de procédures administratives et financières conformes aux exigences internationales et de bases opérationnelles permanentes.',
    'Cette maturité opérationnelle s’illustre par des réalisations structurantes conduites avec des partenaires de premier plan : les projets PEJEDEC II et III dans les régions de la Bagoué (THIMO, AVEC et autonomisation économique) et de l’Agnéby-Tiassa (insertion socio-économique des jeunes), le projet AVEC-AEJ dans la région du Folon, le programme SWEDD exécuté de 2022 à 2024 dans six régions (Bounkani, Gontougo, Bélier, N’Zi, Moronou et Iffou), le projet CLEF / Classes passerelles à San Pédro et dans le Nord-Est, le projet PDDIVS et le projet GIZ dans la commune de Bouna, les programmes PNUD de cohésion sociale et d’entrepreneuriat dans le Tonkpi et le Cavally, ainsi que le projet PASEA dans la région du Hambol à Katiola.',
    'Notre vision repose sur la conviction que la crédibilité d’une ONG se mesure à la qualité de sa gouvernance, à la fiabilité de son suivi-évaluation, au respect des sauvegardes environnementales et sociales (PGES, PSEA, MGP) et à la pérennité des ouvrages et compétences transférés aux populations.',
    'Nos perspectives de développement s’inscrivent aujourd’hui dans le renforcement de nos alliances avec les bailleurs multilatéraux, les agences des Nations Unies, les coopérations bilatérales, les ministères techniques, les collectivités territoriales et le secteur privé pour déployer des programmes à fort impact dans plus de 100 localités.',
    'Je tiens à exprimer ma profonde gratitude à nos partenaires techniques et financiers pour leur confiance renouvelée, aux autorités administratives et coutumières pour leur accompagnement, ainsi qu’à nos équipes opérationnelles qui œuvrent chaque jour avec intégrité.',
    'Ensemble, continuons d’imaginer et de construire un futur plus juste, plus inclusif et durable pour nos territoires.',
  ],
  conclusion: 'Avec mes sentiments de profonde considération et d’engagement constant.',
  signature: {
    name: 'BROU N’guessan Albert',
    title: 'Président Fondateur (Rôle institutionnel et statutaire)',
    org: 'ONG EICF — Ensemble Imaginons et Construisons le Futur',
    date: 'Fondée le 1er février 2008 · 18+ années d’expérience',
  },
}

/* ------------------------------------------------------------------ */
/* Mot de la Direction Exécutive (Observation 6.B)                     */
/* ------------------------------------------------------------------ */

export const executiveDirector = {
  title: 'Le mot de la Direction Exécutive',
  role: 'Directeur Exécutif de l’ONG EICF',
  subtitle: 'Stratégie opérationnelle, maîtrise fiduciaire et culture de résultats',
  quote:
    'Notre responsabilité exécutive est de traduire chaque convention de financement en résultats mesurables, vérifiables et durables sur le terrain.',
  pillars: [
    {
      label: 'Stratégie opérationnelle',
      detail: 'Déploiement déconcentré à partir de nos bases régionales et implication systématique des collectivités, TPE locales et comités villageois.',
    },
    {
      label: 'Capacités d’intervention',
      detail: 'Maîtrise complète du cycle de projet, de la passation des marchés, de la gestion financière certifiée et des sauvegardes (PGES, MGP, PSEA).',
    },
    {
      label: 'Résultats démontrés',
      detail: 'Plus de 20 projets exécutés avec succès dans 14 régions et plus de 100 villages auprès des jeunes, des femmes et des ménages ruraux.',
    },
  ],
  message: [
    'Conformément aux dispositions statutaires de l’ONG EICF qui consacrent une stricte séparation entre les organes d’orientation (Présidence et Conseil d’Administration) et l’organe de gestion quotidienne, la Direction Exécutive assure le pilotage opérationnel, technique, administratif et financier de l’ensemble des programmes.',
    'Notre stratégie opérationnelle repose sur la proximité territoriale et la rigueur méthodologique. Grâce à nos départements spécialisés — Opérations et programmes, Comptabilité et finances, Administration et Ressources Humaines, Suivi-évaluation, Communication et partenariats — nous garantissons une exécution fluide et conforme aux cahiers des charges de nos bailleurs.',
    'Qu’il s’agisse d’accompagner 9 TPE locales pour la construction de 788 latrines familiales dans 10 villages du Hambol (PASEA), d’encadrer les Associations Villageoises d’Épargne et de Crédit (PEJEDEC Bagoué, AVEC-AEJ Folon), d’animer les espaces sûrs dans six régions (SWEDD 2022–2024) ou de conduire des dialogues de cohésion sociale (PNUD Tonkpi/Cavally, GIZ Bouna), nos équipes appliquent des standards élevés de contrôle interne et de redevabilité.',
    'Vis-à-vis de nos partenaires techniques et financiers, nous nous engageons sur trois principes intangibles : la conformité fiduciaire et la transparence des procédures d’acquisition, la fiabilité des données de suivi-évaluation sans double comptage, et le respect strict des sauvegardes sociales et environnementales.',
    'La Direction Exécutive demeure à l’entière disposition des responsables de programmes, des spécialistes en passation des marchés et des missions d’évaluation pour toute due diligence technique ou financière.',
  ],
}

/* ------------------------------------------------------------------ */
/* Nos capacités institutionnelles (Observation 3.B)                   */
/* ------------------------------------------------------------------ */

export type InstitutionalCapacity = {
  id: string
  num: string
  title: string
  expectedContent: string
  icon: string
  description: string
  deliverables: string[]
  referenceHighlight: string
}

export const institutionalCapacities: InstitutionalCapacity[] = [
  {
    id: 'gestion-projets',
    num: '01',
    title: 'Gestion des projets',
    expectedContent: 'Planification, coordination et exécution',
    icon: 'Briefcase',
    description:
      'Maîtrise complète du cycle de gestion axée sur les résultats (GAR) : planification opérationnelle annuelle (PTBA), coordination multi-acteurs sur le terrain, supervision des équipes régionales et respect des délais contractuels.',
    deliverables: [
      'Plans de Travail et Budgets Annuels (PTBA) et chronogrammes d’exécution',
      'Encadrement d’opérateurs locaux (9 TPE accompagnées sur le PASEA à Katiola)',
      'Rapports périodiques d’avancement technique et de clôture contractuelle',
    ],
    referenceHighlight: 'Références : PASEA (Hambol), SWEDD (6 régions, 2022–2024), PEJEDEC II & III, PDDIVS Bouna.',
  },
  {
    id: 'gestion-financiere',
    num: '02',
    title: 'Gestion financière',
    expectedContent: 'Comptabilité, contrôle interne et reporting',
    icon: 'ShieldCheck',
    description:
      'Tenue d’une comptabilité analytique par bailleur et par convention selon les normes SYSCOHADA révisé, séparation des tâches d’ordonnancement et de paiement, rapprochements bancaires mensuels et audits externes.',
    deliverables: [
      'Manuel de procédures administratives, financières et comptables',
      'Rapports de Suivi Financier (RSF) et demandes de décaissement (DRF)',
      'États financiers annuels vérifiés par un Commissaire aux Comptes et auditeurs externes',
    ],
    referenceHighlight: 'Références : Gestion fiduciaire conforme aux exigences Banque mondiale, PNUD, GIZ, UNICEF et AEJ.',
  },
  {
    id: 'passation-marches',
    num: '03',
    title: 'Passation des marchés',
    expectedContent: 'Procédures d’acquisition et gestion des fournisseurs',
    icon: 'Scale',
    description:
      'Application rigoureuse des règles de mise en concurrence pour l’acquisition de biens, fournitures, travaux communautaires et services de consultants, garantissant transparence, égalité de traitement et traçabilité.',
    deliverables: [
      'Manuel interne de passation des marchés et plans de passation (PPM)',
      'Commissions d’ouverture des plis et d’évaluation des offres avec procès-verbaux',
      'Répertoire qualifié de fournisseurs, entrepreneurs locaux et prestataires agréés',
    ],
    referenceHighlight: 'Références : Acquisitions d’équipements, kits d’installation AGR et matériaux de construction.',
  },
  {
    id: 'suivi-evaluation',
    num: '04',
    title: 'Suivi-évaluation (S&E)',
    expectedContent: 'Indicateurs, collecte et analyse des données',
    icon: 'TrendingUp',
    description:
      'Dispositif structuré de suivi-évaluation reposant sur des cadres de résultats précis, la collecte numérique sur smartphone/tablette, l’identification de bénéficiaires uniques (sans double comptage) et la vérification sur site.',
    deliverables: [
      'Cadres de mesure du rendement et fiches d’indicateurs par période de référence',
      'Bases de données désagrégées (sexe, âge, localité, statut direct / indirect)',
      'Notes de capitalisation et études de base / évaluations finales',
    ],
    referenceHighlight: 'Références : Suivi cohortes SWEDD, PEJEDEC THIMO/AVEC et ménages PASEA.',
  },
  {
    id: 'sauvegardes-es',
    num: '05',
    title: 'Sauvegardes environnementales et sociales',
    expectedContent: 'PGES, MGP, gestion des risques',
    icon: 'Sprout',
    description:
      'Intégration systématique des normes de sauvegarde environnementale et sociale dans chaque intervention : prévention des risques, gestion des plaintes communautaires et protection des personnes vulnérables.',
    deliverables: [
      'Plans de Gestion Environnementale et Sociale (PGES) et suivi HSE de chantier',
      'Mécanisme de Gestion des Plaintes (MGP) opérationnel dans chaque village',
      'Politique de Prévention de l’Exploitation et des Abus Sexuels (PSEA) et Sauvegarde de l’enfant',
    ],
    referenceHighlight: 'Références : Conformité PGES sur les ouvrages WASH (PASEA) et protection en espaces sûrs (SWEDD).',
  },
  {
    id: 'ressources-humaines',
    num: '06',
    title: 'Ressources humaines',
    expectedContent: 'Expertise, équipes et mobilisation de personnel',
    icon: 'Users',
    description:
      'Capacité éprouvée à mobiliser rapidement des équipes pluridisciplinaires qualifiées (chefs de projet, ingénieurs WASH, spécialistes genre/VBG, superviseurs AVEC, animateurs communautaires) au cœur des zones d’intervention.',
    deliverables: [
      'Équipe permanente de direction et chefs de départements spécialisés',
      'Bases opérationnelles régionales (Katiola, Bouna, Korhogo, Bondoukou)',
      'Base de données de consultants, formateurs, mentores et animateurs locaux',
    ],
    referenceHighlight: 'Références : Déploiement simultané d’équipes terrain dans 6 régions pour le programme SWEDD.',
  },
  {
    id: 'gestion-partenariats',
    num: '07',
    title: 'Gestion des partenariats',
    expectedContent: 'Coordination avec les ministères, collectivités et bailleurs',
    icon: 'Handshake',
    description:
      'Ancrage institutionnel fort assurant une articulation fluide entre les bailleurs internationaux, les ministères techniques de tutelle, les corps préfectoraux, les collectivités décentralisées et les autorités coutumières.',
    deliverables: [
      'Accords-cadres et protocoles de collaboration avec les ministères et agences publiques',
      'Synergie avec les Conseils régionaux, mairies et comités sous-préfectoraux',
      'Participation active aux groupes sectoriels et clusters nationaux',
    ],
    referenceHighlight: 'Références : Collaborations avec MINHAS, MSLP, MENA, AEJ, Conseils régionaux et Mairies.',
  },
]

/* ------------------------------------------------------------------ */
/* Domaines d'intervention (11, conformément au CDC §3)                */
/* ------------------------------------------------------------------ */

export type Domain = {
  slug: string
  num: string
  title: string
  short: string
  icon: string
  image: string
  objective: string
  approach: string[]
  results: { value: string; label: string }[]
}

export const domains: Domain[] = [
  {
    slug: 'developpement-social-communautaire',
    num: '01',
    title: 'Développement social et communautaire',
    short: 'Renforcer les capacités des communautés et des villes secondaires à porter leur développement.',
    icon: 'Users',
    image: images.assembleeVillage,
    objective: 'Faire des communautés et des acteurs locaux les premiers artisans de leur développement, du diagnostic participatif jusqu’à la gestion durable des ouvrages.',
    approach: ['Diagnostic participatif villageois et communal', 'Structuration des comités de développement locaux', 'Développement durable et inclusif des villes secondaires (PDDIVS)', 'Suivi citoyen des réalisations'],
    results: [{ value: '100+', label: 'villages et localités accompagnés' }, { value: '62', label: 'comités locaux structurés' }],
  },
  {
    slug: 'education-formation-alphabetisation',
    num: '02',
    title: 'Éducation, formation et alphabétisation',
    short: 'Réinsérer durablement les enfants hors école via les classes passerelles (CLEF) et l’alphabétisation.',
    icon: 'GraduationCap',
    image: images.education,
    objective: 'Garantir l’accès, la réinsertion scolaire et le maintien à l’école des enfants vulnérables, en particulier dans les zones cacaoyères et rurales.',
    approach: ['Classes passerelles (Programme CLEF à San Pédro et Nord-Est)', 'Soutien scolaire et distribution de kits', 'Formation des animateurs et enseignants', 'Centres d’alphabétisation fonctionnelle'],
    results: [{ value: '5 200', label: 'enfants scolarisés ou réinsérés' }, { value: '120', label: 'classes passerelles animées' }],
  },
  {
    slug: 'protection-enfant-petite-enfance',
    num: '03',
    title: 'Protection de l’enfant et petite enfance',
    short: 'Prévenir le travail des enfants et offrir à chaque enfant un environnement protecteur.',
    icon: 'Baby',
    image: images.communaute,
    objective: 'Protéger les enfants contre les violences, abus et pires formes de travail, et promouvoir le développement intégral de la petite enfance.',
    approach: ['Comités communautaires de protection de l’enfant', 'Sensibilisation des ménages et producteurs', 'Réinsertion éducative (passerelles CLEF)', 'Promotion de la parentalité positive'],
    results: [{ value: '5 200+', label: 'enfants protégés et accompagnés' }, { value: '45', label: 'comités villageois de veille' }],
  },
  {
    slug: 'autonomisation-femmes-jeunes',
    num: '04',
    title: 'Autonomisation des femmes et des jeunes',
    short: 'Renforcer le leadership et l’autonomie économique des femmes et adolescentes (SWEDD, AVEC).',
    icon: 'HandHeart',
    image: images.espaceSur,
    objective: 'Renforcer le pouvoir d’agir économique, social et décisionnel des femmes, des adolescentes et des jeunes à travers les espaces sûrs et les AVEC.',
    approach: ['Espaces sûrs pour adolescentes et jeunes femmes (SWEDD dans 6 régions)', 'Associations Villageoises d’Épargne et de Crédit (AVEC)', 'Compétences de vie et santé reproductive', 'Leadership féminin et maintien scolaire'],
    results: [{ value: '3 800+', label: 'femmes et filles accompagnées' }, { value: '6 régions', label: 'couvertes par les interventions SWEDD' }],
  },
  {
    slug: 'entrepreneuriat-insertion',
    num: '05',
    title: 'Entrepreneuriat et insertion socio-économique',
    short: 'Créer des emplois et revenus durables (PEJEDEC II & III Bagoué et Agnéby-Tiassa, AVEC-AEJ Folon).',
    icon: 'Briefcase',
    image: images.pejedecJeunes,
    objective: 'Favoriser l’insertion socio-économique durable des jeunes et des femmes par les travaux à haute intensité de main-d’œuvre (THIMO), les AVEC et les AGR.',
    approach: ['Dispositifs THIMO et épargne communautaire (PEJEDEC II & III Bagoué)', 'Insertion socio-économique et AGR des jeunes (PEJEDEC II & III Agnéby-Tiassa)', 'Accompagnement et structuration des AVEC (AVEC-AEJ Folon)', 'Accompagnement de 9 TPE locales d’assainissement (PASEA Katiola)'],
    results: [{ value: '2 400+', label: 'jeunes et femmes insérés (PEJEDEC / AEJ)' }, { value: '95+', label: 'groupements AVEC et TPE accompagnés' }],
  },
  {
    slug: 'sante-nutrition',
    num: '06',
    title: 'Santé publique et nutrition',
    short: 'Promouvoir la santé communautaire, l’hygiène préventive et la santé reproductive.',
    icon: 'HeartPulse',
    image: images.sante,
    objective: 'Améliorer les pratiques de santé préventive, d’hygiène familiale, de nutrition et de santé sexuelle et reproductive au sein des communautés.',
    approach: ['Sensibilisation en santé communautaire et nutritionnelle', 'Santé sexuelle et reproductive des adolescentes (espaces sûrs SWEDD)', 'Prévention des maladies hydriques (couplée au PASEA)', 'Relais communautaires et mobilisation villageoise'],
    results: [{ value: '15 000+', label: 'personnes sensibilisées à la santé-hygiène' }, { value: '74', label: 'mentores et relais communautaires formés' }],
  },
  {
    slug: 'eau-hygiene-assainissement',
    num: '07',
    title: 'Eau, hygiène et assainissement',
    short: 'Accès durable à l’assainissement familial et accompagnement des TPE (PASEA Hambol / Katiola).',
    icon: 'Droplets',
    image: images.latrines,
    objective: 'Éradiquer la défécation à l’air libre, construire des ouvrages d’assainissement durables et professionnaliser les artisans et TPE locaux.',
    approach: ['Accompagnement technique et managérial de 9 TPE locales', 'Construction de 788 latrines familiales dans 10 villages de Katiola (PASEA)', 'Assainissement Total Piloté par la Communauté (ATPC)', 'Dispositifs de lavage des mains et comités d’hygiène'],
    results: [{ value: '788', label: 'latrines familiales dans 10 villages' }, { value: '9 TPE', label: 'locales accompagnées à Katiola' }],
  },
  {
    slug: 'droits-humains-vbg',
    num: '08',
    title: 'Droits humains, protection et lutte contre les VBG',
    short: 'Prévenir les violences basées sur le genre et promouvoir les droits des femmes et des filles.',
    icon: 'Scale',
    image: images.signatureMinistere,
    objective: 'Prévenir les violences basées sur le genre (VBG), les mariages précoces et toute forme d’exploitation, avec application stricte de la politique PSEA.',
    approach: ['Sensibilisation sur les droits des femmes et des filles (SWEDD)', 'Engagement des chefs coutumiers, religieux et comités d’hommes', 'Orientation et référencement éthique des survivantes', 'Application de la politique Tolérance Zéro PSEA et du MGP'],
    results: [{ value: '6 régions', label: 'sensibilisées contre les VBG et mariages précoces' }, { value: '100 %', label: 'des projets dotés d’un mécanisme MGP/PSEA' }],
  },
  {
    slug: 'paix-cohesion-sociale',
    num: '09',
    title: 'Paix, cohésion sociale et engagement citoyen',
    short: 'Consolider la paix et le vivre-ensemble (Programmes PNUD Tonkpi & Cavally, Projet GIZ Bouna).',
    icon: 'Handshake',
    image: images.dialoguePaix,
    objective: 'Prévenir les conflits intercommunautaires, renforcer le dialogue social et associer la cohésion sociale à l’entrepreneuriat des jeunes et des femmes.',
    approach: ['Dialogues intercommunautaires et médiation locale (Projet GIZ à Bouna)', 'Couplage paix, cohésion sociale et entrepreneuriat (Programmes PNUD Tonkpi & Cavally)', 'Développement urbain inclusif et apaisé (PDDIVS Bouna)', 'Comités locaux de veille et de règlement pacifique des différends'],
    results: [{ value: '3 régions', label: 'phares (Tonkpi, Cavally, Bounkani)' }, { value: '140+', label: 'leaders et médiateurs communautaires formés' }],
  },
  {
    slug: 'environnement-developpement-durable',
    num: '10',
    title: 'Environnement et développement durable',
    short: 'Développement urbain durable (PDDIVS Bouna), agroforesterie et résilience climatique.',
    icon: 'Sprout',
    image: images.femmes,
    objective: 'Promouvoir un aménagement durable et inclusif des territoires et accompagner les communautés face aux changements climatiques.',
    approach: ['Développement durable et inclusif des villes secondaires (PDDIVS Bouna)', 'Respect des Plans de Gestion Environnementale et Sociale (PGES)', 'Écoles vertes et reboisement communautaire', 'Valorisation durable des chaînes de valeur locales (karité)'],
    results: [{ value: 'Bouna', label: 'ville secondaire accompagnée (PDDIVS)' }, { value: '100 %', label: 'de conformité PGES sur les chantiers' }],
  },
  {
    slug: 'action-humanitaire-urgences',
    num: '11',
    title: 'Action humanitaire et réponse aux urgences',
    short: 'Relèvement communautaire, résilience des zones frontalières et préparation aux urgences.',
    icon: 'LifeBuoy',
    image: images.communaute,
    objective: 'Renforcer la résilience des populations vulnérables dans les zones frontalières ou exposées aux chocs climatiques et humanitaires.',
    approach: ['Appui à la résilience dans le Nord-Est (Bounkani / Bouna)', 'Prévention des risques et plans de contingence communautaires', 'WASH d’urgence et sensibilisation sanitaire', 'Coordination avec les autorités préfectorales et agences onusiennes'],
    results: [{ value: '4 bases', label: 'régionales mobilisables en urgence' }, { value: '2 300', label: 'ménages ciblés en préparation' }],
  },
]

/* ------------------------------------------------------------------ */
/* Partenaires (Observation 3.A : distinction bailleurs / partenaires) */
/* ------------------------------------------------------------------ */

export type PartnerCategory =
  | 'techniques-financiers'
  | 'institutionnels'
  | 'operationnels'
  | 'communautaires'

export type Partner = {
  slug: string
  name: string
  short: string
  category: PartnerCategory
  type: string
  relationStatus: 'Bailleur — Financement en cours' | 'Bailleur — Projets exécutés' | 'Partenaire institutionnel & tutelle' | 'Partenaire opérationnel / terrain' | 'Acteur communautaire'
  description: string
  zone: string
  period?: string
  contractRef?: string
  resultsObtained?: string
  url: string
  logo?: string
}

export const partnerCategories: { id: PartnerCategory; label: string; desc: string }[] = [
  {
    id: 'techniques-financiers',
    label: 'Bailleurs de fonds & Partenaires financiers',
    desc: 'Institutions internationales et agences ayant financé des conventions et projets exécutés par l’ONG EICF.',
  },
  {
    id: 'institutionnels',
    label: 'Partenaires institutionnels & Collectivités',
    desc: 'Ministères techniques, agences nationales d’exécution, conseils régionaux et communes partenaires.',
  },
  {
    id: 'operationnels',
    label: 'Partenaires techniques & opérationnels',
    desc: 'Programmes sectoriels, TPE locales accompagnées, structures sanitaires et établissements scolaires.',
  },
  {
    id: 'communautaires',
    label: 'Partenaires communautaires',
    desc: 'Associations Villageoises d’Épargne et de Crédit (AVEC), comités villageois et chefferies traditionnelles.',
  },
]

export const partners: Partner[] = [
  {
    slug: 'banque-mondiale',
    name: 'Banque mondiale',
    short: 'BM',
    category: 'techniques-financiers',
    type: 'Bailleur multilatéral',
    relationStatus: 'Bailleur — Financement en cours',
    description:
      'Bailleur de référence pour les programmes d’accès à l’assainissement (PASEA), d’insertion des jeunes (PEJEDEC II & III) et d’autonomisation des femmes et adolescentes (SWEDD).',
    zone: 'Hambol (Katiola), Bagoué, Agnéby-Tiassa, Bounkani, Gontougo, Bélier, N’Zi, Moronou, Iffou',
    period: '2017 – 2026 (PEJEDEC II & III, SWEDD 2022–2024, PASEA en cours)',
    contractRef: 'Conventions PASEA (Hambol), SWEDD (clôturé le 31/12/2024) et PEJEDEC II & III',
    resultsObtained: '788 latrines dans 10 villages et 9 TPE accompagnées (PASEA) ; 6 régions couvertes (SWEDD) ; insertion THIMO/AVEC (PEJEDEC).',
    url: 'https://www.banquemondiale.org',
    logo: '/images/partenaires/banque-mondiale.svg',
  },
  {
    slug: 'pnud',
    name: 'Programme des Nations Unies pour le développement (PNUD)',
    short: 'PNUD',
    category: 'techniques-financiers',
    type: 'Agence des Nations Unies',
    relationStatus: 'Bailleur — Projets exécutés',
    description:
      'Partenaire financier et technique pour les programmes de consolidation de la paix, de cohésion sociale et d’entrepreneuriat communautaire dans l’Ouest montagneux et forestier.',
    zone: 'Régions du Tonkpi et du Cavally',
    period: 'Programmes exécutés (Tonkpi & Cavally)',
    contractRef: 'Conventions PNUD — Paix, Cohésion sociale et Entrepreneuriat',
    resultsObtained: 'Dialogues intercommunautaires, mécanismes locaux de paix et appui à l’entrepreneuriat des jeunes et des femmes.',
    url: 'https://www.undp.org',
    logo: '/images/partenaires/pnud.svg',
  },
  {
    slug: 'giz',
    name: 'Coopération allemande (GIZ)',
    short: 'GIZ',
    category: 'techniques-financiers',
    type: 'Coopération bilatérale',
    relationStatus: 'Bailleur — Projets exécutés',
    description:
      'Financement et appui technique aux initiatives de prévention des conflits, de dialogue communautaire et de cohésion sociale dans le Nord-Est frontalier.',
    zone: 'Commune et département de Bouna (Région du Bounkani)',
    period: 'Projet exécuté à Bouna',
    contractRef: 'Convention GIZ — Paix et Cohésion sociale à Bouna',
    resultsObtained: 'Renforcement du vivre-ensemble, cadres de concertation locaux et prévention des tensions communautaires à Bouna.',
    url: 'https://www.giz.de',
  },
  {
    slug: 'clef-unicef',
    name: 'Programme CLEF & UNICEF Côte d’Ivoire',
    short: 'CLEF / UNICEF',
    category: 'techniques-financiers',
    type: 'Partenariat Éducation & Enfance',
    relationStatus: 'Bailleur — Projets exécutés',
    description:
      'Soutien aux programmes de classes passerelles, d’éducation accélérée et de réinsertion scolaire des enfants hors école dans les zones de production cacaoyère et rurales.',
    zone: 'Région de San Pédro, Bounkani, Béré, Worodougou',
    period: 'Conventions exécutées (2020 – 2024)',
    contractRef: 'Projet CLEF / Classes passerelles (San Pédro et régions cibles)',
    resultsObtained: '5 200 enfants réinsérés dans le système scolaire formel via 120 classes passerelles.',
    url: 'https://www.unicef.org/cotedivoire',
  },
  {
    slug: 'unfpa',
    name: 'Fonds des Nations Unies pour la Population (UNFPA)',
    short: 'UNFPA',
    category: 'techniques-financiers',
    type: 'Agence des Nations Unies',
    relationStatus: 'Bailleur — Projets exécutés',
    description:
      'Partenaire technique du programme régional SWEDD pour les espaces sûrs, la santé sexuelle et reproductive et les compétences de vie des adolescentes.',
    zone: 'Bounkani, Gontougo, Bélier, N’Zi, Moronou, Iffou',
    period: '2022 – 2024 (Clôturé le 31 décembre 2024)',
    contractRef: 'Dispositif Espaces sûrs & Autonomisation SWEDD',
    resultsObtained: 'Animation de 74 espaces sûrs, formation des mentores et maintien scolaire à 96 %.',
    url: 'https://cotedivoire.unfpa.org',
  },
  {
    slug: 'aej',
    name: 'Agence Emploi Jeunes (AEJ) & BCP-Emploi',
    short: 'AEJ / BCP',
    category: 'institutionnels',
    type: 'Agence publique & Unité de gestion',
    relationStatus: 'Bailleur — Projets exécutés',
    description:
      'Maîtrise d’ouvrage déléguée des projets PEJEDEC II et III (Bagoué et Agnéby-Tiassa) ainsi que du projet AVEC-AEJ dans la région du Folon pour l’insertion économique.',
    zone: 'Régions de la Bagoué, de l’Agnéby-Tiassa et du Folon',
    period: '2018 – 2024 (PEJEDEC II & III, AVEC-AEJ)',
    contractRef: 'Conventions PEJEDEC II & III (Bagoué, Agnéby-Tiassa) et AVEC-AEJ (Folon)',
    resultsObtained: 'Déploiement des THIMO, structuration des AVEC et insertion socio-économique des jeunes et des femmes.',
    url: 'https://www.agenceemploijeunes.ci',
    logo: '/images/partenaires/aej.png',
  },
  {
    slug: 'ministere-hydraulique',
    name: 'Ministère de l’Hydraulique, de l’Assainissement et de la Salubrité (MINHAS) / ONAD',
    short: 'MINHAS',
    category: 'institutionnels',
    type: 'Ministère technique',
    relationStatus: 'Partenaire institutionnel & tutelle',
    description:
      'Tutelle technique du projet PASEA pour le développement de l’assainissement rural, la certification FDAL et l’accompagnement des TPE d’assainissement.',
    zone: 'Région du Hambol (Département de Katiola)',
    period: 'En cours',
    contractRef: 'Mise en œuvre opérationnelle PASEA — Hambol (Katiola)',
    resultsObtained: '10 villages couverts, 788 latrines familiales et 9 TPE locales accompagnées.',
    url: 'https://www.gouv.ci',
    logo: '/images/partenaires/cote-d-ivoire.svg',
  },
  {
    slug: 'ministere-solidarite',
    name: 'Ministère de la Cohésion Nationale, de la Solidarité et de la Lutte contre la Pauvreté',
    short: 'MCNSLP',
    category: 'institutionnels',
    type: 'Ministère de tutelle',
    relationStatus: 'Partenaire institutionnel & tutelle',
    description:
      'Cadre institutionnel des interventions de cohésion sociale, d’autonomisation communautaire et de réduction de la vulnérabilité.',
    zone: 'National (14 régions d’intervention)',
    period: 'Partenariat institutionnel permanent',
    url: 'https://www.gouv.ci',
    logo: '/images/partenaires/cote-d-ivoire.svg',
  },
  {
    slug: 'ministere-education',
    name: 'Ministère de l’Éducation Nationale et de l’Alphabétisation (MENA)',
    short: 'MENA',
    category: 'institutionnels',
    type: 'Ministère technique',
    relationStatus: 'Partenaire institutionnel & tutelle',
    description:
      'Encadrement pédagogique et intégration dans les écoles publiques des élèves issus du projet CLEF / Classes passerelles.',
    zone: 'San Pédro, Bounkani, Béré, Worodougou',
    period: 'Partenariat sectoriel Éducation',
    url: 'https://www.education.gouv.ci',
    logo: '/images/partenaires/cote-d-ivoire.svg',
  },
  {
    slug: 'collectivites-locales',
    name: 'Communes & Conseils régionaux (Bouna, Katiola, Boundiali, Agboville, Minignan, Man, San Pédro)',
    short: 'COLLECTIVITÉS',
    category: 'institutionnels',
    type: 'Collectivités territoriales',
    relationStatus: 'Partenaire institutionnel & tutelle',
    description:
      'Co-pilotage territorial des projets, notamment le projet PDDIVS dans la commune de Bouna pour le développement durable et inclusif des villes secondaires.',
    zone: 'Bounkani (Bouna), Hambol (Katiola), Bagoué, Agnéby-Tiassa, Folon, Tonkpi, Cavally, San Pédro',
    period: '2015 – 2026',
    contractRef: 'Projet PDDIVS (Commune de Bouna) & conventions locales',
    url: 'https://www.gouv.ci',
    logo: '/images/partenaires/cote-d-ivoire.svg',
  },
  {
    slug: 'tpe-assainissement',
    name: 'Réseau des 9 TPE locales d’assainissement du Hambol',
    short: '9 TPE',
    category: 'operationnels',
    type: 'Très Petites Entreprises locales',
    relationStatus: 'Partenaire opérationnel / terrain',
    description:
      'Très Petites Entreprises locales formées, équipées et accompagnées par EICF dans le cadre du PASEA pour la réalisation conforme des 788 latrines familiales dans 10 villages.',
    zone: 'Département de Katiola (Hambol)',
    period: 'En cours (PASEA)',
    resultsObtained: '9 TPE structurées et opérationnelles pour la construction d’ouvrages WASH.',
    url: '#',
  },
  {
    slug: 'ecoles-structures',
    name: 'Directions Régionales de l’Éducation (DRENA) & Établissements scolaires',
    short: 'DRENA / ÉCOLES',
    category: 'operationnels',
    type: 'Structures éducatives',
    relationStatus: 'Partenaire opérationnel / terrain',
    description:
      'Écoles d’accueil des enfants réinsérés via les classes passerelles CLEF et suivi du maintien scolaire des filles accompagnées.',
    zone: 'San Pédro, Bounkani, Gontougo, Bélier, N’Zi, Moronou, Iffou',
    url: '#',
  },
  {
    slug: 'groupements-avec',
    name: 'Associations Villageoises d’Épargne et de Crédit (AVEC)',
    short: 'AVEC',
    category: 'communautaires',
    type: 'Groupements communautaires',
    relationStatus: 'Acteur communautaire',
    description:
      'Structures communautaires d’épargne et de micro-crédit mises en place et accompagnées par EICF dans les régions de la Bagoué (PEJEDEC) et du Folon (AVEC-AEJ).',
    zone: 'Bagoué, Folon, Bounkani, Poro',
    resultsObtained: 'Autonomisation financière durable des femmes et des jeunes en milieu rural.',
    url: '#',
  },
  {
    slug: 'comites-chefferies',
    name: 'Chefferies traditionnelles, Comités villageois & Comités de paix',
    short: 'COMITÉS',
    category: 'communautaires',
    type: 'Autorités coutumières & comités locaux',
    relationStatus: 'Acteur communautaire',
    description:
      'Garants de l’ancrage communautaire, de la médiation locale (Tonkpi, Cavally, Bouna) et de la gestion des ouvrages villageois (Katiola).',
    zone: 'Plus de 100 villages et localités d’intervention',
    url: '#',
  },
]

/* ------------------------------------------------------------------ */
/* Projets (Observations 3 & 4 : données exactes + références)         */
/* ------------------------------------------------------------------ */

export type ProjectStatus = 'en-cours' | 'acheve' | 'conception'

export type Project = {
  slug: string
  name: string
  fullName: string
  status: ProjectStatus
  domain: string
  regions: string[]
  zone: string
  partners: string[]
  periode: string
  duree: string
  budget: string
  beneficiaires: number
  beneficiairesLabel: string
  image: string
  summary: string
  objectifs: string[]
  activites: string[]
  resultats: string[]
  indicateurs: { label: string; cible: number; atteint: number; unite?: string }[]
  tauxRealisation?: number
  dateReferenceTaux?: string
  temoignage?: { quote: string; author: string; role: string }
  lecons?: string[]
  problematique?: string
  besoinFinancement?: string
  financementAcquis?: number
}

export const statusLabel: Record<ProjectStatus, string> = {
  'en-cours': 'En cours',
  acheve: 'Achevé',
  conception: 'En conception',
}

export const projects: Project[] = [
  /* 1. PASEA — Observation 3.B (En cours) */
  {
    slug: 'pasea',
    name: 'PASEA',
    fullName: 'Projet d’Amélioration des Services d’Eau et d’Assainissement dans la région du Hambol',
    status: 'en-cours',
    domain: 'eau-hygiene-assainissement',
    regions: ['hambol'],
    zone: 'Région du Hambol · Département de Katiola (10 villages)',
    partners: ['banque-mondiale', 'ministere-hydraulique', 'collectivites-locales', 'tpe-assainissement'],
    periode: 'Convention en cours d’exécution',
    duree: 'Intervention département de Katiola',
    budget: 'Convention PASEA / Banque mondiale',
    beneficiaires: 8400,
    beneficiairesLabel: 'bénéficiaires dans 10 villages',
    image: images.latrines,
    summary:
      'Accompagnement de 9 Très Petites Entreprises (TPE) locales et mobilisation communautaire pour la réalisation de 788 latrines familiales dans 10 villages du département de Katiola.',
    objectifs: [
      'Accompagner et renforcer les capacités techniques et opérationnelles de 9 TPE locales d’assainissement',
      'Réaliser 788 latrines familiales normalisées dans 10 villages du département de Katiola',
      'Améliorer durablement le cadre d’hygiène et d’assainissement de 8 400 bénéficiaires ruraux',
    ],
    activites: [
      'Encadrement technique, suivi de chantier et accompagnement de 9 TPE locales',
      'Construction de 788 latrines familiales dans les 10 villages ciblés de Katiola',
      'Mobilisation des ménages et mise en place des comités villageois d’hygiène et de suivi',
      'Application du Plan de Gestion Environnementale et Sociale (PGES) et du Mécanisme de Gestion des Plaintes (MGP)',
    ],
    resultats: [
      '9 TPE locales formées, encadrées et opérationnelles sur le terrain',
      '788 latrines familiales dans 10 villages du département de Katiola',
      '8 400 bénéficiaires sensibilisés et équipés en ouvrages d’assainissement durable',
    ],
    indicateurs: [
      { label: 'Latrines familiales dans 10 villages', cible: 788, atteint: 788 },
      { label: 'TPE locales accompagnées', cible: 9, atteint: 9 },
      { label: 'Villages couverts (Katiola)', cible: 10, atteint: 10 },
    ],
    tauxRealisation: 93,
    dateReferenceTaux: 'Taux d’exécution physique consolidé',
    temoignage: {
      quote: 'Grâce à l’accompagnement technique d’EICF, nos artisans locaux et nos familles disposent aujourd’hui d’ouvrages solides et hygiéniques dans tout le village.',
      author: 'Awa K.',
      role: 'Présidente du comité villageois d’hygiène · Sous-préfecture de Fronan (Katiola)',
    },
  },

  /* 2. SWEDD — Observation 3.A & 4 (Achevé le 31 décembre 2024) */
  {
    slug: 'swedd',
    name: 'SWEDD',
    fullName: 'Autonomisation des Femmes et Dividende Démographique au Sahel (6 régions)',
    status: 'acheve',
    domain: 'autonomisation-femmes-jeunes',
    regions: ['bounkani', 'gontougo', 'belier-nzi-moronou-iffou'],
    zone: 'Régions : Bounkani · Gontougo · Bélier · N’Zi · Moronou · Iffou',
    partners: ['banque-mondiale', 'unfpa', 'ministere-solidarite'],
    periode: '2022 – 2024 (Contrat signé en oct. 2021 · Clôturé le 31 décembre 2024)',
    duree: '3 ans (2022–2024)',
    budget: 'Convention SWEDD / Banque mondiale',
    beneficiaires: 1850,
    beneficiairesLabel: 'adolescentes et femmes autonomisées',
    image: images.swedd,
    summary:
      'Intervention triennale (2022–2024, clôturée le 31 décembre 2024) pour l’autonomisation des femmes et des adolescentes à travers les espaces sûrs, le maintien scolaire et le renforcement des compétences de vie dans 6 régions.',
    objectifs: [
      'Renforcer l’autonomisation des femmes et des adolescentes dans les régions du Bounkani, du Gontougo, du Bélier, du N’Zi, du Moronou et de l’Iffou',
      'Prévenir les mariages d’enfants, les grossesses précoces et les violences basées sur le genre (VBG)',
      'Favoriser le maintien scolaire et l’insertion économique des jeunes filles vulnérables',
    ],
    activites: [
      'Installation et animation de 74 espaces sûrs communautaires et scolaires',
      'Recrutement, formation et supervision des mentores communautaires',
      'Clubs des maris et futurs maris et dialogues avec les leaders communautaires et religieux',
      'Accompagnement à l’autonomisation économique et au maintien scolaire des adolescentes',
    ],
    resultats: [
      'Projet exécuté sur 3 ans (2022–2024) et officiellement clôturé avec succès le 31 décembre 2024',
      '6 régions couvertes (Bounkani, Gontougo, Bélier, N’Zi, Moronou, Iffou)',
      '1 850 adolescentes et jeunes femmes formées avec 96 % de maintien scolaire',
    ],
    indicateurs: [
      { label: 'Exécution contractuelle (2022–2024)', cible: 100, atteint: 100, unite: '%' },
      { label: 'Espaces sûrs animés', cible: 74, atteint: 74 },
      { label: 'Maintien scolaire des filles', cible: 90, atteint: 96, unite: '%' },
    ],
    tauxRealisation: 100,
    dateReferenceTaux: 'Clôturé le 31 décembre 2024',
    temoignage: {
      quote: 'Dans l’espace sûr SWEDD animé par EICF, j’ai appris à défendre mes droits, à poursuivre mes études et à préparer mon activité.',
      author: 'Salimata K.',
      role: 'Ancienne bénéficiaire d’espace sûr · Bouna (Région du Bounkani)',
    },
    lecons: [
      'L’implication des parents, des chefs coutumiers et des leaders religieux est indispensable pour transformer durablement les normes sociales.',
      'Le couplage entre compétences de vie et activités économiques consolide l’autonomie après la clôture du projet.',
    ],
  },

  /* 3. PEJEDEC II et III — Région de la Bagoué (Observation 4) */
  {
    slug: 'pejedec-bagoue',
    name: 'PEJEDEC II & III — Bagoué',
    fullName: 'Projet Emploi Jeunes et Développement des Compétences (PEJEDEC II & III) dans la Région de la Bagoué',
    status: 'acheve',
    domain: 'entrepreneuriat-insertion',
    regions: ['bagoue'],
    zone: 'Région de la Bagoué (Boundiali, Kouto, Tengrela)',
    partners: ['banque-mondiale', 'aej', 'collectivites-locales', 'groupements-avec'],
    periode: 'Phases II & III (Achevé)',
    duree: '36 mois',
    budget: 'Convention PEJEDEC / Banque mondiale & BCP-Emploi',
    beneficiaires: 1150,
    beneficiairesLabel: 'jeunes et femmes bénéficiaires (THIMO & AVEC)',
    image: images.pejedecBanqueMondiale,
    summary:
      'Mise en œuvre des Travaux à Haute Intensité de Main-d’Œuvre (THIMO), structuration des Associations Villageoises d’Épargne et de Crédit (AVEC) et autonomisation économique dans la région de la Bagoué.',
    objectifs: [
      'Offrir des opportunités d’emploi temporaire et de revenu immédiat via les THIMO',
      'Structurer les bénéficiaires en Associations Villageoises d’Épargne et de Crédit (AVEC)',
      'Accompagner la création et la pérennisation d’Activités Génératrices de Revenus (AGR)',
    ],
    activites: [
      'Recrutement transparent et encadrement des brigadiers THIMO avec les collectivités de la Bagoué',
      'Formation à l’éducation financière, à la culture de l’épargne et à la méthodologie AVEC',
      'Appui au montage de micro-projets et coaching post-installation des AGR',
    ],
    resultats: [
      '1 150 jeunes et femmes accompagnés dans les départements de Boundiali, Kouto et Tengrela',
      'Plus de 45 groupements AVEC fonctionnels et autonomes',
      'Forte pérennité des activités économiques financées grâce à l’épargne mobilisée',
    ],
    indicateurs: [
      { label: 'Bénéficiaires THIMO & AVEC accompagnés', cible: 1100, atteint: 1150 },
      { label: 'Groupements AVEC opérationnels', cible: 45, atteint: 45 },
      { label: 'Taux d’exécution contractuelle', cible: 100, atteint: 100, unite: '%' },
    ],
    tauxRealisation: 100,
    dateReferenceTaux: 'Projet achevé et capitalisé',
    lecons: [
      'L’articulation entre les revenus THIMO et la mise en place immédiate des AVEC sécurise l’épargne productive des jeunes.',
      'L’ancrage auprès des mairies et sous-préfectures de la Bagoué facilite le suivi post-projet.',
    ],
  },

  /* 4. PEJEDEC II et III — Région de l’Agnéby-Tiassa (Observation 4) */
  {
    slug: 'pejedec-agneby-tiassa',
    name: 'PEJEDEC II & III — Agnéby-Tiassa',
    fullName: 'Projet Emploi Jeunes et Développement des Compétences (PEJEDEC II & III) dans la Région de l’Agnéby-Tiassa',
    status: 'acheve',
    domain: 'entrepreneuriat-insertion',
    regions: ['agneby-tiassa'],
    zone: 'Région de l’Agnéby-Tiassa (Agboville, Tiassalé, Sikensi, Taabo)',
    partners: ['banque-mondiale', 'aej', 'collectivites-locales'],
    periode: 'Phases II & III (Achevé)',
    duree: '36 mois',
    budget: 'Convention PEJEDEC / Banque mondiale & BCP-Emploi',
    beneficiaires: 920,
    beneficiairesLabel: 'jeunes formés et insérés',
    image: images.pejedecThimo,
    summary:
      'Programme d’insertion socio-économique des jeunes par les activités THIMO, le développement des compétences entrepreneuriales et l’installation de micro-entreprises dans la région de l’Agnéby-Tiassa.',
    objectifs: [
      'Favoriser l’insertion socio-économique durable des jeunes peu ou pas qualifiés de l’Agnéby-Tiassa',
      'Renforcer les compétences techniques, civiques et entrepreneuriales des bénéficiaires',
      'Accompagner l’installation effective et le suivi des activités génératrices de revenus',
    ],
    activites: [
      'Encadrement des chantiers THIMO d’utilité publique en partenariat avec les collectivités locales',
      'Formations en entrepreneuriat, gestion simplifiée et compétences de vie',
      'Remise de kits et accompagnement de proximité des jeunes entrepreneurs installés',
    ],
    resultats: [
      '920 jeunes formés, encadrés et insérés dans la région de l’Agnéby-Tiassa',
      '410 activités génératrices de revenus (AGR) et micro-entreprises installées',
      '78 % des activités économiques toujours actives 12 mois après la clôture',
    ],
    indicateurs: [
      { label: 'Jeunes insérés (Agnéby-Tiassa)', cible: 900, atteint: 920 },
      { label: 'Micro-entreprises & AGR créées', cible: 400, atteint: 410 },
      { label: 'Activités pérennes à 12 mois', cible: 70, atteint: 78, unite: '%' },
    ],
    tauxRealisation: 100,
    dateReferenceTaux: 'Projet achevé et évalué',
    temoignage: {
      quote: 'Grâce à l’encadrement du projet PEJEDEC avec EICF, j’ai pu structurer mon épargne et lancer mon atelier qui emploie aujourd’hui deux jeunes.',
      author: 'Kouadio M.',
      role: 'Jeune entrepreneur bénéficiaire · Agboville (Agnéby-Tiassa)',
    },
    lecons: [
      'Le coaching individuel pendant les six premiers mois d’exploitation est déterminant pour la survie des micro-entreprises.',
    ],
  },

  /* 5. Projet AVEC-AEJ — Région du Folon (Observation 4) */
  {
    slug: 'avec-aej-folon',
    name: 'AVEC-AEJ — Folon',
    fullName: 'Projet d’Accompagnement des AVEC et d’Autonomisation Économique dans la Région du Folon',
    status: 'acheve',
    domain: 'autonomisation-femmes-jeunes',
    regions: ['folon'],
    zone: 'Région du Folon (Minignan, Kaniasso)',
    partners: ['aej', 'ministere-solidarite', 'groupements-avec'],
    periode: 'Convention exécutée (Achevé)',
    duree: '24 mois',
    budget: 'Convention Agence Emploi Jeunes (AEJ)',
    beneficiaires: 860,
    beneficiairesLabel: 'membres d’AVEC accompagnés',
    image: images.femmes,
    summary:
      'Mise en place, formation et accompagnement d’Associations Villageoises d’Épargne et de Crédit (AVEC) pour l’inclusion financière et l’autonomisation économique des femmes et des jeunes dans la région du Folon.',
    objectifs: [
      'Promouvoir l’inclusion financière des femmes et des jeunes en milieu rural par le modèle AVEC',
      'Renforcer les capacités de gestion, de gouvernance interne et de tenue des cycles d’épargne-crédit',
      'Financer le développement d’activités agricoles, commerciales et artisanales locales',
    ],
    activites: [
      'Diagnostic villageois, constitution et équipement de 35 groupements AVEC (caisses, registres)',
      'Formation des comités de gestion et des agents villageois aux cycles d’épargne et d’octroi de prêts',
      'Coaching économique pour la diversification et la rentabilité des AGR des membres',
    ],
    resultats: [
      '35 Associations Villageoises d’Épargne et de Crédit (AVEC) structurées dans le Folon',
      '860 membres actifs (dont 76 % de femmes) autonomisés financièrement',
      'Taux de remboursement des prêts internes supérieur à 98 % au sein des caisses villageoises',
    ],
    indicateurs: [
      { label: 'Groupements AVEC mis en place', cible: 35, atteint: 35 },
      { label: 'Membres formés et actifs', cible: 800, atteint: 860 },
      { label: 'Taux de remboursement interne', cible: 95, atteint: 98, unite: '%' },
    ],
    tauxRealisation: 100,
    dateReferenceTaux: 'Projet achevé',
    lecons: [
      'La formation d’agents villageois issus des communautés assure la continuité des cycles AVEC après le retrait de l’ONG.',
    ],
  },

  /* 6. Projet CLEF / Classes passerelles — Région de San Pédro (Observation 4) */
  {
    slug: 'classes-passerelles',
    name: 'CLEF / Classes passerelles',
    fullName: 'Projet CLEF — Classes passerelles, Éducation et Réinsertion scolaire (San Pédro & régions cibles)',
    status: 'acheve',
    domain: 'education-formation-alphabetisation',
    regions: ['san-pedro', 'bounkani', 'bere'],
    zone: 'Région de San Pédro · Bounkani · Béré',
    partners: ['clef-unicef', 'ministere-education', 'ecoles-structures'],
    periode: '2020 – 2024 (Achevé)',
    duree: '36 mois',
    budget: 'Convention Programme CLEF / Partenaires Éducation',
    beneficiaires: 5200,
    beneficiairesLabel: 'enfants scolarisés et réinsérés',
    image: images.education,
    summary:
      'Mise en place et animation de classes passerelles d’éducation accélérée permettant aux enfants de 9 à 14 ans déscolarisés ou non scolarisés de réintégrer le cursus primaire formel, notamment dans la région de San Pédro.',
    objectifs: [
      'Identifier et réinsérer les enfants hors école dans le système éducatif officiel',
      'Former et superviser les animateurs pédagogiques en lien avec les DRENA et IEPP',
      'Sensibiliser les communautés rurales à la protection de l’enfant et à l’importance de la scolarisation',
    ],
    activites: [
      'Ouverture et équipement de 120 classes passerelles dans les localités rurales',
      'Formation pédagogique des animateurs et distribution de kits scolaires complets',
      'Mise en place et redynamisation des Comités de Gestion Scolaire (COGES) et comités de veille',
    ],
    resultats: [
      '5 200 enfants pris en charge dans les classes passerelles',
      '87 % des élèves évalués admis à rejoindre les classes du cycle primaire formel',
      '52 % de filles parmi les enfants bénéficiaires',
    ],
    indicateurs: [
      { label: 'Enfants inscrits en classes passerelles', cible: 5000, atteint: 5200 },
      { label: 'Taux de réinsertion en école formelle', cible: 80, atteint: 87, unite: '%' },
      { label: 'Classes passerelles ouvertes', cible: 120, atteint: 120 },
    ],
    tauxRealisation: 100,
    dateReferenceTaux: 'Projet achevé',
    temoignage: {
      quote: 'Grâce à la classe passerelle ouverte dans notre campement, mon fils a rattrapé deux niveaux en une année et poursuit aujourd’hui au CM1.',
      author: 'Issouf T.',
      role: 'Parent d’élève · Zone rurale de San Pédro',
    },
    lecons: [
      'La collaboration étroite avec les Inspections de l’Enseignement Préscolaire et Primaire (IEPP) garantit le transfert fluide vers l’école publique.',
    ],
  },

  /* 7. Projet PDDIVS — Commune de Bouna (Observation 4) */
  {
    slug: 'pddivs-bouna',
    name: 'PDDIVS — Bouna',
    fullName: 'Projet de Développement Durable et Inclusif des Villes Secondaires (PDDIVS) dans la Commune de Bouna',
    status: 'acheve',
    domain: 'developpement-social-communautaire',
    regions: ['bounkani'],
    zone: 'Commune de Bouna · Région du Bounkani',
    partners: ['collectivites-locales', 'comites-chefferies'],
    periode: 'Convention exécutée (Achevé)',
    duree: '24 mois',
    budget: 'Convention PDDIVS — Commune de Bouna',
    beneficiaires: 6800,
    beneficiairesLabel: 'citoyens et usagers de la commune de Bouna',
    image: images.assembleeVillage,
    summary:
      'Accompagnement de la commune de Bouna pour un développement urbain durable, participatif et inclusif : gouvernance locale, cadre de vie, résilience environnementale et inclusion des jeunes et des femmes.',
    objectifs: [
      'Renforcer la participation citoyenne des quartiers, des femmes et des jeunes à la gouvernance communale de Bouna',
      'Promouvoir la salubrité urbaine, la préservation de l’environnement et la gestion durable des infrastructures locales',
      'Soutenir l’inclusion socio-économique des groupes vulnérables au sein de la ville secondaire de Bouna',
    ],
    activites: [
      'Cadres de concertation citoyenne entre la mairie de Bouna, les chefs de quartiers et les associations',
      'Actions pilotes d’assainissement urbain, de sensibilisation environnementale et de reboisement communal',
      'Renforcement des capacités des comités de gestion des équipements collectifs',
    ],
    resultats: [
      'Dispositif de participation citoyenne opérationnel dans les quartiers de la commune de Bouna',
      '6 800 résidents touchés par les actions de salubrité, d’inclusion et de développement urbain durable',
      'Intégration des priorités communautaires dans la planification locale',
    ],
    indicateurs: [
      { label: 'Quartiers et secteurs mobilisés à Bouna', cible: 12, atteint: 12 },
      { label: 'Bénéficiaires sensibilisés et impliqués', cible: 6500, atteint: 6800 },
      { label: 'Exécution des activités communales', cible: 100, atteint: 100, unite: '%' },
    ],
    tauxRealisation: 100,
    dateReferenceTaux: 'Projet achevé',
    lecons: [
      'L’implication conjointe des autorités municipales et de la chefferie traditionnelle de Bouna assure la pérennité des comités de quartier.',
    ],
  },

  /* 8. Programmes PNUD — Régions du Tonkpi et du Cavally (Observation 4) */
  {
    slug: 'pnud-tonkpi-cavally',
    name: 'Programmes PNUD — Tonkpi & Cavally',
    fullName: 'Programmes de Paix, Cohésion Sociale et Entrepreneuriat dans les Régions du Tonkpi et du Cavally',
    status: 'acheve',
    domain: 'paix-cohesion-sociale',
    regions: ['tonkpi', 'cavally'],
    zone: 'Régions du Tonkpi (Man, Danané) et du Cavally (Guiglo, Blolequin)',
    partners: ['pnud', 'ministere-solidarite', 'collectivites-locales', 'comites-chefferies'],
    periode: 'Conventions exécutées (Achevé)',
    duree: '24 mois',
    budget: 'Conventions PNUD Côte d’Ivoire',
    beneficiaires: 9500,
    beneficiairesLabel: 'membres des communautés, jeunes et femmes',
    image: images.dialoguePaix,
    summary:
      'Intervention intégrée dans l’Ouest de la Côte d’Ivoire associant le dialogue intercommunautaire, la prévention pacifique des conflits fonciers et l’entrepreneuriat collectif des jeunes et des femmes.',
    objectifs: [
      'Renforcer les mécanismes endogènes de prévention et de gestion pacifique des conflits dans le Tonkpi et le Cavally',
      'Promouvoir des initiatives entrepreneuriales mixtes (AGR collectives) réunissant jeunes et femmes de différentes communautés',
      'Consolider la confiance entre les populations, les autorités locales et les forces vives',
    ],
    activites: [
      'Formation de médiateurs communautaires et animation de forums de dialogue intercommunautaire',
      'Création et financement de groupements entrepreneuriaux mixtes porteurs de paix',
      'Campagnes de sensibilisation citoyenne au vivre-ensemble et à la cohésion sociale',
    ],
    resultats: [
      '42 localités du Tonkpi et du Cavally dotées de cadres de dialogue et de médiation',
      '9 500 personnes touchées par les activités de cohésion sociale et d’entrepreneuriat',
      'Développement d’AGR communautaires fédératrices réduisant la vulnérabilité des jeunes',
    ],
    indicateurs: [
      { label: 'Localités couvertes (Tonkpi & Cavally)', cible: 40, atteint: 42 },
      { label: 'Médiateurs et leaders formés', cible: 80, atteint: 92 },
      { label: 'Taux de réalisation du programme', cible: 100, atteint: 100, unite: '%' },
    ],
    tauxRealisation: 100,
    dateReferenceTaux: 'Programme achevé',
    lecons: [
      'Adosser le dialogue social à des projets économiques communs (entrepreneuriat mixte) ancre concrètement la paix au quotidien.',
    ],
  },

  /* 9. Projet GIZ — Bouna (Observation 4) */
  {
    slug: 'giz-bouna',
    name: 'Projet GIZ — Bouna',
    fullName: 'Projet de Renforcement de la Paix et de la Cohésion Sociale à Bouna (Région du Bounkani)',
    status: 'acheve',
    domain: 'paix-cohesion-sociale',
    regions: ['bounkani'],
    zone: 'Département de Bouna · Région du Bounkani',
    partners: ['giz', 'collectivites-locales', 'comites-chefferies'],
    periode: 'Convention exécutée (Achevé)',
    duree: '18 mois',
    budget: 'Convention Coopération allemande (GIZ)',
    beneficiaires: 5900,
    beneficiairesLabel: 'participants aux cadres de dialogue et de cohésion',
    image: images.sensibilisationPaix,
    summary:
      'Promotion du dialogue intercommunautaire, prévention des tensions liées à l’accès aux ressources naturelles et renforcement de la cohésion sociale dans la zone frontalière de Bouna.',
    objectifs: [
      'Prévenir les conflits liés à l’usage des ressources naturelles et renforcer le vivre-ensemble à Bouna',
      'Impliquer les jeunes, les femmes et les leaders coutumiers dans les mécanismes d’alerte précoce et de médiation',
      'Renforcer le dialogue entre les communautés hôtes, les éleveurs, les agriculteurs et les autorités locales',
    ],
    activites: [
      'Ateliers de formation à la médiation et à la communication non violente à Bouna',
      'Rencontres intercommunautaires sous l’égide du corps préfectoral et des chefferies',
      'Activités socioculturelles et sportives de rapprochement de la jeunesse',
    ],
    resultats: [
      '5 900 personnes sensibilisées et mobilisées autour de la paix dans le département de Bouna',
      '50 médiateurs et relais communautaires formés et équipés',
      'Apaisement durable des relations intercommunautaires dans les localités ciblées',
    ],
    indicateurs: [
      { label: 'Médiateurs locaux formés à Bouna', cible: 50, atteint: 50 },
      { label: 'Dialogues communautaires tenus', cible: 24, atteint: 26 },
      { label: 'Exécution des activités', cible: 100, atteint: 100, unite: '%' },
    ],
    tauxRealisation: 100,
    dateReferenceTaux: 'Projet achevé',
    lecons: [
      'La concertation régulière entre agriculteurs, éleveurs et autorités coutumières prévient efficacement l’escalade des différends locaux.',
    ],
  },

  /* 10. Projets en phase de conception (Appels à partenariat) */
  {
    slug: 'ecoles-vertes',
    name: 'ÉCOLES VERTES',
    fullName: 'Écoles vertes et résilientes du Gbêkê et du Poro',
    status: 'conception',
    domain: 'environnement-developpement-durable',
    regions: ['gbeke', 'poro'],
    zone: 'Gbêkê · Poro',
    partners: ['ministere-education'],
    periode: '2027 – 2029 (Phase de conception)',
    duree: '36 mois',
    budget: 'Ouvert au cofinancement',
    beneficiaires: 7500,
    beneficiairesLabel: 'élèves ciblés',
    image: images.education,
    summary: 'Transformer 12 écoles rurales en lieux d’apprentissage écologique : jardins scolaires nutritifs, reboisement et énergie solaire.',
    objectifs: ['Créer 12 jardins scolaires nutritifs', 'Planter 20 000 arbres', 'Équiper les écoles en énergie solaire'],
    activites: ['Clubs environnement', 'Jardins et cantines scolaires', 'Kits solaires', 'Formation des enseignants'],
    resultats: ['Résultats attendus : 7 500 élèves sensibilisés, 12 écoles labellisées'],
    indicateurs: [],
    problematique: 'Dégradation du couvert végétal et faible résilience climatique des écoles rurales.',
    besoinFinancement: 'Étude de faisabilité disponible sur demande',
    financementAcquis: 15,
  },
  {
    slug: 'karite-femmes',
    name: 'KARITÉ & FEMMES',
    fullName: 'Chaîne de valeur karité pour les coopératives féminines du Nord',
    status: 'conception',
    domain: 'entrepreneuriat-insertion',
    regions: ['poro', 'bagoue'],
    zone: 'Poro · Bagoué (Nord)',
    partners: ['groupements-avec'],
    periode: '2027 – 2029 (Phase de conception)',
    duree: '30 mois',
    budget: 'Ouvert au cofinancement',
    beneficiaires: 1600,
    beneficiairesLabel: 'productrices ciblées',
    image: images.femmes,
    summary: 'Structurer 20 coopératives de femmes issues des AVEC autour de la transformation et de la commercialisation certifiée du beurre de karité.',
    objectifs: ['Équiper 20 unités de transformation semi-mécanisées', 'Certifier la qualité des produits', 'Accéder aux marchés nationaux et régionaux'],
    activites: ['Équipements de transformation', 'Formation qualité et gestion', 'Plateforme de commercialisation', 'Renforcement des AVEC'],
    resultats: ['Résultats attendus : +40 % de revenus pour 1 600 productrices'],
    indicateurs: [],
    problematique: 'Faible valeur ajoutée captée par les productrices rurales de karité.',
    besoinFinancement: 'Note conceptuelle disponible pour les bailleurs',
    financementAcquis: 30,
  },
  {
    slug: 'urgence-inondations',
    name: 'RÉSILIGENCE & URGENCES',
    fullName: 'Préparation communautaire et réponse aux urgences climatiques',
    status: 'conception',
    domain: 'action-humanitaire-urgences',
    regions: ['abidjan', 'tonkpi'],
    zone: 'District d’Abidjan · Tonkpi',
    partners: [],
    periode: '2027 (Phase de conception)',
    duree: '12 mois',
    budget: 'Ouvert au cofinancement',
    beneficiaires: 2300,
    beneficiairesLabel: 'ménages ciblés',
    image: images.communaute,
    summary: 'Former des équipes communautaires de veille et pré-positionner des dispositifs d’alerte face aux inondations saisonnières.',
    objectifs: ['Former 60 relais communautaires de protection civile', 'Cartographier les zones à risque', 'Sensibiliser 2 300 ménages vulnérables'],
    activites: ['Cartographie participative des risques', 'Formation premiers secours et WASH d’urgence', 'Plans de contingence locaux'],
    resultats: ['Résultats attendus : délai d’alerte et d’assistance réduit à moins de 48 h'],
    indicateurs: [],
    problematique: 'Inondations récurrentes touchant les quartiers et villages vulnérables pendant la saison des pluies.',
    besoinFinancement: 'Note conceptuelle disponible pour les bailleurs',
    financementAcquis: 10,
  },
]

/* ------------------------------------------------------------------ */
/* Cartographie : Région → Département → Sous-préfecture → Localité    */
/* ------------------------------------------------------------------ */

export type Localite = { name: string; projects: string[]; detail: string }
export type SousPrefecture = { name: string; localites: Localite[] }
export type Departement = { name: string; sousPrefectures: SousPrefecture[] }
export type Region = {
  id: string
  name: string
  chefLieu: string
  zone: 'Nord' | 'Nord-Est' | 'Centre' | 'Est' | 'Ouest' | 'Sud'
  lat: number
  lng: number
  departements: Departement[]
}

export const regions: Region[] = [
  {
    id: 'hambol',
    name: 'Hambol',
    chefLieu: 'Katiola',
    zone: 'Centre',
    lat: 8.14,
    lng: -5.1,
    departements: [
      {
        name: 'Katiola',
        sousPrefectures: [
          { name: 'Fronan', localites: [{ name: 'Fronan & villages rattachés', projects: ['pasea'], detail: '4 villages · 312 latrines · TPE locales' }] },
          { name: 'Timbé', localites: [{ name: 'Timbé & villages rattachés', projects: ['pasea'], detail: '3 villages · 254 latrines · TPE locales' }] },
          { name: 'Katiola', localites: [{ name: 'Katiola (zone rurale)', projects: ['pasea'], detail: '3 villages · 222 latrines · 9 TPE accompagnées au total' }] },
        ],
      },
    ],
  },
  {
    id: 'bounkani',
    name: 'Bounkani',
    chefLieu: 'Bouna',
    zone: 'Nord-Est',
    lat: 9.27,
    lng: -3.0,
    departements: [
      {
        name: 'Bouna',
        sousPrefectures: [
          { name: 'Bouna (Commune & S/P)', localites: [{ name: 'Bouna', projects: ['swedd', 'pddivs-bouna', 'giz-bouna'], detail: 'Espaces sûrs SWEDD · PDDIVS ville secondaire · Projet Paix GIZ' }] },
          { name: 'Ondéfidouo', localites: [{ name: 'Ondéfidouo', projects: ['swedd', 'giz-bouna'], detail: 'Espaces sûrs SWEDD · Dialogues communautaires' }] },
        ],
      },
      {
        name: 'Doropo',
        sousPrefectures: [
          { name: 'Doropo', localites: [{ name: 'Doropo', projects: ['classes-passerelles', 'swedd'], detail: 'Classes passerelles & autonomisation des filles' }] },
        ],
      },
      {
        name: 'Téhini',
        sousPrefectures: [
          { name: 'Téhini', localites: [{ name: 'Téhini', projects: ['classes-passerelles', 'giz-bouna'], detail: 'Classes passerelles & cohésion sociale' }] },
        ],
      },
    ],
  },
  {
    id: 'gontougo',
    name: 'Gontougo',
    chefLieu: 'Bondoukou',
    zone: 'Nord-Est',
    lat: 8.04,
    lng: -2.8,
    departements: [
      {
        name: 'Bondoukou',
        sousPrefectures: [
          { name: 'Bondoukou', localites: [{ name: 'Bondoukou & localités', projects: ['swedd'], detail: 'Espaces sûrs SWEDD (2022–2024) & maintien scolaire' }] },
        ],
      },
      {
        name: 'Tanda',
        sousPrefectures: [
          { name: 'Tanda', localites: [{ name: 'Tanda', projects: ['swedd'], detail: 'Autonomisation des femmes et des adolescentes' }] },
        ],
      },
    ],
  },
  {
    id: 'bagoue',
    name: 'Bagoué',
    chefLieu: 'Boundiali',
    zone: 'Nord',
    lat: 9.52,
    lng: -6.48,
    departements: [
      {
        name: 'Boundiali',
        sousPrefectures: [
          { name: 'Boundiali', localites: [{ name: 'Boundiali', projects: ['pejedec-bagoue', 'karite-femmes'], detail: 'PEJEDEC II & III : THIMO, AVEC et autonomisation économique' }] },
        ],
      },
      {
        name: 'Kouto & Tengrela',
        sousPrefectures: [
          { name: 'Kouto / Tengrela', localites: [{ name: 'Kouto & Tengrela', projects: ['pejedec-bagoue'], detail: 'Groupements AVEC et AGR des jeunes et des femmes' }] },
        ],
      },
    ],
  },
  {
    id: 'folon',
    name: 'Folon',
    chefLieu: 'Minignan',
    zone: 'Nord',
    lat: 9.99,
    lng: -7.83,
    departements: [
      {
        name: 'Minignan & Kaniasso',
        sousPrefectures: [
          { name: 'Minignan', localites: [{ name: 'Minignan & villages', projects: ['avec-aej-folon'], detail: 'Projet AVEC-AEJ : 35 AVEC et autonomisation économique' }] },
          { name: 'Kaniasso', localites: [{ name: 'Kaniasso', projects: ['avec-aej-folon'], detail: 'Accompagnement des AVEC et micro-entreprises rurales' }] },
        ],
      },
    ],
  },
  {
    id: 'agneby-tiassa',
    name: 'Agnéby-Tiassa',
    chefLieu: 'Agboville',
    zone: 'Sud',
    lat: 5.93,
    lng: -4.21,
    departements: [
      {
        name: 'Agboville & Tiassalé',
        sousPrefectures: [
          { name: 'Agboville', localites: [{ name: 'Agboville', projects: ['pejedec-agneby-tiassa'], detail: 'PEJEDEC II & III : Insertion socio-économique des jeunes' }] },
          { name: 'Tiassalé / Sikensi', localites: [{ name: 'Tiassalé & Sikensi', projects: ['pejedec-agneby-tiassa'], detail: 'Formation entrepreneuriale et installation de 410 AGR' }] },
        ],
      },
    ],
  },
  {
    id: 'belier-nzi-moronou-iffou',
    name: 'Bélier · N’Zi · Moronou · Iffou',
    chefLieu: 'Yamoussoukro / Dimbokro / Bongouanou / Daoukro',
    zone: 'Centre',
    lat: 6.65,
    lng: -4.7,
    departements: [
      {
        name: 'Bélier & N’Zi',
        sousPrefectures: [
          { name: 'Toumodi / Dimbokro', localites: [{ name: 'Localités Bélier & N’Zi', projects: ['swedd'], detail: 'Programme SWEDD (2022–2024) : espaces sûrs et autonomisation' }] },
        ],
      },
      {
        name: 'Moronou & Iffou',
        sousPrefectures: [
          { name: 'Bongouanou / Daoukro', localites: [{ name: 'Localités Moronou & Iffou', projects: ['swedd'], detail: 'Programme SWEDD (2022–2024) : maintien scolaire et leadership féminin' }] },
        ],
      },
    ],
  },
  {
    id: 'san-pedro',
    name: 'San Pédro',
    chefLieu: 'San Pédro',
    zone: 'Sud',
    lat: 4.75,
    lng: -6.64,
    departements: [
      {
        name: 'San Pédro & Tabou',
        sousPrefectures: [
          { name: 'San Pédro (zones rurales)', localites: [{ name: 'Localités cacaoyères de San Pédro', projects: ['classes-passerelles'], detail: 'Projet CLEF / Classes passerelles : éducation et réinsertion scolaire' }] },
        ],
      },
    ],
  },
  {
    id: 'tonkpi',
    name: 'Tonkpi',
    chefLieu: 'Man',
    zone: 'Ouest',
    lat: 7.41,
    lng: -7.55,
    departements: [
      {
        name: 'Man & Danané',
        sousPrefectures: [
          { name: 'Man', localites: [{ name: 'Man & sous-préfectures', projects: ['pnud-tonkpi-cavally', 'urgence-inondations'], detail: 'Programmes PNUD : Paix, cohésion sociale et entrepreneuriat' }] },
        ],
      },
    ],
  },
  {
    id: 'cavally',
    name: 'Cavally',
    chefLieu: 'Guiglo',
    zone: 'Ouest',
    lat: 6.54,
    lng: -7.49,
    departements: [
      {
        name: 'Guiglo & Blolequin',
        sousPrefectures: [
          { name: 'Guiglo / Blolequin', localites: [{ name: 'Localités du Cavally', projects: ['pnud-tonkpi-cavally'], detail: 'Programmes PNUD : Dialogues intercommunautaires et AGR mixtes' }] },
        ],
      },
    ],
  },
  {
    id: 'poro',
    name: 'Poro',
    chefLieu: 'Korhogo',
    zone: 'Nord',
    lat: 9.46,
    lng: -5.63,
    departements: [
      {
        name: 'Korhogo',
        sousPrefectures: [
          { name: 'Korhogo', localites: [{ name: 'Korhogo', projects: ['ecoles-vertes', 'karite-femmes'], detail: 'Base opérationnelle Nord · Coopératives féminines & écoles vertes' }] },
        ],
      },
    ],
  },
  {
    id: 'bere',
    name: 'Béré',
    chefLieu: 'Mankono',
    zone: 'Centre',
    lat: 8.06,
    lng: -6.19,
    departements: [
      {
        name: 'Mankono',
        sousPrefectures: [
          { name: 'Mankono', localites: [{ name: 'Mankono', projects: ['classes-passerelles'], detail: '30 classes passerelles et réinsertion scolaire' }] },
        ],
      },
    ],
  },
  {
    id: 'gbeke',
    name: 'Gbêkê',
    chefLieu: 'Bouaké',
    zone: 'Centre',
    lat: 7.69,
    lng: -5.03,
    departements: [
      {
        name: 'Bouaké',
        sousPrefectures: [
          { name: 'Bouaké', localites: [{ name: 'Bouaké', projects: ['ecoles-vertes'], detail: 'Programme Écoles vertes et résilience climatique' }] },
        ],
      },
    ],
  },
  {
    id: 'abidjan',
    name: 'District d’Abidjan',
    chefLieu: 'Abidjan',
    zone: 'Sud',
    lat: 5.36,
    lng: -4.01,
    departements: [
      {
        name: 'Abidjan (Siège national)',
        sousPrefectures: [
          { name: 'Cocody Angré', localites: [{ name: 'Siège social national EICF', projects: ['urgence-inondations'], detail: 'Direction Exécutive & coordination nationale depuis le 1er février 2008' }] },
        ],
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Actualités & événements (Observation 6.D : date, lieu, photo)       */
/* ------------------------------------------------------------------ */

export const newsCategories = [
  'Actualités EICF',
  'Activités terrain',
  'Cérémonies',
  'Missions',
  'Formations',
  'Communiqués',
  'Événements',
  'Témoignages',
] as const
export type NewsCategory = (typeof newsCategories)[number]

export type NewsItem = {
  slug: string
  title: string
  date: string
  location?: string
  category: NewsCategory
  image: string
  excerpt: string
  project?: string
  body: string[]
}

export const news: NewsItem[] = [
  {
    slug: 'katiola-pasea-tpe-latrines',
    title: 'PASEA à Katiola : 9 TPE locales accompagnées et 788 latrines familiales dans 10 villages',
    date: '2026-10-16',
    location: 'Katiola, Région du Hambol',
    category: 'Activités terrain',
    image: images.latrines,
    project: 'pasea',
    excerpt:
      'Dans le département de Katiola (Hambol), l’ONG EICF accompagne 9 Très Petites Entreprises (TPE) locales pour la réalisation de 788 latrines familiales au profit de 8 400 bénéficiaires.',
    body: [
      'Lieu : Département de Katiola (Sous-préfectures de Katiola, Fronan et Timbé), Région du Hambol.',
      'Dans le cadre de la mise en œuvre opérationnelle du Projet d’Amélioration des Services d’Eau et d’Assainissement (PASEA), l’ONG EICF déploie une approche conjuguant mobilisation communautaire et renforcement du tissu économique local.',
      'Neuf (9) Très Petites Entreprises (TPE) locales ont été formées, encadrées et accompagnées par les équipes techniques d’EICF pour assurer la construction conforme de 788 latrines familiales réparties dans 10 villages.',
      'Au total, 8 400 personnes bénéficient d’ouvrages d’assainissement dignes et durables, soutenus par des comités villageois d’hygiène actifs.',
    ],
  },
  {
    slug: 'mission-supervision-bm',
    title: 'Mission conjointe de supervision de terrain avec les partenaires du projet PASEA à Katiola',
    date: '2026-08-28',
    location: 'Fronan & Timbé (Katiola, Hambol)',
    category: 'Missions',
    image: images.missionPartenaires,
    project: 'pasea',
    excerpt:
      'Visite de supervision des chantiers d’assainissement familial et revue du travail des 9 TPE accompagnées dans les villages de Katiola.',
    body: [
      'Lieu : Villages d’intervention du département de Katiola (Région du Hambol).',
      'La mission conjointe de supervision a parcouru les localités bénéficiaires afin de vérifier la qualité physique des ouvrages réalisés, l’application des sauvegardes environnementales et sociales (PGES) et le niveau d’appropriation par les ménages.',
      'Les échanges avec les chefs de villages, les comités d’hygiène et les responsables des 9 TPE accompagnées ont mis en lumière la rigueur du suivi de proximité assuré par la base opérationnelle d’EICF à Katiola.',
    ],
  },
  {
    slug: 'capitalisation-swedd-6-regions',
    title: 'Bilan de clôture SWEDD (2022–2024) : 6 régions couvertes pour l’autonomisation des femmes et des adolescentes',
    date: '2025-01-20',
    location: 'Bounkani, Gontougo, Bélier, N’Zi, Moronou, Iffou',
    category: 'Actualités EICF',
    image: images.swedd,
    project: 'swedd',
    excerpt:
      'Officiellement clôturé le 31 décembre 2024 après 3 années d’exécution (2022–2024), le contrat SWEDD conduit par EICF affiche un bilan exemplaire dans 6 régions.',
    body: [
      'Lieu : Régions du Bounkani, du Gontougo, du Bélier, du N’Zi, du Moronou et de l’Iffou.',
      'Signé en octobre 2021 pour une durée contractuelle de trois ans (2022–2024) et clôturé le 31 décembre 2024, le projet exécuté par l’ONG EICF dans le cadre du programme SWEDD a permis d’encadrer 1 850 adolescentes et jeunes femmes au sein de 74 espaces sûrs.',
      'Grâce à l’engagement des mentores communautaires et des comités de parents, le taux de maintien scolaire des jeunes filles accompagnées a atteint 96 %.',
    ],
  },
  {
    slug: 'bilan-pejedec-bagoue-agneby-tiassa',
    title: 'Capitalisation PEJEDEC II & III et AVEC-AEJ : l’impact durable des THIMO et des AVEC',
    date: '2025-04-12',
    location: 'Bagoué, Agnéby-Tiassa & Folon',
    category: 'Formations',
    image: images.pejedecThimo,
    project: 'pejedec-bagoue',
    excerpt:
      'Retour sur l’expérience accumulée par EICF dans l’insertion socio-économique des jeunes et la structuration des AVEC dans la Bagoué, l’Agnéby-Tiassa et le Folon.',
    body: [
      'Lieu : Régions de la Bagoué (Boundiali), de l’Agnéby-Tiassa (Agboville) et du Folon (Minignan).',
      'À travers les phases II et III du projet PEJEDEC ainsi que le projet AVEC-AEJ, l’ONG EICF a démontré sa capacité à articuler les Travaux à Haute Intensité de Main-d’Œuvre (THIMO), la création d’Associations Villageoises d’Épargne et de Crédit (AVEC) et l’installation de micro-entreprises durables.',
      'Plus de 2 900 jeunes et femmes ont ainsi été accompagnés vers l’autonomie économique dans ces trois régions.',
    ],
  },
  {
    slug: 'cohesion-sociale-pnud-giz-bouna-tonkpi',
    title: 'Paix et cohésion sociale : retour sur les programmes PNUD (Tonkpi, Cavally) et GIZ (Bouna)',
    date: '2025-06-18',
    location: 'Man (Tonkpi), Guiglo (Cavally) & Bouna (Bounkani)',
    category: 'Cérémonies',
    image: images.dialoguePaix,
    project: 'pnud-tonkpi-cavally',
    excerpt:
      'Des mécanismes locaux de médiation et d’entrepreneuriat collectif mis en place avec l’appui du PNUD et de la GIZ pour consolider le vivre-ensemble.',
    body: [
      'Lieu : Régions du Tonkpi, du Cavally et commune de Bouna (Bounkani).',
      'La consolidation de la paix constitue un pilier historique de l’intervention d’EICF. Dans l’Ouest (Tonkpi et Cavally) avec le PNUD, comme dans le Nord-Est à Bouna avec la GIZ et le projet PDDIVS, l’ONG a formé plus de 140 médiateurs et soutenu des initiatives entrepreneuriales mixtes.',
    ],
  },
  {
    slug: 'classes-passerelles-clef-san-pedro',
    title: 'Projet CLEF / Classes passerelles à San Pédro : 87 % des enfants réinsérés dans le cursus formel',
    date: '2024-11-08',
    location: 'San Pédro, Bounkani & Béré',
    category: 'Témoignages',
    image: images.education,
    project: 'classes-passerelles',
    excerpt:
      'Grâce aux 120 classes passerelles animées par EICF avec le programme CLEF et le MENA, 5 200 enfants hors école ont retrouvé le chemin des apprentissages.',
    body: [
      'Lieu : Zones rurales de la région de San Pédro, du Bounkani et du Béré.',
      'En étroite coordination avec les Directions Régionales de l’Éducation Nationale et de l’Alphabétisation (DRENA), le dispositif de classes passerelles a permis d’offrir une seconde chance scolaire à 5 200 enfants âgés de 9 à 14 ans.',
    ],
  },
  {
    slug: 'communique-centre-documentaire-2026',
    title: 'Consolidation institutionnelle : mise en ligne du Centre documentaire pour les bailleurs et partenaires',
    date: '2026-07-15',
    location: 'Abidjan, Siège national EICF',
    category: 'Communiqués',
    image: images.signatureMinistere,
    excerpt:
      'Manuels de procédures financières, passation des marchés, politiques PSEA/MGP et rapports d’activités sont désormais regroupés au sein du centre de ressources.',
    body: [
      'Lieu : Siège social national de l’ONG EICF, Cocody Angré, Abidjan.',
      'Afin de faciliter les évaluations préalables (due diligence) des partenaires techniques et financiers, la Direction Exécutive met à disposition l’ensemble des documents statutaires, manuels de procédures et rapports de capitalisation.',
    ],
  },
  {
    slug: 'rencontre-partenaires-eicf-2026',
    title: 'Mobilisation des partenaires : présentation du portefeuille de projets EICF 2027–2030',
    date: '2026-11-10',
    location: 'Abidjan, Côte d’Ivoire',
    category: 'Événements',
    image: images.remiseAccord,
    excerpt:
      'L’ONG EICF présente à ses partenaires techniques et financiers ses nouvelles initiatives en conception, fortes de 18 années d’expérience terrain.',
    body: [
      'Lieu : Abidjan, Côte d’Ivoire.',
      'Cette rencontre institutionnelle met en lumière les résultats acquis depuis le 1er février 2008 et les opportunités de cofinancement dans les domaines de l’eau, de l’éducation, de l’agroforesterie et de l’autonomisation des femmes.',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Centre documentaire institutionnel (Observation 3.C — 12 documents) */
/* ------------------------------------------------------------------ */

export const docTypes = [
  'Gouvernance & Statuts',
  'Manuels & Procédures',
  'Politiques & Sauvegardes',
  'Rapports annuels & Audits',
  'Capitalisation des projets',
] as const
export type DocType = (typeof docTypes)[number]

export type DocumentItem = {
  slug: string
  title: string
  type: DocType
  year: number
  size: string
  accessLevel: 'Public — Téléchargement direct' | 'Communicable aux bailleurs (Due diligence)'
  project?: string
  domain?: string
  summary: string
}

export const documents: DocumentItem[] = [
  {
    slug: 'rapport-annuel-activites-2025',
    title: 'Rapport annuel d’activités EICF (Exercice 2025)',
    type: 'Rapports annuels & Audits',
    year: 2025,
    size: 'PDF · 6,2 Mo',
    accessLevel: 'Public — Téléchargement direct',
    summary: 'Bilan complet des activités opérationnelles, déploiement des bases régionales et gouvernance de l’ONG EICF.',
  },
  {
    slug: 'rapport-annuel-resultats-impact',
    title: 'Rapport annuel de résultats et de performance (KPI 2008–2026)',
    type: 'Rapports annuels & Audits',
    year: 2026,
    size: 'PDF · 4,8 Mo',
    accessLevel: 'Public — Téléchargement direct',
    summary: 'Synthèse consolidée des indicateurs d’impact par secteur (PASEA, SWEDD, PEJEDEC, CLEF, PNUD, GIZ, PDDIVS, AVEC-AEJ).',
  },
  {
    slug: 'presentation-institutionnelle-eicf',
    title: 'Présentation institutionnelle de l’ONG EICF (18 ans d’expérience · 2008–2026)',
    type: 'Gouvernance & Statuts',
    year: 2026,
    size: 'PDF · 3,5 Mo',
    accessLevel: 'Public — Téléchargement direct',
    summary: 'Plaquette de référence pour les bailleurs : historique depuis le 1er février 2008, capacités opérationnelles et références contractuelles.',
  },
  {
    slug: 'statuts-reglement-interieur-eicf',
    title: 'Statuts et Règlement Intérieur de l’ONG EICF',
    type: 'Gouvernance & Statuts',
    year: 2008,
    size: 'PDF · 2,1 Mo',
    accessLevel: 'Communicable aux bailleurs (Due diligence)',
    summary: 'Textes constitutifs adoptés à la création du 1er février 2008 et dispositions statutaires régissant les organes de l’ONG.',
  },
  {
    slug: 'organigramme-institutionnel-eicf',
    title: 'Organigramme institutionnel et fonctionnel officiel d’EICF',
    type: 'Gouvernance & Statuts',
    year: 2026,
    size: 'PDF · 1,2 Mo',
    accessLevel: 'Public — Téléchargement direct',
    summary: 'Structure officielle distinguant l’Assemblée Générale, le Conseil d’Administration, le Commissariat aux Comptes et les 5 départements de la Direction Exécutive.',
  },
  {
    slug: 'politique-psea-eicf',
    title: 'Politique de Prévention de l’Exploitation et des Abus Sexuels (PSEA)',
    type: 'Politiques & Sauvegardes',
    year: 2025,
    size: 'PDF · 1,6 Mo',
    accessLevel: 'Public — Téléchargement direct',
    summary: 'Charte Tolérance Zéro, code de conduite obligatoire du personnel et procédures de signalement sécurisé et confidentiel.',
  },
  {
    slug: 'politique-sauvegarde-enfant',
    title: 'Politique de Sauvegarde et de Protection de l’Enfant',
    type: 'Politiques & Sauvegardes',
    year: 2025,
    size: 'PDF · 1,8 Mo',
    accessLevel: 'Public — Téléchargement direct',
    summary: 'Standards de protection des mineurs, recueil du consentement parental, anonymisation et respect de la dignité des enfants bénéficiaires.',
  },
  {
    slug: 'manuel-procedures-admin-fin-comptables',
    title: 'Manuel de procédures administratives, financières et comptables',
    type: 'Manuels & Procédures',
    year: 2025,
    size: 'PDF · 5,4 Mo',
    accessLevel: 'Communicable aux bailleurs (Due diligence)',
    summary: 'Règles de contrôle interne, comptabilité analytique SYSCOHADA par bailleur, gestion de la trésorerie et élaboration des RSF.',
  },
  {
    slug: 'manuel-passation-marches',
    title: 'Manuel de passation des marchés et procédures d’acquisition',
    type: 'Manuels & Procédures',
    year: 2025,
    size: 'PDF · 3,8 Mo',
    accessLevel: 'Communicable aux bailleurs (Due diligence)',
    summary: 'Seuils de passation, appels d’offres, comités d’évaluation, gestion des contrats fournisseurs et prévention des conflits d’intérêts.',
  },
  {
    slug: 'rapports-audit-externe',
    title: 'Synthèse des rapports d’audit financier externe publiables',
    type: 'Rapports annuels & Audits',
    year: 2025,
    size: 'PDF · 2,9 Mo',
    accessLevel: 'Communicable aux bailleurs (Due diligence)',
    summary: 'Opinions d’audit indépendantes certifiant la régularité et la sincérité de la gestion financière des projets exécutés par EICF.',
  },
  {
    slug: 'politique-gestion-plaintes-mgp',
    title: 'Politique et Mécanisme de Gestion des Plaintes (MGP) & Sauvegardes PGES',
    type: 'Politiques & Sauvegardes',
    year: 2025,
    size: 'PDF · 1,9 Mo',
    accessLevel: 'Public — Téléchargement direct',
    summary: 'Dispositif d’enregistrement, de traitement et de résolution des plaintes communautaires et suivi des sauvegardes environnementales et sociales.',
  },
  {
    slug: 'capitalisation-swedd-2022-2024',
    title: 'Document de capitalisation — Projet SWEDD (2022–2024 · Clôturé le 31/12/2024)',
    type: 'Capitalisation des projets',
    year: 2025,
    size: 'PDF · 3,4 Mo',
    accessLevel: 'Public — Téléchargement direct',
    project: 'swedd',
    domain: 'autonomisation-femmes-jeunes',
    summary: 'Bilan final des 3 années d’intervention dans les régions Bounkani, Gontougo, Bélier, N’Zi, Moronou et Iffou.',
  },
  {
    slug: 'capitalisation-pasea-katiola',
    title: 'Note technique PASEA — Accompagnement de 9 TPE et 788 latrines dans 10 villages (Katiola)',
    type: 'Capitalisation des projets',
    year: 2026,
    size: 'PDF · 2,8 Mo',
    accessLevel: 'Public — Téléchargement direct',
    project: 'pasea',
    domain: 'eau-hygiene-assainissement',
    summary: 'Méthodologie d’encadrement des TPE locales d’assainissement et mobilisation des ménages dans la région du Hambol.',
  },
  {
    slug: 'capitalisation-pejedec-avec-aej',
    title: 'Document de capitalisation — PEJEDEC II & III (Bagoué, Agnéby-Tiassa) et AVEC-AEJ (Folon)',
    type: 'Capitalisation des projets',
    year: 2024,
    size: 'PDF · 3,2 Mo',
    accessLevel: 'Public — Téléchargement direct',
    project: 'pejedec-bagoue',
    domain: 'entrepreneuriat-insertion',
    summary: 'Résultats et leçons apprises sur les THIMO, les Associations Villageoises d’Épargne et de Crédit (AVEC) et l’insertion des jeunes.',
  },
  {
    slug: 'capitalisation-clef-pnud-giz-pddivs',
    title: 'Recueil de capitalisation — CLEF (San Pédro), PNUD (Tonkpi/Cavally), GIZ & PDDIVS (Bouna)',
    type: 'Capitalisation des projets',
    year: 2024,
    size: 'PDF · 4,1 Mo',
    accessLevel: 'Public — Téléchargement direct',
    project: 'classes-passerelles',
    domain: 'education-formation-alphabetisation',
    summary: 'Synthèse des acquis en réinsertion scolaire (classes passerelles), développement urbain inclusif et cohésion sociale.',
  },
]

export const media = {
  photos: [
    { src: images.terrain01, caption: 'Mobilisation communautaire et activités de terrain EICF en Côte d’Ivoire', project: 'gouvernance' },
    { src: images.terrain02, caption: 'Atelier participatif et sensibilisation des communautés locales', project: 'swedd' },
    { src: images.terrain03, caption: 'Session de formation et d’accompagnement des bénéficiaires', project: 'pejedec-bagoue' },
    { src: images.terrain04, caption: 'Mobilisation des jeunes et rencontres communautaires sur le terrain', project: 'pejedec-agneby-tiassa' },
    { src: images.terrain05, caption: 'Concertation avec les acteurs locaux et partenaires de terrain', project: 'pasea' },
    { src: images.terrain06, caption: 'Échanges communautaires et suivi de proximité par les équipes EICF', project: 'pnud-tonkpi-cavally' },
    { src: images.terrain07, caption: 'Action solidaire et appui direct aux populations vulnérables', project: 'classes-passerelles' },
    { src: images.signatureMinistere, caption: 'Cérémonie officielle de signature de convention avec les autorités nationales — Abidjan', project: 'gouvernance' },
    { src: images.missionPartenaires, caption: 'Mission conjointe de supervision de terrain avec les partenaires techniques et financiers', project: 'pasea' },
    { src: images.dialoguePaix, caption: 'Dialogue communautaire pour la paix et la cohésion sociale — Programmes PNUD & GIZ', project: 'pnud-tonkpi-cavally' },
    { src: images.pejedecJeunes, caption: 'Bénéficiaires du projet Emploi des Jeunes et Développement des Compétences (PEJEDEC II & III)', project: 'pejedec-agneby-tiassa' },
    { src: images.pejedecThimo, caption: 'Brigades THIMO et accompagnement de terrain — PEJEDEC Région de l’Agnéby-Tiassa', project: 'pejedec-agneby-tiassa' },
    { src: images.swedd, caption: 'Mobilisation communautaire et espaces sûrs du projet SWEDD (2022–2024)', project: 'swedd' },
    { src: images.assembleeVillage, caption: 'Assemblée villageoise participative et concertation locale — PDDIVS & développement communautaire', project: 'pddivs-bouna' },
    { src: images.groupeNotables, caption: 'Comité de développement villageois et chefferie traditionnelle mobilisés', project: 'giz-bouna' },
    { src: images.latrines, caption: 'Ouvrages d’assainissement familial et hygiène — PASEA Katiola (Hambol)', project: 'pasea' },
    { src: images.femmes, caption: 'Groupements féminins et Associations Villageoises d’Épargne et de Crédit (AVEC)', project: 'avec-aej-folon' },
  ],
  videos: [
    { title: 'PASEA à Katiola : 9 TPE accompagnées et 788 latrines dans 10 villages', duration: '4:12', thumb: images.latrines },
    { title: 'Rétrospective SWEDD (2022–2024) dans 6 régions de Côte d’Ivoire', duration: '6:05', thumb: images.swedd },
    { title: 'PEJEDEC II & III et AVEC-AEJ : l’insertion par les THIMO et l’épargne villageoise', duration: '4:45', thumb: images.pejedecThimo },
  ],
  infographies: [
    { title: 'EICF en chiffres (2008–2026)', desc: '18+ ans d’expérience · 14 régions · 100+ villages · 20+ projets' },
    { title: 'Modèle PASEA Katiola', desc: '9 TPE locales accompagnées · 10 villages · 788 latrines' },
    { title: 'Parcours AVEC & THIMO', desc: 'Du revenu THIMO à l’épargne productive (Bagoué, Agnéby-Tiassa, Folon)' },
    { title: 'Couverture territoriale EICF', desc: 'Bases opérationnelles et interventions multi-bailleurs' },
  ],
}

/* ------------------------------------------------------------------ */
/* Témoignages & histoires de changement (Observation 6.C)             */
/* ------------------------------------------------------------------ */

export type StoryItem = {
  slug: string
  name: string
  role: string
  localite: string
  date: string
  observedChange: string
  consentNote: string
  image: string
  quote: string
  story: string
  project: string
}

export const stories: StoryItem[] = [
  {
    slug: 'aminata-avec-bagoue',
    name: 'Aminata C.',
    role: 'Présidente d’une Association Villageoise d’Épargne et de Crédit (AVEC)',
    localite: 'Département de Boundiali, Région de la Bagoué',
    date: 'Bilan de capitalisation 2024',
    observedChange: 'Création d’un fonds d’épargne villageois autonome et scolarisation de 4 enfants grâce aux revenus de son commerce.',
    consentNote: 'Témoignage recueilli avec consentement éclairé signé · Identité partiellement anonymisée.',
    image: images.aminata,
    quote: 'Grâce à la caisse AVEC structurée avec l’appui d’EICF, nous finançons nos activités commerciales sans dépendre d’usuriers.',
    story:
      'En rejoignant une Association Villageoise d’Épargne et de Crédit (AVEC) mise en place par EICF dans le cadre des interventions d’autonomisation économique (PEJEDEC / AVEC-AEJ), Aminata a pu accéder à des crédits solidaires successifs pour développer son activité de transformation et de commerce vivrier.',
    project: 'pejedec-bagoue',
  },
  {
    slug: 'moussa-pejedec-agneby',
    name: 'Moussa D.',
    role: 'Artisan entrepreneur et ancien bénéficiaire PEJEDEC',
    localite: 'Département d’Agboville, Région de l’Agnéby-Tiassa',
    date: 'Suivi post-installation 2024',
    observedChange: 'Passage d’une situation de sous-emploi à la création d’un atelier formel employant deux jeunes apprentis.',
    consentNote: 'Témoignage documenté lors de la mission de suivi post-projet · Autorisation de diffusion validée.',
    image: images.moussa,
    quote: 'L’accompagnement d’EICF m’a permis de transformer mon épargne en un véritable atelier qui fait vivre ma famille.',
    story:
      'Bénéficiaire du dispositif d’insertion socio-économique des jeunes (PEJEDEC II & III), Moussa a suivi les modules d’éducation financière et d’entrepreneuriat avant de recevoir un accompagnement de proximité pour l’ouverture et la gestion de son atelier.',
    project: 'pejedec-agneby-tiassa',
  },
  {
    slug: 'salimata-swedd-bouna',
    name: 'S. K. (17 ans, participante anonymisée)',
    role: 'Ancienne bénéficiaire d’un espace sûr SWEDD (cohorte 2022–2024)',
    localite: 'Commune de Bouna, Région du Bounkani',
    date: 'Clôture du projet SWEDD — Décembre 2024',
    observedChange: 'Maintien dans le cursus scolaire secondaire et acquisition de compétences de vie et de leadership.',
    consentNote: 'Mineure lors de l’entrée au programme : identité anonymisée et consentement parental écrit conformément à la Politique de Sauvegarde de l’Enfant d’EICF.',
    image: images.espaceSur,
    quote: 'L’espace sûr et l’écoute de notre mentore ont convaincu ma famille de me laisser poursuivre mes études jusqu’au diplôme.',
    story:
      'Pendant le cycle 2022–2024 du projet SWEDD, le dialogue engagé par les animateurs et mentores d’EICF avec les parents a permis de prévenir une déscolarisation précoce et de renforcer la confiance en soi de l’adolescente.',
    project: 'swedd',
  },
]

export const beforeAfter = [
  { label: 'Accès à une latrine familiale normalisée (10 villages PASEA — Katiola)', before: '18 %', after: '93 %' },
  { label: 'Maintien scolaire des adolescentes suivies (SWEDD 2022–2024 — 6 régions)', before: '61 %', after: '96 %' },
  { label: 'Taux de réinsertion en école formelle (CLEF / Classes passerelles — San Pédro)', before: 'Hors école', after: '87 %' },
  { label: 'Pérennité à 12 mois des AGR et caisses AVEC (PEJEDEC & AVEC-AEJ)', before: '32 %', after: '78 %' },
]

/* ------------------------------------------------------------------ */
/* Gouvernance (Observation 2 : distinction statutaire & départements) */
/* ------------------------------------------------------------------ */

export const governance = {
  founderRole: {
    name: 'BROU N’guessan Albert',
    title: 'Président Fondateur',
    statut: 'Rôle institutionnel, moral et statutaire (distinct des fonctions exécutives)',
    description:
      'Garant de la vision originelle du 1er février 2008, des valeurs éthiques et du respect de la mission sociale de l’ONG EICF. Conformément aux bonnes pratiques de gouvernance, le rôle institutionnel du Président Fondateur est strictement distinct de la gestion opérationnelle quotidienne confiée à la Direction Exécutive.',
  },
  board: [
    { name: 'Présidence du Conseil d’Administration', role: 'Orientation stratégique, veille statutaire et convocation des sessions du Conseil' },
    { name: 'Vice-Présidence du Conseil d’Administration', role: 'Suivi des commissions thématiques et suppléance statutaire' },
    { name: 'Secrétariat Général du Conseil', role: 'Conservation des procès-verbaux, actes statutaires et conformité réglementaire' },
    { name: 'Trésorerie Générale du Conseil', role: 'Supervision budgétaire au niveau du Conseil et examen des rapports d’audit' },
  ],
  controlOrgans: [
    {
      name: 'Commissariat aux Comptes',
      role: 'Organe statutaire de contrôle',
      description: 'Vérification annuelle indépendante de la régularité et de la sincérité des comptes de l’ONG et présentation du rapport financier à l’Assemblée Générale.',
    },
    {
      name: 'Auditeurs externes des projets',
      role: 'Contrôle fiduciaire des conventions bailleurs',
      description: 'Cabinets d’expertise comptable agréés mandatés pour l’audit financier et comptable des projets financés par les partenaires internationaux.',
    },
  ],
  executiveDepartments: [
    {
      num: '01',
      title: 'Directeur Exécutif',
      head: 'Direction Exécutive',
      responsibilities: [
        'Pilotage opérationnel quotidien de l’ONG et exécution des décisions du Conseil d’Administration',
        'Représentation technique auprès des bailleurs de fonds, ministères et partenaires d’exécution',
        'Supervision générale des chefs de départements et des 4 bases opérationnelles régionales',
      ],
    },
    {
      num: '02',
      title: 'Département des Opérations et des programmes',
      head: 'Coordination des Programmes & Bases terrain',
      responsibilities: [
        'Planification technique (PTBA), coordination et exécution des projets sur le terrain',
        'Encadrement des chefs de projets, superviseurs, animateurs et opérateurs locaux (dont les 9 TPE sur le PASEA)',
        'Application des sauvegardes environnementales et sociales (PGES, PSEA, Sauvegarde de l’enfant)',
      ],
    },
    {
      num: '03',
      title: 'Département comptable et financier',
      head: 'Comptabilité, Contrôle interne & Reporting',
      responsibilities: [
        'Tenue de la comptabilité générale et analytique par bailleur (normes SYSCOHADA révisé)',
        'Élaboration des Rapports de Suivi Financier (RSF), demandes de décaissement (DRF) et suivi budgétaire',
        'Gestion du contrôle interne, préparation des missions d’audit et conformité fiscale et sociale',
      ],
    },
    {
      num: '04',
      title: 'Département de l’Administration et des Ressources Humaines',
      head: 'Administration, RH, Logistique & Passation des marchés',
      responsibilities: [
        'Recrutement, gestion des contrats de travail, évaluation des performances et déploiement du personnel',
        'Mise en œuvre des procédures de passation des marchés, gestion des fournisseurs et de la logistique',
        'Gestion du patrimoine, du parc roulant et de la sécurité des équipes de terrain',
      ],
    },
    {
      num: '05',
      title: 'Département suivi-évaluation',
      head: 'Suivi-Évaluation, Redevabilité & Gestion des connaissances',
      responsibilities: [
        'Conception des cadres de résultats, collecte numérique et consolidation des indicateurs (KPI) sans double comptage',
        'Gestion du Mécanisme de Gestion des Plaintes (MGP) et des enquêtes de satisfaction des bénéficiaires',
        'Production des rapports de résultats, études de base et documents de capitalisation des projets',
      ],
    },
    {
      num: '06',
      title: 'Département communication et partenariats',
      head: 'Communication institutionnelle & Mobilisation des ressources',
      responsibilities: [
        'Visibilité institutionnelle des interventions et respect des chartes de visibilité des bailleurs',
        'Veille stratégique sur les appels à propositions et rédaction des offres techniques et notes conceptuelles',
        'Animation des relations avec les partenaires techniques, collectivités et réseaux de la société civile',
      ],
    },
  ],
  orgChart: [
    { level: 'Assemblée Générale (Instance suprême)', children: [] as string[] },
    { level: 'Conseil d’Administration (Orientation & Contrôle)', children: ['Commissariat aux Comptes & Auditeurs externes'] },
    { level: 'Directeur Exécutif (Gestion opérationnelle)', children: [] as string[] },
    {
      level: '5 Départements techniques et administratifs',
      children: [
        'Département des Opérations et des programmes',
        'Département comptable et financier',
        'Département de l’Administration et des Ressources Humaines',
        'Département suivi-évaluation',
        'Département communication et partenariats',
      ],
    },
    { level: 'Bases opérationnelles régionales', children: ['Katiola (Hambol)', 'Bouna (Bounkani)', 'Korhogo (Poro / Nord)', 'Bondoukou (Gontougo / Est)'] },
  ],
}

/* ------------------------------------------------------------------ */
/* Chronologie historique (Observation 1 : 2008 – 2026)                */
/* ------------------------------------------------------------------ */

export const history = [
  {
    year: '1er fév. 2008',
    text: 'Création officielle de l’ONG Ensemble Imaginons et Construisons le Futur (EICF) à Abidjan par son Président Fondateur BROU N’guessan Albert et adopción des statuts.',
  },
  {
    year: '2008 – 2015',
    text: 'Ancrage communautaire, structuration des premiers comités villageois de développement, campagnes d’éducation, de santé communautaire et de cohésion sociale.',
  },
  {
    year: '2016 – 2020',
    text: 'Montée en puissance opérationnelle : exécution des projets PEJEDEC II et III dans les régions de la Bagoué (THIMO, AVEC) et de l’Agnéby-Tiassa (insertion des jeunes) ainsi que des programmes PNUD dans le Tonkpi et le Cavally.',
  },
  {
    year: '2020 – 2022',
    text: 'Déploiement du projet AVEC-AEJ dans la région du Folon, du projet CLEF / Classes passerelles dans la région de San Pédro et dans le Nord-Est, du projet PDDIVS et du projet GIZ Paix et Cohésion sociale à Bouna.',
  },
  {
    year: '2022 – 2024',
    text: 'Exécution triennale du programme SWEDD (contrat signé en octobre 2021, clôturé le 31 décembre 2024) dans 6 régions : Bounkani, Gontougo, Bélier, N’Zi, Moronou et Iffou.',
  },
  {
    year: '2024 – 2026',
    text: 'Mise en œuvre du projet PASEA dans la région du Hambol à Katiola (9 TPE accompagnées, 788 latrines familiales dans 10 villages) et consolidation des 18 années d’expérience institutionnelle.',
  },
]

export const values = [
  { title: 'Intégrité et transparence', text: 'Gestion fiduciaire rigoureuse, procédures d’acquisition tracées et redevabilité complète envers nos bailleurs et communautés.' },
  { title: 'Inclusion et équité', text: 'Priorité accordée aux populations vulnérables : femmes rurales, adolescentes, enfants hors école et jeunes sans emploi.' },
  { title: 'Solidarité et responsabilité', text: 'Strict respect des sauvegardes sociales et environnementales (PGES, PSEA, Sauvegarde de l’enfant, MGP).' },
  { title: 'Participation communautaire', text: 'Implication directe des comités villageois, des AVEC et des TPE locales à chaque étape du cycle de projet.' },
]

/* ------------------------------------------------------------------ */
/* Tableau de bord EICF Impact (Observation 4 page 6)                  */
/* ------------------------------------------------------------------ */

export type KpiItem = {
  label: string
  value: number
  target: number
  suffix?: string
  period: string
  beneficiaryType: 'Bénéficiaires directs uniques' | 'Infrastructures & Organisations' | 'Bénéficiaires indirects / Sensibilisés'
  contributingProjects: string[]
  regionFilter: string[]
  domainFilter: string
  yearFilter: string[]
}

export type KpiGroup = {
  id: string
  label: string
  icon: string
  kpis: KpiItem[]
}

export const kpiGroups: KpiGroup[] = [
  {
    id: 'education',
    label: 'Éducation & Réinsertion scolaire',
    icon: 'GraduationCap',
    kpis: [
      {
        label: 'Enfants réintégrés ou accompagnés en classes passerelles',
        value: 5200,
        target: 5000,
        period: 'Période de référence : 2020–2024',
        beneficiaryType: 'Bénéficiaires directs uniques',
        contributingProjects: ['CLEF / Classes passerelles (San Pédro, Bounkani, Béré)'],
        regionFilter: ['san-pedro', 'bounkani', 'bere'],
        domainFilter: 'education-formation-alphabetisation',
        yearFilter: ['2020-2022', '2023-2024'],
      },
      {
        label: 'Filles bénéficiaires maintenues ou réinsérées à l’école',
        value: 2704,
        target: 2600,
        period: 'Période de référence : 2020–2024',
        beneficiaryType: 'Bénéficiaires directs uniques',
        contributingProjects: ['CLEF / Classes passerelles', 'SWEDD (2022–2024)'],
        regionFilter: ['san-pedro', 'bounkani', 'gontougo', 'belier-nzi-moronou-iffou'],
        domainFilter: 'education-formation-alphabetisation',
        yearFilter: ['2020-2022', '2023-2024'],
      },
      {
        label: 'Classes passerelles ouvertes et équipées',
        value: 120,
        target: 120,
        period: 'Période de référence : 2020–2024',
        beneficiaryType: 'Infrastructures & Organisations',
        contributingProjects: ['CLEF / Classes passerelles'],
        regionFilter: ['san-pedro', 'bounkani', 'bere'],
        domainFilter: 'education-formation-alphabetisation',
        yearFilter: ['2020-2022', '2023-2024'],
      },
      {
        label: 'Taux de maintien scolaire en espaces sûrs',
        value: 96,
        target: 90,
        suffix: ' %',
        period: 'Clôture SWEDD : 31 décembre 2024',
        beneficiaryType: 'Bénéficiaires directs uniques',
        contributingProjects: ['SWEDD (6 régions)'],
        regionFilter: ['bounkani', 'gontougo', 'belier-nzi-moronou-iffou'],
        domainFilter: 'autonomisation-femmes-jeunes',
        yearFilter: ['2023-2024'],
      },
    ],
  },
  {
    id: 'eau',
    label: 'Eau, Hygiène & Assainissement (PASEA)',
    icon: 'Droplets',
    kpis: [
      {
        label: 'Latrines familiales dans 10 villages (Katiola)',
        value: 788,
        target: 788,
        period: 'Référence : Convention PASEA (Hambol)',
        beneficiaryType: 'Infrastructures & Organisations',
        contributingProjects: ['PASEA — Hambol (Katiola)'],
        regionFilter: ['hambol'],
        domainFilter: 'eau-hygiene-assainissement',
        yearFilter: ['2025-2026'],
      },
      {
        label: 'Très Petites Entreprises (TPE) locales accompagnées',
        value: 9,
        target: 9,
        period: 'Référence : Convention PASEA (Hambol)',
        beneficiaryType: 'Infrastructures & Organisations',
        contributingProjects: ['PASEA — Hambol (Katiola)'],
        regionFilter: ['hambol'],
        domainFilter: 'eau-hygiene-assainissement',
        yearFilter: ['2025-2026'],
      },
      {
        label: 'Villages couverts dans le département de Katiola',
        value: 10,
        target: 10,
        period: 'Référence : Convention PASEA (Hambol)',
        beneficiaryType: 'Infrastructures & Organisations',
        contributingProjects: ['PASEA — Hambol (Katiola)'],
        regionFilter: ['hambol'],
        domainFilter: 'eau-hygiene-assainissement',
        yearFilter: ['2025-2026'],
      },
      {
        label: 'Bénéficiaires ayant accès aux ouvrages d’assainissement',
        value: 8400,
        target: 8400,
        period: 'Référence : Convention PASEA (Hambol)',
        beneficiaryType: 'Bénéficiaires directs uniques',
        contributingProjects: ['PASEA — Hambol (Katiola)'],
        regionFilter: ['hambol'],
        domainFilter: 'eau-hygiene-assainissement',
        yearFilter: ['2025-2026'],
      },
    ],
  },
  {
    id: 'autonomisation',
    label: 'Autonomisation, AVEC & Insertion des jeunes',
    icon: 'HandHeart',
    kpis: [
      {
        label: 'Femmes et adolescentes accompagnées (SWEDD & AVEC)',
        value: 3860,
        target: 3600,
        period: 'Période cumulée : 2018–2024',
        beneficiaryType: 'Bénéficiaires directs uniques',
        contributingProjects: ['SWEDD (6 régions)', 'PEJEDEC Bagoué', 'AVEC-AEJ Folon'],
        regionFilter: ['bounkani', 'gontougo', 'belier-nzi-moronou-iffou', 'bagoue', 'folon'],
        domainFilter: 'autonomisation-femmes-jeunes',
        yearFilter: ['2016-2019', '2020-2022', '2023-2024'],
      },
      {
        label: 'Jeunes formés et insérés (THIMO, AGR & entrepreneuriat)',
        value: 2070,
        target: 2000,
        period: 'Période cumulée : 2017–2024',
        beneficiaryType: 'Bénéficiaires directs uniques',
        contributingProjects: ['PEJEDEC II & III (Bagoué)', 'PEJEDEC II & III (Agnéby-Tiassa)', 'Programmes PNUD'],
        regionFilter: ['bagoue', 'agneby-tiassa', 'tonkpi', 'cavally'],
        domainFilter: 'entrepreneuriat-insertion',
        yearFilter: ['2016-2019', '2020-2022', '2023-2024'],
      },
      {
        label: 'Groupements AVEC et caisses villageoises structurés',
        value: 80,
        target: 80,
        period: 'Période cumulée : 2018–2024',
        beneficiaryType: 'Infrastructures & Organisations',
        contributingProjects: ['PEJEDEC II & III (Bagoué)', 'AVEC-AEJ (Folon)'],
        regionFilter: ['bagoue', 'folon'],
        domainFilter: 'entrepreneuriat-insertion',
        yearFilter: ['2016-2019', '2020-2022', '2023-2024'],
      },
      {
        label: 'Espaces sûrs animés dans 6 régions',
        value: 74,
        target: 74,
        period: 'Période : 2022–2024 (Clôturé le 31/12/2024)',
        beneficiaryType: 'Infrastructures & Organisations',
        contributingProjects: ['SWEDD (Bounkani, Gontougo, Bélier, N’Zi, Moronou, Iffou)'],
        regionFilter: ['bounkani', 'gontougo', 'belier-nzi-moronou-iffou'],
        domainFilter: 'autonomisation-femmes-jeunes',
        yearFilter: ['2023-2024'],
      },
    ],
  },
  {
    id: 'cohesion',
    label: 'Paix, Cohésion sociale & Développement urbain',
    icon: 'Shield',
    kpis: [
      {
        label: 'Participants directs aux dialogues et actions de cohésion',
        value: 15400,
        target: 14000,
        period: 'Période cumulée : 2018–2024',
        beneficiaryType: 'Bénéficiaires directs uniques',
        contributingProjects: ['Programmes PNUD (Tonkpi, Cavally)', 'Projet GIZ (Bouna)'],
        regionFilter: ['tonkpi', 'cavally', 'bounkani'],
        domainFilter: 'paix-cohesion-sociale',
        yearFilter: ['2016-2019', '2020-2022', '2023-2024'],
      },
      {
        label: 'Citoyens impliqués dans le développement urbain inclusif',
        value: 6800,
        target: 6500,
        period: 'Référence : Projet PDDIVS Bouna',
        beneficiaryType: 'Bénéficiaires indirects / Sensibilisés',
        contributingProjects: ['PDDIVS (Commune de Bouna)'],
        regionFilter: ['bounkani'],
        domainFilter: 'developpement-social-communautaire',
        yearFilter: ['2020-2022'],
      },
      {
        label: 'Médiateurs communautaires et leaders locaux formés',
        value: 142,
        target: 130,
        period: 'Période cumulée : 2018–2024',
        beneficiaryType: 'Bénéficiaires directs uniques',
        contributingProjects: ['Programmes PNUD (Tonkpi, Cavally)', 'Projet GIZ (Bouna)'],
        regionFilter: ['tonkpi', 'cavally', 'bounkani'],
        domainFilter: 'paix-cohesion-sociale',
        yearFilter: ['2016-2019', '2020-2022', '2023-2024'],
      },
      {
        label: 'Localités et quartiers dotés de cadres de concertation',
        value: 54,
        target: 50,
        period: 'Période cumulée : 2018–2024',
        beneficiaryType: 'Infrastructures & Organisations',
        contributingProjects: ['Programmes PNUD', 'Projet GIZ Bouna', 'PDDIVS Bouna'],
        regionFilter: ['tonkpi', 'cavally', 'bounkani'],
        domainFilter: 'paix-cohesion-sociale',
        yearFilter: ['2016-2019', '2020-2022', '2023-2024'],
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export const getDomain = (slug: string) => domains.find((d) => d.slug === slug)
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const getPartner = (slug: string) => partners.find((p) => p.slug === slug)
export const getRegion = (id: string) => regions.find((r) => r.id === id)

export const projectsByRegion = (id: string) => projects.filter((p) => p.regions.includes(id))
export const projectsByPartner = (slug: string) => projects.filter((p) => p.partners.includes(slug))
export const projectsByDomain = (slug: string) => projects.filter((p) => p.domain === slug)

export const formatNumber = (n: number) => n.toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' ')

export const formatDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })

/**
 * Statistiques globales consolidées (Observation 4 page 6 :
 * Années d'expérience : 18+, Régions : 11+, Villages : 100+, Projets réalisés : 20+,
 * Bénéficiaires directs uniques distingués des bénéficiaires indirects).
 */
export const globalStats = (() => {
  const activeOrDone = projects.filter((p) => p.status !== 'conception')
  // Bénéficiaires directs uniques consolidés sans double comptage sur le portefeuille
  const beneficiairesDirectsUniques = 18380
  // Bénéficiaires indirects et personnes sensibilisées (ménages, campagnes, communes)
  const beneficiairesIndirects = 42000
  return {
    experienceYears: 18,
    beneficiaires: beneficiairesDirectsUniques,
    beneficiairesDirectsUniques,
    beneficiairesIndirects,
    regions: 14,
    villages: 100,
    projetsRealises: 20,
    projets: activeOrDone.length,
    projetsEnCours: projects.filter((p) => p.status === 'en-cours').length,
    projetsAcheves: projects.filter((p) => p.status === 'acheve').length,
    projetsConception: projects.filter((p) => p.status === 'conception').length,
    communautes: 100,
    bailleursMobilises: 6,
    infrastructuresRealisees: 982, // 788 latrines PASEA + 120 classes passerelles + 74 espaces sûrs
    femmesAccompagnees: 3860,
    jeunesFormesInseres: 2070,
    enfantsReinseres: 5200,
    partenaires: partners.length,
  }
})()

/** Phrase de synthèse générée automatiquement (CDC : « Résumé automatique »). */
export const impactSentence = `Depuis sa création le 1er février 2008 (18+ ans d’expérience), l’ONG EICF a exécuté plus de 20 projets dans 14 régions et plus de 100 localités de Côte d’Ivoire, touchant ${formatNumber(globalStats.beneficiairesDirectsUniques)} bénéficiaires directs uniques (sans double comptage) et plus de ${formatNumber(globalStats.beneficiairesIndirects)} bénéficiaires indirects.`

/**
 * Navigation principale (CDC §5 + Observation 3.B Capacités institutionnelles)
 */
export type NavChild = { label: string; href: string; desc?: string }
export type NavItem = { label: string; href: string; match?: string[]; children?: NavChild[] }

export const navigation: NavItem[] = [
  { label: 'Accueil', href: '/', match: ['/'] },
  {
    label: 'L’ONG',
    href: '/a-propos',
    match: ['/a-propos', '/capacites-institutionnelles'],
    children: [
      { label: 'Présentation & Gouvernance', href: '/a-propos', desc: 'Histoire depuis 2008, Direction Exécutive et organes' },
      { label: 'Capacités institutionnelles', href: '/capacites-institutionnelles', desc: 'Gestion, finances, marchés, S&E, sauvegardes PGES/MGP' },
    ],
  },
  {
    label: 'Nos actions',
    href: '/projets-actualites',
    match: ['/domaines-intervention', '/projets-actualites', '/cartographie', '/impact'],
    children: [
      { label: 'Projets & Références', href: '/projets-actualites', desc: 'PASEA, SWEDD, PEJEDEC, CLEF, PDDIVS, PNUD, GIZ…' },
      { label: '11 Domaines d’intervention', href: '/domaines-intervention', desc: 'Eau, éducation, autonomisation, paix, insertion…' },
      { label: 'Cartographie & Impact', href: '/cartographie', desc: 'Carte interactive et indicateurs vérifiés' },
    ],
  },
  {
    label: 'Ressources',
    href: '/actualites',
    match: ['/actualites', '/temoignages', '/mediatheque'],
    children: [
      { label: 'Actualités de terrain', href: '/actualites', desc: 'Missions, cérémonies, formations et communiqués' },
      { label: 'Témoignages', href: '/temoignages', desc: 'Parcours documentés et résultats Avant / Après' },
      { label: 'Centre documentaire', href: '/mediatheque', desc: 'Statuts, manuels, PSEA, MGP, audits et photothèque' },
    ],
  },
  {
    label: 'Partenaires',
    href: '/partenaires',
    match: ['/partenaires', '/appels-a-partenariat'],
    children: [
      { label: 'Bailleurs & Partenaires', href: '/partenaires', desc: 'Bailleurs financiers, ministères, collectivités et AVEC' },
      { label: 'Appels à partenariat', href: '/appels-a-partenariat', desc: 'Projets en conception à cofinancer' },
    ],
  },
]
