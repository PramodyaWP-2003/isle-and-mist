
import TravelGuideHero from '../components/guide/TravelGuideHero'
import EssentialInformation from '../components/guide/EssentialInformation'
import BestTimeToVisit from '../components/guide/BestTimeToVisit'
import TransportationGuide from '../components/guide/TransportationGuide'
import FoodGuide from '../components/guide/FoodGuide'
import CulturalEtiquette from '../components/guide/CulturalEtiquette'
import TravelSafety from '../components/guide/TravelSafety'
import PackingChecklist from '../components/guide/PackingChecklist'
import TravelFAQs from '../components/guide/TravelFAQs'
import TravelGuideCTA from '../components/guide/TravelGuideCTA'

function TravelGuide() {
  return (
    <>

      {/* 01 - Travel Guide Hero */}
      <TravelGuideHero />

      {/* 02 - Essential Travel Information */}
      <EssentialInformation />

      {/* 03 - Best Time to Visit */}
      <BestTimeToVisit />

      {/* 04 - Transportation Guide */}
      <TransportationGuide />

      {/* 05 - Sri Lankan Cuisine */}
      <FoodGuide />

      {/* 06 - Culture and Local Etiquette */}
      <CulturalEtiquette />

      {/* 07 - Travel Safety */}
      <TravelSafety />

      {/* 08 - Interactive Packing Checklist */}
      <PackingChecklist />

      {/* 09 - Frequently Asked Questions */}
      <TravelFAQs />

      {/* 10 - Trip Planner CTA */}
      <TravelGuideCTA />

    </>
  )
}

export default TravelGuide
