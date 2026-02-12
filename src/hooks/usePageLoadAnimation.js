import { useState, useEffect } from 'react'

/**
 * Returns false on first page load in the session, true on subsequent loads (e.g. refresh).
 * Used to skip initial={{ opacity: 0 }} on first paint so content does not flash.
 * We must NOT set state to true after first render, or components re-render with
 * initial={{ opacity: 0 }} and flash. We only persist to sessionStorage so the
 * next load (same session) gets scroll animations.
 */
export function usePageLoadAnimation() {
  const [hasLoaded] = useState(() => {
    return typeof sessionStorage !== 'undefined' && sessionStorage.getItem('page-loaded') === 'true'
  })

  useEffect(() => {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('page-loaded', 'true')
    }
    // Do not setHasLoaded(true) here — it would re-render with shouldAnimate true
    // and cause a flash as motion elements get initial={{ opacity: 0 }}.
  }, [])

  return hasLoaded
}
