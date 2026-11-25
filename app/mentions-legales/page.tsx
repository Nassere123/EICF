import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ShieldCheck,
  Building,
  Scale,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Lock,
} from 'lucide-react'
import { org } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Mentions Légales & Informations Réglementaires',
  description:
    'Cadre juridique, enregistrement officiel, gouvernance statutaire et responsabilités éditoriales de l’ONG EICF conformément aux lois de la République de Côte d’Ivoire.',
  openGraph: {
    title: 'Mentions Légales | ONG EICF',
    description:
      'Organisation Non Gouvernementale ivoirienne créée le 1er février 2008 sous le régime de la loi n° 60-315 du 21 septembre 1960.',
  },
}

export default function MentionsLegalesPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Mentions Légales</span>
          </div>

          <span className="inline-block text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Conformité Juridique &amp; Statutaire
          </span>

          <h1 className="display">
            Mentions Légales &amp;<br />
            <em>cadre réglementaire.</em>
          </h1>

          <p className="lead max-w-3xl">
            Informations officielles relatives à l’identité juridique, à la
            gouvernance, à l’hébergement et aux conditions d’utilisation de la
            plateforme institutionnelle de l’ONG EICF.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 1. IDENTITÉ DE L'ORGANISATION ÉDITRICE */}
          <article className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Building size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  1. Éditeur de la plateforme
                </h2>
                <span className="text-xs text-muted">
                  Organisation émettrice et statut juridique officiel
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-textDark/85 leading-relaxed">
              <p>
                Le présent site internet accessible à l’adresse{' '}
                <strong className="text-primary">https://ongeicf.org</strong> (ainsi que ses déclinaisons de pré-production) est édité par l’Organisation Non Gouvernementale :
              </p>

              <div className="bg-background rounded-2xl p-5 border border-border/80 space-y-2 font-mono text-xs text-textDark">
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border/40">
                  <span className="text-muted font-sans font-bold">Dénomination officielle :</span>
                  <span className="font-bold text-primary">ONG Ensemble Imaginons et Construisons le Futur (ONG EICF)</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border/40">
                  <span className="text-muted font-sans font-bold">Forme juridique :</span>
                  <span>Association sans but lucratif / Organisation Non Gouvernementale</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border/40">
                  <span className="text-muted font-sans font-bold">Régime juridique :</span>
                  <span>Loi n° 60-315 du 21 septembre 1960 relative aux associations en Côte d’Ivoire</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border/40">
                  <span className="text-muted font-sans font-bold">Date de constitution officielle :</span>
                  <span className="font-bold text-emerald-800">1er février 2008 (18 ans d’existence continue)</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border/40">
                  <span className="text-muted font-sans font-bold">Enregistrement ministériel :</span>
                  <span>Récépissé officiel déclaré au Ministère de l’Intérieur et de la Sécurité</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border/40">
                  <span className="text-muted font-sans font-bold">Siège social national :</span>
                  <span>Cocody Angré 8ème Tranche, Abidjan, République de Côte d’Ivoire</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border/40">
                  <span className="text-muted font-sans font-bold">Téléphone standard :</span>
                  <span>{org.phone}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                  <span className="text-muted font-sans font-bold">Courriel institutionnel :</span>
                  <span className="text-primary font-bold">{org.email}</span>
                </div>
              </div>
            </div>
          </article>

          {/* 2. RESPONSABILITÉS ÉDITORIALES & DIRECTION */}
          <article className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold">
                <Scale size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  2. Direction de la publication &amp; Rédaction
                </h2>
                <span className="text-xs text-muted">
                  Gouvernance et responsabilité éditoriale
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-background border border-border/70 space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-muted block">
                  Directeur de la Publication
                </span>
                <strong className="text-base text-primary block font-serif">
                  M. BROU N’guessan Albert
                </strong>
                <span className="text-textDark/80 block text-xs">
                  Président Fondateur de l’ONG EICF
                </span>
                <p className="text-muted text-[11px] leading-relaxed pt-2">
                  Garant moral de la ligne institutionnelle, du respect des statuts constitutifs et de la vision fondatrice depuis le 1er février 2008.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background border border-border/70 space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-muted block">
                  Responsable Opérationnelle &amp; Rédactionnelle
                </span>
                <strong className="text-base text-primary block font-serif">
                  Mme Fatou Konaté
                </strong>
                <span className="text-textDark/80 block text-xs">
                  Directrice Exécutive de l’ONG EICF
                </span>
                <p className="text-muted text-[11px] leading-relaxed pt-2">
                  Supervision de la production documentaire, des bilans de projets et de la vérification de conformité des données publiées.
                </p>
              </div>
            </div>
          </article>

          {/* 3. HÉBERGEMENT TECHNIQUE & NOM DE DOMAINE */}
          <article className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Lock size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  3. Hébergement &amp; Infrastructure
                </h2>
                <span className="text-xs text-muted">
                  Disponibilité, sécurité technique et nom de domaine
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-textDark/85 leading-relaxed">
              <p>
                La plateforme institutionnelle est déployée sur une infrastructure infonuagique haute disponibilité conforme aux standards de sécurité SSL/TLS :
              </p>

              <div className="p-4 rounded-2xl bg-background border border-border text-xs space-y-1">
                <div><strong>Hébergeur :</strong> Vercel Inc.</div>
                <div><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</div>
                <div><strong>Protocole de transmission :</strong> HTTPS avec chiffrement TLS 1.3</div>
                <div><strong>Nom de domaine officiel :</strong> ongeicf.org (gestion et enregistrement sous supervision administrative)</div>
              </div>
            </div>
          </article>

          {/* 4. PROPRIÉTÉ INTELLECTUELLE & CRÉDITS */}
          <article className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  4. Propriété intellectuelle &amp; Droits d’auteur
                </h2>
                <span className="text-xs text-muted">
                  Protection des contenus, logos et documents
                </span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-textDark/85 leading-relaxed">
              <p>
                L’ensemble des éléments figurant sur le présent site (notamment la marque et le logo officiel EICF, l’arborescence des 11 domaines d’intervention, les textes descriptifs, les infographies, les cartographies interactives Leaflet et les photographies de terrain) sont protégés par les dispositions du Code de la Propriété Intellectuelle ivoirien et les conventions internationales applicables.
              </p>
              <p>
                Les documents institutionnels mis à disposition dans le Centre Documentaire (Statuts, Politiques de Sauvegarde PSEA, Rapports annuels, Notes de capitalisation) demeurent la propriété intellectuelle exclusive de l’ONG EICF ou de ses bailleurs partenaires (Banque mondiale, UNICEF, UNFPA, PNUD, GIZ, AEJ).
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed font-medium">
                Toute reproduction, représentation, adaptation ou rediffusion totale ou partielle de ces éléments, par quelque procédé que ce soit, sans l’autorisation expresse et écrite de la Direction Exécutive de l’ONG EICF est formellement interdite.
              </div>
            </div>
          </article>

          {/* 5. DROIT APPLICABLE & JURIDICTION */}
          <article className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  5. Droit applicable &amp; Attribution de juridiction
                </h2>
                <span className="text-xs text-muted">
                  Cadre territorial de règlement des litiges
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-textDark/85 leading-relaxed">
              <p>
                Le présent site internet et ses conditions d’utilisation sont régis par le droit en vigueur en République de Côte d’Ivoire.
              </p>
              <p>
                En cas de litige relatif à l’interprétation ou à l’exécution des présentes mentions, les parties s’engagent à rechercher prioritairement un règlement amiable. À défaut de conciliation dans un délai de trente (30) jours, compétence expresse est attribuée aux tribunaux compétents d’Abidjan.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
