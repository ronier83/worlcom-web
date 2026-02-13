import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { faq } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

/**
 * FAQ accordion: expandable questions with clean, minimal design.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const shouldAnimate = usePageLoadAnimation()

  return (
    <section id="faq" className="bg-[#FFF0E6] py-16 font-google-sans md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="text-center text-[1.95rem] font-bold text-[#A04D1A] md:text-[2.35rem]"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-12 text-left">
          {faq.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
                {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : { animate: { opacity: 1, y: 0 } })}
                className="py-5 text-left"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
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
                      <p className="mt-3 pr-8 text-left text-base text-[#A04D1A]/80 sm:text-lg">{item.answer}</p>
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
