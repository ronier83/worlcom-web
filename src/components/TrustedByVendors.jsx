/**
 * White section: "Trusted by Leading Financial Institutions Worldwide" with vendor logos.
 * Placed below Our Services. Only logos that downloaded as valid SVGs from worldcomfinance.com/assets/MTO/ are shown.
 * (Several MTO paths return the site HTML instead of SVGs; add more when correct URLs are available.)
 */
const vendorLogos = [
  { name: 'B2B Trust', src: '/vendor-logos/b2b-trust.svg' },
  { name: 'Cebuana', src: '/vendor-logos/cebuana.svg' },
  { name: 'Korona', src: '/vendor-logos/korona.svg' },
  { name: 'RIA', src: '/vendor-logos/ria.svg' },
  { name: 'Thunes', src: '/vendor-logos/thunes.svg' },
]

export default function TrustedByVendors() {
  return (
    <section id="trusted-by-vendors" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-black md:text-3xl">
          Trusted by Leading Financial Institutions Worldwide
        </h2>
        {/* Infinite horizontal scroll: duplicate row so -50% translate loops seamlessly */}
        <div className="mt-12 overflow-hidden" aria-hidden>
          <div className="flex w-max animate-vendor-scroll items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {[...vendorLogos, ...vendorLogos].map((vendor, i) => (
              <div
                key={`${vendor.name}-${i}`}
                className="flex h-14 w-28 flex-shrink-0 items-center justify-center sm:h-16 sm:w-32 md:h-20 md:w-40"
              >
                <img
                  src={vendor.src}
                  alt={i < vendorLogos.length ? vendor.name : ''}
                  loading="lazy"
                  className="max-h-full w-auto max-w-full object-contain"
                  {...(i >= vendorLogos.length && { 'aria-hidden': true })}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
