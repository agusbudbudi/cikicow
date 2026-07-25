import { put } from '@vercel/blob'

const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/gif']
const MAX_BYTES = 5 * 1024 * 1024

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }

  const { filename, contentType, data, folder } = req.body ?? {}

  if (!filename || !contentType || !data) {
    return res.status(400).json({ error: 'filename, contentType and data are required' })
  }

  if (!ALLOWED_TYPES.includes(contentType)) {
    return res.status(400).json({ error: `Unsupported contentType: ${contentType}` })
  }

  const buffer = Buffer.from(data, 'base64')
  if (buffer.byteLength > MAX_BYTES) {
    return res.status(400).json({ error: 'File exceeds 5MB limit' })
  }

  const blob = await put(`${folder || 'events'}/${filename}`, buffer, {
    access: 'public',
    contentType,
    addRandomSuffix: true,
  })

  return res.status(201).json({ url: blob.url })
}
