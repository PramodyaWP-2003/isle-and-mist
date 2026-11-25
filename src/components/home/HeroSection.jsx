
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Compass,
  MapPin,
  ChevronDown,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import heroImage from '../../assets/images/hero-sigiriya.jpeg'

function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[calc(100svh-80px)] flex items-center justify-center overflow-hidden">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/10" />

      {/* Hero Content */}

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.9 }}
        className="relative z-10 section-container text-center text-white py-24"
      >

        {/* Subtitle */}

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">

          <MapPin size={15} className="text-accent" />

          <span className="text-xs sm:text-sm tracking-widest uppercase">
            Welcome to Sri Lanka
          </span>

        </div>

        {/* Main Heading */}

        <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-semibold leading-tight mt-7">

          Discover the Island.

          <span className="block text-accent">
            Embrace the Mist.
          </span>

        </h1>

        {/* Description */}

        <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-lg text-white/85 leading-relaxed">

          Journey through misty mountains, golden beaches,
          ancient kingdoms and breathtaking landscapes.
          Discover the extraordinary beauty of Sri Lanka
          with Isle &amp; Mist.

        </p>

        {/* Action Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            to="/destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-primary px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors duration-300"
          >
            Explore Destinations
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/trip-planner"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white/60 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-primary transition-colors duration-300"
          >
            <Compass size={20} />
            Plan Your Trip
          </Link>

        </div>

      </motion.div>

      {/* Location Label */}

      <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-2 text-white/80 text-sm">

        <MapPin size={17} className="text-accent" />

        Sigiriya, Sri Lanka

      </div>

      {/* Scroll Indicator */}

      <motion.a
        href="#discover"
        aria-label="Scroll to discover section"
        animate={reduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: reduceMotion ? 0 : Infinity,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-1"
      >

        <span className="text-[10px] tracking-widest uppercase">
          Discover
        </span>

        <ChevronDown size={24} />

      </motion.a>

    </section>
  )
}

export default HeroSection
