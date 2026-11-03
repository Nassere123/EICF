import Link from 'next/link'
import {
  Handshake,
  ArrowRight,
  TrendingUp,
  Building2,
  Briefcase,
  Users,
  Target,
  Sparkles,
  CheckCircle,
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
          <h1 className="display">
            Appels à partenariat &<br />
            <em>projets à fort impact à financer.</em>
          </h1>
          <p className="lead">
            Bailleurs de fonds, agences de coopération, fondations et
            entreprises engagées dans la RSE : découvrez nos projets en phase de
            conception et co-construisons des réponses durables.
          </p>

          <div style={{ marginTop: '30px' }}>
            <Link href="/contact?type=partenariat" className="btn btn-gold">
              <span>Devenir partenaire de l’EICF</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Projets à financer (CDC §6) */}
      <section className="section bg-paper">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="display">
                3 projets prêts au déploiement,<br />
                <em>avec études de faisabilité validées.</em>
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '26px' }}>
            {conceptionProjects.map((p) => {
              const acquired = p.financementAcquis ?? 0

              return (
                <div key={p.slug} className="funding-card">
                  <div className="img">
                    <img src={p.image} alt={p.name} />
                  </div>

                  <div className="body">
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span className="badge badge-gold">Projet en conception</span>
                      <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 700 }}>
                        {p.zone} · {p.duree}
                      </span>
                    </div>

                    <h3>{p.name} — {p.fullName}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
                      {p.summary}
                    </p>

                    <div style={{ padding: '14px 18px', borderRadius: '12px', background: 'var(--paper)', fontSize: '14px' }}>
                      <strong style={{ color: 'var(--green)' }}>Problématique ciblée : </strong>
                      <span>{p.problematique}</span>
                    </div>

                    <div className="funding-meter">
                      <div className="top">
                        <span>Besoin estimatif : <strong>{p.besoinFinancement}</strong></span>
                        <span style={{ color: 'var(--green-2)' }}>{acquired}% acquis</span>
                      </div>
                      <div className="progress">
                        <span style={{ width: `${acquired}%` }} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginTop: '10px' }}>
                      <span style={{ fontSize: '13.5px', color: 'var(--muted)' }}>
                        Cible : <strong>{formatNumber(p.beneficiaires)}</strong> {p.beneficiairesLabel}
                      </span>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        <Link href={`/projets-actualites/${p.slug}`} className="btn btn-ghost btn-sm">
                          <span>Voir la fiche</span>
                        </Link>
                        <Link href="/contact?type=partenariat" className="btn btn-green btn-sm">
                          <span>Proposer un cofinancement</span>
                          <ArrowRight size={13} />
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
      <section className="section bg-white">
        <div className="container">
          <div className="section-head center">
            <h2 className="display">
              Des opportunités adaptées<br />
              <em>à chaque profil de partenaire.</em>
            </h2>
          </div>

          <div className="opp-grid">
            <div className="opp">
              <div className="icon-tile">
                <Building2 size={22} />
              </div>
              <h3>Bailleurs de fonds & PTF</h3>
              <p>
                Financement direct de programmes pluriannuels, avec reporting
                conforme aux standards internationaux (BM, UE, ONU).
              </p>
            </div>

            <div className="opp">
              <div className="icon-tile">
                <Briefcase size={22} />
              </div>
              <h3>Entreprises & RSE</h3>
              <p>
                Mécénat ciblé, construction d’écoles et d’ouvrages WASH dans vos
                zones d’activité, valorisation de votre engagement citoyen.
              </p>
            </div>

            <div className="opp">
              <div className="icon-tile">
                <Handshake size={22} />
              </div>
              <h3>Co-financement & Consortium</h3>
              <p>
                Réponse conjointe aux appels à propositions internationaux en
                associant notre ancrage local et vos expertises sectorielles.
              </p>
            </div>

            <div className="opp">
              <div className="icon-tile">
                <Users size={22} />
              </div>
              <h3>Appels aux compétences</h3>
              <p>
                Mise à disposition d’experts techniques, formation de nos équipes
                et transfert de technologies adaptées aux milieux ruraux.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/contact?type=partenariat" className="btn btn-gold">
              <span>Discuter d’une opportunité de partenariat</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
