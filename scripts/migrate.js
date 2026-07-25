import { createClient } from '@libsql/client'
import { readFile } from 'node:fs/promises'

const url = process.env.TURSO_DATABASE_URL
const authToken = process.env.TURSO_AUTH_TOKEN

if (!url) {
  console.error('Set TURSO_DATABASE_URL (and TURSO_AUTH_TOKEN if remote) before running this script.')
  process.exit(1)
}

const db = createClient({ url, authToken })
const schema = await readFile(new URL('../db/schema.sql', import.meta.url), 'utf-8')
await db.executeMultiple(schema)

const columns = await db.execute('PRAGMA table_info(creators)')
const hasImage = columns.rows.some((row) => row.name === 'image')
if (!hasImage) {
  await db.execute("ALTER TABLE creators ADD COLUMN image TEXT NOT NULL DEFAULT ''")
  console.log('Added creators.image column.')
}

console.log('Schema applied.')
