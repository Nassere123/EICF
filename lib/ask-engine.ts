/**
 * Moteur de réponse « ASK EICF » (prototype).
 * ------------------------------------------------------------------
 * Conformément au cahier des charges, l'assistant répond UNIQUEMENT à
 * partir de la base documentaire EICF validée (lib/data.ts) et cite ses
 * sources. En phase 2, ce moteur sera remplacé par un LLM + RAG branché
 * sur les documents publiés dans le back-office.
 */
import {
  documents,
  domains,
  formatNumber,
  getDomain,
  getRegion,
  globalStats,
  impactSentence,
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
  'Dans quelles régions EICF intervient-elle ?',
  'Quels projets EICF a réalisés avec la Banque mondiale ?',
  'Quels sont les domaines d’intervention d’EICF ?',
  'Comment devenir partenaire ?',
  'Où télécharger le rapport annuel ?',
  'Quels sont les résultats du projet SWEDD ?',
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

/** Vrai si un mot de la question commence par le mot-clé (ou si la question contient l'expression). */
const has = (q: string, ...keys: string[]) =>
  keys.some((k) => {
    const nk = normalize(k)
    return nk.includes(' ') ? q.includes(nk) : q.split(' ').some((w) => w.startsWith(nk))
  })
const hasWord = (q: string, w: string) => (' ' + q + ' ').includes(' ' + normalize(w) + ' ')

const projectLine = (p: Project) => `${p.name} — ${p.zone} (${statusLabel[p.status].toLowerCase()}, ${formatNumber(p.beneficiaires)} ${p.beneficiairesLabel})`
const projectSource = (p: Project): AskSource => ({ label: `Fiche projet ${p.name}`, href: `/projets-actualites/${p.slug}` })

const zoneAliases: Record<string, string[]> = {
  'nord est': ['bounkani', 'gontougo'],
  'nord-est': ['bounkani', 'gontougo'],
  nord: ['poro', 'tchologo', 'bounkani'],
  centre: ['hambol', 'gbeke', 'bere'],
  est: ['gontougo', 'indenie-djuablin'],
  ouest: ['tonkpi', 'worodougou'],
  sud: ['abidjan'],
}

export function answer(question: string): AskAnswer {
  const q = normalize(question)

  // 1. Projet cité nommément
  const proj = projects.find((p) => q.includes(normalize(p.name)) || q.includes(p.slug.replace('-', ' ')))
  if (proj) {
    return {
      text: `${proj.name} (${proj.fullName}) est un projet ${statusLabel[proj.status].toLowerCase()} mené dans la zone ${proj.zone}, sur la période ${proj.periode}. ${proj.summary}`,
      bullets: proj.resultats,
      sources: [projectSource(proj), ...documents.filter((d) => d.project === proj.slug).slice(0, 2).map((d) => ({ label: d.title, href: '/mediatheque' }))],
    }
  }

  // 2. Partenaire / bailleur cité
  const partner = partners.find((p) => q.includes(normalize(p.name)) || (p.short.length > 2 && q.split(' ').includes(normalize(p.short))))
  if (partner) {
    const list = projects.filter((p) => p.partners.includes(partner.slug))
    return {
      text: list.length
        ? `EICF a conduit ${list.length} projet${list.length > 1 ? 's' : ''} avec ${partner.name} :`
        : `${partner.name} est un partenaire d’EICF (${partner.type}). ${partner.description}`,
      bullets: list.map(projectLine),
      sources: [{ label: 'Nos partenaires', href: '/partenaires' }, ...list.slice(0, 3).map(projectSource)],
    }
  }

  // 3. Zone géographique ou région citée
  const zoneKey = Object.keys(zoneAliases).sort((a, b) => b.length - a.length).find((z) => hasWord(q, z))
  const region = regions.find((r) => hasWord(q, r.name) || hasWord(q, r.chefLieu))
  if (region || (zoneKey && has(q, 'projet', 'intervien', 'actions', 'region'))) {
    const ids = region ? [region.id] : zoneAliases[zoneKey!]
    const list = projects.filter((p) => p.regions.some((r) => ids.includes(r)))
    const names = ids.map((id) => getRegion(id)?.name).filter(Boolean).join(', ')
    return {
      text: `Dans ${region ? 'la région du ' + region.name : 'le ' + zoneKey!.replace('nord est', 'Nord-Est').replace(/^./, (c) => c.toUpperCase()) + ' (' + names + ')'}, EICF mène ${list.length} projet${list.length > 1 ? 's' : ''} :`,
      bullets: list.map(projectLine),
      sources: [{ label: 'Cartographie interactive', href: '/cartographie' }, ...list.slice(0, 2).map(projectSource)],
    }
  }

  // 4. Régions d'intervention
  if (has(q, 'region', 'ou intervien', 'zones', 'ou travaill', 'implant', 'carte', 'localit')) {
    return {
      text: `EICF intervient dans ${regions.length} régions de Côte d’Ivoire, à partir de 4 bases opérationnelles (Katiola, Bouna, Korhogo, Bondoukou) :`,
      bullets: regions.map((r) => `${r.name} (${r.chefLieu}) — ${projects.filter((p) => p.regions.includes(r.id)).length} projet(s)`),
      sources: [{ label: 'Cartographie interactive', href: '/cartographie' }, { label: 'Implantation territoriale', href: '/a-propos#implantation' }],
    }
  }

  // 5. Domaines
  const dom = domains.find((d) => normalize(d.title).split(' ').filter((w) => w.length > 5).some((w) => q.includes(w)))
  if (has(q, 'domaine', 'secteur', 'thematique', 'que fait', 'activites')) {
    return {
      text: `EICF intervient dans ${domains.length} domaines complémentaires :`,
      bullets: domains.map((d) => d.title),
      sources: [{ label: 'Nos domaines d’intervention', href: '/domaines-intervention' }],
    }
  }

  // 6. Partenariat / soutien
  if (has(q, 'partenaire', 'partenariat', 'soutenir', 'financer', 'financement', 'cofinanc', 'aider', 'faire un don')) {
    const open = projects.filter((p) => p.status === 'conception')
    return {
      text: 'Vous pouvez devenir partenaire d’EICF en cofinançant un projet, en apportant une expertise ou en mobilisant votre entreprise. Projets actuellement en recherche de financement :',
      bullets: open.map((p) => `${p.name} — besoin : ${p.besoinFinancement} (${p.financementAcquis ?? 0} % acquis)`),
      sources: [{ label: 'Appels à partenariat', href: '/appels-a-partenariat' }, { label: 'Formulaire de partenariat', href: '/contact?type=partenariat' }],
    }
  }

  // 7. Documents / rapports
  if (has(q, 'rapport', 'telecharg', 'document', 'etude', 'guide', 'publication', 'manuel')) {
    const annual = documents.filter((d) => d.type === 'Rapports annuels')
    return {
      text: 'Tous les documents institutionnels sont disponibles en téléchargement dans la médiathèque. Les plus récents :',
      bullets: (has(q, 'annuel') ? annual : documents.slice(0, 5)).map((d) => `${d.title} (${d.size})`),
      sources: [{ label: 'Médiathèque & centre de ressources', href: '/mediatheque' }],
    }
  }

  // 8. Impact / chiffres
  if (has(q, 'resultat', 'impact', 'chiffre', 'combien', 'beneficiaire', 'bilan', 'indicateur')) {
    return {
      text: impactSentence,
      bullets: [`${globalStats.projetsEnCours} projets en cours`, `${globalStats.projetsAcheves} projets achevés`, `${globalStats.projetsConception} projets en conception`, '788 latrines réalisées dans le Hambol', '5 200 enfants scolarisés via les classes passerelles'],
      sources: [{ label: 'EICF Impact — tableau de bord', href: '/impact' }],
    }
  }

  // 9. Contact
  if (has(q, 'contact', 'adresse', 'telephone', 'email', 'joindre', 'emploi', 'candidature', 'recrut', 'stage', 'whatsapp')) {
    return {
      text: `Vous pouvez joindre EICF au ${org.phone}, par email à ${org.email} ou via WhatsApp. Siège : ${org.address}. Les candidatures spontanées se déposent depuis la page Contact.`,
      sources: [{ label: 'Contact & nous rejoindre', href: '/contact' }],
    }
  }

  // 10. Domaine précis
  if (dom) {
    const list = projects.filter((p) => p.domain === dom.slug)
    return {
      text: `${dom.title} : ${dom.objective}`,
      bullets: list.map(projectLine),
      sources: [{ label: dom.title, href: `/domaines-intervention/${dom.slug}` }],
    }
  }

  // 11. Présentation générale
  if (has(q, 'qui est', 'c est quoi', 'presentation', 'presente', 'mission', 'vision', 'histoire', 'ong', '60 secondes')) {
    return {
      text: `${org.fullName} (EICF) est une ONG ivoirienne créée en ${org.founded}. Mission : ${org.mission}`,
      sources: [{ label: 'À propos d’EICF', href: '/a-propos' }],
    }
  }

  return {
    text: 'Je n’ai pas trouvé de réponse dans la base documentaire validée d’EICF. Je préfère ne pas inventer d’information : essayez l’une des questions suggérées ou contactez notre équipe.',
    sources: [{ label: 'Contacter EICF', href: '/contact' }],
  }
}

/* ------------------------------------------------------------------ */
/* Recherche intelligente (projets, documents, actualités, domaines)   */
/* ------------------------------------------------------------------ */

export type SearchHit = { type: 'Projet' | 'Document' | 'Actualité' | 'Domaine'; title: string; excerpt: string; href: string; score: number }

const STOP = new Set('le la les de des du un une et en a au aux pour par sur dans avec quels quelles quel quelle sont est ce ces qui que d l eicf trouve moi moi donne projets projet'.split(' '))

export function smartSearch(query: string): SearchHit[] {
  const terms = normalize(query).split(' ').filter((t) => t.length > 1 && !STOP.has(t))
  if (!terms.length) return []

  const score = (hay: string) => {
    const h = normalize(hay)
    return terms.reduce((s, t) => s + (h.includes(t) ? (t.length > 4 ? 2 : 1) : 0), 0)
  }

  const hits: SearchHit[] = [
    ...projects.map((p) => ({
      type: 'Projet' as const,
      title: `${p.name} — ${p.fullName}`,
      excerpt: `${p.zone} · ${statusLabel[p.status]} · ${p.summary}`,
      href: `/projets-actualites/${p.slug}`,
      score: score([p.name, p.fullName, p.zone, p.summary, p.regions.join(' '), p.partners.map((s) => partners.find((x) => x.slug === s)?.name).join(' '), getDomain(p.domain)?.title].join(' ')) + 1,
    })),
    ...documents.map((d) => ({
      type: 'Document' as const,
      title: d.title,
      excerpt: `${d.type} · ${d.year} · ${d.summary}`,
      href: '/mediatheque',
      score: score([d.title, d.type, d.summary, d.project ?? '', String(d.year), d.project ? projects.find((p) => p.slug === d.project)?.partners.join(' ') : ''].join(' ')),
    })),
    ...news.map((n) => ({
      type: 'Actualité' as const,
      title: n.title,
      excerpt: n.excerpt,
      href: `/actualites/${n.slug}`,
      score: score([n.title, n.excerpt, n.category, n.project ?? ''].join(' ')),
    })),
    ...domains.map((d) => ({
      type: 'Domaine' as const,
      title: d.title,
      excerpt: d.short,
      href: `/domaines-intervention/${d.slug}`,
      score: score([d.title, d.short, d.objective].join(' ')),
    })),
  ]

  return hits.filter((h) => h.score > (h.type === 'Projet' ? 1 : 0)).sort((a, b) => b.score - a.score).slice(0, 8)
}
