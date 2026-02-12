import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { hero } from '../data/content'
import ConversionWidget from './ConversionWidget'

/**
 * Hero section: headline, subheadline, CTAs, and conversion widget in one section, side by side.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent/10 pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute right-1/3 top-1/4 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left: headline, subheadline, CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-black/80 sm:text-xl md:text-2xl lg:mx-0"
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
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-soft transition hover:bg-primary/90 hover:shadow-lg"
              >
                {hero.ctaLabel}
              </Link>
              <Link
                to="money-transfer"
                smooth
                duration={500}
                offset={-72}
                className="inline-flex items-center justify-center rounded-2xl border-2 border-primary bg-white px-8 py-4 text-lg font-semibold text-primary transition hover:bg-primary/5"
              >
                Money Transfer
              </Link>
            </motion.div>
          </div>

          {/* Right: conversion widget card */}
          <div className="flex flex-shrink-0 justify-center lg:justify-end">
            <ConversionWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
