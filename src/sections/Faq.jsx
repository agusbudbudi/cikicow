import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const FAQS = [
  {
    q: 'Apakah bergabung dengan Agency gratis?',
    a: 'Tentu saja, kamu sebagai kreator bisa bergabung dengan agency secara gratis tanpa biaya sepeserpun. Justru dengan bergabung kamu bisa mendapatkan keuntungan dan bonus bulanan yang lebih tinggi!',
  },
  {
    q: 'Bagaimana cara bergabung dengan Republik Cikicow Agency?',
    a: 'Jika kamu tertarik untuk bergabung bersama kami, kamu tinggal menghubungi admin Republik Cikicow Agency melalui DM di TikTok @republik.cikicow.agency atau klik tombol Gabung di website ini.',
  },
  {
    q: 'Apakah ada kriteria kreator yang bisa bergabung?',
    a: 'Siapapun bisa bergabung dengan agency kami, namun hanya creator dan host yang berdedikasi dan penuh semangat yang akan terus diprioritaskan. Jadi persiapkan dirimu sebaik mungkin ya!',
  },
  {
    q: 'Apa saja benefit yang akan didapatkan setelah bergabung?',
    a: 'Kamu bisa mendapatkan benefit berupa bonus uang tunai setiap bulan jika kamu mencapai target durasi live dan koleksi diamond yang ditentukan, serta akses event eksklusif TikTok.',
  },
  {
    q: 'Kapan komisi atau bonus bulanan dicairkan?',
    a: 'Komisi dan bonus dicairkan setiap bulan setelah periode perhitungan selesai, langsung ke rekening yang kamu daftarkan. Admin akan selalu update jadwal pencairan lewat grup komunikasi resmi.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-bold text-ember uppercase tracking-widest">Questions</span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-obsidian">FAQ</h2>
          <p className="text-body text-obsidian/70 text-base md:text-lg leading-relaxed">
            Pertanyaan yang paling sering diajukan seputar pendaftaran dan benefit bergabung dengan Republik Cikicow Agency.
          </p>
        </div>

        <div className="lg:col-span-7 divide-y divide-obsidian/10">
          {FAQS.map((faq, index) => {
            const isActive = index === openIndex
            return (
              <div key={faq.q} className="py-7">
                <button
                  onClick={() => setOpenIndex(isActive ? -1 : index)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <h3 className="font-display font-bold text-xl md:text-2xl text-obsidian">{faq.q}</h3>
                  <span className={`w-9 h-9 rounded-full bg-ember text-chalk flex items-center justify-center shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 15.5 5 8.5l1.4-1.4L12 12.7l5.6-5.6L19 8.5z" /></svg>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 -translate-y-1'}`}>
                    <p className="text-body text-obsidian/70 text-base pt-5 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
