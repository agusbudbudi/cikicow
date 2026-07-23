const PATTERN = /\*\*(.+?)\*\*|\*(.+?)\*|_(.+?)_|~(.+?)~/g

function parseInline(text, keyPrefix) {
  const nodes = []
  let lastIndex = 0
  let match
  let i = 0

  while ((match = PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const key = `${keyPrefix}-${i++}`
    if (match[1] !== undefined) {
      nodes.push(<strong key={key}>{match[1]}</strong>)
    } else if (match[2] !== undefined) {
      nodes.push(<strong key={key}>{match[2]}</strong>)
    } else if (match[3] !== undefined) {
      nodes.push(<em key={key}>{match[3]}</em>)
    } else if (match[4] !== undefined) {
      nodes.push(<s key={key}>{match[4]}</s>)
    }

    lastIndex = PATTERN.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

export default function FormattedText({ text, className }) {
  if (!text) return null
  const lines = text.split('\n')

  return (
    <p className={className}>
      {lines.map((line, idx) => (
        <span key={idx}>
          {parseInline(line, idx)}
          {idx < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  )
}
