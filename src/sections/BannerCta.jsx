import { useEffect, useState } from 'react'
import Card from '../components/ui/Card.jsx'
import { listJoinBanners } from '../lib/joinBannersApi.js'

function BannerSlider({ banners }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (banners.length <= 1) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % banners.length), 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={banner.image}
            alt={banner.alt}
            loading="lazy"
            className="w-full shrink-0 object-cover aspect-[4/1]"
          />
        ))}
      </div>

      {banners.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous banner"
            onClick={() => setIndex((i) => (i - 1 + banners.length) % banners.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-chalk/80 text-obsidian flex items-center justify-center hover:bg-chalk transition-colors cursor-pointer"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next banner"
            onClick={() => setIndex((i) => (i + 1) % banners.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-chalk/80 text-obsidian flex items-center justify-center hover:bg-chalk transition-colors cursor-pointer"
          >
            ›
          </button>
          <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2">
            {banners.map((banner, i) => (
              <button
                key={banner.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-chalk' : 'w-1.5 bg-chalk/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function BannerCta() {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    listJoinBanners()
      .then((all) => setBanners(all.filter((b) => b.isActive)))
      .catch(() => { })
  }, [])

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14">
      <Card padding="p-0" className="overflow-hidden !rounded-lg">
        {banners.length > 0 && <BannerSlider banners={banners} />}
        <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <div className="order-2 md:order-1 flex -space-x-2 md:-space-x-4 overflow-hidden shrink-0">
              <img src="/assets/creators/coco.hendra.webp" alt="Coco Hendra - Live Creator Republik Cikicow" width="64" height="64" loading="lazy" className="inline-block h-10 w-10 md:h-16 md:w-16 rounded-full ring-4 ring-limestone object-cover" />
              <img src="/assets/creators/ajus.shi.webp" alt="Ajus Shi - Live Creator Republik Cikicow" width="64" height="64" loading="lazy" className="inline-block h-10 w-10 md:h-16 md:w-16 rounded-full ring-4 ring-limestone object-cover" />
              <img src="/assets/creators/jeph.guo.webp" alt="Jeph Guo - Live Creator Republik Cikicow" width="64" height="64" loading="lazy" className="inline-block h-10 w-10 md:h-16 md:w-16 rounded-full ring-4 ring-limestone object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-obsidian">Sudah Siap Bergabung?</h3>
              <p className="text-sm text-obsidian/70 mt-1">Bergabunglah dengan ratusan creator sukses lainnya!</p>
            </div>
          </div>
          <a href="#reviews" className="shrink-0 font-bold text-base text-obsidian underline underline-offset-4 decoration-obsidian/30 hover:text-ember hover:decoration-ember transition-colors">
            Read Creators Reviews
          </a>
        </div>
      </Card>
    </section>
  )
}
