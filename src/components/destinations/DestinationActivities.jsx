
import {
  Footprints,
  TrainFront,
  Camera,
  Leaf,
  Mountain,
  Landmark,
  Waves,
  Ship,
  ShoppingBag,
  Sunset,
  Bird,
  Binoculars,
  Compass,
  Music,
  Trees,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import destinationAttractions from '../../data/destinationAttractions'

function getActivityIcon(activity) {
  const value = activity.toLowerCase()

  if (value.includes('photography')) return Camera
  if (value.includes('train')) return TrainFront
  if (value.includes('hiking')) return Footprints
  if (value.includes('climbing')) return Mountain
  if (value.includes('tea')) return Leaf
  if (value.includes('temple')) return Landmark
  if (value.includes('historical')) return Landmark
  if (value.includes('heritage')) return Landmark
  if (value.includes('surfing')) return Waves
  if (value.includes('beach')) return Waves
  if (value.includes('whale')) return Ship
  if (value.includes('boating')) return Ship
  if (value.includes('shopping')) return ShoppingBag
  if (value.includes('sunset')) return Sunset
  if (value.includes('bird')) return Bird
  if (value.includes('wildlife')) return Binoculars
  if (value.includes('performance')) return Music
  if (value.includes('garden')) return Trees
  if (value.includes('walk')) return Footprints

  return Compass
}

function DestinationActivities({ destination }) {
  const reduceMotion = useReducedMotion()

  const activities =
    destinationAttractions[destination.id]?.activities || []

  if (!activities.length) return null

  return (
    <section className="section-padding bg-white">

      <div className="section-container">

        <SectionHeading
          subtitle="Make Every Moment Count"
          title={`Things to Do in ${destination.name}`}
          description={`Discover memorable experiences and exciting activities during your visit to ${destination.name}.`}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10">

          {activities.map((activity, index) => {
            const Icon = getActivityIcon(activity)

            return (
              <motion.article
                key={activity}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group bg-cream border border-primary/10 rounded-2xl p-5 md:p-8 text-center hover:bg-primary hover:shadow-lg transition-all duration-300"
              >

                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/10 group-hover:bg-white/10 flex items-center justify-center mx-auto mb-5 transition-colors">

                  <Icon
                    size={32}
                    className="text-secondary group-hover:text-accent transition-colors"
                  />

                </div>

                <h3 className="font-heading text-base md:text-xl font-semibold text-primary group-hover:text-white transition-colors">

                  {activity}

                </h3>

              </motion.article>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default DestinationActivities
