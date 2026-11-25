
import {
  PawPrint,
  Waves,
  Landmark,
  Mountain,
  Trees,
  Utensils,
  CheckCircle,
  Circle,
  Compass,
} from 'lucide-react'

import experiences from '../../data/experiences'

const interestIcons = {
  wildlife: PawPrint,
  beach: Waves,
  culture: Landmark,
  adventure: Mountain,
  nature: Trees,
  food: Utensils,
}

function InterestSelector({ selected, onChange }) {

  function toggleInterest(id) {
    onChange(
      selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id]
    )
  }

  return (
    <section>

      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-3">
        What Do You Love to Experience?
      </h2>

      <p className="text-muted text-sm leading-relaxed mb-8">
        Select your travel interests to personalize your
        journey. You can also skip this step.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {experiences.map((experience) => {
          const Icon = interestIcons[experience.id] || Compass

          const isSelected = selected.includes(experience.id)

          return (
            <button
              key={experience.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleInterest(experience.id)}
              className={`text-left rounded-2xl border-2 p-6 transition-all ${
                isSelected
                  ? 'border-secondary bg-secondary/10'
                  : 'border-primary/10 bg-white hover:border-secondary/50'
              }`}
            >

              <div className="flex items-center justify-between mb-5">

                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">

                  <Icon size={28} className="text-secondary" />

                </div>

                {isSelected ? (
                  <CheckCircle
                    size={23}
                    className="text-secondary"
                  />
                ) : (
                  <Circle
                    size={23}
                    className="text-muted"
                  />
                )}

              </div>

              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                {experience.title}
              </h3>

              <p className="text-muted text-xs leading-relaxed">
                {experience.description}
              </p>

            </button>
          )
        })}

      </div>

      <p
        aria-live="polite"
        className="text-secondary text-sm font-medium mt-6"
      >
        {selected.length} interest(s) selected
      </p>

    </section>
  )
}

export default InterestSelector
