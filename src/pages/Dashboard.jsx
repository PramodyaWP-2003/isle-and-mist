
import {
  useState,
  useSyncExternalStore,
} from 'react'

import { useSearchParams } from 'react-router-dom'

import {
  CheckCircle,
  AlertCircle,
} from 'lucide-react'

import DashboardLayout from '../components/dashboard/DashboardLayout'

import DashboardWelcome from '../components/dashboard/DashboardWelcome'

import DashboardStats from '../components/dashboard/DashboardStats'

import DashboardTrips from '../components/dashboard/DashboardTrips'

import DashboardFavorites from '../components/dashboard/DashboardFavorites'

import DashboardProfile from '../components/dashboard/DashboardProfile'

import DashboardActivity from '../components/dashboard/DashboardActivity'

import DashboardQuickActions from '../components/dashboard/DashboardQuickActions'

import useAuth from '../hooks/useAuth'

import useFavorites from '../hooks/useFavorites'

import {
  getSavedTrips,
  deleteTrip,
} from '../utils/tripStorage'

const validTabs = [
  'overview',
  'trips',
  'favorites',
  'profile',
]

function subscribe(callback) {
  window.addEventListener(
    'isle-and-mist-data-change',
    callback
  )

  window.addEventListener(
    'storage',
    callback
  )

  return () => {
    window.removeEventListener(
      'isle-and-mist-data-change',
      callback
    )

    window.removeEventListener(
      'storage',
      callback
    )
  }
}

function getTripsSnapshot() {
  return JSON.stringify(getSavedTrips())
}

function Dashboard() {
  const { user } = useAuth()

  return (
    <DashboardContent
      key={user?.id || 'guest'}
      user={user}
    />
  )
}

function DashboardContent({ user }) {
  const [searchParams, setSearchParams] =
    useSearchParams()

  const requestedTab =
    searchParams.get('tab') || 'overview'

  const activeTab =
    validTabs.includes(requestedTab)
      ? requestedTab
      : 'overview'

  const tripsSnapshot = useSyncExternalStore(
    subscribe,
    getTripsSnapshot
  )

  const trips = JSON.parse(tripsSnapshot)

  const { favorites } = useFavorites()

  const [message, setMessage] =
    useState('')

  const [error, setError] =
    useState('')

  function handleTabChange(tab) {
    if (!validTabs.includes(tab)) return

    setMessage('')
    setError('')

    const params =
      new URLSearchParams(searchParams)

    if (tab === 'overview') {
      params.delete('tab')
    } else {
      params.set('tab', tab)
    }

    setSearchParams(params)

    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }

  function handleDeleteTrip(id) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this saved trip?'
    )

    if (!confirmed) return

    setError('')
    setMessage('')

    try {
      deleteTrip(id)

      setMessage(
        'Travel plan deleted successfully.'
      )

    } catch {
      setError(
        'Unable to delete the travel plan.'
      )
    }
  }

  return (
    <DashboardLayout
      activeTab={activeTab}
      onTabChange={handleTabChange}
    >

      {message && (

        <div
          role="status"
          className="flex items-start gap-3 bg-green-50 text-green-700 border border-green-100 rounded-xl p-4 text-sm"
        >

          <CheckCircle
            size={20}
            className="shrink-0"
          />

          {message}

        </div>

      )}

      {error && (

        <div
          role="alert"
          className="flex items-start gap-3 bg-red-50 text-red-600 border border-red-100 rounded-xl p-4 text-sm"
        >

          <AlertCircle
            size={20}
            className="shrink-0"
          />

          {error}

        </div>

      )}

      {/* Overview */}

      {activeTab === 'overview' && (

        <>

          <DashboardWelcome user={user} />

          <DashboardStats
            trips={trips}
            favorites={favorites}
          />

          <DashboardTrips
            trips={trips}
            onDelete={handleDeleteTrip}
            compact
            onViewAll={() => handleTabChange('trips')}
          />

          <DashboardFavorites
            favorites={favorites}
            compact
            onViewAll={() => handleTabChange('favorites')}
          />

          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6">

            <DashboardQuickActions />

            <DashboardActivity
              trips={trips}
              user={user}
            />

          </div>

        </>

      )}

      {/* My Trips */}

      {activeTab === 'trips' && (

        <DashboardTrips
          trips={trips}
          onDelete={handleDeleteTrip}
        />

      )}

      {/* Favorites */}

      {activeTab === 'favorites' && (

        <DashboardFavorites
          favorites={favorites}
        />

      )}

      {/* My Profile */}

      {activeTab === 'profile' && (

        <DashboardProfile
          key={user?.id}
        />

      )}

    </DashboardLayout>
  )
}

export default Dashboard
