
import { Link } from 'react-router-dom'

import {
  Heart,
  Compass,
} from 'lucide-react'

import destinations from '../../data/destinations'

import DestinationCard from '../ui/DestinationCard'

function DashboardFavorites({
  favorites = [],
  compact = false,
  onViewAll,
}) {
  const favoriteDestinations =
    favorites
      .map((id) =>
        destinations.find(
          (destination) => destination.id === id
        )
      )
      .filter(Boolean)

  const displayedDestinations =
    compact
      ? favoriteDestinations.slice(0, 2)
      : favoriteDestinations

  return (
    <section className="bg-white rounded-2xl border border-primary/10 p-5 sm:p-7">

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-rose-50 text-rose-600 rounded-xl p-3">

          <Heart size={22} />

        </div>

        <div>

          <h2 className="font-heading text-2xl text-primary font-semibold">

            Favorite Destinations

          </h2>

          <p className="text-muted text-xs sm:text-sm mt-1">

            Keep your dream destinations in one place.

          </p>

        </div>

      </div>

      {displayedDestinations.length === 0 ? (

        <div className="bg-cream rounded-2xl py-12 px-5 text-center">

          <Heart
            size={42}
            className="text-secondary mx-auto mb-4"
          />

          <h3 className="font-heading text-xl text-primary font-semibold mb-3">

            No Favorites Yet

          </h3>

          <p className="text-muted text-sm mb-6">

            Explore destinations and click the heart
            icon to save your favorites.

          </p>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-xl px-5 py-3 text-sm"
          >

            <Compass size={18} />

            Discover Destinations

          </Link>

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {displayedDestinations.map((destination) => (

            <DestinationCard
              key={destination.id}
              destination={destination}
            />

          ))}

        </div>

      )}

      {compact && favoriteDestinations.length > 2 && (

        <button
          type="button"
          onClick={onViewAll}
          className="text-secondary text-sm font-medium mt-6 hover:text-primary"
        >

          View All Favorites ({favoriteDestinations.length})

        </button>

      )}

    </section>
  )
}

export default DashboardFavorites
