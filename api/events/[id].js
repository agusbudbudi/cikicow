import { getDb } from '../_db.js'
import { rowToEvent, validateEventPayload } from '../_utils.js'

export default async function handler(req, res) {
  const db = getDb()
  const { id } = req.query

  if (req.method === 'GET') {
    const result = await db.execute({ sql: 'SELECT * FROM events WHERE id = ?', args: [id] })
    if (result.rows.length === 0) return res.status(404).json({ error: 'Event not found' })
    return res.status(200).json(rowToEvent(result.rows[0]))
  }

  if (req.method === 'PUT') {
    const existing = await db.execute({ sql: 'SELECT * FROM events WHERE id = ?', args: [id] })
    if (existing.rows.length === 0) return res.status(404).json({ error: 'Event not found' })

    const body = req.body ?? {}
    const errors = validateEventPayload(body)
    if (errors.length > 0) {
      return res.status(400).json({ errors })
    }

    await db.execute({
      sql: `UPDATE events SET name = ?, image = ?, detail = ?, start_date = ?, end_date = ?, updated_at = datetime('now')
            WHERE id = ?`,
      args: [body.name.trim(), body.image.trim(), body.detail ?? '', body.startDate, body.endDate, id],
    })

    const result = await db.execute({ sql: 'SELECT * FROM events WHERE id = ?', args: [id] })
    return res.status(200).json(rowToEvent(result.rows[0]))
  }

  if (req.method === 'DELETE') {
    const existing = await db.execute({ sql: 'SELECT 1 FROM events WHERE id = ?', args: [id] })
    if (existing.rows.length === 0) return res.status(404).json({ error: 'Event not found' })

    await db.execute({ sql: 'DELETE FROM events WHERE id = ?', args: [id] })
    return res.status(204).end()
  }

  res.setHeader('Allow', 'GET, PUT, DELETE')
  return res.status(405).json({ error: `Method ${req.method} not allowed` })
}
