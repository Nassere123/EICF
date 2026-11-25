import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Database,
  FileCheck2,
  Clock,
  AlertTriangle,
  Mail,
  Scale,
  CheckCircle2,
} from 'lucide-react'
import { org } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité & Protection des Données',
  description:
    'Règles de traitement, protection des données à caractère personnel (Loi ivoirienne n° 2013-450) et protocole éthique de sauvegarde de l’enfance (PSEA) de l’ONG EICF.',
  openGraph: {
    title: 'Politique de Confidentialité | ONG EICF',
    description:
      'Garanties de confidentialité, droits d’accès et conformité légale ARTCI au sein de l’ONG EICF.',
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Politique de Confidentialité</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Protection des Données &amp; Sauvegarde Éthique
          </span>

          <h1 className="display">
            Politique de Confidentialité &amp;<br />
            <em>protection des données.</em>
          </h1>

          <p className="lead max-w-3xl">
            L’ONG EICF s’engage à protéger rigoureusement les données à
            caractère personnel de ses bénéficiaires, donateurs, partenaires et
            visiteurs, conformément aux dispositions de la Loi n° 2013-450 et
            aux normes humanitaires internationales.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* BANDEAU CONFORMITÉ ARTCI & LOI 2013-450 */}
          <div className="bg-emerald-900 text-white rounded-3xl p-7 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-1">
              <span className="text-secondary font-bold text-xs uppercase tracking-wider block">
                Cadre Réglementaire National Ivoirien
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Conformité stricte à la Loi n° 2013-450 du 19 juin 2013
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
                Traitement loyal, sécurisé et transparent supervisé par le Référent Protection des Données &amp; Redevabilité sous le contrôle de l’Autorité de Régulation des Télécommunications/TIC de Côte d’Ivoire (ARTCI).
              </p>
            </div>
            <div className="shrink-0 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-mono font-bold text-secondary">
              ARTCI / LOI-2013-450
            </div>
          </div>

          {/* 1. RESPONSABLE DU TRAITEMENT & CONTACT DPO */}
          <article className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <UserCheck size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  1. Responsable du traitement &amp; Contact DPO
                </h2>
                <span className="text-xs text-muted">
                  Autorité de contrôle et contact dédié
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-textDark/85 leading-relaxed">
              <p>
                Le responsable du traitement des données personnelles collectées sur le site est l’<strong>ONG Ensemble Imaginons et Construisons le Futur (EICF)</strong>, représentée par sa Directrice Exécutive.
              </p>
              <div className="p-5 rounded-2xl bg-background border border-border space-y-1.5 text-xs">
                <div><strong>Délégué / Référent à la Protection des Données (DPO) :</strong> Cellule Redevabilité &amp; Conformité EICF</div>
                <div><strong>Adresse postale :</strong> Siège National EICF, Cocody Angré 8ème Tranche, Abidjan, Côte d’Ivoire</div>
                <div><strong>Courriel de contact direct :</strong> <span className="font-bold text-primary">{org.email}</span></div>
                <div><strong>Délai de traitement des demandes d’exercice de droits :</strong> Maximum 15 jours ouvrés</div>
              </div>
            </div>
          </article>

          {/* 2. NATURE DES DONNÉES COLLECTÉES ET FINALITÉS */}
          <article className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold">
                <Database size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  2. Données collectées &amp; Finalités légitimes
                </h2>
                <span className="text-xs text-muted">
                  Principe de minimisation et proportionnalité des données
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-textDark/85 leading-relaxed">
              <p>
                L’ONG EICF applique le principe de minimisation : seules les données strictement nécessaires au traitement de votre demande sont recueillies :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-background border border-border space-y-2">
                  <strong className="text-primary block text-sm font-bold">
                    Formulaires de contact &amp; Partenariat
                  </strong>
                  <p className="text-xs text-muted">
                    Nom, prénom, adresse email professionnelle, téléphone, nom de l’organisation et descriptif de la requête.
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    Finalité : Réponse institutionnelle sous 48h ouvrées
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-background border border-border space-y-2">
                  <strong className="text-primary block text-sm font-bold">
                    Candidatures &amp; Bénévolat
                  </strong>
                  <p className="text-xs text-muted">
                    Curriculum Vitae, lettre de motivation, expertise sectorielle et coordonnées de contact.
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    Finalité : Évaluation des compétences et recrutement
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-background border border-border space-y-2">
                  <strong className="text-primary block text-sm font-bold">
                    Demandes documentaires d’audits
                  </strong>
                  <p className="text-xs text-muted">
                    Nom, institution mandante, courriel officiel et objet de la mission d’audit préalable.
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    Finalité : Traçabilité et conformité fiduciaire bailleur
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-background border border-border space-y-2">
                  <strong className="text-primary block text-sm font-bold">
                    Bulletin d’information / Newsletter
                  </strong>
                  <p className="text-xs text-muted">
                    Adresse email uniquement. Aucun profilage publicitaire tiers n’est opéré.
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    Finalité : Envoi trimestriel des résultats de terrain
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* 3. DURÉE DE CONSERVATION DES DONNÉES */}
          <article className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Clock size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  3. Durée de conservation
                </h2>
                <span className="text-xs text-muted">
                  Délais légaux et archivage sécurisé
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-textDark/85 leading-relaxed">
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Demandes de contact et partenariats :</strong> Conservées pendant 24 mois après le dernier contact actif, puis archivées ou détruites.</li>
                <li><strong>Dossiers de candidature :</strong> Conservés pendant 12 mois maximum en CVthèque interne, sauf demande expresse de suppression.</li>
                <li><strong>Registres de demandes documentaires et audits :</strong> Archivés pendant 5 ans conformément aux exigences contractuelles des bailleurs internationaux.</li>
                <li><strong>Abonnement newsletter :</strong> Conservé jusqu’à la désinscription volontaire du destinataire.</li>
              </ul>
            </div>
          </article>

          {/* 4. DROITS DES PERSONNES (ARTICLES 28 À 34 LOI 2013-450) */}
          <article className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold">
                <Scale size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  4. Vos droits légaux garantis
                </h2>
                <span className="text-xs text-muted">
                  Exercice effectif de vos droits en toute simplicité
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-textDark/85 leading-relaxed">
              <p>
                Conformément aux articles 28 à 34 de la Loi n° 2013-450, vous disposez des droits suivants à l’égard de vos données personnelles :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-4 rounded-xl bg-background border border-border text-xs">
                  <strong className="text-primary block font-bold mb-1">Droit d’accès</strong>
                  <span>Obtenir confirmation du traitement et copie de vos données enregistrées.</span>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border text-xs">
                  <strong className="text-primary block font-bold mb-1">Droit de rectification</strong>
                  <span>Faire corriger, compléter ou actualiser vos données inexactes.</span>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border text-xs">
                  <strong className="text-primary block font-bold mb-1">Droit à l’effacement</strong>
                  <span>Demander la suppression définitive de vos données du système.</span>
                </div>
              </div>

              <p className="pt-2">
                Pour exercer ces droits, adressez simplement votre requête par courriel à{' '}
                <strong className="text-primary">{org.email}</strong> en précisant votre identité et l’objet précis de votre demande.
              </p>
            </div>
          </article>

          {/* 5. POLITIQUE DE SAUVEGARDE DE L'ENFANCE ET PROTOCOLE PSEA */}
          <article className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  5. Sauvegarde de l’Enfance &amp; Protection PSEA
                </h2>
                <span className="text-xs text-muted">
                  Garanties renforcées pour les bénéficiaires vulnérables
                </span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-textDark/85 leading-relaxed">
              <p>
                Dans le cadre de ses interventions de terrain (espaces sûrs SWEDD, classes passerelles CLEF/UNICEF, insertion des jeunes PEJEDEC), l’ONG EICF applique des règles de sauvegarde éthique d’une rigueur absolue :
              </p>

              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Consentement libre, préalable et éclairé :</strong> Aucun témoignage, récit de vie ou cliché photographique n’est publié sans accord écrit et signé du bénéficiaire ou de ses représentants légaux.</li>
                <li><strong>Anonymisation protectrice :</strong> L’identité des mineurs et des personnes ayant subi des violences est systématiquement anonymisée ou abrégée (ex. Salimata D., 17 ans).</li>
                <li><strong>Refus de la dramatisation misérabiliste :</strong> L’iconographie valorise la résilience, l’apprentissage et l’autonomie, en respectant la dignité intrinsèque des personnes.</li>
                <li><strong>Tolérance zéro PSEA :</strong> Tout comportement d’exploitation ou d’abus sexuel entraîne des poursuites immédiates. Le Mécanisme de Gestion des Plaintes (MGP) permet le signalement confidentiel et sécurisé.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
