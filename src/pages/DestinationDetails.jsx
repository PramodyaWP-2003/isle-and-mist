
import { Link, useParams } from 'react-router-dom'
import { MapPinOff, ArrowLeft } from 'lucide-react'

// Destination Components

import DestinationDetailsHero from '../components/destinations/DestinationDetailsHero'
import DestinationOverview from '../components/destinations/DestinationOverview'
import DestinationGallery from '../components/destinations/DestinationGallery'
import DestinationAttractions from '../components/destinations/DestinationAttractions'
import DestinationActivities from '../components/destinations/DestinationActivities'
import DestinationTravelTips from '../components/destinations/DestinationTravelTips'
import DestinationTripCTA from '../components/destinations/DestinationTripCTA'
import RelatedDestinations from '../components/destinations/RelatedDestinations'

// Destination Data

import destinations from '../data/destinations'
import destinationDetails from '../data/destinationDetails'

function DestinationDetails() {
  const { id } = useParams()

  const destination = destinations.find(
    (item) => item.id === id
  )

  const details = destinationDetails[id]

  // Invalid Destination Handling

  if (!destination) {
    return (
      <section className="section-padding bg-cream min-h-[60vh] flex items-center">

        <div className="section-container text-center">

          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">

            <MapPinOff
              size={36}
              className="text-secondary"
            />

          </div>

          <h1 className="font-heading text-4xl font-semibold text-primary mb-4">

            Destination Not Found

          </h1>

          <p className="text-muted mb-8">

            Sorry, we couldn't find the destination
            you are looking for.

          </p>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
          >

            <ArrowLeft size={18} />

            Back to Destinations

          </Link>

        </div>

      </section>
    )
  }

  return (
    <>

      {/* 01 - Destination Hero */}

      <DestinationDetailsHero
        key={destination.id}
        destination={destination}
      />

      {/* 02 - Destination Overview */}

      {details ? (

        <DestinationOverview
          destination={destination}
          details={details}
        />

      ) : (

        <section className="section-padding bg-cream">

          <div className="section-container">

            <h2 className="section-title mb-6">

              About {destination.name}

            </h2>

            <p className="section-description">

              {destination.description}

            </p>

          </div>

        </section>

      )}

      {/* 03 - Destination Photo Gallery */}

      <DestinationGallery
        key={destination.id}
        destination={destination}
      />

      {/* 04 - Top Attractions */}

      <DestinationAttractions
        destination={destination}
      />

      {/* 05 - Things to Do */}

      <DestinationActivities
        destination={destination}
      />

      {/* 06 - Essential Travel Tips */}

      <DestinationTravelTips
        destination={destination}
      />

      {/* 07 - Trip Planner CTA */}

      <DestinationTripCTA
        destination={destination}
      />

      {/* 08 - Related Destinations */}

      <RelatedDestinations
        key={destination.id}
        destination={destination}
      />

    </>
  )
}

export default DestinationDetails
