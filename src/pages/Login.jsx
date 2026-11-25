
import { useState } from 'react'

import {
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom'

import {
  Mail,
  ArrowRight,
  AlertCircle,
  LoaderCircle,
  ShieldCheck,
} from 'lucide-react'

import AuthLayout from '../components/auth/AuthLayout'

import AuthInput from '../components/auth/AuthInput'

import PasswordInput from '../components/auth/PasswordInput'

import useAuth from '../hooks/useAuth'

import {
  validateLogin,
} from '../utils/authValidation'

function Login() {
  const navigate = useNavigate()

  const location = useLocation()

  const { login } = useAuth()

  const [formData, setFormData] =
    useState({
      email: '',
      password: '',
      remember: false,
    })

  const [errors, setErrors] =
    useState({})

  const [submitError, setSubmitError] =
    useState('')

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  function handleChange(event) {
    const {
      name,
      value,
      type,
      checked,
    } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]:
        type === 'checkbox'
          ? checked
          : value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }))

    setSubmitError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (isSubmitting) return

    const validationErrors =
      validateLogin(formData)

    setErrors(validationErrors)
    setSubmitError('')

    if (
      Object.keys(validationErrors).length > 0
    ) {
      return
    }

    setIsSubmitting(true)

    try {
      await login(formData)

      const from = location.state?.from

      const destination =
        from?.pathname === '/dashboard'
          ? `/dashboard${from.search || ''}${from.hash || ''}`
          : '/dashboard'

      navigate(destination, {
        replace: true,
      })

    } catch (error) {
      setSubmitError(
        error.message ||
        'Unable to sign in. Please try again.'
      )

    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthLayout mode="login">

      <div className="mb-8">

        <p className="text-secondary uppercase tracking-widest text-xs font-semibold mb-3">

          Welcome to Isle & Mist

        </p>

        <h1 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-4">

          Welcome Back

        </h1>

        <p className="text-muted text-sm leading-relaxed">

          Sign in to continue your Sri Lankan
          travel adventure.

        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5"
      >

        <fieldset
          disabled={isSubmitting}
          className="min-w-0 space-y-5"
        >

          <AuthInput
            label="Email Address"
            name="email"
            type="email"
            icon={Mail}
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="you@example.com"
            autoComplete="email"
            maxLength={254}
          />

          <PasswordInput
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <label className="flex items-center gap-2 cursor-pointer">

            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="w-4 h-4 accent-primary"
            />

            <span className="text-muted text-sm">

              Remember me

            </span>

          </label>

        </fieldset>

        {submitError && (

          <div
            role="alert"
            className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm"
          >

            <AlertCircle
              size={19}
              className="shrink-0"
            />

            {submitError}

          </div>

        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white rounded-xl px-6 py-4 text-sm font-semibold hover:bg-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >

          {isSubmitting ? (

            <>

              <LoaderCircle
                size={20}
                className="animate-spin"
              />

              Signing In...

            </>

          ) : (

            <>

              Sign In

              <ArrowRight size={19} />

            </>

          )}

        </button>

      </form>

      <p className="text-center text-muted text-sm mt-7">

        Don't have an account?{' '}

        <Link
          to="/register"
          className="text-secondary font-semibold hover:text-primary"
        >

          Sign Up

        </Link>

      </p>

      <div className="flex items-start gap-3 bg-secondary/5 border border-primary/10 rounded-xl p-4 mt-8">

        <ShieldCheck
          size={22}
          className="text-secondary shrink-0"
        />

        <div>

          <p className="text-primary text-xs font-semibold mb-1">

            Demonstration Authentication

          </p>

          <p className="text-muted text-xs leading-relaxed">

            Accounts are stored in this browser.
            Use fictional information and do not
            enter a password you use elsewhere.

          </p>

        </div>

      </div>

    </AuthLayout>
  )
}

export default Login
