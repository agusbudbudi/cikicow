const VARIANTS = {
  primary: 'bg-ember text-chalk hover:bg-obsidian shadow-[0_10px_30px_-10px_rgba(7,6,7,0.08)]',
  outline: 'bg-transparent text-obsidian border border-obsidian/15 hover:border-obsidian hover:bg-obsidian hover:text-chalk',
  dark: 'bg-obsidian text-chalk hover:bg-ember',
}

const SIZES = {
  sm: 'text-sm px-5 py-3',
  md: 'text-base px-5 py-3',
}

export default function Button({ href, variant = 'primary', size = 'md', children, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 font-extrabold rounded-md text-center transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
