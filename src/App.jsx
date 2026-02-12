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
import FloatingSupport from './components/FloatingSupport'

function App() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-20">
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
      <FloatingSupport />
      {/* Chat bubble: bottom-right, above the support button; clean rounded box, no clip so bottom isn't cut */}
      <div
        className="fixed bottom-20 right-4 z-[100] max-w-[140px] rounded-xl bg-[#334155] px-3 py-2 shadow-xl sm:bottom-24 sm:right-6 sm:max-w-[160px]"
        aria-hidden
      >
        <p className="text-xs font-medium text-white">We Are</p>
        <p className="text-xs font-semibold leading-tight text-[#F48F47]">Here For You</p>
      </div>
    </>
  )
}

export default App
