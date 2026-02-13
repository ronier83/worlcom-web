import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import Services from './components/Services'
import TrustedByVendors from './components/TrustedByVendors'
import MoneyTransfer from './components/MoneyTransfer'
import BusinessSolutions from './components/BusinessSolutions'
import WPayCard from './components/WPayCard'
import TrustSection from './components/TrustSection'
import HaveYourBackBanner from './components/HaveYourBackBanner'
import FAQ from './components/FAQ'
import MultilingualGreeting from './components/MultilingualGreeting'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingSupport from './components/FloatingSupport'

function App() {
  // Accordion state for mobile collapsible sections (Statistics, Services, MoneyTransfer)
  // All sections collapsed by default on mobile (Money Transfer included)
  const [activeSection, setActiveSection] = useState(null)

  const handleSectionToggle = (sectionId) => {
    setActiveSection((prev) => (prev === sectionId ? null : sectionId))
  }

  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-20">
        <Hero />
        <TrustedByVendors />
        <Statistics activeSection={activeSection} onToggle={handleSectionToggle} />
        <Services activeSection={activeSection} onToggle={handleSectionToggle} />
        <MoneyTransfer activeSection={activeSection} onToggle={handleSectionToggle} />
        <BusinessSolutions />
        <WPayCard />
        <TrustSection />
        <FAQ />
        <HaveYourBackBanner />
        <MultilingualGreeting />
        <Contact />
      </main>
      <Footer />
      <FloatingSupport />
    </>
  )
}

export default App
