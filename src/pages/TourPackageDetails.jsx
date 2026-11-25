
import { Link, useParams } from 'react-router-dom'

import {
  ArrowLeft,
  MapPinOff,
  CalendarDays,
  Activity,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

import TourPackageDetailsHero from '../components/tours/TourPackageDetailsHero'
import TourItinerary from '../components/tours/TourItinerary'
import TourInclusions from '../components/tours/TourInclusions'
import TourBookingCard from '../components/tours/TourBookingCard'
import RelatedTourPackages from '../components/tours/RelatedTourPackages'

import tourPackages from '../data/tourPackages'
import tourPackageDetails from '../data/tourPackageDetails'
import destinations from '../data/destinations'

function TourPackageDetails() {
  const { id } = useParams()

  const tour = tourPackages.find((item) => item.id === id)
  const details = tourPackageDetails[id]

  // Invalid package handling

  if (!tour || !details) {
    return (
      <section className="section-padding bg-cream min-h-[60vh] flex items-center">

        <div className="section-container text-center">

          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">

            <MapPinOff size={36} className="text-secondary" />

          </div>

          <h1 className="font-heading text-4xl font-semibold text-primary mb-4">
            Tour Package Not Found
          </h1>

          <p className="text-muted mb-8">
            Sorry, we couldn't find the tour package
            you are looking for.
          </p>

          <Link
            to="/tour-packages"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-6 py-3 hover:bg-secondary transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Tour Packages
          </Link>

        </div>

      </section>
    )
  }

  const information = [
    {
      icon: Clock,
      label: 'Duration',
      value: `${details.days} Days / ${details.nights} Nights`,
    },
    {
      icon: Users,
      label: 'Group Size',
      value: details.groupSize,
    },
    {
      icon: Activity,
      label: 'Difficulty',
      value: details.difficulty,
    },
    {
      icon: CalendarDays,
      label: 'Best Time',
      value: details.bestTime,
    },
  ]

  const tourDestinations = details.destinations
    .map((destinationId) =>
      destinations.find((item) => item.id === destinationId)
    )
    .filter(Boolean)

  return (
    <>

      {/* Package Hero */}

      <TourPackageDetailsHero
        key={tour.id}
        tour={tour}
        details={details}
      />

      {/* Package Information */}

      <section className="section-padding bg-cream">

        <div className="section-container">

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8 lg:gap-12">

            {/* Main Content */}

            <div className="min-w-0">

              <section className="mb-12">

                <p className="text-secondary text-xs uppercase tracking-widest font-semibold mb-3">
                  Discover Your Journey
                </p>

                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-5">
                  Tour Overview
                </h2>

                <p className="text-muted leading-relaxed mb-8">
                  {details.overview}
                </p>

                {/* Essential Information */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {information.map((item) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={item.label}
                        className="bg-white border border-primary/10 rounded-xl p-5 flex items-start gap-4"
                      >

                        <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">

                          <Icon
                            size={22}
                            className="text-secondary"
                          />

                        </div>

                        <div>

                          <p className="text-muted text-xs mb-2">
                            {item.label}
                          </p>

                          <p className="text-primary text-sm font-semibold">
                            {item.value}
                          </p>

                        </div>

                      </div>
                    )
                  })}

                </div>

              </section>

              {/* Tour Highlights */}

              <section className="mb-12">

                <h2 className="font-heading text-3xl font-semibold text-primary mb-6">
                  Tour Highlights
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {(tour.highlights || []).map((highlight) => (

                    <div
                      key={highlight}
                      className="flex items-start gap-3 bg-white border border-primary/10 rounded-xl p-4"
                    >

                      <CheckCircle
                        size={19}
                        className="text-secondary shrink-0"
                      />

                      <span className="text-muted text-sm">
                        {highlight}
                      </span>

                    </div>

                  ))}

                </div>

              </section>

              {/* Day-by-Day Itinerary */}

              <TourItinerary
                key={tour.id}
                itinerary={details.itinerary}
              />

              {/* Package Inclusions */}

              <TourInclusions
                included={details.included}
                excluded={details.excluded}
              />

              {/* Featured Destinations */}

              <section>

                <h2 className="font-heading text-3xl font-semibold text-primary mb-6">
                  Destinations You'll Visit
                </h2>

                <div className="space-y-4">

                  {tourDestinations.map((destination) => (

                    <Link
                      key={destination.id}
                      to={`/destinations/${destination.id}`}
                      className="group flex items-center gap-4 bg-white border border-primary/10 rounded-xl p-3 hover:shadow-md transition-shadow"
                    >

                      <img
                        src={destination.image}
                        alt={destination.name}
                        loading="lazy"
                        className="w-20 h-20 md:w-28 md:h-24 rounded-lg object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">

                        <h3 className="font-heading text-xl font-semibold text-primary">
                          {destination.name}
                        </h3>

                        <p className="text-muted text-xs mt-2">
                          {destination.location}
                        </p>

                      </div>

                      <ArrowRight
                        size={20}
                        className="text-secondary shrink-0 group-hover:translate-x-1 transition-transform"
                      />

                    </Link>

                  ))}

                </div>

              </section>

            </div>

            {/* Booking and Price Estimator */}

            <div className="min-w-0">

              <TourBookingCard
                key={tour.id}
                tour={tour}
                details={details}
              />

            </div>

          </div>

        </div>

      </section>

      {/* Related Tour Packages */}

      <RelatedTourPackages
        key={tour.id}
        tour={tour}
      />

    </>
  )
}

export default TourPackageDetails
