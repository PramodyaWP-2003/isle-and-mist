
import {
  Shirt,
  Landmark,
  Camera,
  Hand,
  Leaf,
  HeartHandshake,
  Heart,
} from 'lucide-react'


import { culturalTips } from '../../data/travelGuideData'

const cultureIcons = {
  dress: Shirt,
  temple: Landmark,
  photo: Camera,
  greeting: Hand,
  environment: Leaf,
  community: HeartHandshake,
}

function CulturalEtiquette() {
  return (
    <section className="section-padding bg-primary">

      <div className="section-container">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4">
            Travel With Respect
          </p>

          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-5">
            Culture and Local Etiquette
          </h2>

          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Discover the traditions, values and customs that
            make Sri Lanka a unique and welcoming destination.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {culturalTips.map((item) => {
            const Icon = cultureIcons[item.id] || Heart

            return (
              <article
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >

                <div className="w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center mb-5">

                  <Icon size={27} className="text-accent" />

                </div>

                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>

              </article>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default CulturalEtiquette
