
export const plannerActivities = {
  ella: [
    { name: 'Visit Nine Arch Bridge', interest: 'nature' },
    { name: 'Hike Little Adam’s Peak', interest: 'adventure' },
    { name: 'Explore Ravana Falls', interest: 'nature' },
    { name: 'Hike Ella Rock', interest: 'adventure' },
    { name: 'Enjoy local Sri Lankan cuisine', interest: 'food' },
    { name: 'Explore a tea plantation', interest: 'nature' },
  ],

  sigiriya: [
    { name: 'Explore Sigiriya Rock Fortress', interest: 'culture' },
    { name: 'Discover the ancient royal gardens', interest: 'culture' },
    { name: 'Hike Pidurangala Rock', interest: 'adventure' },
    { name: 'Enjoy a village experience', interest: 'culture' },
    { name: 'Taste traditional village food', interest: 'food' },
  ],

  mirissa: [
    { name: 'Relax at Mirissa Beach', interest: 'beach' },
    { name: 'Visit Coconut Tree Hill', interest: 'nature' },
    { name: 'Try surfing in suitable conditions', interest: 'adventure' },
    { name: 'Enjoy a coastal sunset', interest: 'beach' },
    { name: 'Explore local seafood cuisine', interest: 'food' },
  ],

  kandy: [
    { name: 'Visit the Temple of the Tooth', interest: 'culture' },
    { name: 'Walk around Kandy Lake', interest: 'nature' },
    { name: 'Explore Peradeniya Botanical Gardens', interest: 'nature' },
    { name: 'Discover traditional cultural performances', interest: 'culture' },
    { name: 'Explore local markets and food', interest: 'food' },
  ],

  galle: [
    { name: 'Explore historic Galle Fort', interest: 'culture' },
    { name: 'Visit Galle Lighthouse', interest: 'culture' },
    { name: 'Walk through historic streets', interest: 'culture' },
    { name: 'Relax along the nearby coastline', interest: 'beach' },
    { name: 'Discover local cafes and cuisine', interest: 'food' },
  ],

  'nuwara-eliya': [
    { name: 'Explore a tea plantation', interest: 'nature' },
    { name: 'Visit Gregory Lake', interest: 'nature' },
    { name: 'Walk through Victoria Park', interest: 'nature' },
    { name: 'Discover colonial architecture', interest: 'culture' },
    { name: 'Enjoy a Ceylon tea tasting', interest: 'food' },
    { name: 'Explore nearby highland trails', interest: 'adventure' },
  ],

  yala: [
    { name: 'Enjoy a guided wildlife safari', interest: 'wildlife' },
    { name: 'Explore birdwatching opportunities', interest: 'wildlife' },
    { name: 'Enjoy wildlife photography', interest: 'wildlife' },
    { name: 'Discover the natural landscapes', interest: 'nature' },
  ],
}

export const travelRates = {
  budget: {
    accommodation: 25,
    food: 15,
    transport: 15,
    activities: 10,
  },

  standard: {
    accommodation: 60,
    food: 25,
    transport: 35,
    activities: 25,
  },

  luxury: {
    accommodation: 150,
    food: 60,
    transport: 80,
    activities: 50,
  },
}

export const defaultPreferences = {
  name: 'My Sri Lankan Adventure',
  date: '',
  duration: 5,
  travelers: 2,
  style: 'standard',
  budget: '',
}
