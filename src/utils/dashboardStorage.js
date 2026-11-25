
import { getCurrentUser } from './authService'

import destinations from '../data/destinations'

const FAVORITES_KEY = 'isle-and-mist-favorites'

function getFavoritesKey() {
  const user = getCurrentUser()

  return user
    ? `${FAVORITES_KEY}-${user.id}`
    : FAVORITES_KEY
}

function readFavorites(key) {
  try {
    const raw = localStorage.getItem(key)

    const values = raw ? JSON.parse(raw) : []

    if (!Array.isArray(values)) {
      return []
    }

    return [...new Set(values)].filter(
      (id) =>
        destinations.some(
          (destination) => destination.id === id
        )
    )
  } catch {
    return []
  }
}

export function getFavorites() {
  return readFavorites(getFavoritesKey())
}

export function toggleFavorite(id) {
  const key = getFavoritesKey()

  const favorites = readFavorites(key)

  if (
    !destinations.some(
      (destination) => destination.id === id
    )
  ) {
    return favorites
  }

  const updatedFavorites =
    favorites.includes(id)
      ? favorites.filter((item) => item !== id)
      : [...favorites, id]

  localStorage.setItem(
    key,
    JSON.stringify(updatedFavorites)
  )

  window.dispatchEvent(
    new Event('isle-and-mist-data-change')
  )

  return updatedFavorites
}
