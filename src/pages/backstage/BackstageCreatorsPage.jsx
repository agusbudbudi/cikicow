import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { listCreators, deleteCreator } from '../../lib/creatorsApi.js'

export default function BackstageCreatorsPage() {
  const { setHeader } = useOutletContext()
  const [creators, setCreators] = useState(null)
  const [error, setError] = useState(null)
  const [deletingId, setDeletingId] = useState(null)

  function reload() {
    listCreators().then(setCreators).catch((err) => setError(err.message))
  }

  useEffect(reload, [])

  useEffect(() => {
    setHeader({
      title: 'Creators',
      subtitle: creators ? `${creators.length} creator terdaftar` : 'Kelola creator Cikicow',
      action: (
        <Link
          to="/backstage/creators/new"
          className="bg-ember text-chalk font-bold text-sm px-4 py-2.5 rounded-sm hover:bg-obsidian transition-colors shadow-[0_10px_30px_-10px_rgba(162,25,23,0.5)]"
        >
          + Tambah Creator
        </Link>
      ),
    })
  }, [creators, setHeader])

  async function handleDelete(id) {
    if (!confirm(`Hapus creator "@${id}"? Aksi ini tidak bisa dibatalkan.`)) return

    setDeletingId(id)
    try {
      await deleteCreator(id)
      setCreators((prev) => prev.filter((c) => c.id !== id))
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

      {!creators && !error && <p className="text-obsidian/50">Memuat...</p>}

      {creators && creators.length === 0 && (
        <div className="bg-limestone rounded-sm border border-obsidian/8 py-16 text-center">
          <p className="text-obsidian/50">Belum ada creator.</p>
        </div>
      )}

      {creators && creators.length > 0 && (
        <div className="bg-white rounded-sm border border-obsidian/8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-obsidian/8 text-left">
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide">Foto</th>
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide">Username</th>
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide">Kategori</th>
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {creators.map((creator) => (
                <tr key={creator.id} className="border-b border-obsidian/8 last:border-b-0 hover:bg-obsidian/[0.02] transition-colors">
                  <td className="px-4 py-3">
                    {creator.image ? (
                      <img src={creator.image} alt={creator.tiktokUsername} className="w-10 h-10 object-cover rounded-full" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-obsidian/5" />
                    )}
                  </td>
                  <td className="px-4 py-3 font-bold text-obsidian">@{creator.tiktokUsername}</td>
                  <td className="px-4 py-3 text-obsidian/50">{creator.tag || '—'}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/backstage/creators/${creator.id}/edit`}
                        className="text-xs font-bold text-obsidian border border-obsidian/15 rounded-sm px-3 py-2 hover:bg-obsidian hover:text-chalk hover:border-obsidian transition-colors"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(creator.id)}
                        disabled={deletingId === creator.id}
                        className="text-xs font-bold text-red-600 border border-red-200 rounded-sm px-3 py-2 hover:bg-red-600 hover:text-chalk hover:border-red-600 transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                      >
                        {deletingId === creator.id ? 'Menghapus...' : 'Hapus'}
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
