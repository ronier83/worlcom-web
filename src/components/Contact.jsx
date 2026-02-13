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
    <section id="contact" className="font-google-sans bg-white py-10 md:py-14">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Section header — left-aligned */}
        <motion.h2
          initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="text-left text-xl font-bold text-gray-500 sm:text-2xl md:text-3xl"
        >
          Need Help?
        </motion.h2>

        {/* Availability — one line, justify-between: days left, hours right (bold) */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="mt-10 flex flex-wrap items-center justify-between gap-2 text-gray-900 sm:text-lg"
        >
          <span>Sundays to Thursdays, Fridays</span>
          <span className="font-bold">08:00–19:00 (Sun–Thu) · 08:00–13:00 (Fri) (IL time)</span>
        </motion.div>

        {/* Contact methods — vertical list, "Label: Detail", no icons */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="mt-8 flex flex-col gap-4 text-gray-900 sm:text-lg"
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
          <p className="mt-1 text-sm text-gray-600">{contact.supportNote}</p>
        </motion.div>
      </div>
    </section>
  )
}
