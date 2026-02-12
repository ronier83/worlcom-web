import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { privacyModal } from '../data/content'

const STORAGE_KEY = 'worldcom-privacy-accepted'

/**
 * Privacy policy modal on first visit. Shows once until user confirms and accepts.
 */
export default function PrivacyModal() {
  const [visible, setVisible] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50"
            onClick={() => {}}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 z-[101] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <h3 className="text-lg font-semibold text-black">{privacyModal.title}</h3>
            <p className="mt-4 text-black/80">{privacyModal.body}</p>
            <label className="mt-6 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-black/80">{privacyModal.checkboxLabel}</span>
            </label>
            <button
              type="button"
              onClick={handleContinue}
              disabled={!confirmed}
              className="mt-8 w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {privacyModal.buttonLabel}
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
