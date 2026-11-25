
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import ExperienceCard from '../ui/ExperienceCard'
import experiences from '../../data/experiences'

function TravelExperiences() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="Experience the Extraordinary"
          title="Find Your Kind of Adventure"
          description="One island. Endless experiences. Discover unforgettable moments that match your travel style."
        />

        {/* Experiences Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {experiences.map((experience, index) => (

            <motion.div
              key={experience.id}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
            >

              <ExperienceCard experience={experience} />

            </motion.div>

          ))}

        </div>

        {/* Explore All Button */}

        <div className="flex justify-center mt-12">

          <Link
            to="/experiences"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-secondary transition-colors duration-300"
          >

            Explore All Experiences
            <ArrowRight size={19} />

          </Link>

        </div>

      </div>

    </section>
  )
}

export default TravelExperiences
