/**
 * White section: "Trusted by Leading Financial Institutions Worldwide" with vendor logos.
 * Logos live in public/vendor-logos-png/ as PNG files (extracted from SVG patterns)
 * Some logos remain as SVG in public/vendor-logos/ (kasikornthai, land bank, pamlyang)
 * Filenames with spaces use %20 in the path.
 */
const vendorLogos = [
  { name: 'AUB', src: '/vendor-logos-png/aub.png' },
  { name: 'B2B Trust', src: '/vendor-logos-png/b2b-trust.png' },
  { name: 'BDO', src: '/vendor-logos-png/bdo.png' },
  { name: 'BOC', src: '/vendor-logos-png/boc.png' },
  { name: 'BPI', src: '/vendor-logos-png/bpi.png' },
  { name: 'Cebuana', src: '/vendor-logos-png/cebuana.png' },
  { name: 'DFCC Bank', src: '/vendor-logos-png/dfcc%20bank.png' },
  { name: 'Inteli', src: '/vendor-logos-png/inteli.png' },
  { name: 'Kasikorn Thai', src: '/vendor-logos/kasikornthai.svg' }, // Pure SVG
  { name: 'Korona', src: '/vendor-logos-png/korona.png' },
  { name: 'Land Bank', src: '/vendor-logos/land%20bank.svg' }, // Pure SVG
  { name: 'Pamlyang', src: '/vendor-logos/pamlyang.svg' }, // Pure SVG
  { name: 'PUB', src: '/vendor-logos-png/pub.png' },
  { name: 'RIA', src: '/vendor-logos-png/ria.png' },
  { name: 'Sampath', src: '/vendor-logos-png/sampath.png' },
  { name: 'Siam Commercial Bank', src: '/vendor-logos-png/siam.png' },
  { name: 'Thunes', src: '/vendor-logos-png/thunes.png' },
  { name: 'Union Pay', src: '/vendor-logos-png/union%20pay.png' },
  { name: 'Uption', src: '/vendor-logos-png/uption.png' },
  { name: 'Yes Bank', src: '/vendor-logos-png/yes%20bank.png' },
]

// Split logos between the two rows so each logo appears in only one row
const mid = Math.ceil(vendorLogos.length / 2)
const row1Logos = vendorLogos.slice(0, mid)
const row2Logos = vendorLogos.slice(mid)

function LogoStrip({ logos, scrollRight, rowId }) {
  const duplicated = [...logos, ...logos]

  return (
    <div
      className={`flex w-max items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 ${scrollRight ? 'animate-vendor-scroll-right' : 'animate-vendor-scroll'}`}
    >
      {duplicated.map((vendor, i) => (
        <div
          key={`${rowId}-${vendor.name}-${i}`}
          className="flex h-14 w-28 flex-shrink-0 items-center justify-center sm:h-16 sm:w-32 md:h-20 md:w-40 vendor-logo-wrapper"
        >
          <img
            src={vendor.src}
            alt={i < logos.length ? vendor.name : ''}
            className="max-h-full w-auto max-w-full object-contain vendor-logo"
            {...(i >= logos.length && { 'aria-hidden': true })}
          />
        </div>
      ))}
    </div>
  )
}

export default function TrustedByVendors() {
  return (
    <section id="trusted-by-vendors" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-black md:text-3xl">
          Trusted by Leading Financial Institutions Worldwide
        </h2>
        {/* Two rows in scissors: different logos per row; row 1 left, row 2 right, second row offset */}
        <div className="mt-12 space-y-6" aria-hidden>
          <div className="overflow-hidden">
            <LogoStrip logos={row1Logos} scrollRight={false} rowId="r1" />
          </div>
          <div className="overflow-hidden pl-[20%]">
            <LogoStrip logos={row2Logos} scrollRight rowId="r2" />
          </div>
        </div>
      </div>
    </section>
  )
}
