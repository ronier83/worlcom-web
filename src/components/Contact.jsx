import { motion } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineClock } from 'react-icons/hi2'
import { HeroLogoMark } from './Hero'
import { contact } from '../data/content'

/**
 * Contact section: "We Are Here For You" — dark background, hero image with speech-bubble overlay,
 * availability line, and contact methods (Email, Phone, Hours) with accent icons.
 * Help-desk image: public/images/help-desk.png
 */
export default function Contact() {
  return (
    <section id="contact" className="bg-[#1e293b] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Centered image with rounded border and speech-bubble overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          className="mt-10 min-w-0 text-center"
        >
          <p className="break-words text-white">
            {contact.hours[0]} | {contact.hours[1]}
          </p>
          <p className="mt-1 text-sm text-white/80">{contact.supportNote}</p>
        </motion.div>

        {/* Contact methods: icon (circle + accent), label, underlined detail */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          className="mt-14 grid gap-10 sm:grid-cols-3"
        >
          <a
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-[#F48F47]">
              <HiOutlineEnvelope className="h-7 w-7" />
            </span>
            <span className="mt-3 font-medium text-white">Email</span>
            <span className="mt-1 break-all text-sm text-white underline underline-offset-2">{contact.email}</span>
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, '').replace(/-/g, '')}`}
            className="flex flex-col items-center text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-[#F48F47]">
              <HiOutlinePhone className="h-7 w-7" />
            </span>
            <span className="mt-3 font-medium text-white">Phone</span>
            <span className="mt-1 text-sm text-white underline underline-offset-2">{contact.phone}</span>
          </a>
          <div className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-[#F48F47]">
              <HiOutlineClock className="h-7 w-7" />
            </span>
            <span className="mt-3 font-medium text-white">Hours</span>
            <div className="mt-1 text-sm text-white">
              {contact.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
