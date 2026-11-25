
import {
  CalendarDays,
  MapPin,
  CheckCircle,
  Users,
  Route,
} from 'lucide-react'

import destinations from '../../data/destinations'
import { formatDate } from '../../utils/tripGenerator'

function ItineraryResult({ trip }) {
  return (
    <section>

      <div className="mb-8">

        <p className="text-secondary text-xs uppercase tracking-widest font-semibold mb-3">
          Your Personalized Journey
        </p>

        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
          {trip.name}
        </h2>

        <div className="flex flex-wrap gap-4 text-muted text-sm">

          <span className="flex items-center gap-2">
            <CalendarDays size={18} />
            {trip.preferences.duration} Days
          </span>

          <span className="flex items-center gap-2">
            <Users size={18} />
            {trip.preferences.travelers} Travelers
          </span>

          <span className="flex items-center gap-2">
            <Route size={18} />
            {trip.selectedDestinations.length} Destinations
          </span>

        </div>

      </div>

      <div className="space-y-5">

        {trip.itinerary.map((item) => {
          const destination = destinations.find(
            (entry) => entry.id === item.destinationId
          )

          return (
            <article
              key={item.day}
              className="bg-white border border-primary/10 rounded-2xl overflow-hidden"
            >

              <div className="flex flex-col sm:flex-row">

                {destination && (

                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                    className="w-full sm:w-40 h-44 sm:h-auto object-cover shrink-0"
                  />

                )}

                <div className="p-5 flex-1">

                  <div className="flex flex-wrap items-center gap-3 mb-4">

                    <span className="bg-primary text-white text-xs font-semibold rounded-full px-4 py-2">
                      Day {item.day}
                    </span>

                    <span className="text-muted text-xs">
                      {formatDate(item.date)}
                    </span>

                  </div>

                  <h3 className="flex items-center gap-2 font-heading text-2xl font-semibold text-primary mb-4">

                    <MapPin size={22} className="text-secondary" />

                    {item.destination}

                  </h3>

                  <ul className="space-y-3">

                    {item.activities.map((activity) => (

                      <li
                        key={activity}
                        className="flex items-start gap-2 text-muted text-sm"
                      >

                        <CheckCircle
                          size={17}
                          className="text-secondary shrink-0 mt-0.5"
                        />

                        {activity}

                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            </article>
          )
        })}

      </div>

      <p className="text-muted text-xs leading-relaxed mt-6">
        This is a suggested itinerary. Confirm travel times,
        attraction opening hours, weather and activity
        availability before traveling.
      </p>

    </section>
  )
}

export default ItineraryResult
