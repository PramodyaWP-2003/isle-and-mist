
import destinations from '../data/destinations'
import tourPackages from '../data/tourPackages'
import tourPackageDetails from '../data/tourPackageDetails'

import {
  plannerActivities,
  travelRates,
} from '../data/plannerData'

export function getToday() {
  const now = new Date()

  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function addDays(date, amount) {
  const result = new Date(`${date}T12:00:00`)

  result.setDate(result.getDate() + amount)

  const year = result.getFullYear()
  const month = String(result.getMonth() + 1).padStart(2, '0')
  const day = String(result.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString(
    'en-US',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
  )
}

export function formatCurrency(amount) {
  return Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
}

export function estimateTripCost(preferences) {
  const rates =
    travelRates[preferences.style] || travelRates.standard

  const days = Number(preferences.duration)
  const travelers = Number(preferences.travelers)
  const nights = Math.max(0, days - 1)

  // Assume two travelers per room.
  const rooms = Math.ceil(travelers / 2)

  const accommodation =
    rates.accommodation * nights * rooms

  const food =
    rates.food * days * travelers

  const transport =
    rates.transport * days * Math.ceil(travelers / 4)

  const activities =
    rates.activities * days * travelers

  const subtotal =
    accommodation + food + transport + activities

  const contingency = Math.round(subtotal * 0.1)

  const total = subtotal + contingency

  return {
    accommodation,
    food,
    transport,
    activities,
    contingency,
    total,
    perPerson: Math.round(total / travelers),
  }
}

export function generateTrip({
  selectedDestinations,
  selectedInterests,
  preferences,
  packageId = '',
}) {
  const validDestinations = selectedDestinations
    .map((id) =>
      destinations.find((destination) => destination.id === id)
    )
    .filter(Boolean)

  const days = Number(preferences.duration)

  if (!validDestinations.length) {
    throw new Error('Please select at least one destination.')
  }

  if (!Number.isInteger(days) || days < 1 || days > 14) {
    throw new Error('Please select a valid trip duration.')
  }

  if (days < validDestinations.length) {
    throw new Error(
      'Your trip needs at least one day for each selected destination.'
    )
  }

  if (
    !preferences.date ||
    preferences.date < getToday() ||
    !/^\d{4}-\d{2}-\d{2}$/.test(preferences.date) ||
    Number.isNaN(new Date(`${preferences.date}T12:00:00`).getTime())
  ) {
    throw new Error('Please select a valid travel date.')
  }

  if (
    !Number.isInteger(Number(preferences.travelers)) ||
    Number(preferences.travelers) < 1 ||
    Number(preferences.travelers) > 12
  ) {
    throw new Error('Please select between 1 and 12 travelers.')
  }

  if (
    preferences.budget !== '' &&
    (
      !Number.isFinite(Number(preferences.budget)) ||
      Number(preferences.budget) < 0 ||
      Number(preferences.budget) > 1000000
    )
  ) {
    throw new Error('Please enter a valid budget.')
  }

  const itinerary = []

  const baseDays = Math.floor(
    days / validDestinations.length
  )

  const extraDays = days % validDestinations.length

  let dayNumber = 1

  validDestinations.forEach((destination, index) => {
    const allocatedDays =
      baseDays + (index < extraDays ? 1 : 0)

    const availableActivities = [
      ...(plannerActivities[destination.id] || []),
    ]

    // Prioritize activities matching selected interests.
    availableActivities.sort((a, b) => {
      const aMatch =
        selectedInterests.includes(a.interest) ? 1 : 0

      const bMatch =
        selectedInterests.includes(b.interest) ? 1 : 0

      return bMatch - aMatch
    })

    for (let localDay = 0; localDay < allocatedDays; localDay++) {
      const startIndex = localDay * 2

      const activities = availableActivities
        .slice(startIndex, startIndex + 2)
        .map((item) => item.name)

      if (!activities.length) {
        activities.push(
          `Enjoy free time and explore ${destination.name}`
        )
      }

      const isTransfer = index > 0 && localDay === 0

      if (isTransfer) {
        activities.unshift(
          `Travel to ${destination.name}; adjust sightseeing to travel time`
        )
      }

      itinerary.push({
        day: dayNumber,
        date: addDays(preferences.date, dayNumber - 1),
        destinationId: destination.id,
        destination: destination.name,
        activities,
      })

      dayNumber++
    }
  })

  const cost = estimateTripCost(preferences)

  const sourcePackage = tourPackages.find(
    (item) => item.id === packageId
  )

  const sourceDetails = tourPackageDetails[packageId]

  return {
    name: preferences.name.trim() || 'My Sri Lankan Adventure',
    selectedDestinations: validDestinations.map((item) => item.id),
    selectedInterests: [...selectedInterests],
    preferences: { ...preferences },
    itinerary,
    cost,
    packageId,
    packageReference:
      sourcePackage && sourceDetails
        ? {
            title: sourcePackage.title,
            estimatedTotal:
              Number(sourcePackage.price) * preferences.travelers,
            originalDuration: sourceDetails.days,
          }
        : null,
  }
}
