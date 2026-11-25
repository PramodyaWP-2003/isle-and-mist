
import {
  inquiryCategories,
} from '../data/contactData'

export function validateContactForm(formData) {
  const errors = {}

  const name = String(
    formData.name || ''
  ).trim()

  const email = String(
    formData.email || ''
  ).trim()

  const phone = String(
    formData.phone || ''
  ).trim()

  const subject = String(
    formData.subject || ''
  ).trim()

  const message = String(
    formData.message || ''
  ).trim()

  // Full Name Validation

  if (!name) {
    errors.name = 'Please enter your full name.'

  } else if (
    name.length < 2 ||
    name.length > 80
  ) {
    errors.name =
      'Your name must contain 2 to 80 characters.'
  }

  // Email Validation

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!email) {
    errors.email =
      'Please enter your email address.'

  } else if (
    !emailPattern.test(email) ||
    email.length > 254
  ) {
    errors.email =
      'Please enter a valid email address.'
  }

  // Optional Phone Number Validation

  if (phone) {
    const phonePattern =
      /^\+?[\d\s()-]+$/

    const digitCount =
      phone.replace(/\D/g, '').length

    if (
      !phonePattern.test(phone) ||
      digitCount < 7 ||
      digitCount > 15
    ) {
      errors.phone =
        'Please enter a valid phone number.'
    }
  }

  // Inquiry Category Validation

  const validCategory =
    inquiryCategories.some(
      (category) =>
        category.value === formData.category
    )

  if (!validCategory) {
    errors.category =
      'Please select an inquiry category.'
  }

  // Subject Validation

  if (!subject) {
    errors.subject =
      'Please enter a subject.'

  } else if (
    subject.length < 5 ||
    subject.length > 120
  ) {
    errors.subject =
      'Subject must contain 5 to 120 characters.'
  }

  // Message Validation

  if (!message) {
    errors.message =
      'Please enter your message.'

  } else if (
    message.length < 20 ||
    message.length > 1000
  ) {
    errors.message =
      'Message must contain 20 to 1000 characters.'
  }

  // Acknowledgement Validation

  if (formData.consent !== true) {
    errors.consent =
      'Please acknowledge the demonstration notice.'
  }

  return errors
}
