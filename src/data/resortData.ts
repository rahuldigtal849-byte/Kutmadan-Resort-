import { RoomCategory, TouristAttraction, ActivityExperience } from '../types';

export const RESORT_INFO = {
  name: 'Kutmadan Resort Cherrapunji',
  legalName: 'Kutmadan Resort',
  tagline: 'Discover the Natural Beauty of Sohra, Meghalaya',
  address: 'MDR 27, Sohra, Meghalaya 793108, India',
  pinCode: '793108',
  locality: 'Sohra (Cherrapunji)',
  state: 'Meghalaya',
  country: 'India',
  officialWebsite: 'https://kutmadanresortcherrapunji.in',
  officialWhatsAppNumber: '+916207799112',
  whatsappDisplay: '+91 6207799112',
  whatsappBookingUrl: 'https://wa.me/916207799112',
  callingNumbers: [
    { display: '+91 9762896575', raw: '+919762896575' },
    { display: '+91 87309 45471', raw: '+918730945471' }
  ],
  googleMapsLink: 'https://share.google/dVzNzlP7MLRVg6S2V',
  googlePhotosLink: 'https://share.google/SvYhe0al2V3WtpIwl',
  referenceWebsite: 'https://room-category-price-list.lovable.app/',
  checkInTime: '02:00 PM',
  checkOutTime: '11:00 AM'
};

/**
 * EXACT 6 ROOM CATEGORIES AS PER THE OFFICIAL REFERENCE WEBSITE:
 * https://room-category-price-list.lovable.app/
 * No extra room categories. Verified prices and amenities.
 */
export const OFFICIAL_ROOMS: RoomCategory[] = [
  {
    id: 'non-ac-room',
    name: 'Non-AC Room',
    occupancy: '2 Adults',
    price: '₹5,000',
    priceSubtext: '/ night',
    images: [
      '/images/rooms/nonac-1.jpg',
      '/images/rooms/nonac-2.jpg',
      '/images/rooms/nonac-3.jpg'
    ],
    amenities: [
      'Breakfast',
      'Free Wi-Fi',
      'LED / Smart TV',
      'Attached Bathroom',
      '2 Adults',
      'Ceiling Fan'
    ],
    description: 'A cozy, clean and comfortable room equipped with classic wooden furnishings, refreshing mountain air, ensuite modern bathroom with hot water geyser, high-speed Wi-Fi and daily breakfast.',
    bedType: '1 Queen Bed',
    view: 'Garden & Courtyard',
    mealsIncluded: 'Complimentary Morning Breakfast',
    features: ['Attached Western Bathroom', '24/7 Hot Running Water', 'Ceiling Fan', 'Daily Housekeeping', 'Electric Kettle with Tea & Coffee Amenities']
  },
  {
    id: 'ac-deluxe-room',
    name: 'AC Deluxe Room',
    occupancy: '2 Pax',
    price: '₹7,500 + Tax',
    priceSubtext: '/ night',
    images: [
      '/images/rooms/deluxe-1.jpg',
      '/images/rooms/deluxe-2.jpg',
      '/images/rooms/deluxe-3.jpg'
    ],
    amenities: [
      'Breakfast',
      'Window View',
      'Free Wi-Fi',
      'LED / Smart TV',
      'Attached Bathroom',
      'Air Conditioning'
    ],
    description: 'Chic air-conditioned comfort with generous picture windows capturing the scenic surroundings of Sohra. Features a plush double bed, crisp linen, LED TV, and modern bath fittings.',
    bedType: '1 King/Queen Bed',
    view: 'Window Scenic View',
    mealsIncluded: 'Complimentary Breakfast',
    features: ['Split Air Conditioner', 'Large Viewing Window', 'Ensuite Bathroom with Geyser', 'High-Speed Wi-Fi', 'Wardrobe & Luggage Rack']
  },
  {
    id: 'ac-double-room',
    name: 'AC Double Room',
    occupancy: '2–3 Pax',
    price: '₹8,500 + Tax',
    priceSubtext: '/ night',
    images: [
      '/images/rooms/double-1.jpg',
      '/images/rooms/double-2.jpg',
      '/images/rooms/double-3.jpg'
    ],
    amenities: [
      'Breakfast & Lunch',
      'Valley View',
      'Free Wi-Fi',
      'LED / Smart TV',
      'Attached Bathroom',
      'Air Conditioning'
    ],
    description: 'Perched to offer sweeping panoramic vistas of Sohra’s mist-laden valleys. Includes full climate control, two wholesome daily meals (Breakfast & Lunch), and premium hospitality.',
    bedType: '1 King Bed + Extra Mattress on Request',
    view: 'Panoramic Valley View',
    mealsIncluded: 'Breakfast & Lunch Included',
    features: ['Valley Facing Room', 'Split Air Conditioner', 'Breakfast & Lunch Included', 'Attached Luxury Bathroom', 'Work Desk & Seating Area']
  },
  {
    id: 'ac-family-room',
    name: 'AC Family Room',
    occupancy: '3 Pax',
    price: '₹10,000 + Tax',
    priceSubtext: '/ night',
    images: [
      '/images/rooms/family-1.jpg',
      '/images/rooms/family-2.jpg',
      '/images/rooms/family-3.jpg'
    ],
    amenities: [
      'Breakfast & Lunch',
      'Mountain View',
      'Free Wi-Fi',
      'LED / Smart TV',
      'Attached Bathroom',
      'Air Conditioning'
    ],
    description: 'Designed specifically for families and groups traveling together. Spaciously proportioned with sweeping mountain views, comfortable bedding, and inclusive breakfast and lunch.',
    bedType: 'Multiple Beds / Family Layout',
    view: 'Mountain & Cliff View',
    mealsIncluded: 'Breakfast & Lunch Included',
    features: ['Multi-bed Family Setup', 'Mountain View Windows', 'Climate Controlled AC', 'Spacious Sitting Area', 'Geyser & Bathroom Toiletries']
  },
  {
    id: 'ac-suites-room',
    name: 'AC Suites Room',
    occupancy: '2–3 Pax',
    price: '₹20,000',
    priceSubtext: '/ night',
    images: [
      '/images/rooms/suite-1.jpg',
      '/images/rooms/suite-2.jpg',
      '/images/rooms/suite-3.jpg'
    ],
    amenities: [
      'Private Cottage',
      'Balcony View',
      'Breakfast, Lunch & Dinner',
      'Free Wi-Fi',
      'LED / Smart TV',
      'Attached Bathroom'
    ],
    description: 'An exclusive standalone private stone cottage with a private balcony overlooking the pristine Cherrapunji landscape. Comes with full-board gourmet meals (Breakfast, Lunch & Dinner).',
    bedType: '1 Luxury King Bed',
    view: 'Private Balcony with Canyon View',
    mealsIncluded: 'All 3 Meals (Breakfast, Lunch & Dinner) Included',
    features: ['Standalone Private Cottage', 'Private Balcony Deck', 'Full Board: 3 Meals Included', 'Air Conditioned Living Space', 'Premium Tea Station & Mini Fridge']
  },
  {
    id: 'ac-suites-loft-room',
    name: 'AC Suites Loft Room',
    occupancy: 'Premium Suite',
    price: '₹25,000 + Tax',
    priceSubtext: '/ night',
    images: [
      '/images/rooms/loft-1.jpg',
      '/images/rooms/loft-2.jpg',
      '/images/rooms/loft-3.jpg',
      '/images/rooms/loft-4.jpg',
      '/images/rooms/loft-5.jpg'
    ],
    amenities: [
      'Breakfast, Lunch & Dinner',
      'Premium Private Cottage',
      'Private Swimming Pool',
      'Free Wi-Fi',
      'Bathtub',
      '2 King Size Beds'
    ],
    description: 'The crown jewel of Kutmadan Resort. A private bi-level loft cottage featuring two king-size beds, a private swimming pool, deep-soaking bathtub, and inclusive gourmet breakfast, lunch, and dinner.',
    bedType: '2 King Size Beds',
    view: 'Private Pool & Valley Panorama',
    mealsIncluded: 'All 3 Meals (Breakfast, Lunch & Dinner) Included',
    features: ['Private Swimming Pool', 'Luxury Deep-Soaking Bathtub', 'Two King Size Beds (Loft & Lower Level)', 'Architectural Mezzanine Design', 'Full Board Dining Experience']
  }
];

export const RESERVATION_GUIDELINES = [
  'Booking will not be confirmed without advance payment.',
  'Same-day room availability cannot be guaranteed.',
  'Check-in time is from 02:00 PM and Check-out is strictly by 11:00 AM.',
  'Valid government-issued photo identity proof (Aadhaar, Passport, Voter ID) required at check-in.',
  'Official reservations and booking confirmation are processed strictly via official WhatsApp (+91 6207799112).'
];

/**
 * 14 Genuine Cherrapunji Tourist Attractions
 */
export const TOURIST_ATTRACTIONS: TouristAttraction[] = [
  {
    id: 'nohkalikai-falls',
    name: 'Nohkalikai Falls',
    category: 'waterfall',
    image: '/images/nohkalikai.jpg',
    description: 'At 340 meters (1,115 ft), Nohkalikai is the tallest plunge waterfall in India. Water feeds from the plateau rainforest and plunges into a mesmerizing turquoise pool at the foot of dramatic limestone cliffs.',
    whyVisit: 'Witness one of India’s most awe-inspiring natural wonders and photograph the emerald pool surrounded by mist.',
    directionsUrl: 'https://maps.google.com/?q=Nohkalikai+Falls+Cherrapunjee+Meghalaya'
  },
  {
    id: 'seven-sisters-falls',
    name: 'Seven Sisters Falls (Nohsngithiang)',
    category: 'waterfall',
    image: '/images/seven_sisters.jpg',
    description: 'A magnificent seven-segmented waterfall plunging down the limestone cliffs of the Khasi Hills, symbolizing the seven sister states of North East India.',
    whyVisit: 'Spectacular wide-angle viewpoints especially during and after rainfall when sunlight creates vivid rainbows across the gorges.',
    directionsUrl: 'https://maps.google.com/?q=Seven+Sisters+Falls+Cherrapunji'
  },
  {
    id: 'double-decker-bridge',
    name: 'Double Decker Living Root Bridge',
    category: 'trek',
    image: '/images/living_root_bridge.jpg',
    description: 'Located deep in the valley at Nongriat, this two-tier suspension bridge was bio-engineered by Indigenous Khasi tribes over centuries using living roots of the Ficus elastica tree.',
    whyVisit: 'A world-famous living architectural wonder of indigenous environmental engineering and UNESCO heritage candidate.',
    directionsUrl: 'https://maps.google.com/?q=Double+Decker+Living+Root+Bridge+Nongriat'
  },
  {
    id: 'mawsmai-cave',
    name: 'Mawsmai Cave',
    category: 'cave',
    image: '/images/exterior.jpg',
    description: 'A well-illuminated and accessible limestone cave near Sohra featuring ancient stalactite and stalagmite formations, narrow passages, and fascinating karst topography.',
    whyVisit: 'The most accessible cave exploration in Meghalaya, suitable for beginners and families with lighted walking paths.',
    directionsUrl: 'https://maps.google.com/?q=Mawsmai+Cave+Cherrapunji'
  },
  {
    id: 'arwah-cave',
    name: 'Arwah Cave',
    category: 'cave',
    image: '/images/hero.jpg',
    description: 'Renowned for its dramatic prehistoric marine fossils embedded in limestone walls, subterranean streams, and a scenic wooden cliffside walkway leading to its entrance.',
    whyVisit: 'Discover authentic million-year-old crustacean and fish fossils preserved in natural karst formations.',
    directionsUrl: 'https://maps.google.com/?q=Arwah+Cave+Cherrapunji'
  },
  {
    id: 'wei-sawdong-falls',
    name: 'Wei Sawdong Falls',
    category: 'waterfall',
    image: '/images/nohkalikai.jpg',
    description: 'A breathtaking three-tiered waterfall cascading into natural stepped emerald lagoons surrounded by dense green forest foliage.',
    whyVisit: 'Photogenic stepped pools resembling jade bowls, providing one of Meghalaya’s most tranquil visual treasures.',
    directionsUrl: 'https://maps.google.com/?q=Wei+Sawdong+Falls+Cherrapunji'
  },
  {
    id: 'dainthlen-falls',
    name: 'Dainthlen Falls',
    category: 'waterfall',
    image: '/images/seven_sisters.jpg',
    description: 'A broad rocky riverbed cascade steeped in ancient Khasi mythology where folklore recounts the slaying of an enormous primordial serpent named Thlen.',
    whyVisit: 'Expansive flat rock potholes carved by ancient torrents and panoramic views over the Sohra plains.',
    directionsUrl: 'https://maps.google.com/?q=Dainthlen+Falls+Cherrapunji'
  },
  {
    id: 'nongriat-village',
    name: 'Nongriat Village',
    category: 'culture',
    image: '/images/living_root_bridge.jpg',
    description: 'A serene rainforest hamlet tucked deep inside the river valley below Tyrna, renowned for warm Khasi hospitality, crystal-clear streams, and bio-living bridges.',
    whyVisit: 'Experience pristine village life, taste wild forest honey, and bathe in crystalline mountain springs.',
    directionsUrl: 'https://maps.google.com/?q=Nongriat+Meghalaya'
  },
  {
    id: 'thangkharang-park',
    name: 'Thangkharang Park',
    category: 'park',
    image: '/images/exterior.jpg',
    description: 'Perched on high canyon cliffs overlooking the sprawling floodplains of neighboring Bangladesh and offering a direct perspective of the Kynrem Falls.',
    whyVisit: 'Enjoy peaceful botanical gardens, the curious Khoh Ramhah rock pillar, and endless horizons.',
    directionsUrl: 'https://maps.google.com/?q=Thangkharang+Park+Cherrapunji'
  },
  {
    id: 'eco-park',
    name: 'Eco Park',
    category: 'park',
    image: '/images/hero.jpg',
    description: 'Developed atop plateau headlands, featuring landscaped paths, hybrid orchid collections, and cliff viewpoints looking directly into the deep gorges below.',
    whyVisit: 'Great family walk with sweeping viewpoints of waterfalls forming and dropping into Bangladesh plains.',
    directionsUrl: 'https://maps.google.com/?q=Eco+Park+Cherrapunji'
  },
  {
    id: 'mawmluh-cave',
    name: 'Mawmluh Cave',
    category: 'cave',
    image: '/images/exterior.jpg',
    description: 'The fourth longest cave in the Indian subcontinent. A speleological marvel where stalagmites provided critical evidence defining the Meghalayan Geological Age.',
    whyVisit: 'For serious adventure seekers; requires local guides and headlamps to navigate underground river passages.',
    directionsUrl: 'https://maps.google.com/?q=Mawmluh+Cave+Cherrapunji'
  },
  {
    id: 'kynrem-falls',
    name: 'Kynrem Falls',
    category: 'waterfall',
    image: '/images/seven_sisters.jpg',
    description: 'A grand 305-meter high three-tiered waterfall cascading gracefully across stone levels alongside the winding road descending toward the border.',
    whyVisit: 'One of the tallest waterfalls in the state with a dramatic roadside bridge vantage point.',
    directionsUrl: 'https://maps.google.com/?q=Kynrem+Falls+Cherrapunji'
  },
  {
    id: 'garden-of-caves',
    name: 'Garden of Caves (Ka Bri Synrang)',
    category: 'park',
    image: '/images/nohkalikai.jpg',
    description: 'A magical natural sanctuary featuring ancient caves, sacred Khasi rock formations, crystal cascades, and hidden forested waterfalls.',
    whyVisit: 'Walk through shaded bamboo groves, sacred natural stone shelters, and serene water pools.',
    directionsUrl: 'https://maps.google.com/?q=Garden+of+Caves+Laitryngew+Meghalaya'
  },
  {
    id: 'wah-kaba-falls',
    name: 'Wah Kaba Falls',
    category: 'waterfall',
    image: '/images/hero.jpg',
    description: 'A dramatic seasonal waterfall that plunges off a high rocky escarpment, situated along the scenic highway between Shillong and Sohra.',
    whyVisit: 'Spectacular canyon drop and easy viewing platform just off the mountain transit route.',
    directionsUrl: 'https://maps.google.com/?q=Wah+Kaba+Falls+Meghalaya'
  }
];

export const RESORT_ACTIVITIES: ActivityExperience[] = [
  {
    id: 'waterfall-sightseeing',
    title: 'Waterfall Sightseeing & Photography',
    description: 'Marvel at India’s highest waterfalls—including Nohkalikai, Seven Sisters, and Wei Sawdong—with spectacular viewing points across Sohra canyons.',
    duration: 'Full Day / Half Day',
    suitability: 'All Ages & Families',
    importantNote: 'Best visibility during daylight hours. Rain gear recommended during monsoon.',
    iconName: 'Camera'
  },
  {
    id: 'root-bridge-trekking',
    title: 'Living Root Bridge Trekking',
    description: 'Hike through lush subtropical rainforest steps descending into Nongriat valley to witness ancient bio-engineered ficus elastica root bridges.',
    duration: '4 to 6 Hours',
    suitability: 'Moderate to High Fitness Required',
    importantNote: 'Involves descending and ascending approx. 3,500 steps. Hiring a registered local Khasi guide is strongly advised.',
    iconName: 'Footprints'
  },
  {
    id: 'cave-exploration',
    title: 'Karst Cave Spelunking (Mawsmai & Arwah)',
    description: 'Discover prehistoric fossils, magnificent limestone stalagmites, and cool subterranean caverns carved over millions of years.',
    duration: '1 to 2 Hours per Cave',
    suitability: 'All Travelers (Arwah/Mawsmai) / Guided Only (Mawmluh)',
    importantNote: 'Separate entry ticket required at cave counters. Comfortable non-slip footwear is essential.',
    iconName: 'Compass'
  },
  {
    id: 'scenic-drives',
    title: 'Scenic Mountain & Valley Drives',
    description: 'Wind along scenic roads overlooking endless clouds, gorges, and mist-cloaked plateau vistas connecting Shillong to Cherrapunji.',
    duration: 'Flexible',
    suitability: 'All Travelers',
    importantNote: 'Subject to mountain weather and fog conditions.',
    iconName: 'Navigation'
  },
  {
    id: 'mawkdok-zipline',
    title: 'Mawkdok Dympep Valley Zipline',
    description: 'Glide high over the emerald canopy of Mawkdok Valley for an adrenaline rush with breathtaking bird’s-eye canyon views.',
    duration: '30 Minutes',
    suitability: 'Adventure Enthusiasts (Age/Weight limits apply)',
    importantNote: 'Operated independently by local certified adventure providers. Subject to weather & operator availability.',
    iconName: 'Zap'
  },
  {
    id: 'khasi-cultural-hospitality',
    title: 'Khasi Cultural & Culinary Experience',
    description: 'Savor traditional Khasi flavors, learn about indigenous matrilineal traditions, and experience the warmth of Sohra hospitality.',
    duration: 'Evening / Meal Times',
    suitability: 'All Guests',
    importantNote: 'Special meal requests can be coordinated directly with our resort staff in advance.',
    iconName: 'Coffee'
  }
];
