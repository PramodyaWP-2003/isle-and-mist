
import {
  Bookmark,
  CalendarDays,
  Users,
  MapPin,
  Pencil,
  Trash2,
  Eye,
} from 'lucide-react'

import {
  formatCurrency,
  formatDate,
} from '../../utils/tripGenerator'

function SavedTrips({
  trips,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <section className="section-padding bg-white">

      <div className="section-container">

        <div className="text-center mb-10">

          <Bookmark
            size={34}
            className="text-secondary mx-auto mb-4"
          />

          <h2 className="section-title mb-4">
            Your Saved Trips
          </h2>

          <p className="section-description">
            Revisit, customize or remove your saved journeys.
          </p>

        </div>

        {trips.length === 0 ? (

          <div className="bg-cream rounded-2xl p-10 text-center">

            <Bookmark
              size={38}
              className="text-secondary mx-auto mb-4"
            />

            <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
              No Saved Trips Yet
            </h3>

            <p className="text-muted text-sm">
              Create your first itinerary and save it here.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {trips.map((trip) => (

              <article
                key={trip.id}
                className="bg-cream border border-primary/10 rounded-2xl p-6 flex flex-col"
              >

                <h3 className="font-heading text-2xl font-semibold text-primary mb-5 break-words">
                  {trip.name}
                </h3>

                <div className="space-y-3 text-muted text-sm mb-5">

                  <p className="flex items-center gap-2">
                    <CalendarDays size={17} />
                    {formatDate(trip.preferences.date)}
                    {' · '}
                    {trip.preferences.duration} Days
                  </p>

                  <p className="flex items-center gap-2">
                    <Users size={17} />
                    {trip.preferences.travelers} Travelers
                  </p>

                  <p className="flex items-center gap-2">
                    <MapPin size={17} />
                    {trip.selectedDestinations.length} Destinations
                  </p>

                </div>

                <p className="text-primary text-2xl font-semibold mb-6">
                  {formatCurrency(trip.cost.total)}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto border-t border-primary/10 pt-5">

                  <button
                    type="button"
                    onClick={() => onView(trip)}
                    className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-4 py-2 text-xs hover:bg-secondary"
                  >
                    <Eye size={15} />
                    View
                  </button>

                  <button
                    type="button"
                    onClick={() => onEdit(trip)}
                    className="inline-flex items-center gap-2 border border-primary/20 text-primary rounded-full px-4 py-2 text-xs hover:bg-white"
                  >
                    <Pencil size={15} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => onDelete(trip.id)}
                    className="inline-flex items-center gap-2 border border-red-200 text-red-600 rounded-full px-4 py-2 text-xs hover:bg-red-50"
                  >
                    <Trash2 size={15} />
                    Delete
                  </button>

                </div>

              </article>

            ))}

          </div>

        )}

      </div>

    </section>
  )
}

export default SavedTrips
