import { motion } from 'framer-motion'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

/**
 * Trust section: "Trusted by Leading Financial Institutions Worldwide" with client logos.
 * Logos live in public/client-logos-png/ as PNG files (extracted from SVG patterns)
 * Some logos remain as SVG in public/client-logos/ (HOLON, PAPA_JOHNS)
 */
const clientLogos = [
  { name: 'City Time', src: '/client-logos-png/CITY_TIME.png' },
  { name: 'Egged', src: '/client-logos-png/EGGED.png' },
  { name: 'Good Pharm', src: '/client-logos-png/GOOD_PHARM.png' },
  { name: 'Hadassa', src: '/client-logos-png/HADASA.png' },
  { name: 'Holon', src: '/client-logos/HOLON.svg' }, // Pure SVG
  { name: 'Ituran', src: '/client-logos-png/ITURAN.png' },
  { name: 'Papa Johns', src: '/client-logos/PAPA_JOHNS.svg' }, // Pure SVG
  { name: 'Tel Aviv University', src: '/client-logos-png/TEL_AVIV_UNI.png' },
  { name: 'Tel Aviv', src: '/client-logos-png/TEL_AVIV.png' },
  { name: 'WIZO', src: '/client-logos-png/WIZO.png' },
]

export default function TrustSection() {
  const shouldAnimate = usePageLoadAnimation()
  return (
    <section id="about" className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="text-center text-2xl font-bold text-white md:text-3xl"
        >
          Trusted by Leading Financial Institutions Worldwide
        </motion.h2>
        <motion.div
          initial={shouldAnimate ? { opacity: 0 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1 }, viewport: { once: true }, transition: { delay: 0.2 } } : { animate: { opacity: 1 } })}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16"
        >
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex h-14 w-28 flex-shrink-0 items-center justify-center sm:h-16 sm:w-32 md:h-20 md:w-40 vendor-logo-wrapper"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-full w-auto max-w-full object-contain opacity-90 vendor-logo"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
