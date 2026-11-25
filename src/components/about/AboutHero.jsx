
import { Link } from 'react-router-dom'

import {
  Mountain,
  ChevronRight,
  ArrowDown,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import { aboutImages } from '../../data/aboutData'

function AboutHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[480px] md:min-h-[600px] flex items-center overflow-hidden bg-primary">

      <img
        src={aboutImages.hero}
        alt="Scenic Sri Lankan mountain landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

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
        className="section-container relative z-10 w-full py-16 text-center text-white"
      >

        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 text-sm text-white/80 mb-8"
        >

          <Link
            to="/"
            className="hover:text-accent"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <span
            aria-current="page"
            className="text-accent"
          >
            About Us
          </span>

        </nav>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">

          <Mountain
            size={19}
            className="text-accent"
          />

          <span className="uppercase tracking-widest text-xs">
            The Heart Behind the Journey
          </span>

        </div>

        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6">

          Discover the Story Behind

          <span className="block text-accent mt-2">
            Isle & Mist
          </span>

        </h1>

        <p className="max-w-2xl mx-auto text-white/85 text-sm md:text-base leading-relaxed mb-8">

          Inspired by Sri Lanka. Created for curious
          travelers. Discover the island through meaningful
          journeys, authentic experiences and thoughtful
          travel planning.

        </p>

        <a
          href="#our-story"
          className="inline-flex items-center gap-3 bg-accent text-primary rounded-full px-7 py-4 font-semibold hover:bg-white transition-colors"
        >

          Discover Our Story

          <ArrowDown size={19} />

        </a>

      </motion.div>

    </section>
  )
}

export default AboutHero
