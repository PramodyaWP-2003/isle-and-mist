
import {
  Compass,
  PawPrint,
  Waves,
  Landmark,
  Mountain,
  Trees,
  Utensils,
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Experiences', icon: Compass },
  { id: 'wildlife', name: 'Wildlife', icon: PawPrint },
  { id: 'beach', name: 'Beach', icon: Waves },
  { id: 'culture', name: 'Culture', icon: Landmark },
  { id: 'adventure', name: 'Adventure', icon: Mountain },
  { id: 'nature', name: 'Nature', icon: Trees },
  { id: 'food', name: 'Food', icon: Utensils },
]

function ExperienceFilters({ category, onCategoryChange }) {
  return (
    <div
      role="group"
      aria-label="Filter experiences by category"
      className="flex flex-wrap justify-center gap-3 my-10"
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
            className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium border transition-all duration-300 ${
              isActive
                ? 'bg-primary text-white border-primary shadow-md'
                : 'bg-white text-primary border-primary/10 hover:border-secondary hover:bg-secondary/10'
            }`}
          >

            <Icon size={18} />

            {item.name}

          </button>
        )
      })}

    </div>
  )
}

export default ExperienceFilters
