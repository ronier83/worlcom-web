import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiOutlineArrowTrendingUp, HiOutlineBuildingOffice2, HiOutlineMapPin, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { statistics } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

const icons = [HiOutlineArrowTrendingUp, HiOutlineBuildingOffice2, HiOutlineMapPin, HiOutlineGlobeAlt]

/**
 * Animated counter that counts up to target when in view.
 */
function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    const step = value / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

/**
 * Statistics bar: 750k transfers, 1k branches, 15k pickup points. Animates on scroll.
 */
export default function Statistics() {
  const shouldAnimate = usePageLoadAnimation()
  return (
    <section id="statistics" className="bg-[#F48F47] py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4 lg:gap-8">
          {statistics.map((stat, index) => {
            const Icon = icons[index] || icons[0]
            return (
              <motion.div
                key={stat.label}
                initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.5, delay: index * 0.1 } } : { animate: { opacity: 1, y: 0 } })}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 rounded-xl bg-white/20 p-2 sm:mb-4 sm:rounded-2xl sm:p-4">
                  <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8 md:h-10 md:w-10" />
                </div>
                <div className="text-lg font-bold text-white sm:text-2xl md:text-4xl lg:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-xs text-white/90 sm:mt-2 sm:text-base">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
