
import destinations from './destinations'

const imageFiles = import.meta.glob(
  '../assets/images/about-*.{jpg,jpeg,jfif,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

function findImage(name, fallbackId) {
  const extensions = [
    'jpg',
    'jpeg',
    'jfif',
    'png',
    'webp',
  ]

  for (const extension of extensions) {
    const path = `../assets/images/${name}.${extension}`

    if (imageFiles[path]) {
      return imageFiles[path]
    }
  }

  return (
    destinations.find(
      (item) => item.id === fallbackId
    )?.image || destinations[0]?.image
  )
}

export const aboutImages = {
  hero: findImage('about-hero', 'ella'),
  story: findImage('about-story', 'nuwara-eliya'),
  sustainability: findImage(
    'about-sustainability',
    'yala'
  ),
}

export const coreValues = [
  {
    id: 'authenticity',
    title: 'Authenticity',
    description:
      'Celebrate the genuine beauty, traditions and culture of Sri Lanka.',
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description:
      'Encourage responsible travel that respects nature and protects the environment.',
  },
  {
    id: 'exploration',
    title: 'Exploration',
    description:
      'Inspire curiosity and encourage travelers to discover new places and experiences.',
  },
  {
    id: 'community',
    title: 'Community',
    description:
      'Promote respect for local communities, traditions and livelihoods.',
  },
  {
    id: 'trust',
    title: 'Trust',
    description:
      'Aim to provide clear, useful and transparent travel information.',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'Use modern technology to make travel discovery and planning easier.',
  },
]

export const platformFeatures = [
  {
    id: 'destinations',
    title: 'Discover Destinations',
    description:
      'Explore beautiful destinations, popular attractions and helpful travel tips.',
    link: '/destinations',
  },
  {
    id: 'experiences',
    title: 'Unique Experiences',
    description:
      'Discover wildlife, adventure, culture, beaches, nature and local cuisine.',
    link: '/experiences',
  },
  {
    id: 'packages',
    title: 'Curated Tour Packages',
    description:
      'Explore sample travel packages and carefully organized itineraries.',
    link: '/tour-packages',
  },
  {
    id: 'planner',
    title: 'Personalized Trip Planning',
    description:
      'Create your own itinerary based on destinations, interests and budget.',
    link: '/trip-planner',
  },
  {
    id: 'guide',
    title: 'Helpful Travel Guides',
    description:
      'Prepare for your journey with essential information and practical travel advice.',
    link: '/travel-guide',
  },
  {
    id: 'responsive',
    title: 'Seamless Digital Experience',
    description:
      'Explore the platform using your mobile phone, tablet or desktop.',
    link: '/destinations',
  },
]

export const sustainabilityValues = [
  {
    id: 'nature',
    title: 'Protect Natural Environments',
    description:
      'Reduce waste, avoid littering and respect natural landscapes.',
  },
  {
    id: 'wildlife',
    title: 'Respect Wildlife',
    description:
      'Observe animals responsibly and avoid disturbing their natural habitats.',
  },
  {
    id: 'local',
    title: 'Support Local Communities',
    description:
      'Choose responsible local businesses, products and travel services.',
  },
  {
    id: 'culture',
    title: 'Preserve Cultural Heritage',
    description:
      'Respect religious sites, historical landmarks and local traditions.',
  },
]

export const teamMembers = [
  {
    id: 'development',
    name: 'Project Development',
    role: 'Frontend Engineering',
    description:
      'Developing a responsive, interactive and user-friendly travel platform.',
    image: null,
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    role: 'Digital Experience Design',
    description:
      'Creating an attractive visual identity and an intuitive user experience.',
    image: null,
  },
  {
    id: 'research',
    name: 'Travel Research',
    role: 'Content and Destination Research',
    description:
      'Organizing destination information, travel experiences and useful guidance.',
    image: null,
  },
]
