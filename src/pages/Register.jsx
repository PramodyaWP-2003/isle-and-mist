
import { useState } from 'react'

import {
  Link,
  useNavigate,
} from 'react-router-dom'

import {
  User,
  Mail,
  ArrowRight,
  AlertCircle,
  LoaderCircle,
  ShieldCheck,
} from 'lucide-react'

import AuthLayout from '../components/auth/AuthLayout'

import AuthInput from '../components/auth/AuthInput'

import PasswordInput from '../components/auth/PasswordInput'

import PasswordStrength from '../components/auth/PasswordStrength'

import useAuth from '../hooks/useAuth'

import {
  validateRegister,
} from '../utils/authValidation'

function Register() {
  const navigate = useNavigate()

  const { register } = useAuth()

  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      consent: false,
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
      ...(name === 'password'
        ? { confirmPassword: '' }
        : {}),
    }))

    setSubmitError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (isSubmitting) return

    const validationErrors =
      validateRegister(formData)

    setErrors(validationErrors)
    setSubmitError('')

    if (
      Object.keys(validationErrors).length > 0
    ) {
      return
    }

    setIsSubmitting(true)

    try {
      await register(formData)

      navigate('/dashboard', {
        replace: true,
      })

    } catch (error) {
      setSubmitError(
        error.message ||
        'Unable to create account.'
      )

    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthLayout mode="register">

      <div className="mb-8">

        <p className="text-secondary uppercase tracking-widest text-xs font-semibold mb-3">

          Join Isle & Mist

        </p>

        <h1 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-4">

          Create Account

        </h1>

        <p className="text-muted text-sm leading-relaxed">

          Begin your journey and discover
          Sri Lanka your way.

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
            label="Full Name"
            name="name"
            icon={User}
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Your full name"
            autoComplete="name"
            maxLength={80}
          />

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
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Create a demo password"
            autoComplete="new-password"
          />

          <PasswordStrength
            password={formData.password}
          />

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            placeholder="Confirm your password"
            autoComplete="new-password"
          />

          <div>

            <label className="flex items-start gap-3 cursor-pointer">

              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                aria-invalid={
                  Boolean(errors.consent)
                }
                aria-describedby={
                  errors.consent
                    ? 'consent-error'
                    : undefined
                }
                className="w-4 h-4 mt-0.5 accent-primary shrink-0"
              />

              <span className="text-muted text-sm leading-relaxed">

                I understand that this is a
                demonstration account stored locally
                in my browser.

              </span>

            </label>

            {errors.consent && (

              <p
                id="consent-error"
                className="text-red-600 text-xs mt-2"
              >

                {errors.consent}

              </p>

            )}

          </div>

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

              Creating Account...

            </>

          ) : (

            <>

              Create Account

              <ArrowRight size={19} />

            </>

          )}

        </button>

      </form>

      <p className="text-center text-muted text-sm mt-7">

        Already have an account?{' '}

        <Link
          to="/login"
          className="text-secondary font-semibold hover:text-primary"
        >

          Sign In

        </Link>

      </p>

      <div className="flex items-start gap-3 bg-secondary/5 border border-primary/10 rounded-xl p-4 mt-8">

        <ShieldCheck
          size={22}
          className="text-secondary shrink-0"
        />

        <div>

          <p className="text-primary text-xs font-semibold mb-1">

            Demo Account Notice

          </p>

          <p className="text-muted text-xs leading-relaxed">

            This university project uses browser-based
            demonstration authentication. Please use
            fictional account information.

          </p>

        </div>

      </div>

    </AuthLayout>
  )
}

export default Register
