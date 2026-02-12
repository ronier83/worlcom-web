import { useState, useMemo } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiOutlineBolt, HiOutlineArrowRight, HiOutlinePaperAirplane, HiOutlineBanknotes, HiOutlineBuildingLibrary, HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { conversionWidget } from '../data/content'

// Sample rates for demo (ILS base). In production, replace with API or Rates page.
const SAMPLE_RATES = {
  USD: 0.27,
  EUR: 0.25,
  GBP: 0.21,
}

const CURRENCIES = [
  { code: 'ILS', symbol: '₪', name: 'Israeli Shekel' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
]

const deliveryIcons = {
  'Bank Transfer': HiOutlineBuildingLibrary,
  'Cash Pickup': HiOutlineBanknotes,
  'Mobile Wallet': HiOutlineDevicePhoneMobile,
}

/**
 * Rewire-style conversion widget: exchange rate, you send / they get, delivery method, CTA.
 * You send = ILS; They get = selected currency. Uses sample rates for display; "Check Our Rates" links to rates section.
 */
export default function ConversionWidget() {
  const [sendAmount, setSendAmount] = useState(1000)
  const [receiveCurrency, setReceiveCurrency] = useState('USD')
  const [delivery, setDelivery] = useState(conversionWidget.deliveryOptions[0])

  const sendCurrency = 'ILS'
  const rate = SAMPLE_RATES[receiveCurrency] ?? 0.27

  const receiveAmount = useMemo(() => Math.round(sendAmount * rate * 100) / 100, [sendAmount, rate])

  const rateDisplay = `₪1 = ${CURRENCIES.find((c) => c.code === receiveCurrency)?.symbol ?? '$'}${rate}`

  const formatAmount = (value, code) => {
    const c = CURRENCIES.find((x) => x.code === code)
    const sym = c?.symbol || code
    return `${sym}${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
    >
            {/* Exchange rate + Check Our Rates */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm font-medium text-black/70">
                {rateDisplay}
              </span>
              <Link
                to="rates"
                smooth
                duration={500}
                offset={-72}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#3482F1] bg-white px-4 py-2 text-sm font-semibold text-[#3482F1] transition hover:bg-[#3482F1]/5"
              >
                <HiOutlineBolt className="h-4 w-4" />
                {conversionWidget.rateLabel}
              </Link>
            </div>

            {/* You send */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-black/70">
                {conversionWidget.youSend}
              </label>
              <div className="mt-1 flex items-baseline gap-2 border-b-2 border-gray-200 pb-1 focus-within:border-[#3482F1]">
                <input
                  type="number"
                  min={1}
                  value={sendAmount}
                  onChange={(e) => setSendAmount(Number(e.target.value) || 0)}
                  className="flex-1 text-2xl font-bold text-black outline-none sm:text-3xl"
                />
                <span className="text-lg font-medium text-black/80">ILS</span>
              </div>
            </div>

            {/* They get */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-black/70">
                {conversionWidget.theyGet}
              </label>
              <div className="mt-1 flex items-center gap-2 border-b-2 border-gray-200 pb-1">
                <span className="flex-1 text-2xl font-bold text-black sm:text-3xl">
                  {formatAmount(receiveAmount, receiveCurrency)}
                </span>
                <select
                  value={receiveCurrency}
                  onChange={(e) => setReceiveCurrency(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-black outline-none focus:border-[#3482F1]"
                >
                  {Object.keys(SAMPLE_RATES).map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Delivery method */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-black/70">
                {conversionWidget.deliveryMethod}
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {conversionWidget.deliveryOptions.map((opt) => {
                  const Icon = deliveryIcons[opt] || HiOutlineBanknotes
                  const active = delivery === opt
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDelivery(opt)}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                        active
                          ? 'bg-[#3482F1]/15 text-[#3482F1] ring-2 ring-[#3482F1]/30'
                          : 'bg-gray-100 text-black/80 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {opt}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Get Started CTA */}
            <Link to="services" smooth duration={500} offset={-72} className="mt-8 block">
              <motion.span
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3482F1] py-4 text-lg font-semibold text-white transition hover:bg-[#3482F1]/90"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {conversionWidget.ctaLabel}
                <HiOutlineArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>

            {/* Fees note */}
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-black/70">
              <HiOutlinePaperAirplane className="h-4 w-4 text-[#3482F1]" />
              {conversionWidget.feesLabel}
            </p>
    </motion.div>
  )
}
