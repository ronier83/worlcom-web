import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { privacyModal } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

const STORAGE_KEY = 'worldcom-privacy-accepted'

/**
 * Privacy policy modal on first visit. Shows once until user confirms and accepts.
 */
export default function PrivacyModal() {
  const [visible, setVisible] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const shouldAnimate = usePageLoadAnimation()

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) setVisible(true)
  }, [])

  function handleContinue() {
    if (!confirmed) return
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={shouldAnimate ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50"
            onClick={() => {}}
          />
          <motion.div
            initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-0 left-0 right-0 z-[101] flex max-h-[90vh] w-full flex-col rounded-t-2xl bg-white p-6 shadow-2xl sm:bottom-auto sm:left-1/2 sm:right-auto sm:top-1/2 sm:max-h-[85vh] sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:p-8"
          >
            {/* On mobile: content centered, agreement at bottom; on desktop: standard layout */}
            <div className="flex min-h-0 flex-1 flex-col sm:min-h-auto">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-black">{privacyModal.title}</h3>
                <p className="mt-4 text-black/80">{privacyModal.body}</p>
              </div>
              {/* Checkbox + button: centered and at bottom on mobile */}
              <div className="mt-6 flex flex-1 flex-col justify-end gap-4 sm:mt-8 sm:flex-initial">
                <label className="flex cursor-pointer items-center justify-center gap-3 sm:justify-start">
                  <input
                    type="checkbox"
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    className="h-5 w-5 shrink-0 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-center text-sm text-black/80 sm:text-left">{privacyModal.checkboxLabel}</span>
                </label>
                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={!confirmed}
                  className="w-full rounded-xl bg-primary py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {privacyModal.buttonLabel}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
