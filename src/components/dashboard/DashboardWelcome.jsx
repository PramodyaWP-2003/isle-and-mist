
import { Link } from 'react-router-dom'

import {
  Compass,
  CalendarPlus,
  ArrowRight,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import destinations from '../../data/destinations'

function DashboardWelcome({ user }) {
  const reduceMotion = useReducedMotion()

  const firstName =
    user?.name?.trim().split(/\s+/)[0] ||
    'Traveler'

  const backgroundImage =
    destinations.find(
      (item) => item.id === 'ella'
    )?.image ||
    destinations[0]?.image

  return (
    <motion.section
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 15 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
      }}
      className="relative overflow-hidden rounded-3xl bg-primary text-white"
    >

      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60" />

      <div className="relative z-10 p-6 sm:p-8 xl:p-12">

        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-accent text-xs mb-6">

          <Compass size={16} />

          Your Personal Travel Space

        </div>

        <h2 className="font-heading text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight mb-4 break-words">

          Welcome back, {firstName}!

        </h2>

        <p className="text-white/80 text-sm leading-relaxed max-w-xl mb-7">

          Your next Sri Lankan adventure awaits.
          Manage your travel plans, discover new
          destinations and create unforgettable memories.

        </p>

        <div className="flex flex-wrap gap-3">

          <Link
            to="/trip-planner"
            className="inline-flex items-center justify-center gap-2 bg-accent text-primary rounded-xl px-5 py-3.5 text-sm font-semibold hover:bg-white transition-colors"
          >

            <CalendarPlus size={19} />

            Plan a New Trip

          </Link>

          <Link
            to="/destinations"
            className="inline-flex items-center justify-center gap-2 border border-white/40 text-white rounded-xl px-5 py-3.5 text-sm font-medium hover:bg-white/10"
          >

            Explore Destinations

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </motion.section>
  )
}

export default DashboardWelcome
