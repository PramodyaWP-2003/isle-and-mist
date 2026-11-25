
import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { seoData } from '../data/seoData'

import destinations from '../data/destinations'

import tourPackages from '../data/tourPackages'

function setMeta(attribute, name, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${name}"]`
  )

  if (!element) {
    element = document.createElement('meta')

    element.setAttribute(attribute, name)

    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function getPageMetadata(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (seoData[path]) {
    return seoData[path]
  }

  const destinationMatch = path.match(
    /^\/destinations\/([^/]+)$/
  )

  if (destinationMatch) {
    const destination = destinations.find(
      (item) => item.id === destinationMatch[1]
    )

    if (destination) {
      return {
        title: `Discover ${destination.name}`,
        description: destination.description,
      }
    }
  }

  const packageMatch = path.match(
    /^\/tour-packages\/([^/]+)$/
  )

  if (packageMatch) {
    const tour = tourPackages.find(
      (item) => item.id === packageMatch[1]
    )

    if (tour) {
      return {
        title: tour.title,
        description: tour.description,
      }
    }
  }

  return {
    title: 'Page Not Found',
    description:
      'The requested Isle & Mist page could not be found.',
    noIndex: true,
  }
}

function PageSEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = getPageMetadata(pathname)

    const title = `${metadata.title} | Isle & Mist`

    document.title = title

    setMeta(
      'name',
      'description',
      metadata.description
    )

    setMeta(
      'name',
      'robots',
      metadata.noIndex
        ? 'noindex, nofollow'
        : 'index, follow'
    )

    setMeta(
      'property',
      'og:title',
      title
    )

    setMeta(
      'property',
      'og:description',
      metadata.description
    )

    setMeta(
      'property',
      'og:site_name',
      'Isle & Mist'
    )

    setMeta(
      'property',
      'og:type',
      'website'
    )

    setMeta(
      'name',
      'twitter:card',
      'summary'
    )

    setMeta(
      'name',
      'twitter:title',
      title
    )

    setMeta(
      'name',
      'twitter:description',
      metadata.description
    )

  }, [pathname])

  return null
}

export default PageSEO
