import { getDb } from '../_db.js'
import { slugify, rowToEvent, validateEventPayload } from '../_utils.js'

export default async function handler(req, res) {
  const db = getDb()

  if (req.method === 'GET') {
    const result = await db.execute('SELECT * FROM events ORDER BY start_date DESC')
    return res.status(200).json(result.rows.map(rowToEvent))
  }

  if (req.method === 'POST') {
    const body = req.body ?? {}
    const errors = validateEventPayload(body)
    if (errors.length > 0) {
      return res.status(400).json({ errors })
    }

    const baseSlug = slugify(body.name)
    let id = baseSlug
    let suffix = 1
    while ((await db.execute({ sql: 'SELECT 1 FROM events WHERE id = ?', args: [id] })).rows.length > 0) {
      id = `${baseSlug}-${++suffix}`
    }

    await db.execute({
      sql: `INSERT INTO events (id, name, image, detail, start_date, end_date, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`,
      args: [id, body.name.trim(), body.image.trim(), body.detail ?? '', body.startDate, body.endDate],
    })

    const result = await db.execute({ sql: 'SELECT * FROM events WHERE id = ?', args: [id] })
    return res.status(201).json(rowToEvent(result.rows[0]))
  }

  res.setHeader('Allow', 'GET, POST')
  return res.status(405).json({ error: `Method ${req.method} not allowed` })
}
