'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Users,
  GraduationCap,
  Baby,
  HandHeart,
  Briefcase,
  HeartPulse,
  Droplets,
  Scale,
  Handshake,
  Sprout,
  LifeBuoy,
} from 'lucide-react'
import { domains, projects } from '@/lib/data'

export default function DomainesPage() {
  const [search, setSearch] = useState('')

  const domainIcons: Record<string, React.ReactNode> = {
    Users: <Users size={24} />,
    GraduationCap: <GraduationCap size={24} />,
    Baby: <Baby size={24} />,
    HandHeart: <HandHeart size={24} />,
    Briefcase: <Briefcase size={24} />,
    HeartPulse: <HeartPulse size={24} />,
    Droplets: <Droplets size={24} />,
    Scale: <Scale size={24} />,
    Handshake: <Handshake size={24} />,
    Sprout: <Sprout size={24} />,
    LifeBuoy: <LifeBuoy size={24} />,
  }

  const filtered = domains.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.short.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Domaines d’intervention</span>
          </div>
          <h1 className="display">
            Des réponses concrètes<br />
            <em>aux défis majeurs des communautés.</em>
          </h1>
          <p className="lead">
            De l’éducation de base à la cohésion sociale, découvrez les 11
            secteurs dans lesquels l’ONG EICF conçoit et pilote des programmes à
            fort impact en Côte d’Ivoire.
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          {/* Barre de recherche rapide de domaine */}
          <div
            style={{
              maxWidth: '540px',
              margin: '0 auto 50px',
            }}
          >
            <div className="search-field">
              <input
                type="text"
                placeholder="Filtrer un domaine (eau, éducation, femmes, santé...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="domain-grid">
            {filtered.map((dom) => {
              const domProjects = projects.filter((p) => p.domain === dom.slug)

              return (
                <Link
                  key={dom.slug}
                  href={`/domaines-intervention/${dom.slug}`}
                  className="domain-card"
                >
                  <div className="bg">
                    <img src={dom.image} alt={dom.title} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="num">{dom.num}</span>
                    <div className="icon-tile">
                      {domainIcons[dom.icon] ?? <Users size={24} />}
                    </div>
                  </div>

                  <h3>{dom.title}</h3>
                  <p>{dom.short}</p>

                  <div className="go">
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {domProjects.length} projet(s) · Fiche &rarr;
                    </span>
                    <ArrowRight size={15} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
