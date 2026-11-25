
import { useState } from 'react'

import { Link } from 'react-router-dom'

import {
  Plus,
  Minus,
  ArrowRight,
  HelpCircle,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'

import {
  contactFAQs,
} from '../../data/contactData'

function ContactFAQ() {
  const [openId, setOpenId] = useState(1)

  const reduceMotion = useReducedMotion()

  function toggleQuestion(id) {
    setOpenId((previous) =>
      previous === id ? null : id
    )
  }

  return (
    <section
      id="contact-faq"
      className="section-padding bg-white scroll-mt-24"
    >

      <div className="section-container">

        <SectionHeading
          subtitle="Find Your Answers"
          title="Frequently Asked Questions"
          description="Find answers to common questions about Isle & Mist and our travel planning features."
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-4">

          {contactFAQs.map((item, index) => {
            const isOpen =
              openId === item.id

            return (
              <motion.article
                key={item.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 15 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  isOpen
                    ? 'border-secondary/30 bg-cream'
                    : 'border-primary/10 bg-white'
                }`}
              >

                <h3>

                  <button
                    type="button"
                    id={`faq-button-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    onClick={() =>
                      toggleQuestion(item.id)
                    }
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  >

                    <span className="flex items-center gap-3">

                      <HelpCircle
                        size={21}
                        className="text-secondary shrink-0"
                      />

                      <span className="text-primary text-sm md:text-base font-semibold">

                        {item.question}

                      </span>

                    </span>

                    <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen
                        ? 'bg-primary text-white'
                        : 'bg-secondary/10 text-secondary'
                    }`}>

                      {isOpen ? (
                        <Minus size={19} />
                      ) : (
                        <Plus size={19} />
                      )}

                    </span>

                  </button>

                </h3>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  hidden={!isOpen}
                  className="px-5 md:px-6 pb-6"
                >

                  <div className="border-t border-primary/10 pt-5">

                    <p className="text-muted text-sm leading-relaxed">

                      {item.answer}

                    </p>

                    {item.link && (

                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-2 text-secondary text-sm font-semibold hover:text-primary mt-4"
                      >

                        {item.linkText}

                        <ArrowRight size={17} />

                      </Link>

                    )}

                  </div>

                </div>

              </motion.article>
            )
          })}

        </div>

        <div className="text-center mt-10">

          <p className="text-muted text-sm mb-4">

            Still have a question?

          </p>

          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:text-primary"
          >

            Use Our Contact Form

            <ArrowRight size={18} />

          </a>

        </div>

      </div>

    </section>
  )
}

export default ContactFAQ
