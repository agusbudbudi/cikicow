export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function formatRange(startDate, endDate) {
  if (startDate === endDate) return formatDate(startDate)
  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}

export function isEventActive(event) {
  return new Date(event.endDate) >= new Date()
}
