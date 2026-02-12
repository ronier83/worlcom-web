import { motion } from 'framer-motion'

/**
 * Trust section: "Trusted by Leading Financial Institutions Worldwide" with client logos.
 * Logos scraped from worldcomfinance.com (assets/clients/).
 */
const clientLogos = [
  { name: 'City Time', src: '/client-logos/CITY_TIME.svg' },
  { name: 'Egged', src: '/client-logos/EGGED.svg' },
  { name: 'Good Pharm', src: '/client-logos/GOOD_PHARM.svg' },
  { name: 'Hadassa', src: '/client-logos/HADASA.svg' },
  { name: 'Holon', src: '/client-logos/HOLON.svg' },
  { name: 'Ituran', src: '/client-logos/ITURAN.svg' },
  { name: 'Papa Johns', src: '/client-logos/PAPA_JOHNS.svg' },
  { name: 'Tel Aviv University', src: '/client-logos/TEL_AVIV_UNI.svg' },
  { name: 'Tel Aviv', src: '/client-logos/TEL_AVIV.svg' },
  { name: 'WIZO', src: '/client-logos/WIZO.svg' },
]

export default function TrustSection() {
  return (
    <section id="about" className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          className="text-center text-2xl font-bold text-white md:text-3xl"
        >
          Trusted by Leading Financial Institutions Worldwide
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16"
        >
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex h-14 w-28 flex-shrink-0 items-center justify-center sm:h-16 sm:w-32 md:h-20 md:w-40"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-full w-auto max-w-full object-contain opacity-90 transition hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
