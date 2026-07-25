import SEO from '../components/SEO.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/ui/Button.jsx'

function NotFoundIllustration() {
  return (
    <div className="relative w-64 h-30 sm:w-72 sm:h-36 mx-auto flex items-center justify-center">
      <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-ember/10 to-cyan/10 blur-2xl" />

      <div className="relative flex items-center gap-1">
        <span className="font-display font-black text-7xl sm:text-8xl text-obsidian">4</span>
        <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-ember to-[#FE2C55] flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(162,25,23,0.5)]">
          <svg className="w-10 h-10 sm:w-11 sm:h-11 text-chalk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9.5" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </span>
        <span className="font-display font-black text-7xl sm:text-8xl text-obsidian">4</span>
      </div>
    </div>
  )
}

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Halaman Tidak Ditemukan — Republik Cikicow Agency"
        description="Halaman yang kamu cari tidak ditemukan di situs Republik Cikicow Agency."
        path="/404"
        noindex
      />
      <Header />
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="flex justify-center text-obsidian">
            <NotFoundIllustration />
          </div>

          <div className="space-y-3">
            <h1 className="font-display font-extrabold text-xl sm:text-2xl text-obsidian">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-obsidian/70 text-sm leading-relaxed">
              Halaman yang kamu cari tidak ditemukan. Yuk balik ke beranda.
            </p>
          </div>

          <Button href="/" variant="outline" className="justify-center">
            Kembali ke Beranda
          </Button>
        </div>
      </section>
      <Footer />
    </>
  )
}
