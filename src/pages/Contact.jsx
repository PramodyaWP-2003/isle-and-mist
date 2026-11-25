
import ContactHero from '../components/contact/ContactHero'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import ContactLocation from '../components/contact/ContactLocation'
import ContactFAQ from '../components/contact/ContactFAQ'
import ContactCTA from '../components/contact/ContactCTA'

function Contact() {
  return (
    <>

      {/* 01 - Contact Hero */}
      <ContactHero />

      {/* 02 - Contact Information */}
      <ContactInfo />

      {/* 03 - Contact Form */}
      <ContactForm />

      {/* 04 - Location Section */}
      <ContactLocation />

      {/* 05 - Frequently Asked Questions */}
      <ContactFAQ />

      {/* 06 - Call to Action */}
      <ContactCTA />

    </>
  )
}

export default Contact
