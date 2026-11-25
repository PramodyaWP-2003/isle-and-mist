
import {
  useState,
  useEffect,
  useRef,
} from 'react'

import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import {
  Mountain,
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  LogIn,
  UserPlus,
} from 'lucide-react'

import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import useAuth from '../hooks/useAuth'

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Destinations',
    path: '/destinations',
  },
  {
    name: 'Experiences',
    path: '/experiences',
  },
  {
    name: 'Tours',
    path: '/tour-packages',
  },
  {
    name: 'Trip Planner',
    path: '/trip-planner',
  },
  {
    name: 'Travel Guide',
    path: '/travel-guide',
  },
]

function Navbar() {
  const location = useLocation()

  return (
    <NavbarContent
      key={location.pathname}
    />
  )
}

function NavbarContent() {
  const navigate = useNavigate()

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth()

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [profileOpen, setProfileOpen] =
    useState(false)

  const [logoutError, setLogoutError] =
    useState('')

  const profileRef = useRef(null)

  const profileButtonRef = useRef(null)

  const firstName =
    user?.name?.trim().split(/\s+/)[0] ||
    'Traveler'

  const initial =
    firstName.charAt(0).toUpperCase()

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        profileRef.current &&
        !profileRef.current.contains(
          event.target
        )
      ) {
        setProfileOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        if (profileOpen) {
          setProfileOpen(false)
          profileButtonRef.current?.focus()
        }

        setMenuOpen(false)
      }
    }

    document.addEventListener(
      'pointerdown',
      handleOutsideClick
    )

    document.addEventListener(
      'keydown',
      handleEscape
    )

    return () => {
      document.removeEventListener(
        'pointerdown',
        handleOutsideClick
      )

      document.removeEventListener(
        'keydown',
        handleEscape
      )
    }
  }, [profileOpen])

  function closeMenus() {
    setMenuOpen(false)
    setProfileOpen(false)
  }

  function handleLogout() {
    try {
      logout()

      closeMenus()

      navigate('/', {
        replace: true,
      })

    } catch {
      setLogoutError(
        'Unable to clear the session. Please check your browser storage settings.'
      )
    }
  }

  function desktopLinkClass({ isActive }) {
    return `text-sm font-medium whitespace-nowrap transition-colors ${
      isActive
        ? 'text-primary'
        : 'text-muted hover:text-primary'
    }`
  }

  function mobileLinkClass({ isActive }) {
    return `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
      isActive
        ? 'bg-primary text-white'
        : 'text-primary hover:bg-secondary/10'
    }`
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-primary/10">

      <div className="section-container">

        <div className="flex items-center justify-between gap-5 h-20">

          {/* Brand */}

          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center gap-2 shrink-0"
          >

            <Mountain
              size={34}
              className="text-primary"
            />

            <div>

              <span className="block font-heading text-2xl font-semibold text-primary leading-tight">

                Isle & Mist

              </span>

              <span className="block text-[10px] text-secondary tracking-wide">

                Discover Sri Lanka

              </span>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav
            aria-label="Main navigation"
            className="hidden xl:flex items-center gap-6"
          >

            {navLinks.map((link) => (

              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={desktopLinkClass}
              >

                {link.name}

              </NavLink>

            ))}

          </nav>

          {/* Desktop Authentication */}

          <div className="hidden xl:flex items-center gap-4">

            {!isAuthenticated ? (

              <>

                <Link
                  to="/login"
                  className="text-primary text-sm font-medium hover:text-secondary"
                >

                  Login

                </Link>

                <Link
                  to="/register"
                  className="bg-primary text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"

                >

                  Sign Up

                </Link>

              </>

            ) : (

              <div
                ref={profileRef}
                className="relative"
              >

                <button
                  ref={profileButtonRef}
                  type="button"
                  onClick={() =>
                    setProfileOpen(
                      (previous) => !previous
                    )
                  }
                  aria-expanded={profileOpen}
                  aria-controls="desktop-profile"
                  className="flex items-center gap-2 rounded-full border border-primary/15 bg-white px-3 py-2 hover:border-secondary transition-colors"
                >

                  <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">

                    {initial}

                  </span>

                  <span className="max-w-24 truncate text-primary text-sm font-medium">

                    {firstName}

                  </span>

                  <ChevronDown
                    size={16}
                    className={`text-secondary transition-transform ${
                      profileOpen
                        ? 'rotate-180'
                        : ''
                    }`}
                  />

                </button>

                <AnimatePresence>

                  {profileOpen && (

                    <motion.div
                      id="desktop-profile"
                      initial={{
                        opacity: 0,
                        y: -8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute right-0 top-full mt-3 w-64 bg-white border border-primary/10 rounded-2xl shadow-xl overflow-hidden"
                    >

                      <div className="p-5 border-b border-primary/10">

                        <p className="text-primary text-sm font-semibold truncate">

                          {user?.name}

                        </p>

                        <p className="text-muted text-xs truncate mt-1">

                          {user?.email}

                        </p>

                      </div>

                      <div className="p-2">

                        <Link
                          to="/dashboard"
                          onClick={closeMenus}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-primary text-sm hover:bg-cream"
                        >

                          <LayoutDashboard size={18} />

                          My Dashboard

                        </Link>

                        <button
                          type="button"
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 text-sm hover:bg-red-50"
                        >

                          <LogOut size={18} />

                          Logout

                        </button>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            )}

          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen(
                (previous) => !previous
              )
            }
            aria-label={
              menuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="xl:hidden p-2 rounded-lg text-primary hover:bg-secondary/10"
          >

            {menuOpen
              ? <X size={27} />
              : <Menu size={27} />}

          </button>

        </div>

      </div>

      {logoutError && (

        <p
          role="alert"
          className="section-container py-2 text-red-600 text-xs"
        >

          {logoutError}

        </p>

      )}

      {/* Mobile Navigation */}

      <AnimatePresence>

        {menuOpen && (

          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="xl:hidden bg-cream border-t border-primary/10 overflow-hidden"
          >

            <div className="section-container py-5 max-h-[calc(100dvh-80px)] overflow-y-auto">

              <div className="space-y-1">

                {navLinks.map((link) => (

                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={closeMenus}
                    className={mobileLinkClass}
                  >

                    {link.name}

                  </NavLink>

                ))}

                <NavLink
                  to="/about"
                  onClick={closeMenus}
                  className={mobileLinkClass}
                >

                  About Us

                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={closeMenus}
                  className={mobileLinkClass}
                >

                  Contact

                </NavLink>

              </div>

              <div className="border-t border-primary/10 mt-5 pt-5">

                {!isAuthenticated ? (

                  <div className="grid grid-cols-2 gap-3">

                    <Link
                      to="/login"
                      onClick={closeMenus}
                      className="flex items-center justify-center gap-2 border border-primary rounded-xl px-4 py-3 text-primary text-sm font-medium"
                    >

                      <LogIn size={18} />

                      Login

                    </Link>

                    <Link
                      to="/register"
                      onClick={closeMenus}
                      className="flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-4 py-3 text-sm font-medium"
                    >

                      <UserPlus size={18} />

                      Sign Up

                    </Link>

                  </div>

                ) : (

                  <div className="space-y-4">

                    <div className="flex items-center gap-3 bg-white rounded-xl border border-primary/10 p-4">

                      <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold shrink-0">

                        {initial}

                      </span>

                      <div className="min-w-0">

                        <p className="text-primary text-sm font-semibold truncate">

                          {user?.name}

                        </p>

                        <p className="text-muted text-xs truncate mt-1">

                          {user?.email}

                        </p>

                      </div>

                    </div>

                    <Link
                      to="/dashboard"
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white text-sm font-medium"
                    >

                      <LayoutDashboard size={19} />

                      My Dashboard

                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 text-red-600 text-sm font-medium"
                    >

                      <LogOut size={19} />

                      Logout

                    </button>

                  </div>

                )}

              </div>

            </div>

          </motion.nav>

        )}

      </AnimatePresence>

    </header>
  )
}

export default Navbar
