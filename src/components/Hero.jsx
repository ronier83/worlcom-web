import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { hero } from '../data/content'
import ConversionWidget from './ConversionWidget'

/**
 * Company logo from asset: white shapes only (black background and dark accents removed).
 * Fill #F48F47. Always in document flow so it never appears behind text.
 */
function HeroLogoMark() {
  return (
    <svg
      className="h-[100px] w-[67px] shrink-0 opacity-50 sm:h-[120px] sm:w-[81px] md:opacity-60 lg:h-[180px] lg:w-[122px] lg:opacity-70"
      viewBox="0 0 231 349"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Top white shape (was #FBFBFB) */}
      <path
        d="M0 0 C3.22548153 1.40678806 5.25616875 3.06278555 7.64453125 5.6328125 C8.32193359 6.35726562 8.99933594 7.08171875 9.69726562 7.828125 C10.74430664 8.96507812 10.74430664 8.96507812 11.8125 10.125 C12.49892578 10.85976563 13.18535156 11.59453125 13.89257812 12.3515625 C17.80220622 16.55339553 21.62060746 20.82413067 25.38549805 25.15576172 C27.71210897 27.81343885 30.10297654 30.40557461 32.5 33 C36.14265256 36.95498616 39.73501574 40.94564016 43.2578125 45.0078125 C46.07705588 48.23161098 48.95793138 51.39972267 51.828125 54.578125 C53.65744304 56.61801202 55.45965658 58.67603782 57.25 60.75 C59.44750448 63.28479586 61.70019675 65.75334216 64.0078125 68.1875 C85.75495668 91.15028331 85.75495668 91.15028331 86.375 103 C86.01143401 110.44583142 82.89770492 115.61175541 78.20703125 121.23828125 C70.8508553 127.11020223 62.25702905 126.41246783 53.32226562 126.34057617 C51.84327207 126.33972886 50.36427725 126.34020708 48.88528442 126.34190369 C44.88990589 126.342761 40.89480005 126.32517837 36.89948463 126.30418181 C32.71681746 126.2853707 28.53414337 126.28366109 24.35144043 126.28010559 C16.43971977 126.27079811 8.52812414 126.24620198 0.61645842 126.21605712 C-8.3944207 126.18247263 -17.40530594 126.16601694 -26.41623211 126.15097082 C-44.94423993 126.11965118 -63.47207645 126.06465542 -82 126 C-82 110.16 -82 94.32 -82 78 C-38.44 77.505 -38.44 77.505 6 77 C3.03 73.7 0.06 70.4 -3 67 C-6.375 63.125 -6.375 63.125 -8.0546875 61.1953125 C-10.97172328 57.90339662 -13.95717593 54.67464682 -16.93725586 51.43994141 C-20.20623767 47.88519955 -23.39990308 44.27415029 -26.5625 40.625 C-28.29549636 38.66596063 -30.11339257 36.81114313 -32 35 C-30.68516427 32.08165783 -29.28366724 30.05079071 -26.98828125 27.828125 C-26.39877686 27.25022217 -25.80927246 26.67231934 -25.2019043 26.0769043 C-24.57840088 25.47402588 -23.95489746 24.87114746 -23.3125 24.25 C-18.91188533 19.92952806 -14.64962667 15.59785998 -10.6640625 10.88671875 C-7.30232704 7.07517362 -3.62901141 3.55494995 0 0 Z"
        fill="#F48F47"
        transform="translate(135,31)"
      />
      {/* Bottom white shape (was #FBFBFA) */}
      <path
        d="M0 0 C1.45943673 0.00113012 2.91887574 0.00049141 4.37831116 -0.00177002 C8.31587158 -0.00291169 12.25293872 0.02050801 16.1903851 0.04852581 C20.31431109 0.07363144 24.43824998 0.07588865 28.5622406 0.08062744 C36.36064524 0.09303043 44.15882398 0.1258155 51.95712942 0.1660254 C60.83984574 0.21082677 69.72257317 0.23275113 78.60537446 0.25280714 C96.86784815 0.29455079 115.13001243 0.36786936 133.39233398 0.45410156 C133.39233398 16.29410156 133.39233398 32.13410156 133.39233398 48.45410156 C104.35233398 48.45410156 75.31233398 48.45410156 45.39233398 48.45410156 C49.52387612 53.175864 53.63942001 57.85094761 57.89233398 62.45410156 C61.51046895 66.38199362 65.07574334 70.34702348 68.57202148 74.38378906 C71.68019218 77.91883299 74.87535834 81.37499894 78.06030273 84.84082031 C80.26647006 87.31305807 82.3487286 89.84674296 84.39233398 92.45410156 C82.99942815 95.56712323 81.35832777 97.7798931 79.01342773 100.24707031 C78.3434375 100.95573242 77.67344727 101.66439453 76.9831543 102.39453125 C76.27255859 103.13606445 75.56196289 103.87759766 74.82983398 104.64160156 C74.10763672 105.4024707 73.38543945 106.16333984 72.64135742 106.94726562 C68.19917461 111.61285413 63.68944988 116.19594729 59.09936523 120.71582031 C57.02047777 122.83276521 55.15978082 125.0718906 53.39233398 127.45410156 C49.3908012 125.87577076 47.16056195 123.25585371 44.32983398 120.07910156 C43.3547741 118.99298401 42.37950766 117.90705184 41.40405273 116.82128906 C40.90695801 116.2640918 40.40986328 115.70689453 39.89770508 115.1328125 C37.9673759 112.98021059 36.00919828 110.85422109 34.04882812 108.72900391 C30.05668203 104.40077191 26.12379847 100.02886827 22.26733398 95.57910156 C19.37314063 92.29901576 16.40014507 89.09142099 13.43701172 85.8737793 C10.90493282 83.11936728 8.4019813 80.34667658 5.95483398 77.51660156 C2.84269189 73.92451466 -0.37640562 70.43860019 -3.60766602 66.95410156 C-7.41619263 62.84672964 -11.18371003 58.71871527 -14.83032227 54.46582031 C-16.19932948 52.91628468 -17.61167775 51.4049657 -19.04125977 49.91113281 C-26.34733268 42.2142447 -33.03303119 34.06801296 -33.85766602 23.14160156 C-33.3755312 16.03011302 -30.29626218 11.70310831 -25.91235352 6.34863281 C-18.08167431 -0.08845094 -9.75855536 -0.10642844 0 0 Z"
        fill="#F48F47"
        transform="translate(45.607666015625,185.5458984375)"
      />
    </svg>
  )
}

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
    <section id="hero" className="relative overflow-hidden bg-[#3482F1] pt-14 pb-20 md:pt-20 md:pb-24">
      {/* Background: globe/blobs behind calculator (right); logo is in flow, never behind text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <HeroBgGraphic />
      </div>

      {/* Tighter max-width so hero stays compact on xl/2xl and beyond */}
      <div className="relative z-10 mx-auto max-w-6xl pl-2 pr-4 sm:pl-4 sm:pr-6 lg:pl-4 lg:pr-8">
        {/* Compact gap at all breakpoints; headline size unchanged */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          {/* Left: logo then text — logo above on small, to the left on lg (always in flow, never behind) */}
          <div className="relative flex min-w-0 flex-1 flex-col text-center md:min-w-[420px] md:shrink-0 lg:flex-row lg:items-center lg:gap-6 lg:min-w-[480px] lg:max-w-xl lg:text-left">
            <div className="flex justify-center pb-2 lg:shrink-0 lg:pb-0 lg:justify-start">
              <HeroLogoMark />
            </div>
            <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 overflow-visible text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-5xl"
            >
              <span className="block whitespace-nowrap">{hero.headlineLines?.[0] ?? hero.headline}</span>
              <span className="block whitespace-nowrap">{hero.headlineLines?.[1] ?? ''}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-10 mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl lg:mx-0"
            >
              {hero.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 mt-10 flex flex-nowrap items-center justify-center gap-4 lg:justify-start"
            >
              <Link
                to="services"
                smooth
                duration={500}
                offset={-72}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-white px-5 py-2.5 text-base font-semibold text-[#3482F1] shadow-lg transition hover:bg-white/95"
              >
                {hero.ctaLabel}
              </Link>
              <Link
                to="money-transfer"
                smooth
                duration={500}
                offset={-72}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border-2 border-white bg-transparent px-5 py-2.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Money Transfer
              </Link>
            </motion.div>
            </div>
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
