import { request } from './apiClient.js'

export function listCreators() {
  return request('/creators')
}

export function getCreator(id) {
  return request(`/creators/${id}`)
}

export function createCreator(payload) {
  return request('/creators', { method: 'POST', body: JSON.stringify(payload) })
}

export function updateCreator(id, payload) {
  return request(`/creators/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}

export function deleteCreator(id) {
  return request(`/creators/${id}`, { method: 'DELETE' })
}

export async function uploadCreatorImage(file) {
  const data = await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result.split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

  const result = await request('/upload', {
    method: 'POST',
    body: JSON.stringify({ filename: file.name, contentType: file.type, data, folder: 'creators' }),
  })

  return result.url
}
