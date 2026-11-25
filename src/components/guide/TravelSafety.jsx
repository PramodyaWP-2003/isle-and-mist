
import {
  Droplets,
  Sun,
  Lock,
  PawPrint,
  CloudSun,
  ShieldCheck,
  Phone,
} from 'lucide-react'

import SectionHeading from '../ui/SectionHeading'
import { safetyTips } from '../../data/travelGuideData'

const safetyIcons = {
  water: Droplets,
  sun: Sun,
  belongings: Lock,
  wildlife: PawPrint,
  weather: CloudSun,
  insurance: ShieldCheck,
}

function TravelSafety() {
  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="Travel Smart"
          title="Essential Travel Safety Tips"
          description="Prepare for your journey and make informed decisions while exploring Sri Lanka."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {safetyTips.map((item) => {
            const Icon = safetyIcons[item.id] || ShieldCheck

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-primary/10 p-6"
              >

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">

                    <Icon size={24} className="text-secondary" />

                  </div>

                  <div>

                    <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                      {item.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </div>

              </article>
            )
          })}

        </div>

        <div className="bg-primary text-white rounded-2xl p-6 md:p-8 mt-10">

          <div className="flex items-center gap-3 mb-6">

            <Phone size={25} className="text-accent" />

            <h3 className="font-heading text-2xl font-semibold">
              Emergency Contact Numbers
            </h3>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <a
              href="tel:119"
              className="bg-white/10 border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors"
            >

              <p className="text-white/70 text-sm mb-2">
                Police Emergency
              </p>

              <p className="text-accent text-3xl font-semibold">
                119
              </p>

            </a>

            <a
              href="tel:1990"
              className="bg-white/10 border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors"
            >

              <p className="text-white/70 text-sm mb-2">
                Suwa Seriya Ambulance
              </p>

              <p className="text-accent text-3xl font-semibold">
                1990
              </p>

            </a>

          </div>

          <p className="text-white/70 text-xs mt-5">
            These numbers are intended for emergencies within Sri Lanka.
          </p>

        </div>

      </div>

    </section>
  )
}

export default TravelSafety
