import { motion } from 'framer-motion'
import { HeroLogoMark } from './Hero'
import { contact } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

/**
 * Contact section: "We Are Here For You" — dark background, hero image with speech-bubble overlay,
 * availability line, and contact methods (Email, Phone) with images: mail.png, phone.png.
 * Help-desk image: public/images/help-desk.png
 */
export default function Contact() {
  const shouldAnimate = usePageLoadAnimation()
  return (
    <section id="contact" className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-6">
        {/* Centered image with rounded border and speech-bubble overlay */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl bg-slate-600 shadow-xl"
        >
          <img
            src="/images/help-desk.png"
            alt="Customer support"
            className="h-[280px] w-full object-cover sm:h-[320px]"
          />
          {/* Logo mark overlay at bottom-right corner (same SVG as hero, smaller size) */}
          <span
            className="absolute bottom-4 right-4 flex items-end justify-end drop-shadow-lg"
            aria-hidden
          >
            <HeroLogoMark className="h-14 w-[54px] shrink-0 opacity-90 sm:h-16 sm:w-[62px]" />
          </span>
        </motion.div>

        {/* Availability / support note — centered, ample spacing */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="mt-6 min-w-0 text-center md:mt-8"
        >
          <p className="break-words text-gray-900">
            {contact.hours[0]} | {contact.hours[1]}
          </p>
          <p className="mt-1 text-sm text-gray-600">{contact.supportNote}</p>
        </motion.div>

        {/* Contact methods: centred, compact on desktop */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 24 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="mx-auto mt-8 grid max-w-xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-6 md:mt-10 md:gap-6"
        >
          <a
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center text-center"
          >
            <span className="flex items-center justify-center">
              <img src="/images/mail.png" alt="" className="h-16 w-16 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16" aria-hidden />
            </span>
            <span className="mt-3 text-base font-medium text-gray-900 sm:mt-2 sm:text-xs md:text-base">Email</span>
            <span className="mt-1 break-all text-sm text-gray-700 underline underline-offset-2 sm:mt-0.5 sm:text-[10px] md:text-sm">{contact.email}</span>
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, '').replace(/-/g, '')}`}
            className="flex flex-col items-center text-center"
          >
            <span className="flex items-center justify-center">
              <img src="/images/phone.png" alt="" className="h-16 w-16 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16" aria-hidden />
            </span>
            <span className="mt-3 text-base font-medium text-gray-900 sm:mt-2 sm:text-xs md:text-base">Phone</span>
            <span className="mt-1 text-sm text-gray-700 underline underline-offset-2 sm:mt-0.5 sm:text-[10px] md:text-sm">{contact.phone}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
