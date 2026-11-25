
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

import {
  ArrowLeft,
  ArrowRight,
  Save,
  RotateCcw,
  AlertCircle,
  CheckCircle,
  Package,
} from 'lucide-react'

// Planner Components

import TripPlannerHero from '../components/planner/TripPlannerHero'
import PlannerSteps from '../components/planner/PlannerSteps'
import DestinationSelector from '../components/planner/DestinationSelector'
import InterestSelector from '../components/planner/InterestSelector'
import TripPreferences from '../components/planner/TripPreferences'
import ItineraryResult from '../components/planner/ItineraryResult'
import CostSummary from '../components/planner/CostSummary'
import SavedTrips from '../components/planner/SavedTrips'

// Shared Components

import SectionHeading from '../components/ui/SectionHeading'

// Data

import { defaultPreferences } from '../data/plannerData'
import tourPackages from '../data/tourPackages'

// Utilities

import {
  generateTrip,
  estimateTripCost,
  getToday,
} from '../utils/tripGenerator'

import {
  getSavedTrips,
  saveTrip,
  deleteTrip,
} from '../utils/tripStorage'

import {
  getPlannerInitialState,
} from '../utils/plannerParams'


function TripPlanner() {
  const [searchParams] = useSearchParams()

  const { user } = useAuth()

  return (
    <TripPlannerContent
      key={`${user?.id || 'guest'}-${searchParams.toString()}`}
      initialParams={searchParams}
    />
  )
}


function TripPlannerContent({ initialParams }) {

  const [initialState] = useState(() =>
    getPlannerInitialState(initialParams)
  )

  const [currentStep, setCurrentStep] = useState(
    initialState.currentStep
  )

  const [selectedDestinations, setSelectedDestinations] =
    useState(initialState.selectedDestinations)

  const [selectedInterests, setSelectedInterests] =
    useState(initialState.selectedInterests)

  const [preferences, setPreferences] =
    useState(initialState.preferences)

  const [packageId, setPackageId] =
    useState(initialState.packageId)

  const [editingId, setEditingId] =
    useState(initialState.editingId)

  const [generatedTrip, setGeneratedTrip] =
    useState(initialState.generatedTrip)

  const [savedTrips, setSavedTrips] =
    useState(getSavedTrips)

  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const sourcePackage = tourPackages.find(
    (item) => item.id === packageId
  )

  function scrollToPlanner() {
    document.getElementById('trip-planner')?.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    })
  }

  function clearFeedback() {
    setError('')
    setMessage('')
  }

  function handleNext() {
    clearFeedback()

    if (currentStep === 1 && !selectedDestinations.length) {
      setError('Please select at least one destination.')
      return
    }

    if (currentStep < 3) {
      setCurrentStep((previous) => previous + 1)
      scrollToPlanner()
    }
  }

  function handleBack() {
    clearFeedback()

    setCurrentStep((previous) =>
      Math.max(1, previous - 1)
    )

    scrollToPlanner()
  }

  function handleGenerate() {
    clearFeedback()

    if (!preferences.date || preferences.date < getToday()) {
      setError('Please select a valid travel start date.')
      return
    }

    try {

      const trip = generateTrip({
        selectedDestinations,
        selectedInterests,
        preferences,
        packageId,
      })

      setGeneratedTrip({
        ...trip,
        ...(editingId ? { id: editingId } : {}),
      })

      setCurrentStep(4)
      scrollToPlanner()

    } catch (err) {
      setError(err.message || 'Unable to generate your trip.')
    }
  }

  function handleSave() {
    if (!generatedTrip) return

    clearFeedback()

    try {

      const saved = saveTrip({
        ...generatedTrip,
        ...(editingId ? { id: editingId } : {}),
      })

      setEditingId(saved.id)
      setGeneratedTrip(saved)
      setSavedTrips(getSavedTrips())
      setMessage('Your trip has been saved successfully!')

    } catch {
      setError(
        'Unable to save your trip. Please check your browser storage settings.'
      )
    }
  }

  function loadTrip(trip) {
    setSelectedDestinations([...trip.selectedDestinations])
    setSelectedInterests([...trip.selectedInterests])
    setPreferences({ ...trip.preferences })
    setPackageId(trip.packageId || '')
    setEditingId(trip.id)
    setGeneratedTrip(trip)
    clearFeedback()
  }

  function handleView(trip) {
    loadTrip(trip)
    setCurrentStep(4)
    scrollToPlanner()
  }

  function handleEdit(trip) {
    loadTrip(trip)
    setCurrentStep(1)
    scrollToPlanner()
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this saved trip?'
    )

    if (!confirmed) return

    clearFeedback()

    try {

      const updatedTrips = deleteTrip(id)

      setSavedTrips(updatedTrips)

      if (editingId === id) {
        setEditingId(null)

        setGeneratedTrip((previous) =>
          previous
            ? { ...previous, id: undefined }
            : null
        )
      }

      setMessage('Saved trip deleted successfully.')

    } catch {
      setError('Unable to delete the saved trip.')
    }

    scrollToPlanner()
  }

  function handleReset() {
    setSelectedDestinations([])
    setSelectedInterests([])
    setPreferences({ ...defaultPreferences })
    setPackageId('')
    setEditingId(null)
    setGeneratedTrip(null)
    setCurrentStep(1)

    clearFeedback()
    scrollToPlanner()
  }

  return (
    <>

      {/* 01 - Trip Planner Hero */}

      <TripPlannerHero />

      {/* 02 - Interactive Planner */}

      <section
        id="trip-planner"
        className="section-padding bg-cream scroll-mt-24"
      >

        <div className="section-container">

          <SectionHeading
            subtitle="Personalize Your Adventure"
            title="Create Your Perfect Trip"
            description="Follow a few simple steps to create a personalized travel itinerary across Sri Lanka."
          />

          <div className="mt-12">

            <PlannerSteps currentStep={currentStep} />

            {/* Package Integration Notice */}

            {sourcePackage && (

              <div className="flex flex-wrap items-center gap-3 bg-secondary/10 border border-secondary/20 rounded-xl p-4 mb-6">

                <Package
                  size={23}
                  className="text-secondary shrink-0"
                />

                <div className="flex-1 min-w-0">

                  <p className="text-primary font-medium text-sm">
                    Inspired by {sourcePackage.title}
                  </p>

                  <p className="text-muted text-xs mt-1">
                    Customize this journey to match your preferences.
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() => {
                    setPackageId('')

                    setGeneratedTrip((previous) =>
                      previous
                        ? {
                            ...previous,
                            packageId: '',
                            packageReference: null,
                          }
                        : null
                    )

                    clearFeedback()
                  }}
                  className="text-secondary text-xs font-medium"
                >
                  Remove Package Reference
                </button>

              </div>

            )}

            {/* Planner Content */}

            <div className="bg-white border border-primary/10 rounded-2xl md:rounded-3xl shadow-sm p-5 md:p-8 lg:p-10">

              {/* Step 1 - Destinations */}

              {currentStep === 1 && (

                <DestinationSelector
                  selected={selectedDestinations}
                  onChange={(value) => {
                    setSelectedDestinations(value)
                    clearFeedback()
                  }}
                />

              )}

              {/* Step 2 - Interests */}

              {currentStep === 2 && (

                <InterestSelector
                  selected={selectedInterests}
                  onChange={(value) => {
                    setSelectedInterests(value)
                    clearFeedback()
                  }}
                />

              )}

              {/* Step 3 - Trip Preferences */}

              {currentStep === 3 && (

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8">

                  <TripPreferences
                    preferences={preferences}
                    onChange={(value) => {
                      setPreferences(value)
                      clearFeedback()
                    }}
                  />

                  <div className="min-w-0">

                    <CostSummary
                      cost={estimateTripCost(preferences)}
                      budget={preferences.budget}
                    />

                  </div>

                </div>

              )}

              {/* Step 4 - Generated Itinerary */}

              {currentStep === 4 && generatedTrip && (

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8">

                  <div className="min-w-0">

                    <ItineraryResult trip={generatedTrip} />

                  </div>

                  <div className="min-w-0">

                    <CostSummary
                      cost={generatedTrip.cost}
                      budget={generatedTrip.preferences.budget}
                      packageReference={generatedTrip.packageReference}
                    />

                  </div>

                </div>

              )}

              {/* Error Message */}

              {error && (

                <div
                  role="alert"
                  className="flex items-start gap-3 bg-red-50 text-red-700 rounded-xl p-4 mt-6 text-sm"
                >

                  <AlertCircle size={20} className="shrink-0" />

                  {error}

                </div>

              )}

              {/* Success Message */}

              {message && (

                <div
                  role="status"
                  className="flex items-start gap-3 bg-green-50 text-green-700 rounded-xl p-4 mt-6 text-sm"
                >

                  <CheckCircle size={20} className="shrink-0" />

                  {message}

                </div>

              )}

              {/* Navigation Buttons */}

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-primary/10 pt-6 mt-8">

                <div className="flex flex-wrap gap-3">

                  {currentStep > 1 && (

                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 border border-primary/20 text-primary rounded-full px-5 py-3 text-sm font-medium hover:bg-cream"
                    >
                      <ArrowLeft size={18} />

                      {currentStep === 4
                        ? 'Edit Trip Details'
                        : 'Back'}

                    </button>

                  )}

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-muted text-sm hover:text-primary"
                  >
                    <RotateCcw size={17} />
                    Start Over
                  </button>

                </div>

                {currentStep < 3 && (

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center justify-center gap-3 bg-primary text-white rounded-full px-7 py-3 font-medium hover:bg-secondary transition-colors"
                  >
                    Continue
                    <ArrowRight size={18} />
                  </button>

                )}

                {currentStep === 3 && (

                  <button
                    type="button"
                    onClick={handleGenerate}
                    className="inline-flex items-center justify-center gap-3 bg-primary text-white rounded-full px-7 py-3 font-medium hover:bg-secondary transition-colors"
                  >
                    Generate My Trip
                    <ArrowRight size={18} />
                  </button>

                )}

                {currentStep === 4 && (

                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex items-center justify-center gap-3 bg-primary text-white rounded-full px-7 py-3 font-medium hover:bg-secondary transition-colors"
                  >
                    <Save size={18} />

                    {editingId
                      ? 'Update Saved Trip'
                      : 'Save My Trip'}

                  </button>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 03 - Saved Trips */}

      <SavedTrips
        trips={savedTrips}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </>
  )
}

export default TripPlanner
