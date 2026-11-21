import Link from 'next/link'
import {
  Briefcase,
  ShieldCheck,
  Scale,
  TrendingUp,
  Sprout,
  Users,
  Handshake,
  CheckCircle2,
  ArrowRight,
  FileText,
} from 'lucide-react'
import { institutionalCapacities, documents } from '@/lib/data'

export default function CapacitesInstitutionnellesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase size={24} />,
    ShieldCheck: <ShieldCheck size={24} />,
    Scale: <Scale size={24} />,
    TrendingUp: <TrendingUp size={24} />,
    Sprout: <Sprout size={24} />,
    Users: <Users size={24} />,
    Handshake: <Handshake size={24} />,
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/a-propos">L’ONG EICF</Link>
            <span>/</span>
            <span>Nos capacités institutionnelles</span>
          </div>

          <span className="badge badge-gold mb-4">
            Due Diligence &amp; Qualification Bailleurs (Depuis le 1er février 2008)
          </span>

          <h1 className="display">
            Nos capacités techniques,<br />
            <em>fiduciaires et opérationnelles.</em>
          </h1>

          <p className="lead">
            Forte de 18+ années d’expérience et de plus de 20 projets exécutés avec
            la Banque mondiale, le PNUD, la GIZ, l’UNICEF, l’UNFPA et les institutions
            nationales, l’ONG EICF dispose d’un dispositif complet de gestion, de
            contrôle interne, de passation des marchés et de sauvegardes.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/mediatheque" className="btn btn-gold">
              <FileText size={16} />
              <span>Manuels &amp; politiques (Centre documentaire)</span>
            </Link>
            <Link href="/projets-actualites" className="btn btn-outline">
              <span>Voir les projets &amp; références</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* LES 7 PILIERS DE CAPACITÉ INSTITUTIONNELLE — Bande Verte */}
      <section className="section section-green">
        <div className="container">
          <div className="section-head center">
            <span className="badge badge-gold">Dispositif de Gestion &amp; Conformité</span>
            <h2 className="h2 mt-3 text-white">
              7 domaines de maîtrise <em>au standard des bailleurs internationaux</em>
            </h2>
            <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Capacités opérationnelles, fiduciaires et de sauvegardes vérifiables lors des missions d’évaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {institutionalCapacities.map((cap) => (
              <div
                key={cap.id}
                className="card flex flex-col justify-between"
                style={{ padding: '28px' }}
              >
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="icon-tile" style={{ marginBottom: 0 }}>
                      {iconMap[cap.icon] ?? <Briefcase size={24} />}
                    </div>
                    <div>
                      <span className="badge badge-gold mb-1.5">
                        Pilier {cap.num} · {cap.expectedContent}
                      </span>
                      <h3 style={{ fontSize: '21px', marginBottom: 0 }}>{cap.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: 'var(--ink-2)' }}>
                    {cap.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#06352a] block">
                      Outils, procédures &amp; livrables :
                    </span>
                    {cap.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>
                        <CheckCircle2 size={15} className="text-[#06352a] flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#d4d4d4] text-xs font-bold text-[#06352a]">
                  {cap.referenceHighlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCÈS AUX DOCUMENTS DE DUE DILIGENCE — Bande Blanche */}
      <section className="section section-white">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="badge badge-gold">Centre Documentaire Institutionnel</span>
              <h2 className="mt-3 text-white">
                Documents de gouvernance, procédures et <em>audits publiables</em>
              </h2>
              <p>
                Statuts (2008), organigramme officiel, manuel de procédures administratives et financières
                (SYSCOHADA), manuel de passation des marchés, politiques PSEA/MGP et rapports d’audit sont
                accessibles pour vos vérifications préalables.
              </p>
            </div>
            <div className="actions">
              <Link href="/mediatheque" className="btn btn-gold">
                <span>Consulter les {documents.length} documents</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/projets-actualites" className="btn btn-outline">
                <span>Tableau des références projets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
