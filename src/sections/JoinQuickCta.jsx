export default function JoinQuickCta({ flushBottom = false }) {
  return (
    <section className={`max-w-[1280px] mx-auto px-0 md:px-12 pt-0 md:py-14 ${flushBottom ? 'pb-0' : 'pb-7'}`}>
      <div className="relative rounded-none md:rounded-lg bg-gradient-to-r from-[#FE2C55] via-obsidian to-obsidian text-chalk">
        <div className="absolute inset-0 rounded-none md:rounded-lg overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-chalk/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-cyan/10 blur-3xl" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center gap-5 md:gap-10 px-5 py-8 md:p-6">
          <div className="shrink-0 bg-chalk rounded-sm p-1 md:p-3">
            <img src="/assets/brand/qr-join.png" alt="QR Code Republik Cikicow" width="600" height="600" loading="lazy" className="w-36 h-36 md:w-40 md:h-40 object-contain" />
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-display font-extrabold text-2xl md:text-4xl leading-snug">Cuma 5 Detik, Langsung Gas! ⚡</h3>
            <p className="text-chalk/80 text-sm md:text-lg mt-2 max-w-md">
              Tinggal scan, karier live streaming-mu di Republik Cikicow langsung dimulai.
            </p>
          </div>

          <img
            src="/assets/banners/hero-join.webp"
            alt=""
            width="1600"
            height="1600"
            loading="lazy"
            className="hidden md:block ml-auto mr-12 self-end -mt-16 lg:-mt-24 -mb-6 w-64 lg:w-70 h-auto object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  )
}
