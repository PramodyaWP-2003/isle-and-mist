
const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function getPasswordChecks(password = '') {
  return [
    {
      label: 'At least 8 characters',
      passed: password.length >= 8,
    },
    {
      label: 'One uppercase letter',
      passed: /[A-Z]/.test(password),
    },
    {
      label: 'One lowercase letter',
      passed: /[a-z]/.test(password),
    },
    {
      label: 'One number',
      passed: /\d/.test(password),
    },
    {
      label: 'One special character',
      passed: /[^A-Za-z0-9\s]/.test(password),
    },
  ]
}

export function getPasswordStrength(password = '') {
  const checks = getPasswordChecks(password)

  const score = checks.filter(
    (check) => check.passed
  ).length

  if (!password) {
    return {
      score: 0,
      label: 'Not entered',
    }
  }

  if (score <= 2) {
    return {
      score,
      label: 'Weak',
    }
  }

  if (score <= 4) {
    return {
      score,
      label: 'Fair',
    }
  }

  return {
    score,
    label: 'Meets requirements',
  }
}

export function validateLogin(formData) {
  const errors = {}

  const email = String(
    formData.email || ''
  ).trim()

  const password = String(
    formData.password || ''
  )

  if (!email) {
    errors.email =
      'Please enter your email address.'

  } else if (
    !emailPattern.test(email) ||
    email.length > 254
  ) {
    errors.email =
      'Please enter a valid email address.'
  }

  if (!password) {
    errors.password =
      'Please enter your password.'

  } else if (password.length > 128) {
    errors.password =
      'Password is too long.'
  }

  return errors
}

export function validateRegister(formData) {
  const errors = validateLogin(formData)

  const name = String(
    formData.name || ''
  ).trim()

  const password = String(
    formData.password || ''
  )

  if (!name) {
    errors.name =
      'Please enter your full name.'

  } else if (
    name.length < 2 ||
    name.length > 80
  ) {
    errors.name =
      'Name must contain 2 to 80 characters.'
  }

  const passwordChecks =
    getPasswordChecks(password)

  if (
    !passwordChecks.every(
      (check) => check.passed
    ) ||
    password.length > 128
  ) {
    errors.password =
      'Password must meet all the requirements.'
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword =
      'Please confirm your password.'

  } else if (
    password !== formData.confirmPassword
  ) {
    errors.confirmPassword =
      'Passwords do not match.'
  }

  if (formData.consent !== true) {
    errors.consent =
      'Please acknowledge the demo account notice.'
  }

  return errors
}
