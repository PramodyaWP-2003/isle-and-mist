
import { useSearchParams } from 'react-router-dom'
import { X, RotateCcw } from 'lucide-react'

import DestinationsHero from '../components/destinations/DestinationsHero'
import DestinationFilters from '../components/destinations/DestinationFilters'
import DestinationToolbar from '../components/destinations/DestinationToolbar'
import DestinationGrid from '../components/destinations/DestinationGrid'
import DestinationEmptyState from '../components/destinations/DestinationEmptyState'
import SectionHeading from '../components/ui/SectionHeading'

import destinations from '../data/destinations'

function normalize(value = '') {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[-_]+/g, ' ')
}

function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search =
    searchParams.get('destination') || ''

  const category =
    searchParams.get('experience') || 'all'

  const selectedDate =
    searchParams.get('date') || ''

  const sortBy =
    searchParams.get('sort') || 'recommended'

  // Update URL search parameters

  function updateFilter(key, value) {
    setSearchParams((previous) => {
      const params = new URLSearchParams(previous)

      if (
        !value ||
        (key === 'experience' && value === 'all') ||
        (key === 'sort' && value === 'recommended')
      ) {
        params.delete(key)
      } else {
        params.set(key, value)
      }

      return params
    }, { replace: true })
  }

  // Reset all filters

  function resetFilters() {
    setSearchParams({}, { replace: true })
  }

  // Check whether filters are active

  const hasActiveFilters =
    Boolean(search) ||
    category !== 'all' ||
    Boolean(selectedDate) ||
    sortBy !== 'recommended'

  // Search and filter destinations

  const filteredDestinations = destinations.filter(
    (destination) => {

      const searchTerm = normalize(search)

      const searchableText = normalize(
        [
          destination.id,
          destination.name,
          destination.location,
          destination.category,
          destination.description,
          ...(destination.experiences || []),
        ].join(' ')
      )

      const matchesSearch =
        searchableText.includes(searchTerm)

      const experienceCategories = (
        destination.experiences || []
      ).map(normalize)

      const matchesCategory =
        category === 'all' ||
        normalize(destination.category) ===
          normalize(category) ||
        experienceCategories.includes(
          normalize(category)
        )

      return matchesSearch && matchesCategory
    }
  )

  // Sort filtered destinations

  const sortedDestinations = [
    ...filteredDestinations,
  ].sort((a, b) => {

    switch (sortBy) {

      case 'rating':
        return (b.rating || 0) - (a.rating || 0)

      case 'az':
        return a.name.localeCompare(b.name)

      case 'za':
        return b.name.localeCompare(a.name)

      default:
        return 0
    }

  })

  return (
    <>

      <DestinationsHero />

      <section className="section-padding bg-cream">

        <div className="section-container">

          <SectionHeading
            subtitle="Find Your Next Adventure"
            title="Explore Our Destinations"
            description="Discover the perfect destination for your next Sri Lankan journey."
          />

          {/* Search and Category Filters */}

          <DestinationFilters
            search={search}
            category={category}
            onSearchChange={(value) =>
              updateFilter('destination', value)
            }
            onCategoryChange={(value) =>
              updateFilter('experience', value)
            }
          />

          {/* Active Filters */}

          {hasActiveFilters && (

            <div className="flex flex-wrap items-center gap-3 mb-6">

              <span className="text-sm font-medium text-primary">
                Active filters:
              </span>

              {/* Search Filter */}

              {search && (
                <button
                  type="button"
                  aria-label={`Remove search filter: ${search}`}
                  onClick={() =>
                    updateFilter('destination', '')
                  }
                  className="inline-flex items-center gap-2 bg-secondary/10 text-primary rounded-full px-4 py-2 text-xs max-w-full break-all"
                >
                  Search: {search}
                  <X size={14} className="shrink-0" />
                </button>
              )}

              {/* Category Filter */}

              {category !== 'all' && (
                <button
                  type="button"
                  aria-label="Remove category filter"
                  onClick={() =>
                    updateFilter('experience', 'all')
                  }
                  className="inline-flex items-center gap-2 bg-secondary/10 text-primary rounded-full px-4 py-2 text-xs capitalize"
                >
                  {category}
                  <X size={14} />
                </button>
              )}

              {/* Travel Date Filter */}

              {selectedDate && (
                <button
                  type="button"
                  aria-label="Remove travel date"
                  onClick={() =>
                    updateFilter('date', '')
                  }
                  className="inline-flex items-center gap-2 bg-secondary/10 text-primary rounded-full px-4 py-2 text-xs"
                >
                  Date: {selectedDate}
                  <X size={14} />
                </button>
              )}

              {/* Sorting Filter */}

              {sortBy !== 'recommended' && (
                <button
                  type="button"
                  aria-label="Reset sorting"
                  onClick={() =>
                    updateFilter('sort', 'recommended')
                  }
                  className="inline-flex items-center gap-2 bg-secondary/10 text-primary rounded-full px-4 py-2 text-xs"
                >
                  {sortBy === 'rating'
                    ? 'Highest Rated'
                    : sortBy === 'az'
                    ? 'Name: A–Z'
                    : 'Name: Z–A'}

                  <X size={14} />
                </button>
              )}

              {/* Clear All Filters */}

              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-2 text-secondary hover:text-primary text-xs font-semibold transition-colors"
              >
                <RotateCcw size={14} />
                Clear All
              </button>

            </div>

          )}

          {/* Results and Sorting Toolbar */}

          <DestinationToolbar
            resultCount={sortedDestinations.length}
            totalCount={destinations.length}
            sortBy={sortBy}
            onSortChange={(value) =>
              updateFilter('sort', value)
            }
          />

          {/* Destination Grid or Empty State */}

          {sortedDestinations.length > 0 ? (

            <DestinationGrid
              destinations={sortedDestinations}
            />

          ) : (

            <DestinationEmptyState
              onReset={resetFilters}
            />

          )}

        </div>

      </section>

    </>
  )
}

export default Destinations
