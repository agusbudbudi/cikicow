export async function request(path, options) {
  const res = await fetch(`/api${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options?.headers },
  })

  if (!res.ok) {
    const body = await res.json().catch(() => null)
    throw new Error(body?.errors?.join(', ') || body?.error || `Request failed: ${res.status}`)
  }

  if (res.status === 204) return null
  return res.json()
}
