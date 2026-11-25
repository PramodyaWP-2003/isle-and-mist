
import {
  CalendarDays,
  Clock,
  Thermometer,
  Compass,
  Car,
  Wallet,
  CheckCircle,
} from 'lucide-react'

function DestinationOverview({ destination, details }) {
  const travelInfo = [
    {
      icon: CalendarDays,
      label: 'Best Time to Visit',
      value: details.bestTime,
    },
    {
      icon: Clock,
      label: 'Suggested Stay',
      value: details.suggestedStay,
    },
    {
      icon: Thermometer,
      label: 'Climate',
      value: details.climate,
    },
    {
      icon: Compass,
      label: 'Destination Type',
      value: details.destinationType,
    },
    {
      icon: Car,
      label: 'Getting There',
      value: details.transport,
    },
    {
      icon: Wallet,
      label: 'Budget Level',
      value: details.budget,
    },
  ]

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        {/* Destination Overview */}

        <div className="max-w-4xl mb-12">

          <p className="text-secondary uppercase tracking-widest text-xs font-semibold mb-4">
            Get to Know Your Destination
          </p>

          <h2 className="section-title mb-6">
            About {destination.name}
          </h2>

          <p className="section-description leading-relaxed">
            {details.overview}
          </p>

        </div>

        {/* Travel Information */}

        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-6">
          Essential Travel Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">

          {travelInfo.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className="bg-white border border-primary/10 rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
              >

                <div className="w-12 h-12 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center">

                  <Icon
                    size={24}
                    className="text-secondary"
                  />

                </div>

                <div className="min-w-0">

                  <p className="text-muted text-xs mb-2">
                    {item.label}
                  </p>

                  <p className="text-primary font-semibold text-sm md:text-base">
                    {item.value}
                  </p>

                </div>

              </div>
            )
          })}

        </div>

        {/* Perfect For */}

        <h3 className="font-heading text-2xl font-semibold text-primary mb-5">
          Perfect For
        </h3>

        <div className="flex flex-wrap gap-3">

          {details.perfectFor.map((item) => (

            <span
              key={item}
              className="inline-flex items-center gap-2 bg-secondary/10 text-primary rounded-full px-5 py-3 text-sm"
            >

              <CheckCircle
                size={16}
                className="text-secondary"
              />

              {item}

            </span>

          ))}

        </div>

      </div>

    </section>
  )
}

export default DestinationOverview
