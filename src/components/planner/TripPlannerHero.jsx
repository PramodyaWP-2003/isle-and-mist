
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Compass,
  ArrowDown,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'
import destinations from '../../data/destinations'

function TripPlannerHero() {
  const reduceMotion = useReducedMotion()

  const heroImage =
    destinations.find((item) => item.id === 'ella')?.image ||
    destinations[0]?.image

  return (
    <section className="relative min-h-[420px] md:min-h-[520px] flex items-center overflow-hidden bg-primary">

      <img
        src={heroImage}
        alt="Scenic Sri Lankan travel destination"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.7 }}
        className="section-container relative z-10 w-full text-center text-white py-16"
      >

        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 text-sm text-white/80 mb-8"
        >
          <Link to="/" className="hover:text-accent">
            Home
          </Link>

          <ChevronRight size={16} />

          <span aria-current="page" className="text-accent">
            Trip Planner
          </span>
        </nav>

        <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-5 py-2 mb-6">

          <Compass size={18} className="text-accent" />

          <span className="uppercase tracking-widest text-xs">
            Your Journey, Your Way
          </span>

        </div>

        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-semibold mb-6">
          Plan Your Dream
          <span className="block text-accent">
            Journey
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-white/85 leading-relaxed mb-8">
          Choose your favorite destinations, discover exciting
          experiences and create a personalized Sri Lankan
          adventure.
        </p>

        <a
          href="#trip-planner"
          className="inline-flex items-center gap-3 bg-accent text-primary rounded-full px-7 py-4 font-semibold hover:bg-white transition-colors"
        >
          Start Planning
          <ArrowDown size={19} />
        </a>

      </motion.div>

    </section>
  )
}

export default TripPlannerHero
