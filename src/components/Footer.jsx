import { Link } from 'react-scroll'
import { footer, sitemap } from '../data/content'

/**
 * Footer: Rewire-style sitemap columns + company info, contact, copyright.
 */
export default function Footer() {
  return (
    <footer id="developers" className="bg-black text-white">
      {/* Sitemap - Rewire-style multi-column links */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {sitemap.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <a href={`mailto:${footer.email}`} className="mt-2 block text-sm text-white/70 hover:text-white">
              {footer.email}
            </a>
            <a href={`tel:${footer.phone.replace(/-/g, '')}`} className="mt-1 block text-sm text-white/70 hover:text-white">
              {footer.phone}
            </a>
          </div>
          <div>
            <p className="font-semibold">Navigate</p>
            <div className="mt-2 flex flex-col gap-2">
              <Link to="services" smooth duration={500} offset={-72} className="text-sm text-white/70 hover:text-white">Services</Link>
              <Link to="rates" smooth duration={500} offset={-72} className="text-sm text-white/70 hover:text-white">Rates</Link>
              <Link to="contact" smooth duration={500} offset={-72} className="text-sm text-white/70 hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          {footer.copyright}
        </div>
      </div>
    </footer>
  )
}
