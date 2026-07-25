import { getDb } from '../_db.js'
import { rowToHighlight, validateHighlightPayload } from '../_utils.js'

export default async function handler(req, res) {
  const db = getDb()

  if (req.method === 'GET') {
    const result = await db.execute('SELECT * FROM highlights ORDER BY created_at ASC')
    return res.status(200).json(result.rows.map(rowToHighlight))
  }

  if (req.method === 'POST') {
    const body = req.body ?? {}
    const errors = validateHighlightPayload(body)
    if (errors.length > 0) {
      return res.status(400).json({ errors })
    }

    const id = crypto.randomUUID()
    await db.execute({
      sql: `INSERT INTO highlights (id, url, is_active, updated_at)
            VALUES (?, ?, ?, datetime('now'))`,
      args: [id, body.url.trim(), body.isActive === false ? 0 : 1],
    })

    const result = await db.execute({ sql: 'SELECT * FROM highlights WHERE id = ?', args: [id] })
    return res.status(201).json(rowToHighlight(result.rows[0]))
  }

  res.setHeader('Allow', 'GET, POST')
  return res.status(405).json({ error: `Method ${req.method} not allowed` })
}
