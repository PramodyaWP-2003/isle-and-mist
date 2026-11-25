
import { Link } from 'react-router-dom'

import {
  Map,
  MapPin,
  CalendarDays,
  Users,
  Clock,
  Eye,
  Pencil,
  Trash2,
  Plus,
} from 'lucide-react'

import destinations from '../../data/destinations'

import {
  formatDate,
  formatCurrency,
  getToday,
} from '../../utils/tripGenerator'

function DashboardTrips({
  trips = [],
  onDelete,
  compact = false,
  onViewAll,
}) {
  const displayedTrips =
    compact ? trips.slice(0, 3) : trips

  return (
    <section className="bg-white rounded-2xl border border-primary/10 p-5 sm:p-7">

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

        <div>

          <h2 className="font-heading text-2xl text-primary font-semibold">

            My Saved Trips

          </h2>

          <p className="text-muted text-xs sm:text-sm mt-2">

            Manage your personalized travel plans.

          </p>

        </div>

        <Link
          to="/trip-planner"
          className="inline-flex items-center gap-2 bg-primary text-white rounded-xl px-4 py-3 text-xs sm:text-sm font-medium hover:bg-secondary"
        >

          <Plus size={18} />

          New Trip

        </Link>

      </div>

      {displayedTrips.length === 0 ? (

        <div className="text-center bg-cream rounded-2xl py-12 px-5">

          <Map
            size={42}
            className="text-secondary mx-auto mb-4"
          />

          <h3 className="font-heading text-xl text-primary font-semibold mb-3">

            No Saved Trips Yet

          </h3>

          <p className="text-muted text-sm mb-6">

            Create your first personalized itinerary
            and save it to your account.

          </p>

          <Link
            to="/trip-planner"
            className="inline-flex bg-primary text-white rounded-xl px-5 py-3 text-sm font-medium"
          >

            Plan Your First Trip

          </Link>

        </div>

      ) : (

        <div className="space-y-4">

          {displayedTrips.map((trip) => {

            const destination = destinations.find(
              (item) =>
                item.id === trip.selectedDestinations[0]
            )

            const upcoming =
              trip.preferences.date >= getToday()

            const tripUrl =
              `/trip-planner?trip=${encodeURIComponent(trip.id)}`

            return (
              <article
                key={trip.id}
                className="flex flex-col sm:flex-row gap-4 border border-primary/10 rounded-2xl p-3 sm:p-4"
              >

                {destination && (

                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                    className="w-full sm:w-32 lg:w-36 h-44 sm:h-auto sm:min-h-36 rounded-xl object-cover"
                  />

                )}

                <div className="flex-1 min-w-0">

                  <div className="flex flex-wrap items-center gap-2 mb-3">

                    <h3 className="text-primary font-semibold break-words">

                      {trip.name}

                    </h3>

                    <span className={`text-[10px] rounded-full px-2.5 py-1 ${
                      upcoming
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-muted'
                    }`}>

                      {upcoming ? 'Upcoming' : 'Past Start Date'}

                    </span>

                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-muted text-xs">

                    <span className="flex items-center gap-1.5">

                      <CalendarDays size={15} />

                      {formatDate(trip.preferences.date)}

                    </span>

                    <span className="flex items-center gap-1.5">

                      <Clock size={15} />

                      {trip.preferences.duration} days

                    </span>

                    <span className="flex items-center gap-1.5">

                      <Users size={15} />

                      {trip.preferences.travelers} travelers

                    </span>

                    <span className="flex items-center gap-1.5">

                      <MapPin size={15} />

                      {trip.selectedDestinations.length} destinations

                    </span>

                  </div>

                  <p className="text-primary font-semibold text-lg mt-4">

                    {formatCurrency(trip.cost.total)}

                    <span className="text-muted text-xs font-normal ml-2">

                      Estimated total

                    </span>

                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">

                    <Link
                      to={tripUrl}
                      className="inline-flex items-center gap-1.5 bg-primary text-white rounded-lg px-3 py-2 text-xs"
                    >

                      <Eye size={15} />

                      View

                    </Link>

                    <Link
                      to={`${tripUrl}&mode=edit`}
                      className="inline-flex items-center gap-1.5 bg-cream text-primary rounded-lg px-3 py-2 text-xs"
                    >

                      <Pencil size={15} />

                      Edit

                    </Link>

                    <button
                      type="button"
                      onClick={() => onDelete(trip.id)}
                      className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 rounded-lg px-3 py-2 text-xs hover:bg-red-100"
                    >

                      <Trash2 size={15} />

                      Delete

                    </button>

                  </div>

                </div>

              </article>
            )
          })}

        </div>

      )}

      {compact && trips.length > 3 && (

        <button
          type="button"
          onClick={onViewAll}
          className="text-secondary font-medium text-sm mt-6 hover:text-primary"
        >

          View All Saved Trips ({trips.length})

        </button>

      )}

    </section>
  )
}

export default DashboardTrips
