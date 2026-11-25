
import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react'

import AuthContext from './AuthContext'

import {
  getCurrentUser,
  registerAccount,
  loginAccount,
  logoutAccount,
  updateAccountProfile,
} from '../utils/authService'

function AuthProvider({ children }) {
  const [user, setUser] =
    useState(getCurrentUser)

  const register = useCallback(
    async (formData) => {
      const registeredUser =
        await registerAccount(formData)

      setUser(registeredUser)

      return registeredUser
    },
    []
  )

  const login = useCallback(
    async (formData) => {
      const loggedInUser =
        await loginAccount(formData)

      setUser(loggedInUser)

      return loggedInUser
    },
    []
  )

  const logout = useCallback(() => {
    logoutAccount()

    setUser(null)
  }, [])

  const updateProfile = useCallback(
    (profileData) => {
      const updatedUser =
        updateAccountProfile(profileData)

      setUser(updatedUser)

      return updatedUser
    },
    []
  )

  useEffect(() => {

    function syncSession() {
      setUser(getCurrentUser())
    }

    function handleStorage(event) {
      if (
        event.key === 'isle-and-mist-session' ||
        event.key === 'isle-and-mist-users' ||
        event.key === null
      ) {
        syncSession()
      }
    }

    window.addEventListener(
      'storage',
      handleStorage
    )

    window.addEventListener(
      'focus',
      syncSession
    )

    const interval = window.setInterval(
      syncSession,
      60000
    )

    return () => {
      window.removeEventListener(
        'storage',
        handleStorage
      )

      window.removeEventListener(
        'focus',
        syncSession
      )

      window.clearInterval(interval)
    }

  }, [])

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      register,
      login,
      logout,
      updateProfile,
    }),
    [
      user,
      register,
      login,
      logout,
      updateProfile,
    ]
  )

  return (
    <AuthContext.Provider value={value}>

      {children}

    </AuthContext.Provider>
  )
}

export default AuthProvider
