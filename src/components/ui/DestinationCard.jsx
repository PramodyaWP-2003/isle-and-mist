
import { useState } from 'react'

import { Link } from 'react-router-dom'

import {
  Heart,
  MapPin,
  Star,
  ArrowRight,
} from 'lucide-react'

import useFavorites from '../../hooks/useFavorites'

function DestinationCard({ destination }) {
  const {
    favorites,
    toggleFavorite,
  } = useFavorites()

  const [error, setError] = useState('')

  const isFavorite =
    favorites.includes(destination.id)

  function handleFavorite() {
    try {
      toggleFavorite(destination.id)

      setError('')
    } catch {
      setError('Unable to save favorite.')
    }
  }

  return (
    <article className="group h-full flex flex-col overflow-hidden bg-white rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-shadow">

      <div className="relative h-56 overflow-hidden shrink-0">

        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 left-4 bg-white/95 text-primary rounded-full px-3 py-1.5 text-xs font-medium capitalize">

          {destination.category}

        </div>

        <button
          type="button"
          onClick={handleFavorite}
          aria-label={
            isFavorite
              ? `Remove ${destination.name} from favorites`
              : `Add ${destination.name} to favorites`
          }
          aria-pressed={isFavorite}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition-transform"
        >

          <Heart
            size={20}
            className={
              isFavorite
                ? 'fill-red-500 text-red-500'
                : 'text-primary'
            }
          />

        </button>

      </div>

      <div className="flex flex-col flex-1 p-5">

        <div className="flex items-center justify-between gap-2 mb-3">

          <h3 className="font-heading text-2xl text-primary font-semibold">

            {destination.name}

          </h3>

          <span className="flex items-center gap-1 text-xs font-medium text-primary shrink-0">

            <Star
              size={15}
              className="fill-amber-400 text-amber-400"
            />

            {destination.rating}

          </span>

        </div>

        <p className="flex items-center gap-1.5 text-muted text-xs mb-4">

          <MapPin size={15} />

          {destination.location}

        </p>

        <p className="text-muted text-sm leading-relaxed mb-5">

          {destination.description}

        </p>

        {error && (

          <p role="alert" className="text-red-600 text-xs mb-3">

            {error}

          </p>

        )}

        <Link
          to={`/destinations/${destination.id}`}
          className="mt-auto inline-flex items-center justify-between gap-2 border-t border-primary/10 pt-4 text-primary font-medium text-sm hover:text-secondary"
        >

          Explore Destination

          <ArrowRight size={18} />

        </Link>

      </div>

    </article>
  )
}

export default DestinationCard
