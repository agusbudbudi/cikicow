export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function rowToEvent(row) {
  return {
    id: row.id,
    name: row.name,
    image: row.image,
    detail: row.detail,
    startDate: row.start_date,
    endDate: row.end_date,
  }
}

export function validateEventPayload(body) {
  const errors = []
  if (!body.name || typeof body.name !== 'string' || !body.name.trim()) errors.push('name is required')
  if (!body.image || typeof body.image !== 'string' || !body.image.trim()) errors.push('image is required')
  if (!body.startDate || Number.isNaN(Date.parse(body.startDate))) errors.push('startDate is invalid')
  if (!body.endDate || Number.isNaN(Date.parse(body.endDate))) errors.push('endDate is invalid')
  return errors
}

export function normalizeTiktokUsername(input) {
  return input.trim().replace(/^@+/, '').toLowerCase()
}

export function rowToCreator(row) {
  return {
    id: row.id,
    tiktokUsername: row.tiktok_username,
    tag: row.tag,
    image: row.image,
  }
}

export function validateCreatorPayload(body) {
  const errors = []
  if (!body.tiktokUsername || typeof body.tiktokUsername !== 'string' || !normalizeTiktokUsername(body.tiktokUsername)) {
    errors.push('tiktokUsername is required')
  }
  return errors
}

export function rowToJoinBanner(row) {
  return {
    id: row.id,
    image: row.image,
    alt: row.alt,
    isActive: Boolean(row.is_active),
  }
}

export function validateJoinBannerPayload(body) {
  const errors = []
  if (!body.image || typeof body.image !== 'string' || !body.image.trim()) errors.push('image is required')
  if (!body.alt || typeof body.alt !== 'string' || !body.alt.trim()) errors.push('alt is required')
  return errors
}

export function rowToHighlight(row) {
  return {
    id: row.id,
    url: row.url,
    isActive: Boolean(row.is_active),
  }
}

export function validateHighlightPayload(body) {
  const errors = []
  if (!body.url || typeof body.url !== 'string' || !body.url.trim()) {
    errors.push('url is required')
  } else if (!/^https:\/\/(www\.)?tiktok\.com\/.+\/video\/\d+/.test(body.url.trim())) {
    errors.push('url must be a valid TikTok video URL')
  }
  return errors
}
