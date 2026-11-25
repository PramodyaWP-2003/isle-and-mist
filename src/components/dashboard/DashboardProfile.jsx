
import { useState } from 'react'

import {
  User,
  Mail,
  CalendarDays,
  Save,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react'

import useAuth from '../../hooks/useAuth'

function DashboardProfile() {
  const {
    user,
    updateProfile,
  } = useAuth()

  const [name, setName] =
    useState(user?.name || '')

  const [message, setMessage] =
    useState('')

  const [error, setError] =
    useState('')

  const initial =
    user?.name?.charAt(0).toUpperCase() || 'T'

  const memberSince =
    user?.createdAt
      ? new Date(user.createdAt).toLocaleDateString(
          'en-US',
          {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }
        )
      : 'Not available'

  function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setMessage('')

    try {
      const updatedUser =
        updateProfile({ name })

      setName(updatedUser.name)

      setMessage(
        'Your profile has been updated successfully.'
      )

    } catch (error) {
      setError(
        error.message ||
        'Unable to update your profile.'
      )
    }
  }

  return (
    <section className="bg-white rounded-2xl border border-primary/10 p-5 sm:p-8">

      <h2 className="font-heading text-3xl text-primary font-semibold mb-2">

        My Profile

      </h2>

      <p className="text-muted text-sm mb-8">

        Manage your personal account information.

      </p>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-cream rounded-2xl p-6 mb-8">

        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-heading text-4xl shrink-0">

          {initial}

        </div>

        <div className="min-w-0 text-center sm:text-left">

          <h3 className="text-primary text-xl font-semibold break-words">

            {user?.name}

          </h3>

          <p className="text-muted text-sm break-all mt-2">

            {user?.email}

          </p>

          <p className="flex items-center justify-center sm:justify-start gap-2 text-secondary text-xs mt-4">

            <CalendarDays size={16} />

            Member since {memberSince}

          </p>

        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-6 max-w-2xl"
      >

        <div>

          <label
            htmlFor="profile-name"
            className="block text-primary text-sm font-medium mb-2"
          >

            Full Name

          </label>

          <div className="relative">

            <User
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              id="profile-name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value)
                setError('')
                setMessage('')
              }}
              maxLength={80}
              required
              autoComplete="name"
              className="w-full border border-primary/15 rounded-xl pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-secondary/20"
            />

          </div>

        </div>

        <div>

          <label
            htmlFor="profile-email"
            className="block text-primary text-sm font-medium mb-2"
          >

            Email Address

          </label>

          <div className="relative">

            <Mail
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              id="profile-email"
              type="email"
              value={user?.email || ''}
              readOnly
              className="w-full bg-cream border border-primary/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-muted"
            />

          </div>

          <p className="text-muted text-xs mt-2">

            Email changes are unavailable in this demo.

          </p>

        </div>

        {message && (

          <div
            role="status"
            className="flex items-start gap-3 bg-green-50 text-green-700 rounded-xl p-4 text-sm"
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
            className="flex items-start gap-3 bg-red-50 text-red-600 rounded-xl p-4 text-sm"
          >

            <AlertCircle
              size={20}
              className="shrink-0"
            />

            {error}

          </div>

        )}

        <div className="flex flex-wrap gap-3">

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-secondary"
          >

            <Save size={18} />

            Save Changes

          </button>

          <button
            type="button"
            onClick={() => {
              setName(user?.name || '')
              setError('')
              setMessage('')
            }}
            className="border border-primary/15 text-primary rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-cream"
          >

            Reset

          </button>

        </div>

      </form>

      <div className="flex items-start gap-3 bg-secondary/5 rounded-xl p-5 mt-8">

        <ShieldCheck
          size={25}
          className="text-secondary shrink-0"
        />

        <div>

          <p className="text-primary text-sm font-semibold mb-2">

            Account Information

          </p>

          <p className="text-muted text-xs leading-relaxed">

            This is a browser-based demonstration
            account for the Isle & Mist university
            project. Do not store sensitive personal
            information in this account.

          </p>

        </div>

      </div>

    </section>
  )
}

export default DashboardProfile
