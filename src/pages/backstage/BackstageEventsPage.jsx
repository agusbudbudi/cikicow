import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { listEvents, deleteEvent } from '../../lib/eventsApi.js'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

function isEventActive(endDate) {
  const end = new Date(endDate)
  end.setHours(23, 59, 59, 999)
  return end >= new Date()
}

export default function BackstageEventsPage() {
  const { setHeader } = useOutletContext()
  const [events, setEvents] = useState(null)
  const [error, setError] = useState(null)
  const [deletingId, setDeletingId] = useState(null)

  function reload() {
    listEvents().then(setEvents).catch((err) => setError(err.message))
  }

  useEffect(reload, [])

  useEffect(() => {
    setHeader({
      title: 'Events',
      subtitle: events ? `${events.length} event terdaftar` : 'Kelola event Cikicow',
      action: (
        <Link
          to="/backstage/events/new"
          className="bg-ember text-chalk font-bold text-sm px-4 py-2.5 rounded-sm hover:bg-obsidian transition-colors shadow-[0_10px_30px_-10px_rgba(162,25,23,0.5)]"
        >
          + Tambah Event
        </Link>
      ),
    })
  }, [events, setHeader])

  async function handleDelete(id) {
    if (!confirm(`Hapus event "${id}"? Aksi ini tidak bisa dibatalkan.`)) return

    setDeletingId(id)
    try {
      await deleteEvent(id)
      setEvents((prev) => prev.filter((e) => e.id !== id))
    } catch (err) {
      setError(err.message)
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="space-y-8">
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-sm px-4 py-3">{error}</p>
      )}

      {!events && !error && <p className="text-obsidian/50">Memuat...</p>}

      {events && events.length === 0 && (
        <div className="bg-limestone rounded-sm border border-obsidian/8 py-16 text-center">
          <p className="text-obsidian/50">Belum ada event.</p>
        </div>
      )}

      {events && events.length > 0 && (
        <div className="bg-white rounded-sm border border-obsidian/8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-obsidian/8 text-left">
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide">Gambar</th>
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide">Nama</th>
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide">Tanggal</th>
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide">Status</th>
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b border-obsidian/8 last:border-b-0 hover:bg-obsidian/[0.02] transition-colors">
                  <td className="px-4 py-3">
                    <img src={event.image} alt={event.name} className="w-12 h-12 object-cover object-top rounded-sm" />
                  </td>
                  <td className="px-4 py-3 font-bold text-obsidian">{event.name}</td>
                  <td className="px-4 py-3 text-obsidian/50">
                    {formatDate(event.startDate)} - {formatDate(event.endDate)}
                  </td>
                  <td className="px-4 py-3">
                    {isEventActive(event.endDate) ? (
                      <span className="inline-flex items-center text-xs font-bold text-green-700 bg-green-50 border border-green-200 rounded-xs px-2 py-1">
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-xs font-bold text-obsidian/50 bg-obsidian/5 border border-obsidian/10 rounded-xs px-2 py-1">
                        Selesai
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/backstage/events/${event.id}/edit`}
                        className="text-xs font-bold text-obsidian border border-obsidian/15 rounded-sm px-3 py-2 hover:bg-obsidian hover:text-chalk hover:border-obsidian transition-colors"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(event.id)}
                        disabled={deletingId === event.id}
                        className="text-xs font-bold text-red-600 border border-red-200 rounded-sm px-3 py-2 hover:bg-red-600 hover:text-chalk hover:border-red-600 transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                      >
                        {deletingId === event.id ? 'Menghapus...' : 'Hapus'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
