
import {
  Wallet,
  Languages,
  Clock,
  Sun,
  Plug,
  FileText,
  Car,
  Phone,
  Info,
} from 'lucide-react'

import SectionHeading from '../ui/SectionHeading'
import { essentialInformation } from '../../data/travelGuideData'

const informationIcons = {
  currency: Wallet,
  language: Languages,
  time: Clock,
  climate: Sun,
  electricity: Plug,
  visa: FileText,
  driving: Car,
  emergency: Phone,
}

function EssentialInformation() {
  return (
    <section
      id="travel-essentials"
      className="section-padding bg-cream scroll-mt-24"
    >

      <div className="section-container">

        <SectionHeading
          subtitle="Travel Essentials"
          title="Know Before You Go"
          description="Important information to help you prepare for your Sri Lankan adventure."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {essentialInformation.map((item) => {
            const Icon = informationIcons[item.id] || Info

            return (
              <article
                key={item.id}
                className="bg-white border border-primary/10 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >

                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">

                  <Icon size={27} className="text-secondary" />

                </div>

                <p className="text-muted text-xs uppercase tracking-wider mb-2">
                  {item.title}
                </p>

                <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                  {item.value}
                </h3>

                <p className="text-muted text-sm leading-relaxed">
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

export default EssentialInformation
