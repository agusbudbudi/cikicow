import SectionHeader from '../components/ui/SectionHeader.jsx'

const SERVICES = [
  {
    title: 'Dukungan Personal',
    desc: 'Admin & account manager siap bantu kendala teknis dan strategi kontenmu.',
    icon: '/assets/icons/customer-service.png',
  },
  {
    title: 'Akses Eksklusif',
    desc: 'Ikut event official TikTok dan campaign brand berhadiah jutaan rupiah.',
    icon: '/assets/icons/invitation.png',
  },
  {
    title: 'Mendapat Penghasilan',
    desc: 'Bonus bulanan dari live streaming konsisten dan koleksi diamond.',
    icon: '/assets/icons/money-bag.png',
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

        <div className="grid md:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <div key={service.title} className="flex items-start gap-4 md:block md:space-y-6 md:border-l md:border-obsidian/10 md:pl-8 first:md:border-l-0 first:md:pl-0">
              <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain shrink-0" />
              <div>
                <h3 className="font-display font-extrabold text-2xl text-obsidian">{service.title}</h3>
                <p className="text-body text-obsidian/70 mt-3 text-base leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
