
import {
  Search,
  X,
  Compass,
  Mountain,
  Waves,
  Landmark,
  PawPrint,
  Tent,
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'All', icon: Compass },
  { id: 'nature', label: 'Nature', icon: Mountain },
  { id: 'beach', label: 'Beach', icon: Waves },
  { id: 'culture', label: 'Culture', icon: Landmark },
  { id: 'wildlife', label: 'Wildlife', icon: PawPrint },
  { id: 'adventure', label: 'Adventure', icon: Tent },
]

function DestinationFilters({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}) {
  return (
    <div className="bg-white border border-primary/10 rounded-2xl shadow-sm p-5 md:p-8 mb-10">

      {/* Search Input */}

      <div className="relative max-w-2xl mx-auto mb-8">

        <Search
          size={22}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
        />

        <input
          type="search"
          aria-label="Search destinations"
          placeholder="Search destinations, locations..."
          value={search}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          className="w-full bg-cream border border-primary/10 rounded-xl py-4 pl-12 pr-12 text-sm text-dark outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all [&::-webkit-search-cancel-button]:hidden"
        />

        {search && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-primary"
          >
            <X size={20} />
          </button>
        )}

      </div>

      {/* Category Filters */}

      <div
        role="group"
        aria-label="Destination categories"
        className="flex flex-wrap items-center justify-center gap-3"
      >

        {categories.map((item) => {
          const Icon = item.icon
          const isActive = category === item.id

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(item.id)}
              className={`inline-flex items-center gap-2 px-4 md:px-6 py-3 rounded-full border text-xs md:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-primary text-white border-primary'
                  : 'bg-cream text-secondary border-primary/10 hover:border-secondary hover:bg-secondary/10'
              }`}
            >

              <Icon size={17} />

              {item.label}

            </button>
          )
        })}

      </div>

    </div>
  )
}

export default DestinationFilters
