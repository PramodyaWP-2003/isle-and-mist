
import { Link } from 'react-router-dom'

import {
  Clock,
  Users,
  MapPin,
  ArrowRight,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'

function TourExploreCard({ tour, details, index = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : index * 0.08,
      }}
      className="group bg-white rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full"
    >

      <div className="relative h-64 overflow-hidden">

        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <span className="absolute top-4 left-4 bg-white/90 text-primary rounded-full px-4 py-2 text-xs font-semibold">
          {tour.category}
        </span>

      </div>

      <div className="p-6 flex flex-col flex-1">

        <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
          {tour.title}
        </h3>

        <div className="space-y-3 mb-5">

          <div className="flex items-center gap-2 text-muted text-sm">
            <Clock size={18} className="text-secondary shrink-0" />
            {details.days} Days / {details.nights} Nights
          </div>

          <div className="flex items-center gap-2 text-muted text-sm">
            <Users size={18} className="text-secondary shrink-0" />
            {details.groupSize}
          </div>

          <div className="flex items-center gap-2 text-muted text-sm">
            <MapPin size={18} className="text-secondary shrink-0" />
            {Array.isArray(tour.locations)
              ? tour.locations.join(' • ')
              : tour.locations}
          </div>

        </div>

        <p className="text-muted text-sm leading-relaxed mb-6">
          {tour.description}
        </p>

        <div className="mt-auto border-t border-primary/10 pt-5 flex flex-wrap items-center justify-between gap-4">

          <div>
            <p className="text-muted text-xs">
              From / per person
            </p>

            <p className="text-primary text-3xl font-semibold">
              ${tour.price}
            </p>
          </div>

          <Link
            to={`/tour-packages/${tour.id}`}
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
          >
            View Package
            <ArrowRight size={17} />
          </Link>

        </div>

      </div>

    </motion.article>
  )
}

export default TourExploreCard
