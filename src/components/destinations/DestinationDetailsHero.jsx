
import { Link } from 'react-router-dom'
import {
  MapPin,
  Star,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

function DestinationDetailsHero({ destination }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[480px] md:min-h-[600px] flex items-end overflow-hidden">

      {/* Background Image */}

      <img
        src={destination.image}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Hero Content */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 25 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
        }}
        className="section-container relative z-10 w-full text-white py-12 md:py-16"
      >

        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-white/80 mb-8"
        >

          <Link to="/" className="hover:text-accent">
            Home
          </Link>

          <ChevronRight size={15} />

          <Link
            to="/destinations"
            className="hover:text-accent"
          >
            Destinations
          </Link>

          <ChevronRight size={15} />

          <span
            aria-current="page"
            className="text-accent"
          >
            {destination.name}
          </span>

        </nav>

        {/* Category */}

        <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full text-xs font-semibold mb-5">
          {destination.category}
        </span>

        {/* Destination Name */}

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold mb-5">
          Discover {destination.name}
        </h1>

        {/* Location and Rating */}

        <div className="flex flex-wrap items-center gap-5 mb-6">

          <div className="flex items-center gap-2 text-white/90">

            <MapPin
              size={20}
              className="text-accent"
            />

            <span>
              {destination.location}, Sri Lanka
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Star
              size={19}
              className="fill-amber-400 text-amber-400"
            />

            <span className="font-medium">
              {destination.rating}
            </span>

          </div>

        </div>

        {/* Description */}

        <p className="max-w-2xl text-white/80 text-sm md:text-lg leading-relaxed mb-8">
          {destination.description}
        </p>

        {/* Back Button */}

        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 border border-white/40 rounded-full px-5 py-3 text-sm hover:bg-white hover:text-primary transition-colors"
        >

          <ArrowLeft size={18} />

          All Destinations

        </Link>

      </motion.div>

    </section>
  )
}

export default DestinationDetailsHero
