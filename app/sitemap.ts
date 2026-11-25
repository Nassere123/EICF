import type { MetadataRoute } from 'next'
import { projects, domains, news } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ongeicf.org'

  const staticRoutes = [
    '',
    '/a-propos',
    '/a-propos/mot-du-president',
    '/domaines-intervention',
    '/projets-actualites',
    '/capacites-institutionnelles',
    '/cartographie',
    '/mediatheque',
    '/impact',
    '/temoignages',
    '/actualites',
    '/partenaires',
    '/appels-a-partenariat',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority:
      route === ''
        ? 1.0
        : route === '/capacites-institutionnelles' ||
          route === '/cartographie' ||
          route === '/mediatheque'
        ? 0.9
        : 0.8,
  }))

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projets-actualites/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const domainRoutes = domains.map((d) => ({
    url: `${baseUrl}/domaines-intervention/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const newsRoutes = news.map((n) => ({
    url: `${baseUrl}/actualites/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticRoutes, ...projectRoutes, ...domainRoutes, ...newsRoutes]
}
