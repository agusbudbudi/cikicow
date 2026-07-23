import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import { scrollToSection } from './lib/scrollToSection.js'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Stats from './sections/Stats.jsx'
import Events from './sections/Events.jsx'
import Services from './sections/Services.jsx'
import BannerCta from './sections/BannerCta.jsx'
import About from './sections/About.jsx'
import Highlights from './sections/Highlights.jsx'
import Creators from './sections/Creators.jsx'
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
      <Header />
      <main>
        <Hero />
        <Stats />
        <Events />
        <Services />
        <BannerCta />
        <About />
        <Highlights />
        <Creators />
        <Reviews />
        <Faq />
        <JoinCta />
      </main>
      <Footer />
    </>
  )
}
