
import {
  Mail,
  Headphones,
  MapPin,
  Clock,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'

import {
  contactInformation,
} from '../../data/contactData'

const contactIcons = {
  email: Mail,
  support: Headphones,
  location: MapPin,
  availability: Clock,
}

function ContactInfo() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="Connect With Us"
          title="How Can We Help?"
          description="Discover useful information and ways to explore the Isle & Mist platform."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {contactInformation.map((item, index) => {
            const Icon =
              contactIcons[item.id] || Mail

            return (
              <motion.article
                key={item.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group bg-white border border-primary/10 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >

                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">

                  <Icon
                    size={30}
                    className="text-secondary group-hover:text-accent"
                  />

                </div>

                <h3 className="font-heading text-xl font-semibold text-primary mb-3">

                  {item.title}

                </h3>

                <p className="text-secondary font-medium text-sm mb-4">

                  {item.value}

                </p>

                <p className="text-muted text-sm leading-relaxed">

                  {item.description}

                </p>

              </motion.article>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default ContactInfo
