
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import DestinationCard from '../ui/DestinationCard'

import destinations from '../../data/destinations'

function normalize(value = '') {
  return String(value).toLowerCase().trim()
}

function getMatchScore(current, candidate) {
  let score = 0

  // Matching destination category

  if (
    normalize(current.category) ===
    normalize(candidate.category)
  ) {
    score += 3
  }

  // Matching travel experiences

  const currentExperiences =
    (current.experiences || []).map(normalize)

  const candidateExperiences =
    (candidate.experiences || []).map(normalize)

  candidateExperiences.forEach((experience) => {
    if (currentExperiences.includes(experience)) {
      score += 1
    }
  })

  return score
}

function RelatedDestinations({ destination }) {
  const reduceMotion = useReducedMotion()

  const relatedDestinations = destinations

    // Exclude the current destination

    .filter((item) => item.id !== destination.id)

    // Calculate recommendation scores

    .map((item) => ({
      destination: item,
      score: getMatchScore(destination, item),
    }))

    // Sort by relevance and rating

    .sort(
      (a, b) =>
        b.score - a.score ||
        (b.destination.rating || 0) -
          (a.destination.rating || 0)
    )

    // Select the best three destinations

    .slice(0, 3)

    .map((item) => item.destination)

  if (!relatedDestinations.length) return null

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="Continue Your Journey"
          title="You May Also Like"
          description="Discover more incredible destinations and unforgettable experiences across Sri Lanka."
        />

        {/* Related Destination Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">

          {relatedDestinations.map((item, index) => (

            <motion.div
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
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              className="h-full"
            >

              <DestinationCard
                destination={item}
              />

            </motion.div>

          ))}

        </div>

        {/* View All Button */}

        <div className="text-center mt-10">

          <Link
            to="/destinations"
            className="inline-flex items-center justify-center gap-3 bg-primary text-white rounded-full px-7 py-4 text-sm font-semibold hover:bg-secondary transition-colors"
          >

            View All Destinations

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  )
}

export default RelatedDestinations
