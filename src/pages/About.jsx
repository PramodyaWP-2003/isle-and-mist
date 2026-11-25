
import AboutHero from '../components/about/AboutHero'
import BrandStory from '../components/about/BrandStory'
import MissionVision from '../components/about/MissionVision'
import CoreValues from '../components/about/CoreValues'
import WhyIsleAndMist from '../components/about/WhyIsleAndMist'
import SustainableTourism from '../components/about/SustainableTourism'
import OurTeam from '../components/about/OurTeam'
import AboutCTA from '../components/about/AboutCTA'

function About() {
  return (
    <>

      {/* 01 - About Hero */}
      <AboutHero />

      {/* 02 - Brand Story */}
      <BrandStory />

      {/* 03 - Mission and Vision */}
      <MissionVision />

      {/* 04 - Core Values */}
      <CoreValues />

      {/* 05 - Why Choose Isle & Mist */}
      <WhyIsleAndMist />

      {/* 06 - Sustainable Tourism */}
      <SustainableTourism />

      {/* 07 - Our Team */}
      <OurTeam />

      {/* 08 - Call to Action */}
      <AboutCTA />

    </>
  )
}

export default About
