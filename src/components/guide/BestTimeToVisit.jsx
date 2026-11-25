
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CalendarDays,
  MapPin,
  Compass,
  ArrowRight,
  CloudSun,
} from 'lucide-react'

import SectionHeading from '../ui/SectionHeading'
import { travelSeasons } from '../../data/travelGuideData'
import destinations from '../../data/destinations'

function BestTimeToVisit() {
  const [activeRegion, setActiveRegion] = useState('south-west')

  const season = travelSeasons.find(
    (item) => item.id === activeRegion
  )

  const destination = destinations.find(
    (item) => item.id === season.destinationId
  )

  return (
    <section className="section-padding bg-white">

      <div className="section-container">

        <SectionHeading
          subtitle="Choose the Right Season"
          title="Best Time to Visit Sri Lanka"
          description="Different regions offer different travel experiences throughout the year."
        />

        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-8">

          {travelSeasons.map((item) => (

            <button
              key={item.id}
              type="button"
              aria-pressed={activeRegion === item.id}
              onClick={() => setActiveRegion(item.id)}
              className={`rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                activeRegion === item.id
                  ? 'bg-primary text-white'
                  : 'bg-cream text-primary hover:bg-secondary/10'
              }`}
            >
              {item.title}
            </button>

          ))}

        </div>

        <article className="grid grid-cols-1 lg:grid-cols-2 bg-cream rounded-3xl overflow-hidden border border-primary/10">

          {destination ? (

            <img
              src={destination.image}
              alt={destination.name}
              loading="lazy"
              className="w-full h-72 lg:h-full object-cover"
            />

          ) : (

            <div className="min-h-72 bg-primary flex flex-col items-center justify-center text-white p-8 text-center">

              <CloudSun size={75} className="text-accent mb-5" />

              <h3 className="font-heading text-3xl">
                {season.title}
              </h3>

              <p className="text-white/70 mt-3">
                Discover the eastern coastline
              </p>

            </div>

          )}

          <div className="p-6 md:p-10">

            <p className="text-secondary uppercase tracking-widest text-xs font-semibold mb-3">
              Recommended Travel Season
            </p>

            <h3 className="font-heading text-3xl font-semibold text-primary mb-4">
              {season.title}
            </h3>

            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 text-sm font-medium mb-5">

              <CalendarDays size={18} />

              {season.months}

            </div>

            <p className="text-muted leading-relaxed mb-6">
              {season.description}
            </p>

            <h4 className="flex items-center gap-2 text-primary font-semibold mb-3">
              <MapPin size={19} />
              Popular Destinations
            </h4>

            <div className="flex flex-wrap gap-2 mb-6">

              {season.destinations.map((name) => (

                <span
                  key={name}
                  className="bg-white border border-primary/10 text-primary text-xs rounded-full px-4 py-2"
                >
                  {name}
                </span>

              ))}

            </div>

            <h4 className="flex items-center gap-2 text-primary font-semibold mb-3">
              <Compass size={19} />
              Recommended Activities
            </h4>

            <ul className="space-y-2 text-muted text-sm mb-8">

              {season.activities.map((activity) => (
                <li key={activity}>• {activity}</li>
              ))}

            </ul>

            <Link
              to={
                season.destinationId
                  ? `/destinations/${season.destinationId}`
                  : '/destinations'
              }
              className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:text-primary"
            >
              Explore Destinations
              <ArrowRight size={18} />
            </Link>

          </div>

        </article>

        <p className="text-center text-muted text-xs leading-relaxed mt-6">
          Seasonal recommendations are general guidelines.
          Check current weather and local conditions before traveling.
        </p>

      </div>

    </section>
  )
}

export default BestTimeToVisit
