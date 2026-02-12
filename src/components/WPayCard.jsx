import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValue, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { HiOutlineCreditCard } from 'react-icons/hi2'
import { wpayCard } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

/**
 * WPay Card section with description and interactive 3D tilt card visual.
 * Card animates in from the right when section scrolls into view, and out to the right when scrolled past.
 */
export default function WPayCard() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const reducedMotion = useReducedMotion()
  const shouldAnimate = usePageLoadAnimation()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const rawCardX = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.55, 0.8, 1], [100, 100, 0, 0, 100, 100])
  const cardX = useSpring(rawCardX, { stiffness: 200, damping: 25 })

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
            initial={shouldAnimate ? { opacity: 0, x: -24 } : false}
            {...(shouldAnimate ? { whileInView: { opacity: 1, x: 0 }, viewport: { once: true } } : { animate: { opacity: 1, x: 0 } })}
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
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-block rounded-2xl bg-primary px-8 py-4 font-semibold text-white shadow-soft"
            >
              {wpayCard.ctaLabel}
            </motion.a>
          </motion.div>

          {/* Visa card image with 3D tilt and scroll-driven in/out animation */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              x: reducedMotion ? 0 : cardX,
              opacity: 1,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            className="flex min-w-0 justify-center"
          >
            <div
              className="flex max-w-[260px] justify-center sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]"
              style={{
                transform: isHovering ? 'translateZ(20px)' : 'translateZ(0)',
              }}
            >
              <img
                src="/images/visa.png"
                alt="WPay Visa card"
                className="max-h-40 w-full object-contain sm:max-h-48 md:max-h-52 lg:max-h-56 xl:max-h-64"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
