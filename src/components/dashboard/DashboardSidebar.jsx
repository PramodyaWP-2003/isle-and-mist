
import { Link, useNavigate } from 'react-router-dom'

import {
  LayoutDashboard,
  Map,
  Heart,
  User,
  LogOut,
  Compass,
} from 'lucide-react'

import { useState } from 'react'

import useAuth from '../../hooks/useAuth'

const navigation = [
  {
    id: 'overview',
    label: 'Overview',
    icon: LayoutDashboard,
  },
  {
    id: 'trips',
    label: 'My Trips',
    icon: Map,
  },
  {
    id: 'favorites',
    label: 'Favorites',
    icon: Heart,
  },
  {
    id: 'profile',
    label: 'My Profile',
    icon: User,
  },
]

function DashboardSidebar({
  activeTab,
  onTabChange,
}) {
  const { user, logout } = useAuth()

  const navigate = useNavigate()

  const [error, setError] = useState('')

  const initial =
    user?.name?.charAt(0).toUpperCase() || 'T'

  function handleLogout() {
    try {
      logout()

      navigate('/', {
        replace: true,
      })
    } catch {
      setError('Unable to log out. Please try again.')
    }
  }

  return (
    <aside className="bg-white border border-primary/10 rounded-2xl p-4 lg:p-5 lg:sticky lg:top-28">

      {/* User Information */}

      <div className="hidden lg:flex flex-col items-center text-center py-6 border-b border-primary/10 mb-5">

        <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-heading mb-4">

          {initial}

        </div>

        <h2 className="text-primary font-semibold break-all">

          {user?.name}

        </h2>

        <p className="text-muted text-xs mt-2 break-all">

          {user?.email}

        </p>

        <span className="bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full mt-4">

          Isle & Mist Traveler

        </span>

      </div>

      <p className="hidden lg:block text-muted uppercase tracking-widest text-[10px] font-semibold mb-4">

        My Account

      </p>

      {/* Dashboard Navigation */}

      <nav
        aria-label="Dashboard navigation"
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2"
      >

        {navigation.map((item) => {

          const Icon = item.icon

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              aria-current={
                activeTab === item.id
                  ? 'page'
                  : undefined
              }
              className={`flex items-center gap-2 lg:gap-3 rounded-xl px-3 py-3 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-primary text-white'
                  : 'text-primary hover:bg-cream'
              }`}
            >

              <Icon
                size={19}
                className="shrink-0"
              />

              {item.label}

            </button>
          )
        })}

      </nav>

      <div className="border-t border-primary/10 mt-5 pt-4 space-y-2">

        <Link
          to="/destinations"
          className="flex items-center gap-3 px-3 py-3 text-primary text-sm rounded-xl hover:bg-cream"
        >

          <Compass size={19} />

          Explore Sri Lanka

        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-3 text-red-600 text-sm rounded-xl hover:bg-red-50"
        >

          <LogOut size={19} />

          Logout

        </button>

        {error && (
          <p role="alert" className="text-red-600 text-xs">
            {error}
          </p>
        )}

      </div>

    </aside>
  )
}

export default DashboardSidebar
