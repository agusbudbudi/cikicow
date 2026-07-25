import Card from '../components/ui/Card.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'

const SERVICES = [
  {
    title: 'Dukungan Personal',
    desc: 'Admin & account manager siap bantu kendala teknis dan strategi kontenmu.',
    icon: '/assets/icons/customer-service.webp',
  },
  {
    title: 'Akses Eksklusif',
    desc: 'Ikut event official TikTok dan campaign brand berhadiah jutaan rupiah.',
    icon: '/assets/icons/invitation.webp',
  },
  {
    title: 'Mendapat Penghasilan',
    desc: 'Bonus bulanan dari live streaming konsisten dan koleksi diamond.',
    icon: '/assets/icons/money-bag.webp',
  },
]

export default function Services() {
  return (
    <section id="services" className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14">
      <div className="space-y-12">
        <SectionHeader
          eyebrow="What We Do"
          title="We Help Our Creators to Grow Their Career"
          description="Tiga pilar utama supaya creator berkembang dan cuan konsisten bareng Republik Cikicow."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((service) => (
            <Card
              key={service.title}
              padding="p-5"
              className="!rounded-lg flex items-start gap-4 md:block md:space-y-4 shadow-[0_10px_30px_-12px_rgba(7,6,7,0.1)] hover:shadow-[0_20px_45px_-12px_rgba(7,6,7,0.18)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-ember/15 via-[#FE2C55]/10 to-cyan/15 flex items-center justify-center shrink-0">
                <img src={service.icon} alt={service.title} width="128" height="128" loading="lazy" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-obsidian">{service.title}</h3>
                <p className="text-body text-obsidian/70 mt-2 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
