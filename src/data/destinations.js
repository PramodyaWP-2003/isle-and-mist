
import ellaImage from '../assets/images/Ella.jpg'
import sigiriyaImage from '../assets/images/sigiriya.jpeg'
import mirissaImage from '../assets/images/mirissa.jpg'
import kandyImage from '../assets/images/kandy.jpg'
import galleImage from '../assets/images/galle.jfif'
import nuwaraEliyaImage from '../assets/images/nuwara-eliya.jpg'
import yalaImage from '../assets/images/yala.jpg'


const destinations = [
  {
    id: 'ella',
    name: 'Ella',
    location: 'Badulla',
    category: 'Nature & Adventure',
    experiences: ['nature', 'adventure'],
    image: ellaImage,
    rating: 4.9,
    description:
      'Explore misty mountains, lush tea plantations and breathtaking scenic trails.',
    featured: true,
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    location: 'Matale',
    category: 'Culture & Heritage',
    experiences: ['culture', 'adventure'],
    image: sigiriyaImage,
    rating: 4.9,
    description:
      'Discover the ancient rock fortress surrounded by tropical forests.',
    featured: true,
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    location: 'Matara',
    category: 'Beach & Relaxation',
    experiences: ['beach', 'nature'],
    image: mirissaImage,
    rating: 4.8,
    description:
      'Relax on golden beaches and enjoy unforgettable tropical sunsets.',
    featured: true,
  },
  {
    id: 'kandy',
    name: 'Kandy',
    location: 'Kandy',
    category: 'Culture & Heritage',
    experiences: ['culture', 'nature'],
    image: kandyImage,
    rating: 4.8,
    description:
      'Experience sacred temples, traditional culture and peaceful lakes.',
    featured: true,
  },
  {
    id: 'galle',
    name: 'Galle',
    location: 'Galle',
    category: 'History & Coast',
    experiences: ['culture', 'beach'],
    image: galleImage,
    rating: 4.8,
    description:
      'Walk through historic streets and discover the beautiful coastal fort.',
    featured: false,
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    location: 'Nuwara Eliya',
    category: 'Nature & Hill Country',
    experiences: ['nature', 'adventure'],
    image: nuwaraEliyaImage,
    rating: 4.7,
    description:
      'Enjoy cool mountain air, beautiful gardens and endless tea estates.',
    featured: false,
  },
  {
    id: 'yala',
    name: 'Yala',
    location: 'Southern & Uva Provinces',
    category: 'Wildlife & Safari',
    experiences: ['wildlife', 'nature', 'adventure'],
    image: yalaImage,
    rating: 4.9,
    description:
      'Experience exciting wildlife safaris and discover Sri Lanka’s natural beauty.',
    featured: false,
  },
]

export default destinations
