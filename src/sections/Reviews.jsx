import SectionHeader from '../components/ui/SectionHeader.jsx'

const REVIEWS = [
  {
    quote: 'Republik Cikicow luar biasa, agency yg merangkul para talent dan member nya dgn sangat baik, sukses terus Cikicow ku!',
    handle: '@zihandhini',
    img: '/assets/creators/zihandhini.jpeg',
  },
  {
    quote: 'Banyak event yang dapat diikuti baik event Official TikTok maupun event internal, sehingga berkesempatan untuk mendapatkan hadiah.',
    handle: '@ajus.shi',
    img: '/assets/creators/ajus.shi.png',
  },
  {
    quote: 'Saya sangat senang bisa bergabung di agency yang menurutku terbaik dari segi semuanya. Kualitas & responsif semua admin bagus sekali!',
    handle: '@disradicha_',
    img: '/assets/creators/disradicha.png',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14">
      <div className="space-y-12">
        <SectionHeader align="center" eyebrow="Creator Testimonials" title="Some Love From Our Creators" />

        <div className="grid md:grid-cols-3 gap-4">
          {REVIEWS.map((review) => (
            <div
              key={review.handle}
              className="flex flex-col rounded-3xl overflow-hidden border-1 border-[#FE2C55] bg-gradient-to-br from-obsidian via-obsidian/96 to-[#FE2C55] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_25px_45px_-16px_rgba(162,25,23,0.35)]"
            >
              <div className="flex items-center gap-6 text-chalk shrink-0">
                <div className="relative w-36 h-36 shrink-0">
                  <img src={review.img} alt={review.handle} className="w-full h-full object-cover rounded-br-lg" />
                  <div className="absolute inset-0 rounded-br-lg bg-gradient-to-r from-transparent via-transparent to-obsidian" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg">{review.handle}</p>
                  <p className="text-sm opacity-70">Live Creator</p>
                </div>
              </div>

              <div className="flex-1 bg-chalk text-obsidian p-6 rounded-tr-3xl">
                <p className="text-base leading-relaxed">
                  {review.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
