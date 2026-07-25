import { request } from './apiClient.js'

export function listHighlights() {
  return request('/highlights')
}

export function getHighlight(id) {
  return request(`/highlights/${id}`)
}

export function createHighlight(payload) {
  return request('/highlights', { method: 'POST', body: JSON.stringify(payload) })
}

export function updateHighlight(id, payload) {
  return request(`/highlights/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}

export function deleteHighlight(id) {
  return request(`/highlights/${id}`, { method: 'DELETE' })
}
