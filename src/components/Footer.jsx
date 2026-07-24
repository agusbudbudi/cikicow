export default function Footer() {
  return (
    <footer className="bg-obsidian text-chalk border-t border-chalk/10 pt-14 pb-7">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 lg:gap-16">

        {/* Col 1: Brand Info & Social Pills */}
        <div className="lg:col-span-5 space-y-6">
          <img src="/assets/brand/logo-white.png" alt="Republik Cikicow Agency" className="h-16 w-auto object-contain" />

          <p className="text-sm md:text-base text-chalk/70 leading-relaxed max-w-sm">
            Talent &amp; Live Creator Agency resmi TikTok. Tempat terbaik untuk membangun karir, memperluas jangkauan, dan mendapatkan komisi bulanan.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="https://tiktok.com/@republik.cikicow.agency" target="_blank" rel="noopener" className="bg-chalk/5 hover:bg-cyan/15 text-chalk/80 hover:text-cyan font-semibold text-xs rounded-xs px-4 py-2.5 transition-colors inline-flex items-center gap-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.87V7.5a6.34 6.34 0 0 0-5.71 6.3 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.28 8.28 0 0 0 4.76 1.47V7.07a4.84 4.84 0 0 1-1.62-.38z" /></svg>
              TikTok Agency
            </a>
            <a href="https://instagram.com/republik.cikicow" target="_blank" rel="noopener" className="bg-chalk/5 hover:bg-chalk/10 text-chalk/80 hover:text-chalk font-semibold text-xs rounded-xs px-4 py-2.5 transition-colors inline-flex items-center gap-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Col 2: Address */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-display font-extrabold text-lg text-chalk tracking-wide">Alamat Kantor</h4>
          <div className="flex items-start gap-3 text-sm text-chalk/70 leading-relaxed">
            <svg className="w-5 h-5 fill-cyan shrink-0 mt-0.5" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            <p>
              Jl. Metland Cibitung, Cluster Iris Blok EA6 No. 6,<br />
              Desa Wanajaya, Kec. Cibitung,<br />
              Kab. Bekasi, Jawa Barat
            </p>
          </div>
        </div>

        {/* Col 3: Contact & Hours */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-lg text-chalk tracking-wide">Kontak</h4>
            <a href="mailto:republikcikicow@gmail.com" className="flex items-center gap-3 text-sm text-chalk/80 hover:text-cyan transition-colors font-medium">
              <svg className="w-5 h-5 fill-cyan shrink-0" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              republikcikicow@gmail.com
            </a>
          </div>

          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-lg text-chalk tracking-wide">Jam Operasional</h4>
            <div className="flex items-center gap-3 text-sm text-chalk/70 font-medium">
              <svg className="w-5 h-5 fill-cyan shrink-0" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
              <p>Senin – Minggu: 09.00 – 17.00 WIB</p>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 mt-10 pt-10 border-t border-chalk/10 flex flex-col sm:flex-row justify-between items-center text-sm text-chalk/60 gap-4">
        <p>© <span>{new Date().getFullYear()}</span> Republik Cikicow Agency. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span className="text-cyan font-bold text-xs">#RepublikCikicow</span>
        </div>
      </div>
    </footer>
  )
}
