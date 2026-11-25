
import { Link } from 'react-router-dom'
import {
  Clock,
  MapPin,
  Check,
  ArrowRight,
} from 'lucide-react'

function TourPackageCard({ tour }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">

      {/* Package Image */}

      <div className="relative h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <span className="absolute top-4 left-4 bg-white/90 text-primary text-xs font-medium px-3 py-2 rounded-full">
          {tour.category}
        </span>
      </div>

      {/* Package Information */}

      <div className="p-5 flex flex-col flex-1">

        <div className="flex items-center gap-2 text-secondary text-xs font-medium mb-3">
          <Clock size={16} />
          {tour.duration}
        </div>

        <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
          {tour.title}
        </h3>

        <div className="flex items-start gap-2 text-muted text-xs mb-4">
          <MapPin size={16} className="shrink-0" />
          {tour.locations.join(' • ')}
        </div>

        <p className="text-muted text-sm leading-relaxed mb-5">
          {tour.description}
        </p>

        {/* Package Highlights */}

        <div className="space-y-2 mb-6">

          {tour.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-sm text-dark"
            >
              <Check
                size={16}
                className="text-secondary shrink-0"
              />
              {highlight}
            </div>
          ))}

        </div>

        {/* Price and Navigation */}

        <div className="mt-auto pt-5 border-t border-primary/10">

          <p className="text-muted text-xs">
            From / per person
          </p>

          <p className="text-3xl font-semibold text-primary mb-4">
            ${tour.price}
          </p>

          <Link
            to={`/tour-packages?package=${tour.id}`}
            className="flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
          >
            View Package
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </article>
  )
}

export default TourPackageCard
