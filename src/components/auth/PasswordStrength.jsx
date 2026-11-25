
import {
  CheckCircle,
  Circle,
} from 'lucide-react'

import {
  getPasswordChecks,
  getPasswordStrength,
} from '../../utils/authValidation'

function PasswordStrength({ password }) {
  const checks = getPasswordChecks(password)

  const strength = getPasswordStrength(password)

  const color =
    strength.score <= 2
      ? 'bg-red-500'
      : strength.score <= 4
        ? 'bg-amber-500'
        : 'bg-green-600'

  return (
    <div className="bg-white border border-primary/10 rounded-xl p-4">

      <div className="flex items-center justify-between gap-2 mb-3">

        <p className="text-primary text-xs font-medium">
          Password Requirements
        </p>

        <p className="text-muted text-xs">
          {strength.label}
        </p>

      </div>

      <div
        className="grid grid-cols-5 gap-1.5 mb-4"
        aria-hidden="true"
      >

        {Array.from(
          { length: 5 },
          (_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-colors ${
                index < strength.score
                  ? color
                  : 'bg-gray-200'
              }`}
            />
          )
        )}

      </div>

      <div className="space-y-2">

        {checks.map((check) => (

          <div
            key={check.label}
            className="flex items-center gap-2"
          >

            {check.passed ? (
              <CheckCircle
                size={15}
                className="text-green-600"
              />
            ) : (
              <Circle
                size={15}
                className="text-gray-400"
              />
            )}

            <span
              className={`text-xs ${
                check.passed
                  ? 'text-green-700'
                  : 'text-muted'
              }`}
            >
              {check.label}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default PasswordStrength
