
import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Search,
  SearchX,
  Plus,
  Minus,
  ArrowRight,
  X,
} from 'lucide-react'

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import { travelFAQs } from '../../data/travelGuideData'

function TravelFAQs() {
  const [search, setSearch] = useState('')
  const [openId, setOpenId] = useState(travelFAQs[0]?.id)

  const reduceMotion = useReducedMotion()

  const normalizedSearch = search.trim().toLowerCase()

  const filteredFAQs = travelFAQs.filter((item) =>
    `${item.question} ${item.answer}`
      .toLowerCase()
      .includes(normalizedSearch)
  )

  function toggleFAQ(id) {
    setOpenId((previous) =>
      previous === id ? null : id
    )
  }

  return (
    <section className="section-padding bg-cream">

      <div className="section-container">

        <SectionHeading
          subtitle="Helpful Answers"
          title="Frequently Asked Questions"
          description="Find answers to common questions about traveling in Sri Lanka."
        />

        <div className="max-w-3xl mx-auto mt-10">

          <div className="relative mb-8">

            <Search
              size={21}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary"
            />

            <input
              type="search"
              aria-label="Search frequently asked questions"
              placeholder="Search your questions..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full bg-white border border-primary/15 rounded-full pl-12 pr-12 py-4 text-sm outline-none focus:border-secondary"
            />

            {search && (

              <button
                type="button"
                aria-label="Clear FAQ search"
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-primary"
              >
                <X size={19} />
              </button>

            )}

          </div>

          <p
            aria-live="polite"
            className="text-muted text-xs mb-4"
          >
            {filteredFAQs.length} question(s) found
          </p>

          {filteredFAQs.length > 0 ? (

            <div className="space-y-4">

              {filteredFAQs.map((item) => {
                const isOpen = openId === item.id

                return (
                  <article
                    key={item.id}
                    className="bg-white border border-primary/10 rounded-2xl overflow-hidden"
                  >

                    <h3>

                      <button
                        id={`faq-button-${item.id}`}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                        onClick={() => toggleFAQ(item.id)}
                        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left text-primary font-medium text-sm md:text-base"
                      >

                        <span>{item.question}</span>

                        <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">

                          {isOpen ? (
                            <Minus size={18} className="text-secondary" />
                          ) : (
                            <Plus size={18} className="text-secondary" />
                          )}

                        </span>

                      </button>

                    </h3>

                    <div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-button-${item.id}`}
                    >

                      <AnimatePresence initial={false}>

                        {isOpen && (

                          <motion.div
                            initial={reduceMotion ? false : {
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: 'auto',
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: reduceMotion ? 0 : 0.25,
                            }}
                            className="overflow-hidden"
                          >

                            <div className="px-5 md:px-6 pb-6">

                              <div className="border-t border-primary/10 pt-4">

                                <p className="text-muted text-sm leading-relaxed">
                                  {item.answer}
                                </p>

                                {item.link && (

                                  item.link.startsWith('/') ? (

                                    <Link
                                      to={item.link}
                                      className="inline-flex items-center gap-2 text-secondary font-medium text-sm mt-4 hover:text-primary"
                                    >
                                      {item.linkLabel}
                                      <ArrowRight size={16} />
                                    </Link>

                                  ) : (

                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 text-secondary font-medium text-sm mt-4 hover:text-primary"
                                    >
                                      {item.linkLabel}
                                      <ArrowRight size={16} />
                                    </a>

                                  )

                                )}

                              </div>

                            </div>

                          </motion.div>

                        )}

                      </AnimatePresence>

                    </div>

                  </article>
                )
              })}

            </div>

          ) : (

            <div className="bg-white rounded-2xl p-10 text-center">

              <SearchX
                size={42}
                className="text-secondary mx-auto mb-4"
              />

              <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                No Questions Found
              </h3>

              <p className="text-muted text-sm mb-6">
                Try searching with a different keyword.
              </p>

              <button
                type="button"
                onClick={() => setSearch('')}
                className="bg-primary text-white rounded-full px-6 py-3 text-sm hover:bg-secondary"
              >
                Clear Search
              </button>

            </div>

          )}

        </div>

      </div>

    </section>
  )
}

export default TravelFAQs
