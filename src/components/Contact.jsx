import { motion } from 'framer-motion'
import { contact } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

/**
 * Contact section: clean text-only layout — intro question, main heading,
 * availability line (days left, hours right), and contact methods as "Label: Detail" list.
 * No icons or emojis.
 */
export default function Contact() {
  const shouldAnimate = usePageLoadAnimation()
  return (
    <section id="contact" className="font-google-sans bg-white pt-0 pb-10 md:pb-14">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Section header — Google Sans, black, 2xl (https://fonts.google.com/specimen/Google+Sans) */}
        <motion.h2
          initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="-ml-[3px] mb-4 text-left font-semibold text-black text-[2.8125rem] sm:text-[3.75rem] md:text-[4.6875rem]"
        >
          Need Help?
        </motion.h2>
        {/* Availability — one line, justify-between: days left, hours right (bold) */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="flex flex-wrap items-center justify-between gap-2 text-[1.25rem] text-gray-900 sm:text-[1.40625rem]"
        >
          <span>Sundays to Thursdays, Fridays</span>
          <span className="font-bold text-[1rem] sm:text-[1.125rem]">08:00–19:00 (Sun–Thu) · 08:00–13:00 (Fri) GMT+2</span>
        </motion.div>

        {/* Contact methods — vertical list, "Label: Detail", no icons */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="mt-6 flex flex-col items-start gap-4 text-left text-[1.25rem] text-gray-900 sm:text-[1.40625rem]"
        >
          <p>
            <span className="font-medium">Call: </span>
            <a href={`tel:${contact.phone.replace(/\s/g, '').replace(/-/g, '')}`} className="hover:underline">
              {contact.phone}
            </a>
          </p>
          <p>
            <span className="font-medium">Email: </span>
            <a href={`mailto:${contact.email}`} className="hover:underline">
              {contact.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
