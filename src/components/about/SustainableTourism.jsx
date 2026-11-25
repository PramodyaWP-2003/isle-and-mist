
import { Link } from 'react-router-dom'

import {
  Leaf,
  Trees,
  PawPrint,
  Users,
  Landmark,
  ArrowRight,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import {
  aboutImages,
  sustainabilityValues,
} from '../../data/aboutData'

const sustainabilityIcons = {
  nature: Trees,
  wildlife: PawPrint,
  local: Users,
  culture: Landmark,
}

function SustainableTourism() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-primary overflow-hidden">

      <div className="section-container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
            }}
          >

            <div className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-widest font-semibold mb-5">

              <Leaf size={18} />

              Our Commitment

            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">

              Travel Better.

              <span className="block text-accent mt-2">

                Leave Less Behind.

              </span>

            </h2>

            <p className="text-white/75 text-sm md:text-base leading-relaxed mb-8">

              We believe travel should celebrate the beauty
              of Sri Lanka while respecting its environment,
              wildlife, cultural heritage and local
              communities.

            </p>

            <div className="space-y-5">

              {sustainabilityValues.map((item) => {
                const Icon =
                  sustainabilityIcons[item.id] || Leaf

                return (
                  <article
                    key={item.id}
                    className="flex items-start gap-4"
                  >

                    <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center shrink-0">

                      <Icon
                        size={23}
                        className="text-accent"
                      />

                    </div>

                    <div>

                      <h3 className="text-white font-semibold text-sm md:text-base mb-2">

                        {item.title}

                      </h3>

                      <p className="text-white/70 text-sm leading-relaxed">

                        {item.description}

                      </p>

                    </div>

                  </article>
                )
              })}

            </div>

            <Link
              to="/travel-guide"
              className="inline-flex items-center gap-3 bg-accent text-primary rounded-full px-7 py-4 text-sm font-semibold hover:bg-white transition-colors mt-9"
            >

              Read Our Travel Guide

              <ArrowRight size={18} />

            </Link>

          </motion.div>

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="relative"
          >

            <img
              src={aboutImages.sustainability}
              alt="Sri Lankan wildlife and natural environment"
              loading="lazy"
              className="w-full h-[350px] md:h-[550px] object-cover rounded-3xl"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-primary/90 backdrop-blur-sm border border-white/15 rounded-2xl p-5">

              <div className="flex items-center gap-4">

                <Leaf
                  size={32}
                  className="text-accent shrink-0"
                />

                <div>

                  <h3 className="font-heading text-white text-xl font-semibold">

                    Responsible Travel

                  </h3>

                  <p className="text-white/70 text-xs leading-relaxed mt-2">

                    Small choices can help protect the
                    places we love.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default SustainableTourism
