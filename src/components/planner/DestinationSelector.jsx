
import {
  CheckCircle,
  Circle,
  MapPin,
} from 'lucide-react'

import destinations from '../../data/destinations'

function DestinationSelector({ selected, onChange }) {

  function toggleDestination(id) {
    onChange(
      selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id]
    )
  }

  return (
    <section>

      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-3">
        Where Would You Like to Go?
      </h2>

      <p className="text-muted text-sm leading-relaxed mb-8">
        Choose the destinations you would love to explore.
        Your selection will help us create your itinerary.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {destinations.map((destination) => {
          const isSelected = selected.includes(destination.id)

          return (
            <button
              key={destination.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleDestination(destination.id)}
              className={`group text-left bg-white rounded-2xl border-2 overflow-hidden transition-all ${
                isSelected
                  ? 'border-secondary shadow-md'
                  : 'border-primary/10 hover:border-secondary/50'
              }`}
            >

              <div className="relative h-44 overflow-hidden">

                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-3 right-3 bg-white rounded-full p-2">

                  {isSelected ? (
                    <CheckCircle
                      size={23}
                      className="text-secondary"
                    />
                  ) : (
                    <Circle
                      size={23}
                      className="text-muted"
                    />
                  )}

                </div>

              </div>

              <div className="p-4">

                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  {destination.name}
                </h3>

                <p className="flex items-center gap-2 text-muted text-xs">
                  <MapPin size={15} className="shrink-0" />
                  {destination.location}
                </p>

              </div>

            </button>
          )
        })}

      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mt-6">

        <p aria-live="polite" className="text-secondary text-sm font-medium">
          {selected.length} destination(s) selected
        </p>

        <button
          type="button"
          onClick={() => onChange([])}
          className="text-muted text-sm hover:text-primary"
        >
          Clear All
        </button>

      </div>

    </section>
  )
}

export default DestinationSelector
