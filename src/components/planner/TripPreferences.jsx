
import {
  CalendarDays,
  Users,
  Wallet,
  Clock,
  Hotel,
  Pencil,
} from 'lucide-react'

import { getToday } from '../../utils/tripGenerator'

const inputClass =
  'w-full bg-white border border-primary/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-secondary'

function TripPreferences({ preferences, onChange }) {

  function updateField(field, value) {
    onChange({
      ...preferences,
      [field]: value,
    })
  }

  return (
    <section>

      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-3">
        Customize Your Journey
      </h2>

      <p className="text-muted text-sm leading-relaxed mb-8">
        Tell us when you want to travel, how many people
        are joining and your preferred travel budget.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <div className="sm:col-span-2">

          <label
            htmlFor="trip-name"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-3"
          >
            <Pencil size={18} />
            Trip Name
          </label>

          <input
            id="trip-name"
            type="text"
            maxLength={80}
            value={preferences.name}
            onChange={(event) =>
              updateField('name', event.target.value)
            }
            placeholder="My Sri Lankan Adventure"
            className={inputClass}
          />

        </div>

        <div>

          <label
            htmlFor="trip-date"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-3"
          >
            <CalendarDays size={18} />
            Travel Start Date
          </label>

          <input
            id="trip-date"
            type="date"
            min={getToday()}
            value={preferences.date}
            onChange={(event) =>
              updateField('date', event.target.value)
            }
            className={inputClass}
          />

        </div>

        <div>

          <label
            htmlFor="trip-duration"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-3"
          >
            <Clock size={18} />
            Trip Duration
          </label>

          <select
            id="trip-duration"
            value={preferences.duration}
            onChange={(event) =>
              updateField('duration', Number(event.target.value))
            }
            className={inputClass}
          >

            {Array.from({ length: 14 }, (_, index) => index + 1)
              .map((day) => (

                <option key={day} value={day}>
                  {day} {day === 1 ? 'Day' : 'Days'}
                </option>

              ))}

          </select>

        </div>

        <div>

          <label
            htmlFor="trip-travelers"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-3"
          >
            <Users size={18} />
            Number of Travelers
          </label>

          <select
            id="trip-travelers"
            value={preferences.travelers}
            onChange={(event) =>
              updateField('travelers', Number(event.target.value))
            }
            className={inputClass}
          >

            {Array.from({ length: 12 }, (_, index) => index + 1)
              .map((number) => (

                <option key={number} value={number}>
                  {number} {number === 1 ? 'Traveler' : 'Travelers'}
                </option>

              ))}

          </select>

        </div>

        <div>

          <label
            htmlFor="trip-style"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-3"
          >
            <Hotel size={18} />
            Travel Style
          </label>

          <select
            id="trip-style"
            value={preferences.style}
            onChange={(event) =>
              updateField('style', event.target.value)
            }
            className={inputClass}
          >

            <option value="budget">Budget Friendly</option>
            <option value="standard">Standard Comfort</option>
            <option value="luxury">Luxury Experience</option>

          </select>

        </div>

        <div className="sm:col-span-2">

          <label
            htmlFor="trip-budget"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-3"
          >
            <Wallet size={18} />
            Total Trip Budget (USD)
          </label>

          <input
            id="trip-budget"
            type="number"
            min="0"
            max="1000000"
            step="1"
            value={preferences.budget}
            onChange={(event) =>
              updateField('budget', event.target.value)
            }
            placeholder="Enter your total budget"
            className={inputClass}
          />

          <p className="text-muted text-xs mt-2">
            Enter your budget for the entire group.
            Leave empty if you have no fixed budget.
          </p>

        </div>

      </div>

    </section>
  )
}

export default TripPreferences
