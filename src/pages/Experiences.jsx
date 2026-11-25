
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchX, RotateCcw } from 'lucide-react'

// Experience Components

import ExperiencesHero from '../components/experiences/ExperiencesHero'
import ExperienceFilters from '../components/experiences/ExperienceFilters'
import ExperienceExploreCard from '../components/experiences/ExperienceExploreCard'
import ExperienceDetailsModal from '../components/experiences/ExperienceDetailsModal'
import ExperiencesCTA from '../components/experiences/ExperiencesCTA'

// Shared Components

import SectionHeading from '../components/ui/SectionHeading'

// Experience Data

import experiences from '../data/experiences'
import experienceDetails from '../data/experienceDetails'

function Experiences() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [selectedExperience, setSelectedExperience] =
    useState(null)

  const category = searchParams.get('category') || 'all'

  // Update Category Filter

  function handleCategoryChange(value) {
    setSearchParams(
      (previous) => {
        const params = new URLSearchParams(previous)

        if (value === 'all') {
          params.delete('category')
        } else {
          params.set('category', value)
        }

        return params
      },
      { replace: true }
    )
  }

  // Filter Experiences

  const filteredExperiences = experiences.filter(
    (experience) =>
      experienceDetails[experience.id] &&
      (category === 'all' || experience.id === category)
  )

  // Find Selected Experience

  const activeExperience = experiences.find(
    (experience) => experience.id === selectedExperience
  )

  const activeDetails = activeExperience
    ? experienceDetails[activeExperience.id]
    : null

  return (
    <>

      {/* 01 - Cinematic Hero */}

      <ExperiencesHero />

      {/* 02 - Experiences Section */}

      <section
        id="explore-experiences"
        className="section-padding bg-cream scroll-mt-24"
      >

        <div className="section-container">

          <SectionHeading
            subtitle="Experience the Island"
            title="Find Your Next Adventure"
            description="Discover unique experiences that match your interests and create unforgettable memories across Sri Lanka."
          />

          {/* Category Filters */}

          <ExperienceFilters
            category={category}
            onCategoryChange={handleCategoryChange}
          />

          {/* Results Counter */}

          <div className="flex items-center justify-between border-b border-primary/10 pb-4 mb-8">

            <p
              aria-live="polite"
              className="text-muted text-sm"
            >

              Showing{' '}

              <span className="font-semibold text-primary">
                {filteredExperiences.length}
              </span>

              {' '}of {experiences.length} experiences

            </p>

            {category !== 'all' && (

              <button
                type="button"
                onClick={() => handleCategoryChange('all')}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-secondary"
              >

                <RotateCcw size={16} />

                Reset Filter

              </button>

            )}

          </div>

          {/* Experience Cards */}

          {filteredExperiences.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

              {filteredExperiences.map((experience, index) => (

                <ExperienceExploreCard
                  key={experience.id}
                  experience={experience}
                  details={experienceDetails[experience.id]}
                  onExplore={setSelectedExperience}
                  index={index}
                />

              ))}

            </div>

          ) : (

            <div className="bg-white rounded-2xl border border-primary/10 p-10 md:p-16 text-center">

              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">

                <SearchX
                  size={36}
                  className="text-secondary"
                />

              </div>

              <h3 className="font-heading text-3xl font-semibold text-primary mb-4">
                No Experiences Found
              </h3>

              <p className="text-muted text-sm mb-6">
                Try selecting a different experience category.
              </p>

              <button
                type="button"
                onClick={() => handleCategoryChange('all')}
                className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-6 py-3 hover:bg-secondary transition-colors"
              >

                <RotateCcw size={18} />

                View All Experiences

              </button>

            </div>

          )}

        </div>

      </section>

      {/* 03 - Call to Action */}

      <ExperiencesCTA />

      {/* 04 - Experience Details Modal */}

      {activeExperience && activeDetails && (

        <ExperienceDetailsModal
          key={activeExperience.id}
          experience={activeExperience}
          details={activeDetails}
          onClose={() => setSelectedExperience(null)}
        />

      )}

    </>
  )
}

export default Experiences
