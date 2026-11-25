
import { Link } from 'react-router-dom'

import {
  MessagesSquare,
  ChevronRight,
  ArrowDown,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import {
  contactHeroImage,
} from '../../data/contactData'

function ContactHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[480px] md:min-h-[580px] flex items-center overflow-hidden bg-primary">

      <img
        src={contactHeroImage}
        alt="Beautiful Sri Lankan travel landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

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
            Contact Us
          </span>

        </nav>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">

          <MessagesSquare
            size={19}
            className="text-accent"
          />

          <span className="uppercase tracking-widest text-xs">
            We Are Here to Help
          </span>

        </div>

        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6">

          Let's Start a

          <span className="block text-accent mt-2">
            Conversation
          </span>

        </h1>

        <p className="max-w-2xl mx-auto text-white/85 text-sm md:text-base leading-relaxed mb-8">

          Have questions about destinations, travel
          experiences or planning your Sri Lankan
          adventure? Discover how Isle & Mist can help.

        </p>

        <a
          href="#contact-form"
          className="inline-flex items-center gap-3 bg-accent text-primary rounded-full px-7 py-4 font-semibold hover:bg-white transition-colors"
        >

          Get in Touch

          <ArrowDown size={19} />

        </a>

      </motion.div>

    </section>
  )
}

export default ContactHero
