
import { Utensils, ArrowRight, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import { foodItems } from '../../data/travelGuideData'

import riceCurryImage from '../../assets/images/food-rice-curry.jpeg'
import hoppersImage from '../../assets/images/food-hoppers.jpg'
import kottuImage from '../../assets/images/food-kottu.jfif'
import stringHoppersImage from '../../assets/images/food-string-hoppers.jpeg'
import watalappanImage from '../../assets/images/food-watalappan.jfif'
import ceylonTeaImage from '../../assets/images/food-ceylon-tea.webp'

const foodImages = {
  'rice-curry': riceCurryImage,
  hoppers: hoppersImage,
  kottu: kottuImage,
  'string-hoppers': stringHoppersImage,
  watalappan: watalappanImage,
  'ceylon-tea': ceylonTeaImage,
}

function FoodGuide() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-white">

      <div className="section-container">

        <SectionHeading
          subtitle="A Taste of the Island"
          title="Discover Sri Lankan Cuisine"
          description="Explore traditional flavors, aromatic spices and authentic local food experiences."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {foodItems.map((food, index) => (

            <motion.article
              key={food.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : (index % 3) * 0.1,
              }}
              className="group bg-white rounded-2xl border border-primary/10 overflow-hidden hover:shadow-lg transition-shadow"
            >

              <div className="relative h-56 overflow-hidden">

                <img
                  src={foodImages[food.id]}
                  alt={food.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-4 left-4 bg-white/95 text-primary rounded-full px-4 py-2 text-xs font-medium">
                  {food.category}
                </span>

              </div>

              <div className="p-6">

                <h3 className="flex items-center gap-3 font-heading text-2xl font-semibold text-primary mb-3">

                  <Utensils size={21} className="text-secondary shrink-0" />

                  {food.name}

                </h3>

                <p className="text-muted text-sm leading-relaxed">
                  {food.description}
                </p>

              </div>

            </motion.article>

          ))}

        </div>

        <div className="flex items-start gap-3 bg-cream rounded-xl p-5 mt-8">

          <Info size={21} className="text-secondary shrink-0" />

          <p className="text-muted text-sm leading-relaxed">
            Inform food providers about allergies or dietary
            requirements. You can also request less spicy
            meals when ordering.
          </p>

        </div>

        <div className="text-center mt-8">

          <Link
            to="/experiences?category=food"
            className="inline-flex items-center gap-3 bg-primary text-white rounded-full px-7 py-3 font-medium hover:bg-secondary transition-colors"
          >
            Explore Food Experiences
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  )
}

export default FoodGuide
