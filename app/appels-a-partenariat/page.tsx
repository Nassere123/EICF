import Link from 'next/link'
import {
  Handshake,
  ArrowRight,
  Building2,
  Briefcase,
  Users,
  MapPin,
  Clock,
  Target,
  CheckCircle2,
} from 'lucide-react'
import { projects, formatNumber } from '@/lib/data'

export default function AppelsPartenariatPage() {
  const conceptionProjects = projects.filter((p) => p.status === 'conception')

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/partenaires">Partenaires</Link>
            <span>/</span>
            <span>Appels à partenariat</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Mobilisation de Ressources & Cofinancement
          </span>

          <h1 className="display">
            Appels à partenariat &<br />
            <em>projets à fort impact à financer.</em>
          </h1>

          <p className="lead">
            Bailleurs de fonds, agences de coopération, fondations et
            entreprises engagées dans la RSE : découvrez nos projets en phase de
            conception et co-construisons des réponses durables.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact?type=partenariat"
              className="px-8 py-4 bg-secondary hover:bg-secondaryHover text-textDark font-bold rounded-full transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Devenir partenaire de l’EICF</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/mediatheque"
              className="px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2"
            >
              <span>Consulter nos rapports & audits</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Projets à financer (CDC §6) */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Portefeuille de Projets en Conception
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2">
              {conceptionProjects.length} projets prêts au déploiement,{' '}
              <span className="italic text-primary">avec études de faisabilité validées.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {conceptionProjects.map((p) => {
              const acquired = p.financementAcquis ?? 0

              return (
                <div
                  key={p.slug}
                  data-reveal
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-black/5 grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Image projet */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-textDark px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
                      Projet en conception
                    </div>
                  </div>

                  {/* Contenu projet */}
                  <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between gap-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-muted mb-3">
                        <span className="inline-flex items-center gap-1.5 text-primary">
                          <MapPin size={14} className="text-secondary" />
                          {p.zone}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} className="text-secondary" />
                          {p.duree}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-textDark mb-2">
                        {p.name} — <span className="text-primary">{p.fullName}</span>
                      </h3>

                      <p className="text-muted text-sm sm:text-base leading-relaxed mb-5">
                        {p.summary}
                      </p>

                      {p.problematique && (
                        <div className="p-4 sm:p-5 rounded-2xl bg-background border-l-4 border-secondary text-sm leading-relaxed mb-5">
                          <strong className="text-primary block mb-1">
                            Problématique ciblée :
                          </strong>
                          <span className="text-text">{p.problematique}</span>
                        </div>
                      )}

                      {/* Jauge de financement */}
                      <div className="bg-background/70 p-4 rounded-2xl border border-black/5">
                        <div className="flex flex-wrap justify-between items-center gap-2 text-xs sm:text-sm font-bold mb-2">
                          <span className="text-textDark">
                            Besoin estimatif :{' '}
                            <strong className="text-primary">{p.besoinFinancement}</strong>
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                            {acquired}% déjà sécurisé
                          </span>
                        </div>
                        <div className="progress">
                          <span style={{ width: `${acquired}%` }} />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-black/5 flex flex-wrap justify-between items-center gap-4">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted">
                        <Target size={16} className="text-secondary" />
                        <span>
                          Cible :{' '}
                          <strong className="text-textDark">
                            {formatNumber(p.beneficiaires)}
                          </strong>{' '}
                          {p.beneficiairesLabel}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={`/projets-actualites/${p.slug}`}
                          className="px-5 py-2.5 rounded-full border border-black/15 hover:border-primary text-textDark hover:text-primary font-bold text-xs sm:text-sm transition-colors"
                        >
                          Voir la fiche détaillée
                        </Link>
                        <Link
                          href="/contact?type=partenariat"
                          className="px-6 py-2.5 rounded-full bg-primary hover:bg-primaryDark text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
                        >
                          <span>Proposer un cofinancement</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2. Modalités d'alliances : Entreprises & Bailleurs (CDC §6) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Modalités de Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mt-2 mb-4">
              Des opportunités adaptées{' '}
              <span className="italic text-primary">à chaque profil de partenaire.</span>
            </h2>
            <p className="text-muted text-base sm:text-lg">
              Nous structurons nos partenariats autour d’engagements mesurables, d’une gouvernance transparente et d’un ancrage communautaire éprouvé.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              data-reveal
              className="p-7 rounded-2xl bg-background border border-black/5 hover:border-primary/30 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Building2 size={26} />
                </div>
                <h3 className="text-xl font-heading font-bold text-textDark mb-3">
                  Bailleurs de fonds & PTF
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Financement direct de programmes pluriannuels, avec suivi-évaluation et reporting conformes aux standards internationaux (BM, UE, système des Nations Unies).
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-black/5 flex items-center gap-2 text-xs font-bold text-primary">
                <CheckCircle2 size={14} className="text-secondary" />
                <span>Conventions pluriannuelles</span>
              </div>
            </div>

            <div
              data-reveal
              className="p-7 rounded-2xl bg-background border border-black/5 hover:border-primary/30 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-textDark transition-colors">
                  <Briefcase size={26} />
                </div>
                <h3 className="text-xl font-heading font-bold text-textDark mb-3">
                  Entreprises & RSE
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Mécénat ciblé, construction d’écoles et d’ouvrages hydrauliques/WASH dans vos zones d’activité, valorisation de votre impact social et environnemental.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-black/5 flex items-center gap-2 text-xs font-bold text-primary">
                <CheckCircle2 size={14} className="text-secondary" />
                <span>Projets clés en main & traçables</span>
              </div>
            </div>

            <div
              data-reveal
              className="p-7 rounded-2xl bg-background border border-black/5 hover:border-primary/30 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Handshake size={26} />
                </div>
                <h3 className="text-xl font-heading font-bold text-textDark mb-3">
                  Co-financement & Consortium
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Réponse conjointe aux appels à propositions internationaux en associant l’ancrage territorial de nos 4 bases opérationnelles et vos expertises sectorielles.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-black/5 flex items-center gap-2 text-xs font-bold text-primary">
                <CheckCircle2 size={14} className="text-secondary" />
                <span>Alliances ONG Nord / Sud</span>
              </div>
            </div>

            <div
              data-reveal
              className="p-7 rounded-2xl bg-background border border-black/5 hover:border-primary/30 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-textDark transition-colors">
                  <Users size={26} />
                </div>
                <h3 className="text-xl font-heading font-bold text-textDark mb-3">
                  Appels aux compétences
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Mise à disposition d’experts techniques, renforcement des capacités de nos équipes de terrain et transfert de technologies adaptées aux milieux ruraux.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-black/5 flex items-center gap-2 text-xs font-bold text-primary">
                <CheckCircle2 size={14} className="text-secondary" />
                <span>Mécénat de compétences</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link
              href="/contact?type=partenariat"
              className="px-9 py-4 bg-secondary hover:bg-secondaryHover text-textDark font-bold text-base sm:text-lg rounded-full transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Discuter d’une opportunité de partenariat</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
