
import { Link, useSearchParams } from 'react-router-dom'

import {
  SearchX,
  RotateCcw,
  Compass,
  ArrowRight,
} from 'lucide-react'

import TourPackagesHero from '../components/tours/TourPackagesHero'
import TourPackageFilters from '../components/tours/TourPackageFilters'
import TourExploreCard from '../components/tours/TourExploreCard'

import SectionHeading from '../components/ui/SectionHeading'

import tourPackages from '../data/tourPackages'
import tourPackageDetails from '../data/tourPackageDetails'

const categories = [
  ...new Set(tourPackages.map((tour) => tour.category)),
]

function TourPackages() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search') || ''
  const category = searchParams.get('category') || 'all'
  const budget = searchParams.get('budget') || 'all'
  const sortBy = searchParams.get('sort') || 'recommended'

  // Support existing homepage package links

  const selectedPackage = searchParams.get('package') || ''

  function handleFilterChange(key, value) {
    setSearchParams(
      (previous) => {
        const params = new URLSearchParams(previous)

        params.delete('package')

        if (
          !value ||
          value === 'all' ||
          value === 'recommended'
        ) {
          params.delete(key)
        } else {
          params.set(key, value)
        }

        return params
      },
      { replace: true }
    )
  }

  function resetFilters() {
    setSearchParams({}, { replace: true })
  }

  const filteredPackages = tourPackages
    .filter((tour) => {
      const searchText = [
        tour.title,
        tour.category,
        tour.description,
        ...(Array.isArray(tour.locations)
          ? tour.locations
          : [tour.locations]),
      ]
        .join(' ')
        .toLowerCase()

      const matchesSearch = searchText.includes(
        search.trim().toLowerCase()
      )

      const matchesCategory =
        category === 'all' || tour.category === category

      const matchesBudget =
        budget === 'all' || Number(tour.price) <= Number(budget)

      const matchesPackage =
        !selectedPackage || tour.id === selectedPackage

      return (
        tourPackageDetails[tour.id] &&
        matchesSearch &&
        matchesCategory &&
        matchesBudget &&
        matchesPackage
      )
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.price - b.price
      }

      if (sortBy === 'price-high') {
        return b.price - a.price
      }

      if (sortBy === 'az') {
        return a.title.localeCompare(b.title)
      }

      return 0
    })

  return (
    <>

      {/* Cinematic Hero */}

      <TourPackagesHero />

      {/* Tour Packages Section */}

      <section
        id="explore-tours"
        className="section-padding bg-cream scroll-mt-24"
      >

        <div className="section-container">

          <SectionHeading
            subtitle="Journeys Designed for You"
            title="Find Your Perfect Tour"
            description="Choose from carefully designed Sri Lankan journeys that match your interests, travel style and budget."
          />

          <div className="mt-10">

            <TourPackageFilters
              search={search}
              category={category}
              budget={budget}
              sortBy={sortBy}
              categories={categories}
              onFilterChange={handleFilterChange}
              onReset={resetFilters}
            />

          </div>

          {/* Results Counter */}

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-primary/10 pb-4 mb-8">

            <p aria-live="polite" className="text-muted text-sm">

              Showing{' '}

              <span className="font-semibold text-primary">
                {filteredPackages.length}
              </span>

              {' '}of {tourPackages.length} tour packages

            </p>

            {selectedPackage && (

              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium"
              >
                <RotateCcw size={16} />
                View All Packages
              </button>

            )}

          </div>

          {/* Package Cards */}

          {filteredPackages.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

              {filteredPackages.map((tour, index) => (

                <TourExploreCard
                  key={tour.id}
                  tour={tour}
                  details={tourPackageDetails[tour.id]}
                  index={index}
                />

              ))}

            </div>

          ) : (

            <div className="bg-white border border-primary/10 rounded-2xl p-10 md:p-16 text-center">

              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">

                <SearchX size={36} className="text-secondary" />

              </div>

              <h3 className="font-heading text-3xl font-semibold text-primary mb-4">
                No Tour Packages Found
              </h3>

              <p className="text-muted text-sm mb-6">
                Try changing your search, category or budget.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-6 py-3 hover:bg-secondary transition-colors"
              >
                <RotateCcw size={18} />
                Reset All Filters
              </button>

            </div>

          )}

          <p className="text-muted text-xs text-center mt-8">
            Package prices and itineraries are illustrative
            and subject to availability and travel conditions.
          </p>

        </div>

      </section>

      {/* Custom Trip CTA */}

      <section className="section-padding bg-primary">

        <div className="section-container text-center">

          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">

            <Compass size={42} className="text-accent" />

          </div>

          <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4">
            Your Journey, Your Way
          </p>

          <h2 className="font-heading text-4xl md:text-6xl font-semibold text-white mb-6">
            Prefer a Custom Adventure?
          </h2>

          <p className="text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
            Create a personalized itinerary that combines
            your favorite destinations and experiences
            across Sri Lanka.
          </p>

          <Link
            to="/trip-planner"
            className="inline-flex items-center gap-3 bg-accent text-primary rounded-full px-7 py-4 font-semibold hover:bg-white transition-colors"
          >
            Create My Own Trip
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </>
  )
}

export default TourPackages
