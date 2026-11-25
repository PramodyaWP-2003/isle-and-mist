
import {
  Clock,
  Activity,
  ArrowRight,
  MapPin,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'

function ExperienceExploreCard({
  experience,
  details,
  onExplore,
  index = 0,
}) {
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

      {/* Experience Image */}

      <div className="relative h-64 overflow-hidden">

        <img
          src={experience.image}
          alt={experience.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-semibold text-primary capitalize">
          {experience.id}
        </span>

      </div>

      {/* Experience Information */}

      <div className="p-6 flex flex-col flex-1">

        <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
          {details.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-6">
          {details.overview}
        </p>

        <div className="space-y-3 mb-6">

          <div className="flex items-center gap-3 text-muted text-sm">
            <Clock size={18} className="text-secondary shrink-0" />
            {details.duration}
          </div>

          <div className="flex items-center gap-3 text-muted text-sm">
            <Activity size={18} className="text-secondary shrink-0" />
            {details.difficulty}
          </div>

          <div className="flex items-center gap-3 text-muted text-sm">
            <MapPin size={18} className="text-secondary shrink-0" />

            {details.destinations.length}{' '}
            {details.destinations.length === 1
              ? 'Featured Destination'
              : 'Featured Destinations'}
          </div>

        </div>

        <button
          type="button"
          onClick={() => onExplore(experience.id)}
          className="mt-auto pt-5 border-t border-primary/10 flex items-center justify-between gap-3 text-primary text-sm font-semibold hover:text-secondary transition-colors text-left"
        >

          Explore Experience

          <ArrowRight
            size={19}
            className="shrink-0 group-hover:translate-x-1 transition-transform"
          />

        </button>

      </div>

    </motion.article>
  )
}

export default ExperienceExploreCard
