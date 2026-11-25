
import {
  TrainFront,
  Bus,
  Car,
  Bike,
  CheckCircle,
  Info,
} from 'lucide-react'

import SectionHeading from '../ui/SectionHeading'
import { transportationOptions } from '../../data/travelGuideData'

const transportIcons = {
  train: TrainFront,
  bus: Bus,
  tuktuk: Bike,
  car: Car,
}

function TransportationGuide() {
  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="Travel Around the Island"
          title="Getting Around Sri Lanka"
          description="Discover transportation options that suit your budget, comfort and travel preferences."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

          {transportationOptions.map((item) => {
            const Icon = transportIcons[item.id] || Car

            return (
              <article
                key={item.id}
                className="bg-white border border-primary/10 rounded-2xl p-6 flex flex-col hover:shadow-md transition-shadow"
              >

                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-5">

                  <Icon size={32} className="text-secondary" />

                </div>

                <span className="text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                  {item.category}
                </span>

                <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                  {item.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-6">

                  {item.advantages.map((advantage) => (

                    <li
                      key={advantage}
                      className="flex items-start gap-2 text-muted text-sm"
                    >

                      <CheckCircle
                        size={17}
                        className="text-secondary shrink-0 mt-0.5"
                      />

                      {advantage}

                    </li>

                  ))}

                </ul>

                <div className="bg-cream rounded-xl p-4 mt-auto">

                  <div className="flex items-center gap-2 text-primary font-medium text-xs mb-2">
                    <Info size={16} />
                    Travel Tip
                  </div>

                  <p className="text-muted text-xs leading-relaxed">
                    {item.tip}
                  </p>

                </div>

              </article>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default TransportationGuide
