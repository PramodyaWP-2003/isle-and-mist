
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mountain,
  Globe,
  Camera,
  Play,
  Mail,
  MapPin,
  Heart,
  ArrowRight,
} from 'lucide-react'

const exploreLinks = [
  { name: 'Destinations', path: '/destinations' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Tour Packages', path: '/tour-packages' },
  { name: 'Trip Planner', path: '/trip-planner' },
  { name: 'Travel Guide', path: '/travel-guide' },
]

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'My Dashboard', path: '/dashboard' },
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubscribe(event) {
    event.preventDefault()

    setMessage('Thank you! This is a demo subscription.')
    setEmail('')
  }

  return (
    <footer className="bg-primary text-white">

      <div className="section-container py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Information */}

          <div>
            <Link to="/" className="flex items-center gap-2">
              <Mountain size={36} className="text-accent" />

              <span className="font-heading text-3xl font-bold">
                Isle &amp; Mist
              </span>
            </Link>

            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              Discover the island. Embrace the mist.
              Experience the extraordinary beauty,
              culture and adventures of Sri Lanka.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
              <MapPin size={17} className="text-accent" />
              Sri Lanka
            </div>

            {/* Social Media Placeholders */}

            <div className="flex gap-3 mt-6">

              {[Globe, Camera, Play].map((Icon, index) => (
                <span
                  key={index}
                  className="p-3 border border-white/20 rounded-full text-accent"
                >
                  <Icon size={18} />
                </span>
              ))}

            </div>
          </div>

          {/* Explore Links */}

          <div>
            <h3 className="text-xl text-accent mb-5">
              Explore
            </h3>

            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl text-accent mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="text-xl text-accent mb-5">
              Stay Inspired
            </h3>

            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Get travel inspiration, destination guides
              and island stories.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-3">

                <Mail size={18} className="text-accent shrink-0" />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  required
                  className="w-full min-w-0 bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                />

              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-accent text-primary rounded-lg py-3 text-sm font-semibold hover:bg-[#CDA57F] transition-colors"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>

              {message && (
                <p
                  role="status"
                  className="text-xs text-accent"
                >
                  {message}
                </p>
              )}

            </form>
          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-white/15 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-white/60 text-center">
            © {new Date().getFullYear()} Isle &amp; Mist.
            All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-xs text-white/60">
            Made with
            <Heart size={14} className="text-accent fill-accent" />
            for Sri Lanka
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
