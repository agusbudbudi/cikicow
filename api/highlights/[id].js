import { getDb } from '../_db.js'
import { rowToHighlight, validateHighlightPayload } from '../_utils.js'

export default async function handler(req, res) {
  const db = getDb()
  const { id } = req.query

  if (req.method === 'GET') {
    const result = await db.execute({ sql: 'SELECT * FROM highlights WHERE id = ?', args: [id] })
    if (result.rows.length === 0) return res.status(404).json({ error: 'Highlight not found' })
    return res.status(200).json(rowToHighlight(result.rows[0]))
  }

  if (req.method === 'PUT') {
    const existing = await db.execute({ sql: 'SELECT * FROM highlights WHERE id = ?', args: [id] })
    if (existing.rows.length === 0) return res.status(404).json({ error: 'Highlight not found' })

    const body = req.body ?? {}
    const errors = validateHighlightPayload(body)
    if (errors.length > 0) {
      return res.status(400).json({ errors })
    }

    await db.execute({
      sql: `UPDATE highlights SET url = ?, is_active = ?, updated_at = datetime('now') WHERE id = ?`,
      args: [body.url.trim(), body.isActive === false ? 0 : 1, id],
    })

    const result = await db.execute({ sql: 'SELECT * FROM highlights WHERE id = ?', args: [id] })
    return res.status(200).json(rowToHighlight(result.rows[0]))
  }

  if (req.method === 'DELETE') {
    const existing = await db.execute({ sql: 'SELECT 1 FROM highlights WHERE id = ?', args: [id] })
    if (existing.rows.length === 0) return res.status(404).json({ error: 'Highlight not found' })

    await db.execute({ sql: 'DELETE FROM highlights WHERE id = ?', args: [id] })
    return res.status(204).end()
  }

  res.setHeader('Allow', 'GET, PUT, DELETE')
  return res.status(405).json({ error: `Method ${req.method} not allowed` })
}
