const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');

const RESORT_INFO = {
  name: 'Kutmadan Resort Cherrapunji',
  officialWebsite: 'https://kutmadanresortcherrapunji.in',
  whatsappBookingUrl: 'https://wa.me/916207799112',
  whatsappDisplay: '+91 6207799112',
  callingNumbers: '+91 9762896575 / +91 87309 45471'
};

const OFFICIAL_ROOMS = [
  {
    name: 'Non-AC Room',
    occupancy: '2 Adults',
    price: '₹5,000',
    priceSubtext: '/ night',
    amenities: ['Breakfast', 'Free Wi-Fi', 'LED / Smart TV', 'Attached Bathroom', '2 Adults', 'Ceiling Fan'],
    description: 'Cozy and budget-friendly sanctuary featuring traditional wooden furnishings, queen bed, ceiling fan, ensuite modern bathroom with geyser, and daily complimentary breakfast.',
    images: ['/images/rooms/nonac-1.jpg', '/images/rooms/nonac-2.jpg', '/images/rooms/nonac-3.jpg']
  },
  {
    name: 'AC Deluxe Room',
    occupancy: '2 Pax',
    price: '₹7,500 + Tax',
    priceSubtext: '/ night',
    amenities: ['Breakfast', 'Window View', 'Free Wi-Fi', 'LED / Smart TV', 'Attached Bathroom', 'Air Conditioning'],
    description: 'Elegantly appointed room featuring climate control, picture window capturing Sohra scenic hilltops, plush double bed, and modern ensuite facilities.',
    images: ['/images/rooms/deluxe-1.jpg', '/images/rooms/deluxe-2.jpg', '/images/rooms/deluxe-3.jpg']
  },
  {
    name: 'AC Double Room',
    occupancy: '2–3 Pax',
    price: '₹8,500 + Tax',
    priceSubtext: '/ night',
    amenities: ['Breakfast & Lunch', 'Valley View', 'Free Wi-Fi', 'LED / Smart TV', 'Attached Bathroom', 'Air Conditioning'],
    description: 'Perched to offer sweeping panoramic views of Sohra’s mist-laden valleys. Includes climate control, entertainment screen, and both Breakfast & Lunch included in the tariff.',
    images: ['/images/rooms/double-1.jpg', '/images/rooms/double-2.jpg', '/images/rooms/double-3.jpg']
  },
  {
    name: 'AC Family Room',
    occupancy: '3 Pax',
    price: '₹10,000 + Tax',
    priceSubtext: '/ night',
    amenities: ['Breakfast & Lunch', 'Mountain View', 'Free Wi-Fi', 'LED / Smart TV', 'Attached Bathroom', 'Air Conditioning'],
    description: 'Spaciously crafted for families with mountain vistas, generous bedding, ensuite bathroom, and inclusive daily breakfast and lunch.',
    images: ['/images/rooms/family-1.jpg', '/images/rooms/family-2.jpg', '/images/rooms/family-3.jpg']
  },
  {
    name: 'AC Suites Room',
    occupancy: '2–3 Pax',
    price: '₹20,000',
    priceSubtext: '/ night',
    amenities: ['Private Cottage', 'Balcony View', 'Breakfast, Lunch & Dinner', 'Free Wi-Fi', 'LED / Smart TV', 'Attached Bathroom'],
    description: 'Exclusive standalone private stone cottage with panoramic balcony overlooking Cherrapunji canyons, full luxury amenities, and all 3 meals included (Breakfast, Lunch & Dinner).',
    images: ['/images/rooms/suite-1.jpg', '/images/rooms/suite-2.jpg', '/images/rooms/suite-3.jpg']
  },
  {
    name: 'AC Suites Loft Room',
    occupancy: 'Premium Suite',
    price: '₹25,000 + Tax',
    priceSubtext: '/ night',
    amenities: ['Breakfast, Lunch & Dinner', 'Premium Private Cottage', 'Private Swimming Pool', 'Free Wi-Fi', 'Bathtub', '2 King Size Beds'],
    description: 'The pinnacle of luxury at Kutmadan Resort. A private bi-level loft cottage featuring two king-size beds, a private swimming pool, deep-soaking bathtub, and inclusive gourmet breakfast, lunch, and dinner.',
    images: ['/images/rooms/loft-1.jpg', '/images/rooms/loft-2.jpg', '/images/rooms/loft-3.jpg', '/images/rooms/loft-4.jpg', '/images/rooms/loft-5.jpg']
  }
];

function wrapHtml(title, desc, body, customHead = '') {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Kutmadan Resort Cherrapunji</title>
  <meta name="description" content="${desc}" />
  <link rel="canonical" href="${RESORT_INFO.officialWebsite}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #FAF8F5; color: #1c1917; }
    h1, h2, h3, .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
  </style>
  ${customHead}
  <!--Start of Tawk.to Script-->
  <script type="text/javascript">
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/6a40087aeafe991d4bfa0265/1js52289l';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  </script>
  <!--End of Tawk.to Script-->
</head>
<body class="flex flex-col min-h-screen">
  <header class="bg-[#081C15] text-white sticky top-0 z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-6">
      <a href="index.html" class="text-xl sm:text-2xl font-serif tracking-wider text-[#D4AF37] font-bold">Kutmadan Resort</a>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-stone-200">
        <a href="index.html" class="hover:text-[#D4AF37] transition">Home</a>
        <a href="rooms.html" class="hover:text-[#D4AF37] transition">Rooms</a>
        <a href="attractions.html" class="hover:text-[#D4AF37] transition">Explore Sohra</a>
        <a href="activities.html" class="hover:text-[#D4AF37] transition">Activities</a>
        <a href="about.html" class="hover:text-[#D4AF37] transition">About Us</a>
        <a href="contact.html" class="hover:text-[#D4AF37] transition">Contact</a>
      </nav>
      <div class="flex items-center gap-3">
        <a href="${RESORT_INFO.whatsappBookingUrl}" target="_blank" class="bg-[#25D366] hover:bg-[#20ba5a] text-stone-950 font-semibold px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-1.5 shadow">
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </div>
  </header>
  <main class="flex-grow">${body}</main>
  <section class="bg-amber-50 border-y border-amber-200 py-6 px-4">
    <div class="max-w-5xl mx-auto text-center">
      <h4 class="text-amber-900 font-bold text-base tracking-wide uppercase">BOOK ONLY THROUGH OFFICIAL CHANNELS</h4>
      <p class="text-amber-800 text-sm mt-1 max-w-3xl mx-auto">
        For genuine room reservations, contact Kutmadan Resort only through official WhatsApp (+91 6207799112) and verified calling numbers (+91 9762896575, +91 87309 45471).
      </p>
    </div>
  </section>
  <footer class="bg-[#081C15] text-stone-300 py-10 px-4 text-xs text-center border-t border-stone-800">
    <p>&copy; 2026 Kutmadan Resort Cherrapunji. MDR 27, Sohra, Meghalaya 793108, India. WhatsApp: +91 6207799112.</p>
  </footer>
</body>
</html>`;
}

async function build() {
  const publicHtmlDir = path.resolve('public_html');
  if (!fs.existsSync(publicHtmlDir)) {
    fs.mkdirSync(publicHtmlDir, { recursive: true });
  }

  const zip = new JSZip();

  const roomsHead = `
  <link rel="canonical" href="https://kutmadanresortcherrapunji.in/rooms.html" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://kutmadanresortcherrapunji.in/rooms.html" />
  <meta property="og:title" content="Our Six Official Rooms & Tariffs | Kutmadan Resort Cherrapunji" />
  <meta property="og:description" content="Explore our verified room categories: Non-AC (₹5,000), AC Deluxe (₹7,500), AC Double (₹8,500), AC Family (₹10,000), AC Suites (₹20,000), and AC Suites Loft with pool (₹25,000). Direct WhatsApp booking." />
  <meta property="og:image" content="https://kutmadanresortcherrapunji.in/images/rooms/deluxe-1.jpg" />
  <meta property="og:site_name" content="Kutmadan Resort Cherrapunji" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://kutmadanresortcherrapunji.in/rooms.html" />
  <meta name="twitter:title" content="Our Six Official Rooms & Tariffs | Kutmadan Resort Cherrapunji" />
  <meta name="twitter:description" content="Explore verified rooms at Kutmadan Resort Sohra. Genuine tariffs, pictures, and WhatsApp reservation assistance." />
  <meta name="twitter:image" content="https://kutmadanresortcherrapunji.in/images/rooms/deluxe-1.jpg" />

  <!-- Structured Data: HotelRooms, Offers & Breadcrumbs -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hotel",
        "@id": "https://kutmadanresortcherrapunji.in/#hotel",
        "name": "Kutmadan Resort Cherrapunji",
        "url": "https://kutmadanresortcherrapunji.in",
        "telephone": ["+916207799112", "+919762896575", "+918730945471"],
        "priceRange": "₹5,000 - ₹25,000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "MDR 27",
          "addressLocality": "Sohra",
          "addressRegion": "Meghalaya",
          "postalCode": "793108",
          "addressCountry": "IN"
        },
        "containsPlace": [
          {
            "@type": "HotelRoom",
            "name": "Non-AC Room",
            "description": "Sanctuary equipped with classic wooden furnishings, queen bed, ceiling fan, ensuite modern bathroom with geyser, and daily complimentary breakfast.",
            "occupancy": { "@type": "QuantitativeValue", "maxValue": 2, "unitCode": "C62" },
            "offers": { "@type": "Offer", "price": "5000", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://kutmadanresortcherrapunji.in/rooms.html" }
          },
          {
            "@type": "HotelRoom",
            "name": "AC Deluxe Room",
            "description": "Elegantly appointed room featuring climate control, picture window capturing Sohra scenic hilltops, plush double bed, and modern ensuite.",
            "occupancy": { "@type": "QuantitativeValue", "maxValue": 2, "unitCode": "C62" },
            "offers": { "@type": "Offer", "price": "7500", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://kutmadanresortcherrapunji.in/rooms.html" }
          },
          {
            "@type": "HotelRoom",
            "name": "AC Double Room",
            "description": "Sweeping valley view room with climate control, LED TV, and both Breakfast & Lunch included in the tariff.",
            "occupancy": { "@type": "QuantitativeValue", "maxValue": 3, "unitCode": "C62" },
            "offers": { "@type": "Offer", "price": "8500", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://kutmadanresortcherrapunji.in/rooms.html" }
          },
          {
            "@type": "HotelRoom",
            "name": "AC Family Room",
            "description": "Multi-bed spacious family room with mountain views, air conditioning, and inclusive Breakfast & Lunch.",
            "occupancy": { "@type": "QuantitativeValue", "maxValue": 3, "unitCode": "C62" },
            "offers": { "@type": "Offer", "price": "10000", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://kutmadanresortcherrapunji.in/rooms.html" }
          },
          {
            "@type": "HotelRoom",
            "name": "AC Suites Room",
            "description": "Standalone private stone cottage with panoramic balcony overlooking Cherrapunji canyons, including Breakfast, Lunch & Dinner.",
            "occupancy": { "@type": "QuantitativeValue", "maxValue": 3, "unitCode": "C62" },
            "offers": { "@type": "Offer", "price": "20000", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://kutmadanresortcherrapunji.in/rooms.html" }
          },
          {
            "@type": "HotelRoom",
            "name": "AC Suites Loft Room",
            "description": "Luxury bi-level loft cottage featuring two king-size beds, private swimming pool, bathtub, and Breakfast, Lunch & Dinner.",
            "occupancy": { "@type": "QuantitativeValue", "maxValue": 4, "unitCode": "C62" },
            "offers": { "@type": "Offer", "price": "25000", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://kutmadanresortcherrapunji.in/rooms.html" }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kutmadanresortcherrapunji.in/" },
          { "@type": "ListItem", "position": 2, "name": "Rooms & Tariffs", "item": "https://kutmadanresortcherrapunji.in/rooms.html" }
        ]
      }
    ]
  }
  </script>`;

  const contactHead = `
  <link rel="canonical" href="https://kutmadanresortcherrapunji.in/contact.html" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://kutmadanresortcherrapunji.in/contact.html" />
  <meta property="og:title" content="Official Contact & Directions | Kutmadan Resort Cherrapunji" />
  <meta property="og:description" content="Contact Kutmadan Resort Sohra. Official WhatsApp: +91 6207799112, Calling: +91 9762896575 / +91 87309 45471. Located along MDR 27, Sohra, Meghalaya 793108." />
  <meta property="og:image" content="https://kutmadanresortcherrapunji.in/images/exterior.jpg" />
  <meta property="og:site_name" content="Kutmadan Resort Cherrapunji" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://kutmadanresortcherrapunji.in/contact.html" />
  <meta name="twitter:title" content="Official Contact & Directions | Kutmadan Resort Cherrapunji" />
  <meta name="twitter:description" content="Official contact channels, phone numbers, WhatsApp reservation desk, and Google Maps location for Kutmadan Resort Cherrapunji." />
  <meta name="twitter:image" content="https://kutmadanresortcherrapunji.in/images/exterior.jpg" />

  <!-- Structured Data: ContactPage, Hotel & Breadcrumbs -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://kutmadanresortcherrapunji.in/contact.html#webpage",
        "url": "https://kutmadanresortcherrapunji.in/contact.html",
        "name": "Official Contact & Directions | Kutmadan Resort Cherrapunji",
        "description": "Reach Kutmadan Resort Cherrapunji via official WhatsApp, direct telephone, or find driving directions in Sohra, Meghalaya.",
        "mainEntity": {
          "@type": "Hotel",
          "@id": "https://kutmadanresortcherrapunji.in/#hotel",
          "name": "Kutmadan Resort Cherrapunji",
          "telephone": ["+916207799112", "+919762896575", "+918730945471"],
          "hasMap": "https://share.google/dVzNzlP7MLRVg6S2V",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "MDR 27",
            "addressLocality": "Sohra",
            "addressRegion": "Meghalaya",
            "postalCode": "793108",
            "addressCountry": "IN"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-6207799112",
              "contactType": "reservations",
              "availableLanguage": ["English", "Hindi", "Khasi"],
              "contactOption": "WhatsApp"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91-9762896575",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91-8730945471",
              "contactType": "front desk",
              "availableLanguage": ["English", "Hindi"]
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kutmadanresortcherrapunji.in/" },
          { "@type": "ListItem", "position": 2, "name": "Contact & Location", "item": "https://kutmadanresortcherrapunji.in/contact.html" }
        ]
      }
    ]
  }
  </script>`;

  // Create standalone HTML pages
  const pages = [
    {
      file: 'index.html',
      title: 'Kutmadan Resort Cherrapunji | Official Website & Room Booking',
      desc: 'Discover Kutmadan Resort Cherrapunji in Sohra, Meghalaya. Explore our six room categories, nearby waterfalls, caves and tourist attractions.',
      head: '',
      body: `<div class="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 class="text-5xl font-serif font-bold text-stone-900 mb-4">Welcome to Kutmadan Resort Cherrapunji</h1>
        <p class="text-xl text-stone-600 max-w-2xl mx-auto mb-8">Discover the Natural Beauty of Sohra, Meghalaya.</p>
        <div class="flex justify-center gap-4">
          <a href="rooms.html" class="bg-[#1B4332] text-white px-6 py-3 rounded-xl text-sm font-semibold">View 6 Room Categories</a>
          <a href="${RESORT_INFO.whatsappBookingUrl}" target="_blank" class="bg-[#25D366] text-stone-950 px-6 py-3 rounded-xl text-sm font-bold">Book on WhatsApp</a>
        </div>
      </div>`
    },
    {
      file: 'rooms.html',
      title: 'Our Six Room Categories & Tariffs',
      desc: 'Official room categories at Kutmadan Resort Cherrapunji. Non-AC, AC Deluxe, AC Double, AC Family, AC Suites, and AC Suites Loft. Direct WhatsApp reservation.',
      head: roomsHead,
      body: `<div class="max-w-7xl mx-auto px-4 py-12">
        <h1 class="text-4xl font-serif font-bold text-center mb-8">Our Six Official Room Categories</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${OFFICIAL_ROOMS.map(r => `
            <div class="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col">
              <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-baseline mb-2">
                  <h3 class="text-xl font-serif font-bold text-stone-900">${r.name}</h3>
                  <span class="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">${r.occupancy}</span>
                </div>
                <p class="text-xs text-stone-600 mb-4 flex-grow">${r.description}</p>
                <div class="flex items-center justify-between pt-2 border-t border-stone-100">
                  <div class="text-xl font-bold text-[#1B4332]">${r.price} <span class="text-xs text-stone-500">${r.priceSubtext}</span></div>
                  <a href="${RESORT_INFO.whatsappBookingUrl}?text=${encodeURIComponent('Hello Kutmadan Resort Cherrapunji, I would like to enquire about reserving ' + r.name + '.')}" target="_blank" class="bg-[#25D366] text-stone-950 font-semibold px-4 py-2 rounded-lg text-xs">Book Now</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>`
    },
    {
      file: 'about.html',
      title: 'Our Story – Discover Kutmadan Resort Cherrapunji',
      desc: 'Learn about Kutmadan Resort, nestled in the green hills of Sohra Cherrapunji Meghalaya with panoramic views and warm hospitality.',
      head: '',
      body: `<div class="max-w-3xl mx-auto px-4 py-12 space-y-4">
        <h1 class="text-4xl font-serif font-bold text-center mb-6">Our Story – Discover Kutmadan Resort Cherrapunji</h1>
        <p class="text-sm leading-relaxed">Perched gracefully along MDR 27 in Sohra (Cherrapunji), Meghalaya, Kutmadan Resort stands as a serene sanctuary for travelers, couples, and families seeking an intimate connection with North East India’s most storied mountain terrain.</p>
        <p class="text-sm leading-relaxed">With traditional stone cottage aesthetics, lush open courtyards, and direct vistas of the surrounding gorges, our resort offers guests a peaceful sanctuary after a day of exploring caves, waterfalls, and living root bridges.</p>
      </div>`
    },
    {
      file: 'contact.html',
      title: 'Official Contact & Directions',
      desc: 'Official address and WhatsApp booking number for Kutmadan Resort Cherrapunji.',
      head: contactHead,
      body: `<div class="max-w-3xl mx-auto px-4 py-12">
        <h1 class="text-4xl font-serif font-bold text-center mb-6">Official Contact & Directions</h1>
        <p class="text-sm"><strong>Address:</strong> MDR 27, Sohra, Meghalaya 793108, India.</p>
        <p class="text-sm mt-2"><strong>WhatsApp:</strong> +91 6207799112</p>
        <p class="text-sm mt-2"><strong>Calling Numbers:</strong> +91 9762896575 / +91 87309 45471</p>
      </div>`
    },
    {
      file: 'cancellation-policy.html',
      title: 'Cancellation Policy',
      desc: 'Cancellation terms of Kutmadan Resort Cherrapunji',
      head: '',
      body: `<div class="max-w-3xl mx-auto px-4 py-12"><h1 class="text-3xl font-serif font-bold mb-4">Reservation & Cancellation Policy</h1><p class="text-sm">Booking will not be confirmed without advance payment. Same-day room availability cannot be guaranteed.</p></div>`
    },
    {
      file: 'terms.html',
      title: 'Terms & Conditions',
      desc: 'Terms of stay at Kutmadan Resort Cherrapunji',
      head: '',
      body: `<div class="max-w-3xl mx-auto px-4 py-12"><h1 class="text-3xl font-serif font-bold mb-4">Terms & Conditions</h1><p class="text-sm">Check-in is 2:00 PM; Check-out is 11:00 AM. Government ID required at check-in.</p></div>`
    },
    {
      file: 'privacy-policy.html',
      title: 'Privacy Policy',
      desc: 'Privacy statement of Kutmadan Resort Cherrapunji',
      head: '',
      body: `<div class="max-w-3xl mx-auto px-4 py-12"><h1 class="text-3xl font-serif font-bold mb-4">Privacy Policy</h1><p class="text-sm">Guest details are handled strictly for reservation verification and check-in documentation.</p></div>`
    }
  ];

  for (const p of pages) {
    const html = wrapHtml(p.title, p.desc, p.body, p.head);
    fs.writeFileSync(path.join(publicHtmlDir, p.file), html);
    zip.file(p.file, html);
  }

  // Copy robots.txt and sitemap.xml
  const robots = fs.readFileSync('public/robots.txt', 'utf8');
  const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
  fs.writeFileSync(path.join(publicHtmlDir, 'robots.txt'), robots);
  fs.writeFileSync(path.join(publicHtmlDir, 'sitemap.xml'), sitemap);
  zip.file('robots.txt', robots);
  zip.file('sitemap.xml', sitemap);

  // Generate ZIP file into public/kutmadan-resort-hostinger.zip
  const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
  fs.writeFileSync('public/kutmadan-resort-hostinger.zip', zipBuffer);
  console.log('Built public/kutmadan-resort-hostinger.zip (' + zipBuffer.length + ' bytes) and public_html/ files successfully!');
}

build();
