export default function Card({ as: Tag = 'div', padding = 'p-10', className = '', children, ...props }) {
  return (
    <Tag className={`bg-limestone rounded-md border border-obsidian/8 ${padding} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
