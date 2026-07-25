import { useRef, useState } from 'react'
import FormattedText from '../ui/FormattedText.jsx'

const MARKS = [
  { label: 'B', wrapper: '**', title: 'Bold' },
  { label: 'I', wrapper: '_', title: 'Italic' },
  { label: 'S', wrapper: '~', title: 'Strikethrough' },
]

export default function RichTextEditor({ value, onChange, rows = 6 }) {
  const textareaRef = useRef(null)
  const [showPreview, setShowPreview] = useState(false)

  function applyMark(wrapper) {
    const textarea = textareaRef.current
    if (!textarea) return

    const { selectionStart, selectionEnd } = textarea
    const selected = value.slice(selectionStart, selectionEnd) || 'teks'
    const next = value.slice(0, selectionStart) + wrapper + selected + wrapper + value.slice(selectionEnd)

    onChange(next)

    requestAnimationFrame(() => {
      textarea.focus()
      const cursor = selectionStart + wrapper.length + selected.length + wrapper.length
      textarea.setSelectionRange(cursor, cursor)
    })
  }

  return (
    <div className="border border-obsidian/15 rounded-sm overflow-hidden">
      <div className="flex items-center gap-1 border-b border-obsidian/15 bg-pumice px-2 py-1.5">
        {MARKS.map((mark) => (
          <button
            key={mark.label}
            type="button"
            title={mark.title}
            onClick={() => applyMark(mark.wrapper)}
            className="w-7 h-7 flex items-center justify-center rounded-sm text-xs font-bold text-obsidian hover:bg-obsidian/10 transition-colors cursor-pointer"
          >
            {mark.label}
          </button>
        ))}
        <div className="flex-1" />
        <button
          type="button"
          onClick={() => setShowPreview((v) => !v)}
          className="text-xs font-bold px-2.5 py-1 rounded-sm text-obsidian/70 hover:bg-obsidian/10 transition-colors cursor-pointer"
        >
          {showPreview ? 'Edit' : 'Preview'}
        </button>
      </div>

      {showPreview ? (
        <div className="p-3 min-h-32 bg-limestone">
          <FormattedText text={value} className="text-sm text-obsidian/80" />
        </div>
      ) : (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="w-full p-3 text-sm text-obsidian outline-none resize-y"
          placeholder="Tulis detail event... gunakan **bold**, _italic_, ~coret~"
        />
      )}
    </div>
  )
}
