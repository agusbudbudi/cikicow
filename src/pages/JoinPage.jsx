import SEO from '../components/SEO.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/ui/Button.jsx'

export default function JoinPage() {
  return (
    <>
      <SEO
        title="Gabung Agensi TikTok Republik Cikicow — Daftar Sekarang"
        description="Ajukan diri bergabung dengan Republik Cikicow, agensi resmi TikTok. Rasakan kelebihan join agency TikTok: pendampingan admin, komisi bulanan, dan event eksklusif."
        path="/join"
      />
      <Header />
      <div className="bg-obsidian text-chalk">
        <div className="max-w-md md:max-w-4xl mx-auto w-full px-6 py-8 md:py-16">
          <div className="md:grid md:grid-cols-2 md:gap-14 md:items-center">
            <div className="md:order-2">
              <h1 className="font-display font-black text-3xl sm:text-4xl leading-tight">
                Ajukan untuk bergabung dengan Republik Cikicow
              </h1>

              <div className="mt-6">
                <p className="text-sm text-chalk/50">Manajer</p>
                <p className="text-sm text-chalk/90 font-medium">Republik Cikicow Agency</p>
              </div>

              <Button href="https://vm.tiktok.com/ZSYG6Y2xw/" target="_blank" rel="noopener" variant="gradient" size="lg" className="mt-8 w-full md:w-auto text-center justify-center">
                🔥 Ajukan Sekarang
              </Button>

              <div className="flex items-center gap-3 mt-6 md:hidden">
                <div className="flex-1 h-px bg-chalk/10" />
                <span className="text-xs font-bold text-chalk/40 uppercase tracking-widest">atau scan</span>
                <div className="flex-1 h-px bg-chalk/10" />
              </div>
            </div>

            <div className="md:order-1 mt-6 md:mt-0 md:max-w-xs bg-chalk rounded-2xl p-6 flex flex-col items-center">
              <img src="/assets/brand/qr-join.png" alt="QR Code Republik Cikicow" width="600" height="600" className="w-full max-w-[220px] aspect-square rounded-xl object-contain" />

              <p className="text-obsidian/70 text-sm leading-relaxed mt-4 self-start">
                Pindai kode QR untuk mempelajari tentang Agensi dan mengajukan diri untuk bergabung.
              </p>

              <a
                href="/assets/brand/qr-join-download.png"
                download
                className="mt-4 w-full inline-flex items-center justify-center gap-2 font-bold text-sm text-obsidian border border-obsidian/15 rounded-sm px-5 py-3 hover:bg-obsidian hover:text-chalk transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
                Download QR Code
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-12 space-y-4 md:max-w-sm">
            <div className="flex items-center gap-3 text-sm text-chalk/70">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5-9 9" /></svg>
              Unduh dan simpan gambar secara lokal
            </div>
            <div className="flex items-center gap-3 text-sm text-chalk/70">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3" /></svg>
              Buka TikTok &gt; Profil &gt; Tambahkan teman &gt; Pindai
            </div>

            <div className="border-t border-chalk/10 pt-4">
              <p className="text-xs text-chalk/40 leading-relaxed">
                Pemindaian kode QR hanya untuk melihat informasi tentang Agensi
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
