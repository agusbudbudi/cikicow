import { request } from './apiClient.js'

export function listJoinBanners() {
  return request('/join-banners')
}

export function getJoinBanner(id) {
  return request(`/join-banners/${id}`)
}

export function createJoinBanner(payload) {
  return request('/join-banners', { method: 'POST', body: JSON.stringify(payload) })
}

export function updateJoinBanner(id, payload) {
  return request(`/join-banners/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}

export function deleteJoinBanner(id) {
  return request(`/join-banners/${id}`, { method: 'DELETE' })
}

export async function uploadJoinBannerImage(file) {
  const data = await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result.split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

  const result = await request('/upload', {
    method: 'POST',
    body: JSON.stringify({ filename: file.name, contentType: file.type, data, folder: 'join-banners' }),
  })

  return result.url
}
