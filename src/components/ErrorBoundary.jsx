
import { Component } from 'react'

import {
  AlertTriangle,
  RefreshCw,
  Home,
} from 'lucide-react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error(
        'Isle & Mist application error:',
        error,
        errorInfo
      )
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-cream flex items-center justify-center px-5 py-16">

          <div className="max-w-xl bg-white border border-primary/10 rounded-3xl shadow-sm p-8 sm:p-12 text-center">

            <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6">

              <AlertTriangle
                size={38}
                className="text-amber-600"
              />

            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-4">

              Something Went Wrong

            </h1>

            <p className="text-muted text-sm leading-relaxed mb-8">

              We encountered an unexpected problem.
              Please reload the page or return to
              the homepage to continue your journey.

            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3.5 rounded-xl text-sm font-medium"
              >

                <RefreshCw size={18} />

                Reload Page

              </button>

              <a
                href={import.meta.env.BASE_URL}
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3.5 rounded-xl text-sm font-medium"
              >

                <Home size={18} />

                Back to Home

              </a>

            </div>

          </div>

        </main>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
