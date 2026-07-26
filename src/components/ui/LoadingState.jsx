export function Spinner({ className = 'w-6 h-6' }) {
  return (
    <svg className={`animate-spin text-ember ${className}`} viewBox="0 0 24 24" fill="none">
      <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function LoadingState({ label = 'Memuat...', className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 py-16 text-obsidian/50 ${className}`}>
      <Spinner />
      <p className="text-sm font-medium">{label}</p>
    </div>
  )
}

export function SkeletonBlock({ className = '' }) {
  return <div className={`animate-pulse bg-obsidian/8 ${className}`} />
}

export function CreatorCardSkeleton() {
  return <SkeletonBlock className="aspect-[3/4] rounded-md" />
}

export function EventCardSkeleton() {
  return (
    <div className="rounded-md overflow-hidden bg-limestone border border-obsidian/8">
      <SkeletonBlock className="aspect-square" />
      <div className="p-4 space-y-3">
        <SkeletonBlock className="h-5 w-24 rounded-xs" />
        <SkeletonBlock className="h-5 w-3/4 rounded-xs" />
        <div className="space-y-2">
          <SkeletonBlock className="h-3.5 w-full rounded-xs" />
          <SkeletonBlock className="h-3.5 w-2/3 rounded-xs" />
        </div>
      </div>
    </div>
  )
}

export function EventTeaserSkeleton() {
  return (
    <div className="space-y-4">
      <SkeletonBlock className="aspect-square rounded-md" />
      <div className="space-y-2">
        <SkeletonBlock className="h-5 w-28 rounded-xs" />
        <SkeletonBlock className="h-6 w-3/4 rounded-xs" />
        <SkeletonBlock className="h-4 w-full rounded-xs" />
        <SkeletonBlock className="h-4 w-1/2 rounded-xs" />
      </div>
    </div>
  )
}

export function EventDetailSkeleton() {
  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <SkeletonBlock className="w-full md:w-2/5 aspect-square rounded-none md:rounded-md shrink-0" />
        <div className="flex-1 space-y-3">
          <div className="flex gap-2">
            <SkeletonBlock className="h-6 w-32 rounded-xs" />
            <SkeletonBlock className="h-6 w-20 rounded-xs" />
          </div>
          <SkeletonBlock className="h-8 w-3/4 rounded-xs" />
          <div className="space-y-2 pt-2">
            <SkeletonBlock className="h-4 w-full rounded-xs" />
            <SkeletonBlock className="h-4 w-full rounded-xs" />
            <SkeletonBlock className="h-4 w-2/3 rounded-xs" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <SkeletonBlock className="h-5 w-28 rounded-xs" />
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex gap-3">
            <SkeletonBlock className="w-20 h-20 rounded-md shrink-0" />
            <div className="flex-1 space-y-2">
              <SkeletonBlock className="h-4 w-20 rounded-xs" />
              <SkeletonBlock className="h-4 w-full rounded-xs" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CreatorDetailSkeleton() {
  return (
    <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">
      <div className="space-y-8">
        <div className="bg-chalk rounded-md border border-obsidian/8 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <SkeletonBlock className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shrink-0" />
            <div className="space-y-2 flex-1">
              <SkeletonBlock className="h-5 w-20 rounded-xs" />
              <SkeletonBlock className="h-6 w-32 rounded-xs" />
            </div>
          </div>
          <SkeletonBlock className="h-9 w-full sm:w-40 rounded-md" />
        </div>
        <SkeletonBlock className="aspect-video w-full rounded-md" />
      </div>

      <div className="space-y-4">
        <SkeletonBlock className="h-5 w-24 rounded-xs" />
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-start gap-3">
            <SkeletonBlock className="w-12 h-12 rounded-full shrink-0" />
            <div className="flex-1 space-y-2">
              <SkeletonBlock className="h-4 w-24 rounded-xs" />
              <SkeletonBlock className="h-3.5 w-full rounded-xs" />
            </div>
          </div>
        ))}
        <SkeletonBlock className="h-9 w-full rounded-md" />
      </div>
    </div>
  )
}

export function SkeletonGrid({ count, gridClassName, renderItem }) {
  return (
    <div className={gridClassName}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>{renderItem()}</div>
      ))}
    </div>
  )
}
