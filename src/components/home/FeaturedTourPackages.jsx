
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import TourPackageCard from '../ui/TourPackageCard'
import tourPackages from '../../data/tourPackages'

function FeaturedTourPackages() {
  const reduceMotion = useReducedMotion()

  const featuredPackages = tourPackages.filter(
    (tour) => tour.featured
  )

  return (
    <section className="section-padding bg-white">

      <div className="section-container">

        <SectionHeading
          subtitle="Curated Journeys"
          title="Unforgettable Sri Lankan Journeys"
          description="Discover carefully crafted travel packages designed to make your Sri Lankan adventure truly memorable."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredPackages.map((tour, index) => (

            <motion.div
              key={tour.id}
              className="h-full"
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

              <TourPackageCard tour={tour} />

            </motion.div>

          ))}

        </div>

        <div className="flex justify-center mt-12">

          <Link
            to="/tour-packages"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
          >
            View All Tour Packages
            <ArrowRight size={19} />
          </Link>

        </div>

      </div>

    </section>
  )
}

export default FeaturedTourPackages
