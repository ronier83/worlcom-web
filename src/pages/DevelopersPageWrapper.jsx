import { useState, useEffect } from 'react'
import { Suspense, lazy } from 'react'
import DevelopersMobile from './DevelopersMobile.jsx'

// Redoc only loaded on desktop; mobile gets DevelopersMobile (no chunk load)
const DevelopersPage = lazy(() => import('./Developers.jsx'))

const MOBILE_BREAKPOINT = 768

/**
 * Renders lightweight Developers on mobile (no Redoc), full Redoc docs on desktop.
 * Redoc chunk is only requested when viewport is desktop, so mobile never hits chunk-load failures.
 */
export default function DevelopersPageWrapper() {
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    const set = () => setIsMobile(mql.matches)
    set()
    mql.addEventListener('change', set)
    return () => mql.removeEventListener('change', set)
  }, [])

  // Unknown until after mount (avoid hydration mismatch; show loading briefly)
  if (isMobile === null) {
    return (
      <div className="flex min-h-screen items-center justify-center font-sans text-gray-500">
        Loading…
      </div>
    )
  }

  if (isMobile) {
    return <DevelopersMobile />
  }

  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center font-sans">Loading…</div>}>
      <DevelopersPage />
    </Suspense>
  )
}
