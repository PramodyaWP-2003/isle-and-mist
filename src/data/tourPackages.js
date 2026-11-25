
import culturalImage from '../assets/images/package-cultural.webp'
import highlandsImage from '../assets/images/package-highlands.jfif'
import coastalImage from '../assets/images/package-coastal.jfif'
import wildlifeImage from '../assets/images/package-wildlife.jfif'

const tourPackages = [
  {
    id: 'cultural-triangle',
    title: 'Cultural Triangle Explorer',
    category: 'Culture & Heritage',
    duration: '5 Days / 4 Nights',
    price: 350,
    image: culturalImage,
    locations: ['Sigiriya', 'Dambulla', 'Kandy'],
    description:
      'Discover ancient kingdoms, sacred temples and Sri Lanka’s rich cultural heritage.',
    highlights: [
      'Sigiriya Rock Fortress',
      'Dambulla Cave Temple',
      'Temple of the Tooth',
    ],
    featured: true,
  },
  {
    id: 'misty-highlands',
    title: 'Misty Highlands Escape',
    category: 'Nature & Adventure',
    duration: '4 Days / 3 Nights',
    price: 280,
    image: highlandsImage,
    locations: ['Ella', 'Nuwara Eliya'],
    description:
      'Explore misty mountains, scenic train journeys and beautiful tea plantations.',
    highlights: [
      'Nine Arch Bridge',
      'Little Adam’s Peak',
      'Tea plantation visit',
    ],
    featured: true,
  },
  {
    id: 'southern-coast',
    title: 'Southern Coastal Retreat',
    category: 'Beach & Relaxation',
    duration: '5 Days / 4 Nights',
    price: 320,
    image: coastalImage,
    locations: ['Galle', 'Mirissa', 'Bentota'],
    description:
      'Relax on tropical beaches and explore charming coastal towns.',
    highlights: [
      'Galle Dutch Fort',
      'Mirissa Beach',
      'Bentota River',
    ],
    featured: true,
  },
  {
    id: 'wildlife-adventure',
    title: 'Wildlife Adventure',
    category: 'Wildlife & Safari',
    duration: '3 Days / 2 Nights',
    price: 250,
    image: wildlifeImage,
    locations: ['Yala', 'Udawalawe'],
    description:
      'Discover incredible wildlife through exciting national park safaris.',
    highlights: [
      'Yala National Park',
      'Udawalawe Safari',
      'Wildlife photography',
    ],
    featured: true,
  },
]

export default tourPackages
