
import { Link } from 'react-router-dom'

import {
  Compass,
  CalendarDays,
  ArrowRight,
  MapPin,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

function ContactCTA() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative section-padding bg-primary overflow-hidden">

      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full border border-white/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-28 -right-28 w-96 h-96 rounded-full border border-white/10"
      />

      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 20 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
        }}
        className="section-container relative text-center text-white"
      >

        <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">

          <Compass
            size={32}
            className="text-accent"
          />

        </div>

        <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4">

          Your Adventure Awaits

        </p>

        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold mb-6">

          Ready to Explore Sri Lanka?

        </h2>

        <p className="max-w-2xl mx-auto text-white/75 text-sm md:text-base leading-relaxed mb-9">

          Discover incredible destinations, experience
          authentic Sri Lankan culture and create a
          personalized journey that suits your interests.

        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">

          <Link
            to="/trip-planner"
            className="inline-flex items-center justify-center gap-3 bg-accent text-primary rounded-full px-7 py-4 text-sm font-semibold hover:bg-white transition-colors"
          >

            <CalendarDays size={19} />

            Plan Your Trip

            <ArrowRight size={18} />

          </Link>

          <Link
            to="/destinations"
            className="inline-flex items-center justify-center gap-3 border border-white/40 text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-white/10 transition-colors"
          >

            <MapPin size={19} />

            Explore Destinations

          </Link>

        </div>

      </motion.div>

    </section>
  )
}

export default ContactCTA
