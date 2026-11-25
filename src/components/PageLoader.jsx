
import { Mountain } from 'lucide-react'

function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[60vh] bg-cream flex items-center justify-center px-5"
    >

      <div className="text-center">

        <div className="relative w-20 h-20 mx-auto mb-6">

          <div className="absolute inset-0 rounded-full border-4 border-primary/10 border-t-primary motion-safe:animate-spin" />

          <div className="absolute inset-0 flex items-center justify-center">

            <Mountain
              size={30}
              className="text-primary"
            />

          </div>

        </div>

        <p className="font-heading text-2xl font-semibold text-primary">

          Isle & Mist

        </p>

        <p className="text-muted text-sm mt-3">

          Preparing your journey...

        </p>

      </div>

    </div>
  )
}

export default PageLoader
