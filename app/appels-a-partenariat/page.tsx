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
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/partenaires">Partenaires</Link>
            <span>/</span>
            <span>Appels à partenariat</span>
          </div>

          <span className="badge badge-gold mb-4">
            Mobilisation de Ressources &amp; Cofinancement
          </span>

          <h1 className="display">
            Appels à partenariat &amp;<br />
            <em>projets à fort impact à financer.</em>
          </h1>

          <p className="lead">
            Bailleurs de fonds, agences de coopération, fondations et entreprises engagées
            dans la RSE : découvrez nos projets en phase de conception et co-construisons des réponses durables.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/contact?type=partenariat" className="btn btn-gold">
              <span>Devenir partenaire d’EICF</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/mediatheque" className="btn btn-outline">
              <span>Consulter nos rapports &amp; audits</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Projets à financer — Bande Verte */}
      <section className="section section-green">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="badge badge-gold">Portefeuille de Projets en Conception</span>
              <h2 className="h2 mt-3 text-white">
                {conceptionProjects.length} projets prêts au déploiement,{' '}
                <em>avec études de faisabilité validées.</em>
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {conceptionProjects.map((p) => {
              const acquired = p.financementAcquis ?? 0

              return (
                <div key={p.slug} className="funding-card">
                  <div className="img">
                    <img src={p.image} alt={p.name} />
                    <span
                      className="badge badge-gold"
                      style={{ position: 'absolute', top: '12px', left: '12px' }}
                    >
                      En conception
                    </span>
                  </div>

                  <div className="body">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#4c5a53]">
                      <span className="inline-flex items-center gap-1.5 text-[#06352a]">
                        <MapPin size={14} /> {p.zone}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} /> {p.duree}
                      </span>
                    </div>

                    <h3>
                      {p.name} — <span style={{ color: 'var(--green-3)' }}>{p.fullName}</span>
                    </h3>

                    <p className="text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
                      {p.summary}
                    </p>

                    {p.problematique && (
                      <div style={{ padding: '12px 16px', background: '#f4f7f5', borderLeft: '4px solid var(--gold)', fontSize: '14px' }}>
                        <strong className="text-[#06352a] block mb-1">Problématique ciblée :</strong>
                        <span className="text-[#1c2a24]">{p.problematique}</span>
                      </div>
                    )}

                    <div className="p-4 border border-[#d4d4d4] bg-[#f4f7f5]">
                      <div className="flex flex-wrap justify-between items-center gap-2 text-xs sm:text-sm font-bold mb-2">
                        <span className="text-[#0b1813]">
                          Cadre : <strong className="text-[#06352a]">{p.besoinFinancement}</strong>
                        </span>
                        <span className="badge">{acquired}% déjà sécurisé</span>
                      </div>
                      <div className="progress">
                        <span style={{ width: `${acquired}%` }} />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#d4d4d4] flex flex-wrap justify-between items-center gap-4">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#4c5a53]">
                        <Target size={16} className="text-[#06352a]" />
                        <span>
                          Cible : <strong className="text-[#0b1813]">{formatNumber(p.beneficiaires)}</strong>{' '}
                          {p.beneficiairesLabel}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link href={`/projets-actualites/${p.slug}`} className="btn btn-ghost btn-sm">
                          Fiche détaillée
                        </Link>
                        <Link href="/contact?type=partenariat" className="btn btn-green btn-sm">
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

      {/* 2. Modalités d'alliances — Bande Blanche */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head center">
            <span className="badge badge-gold">Modalités de Collaboration</span>
            <h2 className="h2 mt-3" style={{ color: 'var(--ink)' }}>
              Des opportunités adaptées <em>à chaque profil de partenaire.</em>
            </h2>
            <p className="lead">
              Engagements mesurables, gouvernance transparente et ancrage communautaire éprouvé.
            </p>
          </div>

          <div className="opp-grid">
            <div className="opp">
              <div className="icon-tile">
                <Building2 size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0b1813]">Bailleurs de fonds &amp; PTF</h3>
              <p className="text-sm text-[#4c5a53] flex-1">
                Financement de programmes pluriannuels avec suivi-évaluation et reporting conformes aux standards internationaux.
              </p>
              <div className="pt-3 border-t border-[#d4d4d4] flex items-center gap-2 text-xs font-bold text-[#06352a]">
                <CheckCircle2 size={14} /> Conventions pluriannuelles
              </div>
            </div>

            <div className="opp">
              <div className="icon-tile">
                <Briefcase size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0b1813]">Entreprises &amp; RSE</h3>
              <p className="text-sm text-[#4c5a53] flex-1">
                Mécénat ciblé, construction d’écoles et d’ouvrages WASH dans vos zones d’activité, valorisation de votre impact social.
              </p>
              <div className="pt-3 border-t border-[#d4d4d4] flex items-center gap-2 text-xs font-bold text-[#06352a]">
                <CheckCircle2 size={14} /> Projets clés en main
              </div>
            </div>

            <div className="opp">
              <div className="icon-tile">
                <Handshake size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0b1813]">Co-financement &amp; Consortium</h3>
              <p className="text-sm text-[#4c5a53] flex-1">
                Réponse conjointe aux appels à propositions en associant nos 4 bases opérationnelles et vos expertises sectorielles.
              </p>
              <div className="pt-3 border-t border-[#d4d4d4] flex items-center gap-2 text-xs font-bold text-[#06352a]">
                <CheckCircle2 size={14} /> Alliances ONG Nord / Sud
              </div>
            </div>

            <div className="opp">
              <div className="icon-tile">
                <Users size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0b1813]">Appels aux compétences</h3>
              <p className="text-sm text-[#4c5a53] flex-1">
                Mise à disposition d’experts techniques, renforcement des capacités de nos équipes et transfert de méthodologies.
              </p>
              <div className="pt-3 border-t border-[#d4d4d4] flex items-center gap-2 text-xs font-bold text-[#06352a]">
                <CheckCircle2 size={14} /> Mécénat de compétences
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact?type=partenariat" className="btn btn-gold">
              <span>Discuter d’une opportunité de partenariat</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
