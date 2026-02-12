import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { businessSolutions } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

/**
 * Business solutions section with heading, description, and Get an Offer CTA.
 * Features decorative half-moon gradient background element.
 */
export default function BusinessSolutions() {
  const shouldAnimate = usePageLoadAnimation()
  return (
    <section id="business-solutions" className="relative bg-primary py-16 md:py-24">
      {/* Decorative half-moon gradient background on left */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden" aria-hidden="true">
        <svg
          className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 md:h-[600px] md:w-[600px]"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="#F48F47" opacity="0.7" />
        </svg>
      </div>

      {/* Decorative lines and arrow on top right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full overflow-hidden" aria-hidden="true">
        <svg
          className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/3 translate-x-1/3 md:h-[500px] md:w-[500px]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curved dashed lines */}
          <path
            d="M 100 80 Q 200 120 300 80"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeDasharray="12 10"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 120 140 Q 240 200 360 150"
            stroke="#F48F47"
            strokeWidth="3"
            strokeDasharray="15 8"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M 150 200 Q 280 280 400 230"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeDasharray="10 12"
            fill="none"
            opacity="0.5"
          />
          
          {/* Paper plane arrow icon */}
          <g transform="translate(80, 50) rotate(-25)">
            <path
              d="M 0 15 L 30 0 L 35 15 L 30 12 L 0 15 Z"
              fill="#F48F47"
              opacity="0.9"
            />
            <path
              d="M 30 0 L 42 -8 L 35 15 Z"
              fill="#FFFFFF"
              opacity="0.95"
            />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
