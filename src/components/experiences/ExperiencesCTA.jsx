
import { Link } from 'react-router-dom'

import {
  Compass,
  CalendarDays,
  ArrowRight,
  MapPin,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'

function ExperiencesCTA() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-primary relative overflow-hidden">

      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[450px] h-[450px] border border-white/10 rounded-full"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[450px] h-[450px] border border-white/10 rounded-full"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 0.6 }}
        className="section-container relative z-10 text-center"
      >

        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">

          <Compass size={42} className="text-accent" />

        </div>

        <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4">
          Make It Your Own
        </p>

        <h2 className="font-heading text-4xl md:text-6xl font-semibold text-white mb-6">
          Create Your Own Adventure
        </h2>

        <p className="max-w-2xl mx-auto text-white/75 text-sm md:text-base leading-relaxed mb-10">
          Combine your favorite destinations and experiences
          into one unforgettable Sri Lankan journey.
          Discover the island your way with Isle &amp; Mist.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/trip-planner"
            className="inline-flex items-center justify-center gap-3 bg-accent text-primary rounded-full px-7 py-4 font-semibold hover:bg-white transition-colors"
          >

            <CalendarDays size={20} />

            Plan My Trip

            <ArrowRight size={18} />

          </Link>

          <Link
            to="/destinations"
            className="inline-flex items-center justify-center gap-3 border border-white/40 text-white rounded-full px-7 py-4 font-medium hover:bg-white hover:text-primary transition-colors"
          >

            <MapPin size={20} />

            Explore Destinations

          </Link>

        </div>

      </motion.div>

    </section>
  )
}

export default ExperiencesCTA
