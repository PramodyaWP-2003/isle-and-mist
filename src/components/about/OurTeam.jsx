
import {
  Code2,
  Palette,
  BookOpen,
  Users,
  GraduationCap,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import { teamMembers } from '../../data/aboutData'

const teamIcons = {
  development: Code2,
  design: Palette,
  research: BookOpen,
}

function OurTeam() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="Behind the Project"
          title="Meet the People Behind the Journey"
          description="Combining technology, creativity and a passion for travel to bring Isle & Mist to life."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">

          {teamMembers.map((member, index) => {
            const Icon =
              teamIcons[member.id] || Users

            return (
              <motion.article
                key={member.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="bg-white border border-primary/10 rounded-3xl overflow-hidden text-center hover:shadow-lg transition-shadow"
              >

                <div className="relative bg-secondary/10 h-52 flex items-center justify-center">

                  <div
                    aria-hidden="true"
                    className="absolute w-44 h-44 rounded-full border border-secondary/10"
                  />

                  {member.image ? (

                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                    />

                  ) : (

                    <div className="relative w-28 h-28 rounded-full bg-white shadow-sm flex items-center justify-center">

                      <Icon
                        size={48}
                        className="text-secondary"
                      />

                    </div>

                  )}

                </div>

                <div className="p-6 md:p-8">

                  <h3 className="font-heading text-2xl font-semibold text-primary mb-3">

                    {member.name}

                  </h3>

                  <p className="text-secondary text-sm font-medium mb-5">

                    {member.role}

                  </p>

                  <p className="text-muted text-sm leading-relaxed">

                    {member.description}

                  </p>

                </div>

              </motion.article>
            )
          })}

        </div>

        <div className="max-w-3xl mx-auto bg-white border border-primary/10 rounded-2xl p-6 md:p-8 mt-10">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">

            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">

              <GraduationCap
                size={32}
                className="text-accent"
              />

            </div>

            <div>

              <h3 className="font-heading text-xl font-semibold text-primary mb-3">

                A University Web Development Project

              </h3>

              <p className="text-muted text-sm leading-relaxed">

                Isle & Mist is an academic project designed
                to demonstrate modern frontend development,
                responsive web design, reusable React
                components and interactive digital travel
                planning features.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default OurTeam
