
import { Link } from 'react-router-dom'

import {
  Mountain,
  Compass,
  Home,
  ArrowRight,
  MapPinOff,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

function NotFound() {
  const reduceMotion = useReducedMotion()

  return (
    <main className="relative min-h-screen bg-cream flex items-center justify-center overflow-hidden px-5 py-16">

      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/20"
      />

      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 20 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
        }}
        className="relative z-10 max-w-2xl text-center"
      >

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-heading text-2xl font-semibold mb-10"
        >

          <Mountain size={32} />

          Isle & Mist

        </Link>

        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">

          <MapPinOff
            size={46}
            className="text-secondary"
          />

        </div>

        <p className="font-heading text-[100px] sm:text-[150px] font-bold text-primary leading-none">

          404

        </p>

        <p className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold mt-5 mb-4">

          Page Not Found

        </p>

        <h1 className="font-heading text-3xl sm:text-5xl text-primary font-semibold leading-tight mb-5">

          Looks Like You've Lost Your Way

        </h1>

        <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-9">

          Even the best travelers sometimes take a
          wrong turn. The page you are looking for
          may have been moved or does not exist.

          Let's get your journey back on track.

        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
          >

            <Home size={19} />

            Back to Home

          </Link>

          <Link
            to="/destinations"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-4 rounded-xl text-sm font-medium hover:bg-primary hover:text-white transition-colors"
          >

            <Compass size={19} />

            Explore Destinations

            <ArrowRight size={17} />

          </Link>

        </div>

        <p className="text-muted text-xs mt-10">

          Discover the Island. Embrace the Mist.

        </p>

      </motion.div>

    </main>
  )
}

export default NotFound
