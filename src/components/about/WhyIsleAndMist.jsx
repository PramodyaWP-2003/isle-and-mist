
import { Link } from 'react-router-dom'

import {
  MapPin,
  Compass,
  Briefcase,
  Route,
  BookOpen,
  Smartphone,
  ArrowRight,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'

import {
  platformFeatures,
} from '../../data/aboutData'

const featureIcons = {
  destinations: MapPin,
  experiences: Compass,
  packages: Briefcase,
  planner: Route,
  guide: BookOpen,
  responsive: Smartphone,
}

function WhyIsleAndMist() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-white">

      <div className="section-container">

        <SectionHeading
          subtitle="Designed for Your Journey"
          title="Why Choose Isle & Mist?"
          description="Everything you need to discover, explore and plan your Sri Lankan adventure in one place."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {platformFeatures.map((item, index) => {
            const Icon =
              featureIcons[item.id] || Compass

            return (
              <motion.article
                key={item.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion
                    ? 0
                    : (index % 3) * 0.1,
                }}
                className="bg-cream border border-primary/10 rounded-2xl p-6 md:p-7 flex flex-col hover:shadow-md transition-shadow"
              >

                <div className="flex items-center justify-between mb-6">

                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">

                    <Icon
                      size={27}
                      className="text-secondary"
                    />

                  </div>

                  <span className="font-heading text-3xl text-primary/15 font-semibold">

                    {String(index + 1).padStart(2, '0')}

                  </span>

                </div>

                <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary mb-4">

                  {item.title}

                </h3>

                <p className="text-muted text-sm leading-relaxed mb-6">

                  {item.description}

                </p>

                <Link
                  to={item.link}
                  aria-label={`Explore ${item.title}`}
                  className="inline-flex items-center gap-2 text-secondary text-sm font-semibold hover:text-primary mt-auto"
                >

                  Explore More

                  <ArrowRight size={17} />

                </Link>

              </motion.article>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default WhyIsleAndMist
