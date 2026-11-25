
import {
  Target,
  Eye,
  CheckCircle,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'

const statements = [
  {
    id: 'mission',
    icon: Target,
    title: 'Our Mission',
    description:
      'To make discovering and planning Sri Lankan travel simple, accessible and meaningful through a modern digital platform.',
    points: [
      'Simplify travel discovery and planning',
      'Provide useful destination information',
      'Encourage authentic travel experiences',
      'Promote responsible tourism',
    ],
  },
  {
    id: 'vision',
    icon: Eye,
    title: 'Our Vision',
    description:
      'To become an inspiring digital travel platform that connects travelers with the beauty, culture and diversity of Sri Lanka.',
    points: [
      'Inspire unforgettable journeys',
      'Celebrate Sri Lankan heritage',
      'Support sustainable travel practices',
      'Improve travel experiences through technology',
    ],
  },
]

function MissionVision() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-white">

      <div className="section-container">

        <SectionHeading
          subtitle="Our Purpose"
          title="Mission and Vision"
          description="The ideas and ambitions that guide the development of Isle & Mist."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">

          {statements.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.15,
                }}
                className="relative overflow-hidden bg-cream border border-primary/10 rounded-3xl p-7 md:p-10"
              >

                <div
                  aria-hidden="true"
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-secondary/5"
                />

                <div className="relative">

                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">

                    <Icon
                      size={32}
                      className="text-accent"
                    />

                  </div>

                  <h3 className="font-heading text-3xl font-semibold text-primary mb-5">

                    {item.title}

                  </h3>

                  <p className="text-muted text-sm md:text-base leading-relaxed mb-7">

                    {item.description}

                  </p>

                  <div className="border-t border-primary/10 pt-6">

                    <ul className="space-y-4">

                      {item.points.map((point) => (

                        <li
                          key={point}
                          className="flex items-start gap-3 text-primary text-sm"
                        >

                          <CheckCircle
                            size={19}
                            className="text-secondary shrink-0 mt-0.5"
                          />

                          {point}

                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              </motion.article>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default MissionVision
