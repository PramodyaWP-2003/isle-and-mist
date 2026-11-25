
import {
  Heart,
  Leaf,
  Compass,
  Users,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import { coreValues } from '../../data/aboutData'

const valueIcons = {
  authenticity: Heart,
  sustainability: Leaf,
  exploration: Compass,
  community: Users,
  trust: ShieldCheck,
  innovation: Sparkles,
}

function CoreValues() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="What We Believe In"
          title="The Values That Guide Us"
          description="Our core values shape the way we design, develop and promote meaningful travel experiences."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {coreValues.map((item, index) => {
            const Icon = valueIcons[item.id] || Heart

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
                className="group bg-white border border-primary/10 rounded-2xl p-7 text-center hover:shadow-lg hover:border-secondary/30 transition-all"
              >

                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">

                  <Icon
                    size={30}
                    className="text-secondary group-hover:text-accent transition-colors"
                  />

                </div>

                <h3 className="font-heading text-2xl font-semibold text-primary mb-4">

                  {item.title}

                </h3>

                <p className="text-muted text-sm leading-relaxed">

                  {item.description}

                </p>

              </motion.article>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default CoreValues
