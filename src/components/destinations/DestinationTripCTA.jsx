
import { Link } from 'react-router-dom'

import {
  Compass,
  CalendarDays,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'

const benefits = [
  'Personalized Itinerary',
  'Flexible Planning',
  'Discover More',
]

function DestinationTripCTA({ destination }) {
  const reduceMotion = useReducedMotion()

  const tripParams = new URLSearchParams({
    destination: destination.id,
  })

  return (
    <section className="section-padding bg-primary relative overflow-hidden">

      {/* Decorative Background */}

      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-white/10"
      />

      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 25 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
        }}
        className="section-container relative z-10 text-center"
      >

        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">

          <Compass
            size={42}
            className="text-accent"
          />

        </div>

        <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4">

          Your Next Adventure Awaits

        </p>

        <h2 className="font-heading text-4xl md:text-6xl text-white font-semibold mb-6">

          Ready to Explore {destination.name}?

        </h2>

        <p className="text-white/75 max-w-2xl mx-auto leading-relaxed text-sm md:text-base mb-8">

          Create your own personalized Sri Lankan
          adventure and discover unforgettable
          experiences in {destination.name}.

        </p>

        {/* Benefits */}

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">

          {benefits.map((benefit) => (

            <div
              key={benefit}
              className="flex items-center gap-2 text-white/90 text-sm"
            >

              <CheckCircle
                size={18}
                className="text-accent"
              />

              {benefit}

            </div>

          ))}

        </div>

        {/* Action Buttons */}

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to={`/trip-planner?${tripParams.toString()}`}
            className="inline-flex items-center justify-center gap-3 bg-accent text-primary rounded-full px-7 py-4 font-semibold hover:bg-white transition-colors"
          >

            <CalendarDays size={20} />

            Plan My Trip

            <ArrowRight size={18} />

          </Link>

          <Link
            to="/tour-packages"
            className="inline-flex items-center justify-center gap-3 border border-white/40 text-white rounded-full px-7 py-4 font-medium hover:bg-white hover:text-primary transition-colors"
          >

            Explore Tour Packages

            <ArrowRight size={18} />

          </Link>

        </div>

      </motion.div>

    </section>
  )
}

export default DestinationTripCTA
