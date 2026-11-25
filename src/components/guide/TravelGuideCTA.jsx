
import { Link } from 'react-router-dom'
import {
  Compass,
  ArrowRight,
  MapPin,
  CheckCircle,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'
import destinations from '../../data/destinations'

function TravelGuideCTA() {
  const reduceMotion = useReducedMotion()

  const backgroundImage =
    destinations.find((item) => item.id === 'sigiriya')?.image ||
    destinations[0]?.image

  const benefits = [
    'Personalized travel itineraries',
    'Estimated travel expenses',
    'Save and customize your trips',
  ]

  return (
    <section className="relative section-padding overflow-hidden bg-primary">

      <img
        src={backgroundImage}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-primary/90" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 0.6 }}
        className="section-container relative z-10 text-center text-white"
      >

        <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6">

          <Compass size={32} className="text-accent" />

        </div>

        <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4">
          Your Adventure Starts Here
        </p>

        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold mb-6">
          Ready to Explore Sri Lanka?
        </h2>

        <p className="max-w-2xl mx-auto text-white/75 leading-relaxed mb-8">
          Now that you know the essentials, create your
          personalized journey and discover the beauty,
          culture and adventure of our island.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">

          {benefits.map((benefit) => (

            <span
              key={benefit}
              className="inline-flex items-center gap-2 text-white/85 text-sm"
            >

              <CheckCircle
                size={18}
                className="text-accent shrink-0"
              />

              {benefit}

            </span>

          ))}

        </div>

        <div className="flex flex-wrap justify-center gap-4">

          <Link
            to="/trip-planner"
            className="inline-flex items-center justify-center gap-3 bg-accent text-primary rounded-full px-7 py-4 font-semibold hover:bg-white transition-colors"
          >
            Plan Your Trip
            <ArrowRight size={19} />
          </Link>

          <Link
            to="/destinations"
            className="inline-flex items-center justify-center gap-3 border border-white/40 text-white rounded-full px-7 py-4 font-medium hover:bg-white/10 transition-colors"
          >
            <MapPin size={19} />
            Explore Destinations
          </Link>

        </div>

      </motion.div>

    </section>
  )
}

export default TravelGuideCTA
