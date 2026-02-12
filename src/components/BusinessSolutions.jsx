import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { businessSolutions } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

/**
 * Business solutions section with heading, description, and Get an Offer CTA.
 */
export default function BusinessSolutions() {
  const shouldAnimate = usePageLoadAnimation()
  return (
    <section id="business-solutions" className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 24 } : false}
          {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex rounded-2xl bg-white/20 p-4">
            <HiOutlineBuildingOffice2 className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {businessSolutions.heading}
          </h2>
          <p className="mt-6 text-lg text-white/90">
            {businessSolutions.description}
          </p>
          <Link to="contact" smooth duration={500} offset={-72}>
            <motion.span
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-block rounded-2xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg"
            >
              {businessSolutions.ctaLabel}
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
