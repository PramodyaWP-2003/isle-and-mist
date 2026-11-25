
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MapPin,
  Compass,
  CalendarDays,
  Search,
} from 'lucide-react'

import SectionHeading from '../ui/SectionHeading'

const destinations = [
  'Ella',
  'Sigiriya',
  'Mirissa',
  'Kandy',
  'Galle',
  'Nuwara Eliya',
  'Yala',
]

const experiences = [
  'Adventure',
  'Beach',
  'Culture',
  'Wildlife',
  'Nature',
]

function DestinationSearch() {
  const navigate = useNavigate()

  const [destination, setDestination] = useState('')
  const [experience, setExperience] = useState('')
  const [travelDate, setTravelDate] = useState('')

  const now = new Date()

  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('-')

  function handleSearch(event) {
    event.preventDefault()

    const params = new URLSearchParams()

    if (destination) {
      params.set('destination', destination)
    }

    if (experience) {
      params.set('experience', experience)
    }

    if (travelDate) {
      params.set('date', travelDate)
    }

    const query = params.toString()

    navigate(
      query ? `/destinations?${query}` : '/destinations'
    )
  }

  return (
    <section
      id="discover"
      className="section-padding scroll-mt-20 bg-cream"
    >

      <div className="section-container">

        <SectionHeading
          subtitle="Your Next Adventure"
          title="Find Your Perfect Escape"
          description="Every great journey begins with a destination. Find the perfect Sri Lankan experience for you."
        />

        <form
          onSubmit={handleSearch}
          className="bg-white rounded-3xl shadow-lg border border-primary/10 p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end"
        >

          {/* Destination */}

          <div>
            <label
              htmlFor="destination"
              className="flex items-center gap-2 text-primary font-semibold text-sm mb-3"
            >
              <MapPin size={20} />
              Destination
            </label>

            <select
              id="destination"
              value={destination}
              onChange={(event) =>
                setDestination(event.target.value)
              }
              className="w-full min-w-0 bg-cream border border-primary/10 rounded-xl px-4 py-4 text-sm text-dark"
            >
              <option value="">All destinations</option>

              {destinations.map((item) => (
                <option
                  key={item}
                  value={item.toLowerCase()}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Experience */}

          <div>
            <label
              htmlFor="experience"
              className="flex items-center gap-2 text-primary font-semibold text-sm mb-3"
            >
              <Compass size={20} />
              Experience
            </label>

            <select
              id="experience"
              value={experience}
              onChange={(event) =>
                setExperience(event.target.value)
              }
              className="w-full min-w-0 bg-cream border border-primary/10 rounded-xl px-4 py-4 text-sm text-dark"
            >
              <option value="">All experiences</option>

              {experiences.map((item) => (
                <option
                  key={item}
                  value={item.toLowerCase()}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Travel Date */}

          <div>
            <label
              htmlFor="travelDate"
              className="flex items-center gap-2 text-primary font-semibold text-sm mb-3"
            >
              <CalendarDays size={20} />
              Travel Date
            </label>

            <input
              id="travelDate"
              type="date"
              min={today}
              value={travelDate}
              onChange={(event) =>
                setTravelDate(event.target.value)
              }
              className="w-full min-w-0 bg-cream border border-primary/10 rounded-xl px-4 py-4 text-sm text-dark"
            />
          </div>

          {/* Search Button */}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-5 py-4 text-sm font-semibold hover:bg-secondary transition-colors duration-300"
          >
            <Search size={20} />
            Explore Sri Lanka
          </button>

        </form>

      </div>

    </section>
  )
}

export default DestinationSearch
