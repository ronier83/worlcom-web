import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { hero } from '../data/content'
import ConversionWidget from './ConversionWidget'

/** Inline hero background SVG (globe + blobs + dashed lines) so it always loads */
function HeroBgGraphic() {
  return (
    <svg
      className="absolute right-0 bottom-0 h-[380px] w-[480px] opacity-70 md:h-[440px] md:w-[560px] md:opacity-80 lg:right-10 lg:bottom-0 lg:h-[500px] lg:w-[640px]"
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="heroBlob1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="heroBlob2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F48F47" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F48F47" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="180" cy="220" r="140" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
      <circle cx="180" cy="220" r="100" fill="none" stroke="white" strokeWidth="1.5" opacity="0.35" />
      <path d="M120 280c-8-24 20-60 55-55 28 4 45 38 38 70-6 28-40 42-72 35-32-7-25-38-21-50z" fill="url(#heroBlob1)" />
      <path d="M200 120c15-12 50 5 55 45 4 35-25 65-58 58-30-6-52-45-42-75 8-22 30-28 45-28z" fill="url(#heroBlob1)" />
      <path d="M280 320c20-15 55 10 50 50-4 35-45 55-80 45-28-8-35-45-20-70 12-20 35-25 50-25z" fill="url(#heroBlob2)" />
      <path d="M80 380 Q200 320 380 360" stroke="white" strokeWidth="2" strokeDasharray="12 8" fill="none" opacity="0.6" />
      <path d="M60 180 Q180 140 340 200" stroke="white" strokeWidth="1.5" strokeDasharray="10 6" fill="none" opacity="0.5" />
      <path d="M220 420 Q320 380 450 420" stroke="white" strokeWidth="1.5" strokeDasharray="8 10" fill="none" opacity="0.45" />
      <path d="M420 180 A80 80 0 0 1 420 340" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  )
}

/**
 * Hero section: Rewire-style prominent blue (#3482F1) background, white text, white conversion card.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#3482F1] pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Background graphic behind calculator */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <HeroBgGraphic />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl pl-2 pr-4 sm:pl-4 sm:pr-6 lg:pl-4 lg:pr-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left: headline exactly two lines; min-width from md up so first line fits */}
          <div className="flex min-w-0 flex-1 flex-col text-center md:min-w-[420px] md:shrink-0 lg:min-w-[480px] lg:max-w-xl lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-visible text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-5xl"
            >
              <span className="block whitespace-nowrap">{hero.headlineLines?.[0] ?? hero.headline}</span>
              <span className="block whitespace-nowrap">{hero.headlineLines?.[1] ?? ''}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl lg:mx-0"
            >
              {hero.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Link
                to="services"
                smooth
                duration={500}
                offset={-72}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-[#3482F1] shadow-lg transition hover:bg-white/95"
              >
                {hero.ctaLabel}
              </Link>
              <Link
                to="money-transfer"
                smooth
                duration={500}
                offset={-72}
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Money Transfer
              </Link>
            </motion.div>
          </div>

          {/* Right: conversion card + app store buttons, centered as a block */}
          <div className="flex w-full max-w-md flex-shrink-0 flex-col items-center gap-4 lg:max-w-none">
            <ConversionWidget />
            {/* App store buttons: solid, smaller, centered below calculator */}
            <div className="flex w-full max-w-md items-center justify-center gap-2">
              <a
                href="#"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white bg-black px-3 py-2 transition hover:bg-black/90 min-w-0 max-w-[160px]"
              >
                <svg className="h-5 w-5 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M12 8a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z"/>
                </svg>
                <div className="min-w-0 text-left">
                  <span className="block truncate text-[9px] leading-tight text-white/90">Available on the</span>
                  <span className="block truncate text-xs font-semibold leading-tight text-white">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white bg-black px-3 py-2 transition hover:bg-black/90 min-w-0 max-w-[160px]"
              >
                <svg className="h-5 w-5 shrink-0 text-white" viewBox="0 0 24 24" aria-hidden>
                  <path fill="currentColor" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.636z"/>
                </svg>
                <div className="min-w-0 text-left">
                  <span className="block truncate text-[9px] leading-tight text-white/90">ANDROID APP ON</span>
                  <span className="block truncate text-xs font-semibold leading-tight text-white">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
