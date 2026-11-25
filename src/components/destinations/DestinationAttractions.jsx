
import {
  MapPin,
  Landmark,
  Mountain,
  Trees,
  Waves,
  Camera,
  Compass,
  Building2,
  PawPrint,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import destinationAttractions from '../../data/destinationAttractions'

function getCategoryIcon(category) {
  const value = category.toLowerCase()

  if (
    value.includes('historic') ||
    value.includes('heritage') ||
    value.includes('religious')
  ) {
    return Landmark
  }

  if (
    value.includes('hiking') ||
    value.includes('adventure')
  ) {
    return Mountain
  }

  if (
    value.includes('nature') ||
    value.includes('natural') ||
    value.includes('national park')
  ) {
    return Trees
  }

  if (value.includes('beach')) return Waves
  if (value.includes('museum')) return Building2
  if (value.includes('wildlife')) return PawPrint
  if (value.includes('scenic')) return Camera

  return Compass
}

function DestinationAttractions({ destination }) {
  const reduceMotion = useReducedMotion()

  const attractions =
    destinationAttractions[destination.id]?.attractions || []

  if (!attractions.length) return null

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="Places You Shouldn't Miss"
          title={`Top Attractions in ${destination.name}`}
          description={`Explore the most remarkable places and landmarks in ${destination.name}.`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {attractions.map((attraction, index) => {
            const Icon = getCategoryIcon(attraction.category)

            return (
              <motion.article
                key={attraction.name}
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
                className="group bg-white rounded-2xl border border-primary/10 p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                {/* Attraction Icon */}

                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">

                  <Icon
                    size={28}
                    className="text-secondary group-hover:text-white transition-colors"
                  />

                </div>

                {/* Category */}

                <span className="text-secondary text-xs font-semibold uppercase tracking-wider mb-3">

                  {attraction.category}

                </span>

                {/* Attraction Name */}

                <h3 className="font-heading text-2xl font-semibold text-primary mb-3">

                  {attraction.name}

                </h3>

                {/* Description */}

                <p className="text-muted text-sm leading-relaxed mb-6">

                  {attraction.description}

                </p>

                {/* Location */}

                <div className="mt-auto pt-4 border-t border-primary/10 flex items-center gap-2 text-muted text-xs">

                  <MapPin
                    size={16}
                    className="text-secondary"
                  />

                  {destination.name}, Sri Lanka

                </div>

              </motion.article>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default DestinationAttractions
