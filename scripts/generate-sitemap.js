import { createClient } from '@libsql/client'
import { writeFile } from 'node:fs/promises'

const SITE_URL = 'https://www.republikcikicow.com'

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/creator', changefreq: 'weekly', priority: '0.8' },
  { path: '/event', changefreq: 'weekly', priority: '0.8' },
  { path: '/join', changefreq: 'monthly', priority: '0.7' },
]

const url = process.env.TURSO_DATABASE_URL
const authToken = process.env.TURSO_AUTH_TOKEN

if (!url) {
  console.warn('TURSO_DATABASE_URL not set — skipping sitemap regeneration, keeping existing public/sitemap.xml.')
  process.exit(0)
}

const db = createClient({ url, authToken })

const [events, creators] = await Promise.all([
  db.execute('SELECT id FROM events'),
  db.execute('SELECT id FROM creators'),
])

const urls = [
  ...STATIC_ROUTES,
  ...events.rows.map((row) => ({ path: `/event/${row.id}`, changefreq: 'monthly', priority: '0.6' })),
  ...creators.rows.map((row) => ({ path: `/creator/${row.id}`, changefreq: 'monthly', priority: '0.6' })),
]

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  ),
  '</urlset>',
  '',
].join('\n')

await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`Generated sitemap.xml with ${urls.length} URLs (${events.rows.length} events, ${creators.rows.length} creators).`)
