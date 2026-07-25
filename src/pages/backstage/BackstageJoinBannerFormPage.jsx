import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { getJoinBanner, createJoinBanner, updateJoinBanner, uploadJoinBannerImage } from '../../lib/joinBannersApi.js'
import ImageUploader from '../../components/backstage/ImageUploader.jsx'

const EMPTY_FORM = { image: '', alt: '', isActive: true }

export default function BackstageJoinBannerFormPage() {
  const { setHeader } = useOutletContext()
  const { id } = useParams()
  const isEditing = Boolean(id)
  const navigate = useNavigate()

  const [form, setForm] = useState(EMPTY_FORM)
  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isEditing) return
    getJoinBanner(id)
      .then(setForm)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id, isEditing])

  useEffect(() => {
    setHeader({
      title: isEditing ? 'Edit Banner' : 'Tambah Banner',
      subtitle: isEditing ? 'Perbarui detail banner yang sudah ada' : 'Lengkapi detail banner baru',
      action: null,
    })
  }, [isEditing, setHeader])

  function setField(field, val) {
    setForm((prev) => ({ ...prev, [field]: val }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setSaving(true)

    try {
      if (isEditing) {
        await updateJoinBanner(id, form)
      } else {
        await createJoinBanner(form)
      }
      navigate('/backstage/join-banners')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <p className="text-obsidian/50">Memuat...</p>

  const inputClass =
    'w-full border border-obsidian/15 rounded-sm px-3 py-2.5 text-sm text-obsidian outline-none focus:border-ember focus:ring-2 focus:ring-ember/10 transition-colors'

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white rounded-sm border border-obsidian/8 p-6 shadow-[0_15px_35px_-25px_rgba(7,6,7,0.2)] max-w-2xl"
      >
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-obsidian">Gambar</label>
          <ImageUploader value={form.image} onChange={(url) => setField('image', url)} uploadFn={uploadJoinBannerImage} />
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-obsidian">Alt Text</label>
          <input
            type="text"
            required
            value={form.alt}
            onChange={(e) => setField('alt', e.target.value)}
            placeholder="Republik Cikicow Banner"
            className={inputClass}
          />
        </div>

        <label className="flex items-center gap-2.5 cursor-pointer w-fit">
          <input
            type="checkbox"
            checked={form.isActive}
            onChange={(e) => setField('isActive', e.target.checked)}
            className="w-4 h-4 accent-ember cursor-pointer"
          />
          <span className="text-sm font-bold text-obsidian">Tampilkan di landing page</span>
        </label>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-sm px-4 py-3">{error}</p>
        )}

        <div className="flex gap-3 pt-1">
          <button
            type="submit"
            disabled={saving}
            className="bg-ember text-chalk font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-obsidian transition-colors disabled:opacity-50 shadow-[0_10px_30px_-10px_rgba(162,25,23,0.5)] cursor-pointer disabled:cursor-not-allowed"
          >
            {saving ? 'Menyimpan...' : 'Simpan'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/backstage/join-banners')}
            className="text-sm font-bold text-obsidian border border-obsidian/15 rounded-sm px-5 py-2.5 hover:bg-obsidian/5 transition-colors cursor-pointer"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  )
}
