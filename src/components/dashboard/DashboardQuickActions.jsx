
import { Link } from 'react-router-dom'

import {
  CalendarPlus,
  Compass,
  Map,
  BookOpen,
  Mountain,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react'

const actions = [
  {
    title: 'Plan a Trip',
    description: 'Create your next itinerary',
    path: '/trip-planner',
    icon: CalendarPlus,
  },
  {
    title: 'Explore Destinations',
    description: 'Discover beautiful places',
    path: '/destinations',
    icon: Compass,
  },
  {
    title: 'Find Tour Packages',
    description: 'Explore curated journeys',
    path: '/tour-packages',
    icon: Map,
  },
  {
    title: 'Travel Guide',
    description: 'Prepare for your adventure',
    path: '/travel-guide',
    icon: BookOpen,
  },
  {
    title: 'Experiences',
    description: 'Find unforgettable activities',
    path: '/experiences',
    icon: Mountain,
  },
  {
    title: 'Contact Us',
    description: 'Get travel assistance',
    path: '/contact',
    icon: MessageCircle,
  },
]

function DashboardQuickActions() {
  return (
    <section className="bg-white rounded-2xl border border-primary/10 p-5 sm:p-7">

      <h2 className="font-heading text-2xl text-primary font-semibold mb-2">

        Quick Actions

      </h2>

      <p className="text-muted text-sm mb-6">

        Everything you need for your next adventure.

      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {actions.map((action) => {

          const Icon = action.icon

          return (
            <Link
              key={action.path}
              to={action.path}
              className="group flex items-center gap-3 bg-cream rounded-xl p-4 hover:bg-primary transition-colors"
            >

              <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0">

                <Icon size={20} />

              </div>

              <div className="flex-1 min-w-0">

                <p className="text-primary text-xs sm:text-sm font-semibold group-hover:text-white">

                  {action.title}

                </p>

                <p className="text-muted text-[11px] mt-1 group-hover:text-white/70">

                  {action.description}

                </p>

              </div>

              <ArrowUpRight
                size={16}
                className="text-secondary group-hover:text-accent shrink-0"
              />

            </Link>
          )
        })}

      </div>

    </section>
  )
}

export default DashboardQuickActions
