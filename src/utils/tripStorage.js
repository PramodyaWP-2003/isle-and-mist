
import { getCurrentUser } from './authService'

const BASE_KEY = 'isle-and-mist-trips'

function getStorageKey() {
  const user = getCurrentUser()

  return user
    ? `${BASE_KEY}-${user.id}`
    : BASE_KEY
}

function readTrips(key) {
  try {
    const raw = localStorage.getItem(key)

    const trips = raw ? JSON.parse(raw) : []

    if (!Array.isArray(trips)) {
      return []
    }

    return trips.filter(
      (trip) =>
        trip &&
        typeof trip.id === 'string' &&
        Array.isArray(trip.itinerary) &&
        Array.isArray(trip.selectedDestinations) &&
        Array.isArray(trip.selectedInterests) &&
        trip.preferences &&
        trip.cost
    )
  } catch {
    return []
  }
}

function writeTrips(key, trips) {
  localStorage.setItem(
    key,
    JSON.stringify(trips)
  )

  window.dispatchEvent(
    new Event('isle-and-mist-data-change')
  )
}

export function getSavedTrips() {
  return readTrips(getStorageKey())
}

export function saveTrip(trip) {
  const key = getStorageKey()

  const trips = readTrips(key)

  const existingTrip = trips.find(
    (item) => item.id === trip.id
  )

  const now = new Date().toISOString()

  const savedTrip = {
    ...trip,
    id: existingTrip?.id || crypto.randomUUID(),
    createdAt: existingTrip?.createdAt || now,
    updatedAt: now,
  }

  const updatedTrips = [
    savedTrip,
    ...trips.filter(
      (item) => item.id !== savedTrip.id
    ),
  ]

  writeTrips(key, updatedTrips)

  return savedTrip
}

export function deleteTrip(id) {
  const key = getStorageKey()

  const updatedTrips = readTrips(key).filter(
    (trip) => trip.id !== id
  )

  writeTrips(key, updatedTrips)

  return updatedTrips
}

export function getTripById(id) {
  return getSavedTrips().find(
    (trip) => trip.id === id
  )
}
