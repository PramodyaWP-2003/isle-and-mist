
import {
  MapPin,
  Compass,
  CalendarDays,
  Route,
  Check,
} from 'lucide-react'

const steps = [
  { title: 'Destinations', icon: MapPin },
  { title: 'Interests', icon: Compass },
  { title: 'Trip Details', icon: CalendarDays },
  { title: 'Your Plan', icon: Route },
]

function PlannerSteps({ currentStep }) {
  return (
    <nav
      aria-label="Trip planning progress"
      className="grid grid-cols-4 gap-2 mb-10"
    >

      {steps.map((step, index) => {
        const Icon = step.icon
        const number = index + 1
        const isActive = currentStep === number
        const isCompleted = currentStep > number

        return (
          <div
            key={step.title}
            aria-current={isActive ? 'step' : undefined}
            className="relative flex flex-col items-center text-center"
          >

            {index < steps.length - 1 && (
              <div
                aria-hidden="true"
                className={`absolute top-6 left-1/2 w-full h-0.5 ${
                  isCompleted
                    ? 'bg-secondary'
                    : 'bg-primary/10'
                }`}
              />
            )}

            <div
              className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 ${
                isActive || isCompleted
                  ? 'bg-primary text-white border-primary'
                  : 'bg-cream text-muted border-primary/10'
              }`}
            >

              {isCompleted
                ? <Check size={23} />
                : <Icon size={23} />}

            </div>

            <span
              className={`mt-3 text-[10px] sm:text-sm font-medium ${
                isActive || isCompleted
                  ? 'text-primary'
                  : 'text-muted'
              }`}
            >
              {step.title}
            </span>

          </div>
        )
      })}

    </nav>
  )
}

export default PlannerSteps
