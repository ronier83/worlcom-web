import { motion } from 'framer-motion'
import {
  HiOutlineArrowPath,
  HiOutlineCurrencyDollar,
  HiOutlineCreditCard,
  HiOutlineBanknotes,
  HiOutlineWallet,
  HiOutlineDevicePhoneMobile,
  HiOutlineIdentification,
} from 'react-icons/hi2'
import { services } from '../data/content'

const iconMap = {
  'money-transfer': HiOutlineArrowPath,
  'currency-exchange': HiOutlineCurrencyDollar,
  'prepaid-cards': HiOutlineCreditCard,
  'loans': HiOutlineBanknotes,
  'digital-wallet': HiOutlineWallet,
  'sim-topup': HiOutlineDevicePhoneMobile,
  'wpay-card': HiOutlineIdentification,
}

/**
 * Services grid: 7 cards with icon, title, description. Rewire-style layout.
 */
export default function Services() {
  return (
    <section id="services" className="bg-gray-50/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-black md:text-4xl"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-center text-black/70"
        >
          A full suite of cross-border financial solutions for individuals and businesses.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.id] || HiOutlineCurrencyDollar
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-white p-6 shadow-card transition hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-black">{service.title}</h3>
                {service.description && (
                  <p className="mt-2 text-sm text-black/70">{service.description}</p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
