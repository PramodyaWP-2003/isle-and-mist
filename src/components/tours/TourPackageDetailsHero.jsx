
import { Link } from 'react-router-dom'

import {
  ChevronRight,
  Clock,
  Users,
  ArrowLeft,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'

function TourPackageDetailsHero({ tour, details }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[480px] md:min-h-[600px] flex items-center bg-primary overflow-hidden">

      <img
        src={tour.image}
        alt={tour.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.6 }}
        className="section-container relative z-10 w-full text-white py-16"
      >

        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-white/80 mb-8"
        >

          <Link to="/" className="hover:text-accent">
            Home
          </Link>

          <ChevronRight size={16} />

          <Link to="/tour-packages" className="hover:text-accent">
            Tour Packages
          </Link>

          <ChevronRight size={16} />

          <span aria-current="page" className="text-accent">
            {tour.title}
          </span>

        </nav>

        <span className="inline-block bg-accent text-primary rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider mb-5">
          {tour.category}
        </span>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold mb-6">
          {tour.title}
        </h1>

        <div className="flex flex-wrap items-center gap-5 text-white/90 text-sm mb-6">

          <span className="flex items-center gap-2">
            <Clock size={20} className="text-accent" />
            {details.days} Days / {details.nights} Nights
          </span>

          <span className="flex items-center gap-2">
            <Users size={20} className="text-accent" />
            {details.groupSize}
          </span>

        </div>

        <p className="max-w-2xl text-white/85 leading-relaxed mb-8">
          {tour.description}
        </p>

        <Link
          to="/tour-packages"
          className="inline-flex items-center gap-2 border border-white/40 rounded-full px-6 py-3 text-sm hover:bg-white hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} />
          All Tour Packages
        </Link>

      </motion.div>

    </section>
  )
}

export default TourPackageDetailsHero
