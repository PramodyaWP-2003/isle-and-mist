
import { useState } from 'react'

import { Link } from 'react-router-dom'

import {
  Send,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  Compass,
  ShieldCheck,
  ArrowRight,
  LoaderCircle,
} from 'lucide-react'

import {
  inquiryCategories,
} from '../../data/contactData'

import {
  validateContactForm,
} from '../../utils/contactValidation'

import {
  submitContactInquiry,
} from '../../utils/contactSubmission'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  category: '',
  subject: '',
  message: '',
  consent: false,
}

function ContactForm() {
  const [formData, setFormData] = useState({
    ...initialForm,
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [receipt, setReceipt] = useState(null)
  const [submissionError, setSubmissionError] =
    useState('')

  const isSubmitting = status === 'submitting'

  function handleChange(event) {
    const {
      name,
      value,
      type,
      checked,
    } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox'
        ? checked
        : value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }))

    setSubmissionError('')
  }

  function handleBlur(event) {
    const { name } = event.target

    const validationErrors =
      validateContactForm(formData)

    setErrors((previous) => ({
      ...previous,
      [name]: validationErrors[name] || '',
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (isSubmitting) return

    const validationErrors =
      validateContactForm(formData)

    setErrors(validationErrors)
    setSubmissionError('')

    if (
      Object.keys(validationErrors).length > 0
    ) {
      const firstField =
        Object.keys(validationErrors)[0]

      event.currentTarget.elements
        .namedItem(firstField)
        ?.focus()

      return
    }

    setStatus('submitting')

    try {
      const result =
        await submitContactInquiry(formData)

      setReceipt(result)
      setStatus('success')

    } catch (error) {
      setSubmissionError(
        error.message ||
        'Something went wrong. Please try again.'
      )

      setStatus('idle')
    }
  }

  function resetForm() {
    setFormData({ ...initialForm })
    setErrors({})
    setReceipt(null)
    setSubmissionError('')
    setStatus('idle')
  }

  function getInputClass(field) {
    return `w-full min-w-0 rounded-xl border bg-cream px-4 py-3.5 text-sm text-dark outline-none transition-colors placeholder:text-muted/70 focus:ring-2 ${
      errors[field]
        ? 'border-red-400 focus:ring-red-100'
        : 'border-primary/15 focus:border-secondary focus:ring-secondary/15'
    }`
  }

  function renderError(field) {
    if (!errors[field]) return null

    return (
      <p
        id={`${field}-error`}
        className="flex items-start gap-1.5 text-red-600 text-xs mt-2"
      >

        <AlertCircle
          size={14}
          className="shrink-0"
        />

        {errors[field]}

      </p>
    )
  }

  return (
    <section
      id="contact-form"
      className="section-padding bg-white scroll-mt-24"
    >

      <div className="section-container">

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-start">

          <div className="bg-white border border-primary/10 rounded-3xl shadow-sm p-5 sm:p-8 lg:p-10 min-w-0">

            {status === 'success' ? (

              <div
                role="status"
                className="text-center py-12"
              >

                <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">

                  <CheckCircle
                    size={48}
                    className="text-green-600"
                  />

                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">

                  Demo Submission Successful!

                </h2>

                <p className="text-muted text-sm leading-relaxed mb-6">

                  Thank you, {receipt?.name}.
                  Your inquiry has successfully passed
                  the form validation checks.

                </p>

                <div className="bg-cream rounded-2xl p-5 mb-6">

                  <p className="text-muted text-xs mb-2">
                    Demonstration Reference
                  </p>

                  <p className="text-primary font-semibold break-all">
                    {receipt?.reference}
                  </p>

                </div>

                <p className="text-muted text-xs leading-relaxed mb-8">

                  This is a frontend demonstration.
                  No email has been sent and your
                  message has not been delivered to
                  a support team.

                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center justify-center gap-3 bg-primary text-white rounded-xl px-6 py-4 text-sm font-medium hover:bg-secondary transition-colors"
                >

                  <RotateCcw size={18} />

                  Send Another Message

                </button>

              </div>

            ) : (

              <>

                <p className="text-secondary uppercase tracking-widest text-xs font-semibold mb-3">

                  Get in Touch

                </p>

                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">

                  Send Us a Message

                </h2>

                <p className="text-muted text-sm leading-relaxed mb-8">

                  Complete the form below to demonstrate
                  submitting an inquiry. Fields marked
                  with * are required.

                </p>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >

                  <fieldset
                    disabled={isSubmitting}
                    className="min-w-0 space-y-6"
                  >

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                      {/* Full Name */}

                      <div>

                        <label
                          htmlFor="contact-name"
                          className="block text-primary text-sm font-medium mb-2"
                        >
                          Full Name *
                        </label>

                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          maxLength={80}
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Your full name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={
                            errors.name
                              ? 'name-error'
                              : undefined
                          }
                          className={getInputClass('name')}
                        />

                        {renderError('name')}

                      </div>

                      {/* Email */}

                      <div>

                        <label
                          htmlFor="contact-email"
                          className="block text-primary text-sm font-medium mb-2"
                        >
                          Email Address *
                        </label>

                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          maxLength={254}
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="you@example.com"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email
                              ? 'email-error'
                              : undefined
                          }
                          className={getInputClass('email')}
                        />

                        {renderError('email')}

                      </div>

                      {/* Phone Number */}

                      <div>

                        <label
                          htmlFor="contact-phone"
                          className="block text-primary text-sm font-medium mb-2"
                        >
                          Phone Number
                        </label>

                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          maxLength={25}
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+94 XX XXX XXXX"
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={
                            errors.phone
                              ? 'phone-error'
                              : undefined
                          }
                          className={getInputClass('phone')}
                        />

                        {renderError('phone')}

                      </div>

                      {/* Inquiry Category */}

                      <div>

                        <label
                          htmlFor="contact-category"
                          className="block text-primary text-sm font-medium mb-2"
                        >
                          Inquiry Category *
                        </label>

                        <select
                          id="contact-category"
                          name="category"
                          required
                          value={formData.category}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={Boolean(errors.category)}
                          aria-describedby={
                            errors.category
                              ? 'category-error'
                              : undefined
                          }
                          className={getInputClass('category')}
                        >

                          <option value="">
                            Select a category
                          </option>

                          {inquiryCategories.map(
                            (category) => (

                              <option
                                key={category.value}
                                value={category.value}
                              >
                                {category.label}
                              </option>

                            )
                          )}

                        </select>

                        {renderError('category')}

                      </div>

                    </div>

                    {/* Subject */}

                    <div>

                      <label
                        htmlFor="contact-subject"
                        className="block text-primary text-sm font-medium mb-2"
                      >
                        Subject *
                      </label>

                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        maxLength={120}
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="What is your inquiry about?"
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={
                          errors.subject
                            ? 'subject-error'
                            : undefined
                        }
                        className={getInputClass('subject')}
                      />

                      {renderError('subject')}

                    </div>

                    {/* Message */}

                    <div>

                      <label
                        htmlFor="contact-message"
                        className="block text-primary text-sm font-medium mb-2"
                      >
                        Your Message *
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        required
                        maxLength={1000}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell us how we can help you..."
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message
                            ? 'message-count message-error'
                            : 'message-count'
                        }
                        className={`${getInputClass('message')} resize-y min-h-36`}
                      />

                      <div
                        id="message-count"
                        className="flex flex-wrap justify-between gap-2 text-muted text-xs mt-2"
                      >

                        <span>
                          Minimum 20 characters
                        </span>

                        <span>
                          {formData.message.length}/1000
                        </span>

                      </div>

                      {renderError('message')}

                    </div>

                    {/* Acknowledgement */}

                    <div>

                      <label className="flex items-start gap-3 cursor-pointer">

                        <input
                          name="consent"
                          type="checkbox"
                          required
                          checked={formData.consent}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.consent)}
                          aria-describedby={
                            errors.consent
                              ? 'consent-error'
                              : undefined
                          }
                          className="w-4 h-4 mt-0.5 shrink-0 accent-primary"
                        />

                        <span className="text-muted text-sm leading-relaxed">

                          I understand that this is a
                          demonstration contact form
                          and does not send real emails.

                        </span>

                      </label>

                      {renderError('consent')}

                    </div>

                  </fieldset>

                  {submissionError && (

                    <div
                      role="alert"
                      className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm"
                    >
                      {submissionError}
                    </div>

                  )}

                  {Object.values(errors).some(Boolean) && (

                    <p
                      role="alert"
                      className="text-red-600 text-sm"
                    >
                      Please correct the highlighted fields.
                    </p>

                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white rounded-xl px-6 py-4 font-medium hover:bg-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >

                    {isSubmitting ? (

                      <>

                        <LoaderCircle
                          size={20}
                          className="animate-spin"
                        />

                        Submitting...

                      </>

                    ) : (

                      <>

                        Send Message

                        <Send size={19} />

                      </>

                    )}

                  </button>

                </form>

              </>

            )}

          </div>

          {/* Contact Sidebar */}

          <aside className="space-y-6">

            <div className="bg-primary text-white rounded-3xl p-7 md:p-8">

              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">

                <Compass
                  size={29}
                  className="text-accent"
                />

              </div>

              <h3 className="font-heading text-2xl font-semibold mb-4">

                Need Travel Inspiration?

              </h3>

              <p className="text-white/75 text-sm leading-relaxed mb-6">

                Discover breathtaking destinations,
                exciting experiences and useful travel
                information before planning your journey.

              </p>

              <div className="space-y-4">

                {[
                  {
                    title: 'Explore Destinations',
                    link: '/destinations',
                  },
                  {
                    title: 'Discover Experiences',
                    link: '/experiences',
                  },
                  {
                    title: 'Browse Tour Packages',
                    link: '/tour-packages',
                  },
                  {
                    title: 'Read Travel Guide',
                    link: '/travel-guide',
                  },
                ].map((item) => (

                  <Link
                    key={item.link}
                    to={item.link}
                    className="flex items-center justify-between gap-3 border-b border-white/15 pb-3 text-sm hover:text-accent transition-colors"
                  >

                    {item.title}

                    <ArrowRight
                      size={17}
                      className="shrink-0"
                    />

                  </Link>

                ))}

              </div>

            </div>

            <div className="bg-cream border border-primary/10 rounded-3xl p-7">

              <ShieldCheck
                size={32}
                className="text-secondary mb-4"
              />

              <h3 className="font-heading text-xl font-semibold text-primary mb-3">

                Your Information Matters

              </h3>

              <p className="text-muted text-sm leading-relaxed">

                This demonstration validates your
                information locally. It does not send
                your contact details to a server or
                permanently save your message.

              </p>

              <p className="text-muted text-xs leading-relaxed mt-4">

                Please avoid entering sensitive personal
                or financial information.

              </p>

            </div>

          </aside>

        </div>

      </div>

    </section>
  )
}

export default ContactForm
