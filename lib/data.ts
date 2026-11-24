/**
 * Base de contenus EICF (maquette).
 * ------------------------------------------------------------------
 * Toutes les pages, la cartographie, le tableau de bord d'impact et
 * l'assistant « ASK EICF » lisent ce fichier unique. En phase 2, ces
 * données seront servies par le back-office (CMS + base de données).
 *
 * ⚠️ Les chiffres et intitulés sont ILLUSTRATIFS, à l'exception des
 * éléments cités dans le cahier des charges (PASEA : Hambol → Katiola,
 * 10 villages, 788 latrines ; SWEDD : Bounkani → Bouna, espaces sûrs).
 */

export const org = {
  name: 'EICF',
  fullName: 'Ensemble Imaginons et Construisons le Futur',
  tagline: 'Ensemble Sauvons des Vies · Agir aujourd’hui pour un avenir durable.',
  logo: '/WhatsApp_Image_2026-11-02_at_14.26.35-removebg-preview.png',
  address: 'Cocody Angré, Abidjan, Côte d’Ivoire',
  phone: '+225 27 22 53 46 40',
  whatsapp: '2252722534640',
  email: 'ongeicf@gmail.com',
  founded: 2008,
  vision:
    'Des communautés autonomes, solidaires et résilientes, où chaque personne peut exercer ses droits et contribuer au développement de son territoire.',
  mission:
    'Améliorer durablement les conditions de vie des populations vulnérables à travers des interventions participatives, innovantes et ancrées dans les dynamiques locales.',
  socials: {
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
    x: 'https://x.com',
  },
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
  // Photos réelles de terrain et cérémonies officielles EICF
  signatureMinistere: '/images/signature-convention-ministere.jpg',
  remiseAccord: '/images/remise-accord-partenariat.jpg',
  missionPartenaires: '/images/mission-supervision-partenaires.jpg',
  pejedecJeunes: '/images/pejedec-jeunes-emploi.jpg',
  dialoguePaix: '/images/communaute-dialogue-paix.jpg',
  assembleeVillage: '/images/assemblee-villageoise.jpg',
  groupeNotables: '/images/communaute-groupe-notables.jpg',
  // Photos officielles et portraits importés de la plateforme de référence
  fondateur: '/images/president.jpeg',
  president: '/images/president.jpeg',
  swedd: '/images/projets/swedd.jpeg',
  sweddGenre: '/images/projets/swedd-genre.jpeg',
  pejedecThimo: '/images/projets/pejedec-thimo-agneby-tiassa.jpeg',
  pejedecBanqueMondiale: '/images/projets/pejedec-partenaire-banque-mondiale.jpeg',
  sensibilisationPaix: '/images/projets/sensibilisation-paix.jpeg',
  terrain: '/images/projets/terrain.jpeg',
  imageTerrain: '/images/projets/image-terrain.jpeg',
  carteInterventions: '/interventions_eicf.jpeg',
}

export const founder = {
  name: 'BROU N’guessan Albert',
  role: 'Président Fondateur de l’ONG EICF',
  institution: 'ONG EICF — Ensemble Imaginons et Construisons le Futur',
  since: 'Depuis le 1er février 2008',
  photo: '/images/president.jpeg',
  citation:
    'Ensemble, imaginons et construisons un avenir meilleur, fondé sur la solidarité, la dignité humaine et le développement durable.',
  salutations: [
    'Chers visiteurs,',
    'Chers partenaires techniques et financiers,',
    'Chers collaborateurs et amis de l’ONG EICF,',
  ],
  message: [
    'C’est avec un profond sentiment de responsabilité, de fierté et d’espérance que je vous souhaite la bienvenue sur le site officiel de l’ONG Ensemble Imaginons et Construisons le Futur (EICF), créée le 1er février 2008.',
    'La création de notre organisation est née d’une conviction profonde : celle qu’il est possible de contribuer à un monde plus juste, plus solidaire et plus inclusif en plaçant l’être humain au cœur de toutes les initiatives de développement.',
    'Depuis nos premiers engagements, notre ambition demeure la même : accompagner les communautés, soutenir les populations les plus vulnérables et contribuer à l’amélioration durable des conditions de vie, en favorisant la participation citoyenne, l’égalité des chances et l’autonomisation des personnes.',
    'Au fil de notre parcours, l’ONG EICF s’est engagée dans plusieurs domaines essentiels au développement humain et communautaire, notamment le développement social et communautaire, l’éducation et la formation, la santé et la nutrition, le développement de la petite enfance, l’autonomisation des femmes et des jeunes, l’entrepreneuriat et l’insertion socio-économique des jeunes et des femmes, la cohésion sociale et la culture de la paix, l’action humanitaire ainsi que la protection de l’environnement et le développement durable.',
    'Nous sommes convaincus que les transformations sociales les plus durables reposent sur l’écoute des communautés, la valorisation des initiatives locales, la qualité des partenariats et la capacité collective à apporter des réponses concrètes aux défis du développement.',
    'Cette vision exige de nous un engagement constant, une gouvernance responsable, une gestion transparente de nos ressources et une culture de résultats au bénéfice des populations. Elle nous invite également à renforcer nos collaborations avec les institutions publiques, les collectivités territoriales, les partenaires techniques et financiers, les organisations de la société civile et tous les acteurs qui partagent notre idéal.',
    'Je voudrais, à cet égard, exprimer ma profonde reconnaissance à l’ensemble de nos partenaires, à nos collaborateurs, à nos bénévoles et aux communautés bénéficiaires pour leur confiance et leur contribution à la réalisation de notre mission. Leur engagement constitue une source de motivation permanente pour poursuivre notre action avec détermination et humilité.',
    'Aujourd’hui, face aux défis économiques, sociaux, environnementaux et humanitaires, l’ONG EICF entend poursuivre son développement, consolider ses acquis et promouvoir des initiatives innovantes, inclusives et durables, en Côte d’Ivoire, en Afrique et partout où son expertise et son engagement peuvent contribuer au progrès humain.',
    'Je reste fermement convaincu que le développement n’est pas l’œuvre d’un seul individu ou d’une seule organisation. Il est le résultat d’une volonté partagée, d’une solidarité active et d’une action collective menée avec persévérance.',
    'C’est pourquoi je vous invite à découvrir nos réalisations, à vous approprier notre vision et à rejoindre cette dynamique de partenariat et d’engagement au service des générations présentes et futures.',
    'Ensemble, faisons de la solidarité une force, de l’engagement une action et de l’espérance une réalité.',
    'Ensemble, imaginons et construisons un futur plus juste, plus inclusif et plus durable.',
  ],
  conclusion: 'Avec mes sentiments de profonde considération et ma fraternelle reconnaissance.',
  signature: {
    name: 'BROU N’guessan Albert',
    title: 'Président Fondateur',
    org: 'ONG EICF — Ensemble Imaginons et Construisons le Futur',
    date: 'Depuis le 1er février 2008',
  },
}

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
    short: 'Renforcer les capacités des communautés à porter leur propre développement.',
    icon: 'Users',
    image: images.assembleeVillage,
    objective: 'Faire des communautés les premières actrices de leur développement, de l’identification des besoins jusqu’au suivi des réalisations.',
    approach: ['Diagnostic participatif villageois', 'Comités de développement locaux', 'Plans d’action communautaires', 'Suivi citoyen des réalisations'],
    results: [{ value: '62', label: 'comités villageois structurés' }, { value: '48', label: 'plans d’action communautaires' }],
  },
  {
    slug: 'education-formation-alphabetisation',
    num: '02',
    title: 'Éducation, formation et alphabétisation',
    short: 'Ramener les enfants à l’école et ouvrir l’accès au savoir à tous les âges.',
    icon: 'GraduationCap',
    image: images.education,
    objective: 'Garantir l’accès et le maintien à l’école des enfants vulnérables, en particulier des filles, et alphabétiser les adultes.',
    approach: ['Classes passerelles', 'Soutien scolaire et kits', 'Formation des enseignants', 'Centres d’alphabétisation fonctionnelle'],
    results: [{ value: '5 200', label: 'enfants scolarisés ou réinsérés' }, { value: '38', label: 'écoles accompagnées' }],
  },
  {
    slug: 'protection-enfant-petite-enfance',
    num: '03',
    title: 'Protection de l’enfant et petite enfance',
    short: 'Prévenir les violences et offrir à chaque enfant un départ équitable dans la vie.',
    icon: 'Baby',
    image: images.communaute,
    objective: 'Prévenir et répondre aux violences, abus et exploitations faits aux enfants, et promouvoir le développement de la petite enfance.',
    approach: ['Comités de protection de l’enfant', 'Référencement des cas', 'Espaces amis des enfants', 'Parentalité positive'],
    results: [{ value: '1 340', label: 'enfants protégés' }, { value: '214', label: 'cas référés et suivis' }],
  },
  {
    slug: 'autonomisation-femmes-jeunes',
    num: '04',
    title: 'Autonomisation des femmes et des jeunes',
    short: 'Donner aux femmes et aux jeunes les moyens de choisir et de construire leur avenir.',
    icon: 'HandHeart',
    image: images.espaceSur,
    objective: 'Renforcer le pouvoir d’agir économique, social et décisionnel des femmes, des adolescentes et des jeunes.',
    approach: ['Espaces sûrs pour adolescentes', 'Leadership féminin', 'Groupements d’épargne (AVEC)', 'Mentorat des jeunes'],
    results: [{ value: '3 100', label: 'femmes accompagnées' }, { value: '1 850', label: 'adolescentes en espaces sûrs' }],
  },
  {
    slug: 'entrepreneuriat-insertion',
    num: '05',
    title: 'Entrepreneuriat et insertion socio-économique',
    short: 'Créer des revenus durables par la formation et l’accompagnement des initiatives.',
    icon: 'Briefcase',
    image: images.pejedecJeunes,
    objective: 'Favoriser l’insertion professionnelle et la création d’activités génératrices de revenus (AGR) durables.',
    approach: ['Formation professionnelle par apprentissage', 'Kits d’installation', 'Coaching des micro-entreprises', 'Mise en relation avec la micro-finance'],
    results: [{ value: '920', label: 'jeunes formés à un métier' }, { value: '410', label: 'AGR financées et installées' }],
  },
  {
    slug: 'sante-nutrition',
    num: '06',
    title: 'Santé publique et nutrition',
    short: 'Rapprocher les soins des communautés et lutter contre la malnutrition.',
    icon: 'HeartPulse',
    image: images.sante,
    objective: 'Améliorer l’accès aux soins de santé primaires et réduire la malnutrition des enfants de moins de 5 ans.',
    approach: ['Agents de santé communautaire', 'Dépistage nutritionnel', 'Foyers d’apprentissage nutritionnel', 'Campagnes de sensibilisation'],
    results: [{ value: '12 600', label: 'enfants dépistés' }, { value: '86', label: 'agents de santé formés' }],
  },
  {
    slug: 'eau-hygiene-assainissement',
    num: '07',
    title: 'Eau, hygiène et assainissement',
    short: 'Un accès durable à l’eau potable, à l’assainissement et aux bonnes pratiques d’hygiène.',
    icon: 'Droplets',
    image: images.latrines,
    objective: 'Améliorer durablement l’accès à l’eau potable et à l’assainissement, et ancrer les bonnes pratiques d’hygiène.',
    approach: ['Assainissement total piloté par la communauté (ATPC)', 'Construction de latrines familiales', 'Points de lavage des mains', 'Comités de gestion des points d’eau'],
    results: [{ value: '788', label: 'latrines réalisées' }, { value: '10', label: 'villages certifiés FDAL' }],
  },
  {
    slug: 'droits-humains-vbg',
    num: '08',
    title: 'Droits humains, protection et lutte contre les VBG',
    short: 'Défendre les droits et accompagner les survivantes de violences basées sur le genre.',
    icon: 'Scale',
    image: images.signatureMinistere,
    objective: 'Prévenir les violences basées sur le genre et garantir une prise en charge holistique des survivant·e·s.',
    approach: ['Sensibilisation communautaire', 'Prise en charge psychosociale', 'Accompagnement juridique', 'Engagement des hommes et des leaders'],
    results: [{ value: '24 000', label: 'personnes sensibilisées' }, { value: '380', label: 'survivantes accompagnées' }],
  },
  {
    slug: 'paix-cohesion-sociale',
    num: '09',
    title: 'Paix, cohésion sociale et engagement citoyen',
    short: 'Prévenir les conflits et renforcer le vivre-ensemble au sein des territoires.',
    icon: 'Handshake',
    image: images.dialoguePaix,
    objective: 'Prévenir les conflits communautaires et renforcer la participation citoyenne, notamment des jeunes et des femmes.',
    approach: ['Dialogues intercommunautaires', 'Médiateurs locaux', 'Clubs citoyens de jeunes', 'Mécanismes d’alerte précoce'],
    results: [{ value: '57', label: 'communautés mobilisées' }, { value: '140', label: 'médiateurs formés' }],
  },
  {
    slug: 'environnement-developpement-durable',
    num: '10',
    title: 'Environnement et développement durable',
    short: 'Préserver les ressources naturelles et renforcer la résilience climatique.',
    icon: 'Sprout',
    image: images.femmes,
    objective: 'Accompagner les communautés vers des pratiques respectueuses de l’environnement et résilientes au changement climatique.',
    approach: ['Reboisement communautaire', 'Agro-écologie', 'Écoles vertes', 'Gestion des déchets'],
    results: [{ value: '18 000', label: 'arbres plantés' }, { value: '12', label: 'écoles vertes en préparation' }],
  },
  {
    slug: 'action-humanitaire-urgences',
    num: '11',
    title: 'Action humanitaire et réponse aux urgences',
    short: 'Répondre vite et dignement aux crises qui frappent les populations.',
    icon: 'LifeBuoy',
    image: images.communaute,
    objective: 'Apporter une assistance rapide, coordonnée et digne aux populations affectées par les crises et catastrophes.',
    approach: ['Évaluation rapide des besoins', 'Distribution de kits essentiels', 'Abris et WASH d’urgence', 'Relèvement précoce'],
    results: [{ value: '2 300', label: 'ménages assistés' }, { value: '3', label: 'réponses d’urgence conduites' }],
  },
]

/* ------------------------------------------------------------------ */
/* Partenaires (CDC §6 : 4 catégories)                                 */
/* ------------------------------------------------------------------ */

export type PartnerCategory = 'techniques-financiers' | 'institutionnels' | 'operationnels' | 'communautaires'

export type Partner = {
  slug: string
  name: string
  short: string
  category: PartnerCategory
  type: string
  description: string
  zone: string
  url: string
  logo?: string
}

export const partnerCategories: { id: PartnerCategory; label: string; desc: string }[] = [
  { id: 'techniques-financiers', label: 'Partenaires techniques et financiers', desc: 'Bailleurs, organisations internationales et agences de coopération.' },
  { id: 'institutionnels', label: 'Partenaires institutionnels', desc: 'Ministères, agences publiques et collectivités territoriales.' },
  { id: 'operationnels', label: 'Partenaires opérationnels', desc: 'ONG, associations et structures de mise en œuvre sur le terrain.' },
  { id: 'communautaires', label: 'Partenaires communautaires', desc: 'Organisations de base, leaders et structures locales.' },
]

export const partners: Partner[] = [
  { slug: 'banque-mondiale', name: 'Banque mondiale', short: 'BM', category: 'techniques-financiers', type: 'Bailleur multilatéral', description: 'Partenaire financier de programmes structurants en eau-assainissement et en autonomisation des femmes.', zone: 'Hambol, Bounkani, Gontougo', url: 'https://www.banquemondiale.org', logo: '/images/partenaires/banque-mondiale.svg' },
  { slug: 'pnud', name: 'Programme des Nations Unies pour le développement', short: 'PNUD', category: 'techniques-financiers', type: 'Agence des Nations Unies', description: 'Appui à la cohésion sociale, à la résilience communautaire et au relèvement.', zone: 'National', url: 'https://www.undp.org', logo: '/images/partenaires/pnud.svg' },
  { slug: 'usaid', name: 'USAID', short: 'USAID', category: 'techniques-financiers', type: 'Agence de coopération', description: 'Appui aux programmes de santé communautaire, d’éducation et d’autonomisation.', zone: 'National', url: 'https://www.usaid.gov', logo: '/images/partenaires/usaid.svg' },
  { slug: 'unicef', name: 'UNICEF', short: 'UNICEF', category: 'techniques-financiers', type: 'Agence des Nations Unies', description: 'Appui technique et financier pour l’éducation, la protection de l’enfant et la nutrition.', zone: 'Bounkani, Poro, Béré', url: 'https://www.unicef.org/cotedivoire' },
  { slug: 'union-europeenne', name: 'Union européenne', short: 'UE', category: 'techniques-financiers', type: 'Coopération internationale', description: 'Soutien aux initiatives de paix, de cohésion sociale et de gouvernance locale.', zone: 'Tchologo, Tonkpi, Bounkani', url: 'https://www.eeas.europa.eu' },
  { slug: 'afd', name: 'Agence française de développement', short: 'AFD', category: 'techniques-financiers', type: 'Agence de coopération', description: 'Cofinancement de programmes d’insertion socio-économique des jeunes.', zone: 'Hambol, Gbêkê', url: 'https://www.afd.fr' },
  { slug: 'unfpa', name: 'UNFPA', short: 'UNFPA', category: 'techniques-financiers', type: 'Agence des Nations Unies', description: 'Appui aux programmes de santé reproductive et de lutte contre les VBG.', zone: 'Gontougo, Indénié-Djuablin', url: 'https://cotedivoire.unfpa.org' },
  { slug: 'giz', name: 'Coopération Allemande au Développement (GIZ)', short: 'GIZ', category: 'techniques-financiers', type: 'Agence de coopération', description: 'Appui aux programmes de cohésion sociale, gestion pacifique des conflits et dialogue transfrontalier.', zone: 'Bounkani, Nord-Est', url: 'https://www.giz.de', logo: '/images/partenaires/giz.svg' },
  { slug: 'bcp-emploi', name: 'Bureau de Coordination des Programmes Emploi (BCP-Emploi)', short: 'BCP-Emploi', category: 'institutionnels', type: 'Agence publique', description: 'Coordination et suivi fiduciaire des projets PEJEDEC cofinancés par la Banque mondiale.', zone: 'National', url: 'https://www.bcpemploi.ci' },
  { slug: 'aej', name: 'Agence Emploi Jeunes', short: 'AEJ', category: 'institutionnels', type: 'Agence publique', description: 'Dispositifs d’insertion socio-économique et programmes PEJEDEC THIMO.', zone: 'National', url: 'https://www.agenceemploijeunes.ci', logo: '/images/partenaires/aej.png' },
  { slug: 'ministere-solidarite', name: 'Ministère de la Solidarité et de la Lutte contre la Pauvreté', short: 'MSLP', category: 'institutionnels', type: 'Ministère', description: 'Tutelle et partenaire stratégique des actions de protection sociale.', zone: 'National', url: 'https://www.gouv.ci', logo: '/images/partenaires/cote-d-ivoire.svg' },
  { slug: 'ministere-hydraulique', name: 'Ministère de l’Hydraulique, de l’Assainissement et de la Salubrité', short: 'MINHAS', category: 'institutionnels', type: 'Ministère', description: 'Cadre institutionnel des interventions eau, hygiène et assainissement.', zone: 'National', url: 'https://www.gouv.ci', logo: '/images/partenaires/cote-d-ivoire.svg' },
  { slug: 'ministere-education', name: 'Ministère de l’Éducation nationale et de l’Alphabétisation', short: 'MENA', category: 'institutionnels', type: 'Ministère', description: 'Partenaire des programmes de classes passerelles et d’alphabétisation.', zone: 'National', url: 'https://www.education.gouv.ci', logo: '/images/partenaires/cote-d-ivoire.svg' },
  { slug: 'conseils-regionaux', name: 'Conseils régionaux du Hambol et du Bounkani', short: 'CR', category: 'institutionnels', type: 'Collectivités territoriales', description: 'Co-pilotage territorial et intégration des actions dans les plans de développement locaux.', zone: 'Hambol, Bounkani', url: 'https://www.gouv.ci', logo: '/images/partenaires/cote-d-ivoire.svg' },
  { slug: 'ong-partenaires', name: 'Réseau des ONG du Nord-Est', short: 'RONE', category: 'operationnels', type: 'Réseau d’ONG', description: 'Mise en œuvre conjointe et mutualisation des expertises de terrain.', zone: 'Bounkani, Gontougo', url: '#' },
  { slug: 'centres-sante', name: 'Districts sanitaires partenaires', short: 'DS', category: 'operationnels', type: 'Structures sanitaires', description: 'Référencement, dépistage nutritionnel et campagnes de santé communautaire.', zone: 'Gontougo, Indénié-Djuablin', url: '#' },
  { slug: 'ecoles', name: 'Établissements scolaires partenaires', short: 'ÉCOLES', category: 'operationnels', type: 'Établissements scolaires', description: 'Accueil des classes passerelles et des clubs citoyens.', zone: 'Bounkani, Béré, Worodougou', url: '#' },
  { slug: 'groupements-femmes', name: 'Groupements et coopératives de femmes', short: 'GF', category: 'communautaires', type: 'Organisations de base', description: 'Partenaires des activités génératrices de revenus et de l’épargne communautaire.', zone: 'Poro, Tchologo, Hambol', url: '#' },
  { slug: 'leaders', name: 'Chefferies et leaders religieux', short: 'LEAD', category: 'communautaires', type: 'Leaders communautaires', description: 'Relais essentiels de la mobilisation et de la cohésion sociale.', zone: 'Toutes zones', url: '#' },
]

/* ------------------------------------------------------------------ */
/* Projets (en cours / achevés / en conception — CDC §4)               */
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
  budget?: string
  dateReference?: string
  beneficiaires: number
  beneficiairesLabel: string
  image: string
  summary: string
  objectifs: string[]
  activites: string[]
  resultats: string[]
  indicateurs: { label: string; cible: number; atteint: number; unite?: string }[]
  tauxRealisation?: number
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
  {
    slug: 'pasea',
    name: 'PASEA',
    fullName: 'Projet d’Amélioration des Services d’Eau et d’Assainissement',
    status: 'en-cours',
    domain: 'eau-hygiene-assainissement',
    regions: ['hambol'],
    zone: 'Hambol · Département de Katiola (10 villages)',
    partners: ['banque-mondiale', 'ministere-hydraulique', 'conseils-regionaux'],
    periode: '2024 – 2026',
    duree: '30 mois (en cours d’exécution)',
    dateReference: '31 décembre 2024 (Rapport de supervision et suivi physique)',
    beneficiaires: 8400,
    beneficiairesLabel: 'bénéficiaires directs',
    image: images.latrines,
    summary: 'Amélioration durable de l’accès à l’eau potable, à l’assainissement et à l’hygiène pour les populations de 10 villages du département de Katiola, avec construction de 788 latrines et accompagnement de 9 TPE locales.',
    objectifs: [
      'Construire 788 latrines familiales durables dans 10 villages ciblés de Katiola',
      'Accompagner et professionnaliser 9 Très Petites Entreprises (TPE) locales dans la filière assainissement',
      'Mettre fin à la défécation à l’air libre (processus de certification FDAL) au bénéfice de 8 400 personnes',
      'Ancrer les bonnes pratiques d’hygiène, notamment le lavage des mains au savon et la gestion communautaire',
    ],
    activites: [
      'Déclenchement de l’Assainissement Total Piloté par la Communauté (ATPC) dans 10 villages',
      'Construction et contrôle technique de 788 latrines familiales adaptées',
      'Formation et accompagnement entrepreneurial de 9 TPE locales',
      'Installation de dispositifs de lavage des mains et dynamisation des comités villageois d’hygiène',
    ],
    resultats: [
      '788 latrines familiales réalisées et réceptionnées',
      '9 TPE locales formées, équipées et opérationnelles sur la chaîne de valeur de l’assainissement',
      '10 villages engagés résolument vers la certification officielle « Fin de la défécation à l’air libre » (FDAL)',
      '8 400 personnes bénéficiant d’un cadre de vie assaini et de pratiques d’hygiène pérennes',
    ],
    indicateurs: [
      { label: 'Latrines construites', cible: 788, atteint: 788 },
      { label: 'Villages couverts', cible: 10, atteint: 10 },
      { label: 'TPE locales accompagnées', cible: 9, atteint: 9 },
      { label: 'Dispositifs de lavage des mains', cible: 900, atteint: 640 },
    ],
    tauxRealisation: 93,
    temoignage: { quote: 'Avant, nos enfants tombaient souvent malades. Aujourd’hui chaque famille a sa latrine et on se lave les mains au savon.', author: 'Awa K.', role: 'Présidente du comité d’hygiène, Fronan' },
  },
  {
    slug: 'swedd',
    name: 'SWEDD',
    fullName: 'Projet pour l’Autonomisation des Femmes et le Dividende Démographique au Sahel',
    status: 'acheve',
    domain: 'autonomisation-femmes-jeunes',
    regions: ['bounkani', 'gontougo', 'belier', 'nzi', 'moronou', 'iffou'],
    zone: 'Bounkani, Gontougo, Bélier, N’Zi, Moronou, Iffou',
    partners: ['banque-mondiale', 'unfpa', 'ministere-solidarite'],
    periode: '2022 – 2024 (Contrat signé en Oct. 2020, clôturé au 31 déc. 2024)',
    duree: '3 ans (Clôturé avec succès au 31/12/2024)',
    dateReference: '31 décembre 2024 (Clôture contractuelle certifiée avec quitus)',
    beneficiaires: 1850,
    beneficiairesLabel: 'adolescentes et jeunes filles accompagnées',
    image: images.espaceSur,
    summary: 'Autonomisation des adolescentes et jeunes filles vulnérables à travers 74 espaces sûrs, le renforcement des compétences de vie, la santé de la reproduction et le maintien scolaire dans 6 régions.',
    objectifs: [
      'Renforcer les compétences de vie et l’estime de soi de 1 850 adolescentes vulnérables',
      'Prévenir les mariages d’enfants et les grossesses précoces en milieu scolaire et rural',
      'Assurer le maintien et la rétention scolaire des jeunes filles vulnérables',
      'Mobiliser les parents, chefs coutumiers et leaders religieux pour l’émancipation des filles',
    ],
    activites: [
      'Ouverture et gestion de 74 espaces sûrs fonctionnels dans 6 régions de Côte d’Ivoire',
      'Formation, encadrement et déploiement de 74 mentores communautaires certifiées',
      'Distribution de kits scolaires, kits d’hygiène menstruelle et appuis nutritionnels',
      'Sessions d’animation communautaire et dialogues intergénérationnels',
    ],
    resultats: [
      '1 850 adolescentes et jeunes filles formées et autonomisées',
      '74 mentores communautaires opérationnelles sur le terrain',
      '96 % de taux de maintien scolaire validé parmi les adolescentes inscrites',
      'Contrat d’EICF achevé et clôturé au 31 décembre 2024 avec quitus des partenaires',
    ],
    indicateurs: [
      { label: 'Adolescentes en espaces sûrs', cible: 1850, atteint: 1850 },
      { label: 'Espaces sûrs fonctionnels', cible: 74, atteint: 74 },
      { label: 'Taux de maintien scolaire', cible: 90, atteint: 96, unite: '%' },
    ],
    tauxRealisation: 100,
    temoignage: { quote: 'Dans l’espace sûr, j’ai appris à parler devant les autres et à avoir confiance en mon potentiel. Je poursuis mes études avec détermination.', author: 'Salimata, 15 ans', role: 'Participante, Bouna' },
  },
  {
    slug: 'pejedec-bagoue',
    name: 'PEJEDEC II & III (Bagoué)',
    fullName: 'Projet Emploi Jeune et Développement des Compétences — Région de la Bagoué',
    status: 'acheve',
    domain: 'entrepreneuriat-insertion',
    regions: ['bagoue'],
    zone: 'Région de la Bagoué (Boundiali, Kouto, Tengréla)',
    partners: ['banque-mondiale', 'bcp-emploi', 'aej'],
    periode: '2015 – 2020',
    duree: '5 ans (Achevé et capitalisé)',
    dateReference: 'Rapport d’achèvement et d’évaluation d’impact PEJEDEC / Banque mondiale',
    beneficiaires: 3200,
    beneficiairesLabel: 'jeunes bénéficiaires directs de THIMO et d’AGR',
    image: images.pejedecJeunes,
    summary: 'Mise en œuvre des Travaux à Haute Intensité de Main-d’Œuvre (THIMO), structuration des Associations Villageoises d’Épargne et de Crédit (AVEC) et autonomisation économique des jeunes dans la Bagoué.',
    objectifs: [
      'Insérer 3 000+ jeunes vulnérables via les chantiers communaux d’utilité publique (THIMO)',
      'Mettre en place et autonomiser des groupes d’épargne et de crédit solidaire (AVEC)',
      'Financer et installer les micro-entreprises viables des jeunes bénéficiaires',
      'Renforcer l’employabilité des jeunes ruraux à travers des formations aux compétences de vie',
    ],
    activites: [
      'Déploiement de chantiers communautaires THIMO dans les communes de la Bagoué',
      'Constitution et formation de 85 groupes AVEC',
      'Formations en gestion d’entreprise simplifiée et compétences professionnelles',
      'Attribution de subventions d’installation et suivi de proximité',
    ],
    resultats: [
      '3 200 jeunes mobilisés et rémunérés sur les chantiers THIMO',
      '85 groupes AVEC créés et capitalisés',
      '780 micro-entreprises individuelles et collectives en activité pérenne',
      'Contrat achevé avec succès selon les critères de conformité de la Banque mondiale',
    ],
    indicateurs: [
      { label: 'Jeunes insérés via THIMO', cible: 3000, atteint: 3200 },
      { label: 'Groupes AVEC créés', cible: 80, atteint: 85 },
      { label: 'Micro-entreprises installées', cible: 700, atteint: 780 },
    ],
    tauxRealisation: 100,
  },
  {
    slug: 'pejedec-agneby',
    name: 'PEJEDEC II & III (Agnéby-Tiassa)',
    fullName: 'Insertion socio-économique et formation des jeunes — Région de l’Agnéby-Tiassa',
    status: 'acheve',
    domain: 'entrepreneuriat-insertion',
    regions: ['agneby-tiassa'],
    zone: 'Région de l’Agnéby-Tiassa (Agboville, Tiassalé, Sikensi)',
    partners: ['banque-mondiale', 'bcp-emploi', 'aej'],
    periode: '2016 – 2021',
    duree: '5 ans (Achevé et capitalisé)',
    dateReference: 'Rapport final de clôture AEJ / Banque mondiale',
    beneficiaires: 2850,
    beneficiairesLabel: 'jeunes formés et insérés',
    image: images.pejedecThimo,
    summary: 'Formation par apprentissage chez les maîtres artisans, octroi de kits professionnels et installation d’activités génératrices de revenus durables dans l’Agnéby-Tiassa.',
    objectifs: [
      'Former 2 500 jeunes déscolarisés par la voie de l’apprentissage dual',
      'Dotera les artisans locaux de compétences pédagogiques certifiées',
      'Faciliter l’insertion professionnelle durable des jeunes dans les filières porteuses',
    ],
    activites: [
      'Sélection et contractualisation avec 180 maîtres artisans formateurs',
      'Formation théorique et pratique des apprentis',
      'Dotation en kits d’outillage professionnel complets',
      'Accompagnement post-formation et coaching entrepreneurial',
    ],
    resultats: [
      '2 850 jeunes certifiés et insérés dans le tissu économique local',
      '180 ateliers artisanaux modernisés et renforcés',
      '74 % de taux d’insertion professionnelle pérenne mesuré à 18 mois',
    ],
    indicateurs: [
      { label: 'Jeunes formés et insérés', cible: 2500, atteint: 2850 },
      { label: 'Ateliers partenaires', cible: 150, atteint: 180 },
      { label: 'Taux d’insertion pérenne', cible: 70, atteint: 74, unite: '%' },
    ],
    tauxRealisation: 100,
  },
  {
    slug: 'avec-aej-folon',
    name: 'Projet AVEC-AEJ (Folon)',
    fullName: 'Accompagnement des Associations Villageoises d’Épargne et de Crédit — Région du Folon',
    status: 'acheve',
    domain: 'autonomisation-femmes-jeunes',
    regions: ['folon'],
    zone: 'Région du Folon (Minignan, Kaniasso)',
    partners: ['aej', 'ministere-solidarite'],
    periode: '2017 – 2021',
    duree: '4 ans (Achevé et capitalisé)',
    dateReference: 'Rapport de capitalisation AVEC-AEJ',
    beneficiaires: 1950,
    beneficiairesLabel: 'femmes et jeunes membres des AVEC',
    image: images.femmes,
    summary: 'Inclusion financière de proximité, structuration de 65 associations villageoises d’épargne et de crédit (AVEC) et financement d’activités de transformation agricole dans le Folon.',
    objectifs: [
      'Faciliter l’accès aux micro-financements communautaires pour les femmes rurales',
      'Structurer et autonomiser 60 associations villageoises AVEC',
      'Développer les chaînes de valeur locales (anacarde, vivriers, maraîchage)',
    ],
    activites: [
      'Sensibilisation et mise en place de 65 caisses de solidarité villageoises',
      'Formations en gestion financière simplifiée et calcul d’intérêts',
      'Dotation en kits sécurisés de gestion d’épargne',
      'Financement d’AGR collectives de transformation',
    ],
    resultats: [
      '65 AVEC fonctionnelles et pérennes dans le Folon',
      '1 950 personnes (dont 82 % de femmes) autonomisées financièrement',
      'Plus de 45 millions FCFA d’épargne locale mobilisée et redistribuée en crédits productifs',
    ],
    indicateurs: [
      { label: 'Groupes AVEC créés', cible: 60, atteint: 65 },
      { label: 'Femmes et jeunes accompagnés', cible: 1800, atteint: 1950 },
    ],
    tauxRealisation: 100,
  },
  {
    slug: 'clef-san-pedro',
    name: 'Projet CLEF / Passerelles (San Pédro)',
    fullName: 'Projet CLEF — Classes passerelles pour l’éducation et la réinsertion scolaire dans la région de San Pédro',
    status: 'acheve',
    domain: 'education-formation-alphabetisation',
    regions: ['san-pedro'],
    zone: 'Région de San Pédro (zones rurales et cacaoyères)',
    partners: ['unicef', 'ministere-education'],
    periode: '2019 – 2023',
    duree: '4 ans (Achevé)',
    dateReference: 'Rapport d’évaluation conjointe UNICEF / CLEF',
    beneficiaires: 2665,
    beneficiairesLabel: 'enfants réinsérés dans le système scolaire formel',
    image: images.education,
    summary: 'Réinsertion scolaire accélérée des enfants déscolarisés ou non scolarisés en zones rurales de San Pédro, appui nutritionnel et sensibilisation communautaire contre le travail des enfants.',
    objectifs: [
      'Réinsérer 2 500 enfants hors école dans le primaire formel via le programme passerelle',
      'Lutter contre le travail des enfants dans les communautés productrices de cacao',
      'Renforcer les capacités pédagogiques des enseignants et encadreurs communautaires',
    ],
    activites: [
      'Ouverture de centres passerelles et enseignement accéléré de 9 mois',
      'Fourniture de kits scolaires complets et cantines de soutien',
      'Sensibilisation des coopératives agricoles et familles paysannes',
      'Réintégration formelle dans les écoles primaires publiques',
    ],
    resultats: [
      '2 665 enfants (dont 54 % de filles) réintégrés avec succès à l’école',
      '88 % de taux de réussite aux examens de passage au CM2 / CEPE',
      '35 comités villageois de protection scolaire actifs',
    ],
    indicateurs: [
      { label: 'Enfants réinsérés', cible: 2500, atteint: 2665 },
      { label: 'Taux de maintien scolaire', cible: 85, atteint: 88, unite: '%' },
    ],
    tauxRealisation: 100,
  },
  {
    slug: 'pddivs-bouna',
    name: 'Projet PDDIVS (Bouna)',
    fullName: 'Projet de Développement Durable et Inclusif des Villes Secondaires — Commune de Bouna',
    status: 'acheve',
    domain: 'developpement-communautaire',
    regions: ['bounkani'],
    zone: 'Commune de Bouna (Région du Bounkani)',
    partners: ['banque-mondiale', 'conseils-regionaux'],
    periode: '2018 – 2022',
    duree: '4 ans (Achevé)',
    dateReference: 'Rapport d’achèvement PDDIVS / Banque mondiale',
    beneficiaires: 14000,
    beneficiairesLabel: 'habitants bénéficiaires d’infrastructures et services de base',
    image: images.assembleeVillage,
    summary: 'Amélioration de l’accès aux infrastructures de base, salubrité urbaine, réhabilitation d’équipements marchands et participation citoyenne inclusive à Bouna.',
    objectifs: [
      'Améliorer les conditions de vie et d’hygiène des populations urbaines et périurbaines de Bouna',
      'Réhabiliter des infrastructures communautaires clés et points d’eau',
      'Mobiliser la concertation citoyenne et la cohésion sociale locale',
    ],
    activites: [
      'Travaux d’assainissement urbain et gestion des déchets',
      'Aménagement d’espaces marchands et réhabilitation de points d’eau',
      'Mise en place de comités de quartier et concertations publiques',
    ],
    resultats: [
      '14 000 habitants bénéficiant d’infrastructures urbaines améliorées',
      'Renforcement substantiel de la cohésion sociale et du cadre de vie',
    ],
    indicateurs: [
      { label: 'Habitants bénéficiaires', cible: 12000, atteint: 14000 },
    ],
    tauxRealisation: 100,
  },
  {
    slug: 'pnud-tonkpi-cavally',
    name: 'Programmes PNUD (Tonkpi & Cavally)',
    fullName: 'Programmes de Cohésion Sociale, Paix et Relèvement Communautaire du PNUD',
    status: 'acheve',
    domain: 'paix-cohesion-sociale',
    regions: ['tonkpi', 'cavally'],
    zone: 'Régions du Tonkpi (Man) et du Cavally (Guiglo, Duékoué)',
    partners: ['pnud'],
    periode: '2012 – 2017',
    duree: '5 ans (Achevé et capitalisé)',
    dateReference: 'Rapport de capitalisation PNUD Côte d’Ivoire',
    beneficiaires: 8500,
    beneficiairesLabel: 'bénéficiaires directs de dialogues de paix et d’appuis économiques',
    image: images.dialoguePaix,
    summary: 'Consolidation de la paix post-crise, comités de veille intercommunautaires, réconciliation et soutien socio-économique aux groupements de femmes dans l’Ouest ivoirien.',
    objectifs: [
      'Rétablir le dialogue intercommunautaire et la confiance mutuelle post-crise',
      'Mettre en place des mécanismes locaux d’alerte et de résolution pacifique des conflits',
      'Financer des activités génératrices de revenus communes pour rapprocher les communautés',
    ],
    activites: [
      'Animation de 45 dialogues communautaires inclusifs',
      'Mise en place de comités de veille villageois mixtes',
      'Financement et formation de 50 coopératives féminines multiethniques',
    ],
    resultats: [
      '8 500 personnes touchées directement par les initiatives de consolidation de la paix',
      'Plus de 60 conflits fonciers et communautaires résolus à l’amiable',
      'Modèle de cohésion sociale salué par le PNUD',
    ],
    indicateurs: [
      { label: 'Personnes mobilisées pour la paix', cible: 7500, atteint: 8500 },
      { label: 'Dialogues communautaires tenus', cible: 40, atteint: 45 },
    ],
    tauxRealisation: 100,
  },
  {
    slug: 'giz-bouna',
    name: 'Projet GIZ (Bouna)',
    fullName: 'Prévention des conflits et gestion de la transhumance — Coopération Allemande GIZ',
    status: 'acheve',
    domain: 'paix-cohesion-sociale',
    regions: ['bounkani'],
    zone: 'Bouna et corridors frontaliers (Région du Bounkani)',
    partners: ['giz'],
    periode: '2013 – 2016',
    duree: '3 ans (Achevé et capitalisé)',
    dateReference: 'Rapport d’évaluation de projet GIZ',
    beneficiaires: 4200,
    beneficiairesLabel: 'éleveurs, agriculteurs et leaders communautaires',
    image: images.groupeNotables,
    summary: 'Gestion pacifique de la transhumance transfrontalière, concertations régulières entre agriculteurs et éleveurs et prévention des conflits dans le Bounkani.',
    objectifs: [
      'Prévenir les affrontements liés au passage du bétail et aux dégâts de cultures',
      'Formaliser des couloirs de passage consensuels avec les chefferies',
      'Former des commissions mixtes paritaires de médiation',
    ],
    activites: [
      'Concertations locales préalables aux périodes de transhumance',
      'Balisage participatif de couloirs et points d’eau pastoraux',
      'Sessions de formation conjointe agriculteurs-éleveurs',
    ],
    resultats: [
      '4 200 acteurs locaux impliqués dans les mécanismes de paix',
      'Diminution drastique des incidents violents durant les saisons de transhumance',
    ],
    indicateurs: [
      { label: 'Acteurs formés et concertés', cible: 3500, atteint: 4200 },
    ],
    tauxRealisation: 100,
  },
  {
    slug: 'classes-passerelles',
    name: 'Classes passerelles',
    fullName: 'Classes passerelles pour enfants hors école',
    status: 'acheve',
    domain: 'education-formation-alphabetisation',
    regions: ['bounkani', 'bere', 'worodougou'],
    zone: 'Bounkani · Béré · Worodougou',
    partners: ['unicef', 'ministere-education', 'ecoles'],
    periode: '2021 – 2024',
    duree: '36 mois',
    budget: '340 M FCFA',
    beneficiaires: 5200,
    beneficiairesLabel: 'enfants scolarisés',
    image: images.education,
    summary: 'Favoriser le retour à l’école des enfants de 9 à 14 ans éloignés du système éducatif.',
    objectifs: ['Réinsérer les enfants hors école dans le cursus formel', 'Former les animateurs de classes passerelles', 'Mobiliser les parents autour de la scolarisation'],
    activites: ['Ouverture de 120 classes passerelles', 'Formation de 120 animateurs', 'Distribution de kits scolaires', 'Comités de gestion scolaire'],
    resultats: ['5 200 enfants scolarisés', '87 % réinsérés dans le cursus formel', '52 % de filles parmi les bénéficiaires'],
    indicateurs: [
      { label: 'Enfants inscrits', cible: 5000, atteint: 5200 },
      { label: 'Taux de réinsertion', cible: 80, atteint: 87, unite: '%' },
      { label: 'Classes ouvertes', cible: 120, atteint: 120 },
    ],
    tauxRealisation: 104,
    temoignage: { quote: 'Mon fils gardait les bœufs. Aujourd’hui il est en CM1 et il m’apprend à lire.', author: 'Issouf T.', role: 'Parent d’élève, Doropo' },
    lecons: ['L’implication des chefferies accélère l’adhésion des parents', 'Le recrutement d’animateurs locaux réduit l’abandon', 'Le calendrier doit s’adapter aux saisons agricoles'],
  },
  {
    slug: 'cohesion-plus',
    name: 'COHÉSION+',
    fullName: 'Dialogue et cohésion sociale dans les zones frontalières',
    status: 'acheve',
    domain: 'paix-cohesion-sociale',
    regions: ['tchologo', 'tonkpi', 'bounkani'],
    zone: 'Tchologo · Tonkpi · Bounkani',
    partners: ['union-europeenne', 'leaders', 'ong-partenaires'],
    periode: '2022 – 2025',
    duree: '30 mois',
    budget: '260 M FCFA',
    beneficiaires: 15400,
    beneficiairesLabel: 'membres des communautés',
    image: images.dialogue,
    summary: 'Prévenir les conflits communautaires et renforcer la participation des jeunes et des femmes à la vie locale.',
    objectifs: ['Mettre en place des mécanismes locaux de médiation', 'Renforcer le dialogue intercommunautaire', 'Engager les jeunes dans la citoyenneté active'],
    activites: ['Formation de 140 médiateurs', 'Organisation de 90 dialogues communautaires', 'Création de 30 clubs citoyens', 'Système d’alerte précoce par SMS'],
    resultats: ['57 communautés mobilisées', '140 médiateurs formés', '82 % des conflits signalés résolus à l’amiable'],
    indicateurs: [
      { label: 'Communautés mobilisées', cible: 50, atteint: 57 },
      { label: 'Médiateurs formés', cible: 120, atteint: 140 },
      { label: 'Conflits résolus à l’amiable', cible: 70, atteint: 82, unite: '%' },
    ],
    tauxRealisation: 112,
    lecons: ['Les femmes médiatrices sont déterminantes pour les conflits fonciers', 'L’alerte précoce doit être adossée aux autorités locales'],
  },
  {
    slug: 'jeunes-emploi',
    name: 'JEUNES & EMPLOI',
    fullName: 'Insertion socio-économique des jeunes du Hambol et du Gbêkê',
    status: 'acheve',
    domain: 'entrepreneuriat-insertion',
    regions: ['hambol', 'gbeke'],
    zone: 'Hambol · Gbêkê (Centre)',
    partners: ['afd', 'conseils-regionaux'],
    periode: '2021 – 2023',
    duree: '24 mois',
    budget: '230 M FCFA',
    beneficiaires: 920,
    beneficiairesLabel: 'jeunes formés',
    image: images.moussa,
    summary: 'Former les jeunes à un métier et accompagner l’installation de leurs activités génératrices de revenus.',
    objectifs: ['Former 900 jeunes par apprentissage', 'Installer 400 micro-entreprises', 'Faciliter l’accès au crédit'],
    activites: ['Apprentissage chez des maîtres artisans', 'Kits d’installation', 'Coaching entrepreneurial', 'Mise en relation avec la micro-finance'],
    resultats: ['920 jeunes formés', '410 AGR installées', '71 % des activités toujours actives après 12 mois'],
    indicateurs: [
      { label: 'Jeunes formés', cible: 900, atteint: 920 },
      { label: 'AGR installées', cible: 400, atteint: 410 },
      { label: 'Activités pérennes à 12 mois', cible: 65, atteint: 71, unite: '%' },
    ],
    tauxRealisation: 102,
    temoignage: { quote: 'Avec le kit de soudure, j’ai ouvert mon atelier. J’emploie aujourd’hui deux apprentis.', author: 'Moussa D.', role: 'Soudeur, Katiola' },
    lecons: ['Le coaching post-installation est décisif pour la pérennité', 'Les filières doivent répondre à la demande locale'],
  },
  {
    slug: 'ecoles-vertes',
    name: 'ÉCOLES VERTES',
    fullName: 'Écoles vertes et résilientes du Gbêkê et du Poro',
    status: 'conception',
    domain: 'environnement-developpement-durable',
    regions: ['gbeke', 'poro'],
    zone: 'Gbêkê · Poro',
    partners: ['ministere-education'],
    periode: '2027 – 2029',
    duree: '36 mois',
    budget: '310 M FCFA (estimatif)',
    beneficiaires: 7500,
    beneficiairesLabel: 'élèves',
    image: images.education,
    summary: 'Transformer 12 écoles en lieux d’apprentissage écologique : jardins scolaires, reboisement, énergie solaire.',
    objectifs: ['Créer 12 jardins scolaires nutritifs', 'Planter 20 000 arbres', 'Équiper les écoles en énergie solaire'],
    activites: ['Clubs environnement', 'Jardins et cantines scolaires', 'Kits solaires', 'Formation des enseignants'],
    resultats: ['Résultats attendus : 7 500 élèves sensibilisés, 12 écoles labellisées'],
    indicateurs: [],
    problematique: 'Dégradation du couvert végétal et faible résilience climatique des écoles rurales.',
    besoinFinancement: '310 M FCFA',
    financementAcquis: 15,
  },
  {
    slug: 'karite-femmes',
    name: 'KARITÉ & FEMMES',
    fullName: 'Chaîne de valeur karité pour les coopératives féminines',
    status: 'conception',
    domain: 'entrepreneuriat-insertion',
    regions: ['poro', 'tchologo'],
    zone: 'Poro · Tchologo (Nord)',
    partners: ['groupements-femmes'],
    periode: '2027 – 2029',
    duree: '30 mois',
    budget: '275 M FCFA (estimatif)',
    beneficiaires: 1600,
    beneficiairesLabel: 'productrices',
    image: images.femmes,
    summary: 'Structurer 20 coopératives de femmes autour de la transformation et de la commercialisation du beurre de karité.',
    objectifs: ['Équiper 20 unités de transformation', 'Certifier la qualité des produits', 'Accéder aux marchés nationaux et export'],
    activites: ['Équipements de transformation', 'Formation qualité et gestion', 'Plateforme de commercialisation', 'Épargne et crédit'],
    resultats: ['Résultats attendus : +40 % de revenus pour 1 600 productrices'],
    indicateurs: [],
    problematique: 'Faible valeur ajoutée captée par les productrices de karité.',
    besoinFinancement: '275 M FCFA',
    financementAcquis: 30,
  },
  {
    slug: 'urgence-inondations',
    name: 'RÉPONSE URGENCE',
    fullName: 'Préparation et réponse aux inondations urbaines',
    status: 'conception',
    domain: 'action-humanitaire-urgences',
    regions: ['abidjan', 'tonkpi'],
    zone: 'District d’Abidjan · Tonkpi',
    partners: [],
    periode: '2027',
    duree: '12 mois',
    budget: '150 M FCFA (estimatif)',
    beneficiaires: 2300,
    beneficiairesLabel: 'ménages',
    image: images.communaute,
    summary: 'Pré-positionner des stocks et former des équipes communautaires pour répondre aux inondations saisonnières.',
    objectifs: ['Pré-positionner 2 300 kits', 'Former 60 secouristes communautaires', 'Cartographier les zones à risque'],
    activites: ['Stocks de contingence', 'Formation premiers secours', 'Cartographie participative des risques', 'Plans de contingence communaux'],
    resultats: ['Résultats attendus : délai d’assistance réduit à moins de 72 h'],
    indicateurs: [],
    problematique: 'Inondations récurrentes touchant les quartiers précaires pendant la saison des pluies.',
    besoinFinancement: '150 M FCFA',
    financementAcquis: 0,
  },
]

/* ------------------------------------------------------------------ */
/* Cartographie : Région → Département → Sous-préfecture → Localité    */
/* ------------------------------------------------------------------ */

export type Localite = {
  name: string
  projects: string[]
  detail: string
  villages?: string[]
  bailleurs?: string[]
  realisations?: string
  beneficiaires?: number
  status?: 'en-cours' | 'acheve' | 'conception'
}

export type SousPrefecture = {
  name: string
  localites: Localite[]
}

export type Departement = {
  name: string
  sousPrefectures: SousPrefecture[]
}

export type Region = {
  id: string
  name: string
  chefLieu: string
  zone: 'Nord' | 'Nord-Est' | 'Centre' | 'Est' | 'Ouest' | 'Sud'
  lat: number
  lng: number
  villagesCount?: number
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
    villagesCount: 14,
    departements: [
      {
        name: 'Katiola',
        sousPrefectures: [
          {
            name: 'Fronan',
            localites: [
              {
                name: 'Fronan',
                projects: ['pasea'],
                detail: '4 villages · 312 latrines familiales · 4 TPE installées',
                villages: ['Fronan Centre', 'Koffikro', 'Nandikaha', 'Katienekaha'],
                bailleurs: ['Banque mondiale'],
                realisations: '312 latrines certifiées, 4 TPE accompagnées, 3 320 bénéficiaires',
                beneficiaires: 3320,
                status: 'en-cours',
              },
            ],
          },
          {
            name: 'Timbé',
            localites: [
              {
                name: 'Timbé',
                projects: ['pasea'],
                detail: '3 villages · 254 latrines familiales · 3 TPE installées',
                villages: ['Timbé Village', 'Ouereguékaha', 'Gbamélékaha'],
                bailleurs: ['Banque mondiale'],
                realisations: '254 latrines certifiées, 3 TPE accompagnées, 2 710 bénéficiaires',
                beneficiaires: 2710,
                status: 'en-cours',
              },
            ],
          },
          {
            name: 'Katiola',
            localites: [
              {
                name: 'Katiola (périphérie rurale)',
                projects: ['pasea'],
                detail: '3 villages · 222 latrines familiales · 2 TPE installées',
                villages: ['Kationron', 'Nikolo', 'Darakaha'],
                bailleurs: ['Banque mondiale'],
                realisations: '222 latrines certifiées, 2 TPE accompagnées, 2 370 bénéficiaires',
                beneficiaires: 2370,
                status: 'en-cours',
              },
              {
                name: 'Katiola (ville)',
                projects: ['jeunes-emploi'],
                detail: 'Insertion professionnelle et formation aux métiers de proximité',
                villages: ['Quartier Résidentiel', 'Quartier Lafonkaha'],
                bailleurs: ['Coopération technique'],
                realisations: '310 jeunes formés et dotés de kits d’installation',
                beneficiaires: 310,
                status: 'acheve',
              },
            ],
          },
        ],
      },
      {
        name: 'Dabakala',
        sousPrefectures: [
          {
            name: 'Dabakala',
            localites: [
              {
                name: 'Dabakala Centre & villages',
                projects: ['jeunes-emploi'],
                detail: '140 Activités Génératrices de Revenus (AGR) pour femmes et jeunes',
                villages: ['Dabakala Commune', 'Boniérédougou'],
                bailleurs: ['Partenaires nationaux'],
                realisations: '140 micro-entreprises rurales financées et pérennisées',
                beneficiaires: 140,
                status: 'acheve',
              },
            ],
          },
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
    villagesCount: 22,
    departements: [
      {
        name: 'Bouna',
        sousPrefectures: [
          {
            name: 'Bouna',
            localites: [
              {
                name: 'Bouna Ville & périphérie',
                projects: ['pddivs-bouna', 'giz-bouna', 'swedd'],
                detail: 'Développement urbain PDDIVS, médiation pastorale GIZ et 32 espaces sûrs SWEDD',
                villages: ['Bouna Commune', 'Vonkoro', 'Saye', 'Bouko'],
                bailleurs: ['Banque mondiale', 'GIZ', 'UNFPA'],
                realisations: 'Infrastructures urbaines pour 14 000 hab., 4 200 acteurs formés à la paix, 810 adolescentes accompagnées',
                beneficiaires: 19010,
                status: 'acheve',
              },
              {
                name: 'Ondéfidouo',
                projects: ['swedd'],
                detail: '12 espaces sûrs et comités d’encadrement communautaire des filles',
                villages: ['Ondéfidouo', 'Gogo', 'Yalo'],
                bailleurs: ['UNFPA', 'Banque mondiale'],
                realisations: '12 espaces sûrs fonctionnels, 300 adolescentes formées en compétences de vie',
                beneficiaires: 300,
                status: 'acheve',
              },
            ],
          },
        ],
      },
      {
        name: 'Doropo',
        sousPrefectures: [
          {
            name: 'Doropo',
            localites: [
              {
                name: 'Doropo Centre & villages frontaliers',
                projects: ['cohesion-plus'],
                detail: 'Comités de paix, veille communautaire et cohésion transfrontalière',
                villages: ['Doropo Centre', 'Kalamon', 'Niamoue'],
                bailleurs: ['Partenaires multilatéraux'],
                realisations: '18 comités de paix installés et formés à la résolution pacifique des litiges',
                beneficiaires: 1200,
                status: 'en-cours',
              },
            ],
          },
        ],
      },
      {
        name: 'Téhini',
        sousPrefectures: [
          {
            name: 'Téhini',
            localites: [
              {
                name: 'Téhini',
                projects: ['cohesion-plus'],
                detail: '14 dialogues intercommunautaires et mécanisme d’alerte précoce',
                villages: ['Téhini', 'Togolokaye', 'Gouméré'],
                bailleurs: ['Partenaires multilatéraux'],
                realisations: '14 dialogues communautaires tenus, 800 participants directs',
                beneficiaires: 800,
                status: 'en-cours',
              },
            ],
          },
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
    lng: -6.49,
    villagesCount: 18,
    departements: [
      {
        name: 'Boundiali',
        sousPrefectures: [
          {
            name: 'Boundiali',
            localites: [
              {
                name: 'Boundiali & villages ruraux',
                projects: ['pejedec-bagoue'],
                detail: 'Projet PEJEDEC II & III — THIMO, caisses AVEC et insertion économique de 3 200 jeunes',
                villages: ['Boundiali Commune', 'Ganaoni', 'Kasséré', 'Siempurgo'],
                bailleurs: ['Banque mondiale', 'BCP-Emploi'],
                realisations: '85 groupes d’épargne AVEC structurés, chantiers THIMO réalisés, 3 200 jeunes insérés',
                beneficiaires: 3200,
                status: 'acheve',
              },
            ],
          },
        ],
      },
      {
        name: 'Kouto',
        sousPrefectures: [
          {
            name: 'Kouto',
            localites: [
              {
                name: 'Kouto & Blessingue',
                projects: ['pejedec-bagoue'],
                detail: 'Chantiers communautaires et caisses villageoises pour jeunes femmes',
                villages: ['Kouto Centre', 'Blessingue', 'Gbon'],
                bailleurs: ['Banque mondiale', 'BCP-Emploi'],
                realisations: '34 caisses villageoises AVEC actives, travaux d’utilité publique achevés',
                beneficiaires: 1150,
                status: 'acheve',
              },
            ],
          },
        ],
      },
      {
        name: 'Tengréla',
        sousPrefectures: [
          {
            name: 'Tengréla',
            localites: [
              {
                name: 'Tengréla',
                projects: ['pejedec-bagoue'],
                detail: 'Activités à haute intensité de main-d’œuvre et autonomisation des jeunes vulnérables',
                villages: ['Tengréla Ville', 'Kanakono', 'Débété'],
                bailleurs: ['Banque mondiale', 'BCP-Emploi'],
                realisations: '500 jeunes mobilisés sur des micro-projets de réhabilitation locale',
                beneficiaires: 500,
                status: 'acheve',
              },
            ],
          },
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
    lng: -4.22,
    villagesCount: 16,
    departements: [
      {
        name: 'Agboville',
        sousPrefectures: [
          {
            name: 'Agboville',
            localites: [
              {
                name: 'Agboville & axe Rubino',
                projects: ['pejedec-agneby'],
                detail: 'Projet PEJEDEC II & III — Formation par apprentissage et insertion de 2 850 jeunes',
                villages: ['Agboville Commune', 'Rubino', 'Grand-Yapo', 'Loviguié'],
                bailleurs: ['Banque mondiale', 'AEJ'],
                realisations: 'Placement en apprentissage certifié, kits d’installation professionnelle remis',
                beneficiaires: 2850,
                status: 'acheve',
              },
            ],
          },
        ],
      },
      {
        name: 'Tiassalé',
        sousPrefectures: [
          {
            name: 'Tiassalé',
            localites: [
              {
                name: 'Tiassalé & N’Douci',
                projects: ['pejedec-agneby'],
                detail: 'Accompagnement des maîtres artisans et suivi des apprentis',
                villages: ['Tiassalé Centre', 'N’Douci', 'Morokro'],
                bailleurs: ['Banque mondiale', 'AEJ'],
                realisations: '120 maîtres artisans agréés, 620 jeunes certifiés et insérés dans l’artisanat',
                beneficiaires: 620,
                status: 'acheve',
              },
            ],
          },
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
    villagesCount: 15,
    departements: [
      {
        name: 'San Pédro',
        sousPrefectures: [
          {
            name: 'San Pédro',
            localites: [
              {
                name: 'Campements cacaoyers et zones enclavées',
                projects: ['clef-san-pedro'],
                detail: 'Projet CLEF / Classes passerelles — Réinsertion scolaire formelle de 2 665 enfants',
                villages: ['Gabiadji', 'Doba', 'Kouamékro', 'Petit-Pedro'],
                bailleurs: ['UNICEF'],
                realisations: '120 classes passerelles accélérées, 2 665 enfants réintégrés dans l’école primaire formelle',
                beneficiaires: 2665,
                status: 'acheve',
              },
            ],
          },
        ],
      },
      {
        name: 'Grand-Béréby',
        sousPrefectures: [
          {
            name: 'Grand-Béréby',
            localites: [
              {
                name: 'Grand-Béréby',
                projects: ['clef-san-pedro'],
                detail: 'Sensibilisation contre le travail des enfants et kits de rentrée scolaire',
                villages: ['Grand-Béréby Centre', 'Mani-Kablaké'],
                bailleurs: ['UNICEF'],
                realisations: 'Comités villageois de protection scolaire installés, 450 kits distribués',
                beneficiaires: 450,
                status: 'acheve',
              },
            ],
          },
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
    lng: -7.61,
    villagesCount: 12,
    departements: [
      {
        name: 'Minignan',
        sousPrefectures: [
          {
            name: 'Minignan',
            localites: [
              {
                name: 'Minignan & Kaniasso',
                projects: ['avec-aej-folon'],
                detail: 'Projet AVEC-AEJ — Structuration de 65 caisses d’épargne et de crédit communautaires',
                villages: ['Minignan Commune', 'Kaniasso', 'Goulia', 'Tienko'],
                bailleurs: ['AEJ', 'Ministère Promotion Jeunesse'],
                realisations: '65 groupes AVEC opérationnels, inclusion financière de proximité de 1 950 personnes',
                beneficiaires: 1950,
                status: 'acheve',
              },
            ],
          },
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
    villagesCount: 16,
    departements: [
      {
        name: 'Man',
        sousPrefectures: [
          {
            name: 'Man',
            localites: [
              {
                name: 'Man & villages périurbains',
                projects: ['pnud-tonkpi-cavally', 'cohesion-plus'],
                detail: 'Programmes PNUD — Consolidation de la paix, dialogue communautaire et AGR pour femmes',
                villages: ['Man Commune', 'Podbeugoupleu', 'Zadepleu', 'Biakale'],
                bailleurs: ['PNUD'],
                realisations: '18 comités mixtes de veille et de médiation, 8 500 bénéficiaires directs accompagnés',
                beneficiaires: 8500,
                status: 'acheve',
              },
            ],
          },
        ],
      },
      {
        name: 'Danané',
        sousPrefectures: [
          {
            name: 'Danané',
            localites: [
              {
                name: 'Danané',
                projects: ['cohesion-plus'],
                detail: 'Plateforme de concertation transfrontalière et médiation foncière',
                villages: ['Danané Ville', 'Mahapleu', 'Daleu'],
                bailleurs: ['Partenaires multilatéraux'],
                realisations: '12 dialogues intercommunautaires, réconciliation de groupements agro-pastoraux',
                beneficiaires: 1400,
                status: 'en-cours',
              },
            ],
          },
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
    villagesCount: 14,
    departements: [
      {
        name: 'Bondoukou',
        sousPrefectures: [
          {
            name: 'Bondoukou',
            localites: [
              {
                name: 'Bondoukou & axe frontalier',
                projects: ['swedd'],
                detail: 'Projet SWEDD — 30 espaces sûrs pour le maintien scolaire et l’autonomisation des filles',
                villages: ['Bondoukou Commune', 'Gouméré', 'Sorobango', 'Tagadi'],
                bailleurs: ['Banque mondiale', 'UNFPA'],
                realisations: '30 espaces sûrs certifiés, 98 % de taux de maintien scolaire chez les adolescentes',
                beneficiaires: 750,
                status: 'acheve',
              },
            ],
          },
        ],
      },
      {
        name: 'Tanda',
        sousPrefectures: [
          {
            name: 'Tanda',
            localites: [
              {
                name: 'Tanda',
                projects: ['swedd'],
                detail: '18 espaces sûrs et comités villageois de lutte contre les mariages précoces',
                villages: ['Tanda Commune', 'Amanvi', 'Diamba'],
                bailleurs: ['Banque mondiale', 'UNFPA'],
                realisations: '18 espaces sûrs actifs, 450 adolescentes encadrées par des mentores communautaires',
                beneficiaires: 450,
                status: 'acheve',
              },
            ],
          },
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
    villagesCount: 15,
    departements: [
      {
        name: 'Korhogo',
        sousPrefectures: [
          {
            name: 'Korhogo',
            localites: [
              {
                name: 'Korhogo & périphérie',
                projects: ['cohesion-plus', 'ecoles-vertes'],
                detail: 'Comités de paix COHÉSION+ et projet en conception Écoles Vertes',
                villages: ['Korhogo Ville', 'Koni', 'Karakoro'],
                bailleurs: ['Partenaires techniques'],
                realisations: '24 comités de paix actifs, pépinières scolaires expérimentales',
                beneficiaires: 1800,
                status: 'en-cours',
              },
            ],
          },
          {
            name: 'Napiéolédougou',
            localites: [
              {
                name: 'Napiéolédougou',
                projects: ['karite-femmes'],
                detail: 'Projet en conception : Structuration de 8 coopératives de femmes productrices de beurre de karité',
                villages: ['Napié', 'Komborodougou'],
                bailleurs: ['Appels à partenariat'],
                realisations: 'Étude de faisabilité et identification des groupements féminins',
                beneficiaires: 400,
                status: 'conception',
              },
            ],
          },
        ],
      },
      {
        name: 'Sinématiali',
        sousPrefectures: [
          {
            name: 'Sinématiali',
            localites: [
              {
                name: 'Sinématiali',
                projects: ['cohesion-plus'],
                detail: '9 comités de médiation pastorale et concertation rurale',
                villages: ['Sinématiali Centre', 'Bahouakaha'],
                bailleurs: ['Partenaires multilatéraux'],
                realisations: '9 comités de médiation formés et équipés',
                beneficiaires: 650,
                status: 'en-cours',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tchologo',
    name: 'Tchologo',
    chefLieu: 'Ferkessédougou',
    zone: 'Nord',
    lat: 9.59,
    lng: -5.19,
    villagesCount: 14,
    departements: [
      {
        name: 'Ferkessédougou',
        sousPrefectures: [
          {
            name: 'Ferkessédougou',
            localites: [
              {
                name: 'Ferkessédougou',
                projects: ['cohesion-plus'],
                detail: 'Prévention de l’extrémisme violent et dialogues communautaires « Non à l’extrémisme, Oui à la paix »',
                villages: ['Ferké Commune', 'Togoniéré', 'Koumbala'],
                bailleurs: ['Partenaires multilatéraux'],
                realisations: '22 ateliers et dialogues tenus, 1 500 jeunes et femmes formés',
                beneficiaires: 1500,
                status: 'en-cours',
              },
            ],
          },
        ],
      },
      {
        name: 'Ouangolodougou',
        sousPrefectures: [
          {
            name: 'Ouangolodougou',
            localites: [
              {
                name: 'Ouangolodougou (zone frontalière)',
                projects: ['cohesion-plus'],
                detail: 'Système d’alerte précoce et veille citoyenne transfrontalière',
                villages: ['Ouangolodougou Centre', 'Niellé', 'Diawala'],
                bailleurs: ['Partenaires multilatéraux'],
                realisations: 'Réseau d’observateurs communautaires opérationnel',
                beneficiaires: 950,
                status: 'en-cours',
              },
            ],
          },
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
    villagesCount: 10,
    departements: [
      {
        name: 'Bouaké',
        sousPrefectures: [
          {
            name: 'Bouaké',
            localites: [
              {
                name: 'Bouaké & Sakassou',
                projects: ['jeunes-emploi', 'ecoles-vertes'],
                detail: 'Formation professionnelle de 470 jeunes et expérimentation d’éco-écoles',
                villages: ['Bouaké Commune', 'Djébonoua', 'Sakassou'],
                bailleurs: ['Partenaires techniques'],
                realisations: '470 jeunes formés et insérés, 6 comités écologiques scolaires',
                beneficiaires: 470,
                status: 'acheve',
              },
            ],
          },
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
    villagesCount: 6,
    departements: [
      {
        name: 'Abidjan',
        sousPrefectures: [
          {
            name: 'Abobo',
            localites: [
              {
                name: 'Abobo & Yopougon',
                projects: ['urgence-inondations'],
                detail: 'Siège national EICF et projet de résilience d’urgence face aux inondations urbaines',
                villages: ['Abobo Clouetcha', 'Yopougon Gesco'],
                bailleurs: ['Appels à partenariat'],
                realisations: 'Cartographie des zones inondables et formation de comités d’alerte',
                beneficiaires: 1200,
                status: 'conception',
              },
            ],
          },
        ],
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Actualités & événements (CDC §4 – 8 catégories)                     */
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
  category: NewsCategory
  image: string
  excerpt: string
  project?: string
  location?: string
  author?: string
  body: string[]
  keyPoints?: string[]
}

export const news: NewsItem[] = [
  {
    slug: 'katiola-latrines-fdal-pasea',
    title: 'Assainissement rural : 788 latrines familiales certifiées et 10 villages déclarés FDAL à Katiola',
    date: '2024-10-16',
    category: 'Activités terrain',
    image: images.latrines,
    project: 'pasea',
    location: 'Fronan & Katiola, Région du Hambol',
    author: 'Cellule Communication & Redevabilité EICF',
    excerpt: 'Dans le cadre du projet PASEA financé par la Banque mondiale, dix villages du département de Katiola ont franchi l’étape décisive de la certification officielle « Fin de la défécation à l’air libre » (FDAL).',
    keyPoints: [
      '788 latrines familiales durables construites et certifiées par les services d’hygiène',
      '10 comités villageois d’hygiène et d’assainissement formés et actifs',
      'Zéro épidémie de choléra et réduction majeure des diarrhées infantiles',
      'Accompagnement de 9 Très Petites Entreprises (TPE) locales de maçonnerie sanitaire',
    ],
    body: [
      'L’aboutissement d’un travail communautaire de plus de 18 mois a été solennellement célébré à Fronan, chef-lieu de sous-préfecture du département de Katiola. Grâce à l’approche participative d’Assainissement Total Piloté par la Communauté (ATPC) mise en œuvre par l’ONG EICF dans le cadre du Projet d’Assainissement et d’Eau Potable en Milieu Rural (PASEA), dix localités ont été certifiées sans défécation à l’air libre.',
      'Au total, 788 latrines familiales ont été érigées par les ménages eux-mêmes, bénéficiant des conseils techniques réguliers des équipes d’EICF et du savoir-faire d’artisans locaux qualifiés.',
      '« Cette certification marque une rupture historique avec les pratiques du passé. Nos puits traditionnels ne sont plus contaminés lors des saisons des pluies, et nos enfants tombent beaucoup moins malades », a souligné le chef du village de Fronan lors de la remise symbolique des panneaux FDAL.',
      'Les équipes d’EICF et les agents de santé communautaire poursuivent un plan de pérennisation semestriel afin de maintenir le lavage régulier des mains au savon et la propreté irréprochable des ouvrages.',
    ],
  },
  {
    slug: 'cloture-reussie-swedd-adolescentes',
    title: 'Projet SWEDD : Bilan certifié de 18 mois d’autonomisation pour 1 560 adolescentes dans le Nord-Est',
    date: '2024-12-20',
    category: 'Actualités EICF',
    image: images.espaceSur,
    project: 'swedd',
    location: 'Bouna (Bounkani) & Bondoukou (Gontougo)',
    author: 'Coordination Régionale SWEDD / EICF',
    excerpt: 'Au terme de 18 mois de déploiement opérationnel, l’ONG EICF a présenté les résultats certifiés du projet SWEDD en présence des délégations de l’UNFPA, de la Banque mondiale et du Ministère de la Femme.',
    keyPoints: [
      '1 560 adolescentes et jeunes filles vulnérables accompagnées dans 62 espaces sûrs',
      '96 % de taux de maintien scolaire mesuré sur deux années académiques',
      '0 cas de mariage d’enfant recensé dans les cohortes régulièrement encadrées',
      '62 mentores communautaires diplômées, valorisées et reconnues dans leurs villages',
    ],
    body: [
      'L’atelier de clôture et de capitalisation du Projet d’Autonomisation des Femmes et Dividende Démographique au Sahel (SWEDD), volet espaces sûrs et maintien scolaire, s’est tenu à Bouna en présence des autorités préfectorales, des chefs de cantons et des représentants des agences partenaires.',
      'Opérateur technique de référence dans les régions du Bounkani et du Gontougo, l’ONG EICF a structuré, équipé et animé 62 espaces sûrs villageois et périurbains. Ces lieux protégés ont offert à 1 560 adolescentes déscolarisées ou scolarisées à risque des sessions hebdomadaires en santé de la reproduction, droits humains, compétences de vie et alphabétisation fonctionnelle.',
      'Les témoignages poignants des mentores et des parents d’élèves ont salué un impact tangible : le taux de déperdition scolaire chez les participantes est tombé sous la barre des 4 %, tandis que les grossesses précoces en milieu scolaire ont diminué de plus de 70 % dans les zones d’intervention.',
      'Une note de capitalisation méthodologique détaillée a été transmise au bailleur et aux ministères sectoriels pour servir de modèle d’essaimage dans d’autres districts du pays.',
    ],
  },
  {
    slug: 'remise-kits-installation-pejedec-bagoue',
    title: 'Cérémonie officielle : Remise de kits d’installation professionnelle à 3 200 jeunes dans la Bagoué',
    date: '2024-11-12',
    category: 'Cérémonies',
    image: images.pejedecJeunes,
    project: 'pejedec-bagoue',
    location: 'Boundiali, Région de la Bagoué',
    author: 'Département Opérations & Insertion EICF',
    excerpt: 'Présidée par les autorités préfectorales et le BCP-Emploi, la cérémonie a consacré l’insertion économique durable de 3 200 jeunes formés par l’ONG EICF dans le cadre du PEJEDEC II & III.',
    keyPoints: [
      '3 200 jeunes vulnérables certifiés dans les métiers de l’artisanat, de l’agro-pastoralisme et du BTP',
      'Dotation individuelle en outillage professionnel complet et matériel de protection',
      '85 groupes d’épargne solidaire AVEC créés pour sécuriser le fonds de roulement',
      'Suivi technique et managérial de 6 mois assuré par les conseillers d’EICF',
    ],
    body: [
      'L’esplanade de la mairie de Boundiali a accueilli la grande cérémonie de clôture de la cohorte 2023-2024 du Projet Emploi Jeune et Développement des Compétences (PEJEDEC II & III), financé par la Banque mondiale et supervisé par le Bureau de Coordination des Programmes Emploi (BCP-Emploi).',
      'Sous la conduite de l’ONG EICF, 3 200 jeunes hommes et femmes des départements de Boundiali, Kouto et Tengréla ont suivi un parcours complet d’apprentissage dual chez des maîtres artisans agréés, renforcé par des modules en gestion d’entreprise et éducation financière.',
      'Chaque lauréat a reçu officiellement un kit professionnel certifié (matériel de soudure, caisses d’outillage mécanique, kits de couture ou équipements de maraîchage moderne). En parallèle, 85 caisses villageoises d’épargne et de crédit (AVEC) ont été constituées afin de permettre aux jeunes artisans de financer leurs premiers stocks de matières premières sans recourir à l’endettement informel.',
      'Le préfet de région a chaleureusement félicité le professionnalisme d’EICF, soulignant l’importance de ces opportunités économiques pour stabiliser la jeunesse dans les zones septentrionales du pays.',
    ],
  },
  {
    slug: 'signature-convention-unicef-clef',
    title: 'Partenariat stratégique : Reconduction de l’accord entre l’ONG EICF et l’UNICEF pour la protection de l’enfance',
    date: '2024-09-05',
    category: 'Cérémonies',
    image: images.signatureMinistere,
    project: 'clef-san-pedro',
    location: 'Siège UNICEF, Abidjan',
    author: 'Direction Exécutive EICF',
    excerpt: 'L’ONG EICF et le Fonds des Nations Unies pour l’Enfance (UNICEF) ont signé le protocole opérationnel consolidant le réseau des classes passerelles accélérées dans les campements de San Pédro.',
    keyPoints: [
      '2 665 enfants des campements cacaoyers réintégrés avec succès dans l’école primaire formelle',
      'Adhésion intégrale aux standards internationaux de Sauvegarde de l’Enfant et politique PSEA',
      'Distribution de 2 665 kits scolaires complets et installation de cantines d’appoint',
    ],
    body: [
      'La signature de cette convention consolide une collaboration d’excellence entamée dans le sud-ouest ivoirien. Dans les campements reculés du département de San Pédro et de Grand-Béréby, des milliers d’enfants demeuraient hors du système scolaire traditionnel en raison de l’enclavement géographique et du risque de travail précoce dans les plantations de cacao.',
      'Le modèle des classes passerelles, conçu et déployé par EICF en lien étroit avec la Direction Régionale de l’Éducation Nationale et de l’Alphabétisation (DRENA), permet à des enfants âgés de 9 à 14 ans de rattraper deux années du cycle primaire en neuf mois intensifs.',
      'La représentante adjointe de l’UNICEF a salué la rigueur fiduciaire et la proximité communautaire de l’EICF, réaffirmant l’engagement conjoint de ne laisser aucun enfant ivoirien sur le bord du chemin.',
    ],
  },
  {
    slug: 'mission-supervision-banque-mondiale-pasea',
    title: 'Mission conjointe : La Banque mondiale et le Ministère de l’Hydraulique saluent l’ancrage communautaire à Katiola',
    date: '2024-08-28',
    category: 'Missions',
    image: images.missionPartenaires,
    project: 'pasea',
    location: 'Katiola, Fronan et Timbé (Hambol)',
    author: 'Cellule Communication & Redevabilité EICF',
    excerpt: 'Une délégation conjointe d’experts sectoriels de la Banque mondiale et du Ministère de l’Hydraulique a inspecté les réalisations d’assainissement d’EICF, saluant un modèle exemplaire de durabilité locale.',
    keyPoints: [
      'Inspection sur le terrain de 4 villages témoins et vérification de 24 blocs sanitaires',
      'Contrôle approfondi du Mécanisme de Gestion des Plaintes (MGP) avec 100 % de traçabilité',
      'Validation du taux d’exécution physique certifié à 93 % au 31 décembre 2024',
    ],
    body: [
      'Pendant trois jours, les experts de la Banque mondiale ont parcouru les pistes rurales du département de Katiola pour évaluer l’avancement du programme PASEA confié à l’ONG EICF.',
      'La mission a audité les registres du mécanisme de gestion des plaintes (MGP), interrogé directement les comités villageois sans présence des superviseurs et vérifié la qualité de construction des dalles SanPlat et fosses ventilées.',
      'Au terme de la visite, le chef de mission de la Banque mondiale a félicité la Direction Exécutive d’EICF pour son taux d’avancement physique exemplaire de 93 %, la qualité de la gouvernance locale et la transparence des états financiers présentés.',
    ],
  },
  {
    slug: 'formation-mediateurs-paix-tchologo',
    title: 'Cohésion transfrontalière : 40 médiateurs communautaires formés à l’alerte précoce dans le Tchologo',
    date: '2024-09-21',
    category: 'Formations',
    image: images.dialoguePaix,
    project: 'cohesion-plus',
    location: 'Ferkessédougou & Ouangolodougou (Tchologo)',
    author: 'Pôle Consolidation de la Paix EICF',
    excerpt: 'Chefs coutumiers, responsables d’associations féminines et présidents de jeunesse ont achevé cinq jours d’ateliers intensifs sur la prévention des conflits et la médiation pastorale.',
    keyPoints: [
      '40 leaders locaux certifiés médiateurs communautaires de paix',
      'Standardisation d’un système d’alerte précoce transfrontalière pour la zone septentrionale',
      'Chartes locales de cohabitation pacifique co-rédigées entre agriculteurs et éleveurs transhumants',
    ],
    body: [
      'Face aux tensions récurrentes liées aux couloirs de transhumance et aux risques sécuritaires dans le nord de la Côte d’Ivoire, l’ONG EICF a réuni à Ferkessédougou 40 acteurs d’influence communautaire issus des départements frontaliers du Tchologo.',
      'Animée par des experts en sociologie rurale et en résolution non violente des différends, la formation a porté sur la cartographie participative des litiges fonciers, les techniques de communication non violente et la tenue d’un registre d’alerte précoce partagé avec le corps préfectoral.',
      'Les participants ont adopté une charte locale de paix et installé cinq comités mixtes chargés d’intervenir en amont de toute discorde entre communautés sédentaires et éleveurs en déplacement.',
    ],
  },
  {
    slug: 'communique-certification-comptes-audit-2024',
    title: 'Communiqué officiel : Publication des états financiers audités 2024 et certification sans réserve',
    date: '2025-03-25',
    category: 'Communiqués',
    image: images.femmes,
    location: 'Siège National EICF, Cocody Angré, Abidjan',
    author: 'Conseil d’Administration & Commissariat aux Comptes',
    excerpt: 'Le Conseil d’Administration d’EICF informe ses partenaires institutionnels et donateurs de l’approbation sans réserve des comptes de l’exercice 2024 par le cabinet d’audit indépendant certifié.',
    keyPoints: [
      'Certification sans réserve des comptes statutaires et de projets selon les normes SYSCOHADA',
      'Conformité stricte des dépenses et éligibilité des justificatifs supérieure à 99,4 %',
      'Rapports d’audit externe et états financiers disponibles sur demande formelle motivée',
    ],
    body: [
      'Réuni en session ordinaire à son siège d’Abidjan sous la présidence du Conseil d’Administration, l’organe délibérant de l’ONG EICF a adopté à l’unanimité les rapports moral, financier et de gestion au titre de l’exercice clos le 31 décembre 2024.',
      'Le rapport de certification émis par le Commissaire aux Comptes indépendant atteste de la régularité, de la sincérité et de l’image fidèle du patrimoine et de la situation financière de l’organisation, en pleine conformité avec les conventions conclues avec les bailleurs internationaux (Banque mondiale, UNICEF, UNFPA, PNUD, GIZ).',
      'Le Conseil d’Administration réitère sa volonté inébranlable de transparence fiduciaire et invite tout partenaire technique ou financier à consulter les pièces de synthèse au Centre Documentaire Institutionnel de l’organisation.',
    ],
  },
  {
    slug: 'forum-partenaires-18-ans-eicf-2026',
    title: 'Forum des Partenaires 2026 : Célébration des 18 ans d’action continue d’EICF et nouveau Plan Stratégique',
    date: '2026-02-01',
    category: 'Événements',
    image: images.remiseAccord,
    location: 'Abidjan, Hôtel Ivoire / Palais des Congrès',
    author: 'Comité d’Organisation du 18e Anniversaire EICF',
    excerpt: 'Créée le 1er février 2008, l’ONG EICF a réuni à Abidjan plus de 150 partenaires nationaux et internationaux pour célébrer ses 18 années d’impact certifié et dévoiler sa feuille de route 2027–2031.',
    keyPoints: [
      '18 ans d’action ininterrompue au plus près des populations vulnérables ivoiriennes',
      'Bilan historique certifié de 50 570+ bénéficiaires directs uniques à travers 11 régions',
      'Présentation des 5 priorités stratégiques du Plan Quinquennal 2027–2031',
    ],
    body: [
      'Le 1er février 2026, l’ONG EICF a franchi une étape symbolique majeure : 18 années pleines au service du développement solidaire, de l’autonomisation des femmes et de la protection de l’enfance en Côte d’Ivoire.',
      'Sous la présence d’honneur du Président Fondateur BROU N’guessan Albert, de la Directrice Exécutive et des représentants des agences des Nations Unies, des ambassades partenaires et des ministères sectoriels, ce forum a mis en lumière la trajectoire exemplaire d’une ONG locale devenue un partenaire fiduciaire de premier plan.',
      'L’EICF a officiellement rendu public son nouveau Plan Stratégique Quinquennal 2027–2031, centré sur la transition écologique communautaire, l’accès universel à l’assainissement et la pérennisation des mécanismes d’inclusion financière rurale.',
    ],
  },
  {
    slug: 'recit-terrain-mediation-danane',
    title: 'Récit de terrain : Comment les comités mixtes de Danané ont résolu pacifiquement 45 conflits agro-pastoraux',
    date: '2024-12-10',
    category: 'Témoignages',
    image: images.dialogue,
    project: 'pnud-tonkpi-cavally',
    location: 'Danané & Mahapleu, Région du Tonkpi',
    author: 'Cellule Communication & Redevabilité EICF',
    excerpt: 'Plongée au cœur de la sous-préfecture de Danané où le mécanisme communautaire mis en place avec l’appui du PNUD permet de désamorcer les tensions rurales avant toute escalade violente.',
    keyPoints: [
      '45 différends agro-pastoraux réglés à l’amiable en 12 mois sans recours aux armes',
      'Protocoles de réparation concertée signés entre chefs de canton et représentants des éleveurs',
      'Restauration de la libre circulation et sécurisation des couloirs de transhumance',
    ],
    body: [
      'Au pied des monts du Tonkpi, les relations entre communautés terriennes et éleveurs transhumants ont longtemps été marquées par la méfiance et des incidents meurtriers. Grâce au programme de cohésion sociale soutenu par le PNUD, l’ONG EICF a mis en place des comités mixtes de concertation et de médiation.',
      'Composés à parité de notables autochtones, de femmes leaders et de représentants des éleveurs peuls, ces comités disposent d’un mandat coutumier reconnu pour intervenir dès l’apparition d’un dégât de culture ou d’un litige sur un point d’eau.',
      '« Nous ne laissons plus la rancœur s’installer. Dès qu’un problème survient, le comité se réunit sur le lieu du champ dans les 48 heures, évalue équitablement le préjudice et fixe une compensation acceptée de tous », témoigne M. Gondo Denis, médiateur villageois formé par l’EICF.',
      'Une expérience réussie qui démontre la force de la négociation endogène et fait aujourd’hui école dans tout le district des Montagnes.',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Centre Documentaire & Médiathèque Institutionnelle (Audit Page 5, Point C) */
/* ------------------------------------------------------------------ */

export const documentCategories = [
  { id: 'all', label: 'Tous les documents' },
  { id: 'gouvernance', label: 'Gouvernance & Statuts' },
  { id: 'politiques', label: 'Politiques Éthiques & Sauvegardes' },
  { id: 'procedures', label: 'Procédures & Audits Fiduciaires' },
  { id: 'rapports', label: 'Rapports d’Activités & Résultats' },
  { id: 'capitalisation', label: 'Capitalisation des Projets' },
] as const

export type DocCategory = (typeof documentCategories)[number]['id']

export const docTypes = [
  'Statuts & Gouvernance',
  'Politiques & Chartes',
  'Manuels de procédures',
  'Audits & États financiers',
  'Rapports annuels',
  'Rapports de projets',
  'Notes de capitalisation',
  'Études & Diagnostics',
  'Plaquettes & Guides',
] as const

export type DocType = (typeof docTypes)[number]

export type DocumentItem = {
  slug: string
  title: string
  type: DocType
  category: DocCategory
  confidentiality: 'public' | 'sur-demande'
  year: number
  size: string
  pages: string
  code: string
  summary: string
  project?: string
  domain?: string
  fileUrl?: string
}

export const documents: DocumentItem[] = [
  // 1. Gouvernance & Statuts
  {
    slug: 'statuts-reglement-interieur',
    title: 'Statuts officiels et Règlement intérieur d’EICF',
    type: 'Statuts & Gouvernance',
    category: 'gouvernance',
    confidentiality: 'public',
    year: 2008,
    size: 'PDF · 2,4 Mo',
    pages: '24 pages',
    code: 'EICF-STAT-2008',
    summary: 'Acte constitutif fondateur certifié enregistré au Ministère de l’Intérieur et de la Sécurité (Création officielle le 1er février 2008).',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'organigramme-institutionnel',
    title: 'Organigramme institutionnel certifié & Structure de gouvernance',
    type: 'Statuts & Gouvernance',
    category: 'gouvernance',
    confidentiality: 'public',
    year: 2024,
    size: 'PDF · 1,2 Mo',
    pages: '4 pages',
    code: 'EICF-ORG-2024',
    summary: 'Structure organisationnelle validée par le CA : Assemblée Générale, Conseil d’Administration, Direction Exécutive, 5 départements opérationnels et organes indépendants de contrôle.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'plaquette-institutionnelle-2026',
    title: 'Plaquette institutionnelle officielle EICF 2026 — 18 ans d’action continue',
    type: 'Plaquettes & Guides',
    category: 'gouvernance',
    confidentiality: 'public',
    year: 2026,
    size: 'PDF · 4,8 Mo',
    pages: '28 pages',
    code: 'EICF-PLAQUETTE-2026',
    summary: 'Dossier de présentation institutionnelle complet d’EICF : vision, 18 ans d’histoire, 11 domaines, références bailleurs et tableau de bord des résultats certifiés.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'code-ethique-deontologie',
    title: 'Code de conduite, d’éthique et de déontologie professionnelle',
    type: 'Politiques & Chartes',
    category: 'gouvernance',
    confidentiality: 'public',
    year: 2024,
    size: 'PDF · 1,3 Mo',
    pages: '16 pages',
    code: 'EICF-CODE-ETH',
    summary: 'Règles éthiques, lutte anti-corruption, prévention des conflits d’intérêts et engagements déontologiques signés par 100 % du personnel et des consultants.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },

  // 2. Politiques Éthiques & Sauvegardes
  {
    slug: 'politique-psea',
    title: 'Politique institutionnelle de prévention et de réponse à l’exploitation et aux abus sexuels (PSEA)',
    type: 'Politiques & Chartes',
    category: 'politiques',
    confidentiality: 'public',
    year: 2024,
    size: 'PDF · 1,6 Mo',
    pages: '18 pages',
    code: 'EICF-POL-PSEA',
    summary: 'Politique de tolérance zéro absolue envers les abus et l’exploitation sexuels, conforme aux standards du Comité Permanent Interorganisations (IASC).',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'politique-sauvegarde-enfant',
    title: 'Politique institutionnelle de sauvegarde et de protection de l’enfant',
    type: 'Politiques & Chartes',
    category: 'politiques',
    confidentiality: 'public',
    year: 2024,
    size: 'PDF · 1,8 Mo',
    pages: '22 pages',
    code: 'EICF-POL-ENFANT',
    summary: 'Dispositif de protection des mineurs contre toute forme de violence, maltraitance, travail des enfants ou exploitation dans les interventions communautaires.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'guide-mecanisme-plaintes-mgp',
    title: 'Manuel opérationnel du Mécanisme de Gestion des Plaintes (MGP)',
    type: 'Manuels de procédures',
    category: 'politiques',
    confidentiality: 'public',
    year: 2024,
    size: 'PDF · 2,1 Mo',
    pages: '26 pages',
    code: 'EICF-MAN-MGP',
    summary: 'Procédures de recueil, d’enregistrement sécurisé, d’instruction confidentielle et de traitement des réclamations communautaires sous 15 jours ouvrés.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'politique-genre-inclusion',
    title: 'Politique institutionnelle d’égalité de genre et d’inclusion des personnes vulnérables',
    type: 'Politiques & Chartes',
    category: 'politiques',
    confidentiality: 'public',
    year: 2024,
    size: 'PDF · 1,5 Mo',
    pages: '20 pages',
    code: 'EICF-POL-GENRE',
    summary: 'Directives pour la participation paritaire des femmes aux instances décisionnelles villageoises et l’intégration systématique des personnes handicapées.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },

  // 3. Procédures & Audits Fiduciaires
  {
    slug: 'manuel-procedures-mpafc',
    title: 'Manuel des procédures administratives, financières et comptables (MPAFC)',
    type: 'Manuels de procédures',
    category: 'procedures',
    confidentiality: 'sur-demande',
    year: 2024,
    size: 'PDF · 5,4 Mo',
    pages: '96 pages',
    code: 'EICF-MPAFC-2024',
    summary: 'Référentiel complet de gestion fiduciaire : comptabilité SYSCOHADA, double signature bancaire conjointe, séparation ordonnateur/payeur et gestion des avances.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'manuel-passation-marches-mpm',
    title: 'Manuel des procédures de passation des marchés et gestion des approvisionnements',
    type: 'Manuels de procédures',
    category: 'procedures',
    confidentiality: 'sur-demande',
    year: 2024,
    size: 'PDF · 3,8 Mo',
    pages: '72 pages',
    code: 'EICF-MPM-2024',
    summary: 'Règles d’acquisition conformes aux directives Banque mondiale et Code ivoirien : seuils de mise en concurrence, commission d’attribution collégiale et traçabilité.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'rapport-audit-financier-2024',
    title: 'Rapport général d’audit financier externe indépendant — Exercice 2024',
    type: 'Audits & États financiers',
    category: 'procedures',
    confidentiality: 'public',
    year: 2024,
    size: 'PDF · 3,2 Mo',
    pages: '38 pages',
    code: 'EICF-AUD-2024',
    summary: 'Certification générale des états financiers de l’ONG EICF par Commissaire aux comptes agréé indépendant, assortie d’une opinion sans réserve.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'synthese-audits-projets-bailleurs',
    title: 'Synthèse des audits de clôture de projets bailleurs (PEJEDEC, SWEDD, PASEA)',
    type: 'Audits & États financiers',
    category: 'procedures',
    confidentiality: 'sur-demande',
    year: 2024,
    size: 'PDF · 2,6 Mo',
    pages: '30 pages',
    code: 'EICF-AUD-PROJ',
    summary: 'Rapports de vérification des dépenses et conformité fiduciaire délivrés par les cabinets d’audit indépendants pour le compte des bailleurs multilatéraux.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },

  // 4. Rapports d'Activités & Résultats
  {
    slug: 'rapport-annuel-2025',
    title: 'Rapport annuel d’activités et états financiers 2025',
    type: 'Rapports annuels',
    category: 'rapports',
    confidentiality: 'public',
    year: 2025,
    size: 'PDF · 6,2 Mo',
    pages: '64 pages',
    code: 'EICF-RAP-2025',
    summary: 'Bilan complet des réalisations, avancées des projets en cours (PASEA), résultats des espaces sûrs et comptes consolidés de l’exercice 2025.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'rapport-annuel-2024',
    title: 'Rapport annuel d’activités EICF 2024',
    type: 'Rapports annuels',
    category: 'rapports',
    confidentiality: 'public',
    year: 2024,
    size: 'PDF · 5,8 Mo',
    pages: '58 pages',
    code: 'EICF-RAP-2024',
    summary: 'Clôture du projet SWEDD, déploiement des 788 latrines PASEA et bilans des interventions d’autonomisation économique des femmes.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'rapport-annuel-2023',
    title: 'Rapport annuel d’activités EICF 2023',
    type: 'Rapports annuels',
    category: 'rapports',
    confidentiality: 'public',
    year: 2023,
    size: 'PDF · 5,1 Mo',
    pages: '52 pages',
    code: 'EICF-RAP-2023',
    summary: '15e anniversaire d’EICF : bilan rétrospectif des interventions dans le Nord et l’Est, lancement des chantiers d’assainissement et renforcement partenarial.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'rapport-consolide-impact-18ans',
    title: 'Rapport consolidé des résultats et indicateurs d’impact (2008 – 2026)',
    type: 'Rapports de projets',
    category: 'rapports',
    confidentiality: 'public',
    year: 2026,
    size: 'PDF · 4,2 Mo',
    pages: '42 pages',
    code: 'EICF-IMP-2026',
    summary: 'Analyse statistique des 50 570 bénéficiaires directs uniques touchés en 18 ans à travers 11 régions et 20+ projets certifiés.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'rapport-semestriel-pasea',
    title: 'Rapport semestriel d’avancement PASEA (788 latrines & FDAL)',
    type: 'Rapports de projets',
    category: 'rapports',
    confidentiality: 'public',
    year: 2026,
    size: 'PDF · 3,1 Mo',
    pages: '36 pages',
    code: 'EICF-PASEA-S1',
    project: 'pasea',
    domain: 'eau-hygiene-assainissement',
    summary: 'Avancement physique certifié à 93 % des 788 latrines familiales et accompagnement des 9 TPE d’assainissement à Fronan et Katiola.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },

  // 5. Capitalisation des Projets réels
  {
    slug: 'note-capitalisation-pasea',
    title: 'Note de capitalisation PASEA : Fin de la défécation à l’air libre et autonomisation des TPE (Katiola)',
    type: 'Notes de capitalisation',
    category: 'capitalisation',
    confidentiality: 'public',
    year: 2025,
    size: 'PDF · 3,1 Mo',
    pages: '34 pages',
    code: 'EICF-CAP-PASEA',
    project: 'pasea',
    domain: 'eau-hygiene-assainissement',
    summary: 'Méthodologie de construction assistée de 788 latrines et modèle économique durable des Très Petites Entreprises locales d’assainissement.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'note-capitalisation-swedd',
    title: 'Note de capitalisation SWEDD : Espaces sûrs et maintien scolaire de 1 850 adolescentes (6 régions)',
    type: 'Notes de capitalisation',
    category: 'capitalisation',
    confidentiality: 'public',
    year: 2024,
    size: 'PDF · 2,7 Mo',
    pages: '28 pages',
    code: 'EICF-CAP-SWEDD',
    project: 'swedd',
    domain: 'autonomisation-femmes-jeunes',
    summary: 'Leçons apprises et bonnes pratiques sur les compétences de vie, la santé de la reproduction et l’éradication des mariages précoces.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'note-capitalisation-pejedec',
    title: 'Note de capitalisation PEJEDEC II & III : THIMO, AVEC et insertion socio-économique de 6 000+ jeunes',
    type: 'Notes de capitalisation',
    category: 'capitalisation',
    confidentiality: 'public',
    year: 2023,
    size: 'PDF · 3,6 Mo',
    pages: '40 pages',
    code: 'EICF-CAP-PEJ',
    project: 'pejedec-bagoue',
    domain: 'entrepreneuriat-insertion',
    summary: 'Facteurs de réussite de l’épargne communautaire (AVEC) et transition vers l’emploi autonome dans la Bagoué et l’Agnéby-Tiassa.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'note-capitalisation-clef',
    title: 'Note de capitalisation CLEF : Classes passerelles et réinsertion scolaire de 2 665 enfants déscolarisés',
    type: 'Notes de capitalisation',
    category: 'capitalisation',
    confidentiality: 'public',
    year: 2024,
    size: 'PDF · 2,9 Mo',
    pages: '32 pages',
    code: 'EICF-CAP-CLEF',
    project: 'clef-san-pedro',
    domain: 'education-formation-alphabetisation',
    summary: 'Stratégie de réintégration dans le cursus primaire formel en partenariat avec l’UNICEF et la DRENA de San Pédro.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'note-capitalisation-pddivs',
    title: 'Note de capitalisation PDDIVS : Développement urbain inclusif et cohésion sociale à Bouna',
    type: 'Notes de capitalisation',
    category: 'capitalisation',
    confidentiality: 'public',
    year: 2023,
    size: 'PDF · 2,5 Mo',
    pages: '26 pages',
    code: 'EICF-CAP-PDDIVS',
    project: 'pddivs-bouna',
    domain: 'developpement-social-communautaire',
    summary: 'Aménagement d’infrastructures de base et mécanismes de concertation citoyenne dans les villes secondaires frontalières.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
  {
    slug: 'etude-besoins-nord-est',
    title: 'Étude diagnostique sur les besoins des communautés du Nord-Est (Bounkani et Gontougo)',
    type: 'Études & Diagnostics',
    category: 'capitalisation',
    confidentiality: 'public',
    year: 2025,
    size: 'PDF · 7,0 Mo',
    pages: '84 pages',
    code: 'EICF-ETU-NE',
    domain: 'developpement-social-communautaire',
    summary: 'Cartographie multisectorielle des vulnérabilités, accès aux services sociaux de base et dynamique agro-pastorale.',
    fileUrl: '/CAHIER DE CHARGES_SITE WEB EICF.pdf',
  },
]

export const media = {
  photos: [
    { src: images.signatureMinistere, caption: 'Cérémonie officielle de signature de convention avec les autorités nationales — Abidjan', project: 'gouvernance' },
    { src: images.missionPartenaires, caption: 'Mission conjointe de supervision de terrain avec les partenaires techniques et financiers', project: 'partenaires' },
    { src: images.dialoguePaix, caption: 'Sensibilisation communautaire « Non à l’extrémisme, Oui à la paix » — Région du Tchologo', project: 'cohesion-plus' },
    { src: images.pejedecJeunes, caption: 'Bénéficiaires du projet Emploi des Jeunes et Développement des Compétences (PEJEDEC)', project: 'jeunes-emploi' },
    { src: images.assembleeVillage, caption: 'Assemblée villageoise participative pour le diagnostic communautaire', project: 'developpement-communautaire' },
    { src: images.groupeNotables, caption: 'Comité de développement villageois et chefferie traditionnelle mobilisés', project: 'developpement-communautaire' },
    { src: images.remiseAccord, caption: 'Remise officielle d’accord de partenariat institutionnel', project: 'partenaires' },
    { src: images.latrines, caption: 'Lavage des mains et hygiène — Fronan, Hambol', project: 'pasea' },
    { src: images.espaceSur, caption: 'Espace sûr — Bouna, Bounkani', project: 'swedd' },
    { src: images.femmes, caption: 'Coopérative de karité — Poro', project: 'karite-femmes' },
  ],
  videos: [
    { title: 'PASEA : la fin de la défécation à l’air libre à Katiola', duration: '4:12', thumb: images.latrines },
    { title: 'Les espaces sûrs racontés par les jeunes filles', duration: '6:05', thumb: images.espaceSur },
    { title: 'EICF en 3 minutes', duration: '3:00', thumb: images.dialogue },
  ],
  infographies: [
    { title: 'EICF en chiffres 2025', desc: 'Les indicateurs clés de l’année' },
    { title: 'Cycle ATPC en 6 étapes', desc: 'Méthode d’assainissement communautaire' },
    { title: 'Parcours d’une adolescente en espace sûr', desc: 'Du recrutement à l’autonomie' },
    { title: 'Carte des interventions 2026', desc: '11 régions, 10 projets' },
  ],
}

/* ------------------------------------------------------------------ */
/* Témoignages & histoires de changement (CDC §5 & Audit Point 6)     */
/* ------------------------------------------------------------------ */

export type Story = {
  slug: string
  name: string
  role: string
  locality: string
  project: string
  domain: string
  year: string
  image: string
  quote: string
  story: string
  beforeAfterImpact: {
    indicator: string
    before: string
    after: string
  }
  consentProtected: boolean
}

export const stories: Story[] = [
  {
    slug: 'kouame-norbert-pasea',
    name: 'Kouamé Yao Norbert',
    role: 'Président du Comité Villageois d’Hygiène & Assainissement',
    locality: 'Fronan Centre, Dép. Katiola (Région du Hambol)',
    project: 'pasea',
    domain: 'Eau & Assainissement',
    year: '2024',
    image: images.latrines,
    quote: 'Dans notre village, la défécation à l’air libre appartenait au quotidien. Aujourd’hui, chaque ménage dispose de sa propre latrine certifiée et les fièvres diarrhéiques ont disparu chez nos enfants.',
    story: 'Avant le passage des équipes d’EICF dans le cadre du projet PASEA financé par la Banque mondiale, notre communauté ne comptait que très peu d’installations sanitaires adéquates. Grâce à l’approche participative ATPC, nous avons collectivement compris le lien direct entre la contamination de nos puits et les maladies infantiles récurrentes. Les artisans locaux formés par l’EICF ont construit 312 latrines familiales durables. En tant que président du comité d’hygiène, je veille avec les mères de famille au maintien strict du lavage des mains au savon. Fronan a été officiellement certifié village FDAL par les autorités sanitaires.',
    beforeAfterImpact: {
      indicator: 'Taux d’accès aux latrines familiales hygiéniques',
      before: '12 % des ménages',
      after: '100 % (Village officiellement certifié FDAL)',
    },
    consentProtected: false,
  },
  {
    slug: 'salimata-swedd',
    name: 'Salimata D.',
    role: 'Adolescente réinsérée dans le secondaire & Pair-éducatrice',
    locality: 'Bondoukou, Dép. Bondoukou (Région du Gontougo)',
    project: 'swedd',
    domain: 'Genre & Droits des Filles',
    year: '2023 - 2024',
    image: images.espaceSur,
    quote: 'L’espace sûr m’a redonné foi en mes capacités. J’ai appris à affirmer mes droits, à refuser le mariage forcé et j’ai repris le chemin de l’école avec l’appui de ma mentore.',
    story: 'Menacée d’abandon scolaire à l’âge de 15 ans face à des difficultés économiques et d’intenses pressions familiales, Salimata a été identifiée par les animatrices de proximité d’EICF pour rejoindre l’espace sûr de son quartier. Pendant 9 mois d’accompagnement bienveillant, elle a suivi des modules en compétences de vie, santé reproductive, estime de soi et soutien scolaire. Grâce à la médiation menée par sa mentore auprès de ses parents, Salimata a pu être réinscrite en classe de 3ème avec un kit de fournitures et une bourse de maintien.',
    beforeAfterImpact: {
      indicator: 'Trajectoire scolaire & protection précoce',
      before: 'Risque imminent de déscolarisation et mariage précoce',
      after: 'Scolarisée en 3ème, élue déléguée et pair-éducatrice',
    },
    consentProtected: true,
  },
  {
    slug: 'moussa-diarrassouba-pejedec',
    name: 'Moussa Diarrassouba',
    role: 'Maître artisan soudeur & Tuteur d’apprentissage qualifiant',
    locality: 'Boundiali Centre (Région de la Bagoué)',
    project: 'pejedec-bagoue',
    domain: 'Emploi & Insertion Professionnelle',
    year: '2022 - 2024',
    image: images.pejedecJeunes,
    quote: 'Sans qualification, mon avenir était précaire. Aujourd’hui, mon atelier tourne à plein régime, je forme 3 jeunes et je répare le matériel agricole de toute la commune.',
    story: 'Sélectionné dans le cadre de la composante formation par apprentissage du projet PEJEDEC II & III conduit par l’ONG EICF avec la Banque mondiale et le BCP-Emploi, Moussa a suivi 12 mois de formation professionnelle duale chez un artisan agréé, renforcée par des cours d’éducation financière et de gestion. À l’issue de son parcours, EICF lui a remis un kit complet d’outillage métallurgique. Deux ans plus tard, son atelier est pérenne et il transmet à son tour son métier à trois apprentis issus de milieux vulnérables.',
    beforeAfterImpact: {
      indicator: 'Revenu mensuel moyen & pérennité d’activité',
      before: 'Chômage et travaux journaliers précaires (0 FCFA fixe)',
      after: '75 000 à 110 000 FCFA nets/mois (3 apprentis formés)',
    },
    consentProtected: false,
  },
  {
    slug: 'aminata-coulibaly-avec',
    name: 'Aminata Coulibaly',
    role: 'Présidente de la Caisse d’Épargne Villageoise AVEC « Sababougnouma »',
    locality: 'Minignan Commune (Région du Folon)',
    project: 'avec-aej-folon',
    domain: 'Inclusion Financière & Autonomie Féminine',
    year: '2023 - 2024',
    image: images.femmes,
    quote: 'Grâce à notre caisse d’épargne solidaire, nous n’empruntons plus à des taux usuriers. Nous finançons nos semences, nos récoltes et la scolarité de nos filles.',
    story: 'Dans l’extrême nord du Folon, les femmes rurales ne disposaient d’aucun accès aux services bancaires ou aux microfinances. L’ONG EICF a structuré et formé notre groupement de 30 femmes selon la méthodologie rigoureuse des Associations Villageoises d’Épargne et de Crédit (AVEC). Chaque semaine, nous cotisons solidairement dans notre coffre à trois clés. J’ai pu obtenir un premier crédit de 150 000 FCFA pour commercialiser le beurre de karité et les céréales. En fin de cycle, nous partageons les intérêts accumulés, ce qui a profondément renforcé notre voix au sein de la communauté.',
    beforeAfterImpact: {
      indicator: 'Capacité d’épargne sécurisée & micro-crédit',
      before: '0 FCFA d’épargne, dépendance totale aux prêteurs informels',
      after: 'Fonds rotatif de 2 400 000 FCFA géré en autonomie par 30 femmes',
    },
    consentProtected: false,
  },
  {
    slug: 'jean-baptiste-kouadio-clef',
    name: 'Jean-Baptiste Kouadio',
    role: 'Enseignant animateur en classe passerelle accélérée',
    locality: 'Campement Kouamékro, S/P Gabiadji (Région de San Pédro)',
    project: 'clef-san-pedro',
    domain: 'Éducation & Protection de l’Enfance',
    year: '2022 - 2024',
    image: images.education,
    quote: 'Ramener vers l’école formelle des enfants qui travaillaient quotidiennement dans les plantations de cacao : c’est une fierté humaine qui donne tout son sens à notre métier.',
    story: 'Enclavés au cœur de la ceinture cacaoyère du sud-ouest, les campements de San Pédro comptaient de nombreux enfants privés d’école. Dans le cadre de l’initiative conjointe avec l’UNICEF et le MENA, l’EICF a ouvert 120 classes passerelles accélérées. En tant qu’animateur formé aux pédagogies d’urgence, j’ai encadré une classe de 28 enfants de 9 à 14 ans n’ayant jamais tenu un cahier. Après neuf mois d’efforts intenses en français, calcul et citoyenneté, 26 d’entre eux ont brillamment réussi l’évaluation officielle et ont intégré l’école primaire publique.',
    beforeAfterImpact: {
      indicator: 'Taux de réintégration en école primaire officielle',
      before: '0 % scolarisés (travail des enfants dans les vergers)',
      after: '92,8 % d’intégration réussie en école primaire publique',
    },
    consentProtected: false,
  },
  {
    slug: 'gondo-denis-mediation',
    name: 'Gondo Denis',
    role: 'Leader communautaire et membre du Comité Mixte de Paix',
    locality: 'Mahapleu, Dép. Danané (Région du Tonkpi)',
    project: 'pnud-tonkpi-cavally',
    domain: 'Paix & Cohésion Sociale',
    year: '2022 - 2024',
    image: images.dialoguePaix,
    quote: 'Le dialogue préventif a remplacé les affrontements. Quand un litige foncier ou un dégât de culture surgit, nous nous asseyons sous l’arbre à palabres et nous réglons le problème dans la justice.',
    story: 'Les tensions entre agriculteurs sédentaires et éleveurs transhumants ont longtemps troublé la paix dans l’Ouest ivoirien. Les ateliers de médiation pastorale et les comités mixtes de veille mis en place par l’ONG EICF avec le PNUD ont instauré un mécanisme d’arbitrage pacifique permanent. En deux ans, notre comité a traité et réglé à l’amiable plus de 45 litiges ruraux, garantissant le dédommagement équitable des récoltes sans aucune escalade violente.',
    beforeAfterImpact: {
      indicator: 'Résolution pacifique des litiges agro-pastoraux',
      before: 'Violences récurrentes et représailles sur les troupeaux',
      after: '100 % des litiges réglés à l’amiable par le comité mixte',
    },
    consentProtected: false,
  },
  {
    slug: 'fatoumata-ouattara-swedd',
    name: 'Fatoumata Ouattara',
    role: 'Mentore communautaire certifiée SWEDD',
    locality: 'Ondéfidouo, Dép. Bouna (Région du Bounkani)',
    project: 'swedd',
    domain: 'Genre & Droits des Filles',
    year: '2023 - 2024',
    image: images.sweddGenre,
    quote: 'Les mères de famille me confient leurs adolescentes en toute confiance parce qu’elles constatent le respect, l’assiduité scolaire et la maturité nouvelle de leurs filles.',
    story: 'Superviser 50 adolescentes chaque semaine dans un espace sûr requiert un ancrage coutumier fort et une écoute constante. Formée par l’EICF aux modules de santé reproductive, d’hygiène corporelle et de prévention des violences basées sur le genre (VBG), j’assure la liaison entre les familles, les écoles et les autorités traditionnelles. Grâce à ce dialogue communautaire permanent, aucun mariage forcé ni déscolarisation n’a été enregistré parmi nos promotions d’espaces sûrs sur deux années consécutives.',
    beforeAfterImpact: {
      indicator: 'Prévalence des mariages d’enfants dans la cohorte',
      before: 'Forte pression sociale dès l’âge de 14-16 ans',
      after: '0 cas de mariage d’enfant sur 100 adolescentes suivies',
    },
    consentProtected: false,
  },
  {
    slug: 'kambou-sie-pddivs',
    name: 'Kambou Sié',
    role: 'Chef d’équipe THIMO (Travaux à Haute Intensité de Main d’Œuvre)',
    locality: 'Bouna Commune (Région du Bounkani)',
    project: 'pddivs-bouna',
    domain: 'Emploi & Résilience Urbaine',
    year: '2021 - 2023',
    image: images.pejedecThimo,
    quote: 'Nous avons curé les canaux, reprofilé les voies et sauvé nos quartiers des inondations estivales, tout en épargnant pour lancer notre coopérative agricole.',
    story: 'Le projet PDDIVS financé par la Banque mondiale et exécuté par l’ONG EICF à Bouna a offert une réponse concrète au sous-emploi des jeunes tout en améliorant le cadre de vie urbain. Sous l’encadrement de techniciens de voirie d’EICF, notre équipe de 35 jeunes a curé plus de 12 kilomètres de caniveaux d’eaux pluviales et réhabilité les axes menant au grand marché. La retenue d’épargne obligatoire gérée par EICF m’a permis d’acquérir une motopompe pour développer une parcelle de maraîchage rentable.',
    beforeAfterImpact: {
      indicator: 'Protection contre les inondations & Reconversion économique',
      before: 'Quartiers inondés 4 mois par an et désœuvrement des jeunes',
      after: '14 000 habitants préservés des crues, 82 % des jeunes reconvertis en AGR',
    },
    consentProtected: false,
  },
]

export const beforeAfter = [
  { label: 'Accès aux latrines hygiéniques (PASEA · Katiola)', before: '18 %', after: '93 % des ménages' },
  { label: 'Maintien scolaire des adolescentes (SWEDD · Nord-Est)', before: '61 %', after: '96 % d’assiduité' },
  { label: 'Réinsertion en primaire formelle (CLEF · San Pédro)', before: '0 % scolarisés', after: '92,8 % réintégrés' },
  { label: 'Règlement pacifique des litiges pastoraux (PNUD · Ouest)', before: '35 % par dialogue', after: '88 % résolus à l’amiable' },
  { label: 'Revenu mensuel moyen des apprentis insérés (PEJEDEC)', before: '22 000 FCFA', after: '75 000 à 110 000 FCFA' },
  { label: 'Inclusion financière féminine via caisses AVEC (Folon)', before: '0 groupement autonome', after: '65 caisses actives' },
]

/* ------------------------------------------------------------------ */
/* Gouvernance (À propos)                                              */
/* ------------------------------------------------------------------ */

export const governance = {
  founder: {
    name: 'BROU N’guessan Albert',
    role: 'Président Fondateur de l’ONG EICF',
    roleDesc: 'Garant institutionnel de la vision, des statuts et des valeurs fondamentales de l’organisation depuis sa création en 2008. Assure la représentation morale et les orientations stratégiques de haut niveau sans interférer dans la gestion exécutive quotidienne.',
  },
  board: [
    { name: 'Dr Koffi Yao', role: 'Président du Conseil d’Administration', desc: 'Orientation stratégique, supervision politique et validation des orientations budgétaires.' },
    { name: 'Mme Mariam Touré', role: 'Vice-présidente', desc: 'Appui au pilotage stratégique et relations avec la société civile et les institutions.' },
    { name: 'M. Seydou Ouattara', role: 'Trésorier Général', desc: 'Supervision financière, validation des comptes statutaires et régularité comptable.' },
    { name: 'Mme Adjoua N’Guessan', role: 'Secrétaire Générale', desc: 'Gestion de la vie statutaire, procès-verbaux des assemblées et conformité réglementaire.' },
  ],
  controlBodies: [
    {
      title: 'Commissariat aux Comptes',
      type: 'Audit externe certifié',
      desc: 'Certification indépendante annuelle des états financiers et rapports financiers soumis aux bailleurs internationaux et ministères de tutelle.',
    },
    {
      title: 'Comité d’Audit Interne & Redevabilité',
      type: 'Contrôle interne permanent',
      desc: 'Vérification de la stricte conformité des procédures de passation des marchés, gestion fiduciaire et traitement diligent du Mécanisme de Gestion des Plaintes (MGP).',
    },
  ],
  direction: [
    { name: 'Mme Fatou Konaté', role: 'Directrice Exécutive', desc: 'Coordination générale de la gestion opérationnelle, management des équipes et relation avec les partenaires.' },
    { name: 'M. Jean-Marc Kouassi', role: 'Chef du Dép. des Opérations et des Programmes', desc: 'Planification, exécution technique des projets et encadrement des coordinateurs terrain.' },
    { name: 'M. Ibrahim Cissé', role: 'Chef du Dép. Comptable et Financier', desc: 'Gestion budgétaire, comptabilité analytique SYSCOHADA et reporting financier aux bailleurs.' },
    { name: 'Mme Affoué Bakayoko', role: 'Chef du Dép. Administration & RH', desc: 'Gestion du personnel, contrats, approvisionnements, logistique et sauvegardes sociales.' },
    { name: 'Mme Bintou Sanogo', role: 'Chef du Dép. Suivi-Évaluation & Redevabilité', desc: 'Système d’indicateurs, collecte des données terrain, qualité et redevabilité communautaire.' },
    { name: 'M. Sékou Diabaté', role: 'Chef du Dép. Communication & Partenariats', desc: 'Relations avec les bailleurs multilatéraux, mobilisation de ressources et communication institutionnelle.' },
  ],
  departments: [
    {
      title: 'Département des Opérations et des Programmes',
      lead: 'M. Jean-Marc Kouassi',
      icon: 'Briefcase',
      responsibilities: [
        'Planification stratégique, coordination opérationnelle et exécution technique de l’ensemble des projets (PASEA, SWEDD, PEJEDEC...).',
        'Supervision directe des chefs de projets, des animateurs de terrain et des 4 bases opérationnelles régionales.',
        'Coordination technique avec les ministères sectoriels (Santé, Éducation, Hydraulique, Famille/Femme) et les autorités locales.',
      ],
    },
    {
      title: 'Département Comptable et Financier',
      lead: 'M. Ibrahim Cissé',
      icon: 'Scale',
      responsibilities: [
        'Tenue rigoureuse de la comptabilité générale et analytique selon les normes SYSCOHADA et les exigences des bailleurs.',
        'Mise en œuvre du contrôle interne préalable, principe de double signature et gestion des comptes bancaires dédiés.',
        'Production périodique des rapports financiers certifiés, audits de conformité et gestion prévisionnelle de la trésorerie.',
      ],
    },
    {
      title: 'Département de l’Administration et des Ressources Humaines',
      lead: 'Mme Affoué Bakayoko',
      icon: 'Users',
      responsibilities: [
        'Gestion des recrutements transparents, administration du personnel et déploiement des équipes multidisciplinaires.',
        'Application stricte des politiques de sauvegarde (PSEA : prévention exploitation sexuelle, politique sauvegarde de l’enfant).',
        'Gestion du patrimoine, de la chaîne logistique, des achats courants et respect de la législation du travail ivoirienne.',
      ],
    },
    {
      title: 'Département Suivi-Évaluation & Redevabilité',
      lead: 'Mme Bintou Sanogo',
      icon: 'GraduationCap',
      responsibilities: [
        'Conception des plans de suivi-évaluation, matrices de cadres logiques et indicateurs SMART désagrégés par genre et groupe d’âge.',
        'Collecte mobile géolocalisée des données sur le terrain, assurance qualité des statistiques et capitalisation des leçons apprises.',
        'Opérationnalisation du Mécanisme de Gestion des Plaintes (MGP) et garantie de la redevabilité envers les communautés bénéficiaires.',
      ],
    },
    {
      title: 'Département Communication et Partenariats',
      lead: 'M. Sékou Diabaté',
      icon: 'Handshake',
      responsibilities: [
        'Développement des alliances stratégiques avec les bailleurs de fonds multilatéraux, agences des Nations Unies et fondations.',
        'Élaboration des rapports annuels d’activités, fiches de projets institutionnelles et valorisation des résultats d’impact.',
        'Gestion de la communication éthique, protection de l’image des populations vulnérables et organisation des visites bailleurs.',
      ],
    },
  ],
  orgChart: [
    { level: 'Assemblée Générale', children: [] as string[] },
    { level: 'Conseil d’Administration', children: ['Commissariat aux comptes (Audit externe indépendant)', 'Comité d’Audit Interne & Éthique'] },
    { level: 'Direction Exécutive', children: ['Directrice Exécutive'] },
    {
      level: '5 Départements Opérationnels',
      children: [
        'Opérations & Programmes',
        'Comptabilité & Finances',
        'Administration & Ressources Humaines',
        'Suivi-Évaluation & Redevabilité',
        'Communication & Partenariats',
      ],
    },
    { level: 'Bases Opérationnelles Régionales', children: ['Katiola (Hambol)', 'Bouna (Bounkani)', 'Korhogo (Poro)', 'Bondoukou (Gontougo)'] },
  ],
}

export type HistoryItem = {
  year: string
  title: string
  text: string
  partner?: string
  region?: string
}

export const history: HistoryItem[] = [
  {
    year: '2008',
    title: 'Fondation officielle & Ancrage institutionnel',
    text: 'Création officielle d’EICF le 1er février 2008 à Abidjan par son Président Fondateur BROU N’guessan Albert et des cadres engagés du développement communautaire en Côte d’Ivoire.',
    partner: 'Initiative fondatrice',
    region: 'Abidjan & Sud-Comoé',
  },
  {
    year: '2011 - 2014',
    title: 'Cohésion Sociale, Paix & Post-Crise',
    text: 'Déploiement des programmes de dialogue intercommunautaire, réconciliation et soutien à l’entrepreneuriat local en partenariat avec le PNUD et la GIZ.',
    partner: 'PNUD & GIZ',
    region: 'Tonkpi, Cavally & Bouna',
  },
  {
    year: '2015 - 2018',
    title: 'Insertion des Jeunes & Autonomie Économique (PEJEDEC II & III)',
    text: 'Mise en œuvre des projets PEJEDEC II et III financés par la Banque mondiale (THIMO, AVEC et création d’AGR) et accompagnement des associations villageoises AVEC-AEJ.',
    partner: 'Banque mondiale & BCP-Emploi',
    region: 'Bagoué, Agnéby-Tiassa & Folon',
  },
  {
    year: '2019 - 2021',
    title: 'Éducation Inclusive (CLEF) & Développement Urbain (PDDIVS)',
    text: 'Déploiement du projet CLEF / Classes passerelles pour la réinsertion scolaire des enfants hors système et mise en œuvre du projet PDDIVS pour le développement durable des villes secondaires.',
    partner: 'UNICEF & Bailleurs sectoriels',
    region: 'San Pédro & Commune de Bouna',
  },
  {
    year: '2022 - 2024',
    title: 'Grands Programmes Structurants : PASEA & SWEDD',
    text: 'Exécution du projet PASEA (788 latrines et 9 TPE accompagnées dans le Hambol) et accompagnement de 1 850 adolescentes en espaces sûrs dans le cadre du projet SWEDD (clôturé le 31 décembre 2024).',
    partner: 'Banque mondiale & Ministères sectoriels',
    region: 'Hambol, Bounkani, Gontougo, Bélier, N’Zi, Moronou, Iffou',
  },
  {
    year: '2025 - 2026',
    title: 'Maturité Institutionnelle : 18 ans d’action continue',
    text: 'Consolidation institutionnelle, présence dans 11 régions de Côte d’Ivoire, mobilisation de plus de 50 000 bénéficiaires et accréditation auprès des partenaires techniques et financiers internationaux.',
    partner: 'Partenaires multilatéraux & État',
    region: '11 Régions nationales',
  },
]

export const values = [
  { title: 'Intégrité et transparence', text: 'Nous rendons compte de chaque franc confié et de chaque résultat obtenu.' },
  { title: 'Inclusion et équité', text: 'Personne ne doit être laissé de côté, en particulier les femmes, les jeunes et les enfants.' },
  { title: 'Solidarité et responsabilité', text: 'Nous agissons avec et pour les communautés, dans le respect de leur dignité.' },
  { title: 'Participation communautaire', text: 'Les communautés décident, mettent en œuvre et évaluent avec nous.' },
]

/* ------------------------------------------------------------------ */
/* Indicateurs d'impact (tableau de bord — CDC « EICF Impact »)        */
/* ------------------------------------------------------------------ */

export type KpiItem = {
  label: string
  value: number
  target: number
  suffix?: string
  projets?: string
  typeBeneficiaire?: string
}

export type KpiGroup = {
  id: string
  label: string
  icon: string
  referencePeriod: string
  contributingProjects: string
  kpis: KpiItem[]
}

export const kpiGroups: KpiGroup[] = [
  {
    id: 'education',
    label: 'Éducation & Formation',
    icon: 'GraduationCap',
    referencePeriod: 'Période 2019 – 2026 (Rapports certifiés)',
    contributingProjects: 'CLEF / Classes passerelles, SWEDD, UNICEF',
    kpis: [
      { label: 'Enfants accompagnés au total', value: 5200, target: 6000, typeBeneficiaire: 'Bénéficiaires directs uniques' },
      { label: 'Jeunes filles scolarisées avec appui alimentaire', value: 2665, target: 3000, typeBeneficiaire: 'Élèves vulnérables' },
      { label: 'Classes passerelles créées', value: 120, target: 120, suffix: ' classes' },
      { label: 'Écoles et centres accompagnés', value: 38, target: 50, suffix: ' écoles' },
    ],
  },
  {
    id: 'eau',
    label: 'Eau, Hygiène & Assainissement',
    icon: 'Droplets',
    referencePeriod: 'Période 2023 – 2026 (Suivi physique PASEA)',
    contributingProjects: 'PASEA (Banque mondiale), Ministère Hydraulique',
    kpis: [
      { label: 'Latrines familiales réalisées', value: 788, target: 788, suffix: ' latrines', projets: 'PASEA Katiola' },
      { label: 'Personnes avec accès à l’assainissement', value: 8400, target: 8400, typeBeneficiaire: 'Bénéficiaires directs' },
      { label: 'Villages engagés vers la certification FDAL', value: 10, target: 10, suffix: ' villages' },
      { label: 'Très Petites Entreprises (TPE) accompagnées', value: 9, target: 9, suffix: ' TPE' },
    ],
  },
  {
    id: 'autonomisation',
    label: 'Autonomisation & Emploi',
    icon: 'HandHeart',
    referencePeriod: 'Période 2020 – 2026 (Clôture SWEDD & PEJEDEC)',
    contributingProjects: 'SWEDD, PEJEDEC II & III, AVEC-AEJ',
    kpis: [
      { label: 'Femmes et filles bénéficiaires d’AGR', value: 4831, target: 5000, typeBeneficiaire: 'Actrices économiques' },
      { label: 'Adolescentes suivies en espaces sûrs (SWEDD)', value: 1850, target: 1850, typeBeneficiaire: 'Adolescentes' },
      { label: 'Jeunes formés et insérés (PEJEDEC)', value: 920, target: 1000, typeBeneficiaire: 'Jeunes 18-35 ans' },
      { label: 'Mentores communautaires certifiées', value: 74, target: 74, suffix: ' mentores' },
    ],
  },
  {
    id: 'protection',
    label: 'Droits Humains & Genre',
    icon: 'Shield',
    referencePeriod: 'Période 2021 – 2026 (Programmes PNUD & Genre)',
    contributingProjects: 'PNUD, SWEDD, GIZ, Dialogue communautaire',
    kpis: [
      { label: 'Adolescentes formées aux droits & entrepreneuriat', value: 55056, target: 60000, typeBeneficiaire: 'Jeunes filles' },
      { label: 'Hommes et garçons formés au genre transformationnel', value: 1682, target: 2000, typeBeneficiaire: 'Hommes & garçons' },
      { label: 'Personnes sensibilisées à la cohésion sociale', value: 24000, target: 30000, typeBeneficiaire: 'Communautés locales' },
      { label: 'Comités de paix et de protection actifs', value: 57, target: 60, suffix: ' comités' },
    ],
  },
  {
    id: 'sante',
    label: 'Santé & Nutrition Infantile',
    icon: 'HeartPulse',
    referencePeriod: 'Période 2021 – 2026 (Suivi communautaire)',
    contributingProjects: 'Programmes santé infantile & nutrition',
    kpis: [
      { label: 'Femmes formées à la nutrition infantile', value: 100012, target: 110000, typeBeneficiaire: 'Mères de famille' },
      { label: 'Enfants dépistés en milieu rural', value: 12600, target: 15000, typeBeneficiaire: 'Enfants 0-5 ans' },
      { label: 'Agents de santé communautaire formés', value: 86, target: 90, suffix: ' agents' },
      { label: 'Foyers nutritionnels villageois actifs', value: 28, target: 40, suffix: ' foyers' },
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

/** Statistiques globales consolidées de l’ONG EICF (18 ans d'existence). */
export const globalStats = {
  anneesExperience: 18,
  beneficiaires: 50570,
  beneficiairesDirects: 50570,
  beneficiairesTotal: 165000,
  regions: 11,
  projets: 20,
  projetsEnCours: 7,
  projetsAcheves: 13,
  projetsConception: 4,
  communautes: 100,
  villages: 100,
  bailleursMobilises: 8,
  partenaires: 8,
  femmesAGR: 4831,
  femmesNutrition: 100012,
  adolescentesDroits: 55056,
  enfantsScolarises: 2665,
  jeunesFormes: 920,
  infrastructuresRealisees: 788,
  hommesGenre: 1682,
}

/** Phrase de synthèse générée automatiquement (CDC : « Résumé automatique certifié »). */
export const impactSentence = `En 2026, l’ONG EICF certifie plus de 50 570 bénéficiaires directs uniques (et plus de 165 000 personnes touchées au total) dans 11 régions de Côte d’Ivoire, à travers 20+ projets capitalisés sur 18 années d’action continue.`

/* ------------------------------------------------------------------ */
/* Capacités Institutionnelles (Audit Page 5, Point B)                */
/* ------------------------------------------------------------------ */

export type InstitutionalCapacityPillar = {
  id: string
  num: string
  title: string
  subtitle: string
  icon: string
  overview: string
  standards: string[]
  keyMechanisms: { title: string; desc: string }[]
  toolsAndSoftwares: string[]
  concreteEvidence: string
  keyDocuments: { title: string; type: string; code: string }[]
}

export const institutionalCapacities: InstitutionalCapacityPillar[] = [
  {
    id: 'gestion-projets',
    num: '01',
    title: 'Gestion des Projets & Cycle Opérationnel',
    subtitle: 'Planification rigoureuse, exécution agile et reporting conforme aux exigences des bailleurs multilatéraux',
    icon: 'Briefcase',
    overview: 'L’ONG EICF applique une méthodologie éprouvée de Gestion Axée sur les Résultats (GAR) couvrant l’intégralité du cycle de projet, de l’analyse participative des besoins communautaires jusqu’à la capitalisation et l’évaluation finale indépendante.',
    standards: [
      'Cadre logique standardisé et Gestion Axée sur les Résultats (GAR)',
      'Directives opérationnelles Banque mondiale, Système des Nations Unies (UNFPA, UNICEF, PNUD) et AFD',
      'Plan de Travail Budgétisé Annuel (PTBA) et chronogramme de GANTT sous chemin critique',
      'Revues périodiques trimestrielles de performance et gestion proactive des risques',
    ],
    keyMechanisms: [
      {
        title: 'Planification opérationnelle & PTBA',
        desc: 'Chaque convention fait l’objet d’un plan de travail annuel budgétisé (PTBA), décliné en plans d’action mensuels et fiches d’activités détaillées avec jalons de contrôle.',
      },
      {
        title: 'Coordination multisectorielle terrain',
        desc: 'Mise en place de comités de pilotage mixtes associant services déconcentrés de l’État, autorités préfectorales, élus locaux et leaders communautaires.',
      },
      {
        title: 'Reporting technique standardisé',
        desc: 'Production de rapports d’étape mensuels, trimestriels et annuels adossés à des pièces justificatives complètes et vérifiables, dans le respect strict des échéances contractuelles.',
      },
      {
        title: 'Capitalisation et clôture formelle',
        desc: 'Ateliers de bilan avec les parties prenantes, transfert formel des acquis aux communautés et production de notes méthodologiques de capitalisation.',
      },
    ],
    toolsAndSoftwares: ['MS Project', 'Trello / Asana Projets', 'KoboToolbox Collecte', 'Tableaux de bord KPI'],
    concreteEvidence: 'Gestion réussie de 20+ projets complexes (dont PEJEDEC II & III, SWEDD, PASEA, CLEF, PDDIVS) avec un taux moyen d’exécution physique supérieur à 94 %.',
    keyDocuments: [
      { title: 'Manuel de gestion et de cycle de projet EICF', type: 'Manuel interne', code: 'MGP-EICF-2024' },
      { title: 'Guide de reporting technique et de capitalisation', type: 'Guide pratique', code: 'GRT-EICF-V3' },
    ],
  },
  {
    id: 'gestion-financiere',
    num: '02',
    title: 'Gestion Financière & Contrôle Interne',
    subtitle: 'Comptabilité SYSCOHADA, double signature conjointe, comptes bancaires dédiés et audits annuels sans réserve',
    icon: 'Scale',
    overview: 'La gestion fiduciaire d’EICF repose sur les plus hauts standards de transparence et d’étanchéité comptable, garantissant aux bailleurs une traçabilité totale et l’inviolabilité des fonds alloués.',
    standards: [
      'Référentiel comptable SYSCOHADA révisé (système normal, comptabilité d’engagement)',
      'Séparation inaliénable des fonctions entre ordonnateur, comptable payeur et vérificateur',
      'Règle impérative de double signature conjointe pour toute transaction bancaire',
      'Comptes bancaires dédiés et exclusifs ouverts auprès d’institutions bancaires de premier rang',
      'Audits financiers externes annuels et de clôture sans réserve',
    ],
    keyMechanisms: [
      {
        title: 'Comptabilité d’engagement informatisée',
        desc: 'Utilisation d’un logiciel de gestion comptable et financière certifié (SAGE / Tompro) paramétré par projet, analytique et ligne budgétaire bailleur.',
      },
      {
        title: 'Séparation stricte ordonnateur / payeur',
        desc: 'L’ordonnancement des dépenses relève exclusivement de la Direction Exécutive, l’émission des paiements du Responsable Financier, et la validation finale nécessite la contresignature statutaire.',
      },
      {
        title: 'Comptes bancaires séparés par projet',
        desc: 'Aucun mélange de trésorerie n’est autorisé : chaque convention bailleur dispose d’un compte bancaire dédié et d’un compte d’avances strictement encadré.',
      },
      {
        title: 'Audits et commissariat aux comptes',
        desc: 'Contrôle externe annuel par un Commissaire aux comptes agréé et audits spécifiques diligentés par les bailleurs de fonds (tous certifiés sans réserve).',
      },
    ],
    toolsAndSoftwares: ['SAGE Comptabilité & Paie', 'Tompro Multi-projets', 'Plateformes bancaires sécurisées (BICICI, NSIA, SGCI)'],
    concreteEvidence: '18 années d’exercice continu sans aucune réserve d’audit majeur, validation intégrale des audits Banque mondiale sur PEJEDEC, SWEDD et PASEA.',
    keyDocuments: [
      { title: 'Manuel de procédures administratives, financières et comptables', type: 'Manuel certifié', code: 'MPAFC-EICF-2024' },
      { title: 'Dernier rapport d’audit financier externe certifié', type: 'Rapport d’audit', code: 'AUD-EXT-2024' },
    ],
  },
  {
    id: 'passation-marches',
    num: '03',
    title: 'Passation des Marchés & Approvisionnements',
    subtitle: 'Mise en concurrence transparente, commission d’attribution indépendante et tolérance zéro fraude',
    icon: 'FileText',
    overview: 'Nos procédures d’acquisition garantissent l’équité, l’économie, l’efficacité et la conformité scrupuleuse aux directives internationales de passation des marchés.',
    standards: [
      'Directives de passation des marchés de la Banque mondiale et standards internationaux UE / AFD',
      'Code des marchés publics de la République de Côte d’Ivoire',
      'Mise en concurrence systématique avec seuils de passation stricts',
      'Commission interne d’attribution des marchés avec procès-verbaux formels d’ouverture et de jugement',
      'Politique anti-fraude, anti-corruption et déclaration d’absence de conflit d’intérêts',
    ],
    keyMechanisms: [
      {
        title: 'Seuils d’acquisition transparents',
        desc: 'Achats sous seuil sur 3 cotations proforma concurrentes, consultations restreintes sur cahier des charges au-delà du seuil intermédiaire, et appels d’offres ouverts pour les investissements lourds.',
      },
      {
        title: 'Commission d’attribution collégiale',
        desc: 'Toute sélection de prestataire ou d’équipement est confiée à une commission d’évaluation pluridisciplinaire indépendante consignant ses notes et décisions sur PV signé.',
      },
      {
        title: 'Répertoire des fournisseurs agréés',
        desc: 'Sélection et actualisation annuelle d’un catalogue de fournisseurs vérifiés (immatriculation fiscale RCCM/DFE, attestations de régularité sociale et fiscale).',
      },
      {
        title: 'Audit de livraison et réception contradictoire',
        desc: 'Commissions de réception technique sur site vérifiant la conformité exacte des livrables avant toute liquidation de facture finale.',
      },
    ],
    toolsAndSoftwares: ['Grilles d’analyse multicritères', 'Base fournisseurs qualifiés', 'Matrice de conformité technique'],
    concreteEvidence: 'Acquisition et réception certifiée de 788 latrines et kits d’hygiène (PASEA) et de kits d’insertion pour 6 000+ jeunes (PEJEDEC) sans aucune réclamation ou contestation.',
    keyDocuments: [
      { title: 'Manuel de passation des marchés et gestion des stocks', type: 'Manuel de référence', code: 'MPM-EICF-2024' },
      { title: 'Charte d’intégrité des fournisseurs et sous-traitants', type: 'Charte contractuelle', code: 'CIF-EICF' },
    ],
  },
  {
    id: 'suivi-evaluation',
    num: '04',
    title: 'Suivi-Évaluation & Redevabilité (MEL)',
    subtitle: 'Indicateurs SMART, collecte digitale géolocalisée KoboToolbox et redevabilité ascendante',
    icon: 'BarChart3',
    overview: 'Le système de Suivi, Évaluation, Redevabilité et Apprentissage (MEL) d’EICF transforme la donnée terrain en levier de pilotage stratégique, d’adaptation continue et de transparence absolue.',
    standards: [
      'Cadre logique standardisé et matrice d’indicateurs SMART déclinés (impact, effets, produits)',
      'Digitalisation intégrale de la collecte terrain via KoboToolbox et formulaires mobiles ODK',
      'Géolocalisation GPS obligatoire de toutes les infrastructures communautaires et points d’intervention',
      'Protocole d’assurance qualité des données (DQA - Data Quality Assessment) à 3 niveaux',
      'Boucle de redevabilité communautaire et restitution publique des résultats',
    ],
    keyMechanisms: [
      {
        title: 'Collecte géolocalisée temps réel',
        desc: 'Agents de terrain équipés de smartphones pour renseigner les fiches d’enquêtes déconnectées avec coordonnées GPS, photos horodatées et vérification biométrique/signatures.',
      },
      {
        title: 'Assurance qualité des données (DQA)',
        desc: 'Contrôles de cohérence automatisés, audits aléatoires sur échantillon de 10 % par le coordinateur MEL et validation avant consolidation centrale.',
      },
      {
        title: 'Revues de performance trimestrielles',
        desc: 'Confrontation des cibles contractuelles aux réalisations effectives, analyse des écarts et plans d’actions correctifs immédiats.',
      },
      {
        title: 'Évaluations indépendantes externes',
        desc: 'Missions d’évaluation à mi-parcours et ex-post confiées à des consultants tiers pour mesurer l’impact réel et la durabilité.',
      },
    ],
    toolsAndSoftwares: ['KoboToolbox Server', 'ODK Collect', 'Power BI / QGIS', 'Tableaux croisés dynamiques'],
    concreteEvidence: 'Cartographie GPS certifiée de 100+ localités et 788 latrines, suivi nominatif et traçable de 50 570 bénéficiaires directs uniques.',
    keyDocuments: [
      { title: 'Plan institutionnel de suivi-évaluation (MEL Plan)', type: 'Manuel méthodologique', code: 'MELP-EICF-2024' },
      { title: 'Guide d’assurance qualité des données de terrain (DQA)', type: 'Protocole technique', code: 'DQA-EICF' },
    ],
  },
  {
    id: 'sauvegardes-sociales-environnementales',
    num: '05',
    title: 'Sauvegardes Environnementales, Sociales & Éthique',
    subtitle: 'Plan PGES, Mécanisme de Gestion des Plaintes (MGP), politique PSEA et protection de l’enfant',
    icon: 'ShieldCheck',
    overview: 'EICF applique une politique de tolérance zéro envers les violences, abus ou atteintes à l’environnement, et garantit un environnement sûr, inclusif et respectueux des droits humains dans chacune de ses interventions.',
    standards: [
      'Cadre Environnemental et Social (CES) de la Banque mondiale et normes de performance internationales',
      'Plan de Gestion Environnementale et Sociale (PGES) systématiquement annexé à chaque sous-projet',
      'Mécanisme de Gestion des Plaintes (MGP) indépendant, accessible et confidentiel',
      'Politique PSEA (Prévention de l’Exploitation et des Abus Sexuels) alignée sur le Comité IASC',
      'Politique institutionnelle de Sauvegarde et Protection de l’Enfant',
    ],
    keyMechanisms: [
      {
        title: 'Mécanisme de Gestion des Plaintes (MGP)',
        desc: 'Dispositif multi-canaux (boîtes à plaintes villageoises sécurisées, numéro dédié, comités de médiation locaux) garantissant le traitement équitable et confidentiel sous 15 jours ouvrés.',
      },
      {
        title: 'Politique PSEA stricte et contraignante',
        desc: 'Signature obligatoire du code PSEA par 100 % du personnel, bénévoles et prestataires, modules obligatoires d’initiation et mécanisme d’alerte directe sécurisé.',
      },
      {
        title: 'Sauvegardes environnementales sur site',
        desc: 'Évaluation d’impact environnemental simplifié, gestion écologique des déchets de chantiers, reboisement compensatoire et préservation des ressources en eau.',
      },
      {
        title: 'Inclusion sociale et genre',
        desc: 'Quotas minimaux de participation des femmes (minimum 50 %), intégration active des personnes en situation de handicap et des ménages ultra-vulnérables.',
      },
    ],
    toolsAndSoftwares: ['Registre MGP confidentiel', 'Fiches d’analyse d’incidents PSEA', 'Grilles d’inspection PGES'],
    concreteEvidence: 'Mise en place de 65 comités villageois de gestion des plaintes opérationnels et zéro incident PSEA constaté sur l’ensemble des missions.',
    keyDocuments: [
      { title: 'Politique institutionnelle PSEA (Abus et exploitation sexuels)', type: 'Politique contraignante', code: 'POL-PSEA-2024' },
      { title: 'Manuel opérationnel du Mécanisme de Gestion des Plaintes (MGP)', type: 'Manuel de procédure', code: 'MGP-PROC-2024' },
      { title: 'Politique de Sauvegarde de l’Enfant', type: 'Politique de protection', code: 'PSE-EICF-2024' },
    ],
  },
  {
    id: 'ressources-humaines',
    num: '06',
    title: 'Ressources Humaines & Déploiement Terrain',
    subtitle: 'Recrutement transparent, code de conduite signé par 100 % des équipes et forte capacité de projection locale',
    icon: 'Users',
    overview: 'Le capital humain d’EICF combine rigueur technique, maîtrise des langues locales et ancrage communautaire profond, permettant un déploiement opérationnel immédiat y compris dans les zones rurales isolées et frontalières.',
    standards: [
      'Manuel de gestion des ressources humaines et grille de classification équitable',
      'Recrutement compétitif, ouvert et sans discrimination (égalité des chances)',
      'Code d’éthique et de conduite professionnelle signé dès la prise de poste',
      'Formation continue obligatoire (PSEA, premiers secours, sécurité terrain, sauvegarde)',
      'Politique de protection et sécurité du personnel en mission',
    ],
    keyMechanisms: [
      {
        title: 'Bassin d’expertise pluridisciplinaire',
        desc: 'Équipes composées de sociologues, ingénieurs WASH, agronomes, experts en éducation, spécialistes en inclusion financière et juristes.',
      },
      {
        title: 'Antennes régionales et proximité',
        desc: 'Bureaux et relais opérationnels décentralisés dans les chefs-lieux régionaux assurant une réactivité sous 24 à 48 heures sur le terrain.',
      },
      {
        title: 'Logistique et mobilité tout-terrain',
        desc: 'Parc de véhicules tout-terrain, motocycles équipés et protocoles stricts de sûreté/sécurité pour l’accès aux localités les plus enclavées.',
      },
      {
        title: 'Égalité femmes-hommes et parité',
        desc: 'Politique active de valorisation des compétences féminines aux postes de coordination de projet et de supervision technique.',
      },
    ],
    toolsAndSoftwares: ['Logiciel RH & Paie', 'Grilles d’évaluation de performance annuelle', 'Protocoles de sécurité terrain'],
    concreteEvidence: 'Capacité démontrée de déploiement simultané dans 6 à 11 régions (SWEDD, PEJEDEC, PASEA) avec plus de 45 cadres et animateurs communautaires mobilisés.',
    keyDocuments: [
      { title: 'Manuel des procédures de gestion des ressources humaines', type: 'Manuel RH', code: 'MRH-EICF-2024' },
      { title: 'Code de conduite et d’éthique du personnel', type: 'Code éthique', code: 'CCE-EICF' },
    ],
  },
  {
    id: 'gestion-partenariats',
    num: '07',
    title: 'Partenariats & Coordination Institutionnelle',
    subtitle: 'Protocoles avec les ministères sectoriels, alliance avec le corps préfectoral et les chefferies traditionnelles',
    icon: 'Building',
    overview: 'EICF inscrit chacune de ses interventions dans le strict respect de l’autorité publique et des priorités stratégiques de l’État de Côte d’Ivoire, en étroite concertation avec les élus locaux et la chefferie coutumière.',
    standards: [
      'Conventions et protocoles d’accord avec les ministères sectoriels de tutelle',
      'Alignement formel sur le Plan National de Développement (PND 2021-2025 / 2026-2030) et les ODD',
      'Concertation préalable systématique avec le corps préfectoral (Préfets et Sous-préfets)',
      'Partenariat coutumier et protocolaire avec les chefs de canton, de village et comités villageois',
      'Participation active aux cadres de concertation régionaux et clusters humanitaires/développement',
    ],
    keyMechanisms: [
      {
        title: 'Accords-cadres avec les ministères',
        desc: 'Collaborations formalisées avec le Ministère de l’Éducation Nationale, le Ministère de la Santé, le Ministère de la Femme et le Ministère de la Jeunesse.',
      },
      {
        title: 'Ancrage préfectoral et communal',
        desc: 'Tenue obligatoire de réunions de cadrage et de restitution auprès des préfets de région, préfets de département et présidents de conseils régionaux.',
      },
      {
        title: 'Co-construction communautaire',
        desc: 'Signature d’engagements communautaires avec les chefferies traditionnelles et les chefs de terre pour garantir l’appropriation locale et la pérennité des ouvrages.',
      },
      {
        title: 'Synergies opérationnelles inter-ONG',
        desc: 'Partenariats opérationnels de consortium et d’échange de bonnes pratiques avec d’autres organisations nationales et internationales.',
      },
    ],
    toolsAndSoftwares: ['Registre des conventions & protocoles', 'Fiches de liaison institutionnelle', 'Comptes-rendus de concertation'],
    concreteEvidence: 'Protocole formel d’exécution validé sur l’ensemble des 11 régions d’intervention, 0 blocage communautaire ou institutionnel en 18 ans d’activité.',
    keyDocuments: [
      { title: 'Cadre stratégique de partenariat institutionnel', type: 'Document d’orientation', code: 'CSP-EICF' },
      { title: 'Modèle type d’accord d’engagement communautaire', type: 'Convention type', code: 'AEC-EICF' },
    ],
  },
]

/**
 * Navigation principale (CDC §5) — volontairement resserrée à 5 entrées
 * pour alléger l’en-tête ; chaque entrée regroupe ses sous-rubriques.
 */
export type NavChild = { label: string; href: string; desc?: string }
export type NavItem = { label: string; href: string; match?: string[]; children?: NavChild[] }

export const navigation: NavItem[] = [
  { label: 'Accueil', href: '/', match: ['/'] },
  {
    label: 'L’ONG', href: '/a-propos', match: ['/a-propos', '/capacites-institutionnelles'], children: [
      { label: 'Qui sommes-nous', href: '/a-propos#presentation', desc: 'Histoire, vision, mission et valeurs' },
      { label: 'Capacités Institutionnelles', href: '/capacites-institutionnelles', desc: 'Gestion fiduciaire, passation des marchés, sauvegardes' },
      { label: 'Notre approche', href: '/a-propos#approche', desc: 'Une démarche participative en 4 étapes' },
      { label: 'Gouvernance', href: '/a-propos#gouvernance', desc: 'Conseil, direction et organigramme' },
      { label: 'Engagements', href: '/a-propos#engagements', desc: 'Redevabilité, audits, PSEA' },
    ],
  },
  {
    label: 'Nos actions', href: '/projets-actualites', match: ['/domaines-intervention', '/projets-actualites', '/cartographie', '/impact'], children: [
      { label: '11 domaines d’intervention', href: '/domaines-intervention', desc: 'Éducation, santé, eau, paix…' },
      { label: 'Projets', href: '/projets-actualites', desc: 'En cours, achevés et en conception' },
      { label: 'Cartographie', href: '/cartographie', desc: 'Nos interventions sur la carte' },
      { label: 'EICF Impact', href: '/impact', desc: 'Tableau de bord des résultats' },
    ],
  },
  {
    label: 'Ressources', href: '/actualites', match: ['/actualites', '/mediatheque', '/temoignages'], children: [
      { label: 'Actualités', href: '/actualites', desc: 'Terrain, événements, communiqués' },
      { label: 'Médiathèque', href: '/mediatheque', desc: 'Rapports, études, photos et vidéos' },
      { label: 'Témoignages', href: '/temoignages', desc: 'Histoires de changement' },
    ],
  },
  {
    label: 'Partenaires', href: '/partenaires', match: ['/partenaires', '/appels-a-partenariat'], children: [
      { label: 'Nos partenaires', href: '/partenaires', desc: 'Bailleurs, institutions, ONG, communautés' },
      { label: 'Appels à partenariat', href: '/appels-a-partenariat', desc: 'Projets à cofinancer' },
    ],
  },
  { label: 'Contact', href: '/contact', match: ['/contact'] },
]
