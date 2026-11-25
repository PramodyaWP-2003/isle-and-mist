
import { SearchX, RotateCcw } from 'lucide-react'

function DestinationEmptyState({ onReset }) {
  return (
    <div className="bg-white border border-primary/10 rounded-2xl py-16 px-6 text-center">

      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">

        <SearchX
          size={36}
          className="text-secondary"
        />

      </div>

      <h3 className="font-heading text-3xl font-semibold text-primary mb-4">
        No destinations found
      </h3>

      <p className="text-muted text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
        We couldn't find any destinations matching your
        search. Try a different keyword or reset your filters.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-secondary transition-colors"
      >

        <RotateCcw size={18} />

        Clear All Filters

      </button>

    </div>
  )
}

export default DestinationEmptyState
