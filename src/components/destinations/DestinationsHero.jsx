
import { Link } from 'react-router-dom'
import { ChevronRight, Compass } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import heroImage from '../../assets/images/destinations-hero.jpg'

function DestinationsHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-primary/65" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Main Content */}

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
        className="section-container relative z-10 text-center text-white py-16"
      >

        {/* Breadcrumb Navigation */}

        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 text-sm text-white/80 mb-8"
        >
          <Link
            to="/"
            className="hover:text-accent transition-colors"
          >
            Home
          </Link>

          <ChevronRight size={15} />

          <span
            aria-current="page"
            className="text-accent"
          >
            Destinations
          </span>
        </nav>

        {/* Compass Icon */}

        <div className="flex justify-center mb-5">
          <Compass
            size={36}
            strokeWidth={1.5}
            className="text-accent"
          />
        </div>

        {/* Subtitle */}

        <p className="text-accent uppercase tracking-widest text-xs md:text-sm font-medium mb-4">
          Explore the Island
        </p>

        {/* Main Heading */}

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-semibold mb-6">
          Discover Sri Lanka
        </h1>

        {/* Description */}

        <p className="max-w-2xl mx-auto text-white/80 text-sm md:text-lg leading-relaxed">
          From misty mountains and ancient kingdoms
          to golden beaches and incredible wildlife,
          discover the extraordinary beauty of Sri Lanka.
        </p>

      </motion.div>

    </section>
  )
}

export default DestinationsHero
