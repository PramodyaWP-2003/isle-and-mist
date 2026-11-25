
import {
  Map,
  CalendarDays,
  Heart,
  MapPin,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import { getToday } from '../../utils/tripGenerator'

function DashboardStats({
  trips = [],
  favorites = [],
}) {
  const reduceMotion = useReducedMotion()

  const today = getToday()

  const upcomingTrips = trips.filter(
    (trip) =>
      trip.preferences?.date &&
      trip.preferences.date >= today
  ).length

  const plannedDestinations = new Set(
    trips.flatMap(
      (trip) => trip.selectedDestinations || []
    )
  ).size

  const statistics = [
    {
      label: 'Saved Trips',
      value: trips.length,
      icon: Map,
      color: 'bg-green-50 text-green-700',
    },
    {
      label: 'Upcoming Trips',
      value: upcomingTrips,
      icon: CalendarDays,
      color: 'bg-blue-50 text-blue-700',
    },
    {
      label: 'Favorites',
      value: favorites.length,
      icon: Heart,
      color: 'bg-rose-50 text-rose-600',
    },
    {
      label: 'Destinations Planned',
      value: plannedDestinations,
      icon: MapPin,
      color: 'bg-amber-50 text-amber-700',
    },
  ]

  return (
    <section aria-label="Travel statistics">

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5">

        {statistics.map((stat, index) => {

          const Icon = stat.icon

          return (
            <motion.article
              key={stat.label}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : index * 0.07,
              }}
              className="bg-white rounded-2xl border border-primary/10 p-4 sm:p-5"
            >

              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${stat.color}`}>

                <Icon size={22} />

              </div>

              <p className="text-primary text-3xl font-semibold mb-2">

                {stat.value}

              </p>

              <p className="text-muted text-xs sm:text-sm">

                {stat.label}

              </p>

            </motion.article>
          )
        })}

      </div>

    </section>
  )
}

export default DashboardStats
