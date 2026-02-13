import { useState, useMemo, useEffect, useCallback } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiOutlineBolt, HiOutlineArrowRight, HiOutlineBanknotes, HiOutlineBuildingLibrary } from 'react-icons/hi2'
import { HiChevronDown } from 'react-icons/hi'
import { conversionWidget } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

// Live API (worldcomfinance.com/rates). CORS allows *.
const API_BASE = 'https://wizdraw.prodwfs.com/api/v2'

// Fee by corridor when fee API returns error (match worldcomfinance.com/rates). Key: countryCode2/transferType/supplierUid, value: fee in ILS.
const FEE_BY_CORRIDOR = {
  'TH/PICKUP_CASH/ria': 18,
}

// Map API transfer type to display label (match original site wording)
const TRANSFER_TYPE_LABELS = {
  PICKUP_CASH: 'Cash Transfer',
  DEPOSIT: 'Bank Transfer',
}

const deliveryIcons = {
  'Bank Transfer': HiOutlineBuildingLibrary,
  'Cash Transfer': HiOutlineBanknotes,
}

// ISO 3166-1 alpha-2 country code → flag emoji (regional indicator symbols).
function flagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return ''
  const code = countryCode.toUpperCase()
  return code.replace(/./g, (c) => String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0)))
}

// Circular flag (flagcdn). countryCode = ISO 3166-1 alpha-2.
function Flag({ countryCode, className = 'h-6 w-6' }) {
  const code = (countryCode || 'us').toLowerCase()
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt=""
      className={`rounded-full object-cover ${className}`}
      loading="lazy"
    />
  )
}

/**
 * Calculator matching worldcomfinance.com/rates: Country → Transfer Method → Supplier,
 * then Amount Sent (ILS), Receiver Gets, Transaction Details (Fee, Total Cost, Min).
 * Rate, limits and min from country/data; fee from fee/get when possible.
 */
export default function ConversionWidget() {
  const shouldAnimate = usePageLoadAnimation()

  // Options from API
  const [countries, setCountries] = useState([])
  const [transferTypes, setTransferTypes] = useState([])
  const [suppliers, setSuppliers] = useState([])
  // Selections (live flow)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedTransferType, setSelectedTransferType] = useState(null)
  const [selectedSupplier, setSelectedSupplier] = useState(null)
  // Data for chosen corridor (rate, limits, limitsMin, currency) from country/data API
  const [countryData, setCountryData] = useState(null)
  const [countryDataLoading, setCountryDataLoading] = useState(false)
  // Receiver amount from API when endpoint returns it (e.g. country/data?amount=...); null = use rate × amount
  const [receiveAmountFromApi, setReceiveAmountFromApi] = useState(null)
  const [fee, setFee] = useState(0)
  const [feeLoading, setFeeLoading] = useState(false)

  const [sendAmount, setSendAmount] = useState(1000)

  // Fetch destinations on mount
  useEffect(() => {
    let cancelled = false
    fetch(`${API_BASE}/country/transferdestinations`)
      .then((res) => res.json())
      .then((list) => {
        if (cancelled || !Array.isArray(list)) return
        const active = list.filter((c) => c.isActive)
        setCountries(active)
        // Default: Thailand when site loads
        const thailand = active.find((c) => c.countryCode2 === 'TH')
        if (thailand) setSelectedCountry(thailand)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])

  // When country changes: fetch transfer types, then keep only types that have suppliers (match original: e.g. Thailand only "Cash Transfer")
  useEffect(() => {
    if (!selectedCountry?.countryCode2) {
      setTransferTypes([])
      setSuppliers([])
      setSelectedTransferType(null)
      setSelectedSupplier(null)
      setCountryData(null)
      return
    }
    let cancelled = false
    setTransferTypes([])
    setSelectedTransferType(null)
    setSuppliers([])
    setSelectedSupplier(null)
    setCountryData(null)
    const countryCode = selectedCountry.countryCode2
    fetch(`${API_BASE}/country/transfertypes/${countryCode}`)
      .then((res) => res.json())
      .then(async (types) => {
        if (cancelled || !Array.isArray(types)) return
        // Only show transfer types that have at least one supplier for this country
        const withSuppliers = await Promise.all(
          types.map(async (t) => {
            const res = await fetch(`${API_BASE}/country/suppliers/${countryCode}/${t}`)
            const list = await res.json()
            return Array.isArray(list) && list.length > 0 ? t : null
          })
        )
        const available = withSuppliers.filter(Boolean)
        if (cancelled) return
        setTransferTypes(available)
        // Default: Bank Transfer (DEPOSIT) when available (e.g. for Thailand)
        const defaultType = available.includes('DEPOSIT') ? 'DEPOSIT' : available[0]
        if (defaultType) setSelectedTransferType(defaultType)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [selectedCountry?.countryCode2])

  // When country + transfer type: fetch suppliers, clear supplier
  useEffect(() => {
    if (!selectedCountry?.countryCode2 || !selectedTransferType) {
      setSuppliers([])
      setSelectedSupplier(null)
      setCountryData(null)
      return
    }
    let cancelled = false
    setSuppliers([])
    setSelectedSupplier(null)
    setCountryData(null)
    fetch(`${API_BASE}/country/suppliers/${selectedCountry.countryCode2}/${selectedTransferType}`)
      .then((res) => res.json())
      .then((list) => {
        if (cancelled || !Array.isArray(list)) return
        setSuppliers(list)
        // Default: "Thailand Deposit" supplier when present (e.g. for TH + Bank Transfer)
        const thailandDeposit = list.find(
          (s) => (s.supplierName || '').toLowerCase().includes('thailand deposit') || (s.supplierName || '').toLowerCase().includes('thailand deposite')
        )
        setSelectedSupplier(thailandDeposit || list[0] || null)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [selectedCountry?.countryCode2, selectedTransferType])

  // When country + transfer type + supplier (and amount): fetch country/data from API (rate, limits, limitsMin; receiver amount when API returns it)
  useEffect(() => {
    if (!selectedCountry?.countryCode2 || !selectedTransferType || !selectedSupplier?.supplierUid) {
      setCountryData(null)
      setReceiveAmountFromApi(null)
      return
    }
    setCountryDataLoading(true)
    let cancelled = false
    const countryCode = selectedCountry.countryCode2
    const transferType = selectedTransferType
    const supplierUid = selectedSupplier.supplierUid
    const url = `${API_BASE}/country/data/${countryCode}/${transferType}/${supplierUid}?amount=${Number(sendAmount) || 0}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return
        setCountryDataLoading(false)
        if (Array.isArray(data) && data.length) {
          const row = data[0]
          setCountryData(row)
          // Use receiver amount from API when present (no client-side calculation)
          const apiReceive =
            typeof row.receiveAmount === 'number' ? row.receiveAmount
            : typeof row.convertedAmount === 'number' ? row.convertedAmount
            : typeof row.local === 'number' ? row.local
            : row.quote != null && typeof row.quote.local === 'number' ? row.quote.local
            : null
          setReceiveAmountFromApi(apiReceive)
          const minIls = row.limitsMin?.ils
          if (typeof minIls === 'number' && minIls > 0) setSendAmount((prev) => (prev < minIls ? minIls : prev))
          const commissionFee = Array.isArray(row.commissions) && row.commissions[0] != null
            ? Number(row.commissions[0].amount ?? row.commissions[0]) : null
          if (typeof commissionFee === 'number' && commissionFee >= 0) setFee(commissionFee)
        } else {
          setCountryData(null)
          setReceiveAmountFromApi(null)
        }
      })
      .catch(() => {
        setCountryDataLoading(false)
        setReceiveAmountFromApi(null)
      })
    return () => { cancelled = true }
  }, [selectedCountry?.countryCode2, selectedTransferType, selectedSupplier?.supplierUid, sendAmount])

  // Fee: POST fee/get with camelCase body; response is { value: 18 }
  useEffect(() => {
    const countryCode = selectedCountry?.countryCode2
    const supplierUid = selectedSupplier?.supplierUid
    const destCurrency = countryData?.currency ?? selectedCountry?.coinCode
    if (!countryCode || !selectedTransferType || !supplierUid || !destCurrency) {
      setFee(0)
      return
    }
    const corridorKey = `${countryCode}/${selectedTransferType}/${supplierUid}`
    const fallbackFee = FEE_BY_CORRIDOR[corridorKey] ?? 0
    setFee(fallbackFee)

    setFeeLoading(true)
    let cancelled = false
    fetch(`${API_BASE}/transfer/fee/get`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: sendAmount,
        supplier: supplierUid,
        countryCode,
        destinationCurrencyCode: destCurrency,
        transferMethod: selectedTransferType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return
        setFeeLoading(false)
        const feeValue = data?.value ?? data?.fee ?? data?.data?.fee ?? data?.amount
        if (typeof feeValue === 'number' && feeValue >= 0) setFee(feeValue)
        else setFee(fallbackFee)
      })
      .catch(() => {
        setFeeLoading(false)
        setFee(fallbackFee)
      })
    return () => { cancelled = true }
  }, [selectedCountry?.countryCode2, selectedCountry?.coinCode, selectedTransferType, selectedSupplier?.supplierUid, countryData?.currency, sendAmount])

  const rate = countryData?.rate?.rate ?? 0
  // Only use currency/symbol from API; no default (e.g. USD) until country/data returns
  const receiveCurrency = countryData?.currency ?? ''
  const receiveSymbol = countryData?.currencySymbol ?? ''
  const limitsMin = countryData?.limitsMin ?? {}
  const minIls = limitsMin.ils ?? 10

  const totalCost = sendAmount + fee
  // They get: from country/data API when API returns it (receiveAmount, convertedAmount, local, quote.local); else rate × amount (rate from API)
  const receiveAmount = useMemo(() => {
    if (typeof receiveAmountFromApi === 'number' && receiveAmountFromApi >= 0) {
      return Math.round(receiveAmountFromApi * 100) / 100
    }
    if (rate <= 0) return 0
    return Math.round(sendAmount * rate * 100) / 100
  }, [receiveAmountFromApi, sendAmount, rate])

  // Only show rate after API returns; no "Select country & method" – wait until currency loads
  const rateDisplay = countryData
    ? `₪1 = ${receiveSymbol}${Number(rate).toFixed(4)}`
    : countryDataLoading
      ? '...'
      : ''

  const formatAmount = useCallback((value, symbol) => {
    return `${symbol}${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }, [])

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
      className="w-full min-w-0 max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl text-left lg:max-w-[380px]"
    >
      {/* Top strip: rate (from API when corridor selected), Check Our Rates link */}
      <div className="flex min-w-0 items-center justify-between gap-3 bg-[#3482F1]/10 px-4 py-2 sm:px-5">
        <span className="min-w-0 truncate text-sm font-medium text-gray-700">{rateDisplay}</span>
        <Link
          to="rates"
          smooth
          duration={500}
          offset={-72}
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[#3482F1] underline decoration-[#3482F1] underline-offset-2"
        >
          <HiOutlineBolt className="h-4 w-4" />
          {conversionWidget.rateLabel}
        </Link>
      </div>

      <div className="p-4 text-left sm:p-5">
        {/* Amount Sent (ILS) – first field; display with thousand separators (1,000 10,000 etc.) */}
        <div className="mt-0">
          <label className="block text-left text-sm font-medium text-gray-600">{conversionWidget.amountSentLabel}</label>
          <div className="mt-0.5 flex items-center justify-start gap-2 border-b border-gray-300 pb-1.5">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="off"
              value={sendAmount === 0 ? '' : `₪${sendAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}`}
              onFocus={() => {
                if (sendAmount === 1000) setSendAmount(0)
              }}
              onChange={(e) => {
                const raw = e.target.value.replace(/[^\d]/g, '')
                const num = raw === '' ? 0 : parseInt(raw, 10)
                if (raw === '' || (!Number.isNaN(num) && num >= 0)) setSendAmount(raw === '' ? 0 : num)
              }}
              onBlur={() => {
                if (sendAmount < minIls) setSendAmount(minIls)
              }}
              className="min-w-0 flex-1 bg-transparent text-left text-2xl font-bold text-gray-900 outline-none sm:text-3xl"
              aria-label="You send (ILS)"
            />
            <span className="shrink-0 text-base font-medium text-gray-600">ILS</span>
            <Flag countryCode="il" className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
          </div>
        </div>

        {/* They get (second): amount + currency only after API returns; country select via clickable flag on the right */}
        <div className="mt-3 text-left">
          <label className="block text-left text-sm font-medium text-gray-600">{conversionWidget.theyGet}</label>
          <div className="mt-0.5 flex items-center justify-start gap-2 border-b border-gray-300 pb-1.5">
            <span className="min-w-0 flex-1 text-left text-2xl font-bold text-gray-900 sm:text-3xl">
              {!countryData && !countryDataLoading ? '' : countryDataLoading ? '...' : formatAmount(receiveAmount, receiveSymbol)}
            </span>
            {countryData ? (
              <span className="shrink-0 text-base font-medium text-gray-600">{receiveCurrency}</span>
            ) : null}
            <div className="relative flex shrink-0 cursor-pointer items-center gap-1.5">
              <select
                value={selectedCountry?.countryCode2 ?? ''}
                onChange={(e) => {
                  const v = e.target.value
                  const c = v ? countries.find((x) => x.countryCode2 === v) : null
                  setSelectedCountry(c ?? null)
                }}
                className="absolute inset-0 z-10 min-w-0 cursor-pointer opacity-0"
                aria-label="Select country"
              >
                <option value="" disabled={countries.length > 0}>{countries.length === 0 ? 'Loading...' : 'Select country'}</option>
                {countries.map((c) => (
                  <option key={c.id} value={c.countryCode2}>
                    {c.name}{c.coinCode ? ` (${c.coinCode})` : ''} {flagEmoji(c.countryCode2)}
                  </option>
                ))}
              </select>
              {selectedCountry ? (
                <Flag countryCode={selectedCountry.countryCode2} className="h-6 w-6 shrink-0 pointer-events-none sm:h-7 sm:w-7" />
              ) : (
                <span className="pointer-events-none text-sm font-medium text-gray-500">Select country</span>
              )}
              <HiChevronDown className="h-5 w-5 shrink-0 pointer-events-none text-gray-500" />
            </div>
          </div>
        </div>

        {/* Transfer Method dropdown: full row clickable */}
        <div className="mt-3">
          <label className="block text-left text-sm font-medium text-gray-600">{conversionWidget.transferMethodLabel}</label>
          <div className="relative mt-0.5 flex items-center justify-start gap-2 border-b border-gray-300 pb-1.5">
            <select
              value={selectedTransferType ?? ''}
              onChange={(e) => setSelectedTransferType(e.target.value || null)}
              className="absolute inset-0 z-10 min-w-0 cursor-pointer opacity-0"
              aria-label="Select transfer method"
            >
              <option value="" disabled={transferTypes.length > 0}>Select transfer method</option>
              {transferTypes.map((t) => (
                <option key={t} value={t}>{TRANSFER_TYPE_LABELS[t] ?? t}</option>
              ))}
            </select>
            <span className="min-w-0 flex-1 text-left text-base font-medium text-gray-900">
              {selectedTransferType ? (TRANSFER_TYPE_LABELS[selectedTransferType] ?? selectedTransferType) : 'Select transfer method'}
            </span>
            {selectedTransferType && deliveryIcons[TRANSFER_TYPE_LABELS[selectedTransferType]] && (
              <span className="shrink-0 pointer-events-none">
                {(() => {
                  const Icon = deliveryIcons[TRANSFER_TYPE_LABELS[selectedTransferType]]
                  return <Icon className="h-5 w-5 text-gray-500" />
                })()}
              </span>
            )}
            <HiChevronDown className="h-5 w-5 shrink-0 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Supplier dropdown: full row clickable */}
        <div className="mt-3">
          <label className="block text-left text-sm font-medium text-gray-600">{conversionWidget.supplierLabel}</label>
          <div className="relative mt-0.5 flex items-center justify-start gap-2 border-b border-gray-300 pb-1.5">
            <select
              value={selectedSupplier?.supplierUid ?? ''}
              onChange={(e) => {
                const v = e.target.value
                const s = v ? suppliers.find((x) => x.supplierUid === v) : null
                setSelectedSupplier(s ?? null)
              }}
              className="absolute inset-0 z-10 min-w-0 cursor-pointer opacity-0"
              aria-label="Select supplier"
            >
              <option value="" disabled={suppliers.length > 0}>Select supplier</option>
              {suppliers.map((s) => (
                <option key={s.id} value={s.supplierUid}>{s.supplierName}</option>
              ))}
            </select>
            <span className="min-w-0 flex-1 text-left text-base font-medium text-gray-900">
              {selectedSupplier?.supplierName ?? 'Select supplier'}
            </span>
            <HiChevronDown className="h-5 w-5 shrink-0 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Transaction Details: Total Cost first, then Fee (match original rates page order) */}
        <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5 text-left sm:px-4">
          <span className="block text-left text-sm font-medium text-gray-600">Transaction Details</span>
          <div className="mt-1.5 flex flex-col gap-1 text-left">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{conversionWidget.totalCostLabel}</span>
              <span className="font-medium text-gray-900">{formatAmount(totalCost, '₪')}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{conversionWidget.feeLabel}</span>
              <span className="font-medium text-gray-900">
                {feeLoading ? '...' : formatAmount(fee, '₪')}
              </span>
            </div>
          </div>
        </div>

        {/* Get Started CTA */}
        <Link to="services" smooth duration={500} offset={-72} className="mt-5 block">
          <motion.span
            className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl bg-[#3482F1] py-3 text-lg font-bold text-white"
            whileTap={{ scale: 0.99 }}
          >
            {conversionWidget.ctaLabel}
            <HiOutlineArrowRight className="h-5 w-5" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}
