
import { Link } from 'react-router-dom'

import {
  Mountain,
  ArrowLeft,
  CheckCircle,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import destinations from '../../data/destinations'

const features = [
  'Discover amazing destinations',
  'Create personalized travel plans',
  'Save your favorite itineraries',
]

function AuthLayout({
  children,
  mode = 'login',
}) {
  const reduceMotion = useReducedMotion()

  const isRegister = mode === 'register'

  const backgroundImage =
    destinations.find(
      (item) => item.id === 'ella'
    )?.image ||
    destinations[0]?.image

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-cream">

      {/* Left Visual Section */}

      <section className="hidden lg:flex relative min-h-screen overflow-hidden bg-primary text-white">

        <img
          src={backgroundImage}
          alt="Scenic Sri Lankan highlands"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-primary/80" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative z-10 flex flex-col justify-between w-full p-12 xl:p-16">

          <Link
            to="/"
            className="inline-flex items-center gap-3 self-start"
          >

            <Mountain
              size={40}
              className="text-accent"
            />

            <div>

              <h2 className="font-heading text-3xl font-semibold">
                Isle & Mist
              </h2>

              <p className="text-white/70 text-xs">
                Discover Sri Lanka
              </p>

            </div>

          </Link>

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
            }}
            className="max-w-xl py-16"
          >

            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-6">

              {isRegister
                ? 'Start Something Beautiful'
                : 'Your Journey Begins Here'}

            </p>

            <h1 className="font-heading text-5xl xl:text-7xl font-semibold leading-tight mb-7">

              {isRegister
                ? 'Your Adventure Starts Here.'
                : 'Discover the Island. Embrace the Mist.'}

            </h1>

            <p className="text-white/80 text-sm xl:text-base leading-relaxed mb-10">

              Discover breathtaking landscapes,
              authentic culture and unforgettable
              experiences across Sri Lanka.

            </p>

            <div className="space-y-5">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >

                  <CheckCircle
                    size={21}
                    className="text-accent shrink-0"
                  />

                  <span className="text-sm">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          <p className="text-white/60 text-xs">

            © {new Date().getFullYear()} Isle & Mist.
            Discover Sri Lanka your way.

          </p>

        </div>

      </section>

      {/* Right Form Section */}

      <section className="flex flex-col min-w-0 px-5 sm:px-10 lg:px-12 py-8">

        <div className="w-full max-w-md mx-auto">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary text-sm font-medium hover:text-primary"
          >

            <ArrowLeft size={18} />

            Back to Home

          </Link>

          <Link
            to="/"
            className="flex lg:hidden items-center justify-center gap-3 mt-10"
          >

            <Mountain
              size={35}
              className="text-primary"
            />

            <span className="font-heading text-3xl font-semibold text-primary">

              Isle & Mist

            </span>

          </Link>

        </div>

        <div className="flex-1 flex items-center justify-center py-10">

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
            }}
            className="w-full max-w-md"
          >

            {children}

          </motion.div>

        </div>

        <p className="text-center text-muted text-xs">

          Isle & Mist — University Project

        </p>

      </section>

    </main>
  )
}

export default AuthLayout
