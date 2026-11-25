
import destinations from '../data/destinations'
import experiences from '../data/experiences'
import tourPackages from '../data/tourPackages'
import tourPackageDetails from '../data/tourPackageDetails'
import experienceDetails from '../data/experienceDetails'

import { defaultPreferences } from '../data/plannerData'
import { getToday } from './tripGenerator'
import { getTripById } from './tripStorage'

function normalize(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
}

export function getPlannerInitialState(params) {
  const savedTripId = params.get('trip')

  const savedTrip = savedTripId
    ? getTripById(savedTripId)
    : null

  if (savedTrip) {
    return {
      selectedDestinations: savedTrip.selectedDestinations,
      selectedInterests: savedTrip.selectedInterests,
      preferences: savedTrip.preferences,
      packageId: savedTrip.packageId || '',
      editingId: savedTrip.id,
      generatedTrip: savedTrip,
      currentStep: params.get('mode') === 'edit' ? 1 : 4,
    }
  }

  const destinationId = normalize(
    params.get('destination')
  )

  const experienceId = normalize(
    params.get('experience') || params.get('interest')
  )

  const requestedPackageId = normalize(
    params.get('package')
  )

  const selectedPackage = tourPackages.find(
    (item) => item.id === requestedPackageId
  )

  const packageDetails = selectedPackage
    ? tourPackageDetails[selectedPackage.id]
    : null

  const selectedDestinations = new Set()
  const selectedInterests = new Set()

  const preferences = {
    ...defaultPreferences,
  }

  if (selectedPackage && packageDetails) {

    // Preserve the order of destinations in the sample itinerary.
    const packageDestinations =
      selectedPackage.id === 'misty-highlands'
        ? ['kandy', 'nuwara-eliya', 'ella']
        : packageDetails.destinations

    packageDestinations.forEach((id) => {
      if (destinations.some((item) => item.id === id)) {
        selectedDestinations.add(id)
      }
    })

    preferences.name = `${selectedPackage.title} Trip`
    preferences.duration = packageDetails.days
  }

  if (destinations.some((item) => item.id === destinationId)) {
    selectedDestinations.add(destinationId)
  }

  if (experiences.some((item) => item.id === experienceId)) {
    selectedInterests.add(experienceId)

    if (!selectedDestinations.size) {

      const suggestedDestinations =
        experienceDetails[experienceId]?.destinations || []

      suggestedDestinations.forEach((id) => {
        if (destinations.some((item) => item.id === id)) {
          selectedDestinations.add(id)
        }
      })
    }
  }

  const date = params.get('date') || ''

  if (
    /^\d{4}-\d{2}-\d{2}$/.test(date) &&
    date >= getToday() &&
    !Number.isNaN(new Date(`${date}T12:00:00`).getTime())
  ) {
    preferences.date = date
  }

  const travelers = Number(params.get('travelers'))

  if (
    Number.isInteger(travelers) &&
    travelers >= 1 &&
    travelers <= 12
  ) {
    preferences.travelers = travelers
  }

  preferences.duration = Math.max(
    preferences.duration,
    selectedDestinations.size
  )

  return {
    selectedDestinations: [...selectedDestinations],
    selectedInterests: [...selectedInterests],
    preferences,
    packageId:
      selectedPackage && packageDetails
        ? selectedPackage.id
        : '',
    editingId: null,
    generatedTrip: null,
    currentStep: 1,
  }
}
