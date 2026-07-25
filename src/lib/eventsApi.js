import { request } from './apiClient.js'

export function listEvents() {
  return request('/events')
}

export function getEvent(id) {
  return request(`/events/${id}`)
}

export function createEvent(payload) {
  return request('/events', { method: 'POST', body: JSON.stringify(payload) })
}

export function updateEvent(id, payload) {
  return request(`/events/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}

export function deleteEvent(id) {
  return request(`/events/${id}`, { method: 'DELETE' })
}

export async function uploadImage(file) {
  const data = await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result.split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

  const result = await request('/upload', {
    method: 'POST',
    body: JSON.stringify({ filename: file.name, contentType: file.type, data }),
  })

  return result.url
}
