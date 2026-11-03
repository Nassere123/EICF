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
  tagline: 'Agir aujourd’hui pour un avenir durable.',
  logo: '/images/logo-eicf.png',
  address: 'Cocody Riviera 3, Abidjan, Côte d’Ivoire',
  phone: '+225 22 27 52 34 60',
  whatsapp: '2252227523460',
  email: 'contact@eicf.org',
  founded: 2012,
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
  communaute: '/images/communaute.jpg',
  eau: '/images/eau.jpg',
  femmes: '/images/femmes.jpg',
  espaceSur: '/images/espace-sur.jpg',
  latrines: '/images/latrines.jpg',
  dialogue: '/images/dialogue.jpg',
  aminata: '/images/portrait-aminata.jpg',
  moussa: '/images/portrait-moussa.jpg',
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
    image: images.dialogue,
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
    image: images.moussa,
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
    image: images.dialogue,
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
    image: images.dialogue,
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
}

export const partnerCategories: { id: PartnerCategory; label: string; desc: string }[] = [
  { id: 'techniques-financiers', label: 'Partenaires techniques et financiers', desc: 'Bailleurs, organisations internationales et agences de coopération.' },
  { id: 'institutionnels', label: 'Partenaires institutionnels', desc: 'Ministères, agences publiques et collectivités territoriales.' },
  { id: 'operationnels', label: 'Partenaires opérationnels', desc: 'ONG, associations et structures de mise en œuvre sur le terrain.' },
  { id: 'communautaires', label: 'Partenaires communautaires', desc: 'Organisations de base, leaders et structures locales.' },
]

export const partners: Partner[] = [
  { slug: 'banque-mondiale', name: 'Banque mondiale', short: 'BM', category: 'techniques-financiers', type: 'Bailleur multilatéral', description: 'Partenaire financier de programmes structurants en eau-assainissement et en autonomisation des femmes.', zone: 'Hambol, Bounkani, Gontougo', url: 'https://www.banquemondiale.org' },
  { slug: 'unicef', name: 'UNICEF', short: 'UNICEF', category: 'techniques-financiers', type: 'Agence des Nations Unies', description: 'Appui technique et financier pour l’éducation, la protection de l’enfant et la nutrition.', zone: 'Bounkani, Poro, Béré', url: 'https://www.unicef.org/cotedivoire' },
  { slug: 'union-europeenne', name: 'Union européenne', short: 'UE', category: 'techniques-financiers', type: 'Coopération internationale', description: 'Soutien aux initiatives de paix, de cohésion sociale et de gouvernance locale.', zone: 'Tchologo, Tonkpi, Bounkani', url: 'https://www.eeas.europa.eu' },
  { slug: 'afd', name: 'Agence française de développement', short: 'AFD', category: 'techniques-financiers', type: 'Agence de coopération', description: 'Cofinancement de programmes d’insertion socio-économique des jeunes.', zone: 'Hambol, Gbêkê', url: 'https://www.afd.fr' },
  { slug: 'unfpa', name: 'UNFPA', short: 'UNFPA', category: 'techniques-financiers', type: 'Agence des Nations Unies', description: 'Appui aux programmes de santé reproductive et de lutte contre les VBG.', zone: 'Gontougo, Indénié-Djuablin', url: 'https://cotedivoire.unfpa.org' },
  { slug: 'ministere-solidarite', name: 'Ministère de la Solidarité et de la Lutte contre la Pauvreté', short: 'MSLP', category: 'institutionnels', type: 'Ministère', description: 'Tutelle et partenaire stratégique des actions de protection sociale.', zone: 'National', url: 'https://www.gouv.ci' },
  { slug: 'ministere-hydraulique', name: 'Ministère de l’Hydraulique, de l’Assainissement et de la Salubrité', short: 'MINHAS', category: 'institutionnels', type: 'Ministère', description: 'Cadre institutionnel des interventions eau, hygiène et assainissement.', zone: 'National', url: 'https://www.gouv.ci' },
  { slug: 'ministere-education', name: 'Ministère de l’Éducation nationale et de l’Alphabétisation', short: 'MENA', category: 'institutionnels', type: 'Ministère', description: 'Partenaire des programmes de classes passerelles et d’alphabétisation.', zone: 'National', url: 'https://www.education.gouv.ci' },
  { slug: 'conseils-regionaux', name: 'Conseils régionaux du Hambol et du Bounkani', short: 'CR', category: 'institutionnels', type: 'Collectivités territoriales', description: 'Co-pilotage territorial et intégration des actions dans les plans de développement locaux.', zone: 'Hambol, Bounkani', url: 'https://www.gouv.ci' },
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
    zone: 'Hambol · Département de Katiola',
    partners: ['banque-mondiale', 'ministere-hydraulique', 'conseils-regionaux'],
    periode: '2024 – 2026',
    duree: '30 mois',
    budget: '420 M FCFA',
    beneficiaires: 8400,
    beneficiairesLabel: 'personnes',
    image: images.latrines,
    summary: 'Améliorer l’accès à l’eau potable et à l’assainissement pour les communautés rurales du département de Katiola.',
    objectifs: ['Mettre fin à la défécation à l’air libre dans 10 villages', 'Améliorer l’accès durable à l’eau potable', 'Ancrer les pratiques d’hygiène, notamment le lavage des mains'],
    activites: ['Déclenchement ATPC dans 10 villages', 'Construction de 788 latrines familiales', 'Installation de dispositifs de lavage des mains', 'Formation des comités de gestion des points d’eau'],
    resultats: ['10 villages engagés vers la certification FDAL', '788 latrines réalisées', '8 400 personnes avec un meilleur accès à l’assainissement'],
    indicateurs: [
      { label: 'Latrines réalisées', cible: 850, atteint: 788 },
      { label: 'Villages couverts', cible: 10, atteint: 10 },
      { label: 'Dispositifs de lavage des mains', cible: 900, atteint: 640 },
    ],
    tauxRealisation: 82,
    temoignage: { quote: 'Avant, nos enfants tombaient souvent malades. Aujourd’hui chaque famille a sa latrine et on se lave les mains au savon.', author: 'Awa K.', role: 'Présidente du comité d’hygiène, Fronan' },
  },
  {
    slug: 'swedd',
    name: 'SWEDD',
    fullName: 'Autonomisation des femmes et dividende démographique au Sahel',
    status: 'en-cours',
    domain: 'autonomisation-femmes-jeunes',
    regions: ['bounkani', 'gontougo'],
    zone: 'Bounkani · Gontougo (Nord-Est)',
    partners: ['banque-mondiale', 'unfpa', 'ministere-solidarite'],
    periode: '2023 – 2026',
    duree: '36 mois',
    budget: '610 M FCFA',
    beneficiaires: 1850,
    beneficiairesLabel: 'adolescentes et jeunes filles',
    image: images.espaceSur,
    summary: 'Créer des espaces sûrs et accompagner les adolescentes vers plus d’autonomie, de santé et de maintien à l’école.',
    objectifs: ['Renforcer les compétences de vie des adolescentes', 'Retarder les mariages et grossesses précoces', 'Favoriser le maintien scolaire des filles'],
    activites: ['Ouverture de 74 espaces sûrs', 'Formation de mentores communautaires', 'Dialogues avec les parents et leaders', 'Kits scolaires et d’hygiène menstruelle'],
    resultats: ['1 850 adolescentes suivies en espaces sûrs', '74 mentores formées', '96 % de maintien scolaire des participantes'],
    indicateurs: [
      { label: 'Adolescentes en espaces sûrs', cible: 2000, atteint: 1850 },
      { label: 'Espaces sûrs fonctionnels', cible: 80, atteint: 74 },
      { label: 'Maintien scolaire', cible: 90, atteint: 96, unite: '%' },
    ],
    tauxRealisation: 88,
    temoignage: { quote: 'Dans l’espace sûr, j’ai appris à parler devant les autres. Je veux devenir sage-femme.', author: 'Salimata, 15 ans', role: 'Participante, Bouna' },
  },
  {
    slug: 'protege',
    name: 'PROTÈGE',
    fullName: 'Protection de l’enfant et lutte contre les VBG dans le Poro et le Tchologo',
    status: 'en-cours',
    domain: 'protection-enfant-petite-enfance',
    regions: ['poro', 'tchologo'],
    zone: 'Poro · Tchologo (Nord)',
    partners: ['unicef', 'ministere-solidarite', 'leaders'],
    periode: '2025 – 2027',
    duree: '24 mois',
    budget: '285 M FCFA',
    beneficiaires: 6200,
    beneficiairesLabel: 'enfants et membres des communautés',
    image: images.communaute,
    summary: 'Renforcer les mécanismes communautaires de protection de l’enfant et la prise en charge des survivant·e·s de VBG.',
    objectifs: ['Mettre en place des comités de protection fonctionnels', 'Améliorer le référencement des cas', 'Changer les normes sociales néfastes'],
    activites: ['Formation de 40 comités de protection', 'Campagnes de sensibilisation radio', 'Référencement vers les services sociaux', 'Sessions de parentalité positive'],
    resultats: ['40 comités de protection actifs', '214 cas référés et suivis', '24 000 personnes sensibilisées'],
    indicateurs: [
      { label: 'Comités de protection actifs', cible: 50, atteint: 40 },
      { label: 'Cas référés et suivis', cible: 300, atteint: 214 },
      { label: 'Personnes sensibilisées', cible: 30000, atteint: 24000 },
    ],
    tauxRealisation: 64,
  },
  {
    slug: 'sante-nut',
    name: 'SANTÉ-NUT',
    fullName: 'Santé communautaire et nutrition de l’Est',
    status: 'en-cours',
    domain: 'sante-nutrition',
    regions: ['gontougo', 'indenie-djuablin'],
    zone: 'Gontougo · Indénié-Djuablin (Est)',
    partners: ['unfpa', 'centres-sante'],
    periode: '2025 – 2026',
    duree: '18 mois',
    budget: '190 M FCFA',
    beneficiaires: 12600,
    beneficiairesLabel: 'enfants de moins de 5 ans dépistés',
    image: images.sante,
    summary: 'Rapprocher les soins des familles grâce aux agents de santé communautaire et lutter contre la malnutrition infantile.',
    objectifs: ['Dépister précocement la malnutrition aiguë', 'Renforcer les agents de santé communautaire', 'Promouvoir l’allaitement et l’alimentation équilibrée'],
    activites: ['Formation de 86 agents de santé communautaire', 'Dépistages mensuels', 'Foyers d’apprentissage nutritionnel', 'Campagnes de santé communautaire'],
    resultats: ['12 600 enfants dépistés', '86 agents formés', '1 120 cas de malnutrition pris en charge'],
    indicateurs: [
      { label: 'Enfants dépistés', cible: 15000, atteint: 12600 },
      { label: 'Agents de santé formés', cible: 90, atteint: 86 },
      { label: 'Foyers nutritionnels', cible: 40, atteint: 28 },
    ],
    tauxRealisation: 76,
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
    id: 'hambol', name: 'Hambol', chefLieu: 'Katiola', zone: 'Centre', lat: 8.14, lng: -5.1,
    departements: [
      { name: 'Katiola', sousPrefectures: [
        { name: 'Fronan', localites: [{ name: 'Fronan', projects: ['pasea'], detail: '4 villages · 312 latrines' }] },
        { name: 'Timbé', localites: [{ name: 'Timbé', projects: ['pasea'], detail: '3 villages · 254 latrines' }] },
        { name: 'Katiola', localites: [
          { name: 'Katiola (périphérie)', projects: ['pasea'], detail: '3 villages · 222 latrines' },
          { name: 'Katiola (ville)', projects: ['jeunes-emploi'], detail: '310 jeunes formés' },
        ] },
      ] },
      { name: 'Dabakala', sousPrefectures: [{ name: 'Dabakala', localites: [{ name: 'Dabakala', projects: ['jeunes-emploi'], detail: '140 AGR installées' }] }] },
    ],
  },
  {
    id: 'bounkani', name: 'Bounkani', chefLieu: 'Bouna', zone: 'Nord-Est', lat: 9.27, lng: -3.0,
    departements: [
      { name: 'Bouna', sousPrefectures: [
        { name: 'Bouna', localites: [{ name: 'Bouna', projects: ['swedd', 'cohesion-plus'], detail: '32 espaces sûrs · 810 jeunes filles' }] },
        { name: 'Ondéfidouo', localites: [{ name: 'Ondéfidouo', projects: ['swedd'], detail: '12 espaces sûrs · 300 jeunes filles' }] },
      ] },
      { name: 'Doropo', sousPrefectures: [{ name: 'Doropo', localites: [{ name: 'Doropo', projects: ['classes-passerelles'], detail: '48 classes passerelles' }] }] },
      { name: 'Téhini', sousPrefectures: [{ name: 'Téhini', localites: [{ name: 'Téhini', projects: ['classes-passerelles', 'cohesion-plus'], detail: '22 classes · 14 dialogues' }] }] },
    ],
  },
  {
    id: 'gontougo', name: 'Gontougo', chefLieu: 'Bondoukou', zone: 'Nord-Est', lat: 8.04, lng: -2.8,
    departements: [
      { name: 'Bondoukou', sousPrefectures: [{ name: 'Bondoukou', localites: [{ name: 'Bondoukou', projects: ['swedd', 'sante-nut'], detail: '30 espaces sûrs · 7 200 enfants dépistés' }] }] },
      { name: 'Tanda', sousPrefectures: [{ name: 'Tanda', localites: [{ name: 'Tanda', projects: ['sante-nut'], detail: '32 agents de santé communautaire' }] }] },
    ],
  },
  {
    id: 'poro', name: 'Poro', chefLieu: 'Korhogo', zone: 'Nord', lat: 9.46, lng: -5.63,
    departements: [
      { name: 'Korhogo', sousPrefectures: [
        { name: 'Korhogo', localites: [{ name: 'Korhogo', projects: ['protege', 'ecoles-vertes'], detail: '24 comités de protection' }] },
        { name: 'Napiéolédougou', localites: [{ name: 'Napiéolédougou', projects: ['karite-femmes'], detail: '8 coopératives ciblées' }] },
      ] },
      { name: 'Sinématiali', sousPrefectures: [{ name: 'Sinématiali', localites: [{ name: 'Sinématiali', projects: ['protege'], detail: '9 comités de protection' }] }] },
    ],
  },
  {
    id: 'tchologo', name: 'Tchologo', chefLieu: 'Ferkessédougou', zone: 'Nord', lat: 9.59, lng: -5.19,
    departements: [
      { name: 'Ferkessédougou', sousPrefectures: [{ name: 'Ferkessédougou', localites: [{ name: 'Ferkessédougou', projects: ['protege', 'cohesion-plus', 'karite-femmes'], detail: '7 comités · 22 dialogues' }] }] },
      { name: 'Ouangolodougou', sousPrefectures: [{ name: 'Ouangolodougou', localites: [{ name: 'Ouangolodougou', projects: ['cohesion-plus'], detail: 'Système d’alerte précoce' }] }] },
    ],
  },
  {
    id: 'gbeke', name: 'Gbêkê', chefLieu: 'Bouaké', zone: 'Centre', lat: 7.69, lng: -5.03,
    departements: [
      { name: 'Bouaké', sousPrefectures: [{ name: 'Bouaké', localites: [{ name: 'Bouaké', projects: ['jeunes-emploi', 'ecoles-vertes'], detail: '470 jeunes formés' }] }] },
    ],
  },
  {
    id: 'abidjan', name: 'District d’Abidjan', chefLieu: 'Abidjan', zone: 'Sud', lat: 5.36, lng: -4.01,
    departements: [
      { name: 'Abidjan', sousPrefectures: [{ name: 'Abobo', localites: [{ name: 'Abobo', projects: ['urgence-inondations'], detail: 'Zones à risque cartographiées' }] }] },
    ],
  },
  {
    id: 'indenie-djuablin', name: 'Indénié-Djuablin', chefLieu: 'Abengourou', zone: 'Est', lat: 6.73, lng: -3.49,
    departements: [
      { name: 'Abengourou', sousPrefectures: [{ name: 'Abengourou', localites: [{ name: 'Abengourou', projects: ['sante-nut'], detail: '22 agents · 5 400 enfants dépistés' }] }] },
    ],
  },
  {
    id: 'bere', name: 'Béré', chefLieu: 'Mankono', zone: 'Centre', lat: 8.06, lng: -6.19,
    departements: [
      { name: 'Mankono', sousPrefectures: [{ name: 'Mankono', localites: [{ name: 'Mankono', projects: ['classes-passerelles'], detail: '30 classes passerelles' }] }] },
    ],
  },
  {
    id: 'worodougou', name: 'Worodougou', chefLieu: 'Séguéla', zone: 'Ouest', lat: 7.96, lng: -6.67,
    departements: [
      { name: 'Séguéla', sousPrefectures: [{ name: 'Séguéla', localites: [{ name: 'Séguéla', projects: ['classes-passerelles'], detail: '20 classes passerelles' }] }] },
    ],
  },
  {
    id: 'tonkpi', name: 'Tonkpi', chefLieu: 'Man', zone: 'Ouest', lat: 7.41, lng: -7.55,
    departements: [
      { name: 'Man', sousPrefectures: [{ name: 'Man', localites: [{ name: 'Man', projects: ['cohesion-plus', 'urgence-inondations'], detail: '18 dialogues intercommunautaires' }] }] },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Actualités & événements (CDC §4 – 8 catégories)                     */
/* ------------------------------------------------------------------ */

export const newsCategories = ['Actualités EICF', 'Activités terrain', 'Cérémonies', 'Missions', 'Formations', 'Communiqués', 'Événements', 'Témoignages'] as const
export type NewsCategory = (typeof newsCategories)[number]

export type NewsItem = {
  slug: string
  title: string
  date: string
  category: NewsCategory
  image: string
  excerpt: string
  project?: string
  body: string[]
}

export const news: NewsItem[] = [
  { slug: 'katiola-communautes-avenir', title: 'À Katiola, les communautés prennent leur avenir en main', date: '2026-10-16', category: 'Activités terrain', image: images.latrines, project: 'pasea', excerpt: 'Dix villages du département de Katiola ont franchi une étape décisive vers la fin de la défécation à l’air libre.', body: ['Dans le cadre du projet PASEA, les dix villages accompagnés par EICF dans le département de Katiola ont désormais tous engagé leur démarche de certification « Fin de la défécation à l’air libre ».', 'Au total, 788 latrines familiales ont été construites par les ménages eux-mêmes, avec l’appui technique des équipes EICF et des artisans locaux formés.', 'Les comités d’hygiène villageois assurent désormais le suivi des bonnes pratiques, notamment le lavage des mains au savon.'] },
  { slug: 'campagne-sante-bounkani', title: 'Une nouvelle campagne de santé communautaire dans l’Est', date: '2026-10-10', category: 'Activités terrain', image: images.sante, project: 'sante-nut', excerpt: 'Plus de 2 000 enfants dépistés en une semaine dans les régions du Gontougo et de l’Indénié-Djuablin.', body: ['La campagne de dépistage nutritionnel conduite avec les districts sanitaires a permis d’identifier et de référer 214 enfants souffrant de malnutrition aiguë.', 'Les agents de santé communautaire formés par EICF assureront le suivi des enfants dans les foyers d’apprentissage nutritionnel.'] },
  { slug: 'education-filles-reussite', title: 'Éducation : accompagner les filles vers la réussite', date: '2026-10-02', category: 'Témoignages', image: images.espaceSur, project: 'swedd', excerpt: 'Dans les espaces sûrs du Bounkani, les adolescentes reprennent confiance et restent à l’école.', body: ['Avec 96 % de maintien scolaire parmi les participantes, les espaces sûrs du projet SWEDD montrent l’impact d’un accompagnement de proximité.', 'Les mentores communautaires jouent un rôle central dans le dialogue avec les familles.'] },
  { slug: 'formation-mediateurs-tchologo', title: '40 nouveaux médiateurs communautaires formés dans le Tchologo', date: '2026-09-21', category: 'Formations', image: images.dialogue, project: 'cohesion-plus', excerpt: 'Une session de cinq jours pour renforcer la prévention et la gestion pacifique des conflits fonciers.', body: ['Chefs de village, femmes leaders et jeunes ont été formés aux techniques de médiation et à l’utilisation du système d’alerte précoce.'] },
  { slug: 'signature-convention-unicef', title: 'Signature d’une convention de partenariat avec l’UNICEF', date: '2026-09-05', category: 'Cérémonies', image: images.communaute, project: 'protege', excerpt: 'Un nouvel accord pour renforcer la protection de l’enfant dans le Poro et le Tchologo.', body: ['La cérémonie s’est tenue à Abidjan en présence des autorités administratives et des représentants des communautés bénéficiaires.'] },
  { slug: 'mission-supervision-bm', title: 'Mission de supervision de la Banque mondiale à Katiola', date: '2026-08-28', category: 'Missions', image: images.eau, project: 'pasea', excerpt: 'La délégation a salué la forte appropriation communautaire des ouvrages d’assainissement.', body: ['La mission a visité quatre villages et échangé avec les comités de gestion et les autorités locales.'] },
  { slug: 'communique-rapport-annuel-2025', title: 'Communiqué : publication du rapport annuel 2025', date: '2026-07-15', category: 'Communiqués', image: images.femmes, excerpt: 'Le rapport annuel 2025 d’EICF est désormais disponible dans la médiathèque.', body: ['Ce rapport présente l’ensemble des réalisations, résultats et comptes de l’organisation pour l’exercice 2025.'] },
  { slug: 'forum-partenaires-2026', title: 'Forum des partenaires EICF 2026 — Save the date', date: '2026-12-04', category: 'Événements', image: images.dialogue, excerpt: 'Rendez-vous le 4 décembre à Abidjan pour le premier forum des partenaires techniques et financiers d’EICF.', body: ['Le forum présentera le plan stratégique 2027-2031 et les projets en recherche de financement.'] },
]

/* ------------------------------------------------------------------ */
/* Médiathèque & centre de ressources (CDC §5)                         */
/* ------------------------------------------------------------------ */

export const docTypes = ['Rapports annuels', 'Rapports de projets', 'Rapports finaux', 'Études', 'Manuels', 'Guides', 'Termes de référence', 'Publications', 'Notes de capitalisation'] as const
export type DocType = (typeof docTypes)[number]

export type DocumentItem = {
  slug: string
  title: string
  type: DocType
  year: number
  size: string
  project?: string
  domain?: string
  summary: string
}

export const documents: DocumentItem[] = [
  { slug: 'rapport-annuel-2025', title: 'Rapport annuel EICF 2025', type: 'Rapports annuels', year: 2025, size: 'PDF · 6,2 Mo', summary: 'Réalisations, résultats et états financiers de l’exercice 2025.' },
  { slug: 'rapport-annuel-2024', title: 'Rapport annuel EICF 2024', type: 'Rapports annuels', year: 2024, size: 'PDF · 5,8 Mo', summary: 'Bilan des interventions et perspectives 2025.' },
  { slug: 'rapport-semestriel-pasea', title: 'Rapport semestriel PASEA — S1 2026', type: 'Rapports de projets', year: 2026, size: 'PDF · 3,1 Mo', project: 'pasea', domain: 'eau-hygiene-assainissement', summary: 'Avancement des 788 latrines et de la certification FDAL dans 10 villages.' },
  { slug: 'rapport-swedd-2025', title: 'Rapport d’étape SWEDD 2025', type: 'Rapports de projets', year: 2025, size: 'PDF · 2,7 Mo', project: 'swedd', domain: 'autonomisation-femmes-jeunes', summary: 'Résultats des espaces sûrs : 1 850 adolescentes, 96 % de maintien scolaire.' },
  { slug: 'rapport-final-classes-passerelles', title: 'Rapport final — Classes passerelles', type: 'Rapports finaux', year: 2024, size: 'PDF · 4,4 Mo', project: 'classes-passerelles', domain: 'education-formation-alphabetisation', summary: '5 200 enfants scolarisés, 87 % de réinsertion dans le cursus formel.' },
  { slug: 'rapport-final-cohesion', title: 'Rapport final — COHÉSION+', type: 'Rapports finaux', year: 2025, size: 'PDF · 3,9 Mo', project: 'cohesion-plus', domain: 'paix-cohesion-sociale', summary: '57 communautés mobilisées et 140 médiateurs formés.' },
  { slug: 'etude-besoins-nord-est', title: 'Étude sur les besoins des communautés du Nord-Est', type: 'Études', year: 2025, size: 'PDF · 7,0 Mo', domain: 'developpement-social-communautaire', summary: 'Diagnostic multisectoriel du Bounkani et du Gontougo.' },
  { slug: 'etude-vbg-poro', title: 'Étude de base VBG — Poro et Tchologo', type: 'Études', year: 2025, size: 'PDF · 2,2 Mo', project: 'protege', domain: 'droits-humains-vbg', summary: 'Prévalence, normes sociales et services disponibles.' },
  { slug: 'manuel-atpc', title: 'Manuel de l’animateur ATPC', type: 'Manuels', year: 2024, size: 'PDF · 1,8 Mo', domain: 'eau-hygiene-assainissement', summary: 'Méthodologie de déclenchement de l’assainissement total piloté par la communauté.' },
  { slug: 'guide-mobilisation', title: 'Guide de mobilisation communautaire', type: 'Guides', year: 2025, size: 'PDF · 1,4 Mo', domain: 'developpement-social-communautaire', summary: 'Outils pratiques pour les agents de terrain.' },
  { slug: 'guide-espaces-surs', title: 'Guide des mentores des espaces sûrs', type: 'Guides', year: 2024, size: 'PDF · 2,0 Mo', project: 'swedd', domain: 'autonomisation-femmes-jeunes', summary: 'Curriculum de compétences de vie pour adolescentes.' },
  { slug: 'tdr-evaluation-pasea', title: 'TdR — Évaluation finale du PASEA', type: 'Termes de référence', year: 2026, size: 'PDF · 0,4 Mo', project: 'pasea', domain: 'eau-hygiene-assainissement', summary: 'Recrutement d’un cabinet pour l’évaluation finale.' },
  { slug: 'publication-genre', title: 'Genre et développement local : regards croisés', type: 'Publications', year: 2025, size: 'PDF · 1,1 Mo', domain: 'autonomisation-femmes-jeunes', summary: 'Article de capitalisation publié avec nos partenaires universitaires.' },
  { slug: 'note-capitalisation-jeunes', title: 'Note de capitalisation — Insertion des jeunes', type: 'Notes de capitalisation', year: 2023, size: 'PDF · 0,9 Mo', project: 'jeunes-emploi', domain: 'entrepreneuriat-insertion', summary: 'Leçons apprises sur la pérennité des AGR.' },
  { slug: 'note-capitalisation-classes', title: 'Note de capitalisation — Classes passerelles', type: 'Notes de capitalisation', year: 2024, size: 'PDF · 0,8 Mo', project: 'classes-passerelles', domain: 'education-formation-alphabetisation', summary: 'Facteurs de succès de la réinsertion scolaire.' },
]

export const media = {
  photos: [
    { src: images.latrines, caption: 'Lavage des mains — Fronan, Hambol', project: 'pasea' },
    { src: images.espaceSur, caption: 'Espace sûr — Bouna, Bounkani', project: 'swedd' },
    { src: images.dialogue, caption: 'Dialogue communautaire — Ferkessédougou', project: 'cohesion-plus' },
    { src: images.femmes, caption: 'Coopérative de karité — Poro', project: 'karite-femmes' },
    { src: images.education, caption: 'Classe passerelle — Doropo', project: 'classes-passerelles' },
    { src: images.sante, caption: 'Dépistage nutritionnel — Bondoukou', project: 'sante-nut' },
    { src: images.moussa, caption: 'Atelier de soudure — Katiola', project: 'jeunes-emploi' },
    { src: images.aminata, caption: 'Portrait — Aminata, commerçante', project: 'swedd' },
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
/* Témoignages & histoires de changement                               */
/* ------------------------------------------------------------------ */

export const stories = [
  {
    slug: 'aminata',
    name: 'Aminata Coulibaly',
    role: 'Commerçante, membre d’un groupement d’épargne · Bouna',
    image: images.aminata,
    quote: 'Grâce au groupement d’épargne, j’ai ouvert ma boutique. Mes filles vont toutes à l’école.',
    story: 'Veuve et mère de quatre enfants, Aminata vivait de petits travaux agricoles. En rejoignant un groupement d’épargne et de crédit accompagné par EICF, elle a obtenu son premier prêt de 150 000 FCFA. Trois ans plus tard, sa boutique fait vivre sa famille et elle préside le groupement.',
    project: 'swedd',
  },
  {
    slug: 'moussa',
    name: 'Moussa Diarrassouba',
    role: 'Soudeur, ancien bénéficiaire · Katiola',
    image: images.moussa,
    quote: 'J’étais sans emploi. Aujourd’hui j’ai mon atelier et deux apprentis.',
    story: 'Après son apprentissage chez un maître artisan, Moussa a reçu un kit d’installation et un coaching de 12 mois. Son atelier réalise portails et équipements agricoles pour toute la sous-préfecture.',
    project: 'jeunes-emploi',
  },
]

export const beforeAfter = [
  { label: 'Accès à une latrine (villages PASEA)', before: '18 %', after: '91 %' },
  { label: 'Maintien scolaire des adolescentes (SWEDD)', before: '61 %', after: '96 %' },
  { label: 'Conflits résolus à l’amiable (COHÉSION+)', before: '35 %', after: '82 %' },
  { label: 'Revenu mensuel moyen des jeunes installés', before: '22 000 FCFA', after: '68 000 FCFA' },
]

/* ------------------------------------------------------------------ */
/* Gouvernance (À propos)                                              */
/* ------------------------------------------------------------------ */

export const governance = {
  board: [
    { name: 'Dr Koffi Yao', role: 'Président du Conseil d’Administration' },
    { name: 'Mme Mariam Touré', role: 'Vice-présidente' },
    { name: 'M. Seydou Ouattara', role: 'Trésorier général' },
    { name: 'Mme Adjoua N’Guessan', role: 'Secrétaire générale' },
  ],
  direction: [
    { name: 'Mme Fatou Konaté', role: 'Directrice exécutive' },
    { name: 'M. Jean-Marc Kouassi', role: 'Directeur des programmes' },
    { name: 'Mme Bintou Sanogo', role: 'Responsable suivi-évaluation & redevabilité' },
    { name: 'M. Ibrahim Cissé', role: 'Responsable administratif et financier' },
  ],
  orgChart: [
    { level: 'Assemblée générale', children: [] as string[] },
    { level: 'Conseil d’Administration', children: ['Commissariat aux comptes'] },
    { level: 'Direction exécutive', children: [] as string[] },
    { level: 'Départements', children: ['Programmes', 'Suivi-évaluation & gestion des connaissances', 'Administration & finances', 'Communication & partenariats'] },
    { level: 'Bases opérationnelles', children: ['Katiola', 'Bouna', 'Korhogo', 'Bondoukou'] },
  ],
}

export const history = [
  { year: '2012', text: 'Création d’EICF à Abidjan par un collectif de professionnels du développement.' },
  { year: '2015', text: 'Premiers projets d’éducation et d’alphabétisation dans le Bounkani.' },
  { year: '2018', text: 'Ouverture des bases opérationnelles de Bouna et de Katiola.' },
  { year: '2021', text: 'Lancement des classes passerelles avec l’UNICEF dans 3 régions.' },
  { year: '2023', text: 'Démarrage du projet SWEDD avec la Banque mondiale.' },
  { year: '2026', text: '11 régions d’intervention et nouvelle stratégie 2027-2031.' },
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

export type KpiGroup = { id: string; label: string; icon: string; kpis: { label: string; value: number; target: number; suffix?: string }[] }

export const kpiGroups: KpiGroup[] = [
  { id: 'education', label: 'Éducation', icon: 'GraduationCap', kpis: [
    { label: 'Enfants accompagnés', value: 5200, target: 6000 },
    { label: 'Filles bénéficiaires', value: 2704, target: 3000 },
    { label: 'Classes passerelles', value: 120, target: 120 },
    { label: 'Écoles accompagnées', value: 38, target: 50 },
  ] },
  { id: 'eau', label: 'Eau & assainissement', icon: 'Droplets', kpis: [
    { label: 'Latrines réalisées', value: 788, target: 850 },
    { label: 'Personnes bénéficiaires', value: 8400, target: 9000 },
    { label: 'Villages couverts', value: 10, target: 10 },
    { label: 'Points de lavage des mains', value: 640, target: 900 },
  ] },
  { id: 'autonomisation', label: 'Autonomisation', icon: 'HandHeart', kpis: [
    { label: 'Femmes accompagnées', value: 3100, target: 3500 },
    { label: 'Jeunes formés', value: 920, target: 900 },
    { label: 'AGR financées et installées', value: 410, target: 400 },
    { label: 'Adolescentes en espaces sûrs', value: 1850, target: 2000 },
  ] },
  { id: 'protection', label: 'Protection', icon: 'Shield', kpis: [
    { label: 'Personnes sensibilisées', value: 24000, target: 30000 },
    { label: 'Communautés mobilisées', value: 57, target: 60 },
    { label: 'Cas référés', value: 214, target: 300 },
    { label: 'Comités de protection actifs', value: 40, target: 50 },
  ] },
  { id: 'sante', label: 'Santé & nutrition', icon: 'HeartPulse', kpis: [
    { label: 'Enfants dépistés', value: 12600, target: 15000 },
    { label: 'Agents de santé formés', value: 86, target: 90 },
    { label: 'Cas de malnutrition pris en charge', value: 1120, target: 1300 },
    { label: 'Foyers nutritionnels', value: 28, target: 40 },
  ] },
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

/** Statistiques globales, calculées à partir de la base projets. */
export const globalStats = (() => {
  const active = projects.filter((p) => p.status !== 'conception')
  const beneficiaires = active.reduce((sum, p) => sum + p.beneficiaires, 0)
  const regionIds = new Set(projects.flatMap((p) => p.regions))
  return {
    beneficiaires,
    regions: regionIds.size,
    projets: active.length,
    projetsEnCours: projects.filter((p) => p.status === 'en-cours').length,
    projetsAcheves: projects.filter((p) => p.status === 'acheve').length,
    projetsConception: projects.filter((p) => p.status === 'conception').length,
    communautes: 57,
    partenaires: partners.length,
  }
})()

/** Phrase de synthèse générée automatiquement (CDC : « Résumé automatique »). */
export const impactSentence = `En 2026, EICF a contribué à améliorer les conditions de vie de ${formatNumber(globalStats.beneficiaires)} bénéficiaires dans ${globalStats.regions} régions à travers ${globalStats.projets} projets.`

/**
 * Navigation principale (CDC §5) — volontairement resserrée à 5 entrées
 * pour alléger l’en-tête ; chaque entrée regroupe ses sous-rubriques.
 */
export type NavChild = { label: string; href: string; desc?: string }
export type NavItem = { label: string; href: string; match?: string[]; children?: NavChild[] }

export const navigation: NavItem[] = [
  {
    label: 'L’ONG', href: '/a-propos', match: ['/a-propos'], children: [
      { label: 'Qui sommes-nous', href: '/a-propos#presentation', desc: 'Histoire, vision, mission et valeurs' },
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
