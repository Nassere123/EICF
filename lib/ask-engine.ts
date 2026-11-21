/**
 * Moteur de réponse « ASK EICF » (alimenté par la base institutionnelle validée).
 * ------------------------------------------------------------------
 * Conformément au cahier des charges et au rapport d'observations :
 * - Date officielle de création : 1er février 2008 (18+ ans d'expérience)
 * - SWEDD : contrat signé en oct. 2021, durée 3 ans (2022–2024), clôturé le
 *   31 décembre 2024 dans 6 régions (Bounkani, Gontougo, Bélier, N'Zi, Moronou, Iffou)
 * - PASEA : Hambol (Katiola), 10 villages, 788 latrines familiales, 9 TPE accompagnées
 * - Références historiques : PEJEDEC II & III (Bagoué & Agnéby-Tiassa), AVEC-AEJ (Folon),
 *   CLEF / Classes passerelles (San Pédro), PDDIVS (Bouna), Programmes PNUD (Tonkpi, Cavally),
 *   Projet GIZ (Bouna).
 */
import {
  documents,
  domains,
  formatNumber,
  getDomain,
  getRegion,
  globalStats,
  impactSentence,
  institutionalCapacities,
  news,
  org,
  partners,
  projects,
  regions,
  statusLabel,
  type Project,
} from './data'

export type AskSource = { label: string; href: string }
export type AskAnswer = { text: string; bullets?: string[]; sources: AskSource[] }

export const suggestedQuestions = [
  'Qui est EICF et depuis quand existe-t-elle ?',
  'Quels projets EICF a exécutés avec la Banque mondiale, le PNUD et la GIZ ?',
  'Quelles sont les capacités institutionnelles et fiduciaires d’EICF ?',
  'Quels sont les résultats des projets SWEDD et PASEA ?',
  'Où consulter les statuts, manuels de procédures et rapports d’audit ?',
  'Comment devenir partenaire ou cofinancer un projet ?',
]

export const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .replace(/[^a-z0-9+ ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const has = (q: string, ...keys: string[]) =>
  keys.some((k) => {
    const nk = normalize(k)
    return nk.includes(' ') ? q.includes(nk) : q.split(' ').some((w) => w.startsWith(nk))
  })
const hasWord = (q: string, w: string) => (' ' + q + ' ').includes(' ' + normalize(w) + ' ')

const projectLine = (p: Project) =>
  `${p.name} — ${p.zone} (${statusLabel[p.status].toLowerCase()}, ${formatNumber(p.beneficiaires)} ${p.beneficiairesLabel})`
const projectSource = (p: Project): AskSource => ({
  label: `Fiche projet ${p.name}`,
  href: `/projets-actualites/${p.slug}`,
})

const zoneAliases: Record<string, string[]> = {
  'nord est': ['bounkani', 'gontougo'],
  'nord-est': ['bounkani', 'gontougo'],
  nord: ['bagoue', 'folon', 'poro'],
  centre: ['hambol', 'belier-nzi-moronou-iffou', 'bere', 'gbeke'],
  ouest: ['tonkpi', 'cavally'],
  sud: ['agneby-tiassa', 'san-pedro', 'abidjan'],
}

export function answer(question: string): AskAnswer {
  const q = normalize(question)

  // 1. Capacités institutionnelles / gestion / passation des marchés / sauvegardes
  if (has(q, 'capacite', 'fiduciair', 'passation', 'marche', 'comptab', 'financier', 'sauvegarde', 'pges', 'mgp', 'psea', 'audit', 'procedure')) {
    return {
      text: 'L’ONG EICF dispose de capacités techniques, administratives, financières et opérationnelles structurées autour de 7 piliers conformes aux exigences des bailleurs internationaux :',
      bullets: institutionalCapacities.map((c) => `${c.title} : ${c.expectedContent}`),
      sources: [
        { label: 'Nos capacités institutionnelles', href: '/capacites-institutionnelles' },
        { label: 'Centre documentaire institutionnel', href: '/mediatheque' },
      ],
    }
  }

  // 2. Projet cité nommément
  const proj = projects.find(
    (p) => q.includes(normalize(p.name)) || q.includes(p.slug.replace(/-/g, ' '))
  )
  if (proj) {
    return {
      text: `${proj.name} (${proj.fullName}) est un projet ${statusLabel[proj.status].toLowerCase()} (${proj.periode}) dans la zone ${proj.zone}. ${proj.summary}`,
      bullets: proj.resultats,
      sources: [
        projectSource(proj),
        ...documents
          .filter((d) => d.project === proj.slug)
          .slice(0, 2)
          .map((d) => ({ label: d.title, href: '/mediatheque' })),
      ],
    }
  }

  // 3. Partenaire / bailleur cité
  const partner = partners.find(
    (p) =>
      q.includes(normalize(p.name)) ||
      (p.short.length >= 2 && q.split(' ').includes(normalize(p.short)))
  )
  if (partner) {
    const list = projects.filter((p) => p.partners.includes(partner.slug))
    return {
      text: list.length
        ? `${partner.name} (${partner.relationStatus}) — EICF a exécuté ${list.length} programme(s) / projet(s) de référence :`
        : `${partner.name} (${partner.relationStatus}). ${partner.description}`,
      bullets: list.map(projectLine),
      sources: [
        { label: 'Bailleurs & Partenaires', href: '/partenaires' },
        ...list.slice(0, 4).map(projectSource),
      ],
    }
  }

  // 4. Zone géographique ou région citée
  const zoneKey = Object.keys(zoneAliases)
    .sort((a, b) => b.length - a.length)
    .find((z) => hasWord(q, z))
  const region = regions.find(
    (r) => hasWord(q, r.name) || hasWord(q, r.chefLieu)
  )
  if (region || (zoneKey && has(q, 'projet', 'intervien', 'actions', 'region'))) {
    const ids = region ? [region.id] : zoneAliases[zoneKey!]
    const list = projects.filter((p) => p.regions.some((r) => ids.includes(r)))
    const names = ids
      .map((id) => getRegion(id)?.name)
      .filter(Boolean)
      .join(', ')
    return {
      text: `Dans ${
        region
          ? 'la région ' + region.name
          : 'la zone ' + names
      }, EICF compte ${list.length} intervention(s) :`,
      bullets: list.map(projectLine),
      sources: [
        { label: 'Cartographie opérationnelle', href: '/cartographie' },
        ...list.slice(0, 3).map(projectSource),
      ],
    }
  }

  // 5. Régions d'intervention
  if (has(q, 'region', 'ou intervien', 'zones', 'ou travaill', 'implant', 'carte', 'localit')) {
    return {
      text: `Depuis le 1er février 2008, EICF est intervenue dans ${regions.length} régions et plus de 100 localités de Côte d’Ivoire, appuyée par son siège d’Abidjan et ses 4 bases opérationnelles (Katiola, Bouna, Korhogo, Bondoukou) :`,
      bullets: regions.map(
        (r) =>
          `${r.name} (${r.chefLieu}) — ${
            projects.filter((p) => p.regions.includes(r.id)).length
          } projet(s)`
      ),
      sources: [
        { label: 'Cartographie opérationnelle', href: '/cartographie' },
        { label: 'Implantation territoriale', href: '/a-propos#implantation' },
      ],
    }
  }

  // 6. Domaines
  const dom = domains.find((d) =>
    normalize(d.title)
      .split(' ')
      .filter((w) => w.length > 5)
      .some((w) => q.includes(w))
  )
  if (has(q, 'domaine', 'secteur', 'thematique', 'que fait', 'activites')) {
    return {
      text: `EICF intervient dans ${domains.length} domaines complémentaires :`,
      bullets: domains.map((d) => `${d.num}. ${d.title}`),
      sources: [{ label: 'Nos 11 domaines d’intervention', href: '/domaines-intervention' }],
    }
  }

  // 7. Partenariat / soutien
  if (has(q, 'partenaire', 'partenariat', 'soutenir', 'financer', 'financement', 'cofinanc', 'aider')) {
    const open = projects.filter((p) => p.status === 'conception')
    return {
      text: 'Pour établir un partenariat ou cofinancer un projet avec l’ONG EICF, vous pouvez évaluer nos capacités institutionnelles, consulter nos projets en phase de conception ou contacter la Direction Exécutive :',
      bullets: open.map(
        (p) => `${p.name} (${p.zone}) — ${p.financementAcquis ?? 0} % déjà mobilisé`
      ),
      sources: [
        { label: 'Nos capacités institutionnelles', href: '/capacites-institutionnelles' },
        { label: 'Appels à partenariat', href: '/appels-a-partenariat' },
        { label: 'Contacter la Direction Exécutive', href: '/contact?type=partenariat' },
      ],
    }
  }

  // 8. Documents / rapports / statuts
  if (has(q, 'rapport', 'telecharg', 'document', 'etude', 'statut', 'organigramme', 'manuel')) {
    return {
      text: 'Le Centre documentaire institutionnel d’EICF regroupe les 15 documents clés nécessaires à l’évaluation de l’ONG par les bailleurs :',
      bullets: documents.slice(0, 6).map((d) => `${d.title} (${d.accessLevel})`),
      sources: [{ label: 'Centre documentaire institutionnel', href: '/mediatheque' }],
    }
  }

  // 9. Impact / chiffres
  if (has(q, 'resultat', 'impact', 'chiffre', 'combien', 'beneficiaire', 'bilan', 'indicateur')) {
    return {
      text: impactSentence,
      bullets: [
        '18+ années d’expérience (créée le 1er février 2008)',
        '20+ projets réalisés dans 14 régions et 100+ villages',
        '788 latrines familiales dans 10 villages et 9 TPE accompagnées (PASEA Katiola)',
        '1 850 adolescentes en espaces sûrs dans 6 régions (SWEDD 2022–2024, clôturé le 31/12/2024)',
        '5 200 enfants réinsérés via les classes passerelles (CLEF San Pédro)',
        '2 070 jeunes insérés et 80 caisses AVEC structurées (PEJEDEC Bagoué & Agnéby-Tiassa, AVEC-AEJ Folon)',
      ],
      sources: [{ label: 'EICF Impact — Tableau de bord', href: '/impact' }],
    }
  }

  // 10. Gouvernance
  if (has(q, 'gouvernance', 'president', 'fondateur', 'directeur', 'conseil', 'departement')) {
    return {
      text: 'La gouvernance d’EICF distingue strictement le rôle institutionnel du Président Fondateur (BROU N’guessan Albert), le Conseil d’Administration, le Commissariat aux Comptes et la Direction Exécutive structurée autour de 6 fonctions :',
      bullets: [
        'Directeur Exécutif',
        'Département des Opérations et des programmes',
        'Département comptable et financier',
        'Département de l’Administration et des Ressources Humaines',
        'Département suivi-évaluation',
        'Département communication et partenariats',
      ],
      sources: [{ label: 'Gouvernance & Direction Exécutive', href: '/a-propos#gouvernance' }],
    }
  }

  // 11. Présentation générale / Date de création
  if (has(q, 'qui est', 'c est quoi', 'presentation', 'presente', 'mission', 'vision', 'histoire', 'ong', 'creation', '2008', 'quand')) {
    return {
      text: `${org.fullName} (EICF) est une ONG ivoirienne officiellement créée le ${org.foundedDate} (18+ ans d’expérience). Elle a exécuté plus de 20 projets dans 14 régions et plus de 100 localités avec la Banque mondiale, le PNUD, la GIZ, l’UNICEF, l’UNFPA et l’AEJ.`,
      bullets: [
        'PASEA dans le Hambol à Katiola (788 latrines dans 10 villages, 9 TPE accompagnées)',
        'SWEDD dans 6 régions (2022–2024, clôturé le 31 décembre 2024)',
        'PEJEDEC II & III dans la Bagoué (THIMO, AVEC) et l’Agnéby-Tiassa (insertion des jeunes)',
        'AVEC-AEJ dans le Folon, CLEF / Classes passerelles à San Pédro',
        'PDDIVS et Projet GIZ à Bouna, Programmes PNUD dans le Tonkpi et le Cavally',
      ],
      sources: [
        { label: 'Qui sommes-nous (depuis 2008)', href: '/a-propos' },
        { label: 'Nos capacités institutionnelles', href: '/capacites-institutionnelles' },
      ],
    }
  }

  // 12. Domaine précis
  if (dom) {
    const list = projects.filter((p) => p.domain === dom.slug)
    return {
      text: `${dom.title} : ${dom.objective}`,
      bullets: list.map(projectLine),
      sources: [{ label: dom.title, href: `/domaines-intervention/${dom.slug}` }],
    }
  }

  return {
    text: 'L’ONG EICF, créée le 1er février 2008, met à votre disposition l’ensemble de ses références vérifiées (PASEA, SWEDD, PEJEDEC, CLEF, PDDIVS, PNUD, GIZ), ses capacités institutionnelles et son centre documentaire.',
    sources: [
      { label: 'Projets & Références historiques', href: '/projets-actualites' },
      { label: 'Nos capacités institutionnelles', href: '/capacites-institutionnelles' },
    ],
  }
}

/* ------------------------------------------------------------------ */
/* Recherche intelligente (projets, documents, actualités, domaines)   */
/* ------------------------------------------------------------------ */

export type SearchHit = {
  type: 'Projet' | 'Document' | 'Actualité' | 'Domaine'
  title: string
  excerpt: string
  href: string
  score: number
}

const STOP = new Set(
  'le la les de des du un une et en a au aux pour par sur dans avec quels quelles quel quelle sont est ce ces qui que d l eicf trouve moi donne projets projet'.split(
    ' '
  )
)

export function smartSearch(query: string): SearchHit[] {
  const terms = normalize(query)
    .split(' ')
    .filter((t) => t.length > 1 && !STOP.has(t))
  if (!terms.length) return []

  const score = (hay: string) => {
    const h = normalize(hay)
    return terms.reduce(
      (s, t) => s + (h.includes(t) ? (t.length > 4 ? 2 : 1) : 0),
      0
    )
  }

  const hits: SearchHit[] = [
    ...projects.map((p) => ({
      type: 'Projet' as const,
      title: `${p.name} — ${p.fullName}`,
      excerpt: `${p.zone} · ${statusLabel[p.status]} · ${p.summary}`,
      href: `/projets-actualites/${p.slug}`,
      score:
        score(
          [
            p.name,
            p.fullName,
            p.zone,
            p.summary,
            p.regions.join(' '),
            p.partners
              .map((s) => partners.find((x) => x.slug === s)?.name)
              .join(' '),
            getDomain(p.domain)?.title,
          ].join(' ')
        ) + 1,
    })),
    ...documents.map((d) => ({
      type: 'Document' as const,
      title: d.title,
      excerpt: `${d.type} · ${d.year} · ${d.summary}`,
      href: '/mediatheque',
      score: score(
        [
          d.title,
          d.type,
          d.summary,
          d.project ?? '',
          String(d.year),
          d.project
            ? projects.find((p) => p.slug === d.project)?.partners.join(' ')
            : '',
        ].join(' ')
      ),
    })),
    ...news.map((n) => ({
      type: 'Actualité' as const,
      title: n.title,
      excerpt: n.excerpt,
      href: `/actualites/${n.slug}`,
      score: score([n.title, n.excerpt, n.category, n.location ?? '', n.project ?? ''].join(' ')),
    })),
    ...domains.map((d) => ({
      type: 'Domaine' as const,
      title: d.title,
      excerpt: d.short,
      href: `/domaines-intervention/${d.slug}`,
      score: score([d.title, d.short, d.objective].join(' ')),
    })),
  ]

  return hits
    .filter((h) => h.score > (h.type === 'Projet' ? 1 : 0))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
}
