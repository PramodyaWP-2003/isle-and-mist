
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

function ExperienceCard({ experience }) {
  return (
    <Link
      to={`/experiences?category=${experience.id}`}
      className="group relative block h-80 md:h-96 overflow-hidden rounded-2xl shadow-md"
    >

      {/* Background Image */}

      <img
        src={experience.image}
        alt={experience.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Arrow Icon */}

      <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">

        <ArrowUpRight size={22} />

      </div>

      {/* Experience Information */}

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {experience.subtitle}
        </p>

        <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-3">
          {experience.title}
        </h3>

        <p className="text-white/80 text-sm leading-relaxed">
          {experience.description}
        </p>

      </div>

    </Link>
  )
}

export default ExperienceCard

