import JSZip from 'jszip';
import { RESORT_INFO, OFFICIAL_ROOMS } from '../data/resortData';

/**
 * Generates static HTML content for each standalone page for Hostinger public_html deployment
 */
function generateStaticPageHtml(title: string, description: string, mainContent: string, customHead: string = ''): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Kutmadan Resort Cherrapunji</title>
  <meta name="description" content="${description}" />
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
  <!-- Top Navigation Header -->
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
        <a href="https://wa.me/916207799112" target="_blank" class="bg-[#25D366] hover:bg-[#20ba5a] text-stone-950 font-semibold px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-1.5 shadow">
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-grow">
    ${mainContent}
  </main>

  <!-- Official Channels Security Notice -->
  <section class="bg-amber-50 border-y border-amber-200 py-6 px-4">
    <div class="max-w-5xl mx-auto text-center">
      <h4 class="text-amber-900 font-bold text-base tracking-wide uppercase">BOOK ONLY THROUGH OFFICIAL CHANNELS</h4>
      <p class="text-amber-800 text-sm mt-1 max-w-3xl mx-auto">
        For genuine room reservations and booking assistance, contact Kutmadan Resort only through the official WhatsApp booking number (+91 6207799112) and verified contact numbers (+91 9762896575, +91 87309 45471). Avoid sending money to unknown individuals or unofficial websites.
      </p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#081C15] text-stone-300 py-12 px-4 border-t border-stone-800">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      <div class="space-y-3">
        <h3 class="text-xl font-serif text-[#D4AF37] font-semibold">Kutmadan Resort</h3>
        <p class="text-xs text-stone-400 leading-relaxed">MDR 27, Sohra, Meghalaya 793108, India.<br/>Experience the breathtaking natural serenity of Cherrapunji.</p>
        <p class="text-xs text-stone-400">Official Website: <span class="text-stone-200">https://kutmadanresortcherrapunji.in</span></p>
      </div>
      <div>
        <h4 class="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Our 6 Official Rooms</h4>
        <ul class="space-y-1.5 text-xs text-stone-400">
          <li>Non-AC Room (₹5,000)</li>
          <li>AC Deluxe Room (₹7,500 + Tax)</li>
          <li>AC Double Room (₹8,500 + Tax)</li>
          <li>AC Family Room (₹10,000 + Tax)</li>
          <li>AC Suites Room (₹20,000)</li>
          <li>AC Suites Loft Room (₹25,000 + Tax)</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Quick Links</h4>
        <ul class="space-y-1.5 text-xs text-stone-400">
          <li><a href="rooms.html" class="hover:text-white">All Rooms & Rates</a></li>
          <li><a href="attractions.html" class="hover:text-white">Cherrapunji Tourist Places</a></li>
          <li><a href="activities.html" class="hover:text-white">Experiences & Sightseeing</a></li>
          <li><a href="about.html" class="hover:text-white">About Kutmadan Resort</a></li>
          <li><a href="cancellation-policy.html" class="hover:text-white">Cancellation Policy</a></li>
          <li><a href="terms.html" class="hover:text-white">Terms & Conditions</a></li>
          <li><a href="privacy-policy.html" class="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Direct Booking Desk</h4>
        <p class="text-xs text-stone-400">WhatsApp: <a href="https://wa.me/916207799112" class="text-emerald-400 font-medium">+91 6207799112</a></p>
        <p class="text-xs text-stone-400 mt-1">Calling: +91 9762896575 / +91 87309 45471</p>
        <a href="https://share.google/dVzNzlP7MLRVg6S2V" target="_blank" class="inline-block mt-3 text-xs text-[#D4AF37] hover:underline">View on Google Maps &rarr;</a>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-8 pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
      &copy; 2026 Kutmadan Resort Cherrapunji. All rights reserved. MDR 27, Sohra, Meghalaya 793108.
    </div>
  </footer>
</body>
</html>`;
}

export async function generateHostingerZip(): Promise<Blob> {
  const zip = new JSZip();

  // Root robots and sitemap
  zip.file('robots.txt', `User-agent: *\nAllow: /\nSitemap: https://kutmadanresortcherrapunji.in/sitemap.xml\n`);
  zip.file('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://kutmadanresortcherrapunji.in/</loc><priority>1.0</priority></url>
  <url><loc>https://kutmadanresortcherrapunji.in/rooms.html</loc><priority>0.9</priority></url>
  <url><loc>https://kutmadanresortcherrapunji.in/booking.html</loc><priority>0.9</priority></url>
  <url><loc>https://kutmadanresortcherrapunji.in/about.html</loc><priority>0.8</priority></url>
  <url><loc>https://kutmadanresortcherrapunji.in/attractions.html</loc><priority>0.8</priority></url>
  <url><loc>https://kutmadanresortcherrapunji.in/activities.html</loc><priority>0.8</priority></url>
  <url><loc>https://kutmadanresortcherrapunji.in/contact.html</loc><priority>0.8</priority></url>
</urlset>`);

  // Generate rooms HTML content
  const roomsHtmlCards = OFFICIAL_ROOMS.map(r => `
    <div class="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col">
      <img src="${r.images[0]}" alt="${r.name}" class="h-64 w-full object-cover" />
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex justify-between items-baseline mb-2">
          <h3 class="text-xl font-serif font-bold text-stone-900">${r.name}</h3>
          <span class="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">${r.occupancy}</span>
        </div>
        <p class="text-xs text-stone-600 mb-4 flex-grow">${r.description}</p>
        <div class="border-t border-stone-100 pt-3 mb-4">
          <div class="flex flex-wrap gap-1.5 text-xs text-stone-600">
            ${r.amenities.map(a => `<span class="bg-stone-50 border border-stone-200 px-2 py-0.5 rounded text-[11px]">${a}</span>`).join('')}
          </div>
        </div>
        <div class="flex items-center justify-between pt-2 border-t border-stone-100">
          <div>
            <div class="text-xl font-bold text-[#1B4332]">${r.price}</div>
            <div class="text-[11px] text-stone-500">${r.priceSubtext}</div>
          </div>
          <a href="https://wa.me/916207799112?text=${encodeURIComponent(`Hello Kutmadan Resort Cherrapunji, I would like to enquire about reserving ${r.name}.`)}" target="_blank" class="bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-semibold px-4 py-2 rounded-lg text-xs">Book on WhatsApp</a>
        </div>
      </div>
    </div>
  `).join('');

  // Specific Open Graph & JSON-LD structured data for Rooms Page
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

  // 1. rooms.html
  zip.file('rooms.html', generateStaticPageHtml(
    'Our Six Official Rooms & Tariffs',
    'Official room categories at Kutmadan Resort Cherrapunji. Non-AC, AC Deluxe, AC Double, AC Family, AC Suites, and AC Suites Loft. Direct WhatsApp reservation.',
    `<div class="max-w-7xl mx-auto px-4 py-12">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <p class="text-xs font-semibold uppercase tracking-widest text-[#1B4332]">Verified Accommodations</p>
        <h1 class="text-4xl sm:text-5xl font-serif font-bold text-stone-900 mt-2">Our Six Room Categories</h1>
        <p class="text-stone-600 mt-3 text-sm">Official room categories, exact tariffs and inclusive amenities directly from Kutmadan Resort Cherrapunji.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${roomsHtmlCards}
      </div>
    </div>`,
    roomsHead
  ));

  // 2. about.html
  zip.file('about.html', generateStaticPageHtml(
    'Our Story – Discover Kutmadan Resort Cherrapunji',
    'Learn about Kutmadan Resort, nestled in the green hills of Sohra Cherrapunji Meghalaya with panoramic views and warm hospitality.',
    `<div class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl sm:text-5xl font-serif font-bold text-stone-900 text-center mb-6">Our Story – Discover Kutmadan Resort Cherrapunji</h1>
      <p class="text-lg text-stone-700 leading-relaxed mb-6 font-serif italic text-center">
        "Perched amidst the tranquil mountain heights of Sohra, where mist dances over emerald valleys and cascading waterfalls sing in the distance."
      </p>
      <div class="space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
        <p>Cherrapunji, locally celebrated as Sohra, stands as one of the most breathtaking destinations in Meghalaya. Surrounded by deep limestone canyons, rainforest plateau headlands, and cascading waterfalls, it has long welcomed nature enthusiasts and families seeking rejuvenation in nature’s lap.</p>
        <p>Kutmadan Resort is located along MDR 27 in Sohra, thoughtfully designed to blend with the natural mountain landscape. With traditional stone cottage aesthetics, lush open courtyards, and direct vistas of the surrounding gorges, our resort offers guests a peaceful sanctuary after a day of exploring caves, waterfalls, and living root bridges.</p>
        <p>Whether you choose our comfortable Non-AC rooms, well-appointed Deluxe rooms, spacious Family accommodations, or our signature private cottages and loft suites with private pool and bathtub, every stay is enriched with genuine Khasi hospitality and modern comforts.</p>
      </div>
      <div class="mt-8 text-center">
        <a href="rooms.html" class="inline-block bg-[#1B4332] text-white px-6 py-3 rounded-xl font-medium text-sm">Explore Our Rooms &rarr;</a>
      </div>
    </div>`
  ));

  // Specific Open Graph & JSON-LD structured data for Contact Page
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

  // 3. contact.html
  zip.file('contact.html', generateStaticPageHtml(
    'Contact Kutmadan Resort Cherrapunji',
    'Get official contact details, WhatsApp reservation numbers, and Google Maps location for Kutmadan Resort in Sohra, Meghalaya.',
    `<div class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-serif font-bold text-stone-900 text-center mb-8">Official Contact & Directions</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-2xl border border-stone-200">
          <h2 class="text-xl font-serif font-bold text-stone-900 mb-4">Resort Information</h2>
          <p class="text-sm text-stone-700"><strong>Address:</strong><br/>MDR 27, Sohra, Meghalaya 793108, India.</p>
          <p class="text-sm text-stone-700 mt-3"><strong>WhatsApp Booking:</strong><br/><a href="https://wa.me/916207799112" class="text-emerald-700 font-semibold">+91 6207799112</a></p>
          <p class="text-sm text-stone-700 mt-3"><strong>Direct Calling Numbers:</strong><br/>+91 9762896575<br/>+91 87309 45471</p>
          <p class="text-sm text-stone-700 mt-3"><strong>Check-in:</strong> 02:00 PM | <strong>Check-out:</strong> 11:00 AM</p>
          <div class="mt-6 flex flex-col gap-2">
            <a href="https://share.google/dVzNzlP7MLRVg6S2V" target="_blank" class="text-center bg-[#1B4332] text-white py-2.5 rounded-lg text-sm font-medium">Open Google Maps Location</a>
            <a href="https://wa.me/916207799112" target="_blank" class="text-center bg-[#25D366] text-stone-950 py-2.5 rounded-lg text-sm font-semibold">Message on WhatsApp</a>
          </div>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-stone-200">
          <h2 class="text-xl font-serif font-bold text-stone-900 mb-4">Official Booking Advisory</h2>
          <p class="text-sm text-stone-600 leading-relaxed mb-4">
            To ensure genuine reservations, confirm your stay exclusively through our official WhatsApp (+91 6207799112) and verified resort team numbers.
          </p>
          <ul class="text-xs text-stone-600 space-y-2 list-disc pl-4">
            <li>Booking will not be confirmed without advance payment.</li>
            <li>Same-day room availability cannot be guaranteed.</li>
            <li>Government-issued ID required for all adult guests.</li>
          </ul>
        </div>
      </div>
    </div>`,
    contactHead
  ));

  // 4. cancellation-policy.html
  zip.file('cancellation-policy.html', generateStaticPageHtml(
    'Cancellation Policy | Kutmadan Resort',
    'Official cancellation, rescheduling and advance payment policies of Kutmadan Resort Cherrapunji.',
    `<div class="max-w-3xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-serif font-bold text-stone-900 mb-6">Reservation & Cancellation Policy</h1>
      <div class="prose text-sm text-stone-700 space-y-4">
        <p><strong>Advance Payment:</strong> As noted in our official guidelines, a reservation is confirmed only upon receipt of the requisite advance deposit via official banking channels.</p>
        <p><strong>Cancellations:</strong> Cancellations made 7 or more days prior to check-in may be eligible for rescheduling or partial refund according to seasonal policy. Cancellations within 7 days of arrival or no-shows are strictly non-refundable.</p>
        <p><strong>Inclement Weather / Road Conditions:</strong> Mountain weather in Cherrapunji is subject to seasonal changes. Guests are advised to plan transit accordingly.</p>
      </div>
    </div>`
  ));

  // 5. terms.html & 6. privacy-policy.html
  zip.file('terms.html', generateStaticPageHtml('Terms & Conditions', 'Terms of stay at Kutmadan Resort Cherrapunji', `<div class="max-w-3xl mx-auto px-4 py-12"><h1 class="text-3xl font-serif font-bold text-stone-900 mb-4">Terms & Conditions</h1><p class="text-sm text-stone-600">Standard hospitality terms govern guest conduct, check-in registration, and property preservation in Sohra, Meghalaya.</p></div>`));
  zip.file('privacy-policy.html', generateStaticPageHtml('Privacy Policy', 'Privacy notice for Kutmadan Resort Cherrapunji', `<div class="max-w-3xl mx-auto px-4 py-12"><h1 class="text-3xl font-serif font-bold text-stone-900 mb-4">Privacy Policy</h1><p class="text-sm text-stone-600">We respect guest privacy and handle reservation details strictly for reservation fulfillment and compliance with local hospitality regulations.</p></div>`));

  // Instructions README
  zip.file('HOSTINGER_DEPLOYMENT_INSTRUCTIONS.txt', `=====================================================
KUTMADAN RESORT CHERRAPUNJI - HOSTINGER DEPLOYMENT GUIDE
Official Domain: https://kutmadanresortcherrapunji.in
=====================================================

Follow these 10 simple steps to deploy your website on Hostinger:

1. DOWNLOAD THE ZIP:
   You have successfully obtained this ZIP archive containing all website files.

2. LOG IN TO HOSTINGER:
   Visit https://hpanel.hostinger.com and log in with your credentials.

3. OPEN FILE MANAGER:
   - Navigate to Websites -> Manage next to 'kutmadanresortcherrapunji.in'.
   - In the left sidebar or dashboard, click on 'File Manager'.

4. ACCESS public_html:
   - Click to open the 'public_html' directory (this is your website root).
   - If there is a default 'default.php' or placeholder file from Hostinger, you may safely delete or rename it.

5. UPLOAD THE ZIP:
   - Click the 'Upload' button (arrow icon in the top right of File Manager).
   - Select and upload this ZIP file directly into 'public_html'.

6. EXTRACT FILES:
   - Right-click the uploaded ZIP file in File Manager and select 'Extract'.
   - Extract files directly into 'public_html'.
   - Verify that 'index.html', 'rooms.html', etc., are directly located inside 'public_html'.

7. CHECK index.html:
   - Ensure 'index.html' is present in 'public_html' so your homepage loads instantly when visitors enter https://kutmadanresortcherrapunji.in.

8. CONNECT YOUR DOMAIN:
   - Verify in hPanel that the domain 'kutmadanresortcherrapunji.in' is active and points to your hosting.

9. ACTIVATE FREE SSL:
   - In hPanel, go to 'Security' -> 'SSL'.
   - Ensure Lifetime Free SSL Certificate is active for HTTPS encryption.

10. TEST THE LIVE WEBSITE:
   - Open https://kutmadanresortcherrapunji.in in your browser.
   - Verify room cards, WhatsApp booking buttons (+91 6207799112), and Tawk.to live chat!

Support Contacts for Resort Management:
- WhatsApp Booking: +91 6207799112
- Calling: +91 9762896575 / +91 87309 45471
`);

  return await zip.generateAsync({ type: 'blob' });
}
