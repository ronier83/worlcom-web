import Header from './components/Header'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import Services from './components/Services'
import MoneyTransfer from './components/MoneyTransfer'
import BusinessSolutions from './components/BusinessSolutions'
import WPayCard from './components/WPayCard'
import TrustSection from './components/TrustSection'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyModal from './components/PrivacyModal'
import FloatingSupport from './components/FloatingSupport'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
        <Services />
        <MoneyTransfer />
        <BusinessSolutions />
        <WPayCard />
        <TrustSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <PrivacyModal />
      <FloatingSupport />
    </>
  )
}

export default App
