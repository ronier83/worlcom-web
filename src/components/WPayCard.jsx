import { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { HiOutlineCreditCard } from 'react-icons/hi2'
import { wpayCard } from '../data/content'

/**
 * WPay Card section with description and interactive 3D tilt card visual.
 */
export default function WPayCard() {
  const cardRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [8, -8])
  const rotateY = useTransform(x, [-100, 100], [-8, 8])

  function handleMouseMove(e) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)
    x.set(percentX * 100)
    y.set(percentY * 100)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
    setIsHovering(false)
  }

  return (
    <section id="wpay-card" className="bg-gray-50/50 py-16 md:py-24">
      {/* Anchor for header W-PAY Card Login CTA */}
      <span id="wpay-login" className="block -scroll-mt-24" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
              <HiOutlineCreditCard className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-black md:text-4xl">
              {wpayCard.heading}
            </h2>
            <p className="mt-6 text-lg text-black/80">
              {wpayCard.description}
            </p>
            <motion.a
              href="#wpay-login"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-block rounded-2xl bg-primary px-8 py-4 font-semibold text-white shadow-soft transition hover:bg-primary/90"
            >
              {wpayCard.ctaLabel}
            </motion.a>
          </motion.div>

          {/* Card mockup with 3D tilt */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            className="flex justify-center"
          >
            <div
              className="h-52 w-80 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 shadow-xl"
              style={{
                transform: isHovering ? 'translateZ(20px)' : 'translateZ(0)',
              }}
            >
              <div className="flex items-start justify-between text-white/90">
                <span className="text-sm font-medium">WPay Card</span>
                <span className="text-xs">VISA</span>
              </div>
              <div className="mt-8 font-mono text-2xl tracking-widest text-white">
                **** **** **** 4242
              </div>
              <div className="mt-6 flex justify-between text-sm text-white/80">
                <span>worldcom FINANCE</span>
                <span>Valid 12/28</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
