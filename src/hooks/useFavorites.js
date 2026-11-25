
import {
  useSyncExternalStore,
  useCallback,
} from 'react'

import useAuth from './useAuth'

import {
  getFavorites,
  toggleFavorite,
} from '../utils/dashboardStorage'

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

function getSnapshot() {
  return JSON.stringify(getFavorites())
}

function useFavorites() {
  const { user } = useAuth()

  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot
  )

  const favorites = JSON.parse(snapshot)

  const accountId = user?.id || 'guest'

  const toggle = useCallback((id) => {
    return toggleFavorite(id)
  }, [])

  return {
    favorites,
    toggleFavorite: toggle,
    accountId,
  }
}

export default useFavorites
