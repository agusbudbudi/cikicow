import { useState } from 'react'
import { uploadImage } from '../../lib/eventsApi.js'
import { compressImage } from '../../lib/imageCompress.js'

export default function ImageUploader({ value, onChange, uploadFn = uploadImage }) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)

  async function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return

    setError(null)
    setUploading(true)
    try {
      const compressed = await compressImage(file)
      const url = await uploadFn(compressed)
      onChange(url)
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  return (
    <div className="space-y-2">
      {value && (
        <img src={value} alt="Preview" className="w-32 aspect-square object-cover object-top rounded-sm border border-obsidian/15" />
      )}

      <label className="inline-flex items-center gap-2 text-xs font-bold text-obsidian border border-obsidian/15 rounded-sm px-3 py-2 cursor-pointer hover:bg-obsidian hover:text-chalk hover:border-obsidian transition-colors">
        {uploading ? 'Mengupload...' : value ? 'Ganti gambar' : 'Upload gambar'}
        <input type="file" accept="image/png,image/jpeg,image/webp,image/gif" className="hidden" onChange={handleFile} disabled={uploading} />
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}
