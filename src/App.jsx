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
      {/* Chat bubble: bottom-right, above the support button; slightly smaller/inset on very small screens so it doesn't cover CTAs */}
      <div
        className="fixed bottom-20 right-4 z-[100] max-w-[140px] rounded-xl bg-[#334155] px-3 py-2 shadow-xl sm:bottom-24 sm:right-6 sm:max-w-[160px]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 14px) 100%, calc(100% - 14px) calc(100% - 10px), 0 calc(100% - 10px))',
        }}
        aria-hidden
      >
        <p className="text-xs font-medium text-white">We Are</p>
        <p className="text-xs font-semibold leading-tight text-[#F48F47]">Here For You</p>
      </div>
    </>
  )
}

export default App
