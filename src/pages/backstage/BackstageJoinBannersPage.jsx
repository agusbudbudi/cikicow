import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { listJoinBanners, deleteJoinBanner } from '../../lib/joinBannersApi.js'

export default function BackstageJoinBannersPage() {
  const { setHeader } = useOutletContext()
  const [banners, setBanners] = useState(null)
  const [error, setError] = useState(null)
  const [deletingId, setDeletingId] = useState(null)

  function reload() {
    listJoinBanners().then(setBanners).catch((err) => setError(err.message))
  }

  useEffect(reload, [])

  useEffect(() => {
    setHeader({
      title: 'Join Banners',
      subtitle: banners ? `${banners.length} banner terdaftar` : 'Kelola banner popup gabung',
      action: (
        <Link
          to="/backstage/join-banners/new"
          className="bg-ember text-chalk font-bold text-sm px-4 py-2.5 rounded-sm hover:bg-obsidian transition-colors shadow-[0_10px_30px_-10px_rgba(162,25,23,0.5)]"
        >
          + Tambah Banner
        </Link>
      ),
    })
  }, [banners, setHeader])

  async function handleDelete(id) {
    if (!confirm('Hapus banner ini? Aksi ini tidak bisa dibatalkan.')) return

    setDeletingId(id)
    try {
      await deleteJoinBanner(id)
      setBanners((prev) => prev.filter((b) => b.id !== id))
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

      {!banners && !error && <p className="text-obsidian/50">Memuat...</p>}

      {banners && banners.length === 0 && (
        <div className="bg-limestone rounded-sm border border-obsidian/8 py-16 text-center">
          <p className="text-obsidian/50">Belum ada banner.</p>
        </div>
      )}

      {banners && banners.length > 0 && (
        <div className="bg-white rounded-sm border border-obsidian/8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-obsidian/8 text-left">
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide">Gambar</th>
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide">Alt Text</th>
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide">Status</th>
                <th className="px-4 py-3 font-bold text-obsidian/50 text-xs uppercase tracking-wide text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => (
                <tr key={banner.id} className="border-b border-obsidian/8 last:border-b-0 hover:bg-obsidian/[0.02] transition-colors">
                  <td className="px-4 py-3">
                    <img src={banner.image} alt={banner.alt} className="w-20 h-12 object-cover rounded-sm" />
                  </td>
                  <td className="px-4 py-3 font-bold text-obsidian">{banner.alt}</td>
                  <td className="px-4 py-3">
                    {banner.isActive ? (
                      <span className="inline-flex items-center text-xs font-bold text-green-700 bg-green-50 border border-green-200 rounded-xs px-2 py-1">
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-xs font-bold text-obsidian/50 bg-obsidian/5 border border-obsidian/10 rounded-xs px-2 py-1">
                        Nonaktif
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/backstage/join-banners/${banner.id}/edit`}
                        className="text-xs font-bold text-obsidian border border-obsidian/15 rounded-sm px-3 py-2 hover:bg-obsidian hover:text-chalk hover:border-obsidian transition-colors"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(banner.id)}
                        disabled={deletingId === banner.id}
                        className="text-xs font-bold text-red-600 border border-red-200 rounded-sm px-3 py-2 hover:bg-red-600 hover:text-chalk hover:border-red-600 transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                      >
                        {deletingId === banner.id ? 'Menghapus...' : 'Hapus'}
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
