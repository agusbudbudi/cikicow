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
          {REVIEWS.map((review, index) => (
            <div
              key={review.handle}
              className={`relative overflow-hidden rounded-md border border-obsidian/8 p-6 flex flex-col justify-between space-y-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(7,6,7,0.15)] bg-gradient-to-br ${index === 1 ? 'from-[#FE2C55]/15 hover:from-[#FE2C55]/25' : 'from-cyan/15 hover:from-cyan/25'
                } via-limestone to-limestone`}
            >
              <p className="relative text-body text-obsidian/70 text-base leading-relaxed italic">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="relative flex items-center gap-4 border-t border-obsidian/10 pt-5">
                <img src={review.img} alt={review.handle} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-display font-extrabold text-lg text-obsidian">{review.handle}</h4>
                  <p className="text-xs text-obsidian/60">Live Creator</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
