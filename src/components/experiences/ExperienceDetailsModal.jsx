
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import {
  X,
  Clock,
  CalendarDays,
  Activity,
  CheckCircle,
  ArrowRight,
  MapPin,
  Lightbulb,
} from 'lucide-react'

import destinations from '../../data/destinations'

function ExperienceDetailsModal({
  experience,
  details,
  onClose,
}) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) return

    if (!dialog.open) {
      dialog.showModal()
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      if (dialog.open) {
        dialog.close()
      }

      document.body.style.overflow = previousOverflow
    }
  }, [])

  const recommendedDestinations = details.destinations
    .map((id) =>
      destinations.find((destination) => destination.id === id)
    )
    .filter(Boolean)

  const information = [
    {
      icon: Clock,
      label: 'Duration',
      value: details.duration,
    },
    {
      icon: CalendarDays,
      label: 'Best Time',
      value: details.bestTime,
    },
    {
      icon: Activity,
      label: 'Difficulty',
      value: details.difficulty,
    },
  ]

  const tripParams = new URLSearchParams({
    experience: experience.id,
  })

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="experience-modal-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
      className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-3xl max-h-[90dvh] overflow-y-auto rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/70"
    >

      <article>

        {/* Modal Hero */}

        <div className="relative h-56 md:h-72">

          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close experience details"
            className="absolute top-4 right-4 bg-white/90 text-primary rounded-full p-3 hover:bg-white transition-colors"
          >
            <X size={24} />
          </button>

          <h2
            id="experience-modal-title"
            className="absolute bottom-6 left-6 right-6 font-heading text-3xl md:text-5xl font-semibold text-white"
          >
            {details.title}
          </h2>

        </div>

        <div className="p-5 md:p-8">

          <p className="text-muted text-sm md:text-base leading-relaxed mb-8">
            {details.overview}
          </p>

          {/* Essential Information */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">

            {information.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="bg-cream rounded-xl p-4"
                >

                  <Icon
                    size={23}
                    className="text-secondary mb-3"
                  />

                  <p className="text-muted text-xs mb-2">
                    {item.label}
                  </p>

                  <p className="text-primary text-sm font-semibold">
                    {item.value}
                  </p>

                </div>
              )
            })}

          </div>

          {/* Activities */}

          <h3 className="font-heading text-2xl font-semibold text-primary mb-5">
            Popular Activities
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

            {details.activities.map((activity) => (

              <li
                key={activity}
                className="flex items-start gap-3 text-muted text-sm"
              >

                <CheckCircle
                  size={18}
                  className="text-secondary shrink-0"
                />

                {activity}

              </li>

            ))}

          </ul>

          {/* Recommended Destinations */}

          <h3 className="font-heading text-2xl font-semibold text-primary mb-5">
            Recommended Destinations
          </h3>

          <div className="space-y-3 mb-8">

            {recommendedDestinations.map((destination) => (

              <Link
                key={destination.id}
                to={`/destinations/${destination.id}`}
                onClick={onClose}
                className="group flex items-center gap-4 border border-primary/10 rounded-xl p-3 hover:bg-cream transition-colors"
              >

                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  className="w-20 h-20 rounded-lg object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">

                  <h4 className="font-heading text-xl font-semibold text-primary">
                    {destination.name}
                  </h4>

                  <p className="flex items-center gap-1 text-muted text-xs mt-2">
                    <MapPin size={14} className="shrink-0" />
                    {destination.location}
                  </p>

                </div>

                <ArrowRight
                  size={20}
                  className="text-secondary shrink-0 group-hover:translate-x-1 transition-transform"
                />

              </Link>

            ))}

          </div>

          {/* Travel Tips */}

          <div className="bg-cream rounded-2xl p-5 mb-8">

            <h3 className="flex items-center gap-2 font-heading text-xl font-semibold text-primary mb-4">

              <Lightbulb size={23} className="text-secondary" />

              Useful Travel Tips

            </h3>

            <ul className="space-y-3">

              {details.tips.map((tip) => (

                <li
                  key={tip}
                  className="flex items-start gap-3 text-muted text-sm"
                >

                  <CheckCircle
                    size={16}
                    className="text-secondary shrink-0 mt-1"
                  />

                  {tip}

                </li>

              ))}

            </ul>

          </div>

          {/* Trip Planner Integration */}

          <Link
            to={`/trip-planner?${tripParams.toString()}`}
            onClick={onClose}
            className="flex items-center justify-center gap-3 w-full bg-primary text-white rounded-full px-6 py-4 font-semibold hover:bg-secondary transition-colors"
          >

            Plan This Experience

            <ArrowRight size={19} />

          </Link>

        </div>

      </article>

    </dialog>
  )
}

export default ExperienceDetailsModal
