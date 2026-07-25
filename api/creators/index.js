import { getDb } from '../_db.js'
import { rowToCreator, validateCreatorPayload, normalizeTiktokUsername } from '../_utils.js'

export default async function handler(req, res) {
  const db = getDb()

  if (req.method === 'GET') {
    const result = await db.execute('SELECT * FROM creators ORDER BY created_at DESC')
    return res.status(200).json(result.rows.map(rowToCreator))
  }

  if (req.method === 'POST') {
    const body = req.body ?? {}
    const errors = validateCreatorPayload(body)
    if (errors.length > 0) {
      return res.status(400).json({ errors })
    }

    const id = normalizeTiktokUsername(body.tiktokUsername)
    const existing = await db.execute({ sql: 'SELECT 1 FROM creators WHERE id = ?', args: [id] })
    if (existing.rows.length > 0) {
      return res.status(409).json({ error: 'Creator dengan username ini sudah ada' })
    }

    await db.execute({
      sql: `INSERT INTO creators (id, tiktok_username, tag, image, updated_at)
            VALUES (?, ?, ?, ?, datetime('now'))`,
      args: [
        id,
        id,
        typeof body.tag === 'string' ? body.tag.trim() : '',
        typeof body.image === 'string' ? body.image.trim() : '',
      ],
    })

    const result = await db.execute({ sql: 'SELECT * FROM creators WHERE id = ?', args: [id] })
    return res.status(201).json(rowToCreator(result.rows[0]))
  }

  res.setHeader('Allow', 'GET, POST')
  return res.status(405).json({ error: `Method ${req.method} not allowed` })
}
