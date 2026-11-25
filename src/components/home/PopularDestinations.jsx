
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import DestinationCard from '../ui/DestinationCard'
import destinations from '../../data/destinations'

function PopularDestinations() {
  const reduceMotion = useReducedMotion()

  const featuredDestinations = destinations.filter(
    (destination) => destination.featured
  )

  return (
    <section className="section-padding bg-white">

      <div className="section-container">

        <SectionHeading
          subtitle="Explore the Island"
          title="Popular Destinations"
          description="Discover breathtaking landscapes, ancient wonders and unforgettable destinations across Sri Lanka."
        />

        {/* Destination Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredDestinations.map((destination, index) => (

            <motion.div
              key={destination.id}
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
              <DestinationCard
                destination={destination}
              />
            </motion.div>

          ))}

        </div>

        {/* View All Button */}

        <div className="flex justify-center mt-12">

          <Link
            to="/destinations"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-secondary transition-colors duration-300"
          >
            View All Destinations
            <ArrowRight size={19} />
          </Link>

        </div>

      </div>

    </section>
  )
}

export default PopularDestinations
