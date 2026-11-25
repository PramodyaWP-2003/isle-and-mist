
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  CalendarDays,
  Users,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

function getToday() {
  const now = new Date()

  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function TourBookingCard({ tour, details }) {
  const navigate = useNavigate()

  const [travelDate, setTravelDate] = useState('')
  const [travelers, setTravelers] = useState(2)

  const maxTravelers =
    Number(details.groupSize.match(/\d+/g)?.at(-1)) || 12

  const price = Number(tour.price)
  const totalPrice = price * travelers

  function formatPrice(value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const params = new URLSearchParams({
      package: tour.id,
      date: travelDate,
      travelers: String(travelers),
    })

    navigate(`/trip-planner?${params.toString()}`)
  }

  return (
    <aside className="bg-white rounded-2xl border border-primary/10 shadow-lg p-6 lg:sticky lg:top-28">

      <p className="text-muted text-sm mb-2">
        Starting from / per person
      </p>

      <div className="flex items-end gap-2 mb-6">

        <p className="text-primary text-4xl font-semibold">
          {formatPrice(price)}
        </p>

        <span className="text-muted text-sm mb-1">
          USD
        </span>

      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Travel Date */}

        <div>

          <label
            htmlFor="package-date"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-2"
          >
            <CalendarDays size={18} />
            Travel Date
          </label>

          <input
            id="package-date"
            type="date"
            min={getToday()}
            value={travelDate}
            onChange={(event) =>
              setTravelDate(event.target.value)
            }
            required
            className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-secondary"
          />

        </div>

        {/* Travelers */}

        <div>

          <label
            htmlFor="package-travelers"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-2"
          >
            <Users size={18} />
            Number of Travelers
          </label>

          <select
            id="package-travelers"
            value={travelers}
            onChange={(event) =>
              setTravelers(Number(event.target.value))
            }
            className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm bg-white outline-none focus:border-secondary"
          >

            {Array.from(
              { length: maxTravelers - 1 },
              (_, index) => index + 2
            ).map((number) => (

              <option key={number} value={number}>
                {number} Travelers
              </option>

            ))}

          </select>

        </div>

        {/* Price Summary */}

        <div className="bg-cream rounded-xl p-4 space-y-3">

          <div className="flex justify-between gap-3 text-sm text-muted">
            <span>Price per person</span>
            <span>{formatPrice(price)}</span>
          </div>

          <div className="flex justify-between gap-3 text-sm text-muted">
            <span>Travelers</span>
            <span>{travelers}</span>
          </div>

          <div className="border-t border-primary/10 pt-4 flex flex-wrap items-center justify-between gap-2">

            <span className="text-primary font-semibold">
              Estimated Total
            </span>

            <span
              aria-live="polite"
              className="text-primary text-2xl font-semibold"
            >
              {formatPrice(totalPrice)}
            </span>

          </div>

        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white rounded-full px-6 py-4 font-semibold hover:bg-secondary transition-colors"
        >
          Plan This Tour
          <ArrowRight size={19} />
        </button>

      </form>

      <div className="flex items-start gap-2 mt-5 text-muted text-xs leading-relaxed">

        <ShieldCheck
          size={18}
          className="text-secondary shrink-0"
        />

        <p>
          This is an estimated package price.
          No payment or confirmed reservation is required.
        </p>

      </div>

    </aside>
  )
}

export default TourBookingCard
