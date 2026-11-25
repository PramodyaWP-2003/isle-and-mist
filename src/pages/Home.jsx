
import HeroSection from '../components/home/HeroSection'
import DestinationSearch from '../components/home/DestinationSearch'
import PopularDestinations from '../components/home/PopularDestinations'
import TravelExperiences from '../components/home/TravelExperiences'
import FeaturedTourPackages from '../components/home/FeaturedTourPackages'
import WhyChooseUs from '../components/home/WhyChooseUs'
import TripPlanningCTA from '../components/home/TripPlanningCTA'

function Home() {
  return (
    <>
      <HeroSection />
      <DestinationSearch />
      <PopularDestinations />
      <TravelExperiences />
      <FeaturedTourPackages />
      <WhyChooseUs />
      <TripPlanningCTA />
    </>
  )
}

export default Home
