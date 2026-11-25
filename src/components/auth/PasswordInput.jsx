
import { useState } from 'react'

import {
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
} from 'lucide-react'

function PasswordInput({
  label = 'Password',
  name = 'password',
  value,
  onChange,
  error,
  placeholder = 'Enter your password',
  autoComplete = 'current-password',
}) {
  const [visible, setVisible] = useState(false)

  return (
    <div>

      <label
        htmlFor={name}
        className="block text-primary text-sm font-medium mb-2"
      >

        {label} *

      </label>

      <div className="relative">

        <Lock
          size={19}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
        />

        <input
          id={name}
          name={name}
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          maxLength={128}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${name}-error` : undefined
          }
          className={`w-full min-w-0 bg-white border rounded-xl py-3.5 pl-12 pr-12 text-sm text-dark outline-none focus:ring-2 transition-colors ${
            error
              ? 'border-red-400 focus:ring-red-100'
              : 'border-primary/15 focus:border-secondary focus:ring-secondary/15'
          }`}
        />

        <button
          type="button"
          onClick={() =>
            setVisible((previous) => !previous)
          }
          aria-label={
            visible
              ? 'Hide password'
              : 'Show password'
          }
          aria-pressed={visible}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-primary"
        >

          {visible
            ? <EyeOff size={20} />
            : <Eye size={20} />}

        </button>

      </div>

      {error && (

        <p
          id={`${name}-error`}
          className="flex items-start gap-1.5 text-red-600 text-xs mt-2"
        >

          <AlertCircle
            size={14}
            className="shrink-0"
          />

          {error}

        </p>

      )}

    </div>
  )
}

export default PasswordInput
