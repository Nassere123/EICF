import Link from 'next/link'
import { ShieldCheck, Lock, FileText, Scale, ArrowLeft } from 'lucide-react'
import { org } from '@/lib/data'

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Mentions légales &amp; Politique de confidentialité</span>
          </div>

          <span className="badge badge-gold mb-4">
            Cadre Réglementaire &amp; Protection des Données
          </span>

          <h1 className="display">
            Mentions légales &amp;<br />
            <em>Politique de confidentialité.</em>
          </h1>

          <p className="lead">
            Informations statutaires, règles de protection des données à caractère
            personnel applicables en République de Côte d’Ivoire et engagements éthiques de l’ONG EICF.
          </p>
        </div>
      </section>

      <section className="section section-green">
        <div className="container space-y-6" style={{ maxWidth: '960px' }}>
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={22} className="text-[#06352a]" />
              <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                1. Identification de l’organisation éditrice
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-[#1c2a24] leading-relaxed">
              <p>
                Le présent site web institutionnel est édité par l’Organisation Non
                Gouvernementale <strong>{org.fullName} ({org.name})</strong>,
                association de développement régie par la loi ivoirienne, officiellement
                créée le <strong>{org.foundedDate}</strong>.
              </p>
              <ul className="space-y-1.5 text-[#4c5a53]">
                <li>
                  <strong className="text-[#0b1813]">Siège social national :</strong> {org.address} · {org.postalAddress}
                </li>
                <li>
                  <strong className="text-[#0b1813]">Téléphones :</strong> {org.phones.join(' / ')}
                </li>
                <li>
                  <strong className="text-[#0b1813]">Courriers électroniques :</strong> {org.email} · {org.secondaryEmail}
                </li>
                <li>
                  <strong className="text-[#0b1813]">Direction de la publication :</strong> Direction Exécutive de l’ONG EICF, sous la supervision du Conseil d’Administration.
                </li>
              </ul>
            </div>
          </div>

          <div className="card" id="confidentialite">
            <div className="flex items-center gap-3 mb-4">
              <Lock size={22} className="text-[#06352a]" />
              <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                2. Collecte, utilisation et protection des données personnelles
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-[#1c2a24] leading-relaxed">
              <p>
                Conformément à la réglementation en vigueur en République de Côte
                d’Ivoire, notamment la <strong>Loi n° 2013-450 du 19 juin 2013 relative
                à la protection des données à caractère personnel</strong> (ARTCI), l’ONG EICF
                s’engage à protéger la vie privée des utilisateurs de sa plateforme.
              </p>
              <div className="p-5 bg-[#f4f7f5] border-l-4 border-[#06352a] space-y-2 text-sm">
                <p>
                  <strong>Finalités :</strong> Les informations recueillies via nos formulaires
                  sont exclusivement utilisées par les départements compétents de la Direction
                  Exécutive d’EICF pour instruire et répondre à votre demande.
                </p>
                <p>
                  <strong>Confidentialité :</strong> Aucune donnée personnelle n’est cédée ou
                  vendue à des tiers commerciaux.
                </p>
                <p>
                  <strong>Vos droits :</strong> Vous disposez d’un droit d’accès, de rectification
                  et de suppression en écrivant à{' '}
                  <a href={`mailto:${org.email}`} className="text-[#06352a] font-bold underline">
                    {org.email}
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={22} className="text-[#06352a]" />
              <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                3. Protection de la dignité des bénéficiaires et des mineurs
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-[#1c2a24] leading-relaxed">
              <p>
                En application de la <strong>Politique de Sauvegarde de l’Enfant</strong> et de
                la <strong>Politique PSEA</strong> de l’ONG EICF :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#4c5a53]">
                <li>
                  Les témoignages et photographies sont publiés après recueil du consentement éclairé.
                </li>
                <li>
                  L’identité des mineurs et des personnes vulnérables est systématiquement protégée ou anonymisée.
                </li>
                <li>
                  Les coordonnées cartographiques sont positionnées à l’échelle du chef-lieu administratif.
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={22} className="text-[#06352a]" />
              <h2 className="text-2xl font-heading font-bold text-[#0b1813]">
                4. Validation institutionnelle des contenus
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#1c2a24] leading-relaxed">
              Toutes les fiches projets, indicateurs de performance (KPI) et publications
              figurant sur ce site font l’objet d’une validation par le Responsable de projet,
              le Département Suivi-Évaluation et la Direction Exécutive.
            </p>
          </div>

          <div>
            <Link href="/" className="btn btn-gold">
              <ArrowLeft size={15} />
              <span>Retour à l’accueil</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
