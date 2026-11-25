
import { Link } from 'react-router-dom'
import { ChevronRight, Compass, ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import experiences from '../../data/experiences'

function ExperiencesHero() {
  const reduceMotion = useReducedMotion()

  const heroImage =
    experiences.find((item) => item.id === 'wildlife')?.image ||
    experiences[0]?.image

  return (
    <section className="relative min-h-[480px] md:min-h-[600px] flex items-center overflow-hidden bg-primary">

      <img
        src={heroImage}
        alt="Wildlife experiences in Sri Lanka"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

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
            Experiences
          </span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6">

          <Compass size={18} className="text-accent" />

          <span className="text-xs tracking-widest uppercase">
            Discover More Than a Destination
          </span>

        </div>

        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-semibold mb-6">
          Unforgettable
          <span className="block text-accent">
            Experiences
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-white/85 text-sm md:text-lg leading-relaxed mb-8">
          From thrilling wildlife encounters to peaceful
          beaches and ancient cultural wonders, discover
          extraordinary moments across Sri Lanka.
        </p>

        <a
          href="#explore-experiences"
          className="inline-flex items-center gap-3 bg-accent text-primary rounded-full px-7 py-4 font-semibold hover:bg-white transition-colors"
        >
          Explore Experiences

          <ArrowDown size={19} />
        </a>

      </motion.div>

    </section>
  )
}

export default ExperiencesHero
