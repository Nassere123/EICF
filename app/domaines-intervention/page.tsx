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
  Search,
} from 'lucide-react'
import { domains, projects } from '@/lib/data'

export default function DomainesPage() {
  const [search, setSearch] = useState('')

  const domainIcons: Record<string, React.ReactNode> = {
    Users: <Users size={22} />,
    GraduationCap: <GraduationCap size={22} />,
    Baby: <Baby size={22} />,
    HandHeart: <HandHeart size={22} />,
    Briefcase: <Briefcase size={22} />,
    HeartPulse: <HeartPulse size={22} />,
    Droplets: <Droplets size={22} />,
    Scale: <Scale size={22} />,
    Handshake: <Handshake size={22} />,
    Sprout: <Sprout size={22} />,
    LifeBuoy: <LifeBuoy size={22} />,
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

          <span className="badge badge-gold mb-4">11 Secteurs Stratégiques d’Action</span>

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

      <section className="section section-green">
        <div className="container">
          <div className="filter-bar">
            <div className="search-inline">
              <Search size={18} />
              <input
                type="text"
                placeholder="Filtrer un domaine (eau, éducation, femmes, santé, paix...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dom) => {
              const domProjects = projects.filter((p) => p.domain === dom.slug)

              return (
                <article key={dom.slug} className="card-mia">
                  <div className="card-mia-media">
                    <img src={dom.image} alt={dom.title} />
                    <span
                      className="badge badge-gold"
                      style={{ position: 'absolute', top: '10px', left: '10px' }}
                    >
                      Domaine {dom.num}
                    </span>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        width: '40px',
                        height: '40px',
                        background: '#ffffff',
                        color: 'var(--green)',
                        display: 'grid',
                        placeItems: 'center',
                        border: '1px solid #d4d4d4',
                      }}
                    >
                      {domainIcons[dom.icon] ?? <Users size={20} />}
                    </div>
                  </div>

                  <div className="card-mia-body">
                    <h3 className="card-mia-title">{dom.title}</h3>
                    <p className="card-mia-desc">{dom.short}</p>
                    <div className="card-mia-footer">
                      <span className="badge">
                        {domProjects.length} projet{domProjects.length > 1 ? 's' : ''} associé{domProjects.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <Link href={`/domaines-intervention/${dom.slug}`} className="card-mia-btn">
                      <span>Explorer le domaine</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
