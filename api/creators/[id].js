import { getDb } from '../_db.js'
import { rowToCreator } from '../_utils.js'

export default async function handler(req, res) {
  const db = getDb()
  const { id } = req.query

  if (req.method === 'GET') {
    const result = await db.execute({ sql: 'SELECT * FROM creators WHERE id = ?', args: [id] })
    if (result.rows.length === 0) return res.status(404).json({ error: 'Creator not found' })
    return res.status(200).json(rowToCreator(result.rows[0]))
  }

  if (req.method === 'PUT') {
    const existing = await db.execute({ sql: 'SELECT * FROM creators WHERE id = ?', args: [id] })
    if (existing.rows.length === 0) return res.status(404).json({ error: 'Creator not found' })

    const body = req.body ?? {}
    await db.execute({
      sql: `UPDATE creators SET tag = ?, image = ?, updated_at = datetime('now') WHERE id = ?`,
      args: [
        typeof body.tag === 'string' ? body.tag.trim() : '',
        typeof body.image === 'string' ? body.image.trim() : '',
        id,
      ],
    })

    const result = await db.execute({ sql: 'SELECT * FROM creators WHERE id = ?', args: [id] })
    return res.status(200).json(rowToCreator(result.rows[0]))
  }

  if (req.method === 'DELETE') {
    const existing = await db.execute({ sql: 'SELECT 1 FROM creators WHERE id = ?', args: [id] })
    if (existing.rows.length === 0) return res.status(404).json({ error: 'Creator not found' })

    await db.execute({ sql: 'DELETE FROM creators WHERE id = ?', args: [id] })
    return res.status(204).end()
  }

  res.setHeader('Allow', 'GET, PUT, DELETE')
  return res.status(405).json({ error: `Method ${req.method} not allowed` })
}
