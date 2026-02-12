import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValue, useTransform, useReducedMotion } from 'framer-motion'
import { HiOutlineCreditCard } from 'react-icons/hi2'
import { wpayCard } from '../data/content'

/**
 * WPay Card section with description and interactive 3D tilt card visual.
 * Card animates in from the right when section scrolls into view, and out to the right when scrolled past.
 */
export default function WPayCard() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const cardX = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.55, 0.8, 1], [100, 100, 0, 0, 100, 100])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.55, 0.8, 1], [0, 0, 1, 1, 0, 0])

  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const rotateX = useTransform(tiltY, [-100, 100], [8, -8])
  const rotateY = useTransform(tiltX, [-100, 100], [-8, 8])

  function handleMouseMove(e) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)
    tiltX.set(percentX * 100)
    tiltY.set(percentY * 100)
  }

  function handleMouseLeave() {
    tiltX.set(0)
    tiltY.set(0)
    setIsHovering(false)
  }

  return (
    <section ref={sectionRef} id="wpay-card" className="overflow-x-hidden bg-gray-50/50 py-16 md:py-24">
      {/* Anchor for header W-PAY Login CTA */}
      <span id="wpay-login" className="block -scroll-mt-24" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
              <HiOutlineCreditCard className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-black md:text-4xl">
              {wpayCard.heading}
            </h2>
            <p className="mt-6 text-lg text-black/80 break-words">
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

          {/* Card mockup with 3D tilt; scroll-driven: in from right when in view, out to right when scrolled past */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              x: reducedMotion ? 0 : cardX,
              opacity: reducedMotion ? 1 : cardOpacity,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            className="flex min-w-0 justify-center"
          >
            <div
              className="h-40 w-full max-w-[260px] rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-4 shadow-xl sm:h-48 sm:max-w-[280px] sm:p-5 md:h-52 md:max-w-[320px] md:p-6"
              style={{
                transform: isHovering ? 'translateZ(20px)' : 'translateZ(0)',
              }}
            >
              <div className="flex items-start justify-between text-white/90">
                <span className="text-xs font-medium sm:text-sm">WPay Card</span>
                <span className="text-[10px] sm:text-xs">VISA</span>
              </div>
              <div className="mt-5 font-mono text-lg tracking-widest text-white sm:mt-6 sm:text-xl md:mt-8 md:text-2xl">
                **** **** **** 4242
              </div>
              <div className="mt-4 flex justify-between text-xs text-white/80 sm:mt-5 sm:text-sm md:mt-6">
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
