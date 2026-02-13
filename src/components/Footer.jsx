import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import { footer } from '../data/content'

/**
 * Footer: Rewire-style sitemap columns + company info, contact, copyright.
 */
export default function Footer() {
  return (
    <footer id="developers" className="font-google-sans bg-black text-white">
      {/* Bottom: company, contact, navigate, copyright */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="font-semibold">{footer.company}</p>
            <p className="mt-2 text-sm text-white/70">Licenses No: {footer.licenses}</p>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <div className="mt-2 flex flex-col gap-2">
              {footer.links.map((link) =>
                link.href.startsWith('/') ? (
                  <RouterLink
                    key={link.label}
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white/90"
                  >
                    {link.label}
                  </RouterLink>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white/90"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <a href={`mailto:${footer.email}`} className="mt-2 block text-sm text-white/70">
              {footer.email}
            </a>
            <a href={`tel:${footer.phone.replace(/-/g, '')}`} className="mt-1 block text-sm text-white/70">
              {footer.phone}
            </a>
          </div>
          <div>
            <p className="font-semibold">Navigate</p>
            <div className="mt-2 flex flex-col gap-2">
              <RouterLink to="/about" className="text-sm text-white/70 hover:text-white/90">About</RouterLink>
              <Link to="services" smooth duration={500} offset={-72} className="text-sm text-white/70">Services</Link>
              <RouterLink to="/rates" className="text-sm text-white/70 hover:text-white/90">Rates</RouterLink>
              <Link to="contact" smooth duration={500} offset={-72} className="text-sm text-white/70">Contact</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold">Developers</p>
            <div className="mt-2 flex flex-col gap-2">
              <RouterLink to="/developers" className="text-sm text-white/70 hover:text-white/90">API & docs</RouterLink>
            </div>
          </div>
        </div>
        {/* Divider: black logo above copyright */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <img src="/logoWhite.PNG" alt="Worldcom Finance" className="mx-auto h-12 w-auto object-contain sm:h-14" />
          {/* Social links: Facebook, LinkedIn, Instagram */}
          <div className="mx-auto mt-4 flex justify-center gap-4">
            <a href="https://www.facebook.com/@WorldComFinanceLtd" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white" aria-label="Facebook">
              <img src="/images/facebook.svg" alt="" className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
            </a>
            <a href="https://www.linkedin.com/company/worldcom-finance" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white" aria-label="LinkedIn">
              <img src="/images/linkedin.svg" alt="" className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
            </a>
            <a href="https://www.instagram.com/worldcom.official?igsh=bzkxYml3eWMyZHY%3D" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white" aria-label="Instagram">
              <img src="/images/instagram.svg" alt="" className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
            </a>
          </div>
          {/* App store badges */}
          <div className="mx-auto mt-4 flex flex-wrap justify-center gap-3 pt-[4px]">
            <a href="https://apps.apple.com/us/app/worldcom-finance/id1557852337" target="_blank" rel="noopener noreferrer" className="inline-block" aria-label="Download on the App Store">
              <img src="/images/app-ios.svg" alt="" className="h-10 w-auto object-contain sm:h-11" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.worldcom.finance" target="_blank" rel="noopener noreferrer" className="inline-block" aria-label="Get it on Google Play">
              <img src="/images/app-android.svg" alt="" className="h-10 w-auto object-contain sm:h-11" />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
