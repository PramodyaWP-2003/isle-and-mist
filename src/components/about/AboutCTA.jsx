
import { Link } from 'react-router-dom'

import {
  Compass,
  ArrowRight,
  CalendarDays,
  Mail,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import { aboutImages } from '../../data/aboutData'

function AboutCTA() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative section-padding bg-primary overflow-hidden">

      <img
        src={aboutImages.hero}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-primary/90" />

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
        className="section-container relative z-10 text-center text-white"
      >

        <div className="w-16 h-16 mx-auto bg-white/10 border border-white/20 rounded-full flex items-center justify-center mb-6">

          <Compass
            size={32}
            className="text-accent"
          />

        </div>

        <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4">

          Discover Something Extraordinary

        </p>

        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold mb-6">

          Your Journey Begins Here

        </h2>

        <p className="max-w-2xl mx-auto text-white/75 text-sm md:text-base leading-relaxed mb-9">

          Whether you are searching for adventure, cultural
          discoveries or peaceful escapes, Isle & Mist
          helps you explore Sri Lanka in your own way.

        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">

          <Link
            to="/destinations"
            className="inline-flex items-center justify-center gap-3 bg-accent text-primary rounded-full px-7 py-4 text-sm font-semibold hover:bg-white transition-colors"
          >

            Explore Destinations

            <ArrowRight size={19} />

          </Link>

          <Link
            to="/trip-planner"
            className="inline-flex items-center justify-center gap-3 border border-white/40 text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-white/10 transition-colors"
          >

            <CalendarDays size={19} />

            Plan Your Trip

          </Link>

        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-white/80 text-sm hover:text-accent transition-colors mt-8"
        >

          <Mail size={17} />

          Have a question? Contact Us

        </Link>

      </motion.div>

    </section>
  )
}

export default AboutCTA
