import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ConversionWidget from '../components/ConversionWidget'
import { ratesPage } from '../data/content'

/**
 * Rates page: mirrors worldcomfinance.com/rates with site design.
 * Hero strip (primary blue), intro, calculator (ConversionWidget), and Q&A section (scraped from live site).
 */
export default function RatesPage() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null)

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

        {/* FAQ section: same design as main page FAQ (peach bg, brown heading, accordion) */}
        <section id="faq" className="bg-[#FFF0E6] py-16 font-google-sans md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center text-[1.95rem] font-bold text-[#A04D1A] md:text-[2.35rem]"
            >
              {ratesPage.questionsHeading}
            </motion.h2>

            <div className="mt-12 text-left">
              {ratesPage.questions.map((item, index) => {
                const isOpen = openQuestionIndex === index
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className="py-5 text-left"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenQuestionIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <span className="text-lg font-medium text-[#A04D1A] sm:text-xl">{item.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 flex-shrink-0 text-[#2563AB]"
                      >
                        <HiChevronDown className="h-5 w-5" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden text-left"
                        >
                          <p className="mt-3 pr-8 text-left text-base text-[#A04D1A]/80 leading-relaxed sm:text-lg">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
