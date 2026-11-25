
import { useState } from 'react'
import { ChevronDown, CalendarDays } from 'lucide-react'

function TourItinerary({ itinerary }) {
  const [openDays, setOpenDays] = useState([1])

  function toggleDay(day) {
    setOpenDays((previous) =>
      previous.includes(day)
        ? previous.filter((item) => item !== day)
        : [...previous, day]
    )
  }

  return (
    <section className="mb-12">

      <div className="flex items-center gap-3 mb-3">

        <CalendarDays size={28} className="text-secondary" />

        <h2 className="font-heading text-3xl font-semibold text-primary">
          Your Day-by-Day Itinerary
        </h2>

      </div>

      <p className="text-muted text-sm mb-6">
        Discover what your journey has in store each day.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">

        <button
          type="button"
          onClick={() =>
            setOpenDays(itinerary.map((item) => item.day))
          }
          className="text-secondary text-sm font-medium hover:text-primary"
        >
          Expand All
        </button>

        <span className="text-muted">|</span>

        <button
          type="button"
          onClick={() => setOpenDays([])}
          className="text-secondary text-sm font-medium hover:text-primary"
        >
          Collapse All
        </button>

      </div>

      <div className="space-y-4">

        {itinerary.map((item) => {
          const isOpen = openDays.includes(item.day)

          return (
            <article
              key={item.day}
              className="bg-white rounded-2xl border border-primary/10 overflow-hidden"
            >

              <h3>

                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`itinerary-day-${item.day}`}
                  onClick={() => toggleDay(item.day)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-cream transition-colors"
                >

                  <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold shrink-0">
                    {String(item.day).padStart(2, '0')}
                  </span>

                  <span className="flex-1">

                    <span className="block text-secondary text-xs mb-1">
                      Day {item.day}
                    </span>

                    <span className="font-heading text-lg md:text-xl font-semibold text-primary">
                      {item.title}
                    </span>

                  </span>

                  <ChevronDown
                    size={22}
                    className={`text-secondary shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />

                </button>

              </h3>

              <div
                id={`itinerary-day-${item.day}`}
                hidden={!isOpen}
                className="px-5 pb-6"
              >

                <p className="border-t border-primary/10 pt-4 text-muted text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>

            </article>
          )
        })}

      </div>

    </section>
  )
}

export default TourItinerary
