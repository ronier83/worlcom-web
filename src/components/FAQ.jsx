import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { faq } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

/**
 * FAQ accordion: expandable questions with smooth transitions (Rewire-inspired).
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const shouldAnimate = usePageLoadAnimation()

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="text-center text-3xl font-bold text-black md:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-12 space-y-3">
          {faq.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
                {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : { animate: { opacity: 1, y: 0 } })}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-card"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-black"
                >
                  {item.question}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-primary"
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
                      className="border-t border-gray-100"
                    >
                      <p className="px-6 py-5 text-black/80">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
