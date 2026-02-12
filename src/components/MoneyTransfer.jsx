import { motion } from 'framer-motion'
import {
  HiOutlineCurrencyDollar,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2'
import { moneyTransfer } from '../data/content'

const featureIcons = [
  HiOutlineCurrencyDollar,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
]

/**
 * Money Transfer section with heading, description, and 4 feature cards.
 * Section id="rates" for nav scroll.
 */
export default function MoneyTransfer() {
  return (
    <section id="rates" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-black md:text-4xl"
            >
              {moneyTransfer.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-black/80"
            >
              {moneyTransfer.description}
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {moneyTransfer.features.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition hover:border-primary/20 hover:shadow-soft"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-black">{feature.title}</h3>
                  <p className="mt-2 text-sm text-black/70">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
