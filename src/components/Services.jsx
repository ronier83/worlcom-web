import { motion } from 'framer-motion'
import {
  HiOutlineArrowPath,
  HiOutlineCurrencyDollar,
  HiOutlineCreditCard,
  HiOutlineWallet,
  HiOutlineDevicePhoneMobile,
  HiOutlineIdentification,
} from 'react-icons/hi2'
import { services } from '../data/content'

const iconMap = {
  'money-transfer': HiOutlineArrowPath,
  'currency-exchange': HiOutlineCurrencyDollar,
  'prepaid-cards': HiOutlineCreditCard,
  'digital-wallet': HiOutlineWallet,
  'sim-topup': HiOutlineDevicePhoneMobile,
  'wpay-card': HiOutlineIdentification,
}

/**
 * Services grid: 7 cards with icon, title, description. Rewire-style layout.
 */
export default function Services() {
  return (
    <section id="services" className="bg-[#FFF0E6] py-12 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          className="text-center text-3xl font-bold text-black sm:text-3xl md:text-3xl"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-3 max-w-2xl text-center text-base text-black/70 sm:mt-3 sm:text-base"
        >
          A full suite of cross-border financial solutions for individuals and businesses.
        </motion.p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:gap-5">
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
                className="rounded-lg bg-white p-4 shadow-card transition hover:shadow-lg sm:rounded-xl sm:p-4 lg:p-5"
              >
                <div className="mb-2 inline-flex rounded-md bg-primary/10 p-2 sm:mb-3 sm:rounded-lg sm:p-2.5">
                  <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-sm font-semibold leading-tight text-black sm:text-base">{service.title}</h3>
                {service.description && (
                  <p className="mt-1 line-clamp-2 text-xs leading-snug text-black/70 sm:mt-1.5 sm:line-clamp-none sm:text-sm sm:leading-snug">{service.description}</p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
