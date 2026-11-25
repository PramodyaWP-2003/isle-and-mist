
import {
  Backpack,
  ShieldCheck,
  HandHeart,
  Lightbulb,
  CheckCircle,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import destinationTips from '../../data/destinationTips'

function DestinationTravelTips({ destination }) {
  const reduceMotion = useReducedMotion()

  const tips = destinationTips[destination.id]

  if (!tips) return null

  const tipGroups = [
    {
      title: 'What to Pack',
      icon: Backpack,
      items: tips.packing,
    },
    {
      title: 'Safety Tips',
      icon: ShieldCheck,
      items: tips.safety,
    },
    {
      title: 'Local Etiquette',
      icon: HandHeart,
      items: tips.etiquette,
    },
    {
      title: 'Useful Advice',
      icon: Lightbulb,
      items: tips.advice,
    },
  ]

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="Travel Smarter"
          title={`Essential Travel Tips for ${destination.name}`}
          description="Everything you need to know before starting your adventure."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {tipGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.article
                key={group.title}
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
                className="bg-white rounded-2xl border border-primary/10 p-6 hover:shadow-lg transition-shadow"
              >

                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">

                  <Icon
                    size={28}
                    className="text-secondary"
                  />

                </div>

                <h3 className="font-heading text-2xl font-semibold text-primary mb-5">

                  {group.title}

                </h3>

                <ul className="space-y-4">

                  {group.items.map((item) => (

                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle
                        size={17}
                        className="text-secondary shrink-0 mt-1"
                      />

                      <span className="text-muted text-sm leading-relaxed">
                        {item}
                      </span>

                    </li>

                  ))}

                </ul>

              </motion.article>
            )
          })}

        </div>

        <p className="text-muted text-xs text-center mt-8">
          Travel conditions may change. Check local
          weather, access restrictions and official
          travel information before your visit.
        </p>

      </div>

    </section>
  )
}

export default DestinationTravelTips
