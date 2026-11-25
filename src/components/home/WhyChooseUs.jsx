
import {
  MapPinned,
  Route,
  Leaf,
  Wallet,
  Compass,
  CalendarCheck,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'

const benefits = [
  {
    id: 1,
    icon: MapPinned,
    title: 'Local Knowledge',
    description:
      'Discover authentic destinations, hidden gems and the true beauty of Sri Lanka.',
  },
  {
    id: 2,
    icon: Route,
    title: 'Personalized Journeys',
    description:
      'Explore the island at your own pace with experiences that match your interests.',
  },
  {
    id: 3,
    icon: Leaf,
    title: 'Responsible Travel',
    description:
      'Explore responsibly while respecting nature, local culture and communities.',
  },
  {
    id: 4,
    icon: Wallet,
    title: 'Flexible Budgets',
    description:
      'Discover travel experiences and tour packages that match your budget.',
  },
  {
    id: 5,
    icon: Compass,
    title: 'Curated Experiences',
    description:
      'Explore carefully selected destinations and unforgettable island experiences.',
  },
  {
    id: 6,
    icon: CalendarCheck,
    title: 'Easy Trip Planning',
    description:
      'Discover destinations, explore packages and plan your next adventure in one place.',
  },
]

function WhyChooseUs() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-primary text-white relative overflow-hidden">

      {/* Decorative Background */}

      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="section-container relative z-10">

        {/* Section Heading */}

        <div className="text-center max-w-3xl mx-auto mb-14">

          <p className="text-accent uppercase tracking-widest text-xs font-medium mb-4">
            The Isle & Mist Difference
          </p>

          <h2 className="font-heading text-3xl md:text-5xl font-semibold mb-5">
            Why Travel With Us?
          </h2>

          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            More than a journey. A meaningful connection
            with Sri Lanka, its people, culture and
            extraordinary natural beauty.
          </p>

        </div>

        {/* Benefits Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <motion.article
                key={benefit.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-accent/40 transition-colors duration-300"
              >

                {/* Benefit Icon */}

                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">

                  <Icon size={30} strokeWidth={1.6} />

                </div>

                {/* Benefit Information */}

                <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">
                  {benefit.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>

              </motion.article>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs
