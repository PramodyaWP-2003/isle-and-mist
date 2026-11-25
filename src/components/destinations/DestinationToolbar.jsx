
import {
  ArrowDownUp,
  ChevronDown,
  MapPin,
} from 'lucide-react'

const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'az', label: 'Name: A–Z' },
  { value: 'za', label: 'Name: Z–A' },
]

function DestinationToolbar({
  resultCount,
  totalCount,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border border-primary/10 rounded-xl p-4 md:p-5 mb-8">

      {/* Results Counter */}

      <div className="flex items-center gap-3">

        <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">

          <MapPin size={22} />

        </div>

        <div aria-live="polite">

          <p className="text-primary font-semibold text-sm md:text-base">

            {resultCount}{' '}
            {resultCount === 1
              ? 'destination'
              : 'destinations'} found

          </p>

          <p className="text-muted text-xs mt-1">

            Showing {resultCount} of {totalCount} destinations

          </p>

        </div>

      </div>

      {/* Sorting Control */}

      <div className="flex items-center gap-3">

        <ArrowDownUp
          size={18}
          className="text-secondary shrink-0"
        />

        <label
          htmlFor="destination-sort"
          className="text-muted text-sm whitespace-nowrap"
        >
          Sort by:
        </label>

        <div className="relative flex-1 sm:flex-none">

          <select
            id="destination-sort"
            value={sortBy}
            onChange={(event) =>
              onSortChange(event.target.value)
            }
            className="w-full sm:w-auto appearance-none bg-cream border border-primary/10 rounded-lg pl-4 pr-10 py-3 text-sm font-medium text-primary outline-none focus:ring-2 focus:ring-secondary/30 cursor-pointer"
          >

            {sortOptions.map((option) => (

              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>

            ))}

          </select>

          <ChevronDown
            size={17}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
          />

        </div>

      </div>

    </div>
  )
}

export default DestinationToolbar
