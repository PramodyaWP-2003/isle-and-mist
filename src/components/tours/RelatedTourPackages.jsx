
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import SectionHeading from '../ui/SectionHeading'
import TourExploreCard from './TourExploreCard'

import tourPackages from '../../data/tourPackages'
import tourPackageDetails from '../../data/tourPackageDetails'

function RelatedTourPackages({ tour }) {
  const relatedPackages = tourPackages
    .filter(
      (item) =>
        item.id !== tour.id &&
        tourPackageDetails[item.id]
    )
    .sort((a, b) => {
      const aMatch = a.category === tour.category ? 1 : 0
      const bMatch = b.category === tour.category ? 1 : 0

      return (
        bMatch - aMatch ||
        Math.abs(a.price - tour.price) -
          Math.abs(b.price - tour.price)
      )
    })
    .slice(0, 3)

  if (!relatedPackages.length) return null

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="Discover More Journeys"
          title="You May Also Like"
          description="Explore more unforgettable tour packages across Sri Lanka."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">

          {relatedPackages.map((item, index) => (

            <TourExploreCard
              key={item.id}
              tour={item}
              details={tourPackageDetails[item.id]}
              index={index}
            />

          ))}

        </div>

        <div className="text-center mt-10">

          <Link
            to="/tour-packages"
            className="inline-flex items-center gap-3 bg-primary text-white rounded-full px-7 py-4 text-sm font-semibold hover:bg-secondary transition-colors"
          >
            View All Tour Packages
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  )
}

export default RelatedTourPackages
