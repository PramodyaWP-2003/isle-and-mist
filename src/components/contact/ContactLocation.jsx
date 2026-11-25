
import { Link } from 'react-router-dom'

import {
  MapPin,
  Globe,
  Compass,
  ExternalLink,
  ArrowRight,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import {
  contactHeroImage,
} from '../../data/contactData'

function ContactLocation() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
            }}
          >

            <div className="inline-flex items-center gap-2 text-secondary uppercase tracking-widest text-xs font-semibold mb-5">

              <MapPin size={18} />

              Our Location

            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-primary leading-tight mb-6">

              Inspired by Sri Lanka

            </h2>

            <p className="text-muted text-sm md:text-base leading-relaxed mb-6">

              Isle & Mist is a digital travel platform
              dedicated to discovering the beauty,
              culture and diversity of Sri Lanka.

            </p>

            <p className="text-muted text-sm md:text-base leading-relaxed mb-8">

              From the misty central highlands to
              tropical beaches, ancient cities and
              wildlife destinations, our platform
              brings the island closer to you.

            </p>

            <div className="space-y-5 mb-8">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">

                  <MapPin
                    size={23}
                    className="text-secondary"
                  />

                </div>

                <div>

                  <h3 className="text-primary font-semibold text-sm">
                    Country
                  </h3>

                  <p className="text-muted text-sm">
                    Sri Lanka
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">

                  <Globe
                    size={23}
                    className="text-secondary"
                  />

                </div>

                <div>

                  <h3 className="text-primary font-semibold text-sm">
                    Platform Type
                  </h3>

                  <p className="text-muted text-sm">
                    Online Travel Platform
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">

                  <Compass
                    size={23}
                    className="text-secondary"
                  />

                </div>

                <div>

                  <h3 className="text-primary font-semibold text-sm">
                    Travel Focus
                  </h3>

                  <p className="text-muted text-sm">
                    Island-wide Travel Discovery
                  </p>

                </div>

              </div>

            </div>

            <Link
              to="/destinations"
              className="inline-flex items-center gap-3 bg-primary text-white rounded-full px-6 py-4 text-sm font-medium hover:bg-secondary transition-colors"
            >

              Explore the Island

              <ArrowRight size={18} />

            </Link>

          </motion.div>

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="bg-white border border-primary/10 rounded-3xl overflow-hidden shadow-sm"
          >

            <img
              src={contactHeroImage}
              alt="Scenic landscape of Sri Lanka"
              loading="lazy"
              className="w-full h-[280px] md:h-[350px] object-cover"
            />

            <div className="p-6 md:p-8">

              <div className="flex items-center gap-3 mb-4">

                <MapPin
                  size={25}
                  className="text-secondary shrink-0"
                />

                <h3 className="font-heading text-2xl font-semibold text-primary">

                  Sri Lanka

                </h3>

              </div>

              <p className="text-muted text-sm leading-relaxed mb-6">

                Discover the island's geography,
                destinations and surrounding regions
                using Google Maps.

              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full border border-primary/20 text-primary rounded-xl px-5 py-3.5 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
              >

                View on Google Maps

                <ExternalLink size={17} />

              </a>

              <p className="text-muted text-xs leading-relaxed mt-4">

                This location represents the platform's
                travel focus, not a physical office.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default ContactLocation
