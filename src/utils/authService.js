
import {
  validateLogin,
  validateRegister,
} from './authValidation'

const USERS_KEY =
  'isle-and-mist-users'

const SESSION_KEY =
  'isle-and-mist-session'

const HASH_ITERATIONS = 600000

function readUsers() {
  const raw =
    localStorage.getItem(USERS_KEY)

  if (!raw) return []

  const users = JSON.parse(raw)

  if (!Array.isArray(users)) {
    throw new Error(
      'Demo account storage is invalid.'
    )
  }

  return users
}

function writeUsers(users) {
  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  )
}

function normalizeEmail(email) {
  return email.trim().toLowerCase()
}

function toPublicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  }
}

function requireCrypto() {
  if (
    !globalThis.crypto?.subtle ||
    !globalThis.crypto?.getRandomValues
  ) {
    throw new Error(
      'Demo authentication requires localhost or HTTPS.'
    )
  }
}

function generateSalt() {
  requireCrypto()

  const bytes =
    crypto.getRandomValues(
      new Uint8Array(16)
    )

  return Array.from(bytes)
    .map((byte) =>
      byte.toString(16).padStart(2, '0')
    )
    .join('')
}

function hexToBytes(hex) {
  return Uint8Array.from(
    hex.match(/.{2}/g).map(
      (value) => parseInt(value, 16)
    )
  )
}

async function hashPassword(
  password,
  salt,
  iterations = HASH_ITERATIONS
) {
  requireCrypto()

  const encoder = new TextEncoder()

  const key =
    await crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      'PBKDF2',
      false,
      ['deriveBits']
    )

  const bits =
    await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: hexToBytes(salt),
        iterations,
        hash: 'SHA-256',
      },
      key,
      256
    )

  return Array.from(
    new Uint8Array(bits)
  )
    .map((byte) =>
      byte.toString(16).padStart(2, '0')
    )
    .join('')
}

export function clearAuthSession() {
  localStorage.removeItem(SESSION_KEY)
  sessionStorage.removeItem(SESSION_KEY)
}

function createSession(
  user,
  remember = false
) {
  clearAuthSession()

  const duration = remember
    ? 7 * 24 * 60 * 60 * 1000
    : 24 * 60 * 60 * 1000

  const session = {
    userId: user.id,
    createdAt: Date.now(),
    expiresAt: Date.now() + duration,
  }

  const storage = remember
    ? localStorage
    : sessionStorage

  storage.setItem(
    SESSION_KEY,
    JSON.stringify(session)
  )

  return toPublicUser(user)
}

export function getCurrentUser() {
  try {
    const raw =
      sessionStorage.getItem(SESSION_KEY) ||
      localStorage.getItem(SESSION_KEY)

    if (!raw) return null

    const session = JSON.parse(raw)

    if (
      !session.userId ||
      !Number.isFinite(session.expiresAt) ||
      session.expiresAt <= Date.now()
    ) {
      clearAuthSession()

      return null
    }

    const user = readUsers().find(
      (item) => item.id === session.userId
    )

    if (!user) {
      clearAuthSession()

      return null
    }

    return toPublicUser(user)

  } catch {
    return null
  }
}

export async function registerAccount(formData) {
  const errors =
    validateRegister(formData)

  if (Object.keys(errors).length > 0) {
    throw new Error(
      'Please correct the registration information.'
    )
  }

  const email =
    normalizeEmail(formData.email)

  const users = readUsers()

  if (
    users.some(
      (user) => user.email === email
    )
  ) {
    throw new Error(
      'An account with this email already exists.'
    )
  }

  const salt = generateSalt()

  const passwordHash =
    await hashPassword(
      formData.password,
      salt
    )

  // Read again after the asynchronous hashing.

  const latestUsers = readUsers()

  if (
    latestUsers.some(
      (user) => user.email === email
    )
  ) {
    throw new Error(
      'An account with this email already exists.'
    )
  }

  const newUser = {
    id: crypto.randomUUID(),
    name: formData.name.trim(),
    email,
    salt,
    passwordHash,
    iterations: HASH_ITERATIONS,
    createdAt: new Date().toISOString(),
  }

  writeUsers([
    ...latestUsers,
    newUser,
  ])

  // Automatically sign in after registration.

  return createSession(newUser, false)
}

export async function loginAccount(
  formData
) {
  const errors =
    validateLogin(formData)

  if (Object.keys(errors).length > 0) {
    throw new Error(
      'Please enter valid login information.'
    )
  }

  const email =
    normalizeEmail(formData.email)

  const user = readUsers().find(
    (item) => item.email === email
  )

  if (!user) {
    throw new Error(
      'Invalid email address or password.'
    )
  }

  const passwordHash =
    await hashPassword(
      formData.password,
      user.salt,
      user.iterations
    )

  if (
    passwordHash !== user.passwordHash
  ) {
    throw new Error(
      'Invalid email address or password.'
    )
  }

  return createSession(
    user,
    formData.remember === true
  )
}

export function logoutAccount() {
  clearAuthSession()
}


export function updateAccountProfile(profileData) {
  const currentUser = getCurrentUser()

  if (!currentUser) {
    throw new Error(
      'Please sign in to update your profile.'
    )
  }

  const name = String(
    profileData.name || ''
  ).trim()

  if (name.length < 2 || name.length > 80) {
    throw new Error(
      'Name must contain 2 to 80 characters.'
    )
  }

  const users = readUsers()

  const account = users.find(
    (user) => user.id === currentUser.id
  )

  if (!account) {
    throw new Error('Account not found.')
  }

  const updatedUser = {
    ...account,
    name,
    updatedAt: new Date().toISOString(),
  }

  const updatedUsers = users.map(
    (user) =>
      user.id === currentUser.id
        ? updatedUser
        : user
  )

  writeUsers(updatedUsers)

  return toPublicUser(updatedUser)
}
