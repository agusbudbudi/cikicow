import { useState } from 'react'
import SEO from '../components/SEO.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/ui/Button.jsx'
import ImageUploader from '../components/backstage/ImageUploader.jsx'
import { createCreator, uploadCreatorImage } from '../lib/creatorsApi.js'
import { CREATOR_TAG_OPTIONS } from '../data/creatorTags.js'

const EMPTY_FORM = { tiktokUsername: '', tag: '', image: '' }

export default function CreatorAddPage() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [createdCreator, setCreatedCreator] = useState(null)

  function setField(field, val) {
    setForm((prev) => ({ ...prev, [field]: val }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setSaving(true)

    try {
      const result = await createCreator(form)
      setCreatedCreator(result)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const inputClass =
    'w-full border border-obsidian/15 rounded-sm px-3 py-2.5 text-sm text-obsidian outline-none focus:border-ember focus:ring-2 focus:ring-ember/10 transition-colors'

  return (
    <>
      <SEO
        title="Daftar Jadi Talent & Live Creator — Republik Cikicow Agency"
        description="Isi profil kamu untuk bergabung sebagai talent atau live creator Republik Cikicow Agency dan tampil di halaman Talent Gallery."
        path="/creator/add"
      />
      <Header />
      <main className="bg-pumice">
        <img
          src="/assets/banners/banner-cikicow-talent.webp"
          alt="Daftar Talent Republik Cikicow"
          className="w-full object-cover md:max-w-2xl md:mx-auto md:mt-12 mb-6 md:rounded-md"
        />

        <div className="max-w-2xl mx-auto px-4 md:px-0 pb-8 md:pb-12">
          {createdCreator ? (
            <div className="bg-white rounded-sm border border-obsidian/8 p-8 text-center shadow-[0_15px_35px_-25px_rgba(7,6,7,0.2)] space-y-4">
              <h1 className="font-display font-extrabold text-2xl md:text-3xl text-obsidian">Profil kamu berhasil dikirim!</h1>
              <p className="text-obsidian/70 text-sm max-w-md mx-auto">
                Terima kasih sudah mendaftar. Profil kamu sudah tersimpan dan akan tampil di halaman Talent Gallery Republik Cikicow.
              </p>
              <Button href={`/creator/${createdCreator.id}`} className="mt-2">Lihat Profil Kamu</Button>
            </div>
          ) : (
            <>
              <div className="text-center space-y-3 mb-8">
                <span className="block text-xs font-bold text-obsidian/60 uppercase tracking-widest">Talent Gallery</span>
                <h1 className="font-display font-extrabold text-3xl md:text-4xl text-obsidian tracking-tight">Daftarkan Profil Kamu</h1>
                <p className="text-obsidian/70 text-sm max-w-lg mx-auto">
                  Lengkapi data di bawah ini. Setelah dikirim, profil kamu akan tampil publik di halaman{' '}
                  <a href="/creator" className="font-bold text-ember hover:underline">Talent & Live Creator</a> Republik Cikicow.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-white rounded-sm border border-obsidian/8 p-6 shadow-[0_15px_35px_-25px_rgba(7,6,7,0.2)]"
              >
                <div className="space-y-1.5">
                  <label className="block text-sm font-bold text-obsidian">Username TikTok</label>
                  <div className="flex items-center gap-2">
                    <span className="text-obsidian/40 font-bold">@</span>
                    <input
                      type="text"
                      required
                      value={form.tiktokUsername}
                      onChange={(e) => setField('tiktokUsername', e.target.value)}
                      placeholder="ajus.shi"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-bold text-obsidian">Foto Profil</label>
                  <ImageUploader value={form.image} onChange={(url) => setField('image', url)} uploadFn={uploadCreatorImage} />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-bold text-obsidian">Kategori Live</label>
                  <select
                    value={form.tag}
                    onChange={(e) => setField('tag', e.target.value)}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="">Pilih kategori</option>
                    {CREATOR_TAG_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-sm px-4 py-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={saving}
                  className="w-full bg-ember text-chalk font-bold text-sm px-5 py-3 rounded-sm hover:bg-obsidian transition-colors disabled:opacity-50 shadow-[0_10px_30px_-10px_rgba(162,25,23,0.5)] cursor-pointer disabled:cursor-not-allowed"
                >
                  {saving ? 'Mengirim...' : 'Kirim Profil'}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
