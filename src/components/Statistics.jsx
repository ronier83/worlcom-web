import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiOutlineArrowTrendingUp, HiOutlineBuildingOffice2, HiOutlineMapPin } from 'react-icons/hi2'
import { statistics } from '../data/content'

const icons = [HiOutlineArrowTrendingUp, HiOutlineBuildingOffice2, HiOutlineMapPin]

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
  return (
    <section id="statistics" className="border-y border-gray-100 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {statistics.map((stat, index) => {
            const Icon = icons[index] || icons[0]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 rounded-2xl bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
                </div>
                <div className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl lg:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-black/70">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
