import Link from 'next/link'
import {
  MapPin,
  ArrowRight,
  Sparkles,
  Droplets,
  GraduationCap,
  Users,
  ShieldCheck,
  Building,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { InteractiveMap } from '@/components/InteractiveMap'
import { regions, projects, formatNumber, statusLabel, getPartner } from '@/lib/data'

export default function CartographiePage() {
  const traceabilityExamples = [
    {
      domain: 'Eau & Assainissement (PASEA)',
      icon: <Droplets size={18} />,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      tag: 'Banque mondiale / Min. Hydraulique',
      path: 'Hambol → Katiola → 10 villages',
      highlight: '788 latrines certifiées & 9 TPE accompagnées (8 400 bénéficiaires)',
    },
    {
      domain: 'Éducation & Réinsertion (CLEF)',
      icon: <GraduationCap size={18} />,
      color: 'bg-blue-50 text-blue-800 border-blue-200',
      tag: 'UNICEF / DRENA San Pédro',
      path: 'San Pédro → Campements ruraux',
      highlight: '120 classes passerelles · 2 665 enfants déscolarisés réintégrés',
    },
    {
      domain: 'Insertion des Jeunes (PEJEDEC II & III)',
      icon: <Users size={18} />,
      color: 'bg-amber-50 text-amber-800 border-amber-200',
      tag: 'Banque mondiale / BCP-Emploi & AEJ',
      path: 'Bagoué & Agnéby-Tiassa → 5 départements',
      highlight: '85 groupes AVEC · 6 050 jeunes formés, équipés et insérés',
    },
    {
      domain: 'Paix & Cohésion Pastorale (GIZ & PNUD)',
      icon: <ShieldCheck size={18} />,
      color: 'bg-purple-50 text-purple-800 border-purple-200',
      tag: 'PNUD / Coopération Allemande GIZ',
      path: 'Tonkpi, Cavally & Bounkani → Zones frontalières',
      highlight: '32 comités de paix · 12 700 acteurs communautaires mobilisés',
    },
  ]

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Cartographie des interventions</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Système d’Information Géographique &amp; Traçabilité Terrain
          </span>

          <h1 className="display">
            Cartographie opérationnelle<br />
            <em>des interventions de l’ONG EICF.</em>
          </h1>

          <p className="lead">
            Naviguez à travers les 11 régions de Côte d’Ivoire couvertes depuis 18 ans, découvrez nos départements,
            sous-préfectures et villages d’intervention, et inspectez les réalisations physiques concrètes adossées à
            chaque convention bailleur.
          </p>
        </div>
      </section>

      {/* SECTION PRINCIPALE */}
      <section className="py-16 bg-background">
        <div className="container space-y-12">
          {/* EXEMPLES DE TRAÇABILITÉ OPÉRATIONNELLE DU RAPPORT D'AUDIT */}
          <div>
            <div className="mb-6">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs">
                Traçabilité &amp; Réalisations Physiques Vérifiables (Audit EICF Pages 6-7)
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-1">
                De la convention bailleur jusqu’à l’ouvrage communautaire
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {traceabilityExamples.map((ex, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-border shadow-xs hover:border-secondary transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold inline-flex items-center gap-1.5 ${ex.color}`}>
                        {ex.icon}
                        <span>{ex.domain}</span>
                      </span>
                    </div>

                    <span className="text-[11px] font-bold text-muted block mb-1">
                      {ex.tag}
                    </span>
                    <strong className="text-xs font-mono text-primary block mb-2">
                      {ex.path}
                    </strong>
                    <p className="text-xs text-textDark/90 font-medium leading-relaxed">
                      {ex.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CARTE INTERACTIVE LEAFLET OPENSTREETMAP */}
          <InteractiveMap showTitle={false} />

          {/* TABLEAU RÉCAPITULATIF DES 11 RÉGIONS ET RÉALISATIONS PHYSIQUES */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-border shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
              <div>
                <span className="text-secondary font-bold uppercase tracking-wider text-xs block mb-1">
                  Répertoire Territorial Consolidé
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                  Matrice Opérationnelle des 11 Régions d’Intervention
                </h3>
              </div>
              <Link
                href="/projets-actualites"
                className="btn btn-outline btn-sm self-start sm:self-auto"
              >
                <span>Voir les 20+ projets détaillés</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border text-muted uppercase text-[11px] tracking-wider">
                    <th className="py-3 px-3">Région &amp; Chef-lieu</th>
                    <th className="py-3 px-3">Zone</th>
                    <th className="py-3 px-3">Projets exécutés</th>
                    <th className="py-3 px-3">Bailleurs associés</th>
                    <th className="py-3 px-3">Réalisations physiques certifiées</th>
                    <th className="py-3 px-3 text-right">Bénéficiaires</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {regions.map((reg) => {
                    const regProjects = projects.filter((p) => p.regions.includes(reg.id))
                    const totalBen = regProjects.reduce((s, p) => s + p.beneficiaires, 0)
                    const bailleurs = Array.from(
                      new Set(
                        regProjects.flatMap((p) =>
                          p.partners.map((s) => getPartner(s)?.short ?? s)
                        )
                      )
                    )

                    return (
                      <tr key={reg.id} className="hover:bg-background/80 transition-colors">
                        <td className="py-3.5 px-3">
                          <strong className="text-primary font-bold block">{reg.name}</strong>
                          <span className="text-muted text-xs">Chef-lieu : {reg.chefLieu}</span>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold">
                            {reg.zone}
                          </span>
                        </td>
                        <td className="py-3.5 px-3">
                          <div className="space-y-1">
                            {regProjects.map((p) => (
                              <Link
                                key={p.slug}
                                href={`/projets-actualites/${p.slug}`}
                                className="block font-semibold text-textDark hover:text-secondary text-xs"
                              >
                                {p.name} <span className="text-[10px] text-muted">({statusLabel[p.status]})</span>
                              </Link>
                            ))}
                          </div>
                        </td>
                        <td className="py-3.5 px-3">
                          <div className="text-xs text-textDark/85">
                            {bailleurs.length > 0 ? bailleurs.join(', ') : 'Partenaires nationaux'}
                          </div>
                        </td>
                        <td className="py-3.5 px-3 text-xs text-muted max-w-xs">
                          {reg.id === 'hambol' && '788 latrines familiales, 9 TPE accompagnées, 10 villages FDAL'}
                          {reg.id === 'bounkani' && 'Infrastructures urbaines Bouna (14 000 hab.), 32 espaces sûrs SWEDD, 14 dialogues transhumance'}
                          {reg.id === 'bagoue' && '85 groupes AVEC structurés, chantiers THIMO, 3 200 jeunes insérés'}
                          {reg.id === 'agneby-tiassa' && 'Formation par apprentissage et insertion de 2 850 jeunes (PEJEDEC)'}
                          {reg.id === 'san-pedro' && '120 classes passerelles créées, 2 665 enfants déscolarisés réintégrés'}
                          {reg.id === 'folon' && '65 caisses villageoises AVEC actives, 1 950 personnes accompagnées'}
                          {reg.id === 'tonkpi' && '18 comités de paix, dialogues intercommunautaires, 8 500 bénéficiaires'}
                          {reg.id === 'gontougo' && '48 espaces sûrs SWEDD certifiés, maintien scolaire des adolescentes'}
                          {reg.id === 'poro' && '24 comités de paix, coopératives féminines de karité'}
                          {reg.id === 'tchologo' && 'Veille citoyenne et 22 dialogues « Non à l’extrémisme, Oui à la paix »'}
                          {reg.id === 'gbeke' && '470 jeunes formés et insérés aux métiers de proximité'}
                          {reg.id === 'abidjan' && 'Siège national et comités de résilience inondations urbaines'}
                        </td>
                        <td className="py-3.5 px-3 text-right font-serif font-bold text-secondary">
                          {formatNumber(totalBen)}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* BANNIÈRE VERS LES CAPACITÉS INSTITUTIONNELLES */}
          <div className="bg-primary text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold uppercase tracking-wider text-xs block mb-1">
                Conformité &amp; Suivi-Évaluation (MEL)
              </span>
              <h3 className="font-serif text-2xl font-bold mb-2">
                Un système de suivi géolocalisé KoboToolbox conforme aux audits
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Chaque village et chaque ouvrage communautaire font l’objet d’un relevé GPS rigoureux et d’un contrôle
                qualité des données (DQA) accessible aux bailleurs et évaluateurs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/capacites-institutionnelles#suivi-evaluation"
                className="px-6 py-3 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all text-xs sm:text-sm shadow-md"
              >
                <span>Découvrir le dispositif MEL</span>
              </Link>
              <Link
                href="/contact?type=partenariat"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all text-xs sm:text-sm"
              >
                <span>Proposer une intervention</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
