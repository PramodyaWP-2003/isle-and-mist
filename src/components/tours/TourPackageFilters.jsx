
import {
  Search,
  Compass,
  RotateCcw,
  Wallet,
  ArrowDownUp,
} from 'lucide-react'

function TourPackageFilters({
  search,
  category,
  budget,
  sortBy,
  categories,
  onFilterChange,
  onReset,
}) {
  return (
    <div className="bg-white rounded-2xl border border-primary/10 shadow-sm p-5 md:p-7 mb-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Search */}

        <div>
          <label
            htmlFor="tour-search"
            className="block text-primary text-sm font-medium mb-2"
          >
            Search Packages
          </label>

          <div className="relative">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary"
            />

            <input
              id="tour-search"
              type="search"
              value={search}
              onChange={(event) =>
                onFilterChange('search', event.target.value)
              }
              placeholder="Find your tour..."
              className="w-full border border-primary/15 rounded-xl pl-10 pr-3 py-3 text-sm outline-none focus:border-secondary"
            />

          </div>
        </div>

        {/* Category */}

        <div>
          <label
            htmlFor="tour-category"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-2"
          >
            <Compass size={16} />
            Category
          </label>

          <select
            id="tour-category"
            value={category}
            onChange={(event) =>
              onFilterChange('category', event.target.value)
            }
            className="w-full border border-primary/15 rounded-xl px-3 py-3 text-sm bg-white outline-none focus:border-secondary"
          >

            <option value="all">All Categories</option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

          </select>
        </div>

        {/* Budget */}

        <div>
          <label
            htmlFor="tour-budget"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-2"
          >
            <Wallet size={16} />
            Budget per Person
          </label>

          <select
            id="tour-budget"
            value={budget}
            onChange={(event) =>
              onFilterChange('budget', event.target.value)
            }
            className="w-full border border-primary/15 rounded-xl px-3 py-3 text-sm bg-white outline-none focus:border-secondary"
          >
            <option value="all">Any Budget</option>
            <option value="250">Up to $250</option>
            <option value="300">Up to $300</option>
            <option value="350">Up to $350</option>
            <option value="500">Up to $500</option>
          </select>
        </div>

        {/* Sorting */}

        <div>
          <label
            htmlFor="tour-sort"
            className="flex items-center gap-2 text-primary text-sm font-medium mb-2"
          >
            <ArrowDownUp size={16} />
            Sort By
          </label>

          <select
            id="tour-sort"
            value={sortBy}
            onChange={(event) =>
              onFilterChange('sort', event.target.value)
            }
            className="w-full border border-primary/15 rounded-xl px-3 py-3 text-sm bg-white outline-none focus:border-secondary"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="az">Name: A–Z</option>
          </select>
        </div>

      </div>

      <div className="flex justify-end mt-5">

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 text-secondary text-sm font-medium hover:text-primary"
        >
          <RotateCcw size={16} />
          Reset All Filters
        </button>

      </div>

    </div>
  )
}

export default TourPackageFilters
