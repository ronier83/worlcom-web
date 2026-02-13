import { Component } from 'react'
import { Link } from 'react-router-dom'

/**
 * Catches render errors (e.g. lazy chunk load failure, Redoc crash on mobile)
 * and shows a fallback instead of a blank white page.
 */
export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Errors already captured in state; errorInfo could be logged to a service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 font-sans">
          <div className="max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h1 className="text-lg font-semibold text-gray-900">Something went wrong</h1>
            <p className="mt-2 text-sm text-gray-600">
              This page could not be loaded. Try again or go back to the home page.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Link
                to="/"
                className="inline-flex justify-center rounded-xl bg-[#3482F1] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Go to home
              </Link>
              <button
                type="button"
                onClick={() => this.setState({ hasError: false, error: null })}
                className="inline-flex justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
