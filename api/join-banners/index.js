import { getDb } from '../_db.js'
import { rowToJoinBanner, validateJoinBannerPayload } from '../_utils.js'

export default async function handler(req, res) {
  const db = getDb()

  if (req.method === 'GET') {
    const result = await db.execute('SELECT * FROM join_banners ORDER BY created_at ASC')
    return res.status(200).json(result.rows.map(rowToJoinBanner))
  }

  if (req.method === 'POST') {
    const body = req.body ?? {}
    const errors = validateJoinBannerPayload(body)
    if (errors.length > 0) {
      return res.status(400).json({ errors })
    }

    const id = crypto.randomUUID()
    await db.execute({
      sql: `INSERT INTO join_banners (id, image, alt, is_active, updated_at)
            VALUES (?, ?, ?, ?, datetime('now'))`,
      args: [id, body.image.trim(), body.alt.trim(), body.isActive === false ? 0 : 1],
    })

    const result = await db.execute({ sql: 'SELECT * FROM join_banners WHERE id = ?', args: [id] })
    return res.status(201).json(rowToJoinBanner(result.rows[0]))
  }

  res.setHeader('Allow', 'GET, POST')
  return res.status(405).json({ error: `Method ${req.method} not allowed` })
}
