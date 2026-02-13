import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ConversionWidget from '../components/ConversionWidget'
import { ratesPage } from '../data/content'

/**
 * Rates page: mirrors worldcomfinance.com/rates with site design.
 * Hero strip (primary blue), intro copy, and the same calculator as the hero (ConversionWidget).
 */
export default function RatesPage() {
  return (
    <>
      <Header />
      <main className="font-google-sans pt-14 sm:pt-20">
        {/* Hero strip: primary blue, same as About/Privacy */}
        <section className="bg-primary px-4 py-10 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-semibold sm:text-4xl"
            >
              {ratesPage.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mt-2 text-white/90"
            >
              {ratesPage.subhead}
            </motion.p>
          </div>
        </section>

        {/* Intro + calculator: white bg, accent headings */}
        <section id="rates" className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-left text-lg text-gray-800 leading-relaxed"
            >
              {ratesPage.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="mt-10"
            >
              <h2 className="text-xl font-semibold text-accent sm:text-2xl">
                {ratesPage.calculatorHeading}
              </h2>
              <p className="mt-2 text-gray-600">
                {ratesPage.calculatorSubtext}
              </p>
              <div className="mt-6 flex justify-start">
                <ConversionWidget />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
