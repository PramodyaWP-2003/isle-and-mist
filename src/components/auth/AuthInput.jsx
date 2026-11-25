
import { AlertCircle } from 'lucide-react'

function AuthInput({
  label,
  name,
  type = 'text',
  icon: Icon,
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
  maxLength,
  required = true,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="block text-primary text-sm font-medium mb-2"
      >

        {label}

        {required && ' *'}

      </label>

      <div className="relative">

        {Icon && (

          <Icon
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          />

        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          maxLength={maxLength}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${name}-error` : undefined
          }
          className={`w-full min-w-0 bg-white border rounded-xl py-3.5 pr-4 text-sm text-dark outline-none focus:ring-2 transition-colors ${
            Icon ? 'pl-12' : 'pl-4'
          } ${
            error
              ? 'border-red-400 focus:ring-red-100'
              : 'border-primary/15 focus:border-secondary focus:ring-secondary/15'
          }`}
        />

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

export default AuthInput
