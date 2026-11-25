
import destinations from './destinations'

const imageFiles = import.meta.glob(
  '../assets/images/contact-hero.*',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

const extensions = [
  'jpg',
  'jpeg',
  'jfif',
  'png',
  'webp',
]

const heroImage = extensions
  .map(
    (extension) =>
      imageFiles[
        `../assets/images/contact-hero.${extension}`
      ]
  )
  .find(Boolean)

export const contactHeroImage =
  heroImage ||
  destinations.find(
    (item) => item.id === 'mirissa'
  )?.image ||
  destinations[0]?.image

export const contactInformation = [
  {
    id: 'email',
    title: 'Email Inquiries',
    value: 'General Inquiries',
    description:
      'Use our contact form to demonstrate sending questions and feedback.',
  },
  {
    id: 'support',
    title: 'Travel Support',
    value: 'Planning Assistance',
    description:
      'Explore destinations, travel experiences and personalized itineraries.',
  },
  {
    id: 'location',
    title: 'Our Location',
    value: 'Sri Lanka',
    description:
      'A digital travel platform inspired by the beauty of the island.',
  },
  {
    id: 'availability',
    title: 'Online Access',
    value: 'Explore Anytime',
    description:
      'Discover travel information and planning tools at your convenience.',
  },
]

export const inquiryCategories = [
  {
    value: 'general',
    label: 'General Inquiry',
  },
  {
    value: 'destinations',
    label: 'Destination Information',
  },
  {
    value: 'tour-packages',
    label: 'Tour Packages',
  },
  {
    value: 'trip-planning',
    label: 'Trip Planning Assistance',
  },
  {
    value: 'experiences',
    label: 'Travel Experiences',
  },
  {
    value: 'feedback',
    label: 'Feedback and Suggestions',
  },
  {
    value: 'technical',
    label: 'Technical Support',
  },
  {
    value: 'other',
    label: 'Other',
  },
]

export const contactFAQs = [
  {
    id: 1,
    question: 'What is Isle & Mist?',
    answer:
      'Isle & Mist is a university web development project designed to help travelers discover Sri Lanka, explore experiences and create personalized travel plans.',
    link: '/about',
    linkText: 'Learn About Us',
  },
  {
    id: 2,
    question: 'How can I plan my trip to Sri Lanka?',
    answer:
      'Use our interactive Trip Planner to select destinations, travel interests, dates, travelers and budget to generate a suggested itinerary.',
    link: '/trip-planner',
    linkText: 'Open Trip Planner',
  },
  {
    id: 3,
    question: 'Can I book a tour package directly?',
    answer:
      'You can explore sample tour packages and use them to create travel plans. Actual reservations and online payments are not currently supported.',
    link: '/tour-packages',
    linkText: 'Explore Tour Packages',
  },
  {
    id: 4,
    question: 'Where can I find useful travel information?',
    answer:
      'Our Travel Guide provides practical information about transportation, travel preparation, cultural etiquette and responsible tourism.',
    link: '/travel-guide',
    linkText: 'Read Travel Guide',
  },
  {
    id: 5,
    question: 'Can I save my travel itinerary?',
    answer:
      'Yes. The Trip Planner allows you to save your generated travel plans locally in your browser.',
    link: '/trip-planner',
    linkText: 'Create a Travel Plan',
  },
  {
    id: 6,
    question: 'Does the contact form send real emails?',
    answer:
      'Not currently. The contact form demonstrates input validation and submission feedback. A backend or email service is required to deliver real messages.',
    link: null,
    linkText: null,
  },
]
