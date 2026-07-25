import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from './components/SEO.jsx'
import Header from './components/Header.jsx'
import BackgroundDecor from './components/BackgroundDecor.jsx'
import JoinPopup from './components/JoinPopup.jsx'
import { scrollToSection } from './lib/scrollToSection.js'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Stats from './sections/Stats.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import Events from './sections/Events.jsx'
import JoinQuickCta from './sections/JoinQuickCta.jsx'
import Services from './sections/Services.jsx'
import BannerCta from './sections/BannerCta.jsx'
import About from './sections/About.jsx'
import Highlights from './sections/Highlights.jsx'
import CreatorsWallV2 from './sections/CreatorsWallV2.jsx'
import Reviews from './sections/Reviews.jsx'
import Faq from './sections/Faq.jsx'
import JoinCta from './sections/JoinCta.jsx'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    requestAnimationFrame(() => scrollToSection(location.hash))
  }, [location])

  return (
    <>
      <SEO
        title="Republik Cikicow Agency — Agensi Resmi TikTok untuk Talent & Live Creator"
        description="Republik Cikicow Agency adalah agensi TikTok resmi tempat talent dan live creator berkembang. Simak kelebihan join agency TikTok: bonus bulanan, event eksklusif, pendampingan admin, dan komunitas creator se-Indonesia."
        path="/"
      />
      <JoinPopup />
      <Header />
      <main className="relative">
        <BackgroundDecor />
        <Hero />
        <Stats />
        <Events />
        <JoinQuickCta />
        <Services />
        <BannerCta />
        <HowItWorks />
        <About />
        <Highlights />
        <CreatorsWallV2 />
        <Reviews />
        <Faq />
        <JoinCta />
      </main>
      <Footer />
    </>
  )
}
