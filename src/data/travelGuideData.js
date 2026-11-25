
export const essentialInformation = [
  {
    id: 'currency',
    title: 'Currency',
    value: 'Sri Lankan Rupee (LKR)',
    description: 'Carry some local cash, especially when visiting rural areas.',
  },
  {
    id: 'language',
    title: 'Languages',
    value: 'Sinhala and Tamil',
    description: 'English is also commonly used in tourist areas.',
  },
  {
    id: 'time',
    title: 'Time Zone',
    value: 'UTC +5:30',
    description: 'Sri Lanka follows the same time zone throughout the year.',
  },
  {
    id: 'climate',
    title: 'Climate',
    value: 'Tropical Climate',
    description: 'Coastal areas are generally warm, while the central highlands are cooler.',
  },
  {
    id: 'electricity',
    title: 'Electricity',
    value: '230V / 50Hz',
    description: 'Type G and Type D sockets may be encountered. Carry a suitable adapter.',
  },
  {
    id: 'visa',
    title: 'Entry Requirements',
    value: 'Check Before Traveling',
    description: 'Check official visa and entry requirements for your nationality.',
  },
  {
    id: 'driving',
    title: 'Driving',
    value: 'Left-Hand Traffic',
    description: 'Vehicles travel on the left side of the road.',
  },
  {
    id: 'emergency',
    title: 'Emergency Contacts',
    value: '119 / 1990',
    description: '119 for police emergencies and 1990 for Suwa Seriya ambulance services.',
  },
]

export const travelSeasons = [
  {
    id: 'south-west',
    title: 'South and West Coast',
    months: 'December – April',
    description: 'Generally favorable months for beach holidays and coastal exploration.',
    destinations: ['Mirissa', 'Galle', 'Bentota', 'Negombo'],
    activities: ['Beach holidays', 'Surfing', 'Coastal sightseeing'],
    destinationId: 'mirissa',
  },
  {
    id: 'east',
    title: 'East Coast',
    months: 'May – September',
    description: 'Often a favorable period for exploring the eastern coastline.',
    destinations: ['Trincomalee', 'Pasikuda', 'Arugam Bay'],
    activities: ['Beach relaxation', 'Surfing', 'Water activities'],
    destinationId: '',
  },
  {
    id: 'highlands',
    title: 'Central Highlands',
    months: 'January – April',
    description: 'Often suitable for exploring tea plantations, mountain landscapes and hiking trails.',
    destinations: ['Ella', 'Nuwara Eliya', 'Kandy'],
    activities: ['Hiking', 'Tea estate visits', 'Scenic train journeys'],
    destinationId: 'ella',
  },
  {
    id: 'cultural',
    title: 'Cultural Triangle',
    months: 'January – April',
    description: 'A popular period for exploring historical landmarks and cultural heritage.',
    destinations: ['Sigiriya', 'Dambulla', 'Anuradhapura', 'Polonnaruwa'],
    activities: ['Historical exploration', 'Photography', 'Cultural tours'],
    destinationId: 'sigiriya',
  },
]

export const transportationOptions = [
  {
    id: 'train',
    title: 'Train',
    category: 'Scenic Travel',
    description: 'Enjoy beautiful landscapes while traveling between major towns and hill country destinations.',
    advantages: [
      'Scenic mountain journeys',
      'Affordable travel options',
      'Authentic local experience',
    ],
    tip: 'Reserve seats in advance when available and stay away from open doors.',
  },
  {
    id: 'bus',
    title: 'Public Bus',
    category: 'Budget Friendly',
    description: 'Public buses connect many cities, towns and villages across Sri Lanka.',
    advantages: [
      'Generally affordable',
      'Extensive transport network',
      'Local travel experience',
    ],
    tip: 'Allow extra travel time and confirm the correct route before boarding.',
  },
  {
    id: 'tuktuk',
    title: 'Tuk-Tuk',
    category: 'Short Journeys',
    description: 'A convenient way to travel short distances within towns and tourist areas.',
    advantages: [
      'Convenient for short trips',
      'Flexible pickup locations',
      'Easy local transportation',
    ],
    tip: 'Use a reliable service or agree on the fare before starting your journey.',
  },
  {
    id: 'car',
    title: 'Private Car',
    category: 'Comfortable Travel',
    description: 'Travel comfortably with greater flexibility when visiting multiple destinations.',
    advantages: [
      'Flexible itinerary',
      'Convenient for families',
      'Door-to-door transportation',
    ],
    tip: 'Choose a reputable driver or transport provider and confirm costs beforehand.',
  },
]

export const foodItems = [
  {
    id: 'rice-curry',
    name: 'Rice and Curry',
    category: 'Traditional Meal',
    description: 'Rice served with a variety of vegetable, fish or meat curries, sambols and other side dishes.',
  },
  {
    id: 'hoppers',
    name: 'Hoppers',
    category: 'Local Favorite',
    description: 'Bowl-shaped pancakes made from fermented rice flour and coconut milk, sometimes served with an egg.',
  },
  {
    id: 'kottu',
    name: 'Kottu Roti',
    category: 'Street Food',
    description: 'Chopped flatbread stir-fried with vegetables, spices, eggs or meat.',
  },
  {
    id: 'string-hoppers',
    name: 'String Hoppers',
    category: 'Traditional Breakfast',
    description: 'Steamed rice flour noodles commonly served with coconut sambol and curry.',
  },
  {
    id: 'watalappan',
    name: 'Watalappan',
    category: 'Traditional Dessert',
    description: 'A rich coconut milk custard flavored with jaggery, eggs and aromatic spices.',
  },
  {
    id: 'ceylon-tea',
    name: 'Ceylon Tea',
    category: 'Local Beverage',
    description: 'Sri Lanka’s famous tea, enjoyed in many varieties across the island.',
  },
]

export const culturalTips = [
  {
    id: 'dress',
    title: 'Dress Respectfully',
    description: 'Cover your shoulders and knees when visiting temples and other religious places.',
  },
  {
    id: 'temple',
    title: 'Respect Religious Sites',
    description: 'Remove shoes and hats where required and follow instructions at sacred sites.',
  },
  {
    id: 'photo',
    title: 'Ask Before Taking Photos',
    description: 'Request permission before photographing people and respect photography restrictions.',
  },
  {
    id: 'greeting',
    title: 'Learn Local Greetings',
    description: 'Ayubowan is a traditional Sinhala greeting, while Vanakkam is a Tamil greeting.',
  },
  {
    id: 'environment',
    title: 'Protect the Environment',
    description: 'Avoid littering, respect wildlife and help preserve natural and historical attractions.',
  },
  {
    id: 'community',
    title: 'Support Local Communities',
    description: 'Consider buying local products and using responsible local travel services.',
  },
]

export const safetyTips = [
  {
    id: 'water',
    title: 'Stay Hydrated',
    description: 'Carry drinking water and choose safe bottled or properly treated water.',
  },
  {
    id: 'sun',
    title: 'Protect Yourself From the Sun',
    description: 'Use sunscreen, wear a hat and take breaks in shaded areas.',
  },
  {
    id: 'belongings',
    title: 'Keep Belongings Secure',
    description: 'Keep valuables secure and remain aware of your surroundings in crowded areas.',
  },
  {
    id: 'wildlife',
    title: 'Respect Wildlife',
    description: 'Keep a safe distance from animals and follow instructions from authorized guides.',
  },
  {
    id: 'weather',
    title: 'Check Weather Conditions',
    description: 'Check forecasts and local advice before hiking, swimming or joining outdoor activities.',
  },
  {
    id: 'insurance',
    title: 'Prepare for Emergencies',
    description: 'Consider suitable travel insurance and keep important contact details accessible.',
  },
]

export const packingItems = [
  { id: 'passport', label: 'Passport and travel documents' },
  { id: 'insurance', label: 'Travel insurance details' },
  { id: 'money', label: 'Local currency and payment cards' },
  { id: 'clothing', label: 'Lightweight clothing' },
  { id: 'temple-clothes', label: 'Modest clothing for temples' },
  { id: 'jacket', label: 'Light jacket for the highlands' },
  { id: 'shoes', label: 'Comfortable walking shoes' },
  { id: 'sunscreen', label: 'Sunscreen and sunglasses' },
  { id: 'repellent', label: 'Insect repellent' },
  { id: 'medicine', label: 'Personal medication and first-aid supplies' },
  { id: 'adapter', label: 'Travel power adapter' },
  { id: 'bottle', label: 'Reusable water bottle' },
  { id: 'raincoat', label: 'Umbrella or lightweight raincoat' },
  { id: 'charger', label: 'Phone charger and power bank' },
]

export const travelFAQs = [
  {
    id: 'visa',
    question: 'Do I need a visa to visit Sri Lanka?',
    answer: 'Entry requirements depend on your nationality and travel purpose. Check the official Department of Immigration and Emigration website before traveling.',
    link: 'https://www.immigration.gov.lk/',
    linkLabel: 'Official immigration website',
  },
  {
    id: 'season',
    question: 'What is the best time to visit Sri Lanka?',
    answer: 'It depends on the region. December to April is generally favorable for the south and west coasts, while May to September is often favorable for the east coast.',
  },
  {
    id: 'currency',
    question: 'What currency is used in Sri Lanka?',
    answer: 'The official currency is the Sri Lankan Rupee (LKR). Cards are accepted at many established businesses, but cash is useful in smaller shops and rural areas.',
  },
  {
    id: 'language',
    question: 'Can I travel using English?',
    answer: 'English is commonly used in many hotels, tourist attractions and travel services. Sinhala and Tamil are the official languages.',
  },
  {
    id: 'transport',
    question: 'How can I travel around Sri Lanka?',
    answer: 'You can travel by train, public bus, tuk-tuk or private car. Choose transportation according to your budget, destination and comfort preferences.',
  },
  {
    id: 'water',
    question: 'Can I drink tap water?',
    answer: 'Visitors should generally choose safe bottled or properly treated drinking water unless the local supply has been confirmed safe.',
  },
  {
    id: 'food',
    question: 'Is Sri Lankan food spicy?',
    answer: 'Many Sri Lankan dishes contain spices and chili. However, milder dishes are available, and you can request less spicy food when ordering.',
  },
  {
    id: 'clothing',
    question: 'What should I wear when visiting temples?',
    answer: 'Wear modest clothing covering your shoulders and knees. Remove shoes and hats where required and follow the rules of each religious site.',
  },
  {
    id: 'duration',
    question: 'How many days should I spend in Sri Lanka?',
    answer: 'A trip of 7 to 14 days can provide time to explore several regions. The ideal duration depends on your interests, budget and preferred travel pace.',
  },
  {
    id: 'planner',
    question: 'Can I create my own travel itinerary?',
    answer: 'Yes. Use the Isle & Mist Trip Planner to select destinations, choose interests, estimate costs and save a personalized travel itinerary.',
    link: '/trip-planner',
    linkLabel: 'Open Trip Planner',
  },
]
