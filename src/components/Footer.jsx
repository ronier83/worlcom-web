import { Link } from 'react-scroll'
import { footer } from '../data/content'

/**
 * Footer: Rewire-style sitemap columns + company info, contact, copyright.
 */
export default function Footer() {
  return (
    <footer id="developers" className="bg-black text-white">
      {/* Bottom: company, contact, navigate, copyright */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold">{footer.company}</p>
            <p className="mt-2 text-sm text-white/70">Licenses No: {footer.licenses}</p>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <div className="mt-2 flex flex-col gap-2">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70"
                >
                  {link.label}
                </a>
              ))}
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
              <Link to="services" smooth duration={500} offset={-72} className="text-sm text-white/70">Services</Link>
              <Link to="rates" smooth duration={500} offset={-72} className="text-sm text-white/70">Rates</Link>
              <Link to="contact" smooth duration={500} offset={-72} className="text-sm text-white/70">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          {footer.copyright}
        </div>
        {/* Divider and black logo */}
        <div className="mt-8 border-t border-white/20 pt-8 flex justify-center">
          <img src="/blackLogo.jpg" alt="Worldcom Finance" className="h-12 w-auto object-contain sm:h-14" />
        </div>
      </div>
    </footer>
  )
}
