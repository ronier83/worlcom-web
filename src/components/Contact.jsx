import { motion } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineClock } from 'react-icons/hi2'
import { contact } from '../data/content'

/**
 * Contact section: "We Are Here For You", hours, email, phone.
 */
export default function Contact() {
  return (
    <section id="contact" className="bg-primary/5 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-black md:text-4xl"
        >
          {contact.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl text-center text-black/70"
        >
          {contact.supportNote}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <a
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-card transition hover:shadow-soft"
          >
            <HiOutlineEnvelope className="h-10 w-10 text-primary" />
            <span className="mt-4 font-medium text-black">Email</span>
            <span className="mt-1 text-primary">{contact.email}</span>
          </a>
          <a
            href={`tel:${contact.phone.replace(/-/g, '')}`}
            className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-card transition hover:shadow-soft"
          >
            <HiOutlinePhone className="h-10 w-10 text-primary" />
            <span className="mt-4 font-medium text-black">Phone</span>
            <span className="mt-1 text-primary">{contact.phone}</span>
          </a>
          <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-card sm:col-span-2 lg:col-span-1">
            <HiOutlineClock className="h-10 w-10 text-primary" />
            <span className="mt-4 font-medium text-black">Hours</span>
            <div className="mt-2 text-center text-sm text-black/80">
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
