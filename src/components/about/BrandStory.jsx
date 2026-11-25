
import { Link } from 'react-router-dom'

import {
  Mountain,
  Heart,
  ArrowRight,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import { aboutImages } from '../../data/aboutData'

function BrandStory() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="our-story"
      className="section-padding bg-cream scroll-mt-24"
    >

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
            className="relative"
          >

            <img
              src={aboutImages.story}
              alt="Beautiful Sri Lankan natural landscape"
              loading="lazy"
              className="w-full h-[350px] md:h-[500px] object-cover rounded-3xl shadow-lg"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-primary text-white rounded-2xl p-5 shadow-xl">

              <div className="flex items-center gap-3">

                <Mountain
                  size={32}
                  className="text-accent shrink-0"
                />

                <div>

                  <p className="font-heading text-xl font-semibold">
                    Isle & Mist
                  </p>

                  <p className="text-white/70 text-xs mt-1">
                    Inspired by Sri Lanka
                  </p>

                </div>

              </div>

            </div>

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
          >

            <div className="inline-flex items-center gap-2 text-secondary uppercase tracking-widest text-xs font-semibold mb-4">

              <Heart size={17} />

              Our Story

            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-primary leading-tight mb-6">

              More Than Just a Journey

            </h2>

            <div className="space-y-5 text-muted text-sm md:text-base leading-relaxed">

              <p>
                Isle & Mist is a digital travel platform
                inspired by the breathtaking landscapes,
                rich cultural heritage and extraordinary
                experiences of Sri Lanka.
              </p>

              <p>
                From mist-covered mountains and scenic tea
                plantations to golden beaches and ancient
                landmarks, Sri Lanka offers countless
                opportunities for discovery.
              </p>

              <p>
                Our purpose is to bring these experiences
                together in one accessible platform,
                helping travelers discover destinations,
                explore activities and plan personalized
                journeys with greater confidence.
              </p>

              <p>
                Developed as a university web development
                project, Isle & Mist combines modern
                technology, thoughtful design and a passion
                for Sri Lankan tourism.
              </p>

            </div>

            <blockquote className="border-l-4 border-accent pl-5 py-2 mt-8 mb-8">

              <p className="font-heading text-xl md:text-2xl italic text-primary">

                Discover the Island. Embrace the Mist.

              </p>

            </blockquote>

            <Link
              to="/destinations"
              className="inline-flex items-center gap-3 bg-primary text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-secondary transition-colors"
            >

              Discover Sri Lanka

              <ArrowRight size={19} />

            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default BrandStory
