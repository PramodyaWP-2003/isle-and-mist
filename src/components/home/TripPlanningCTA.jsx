
import { Link } from 'react-router-dom'
import {
  Compass,
  CalendarDays,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'

import backgroundImage from '../../assets/images/trip-planner-bg.png'

const features = [
  'Personalized itineraries',
  'Flexible planning',
  'Free to explore',
]

function TripPlanningCTA() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-primary/80" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Main Content */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 30 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
        }}
        className="section-container relative z-10 text-center text-white py-20"
      >

        {/* Compass Icon */}

        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">

          <Compass
            size={38}
            strokeWidth={1.5}
            className="text-accent"
          />

        </div>

        {/* Subtitle */}

        <p className="text-accent uppercase tracking-widest text-xs md:text-sm font-medium mb-5">
          Your Journey Starts Here
        </p>

        {/* Main Heading */}

        <h2 className="font-heading text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto mb-6">

          Ready to Discover Your Sri Lanka?

        </h2>

        {/* Description */}

        <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">

          From misty mountains to golden beaches,
          create a journey that is uniquely yours.
          Your unforgettable island adventure
          begins with a single step.

        </p>

        {/* CTA Buttons */}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            to="/trip-planner"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-primary px-8 py-4 rounded-full font-semibold text-sm hover:bg-white transition-colors duration-300"
          >

            <CalendarDays size={20} />

            Plan My Trip

            <ArrowRight size={19} />

          </Link>

          <Link
            to="/destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white/50 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-white hover:text-primary transition-colors duration-300"
          >

            Explore Destinations

          </Link>

        </div>

        {/* Additional Features */}

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-10">

          {features.map((feature) => (

            <div
              key={feature}
              className="flex items-center gap-2 text-white/80 text-xs md:text-sm"
            >

              <CheckCircle
                size={17}
                className="text-accent"
              />

              {feature}

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  )
}

export default TripPlanningCTA
