// ─── Collections ────────────────────────────────────────────────────────────

export const collections = [
  {
    slug: 'buddha',
    title: 'Buddha Collection',
    tagline: 'Sacred Form • Timeless Serenity • Spiritual Presence',
    description:
      'Hand-carved stone sculptures that bring peace, balance, and refined elegance into any space. Each piece is a meditation on stillness, formed by artisans who have spent lifetimes understanding the language of stone.',
    heroImage: 'https://images.unsplhthttps://zenstonecreations.vercel.app/collections/buddhatps://zenstonecreations.vercel.app/collections/buddhaash.com/photo-1591280063444-d3c514eb6e13?w=1600&q=85',
    accentColor: '#B8976A',
  },
  {
    slug: 'abstract',
    title: 'Abstract Sculptures',
    tagline: 'Form Without Boundary • Texture • Tension • Presence',
    description:
      'Contemporary stone forms that challenge convention while honoring material truth. Each sculpture is a dialogue between artist and stone — the final form emerging from what the stone itself wishes to become.',
    heroImage: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?w=1600&q=85',
    accentColor: '#B8976A',
  },
  {
    slug: 'planters',
    title: 'Stone Planters',
    tagline: 'Nature • Architecture • Living Stone',
    description:
      'Carved from single blocks of natural stone, our planters bring enduring elegance to outdoor and indoor spaces alike. Where the living and the mineral exist in quiet harmony.',
    heroImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&q=85',
    accentColor: '#B8976A',
  },
]

// ─── Products ────────────────────────────────────────────────────────────────

export const products = [
  // Buddha
  {
    id: 'serene-lotus-buddha',
    collection: 'buddha',
    name: 'Serene Lotus Buddha',
    shortDesc: 'Seated in eternal meditation, carved from single-block white marble.',
    description:
      'This masterwork depicts the Buddha in the Dhyana mudra — hands folded in perfect meditation. Carved from a single block of Makrana white marble by fourth-generation artisans in Rajasthan, each subtle line of the face carries centuries of sculptural tradition.',
    image: 'https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85',
    material: 'Makrana White Marble',
    sizes: ['24"', '36"', '48"', 'Custom'],
    useCases: ['Home Entrances', 'Meditation Spaces', 'Luxury Interiors', 'Garden Sanctuaries'],
    featured: true,
  },
  {
    id: 'standing-harmony-buddha',
    collection: 'buddha',
    name: 'Standing Harmony',
    shortDesc: 'Standing Buddha in the Abhaya mudra, raw sandstone finish.',
    description:
      'The raised right hand of the Abhaya mudra — symbolizing protection and the dispelling of fear. This standing figure in aged sandstone carries a warmth and gravitas that anchors any interior it inhabits.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85',
    material: 'Aged Sandstone',
    sizes: ['36"', '48"', 'Custom'],
    useCases: ['Garden Entrances', 'Courtyards', 'Wellness Spaces'],
    featured: true,
  },
  {
    id: 'contemplation-buddha',
    collection: 'buddha',
    name: 'The Contemplation',
    shortDesc: 'Face-only sculpture in black granite, deeply expressive.',
    description:
      'A transcendent study of the Buddha\'s face in its quietest moment — eyes lowered in inward gaze. Polished black granite gives the work a timeless, monolithic presence.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1400&q=85',
    material: 'Polished Black Granite',
    sizes: ['24"', '36"'],
    useCases: ['Luxury Lobbies', 'Private Collections', 'Interior Alcoves'],
    featured: false,
  },
  {
    id: 'reclining-nirvana',
    collection: 'buddha',
    name: 'Reclining Nirvana',
    shortDesc: 'Horizontal reclining form in pale grey limestone.',
    description:
      'The Parinirvana pose — the Buddha in the moment of final liberation. Carved in pale grey limestone, this horizontal work commands presence without weight.',
    image: 'https://images.unsplash.com/photo-1523377975-de7bcd8cdc67?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=85',
    material: 'Grey Limestone',
    sizes: ['48"', 'Custom'],
    useCases: ['Spa Interiors', 'Private Gardens', 'Meditation Retreats'],
    featured: false,
  },

  // Abstract
  {
    id: 'form-in-tension',
    collection: 'abstract',
    name: 'Form in Tension',
    shortDesc: 'Asymmetric white marble form exploring balance and gravity.',
    description:
      'Two opposing forces resolved into a single mass of veined white marble. The surface alternates between raw and polished — a tension that mirrors the sculpture\'s conceptual core.',
    image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1400&q=85',
    material: 'Carrara White Marble',
    sizes: ['24"', '36"', 'Custom'],
    useCases: ['Contemporary Interiors', 'Art Collections', 'Corporate Lobbies'],
    featured: true,
  },
  {
    id: 'the-monolith',
    collection: 'abstract',
    name: 'The Monolith',
    shortDesc: 'Vertical column of raw black granite, minimal and commanding.',
    description:
      'Pure verticality. A column of raw black granite, barely shaped — the natural cleavage of the stone left exposed on all sides except one face, which is mirror-polished. Object and idea become one.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=85',
    material: 'Raw Black Granite',
    sizes: ['48"', 'Custom'],
    useCases: ['Architectural Installations', 'Gardens', 'Statement Interiors'],
    featured: true,
  },
  {
    id: 'wave-study',
    collection: 'abstract',
    name: 'Wave Study No. 3',
    shortDesc: 'Fluid undulating form in translucent onyx.',
    description:
      'Translucent green onyx backlit to reveal its inner world — veins and inclusions catching the light like frozen water. The form itself suggests movement caught mid-breath.',
    image: 'https://images.unsplash.com/photo-1504198453778-a8a42b1cf5e2?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1400&q=85',
    material: 'Green Onyx',
    sizes: ['24"', '36"'],
    useCases: ['Luxury Residential', 'Boutique Hotels', 'Spa Environments'],
    featured: false,
  },
  {
    id: 'duality',
    collection: 'abstract',
    name: 'Duality',
    shortDesc: 'Two interlocking forms in contrasting marble — white and black.',
    description:
      'The eternal conversation between opposing forces rendered in the most direct of materials: one form in white Carrara marble, its counterpart in absolute black nero marquina. Separated yet inseparable.',
    image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1580237072353-751da33ccc3f?w=1400&q=85',
    material: 'Carrara Marble & Nero Marquina',
    sizes: ['24"', '36"', '48"'],
    useCases: ['Art Collections', 'Penthouse Interiors', 'Gallery Installations'],
    featured: false,
  },

  // Planters
  {
    id: 'basin-planter',
    collection: 'planters',
    name: 'Basin Planter',
    shortDesc: 'Wide-mouth basin carved from travertine, weathered finish.',
    description:
      'A low, generous basin form carved from Roman travertine. The natural voids and texture of the stone are left exposed — evidence of the material\'s ancient origins. Designed to age beautifully outdoors.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85',
    material: 'Roman Travertine',
    sizes: ['24"', '36"', '48"', 'Custom'],
    useCases: ['Terraces', 'Garden Courtyards', 'Luxury Pool Areas'],
    featured: true,
  },
  {
    id: 'column-planter',
    collection: 'planters',
    name: 'Column Planter',
    shortDesc: 'Tall cylindrical planter in pale grey limestone.',
    description:
      'Tall, cylindrical, and architectural — this planter draws the eye upward and brings structure to any planting scheme. Pale grey limestone develops a natural patina over time, deepening its character.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85',
    material: 'Grey Limestone',
    sizes: ['36"', '48"', 'Custom'],
    useCases: ['Entrance Ways', 'Interior Foyers', 'Landscape Design'],
    featured: true,
  },
  {
    id: 'trough-planter',
    collection: 'planters',
    name: 'Stone Trough',
    shortDesc: 'Rectangular trough planter, hand-hewn black granite.',
    description:
      'Hewn — not carved — from a single block of black granite. The surface bears the marks of the chisel, left deliberately to contrast with nature\'s softness when planted.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1400&q=85',
    material: 'Hand-Hewn Black Granite',
    sizes: ['48"', 'Custom'],
    useCases: ['Landscape Architecture', 'Commercial Gardens', 'Private Estates'],
    featured: false,
  },
  {
    id: 'sphere-planter',
    collection: 'planters',
    name: 'Sphere Planter',
    shortDesc: 'Perfect sphere with moss bowl, white marble.',
    description:
      'A mathematical form — the sphere — with a small moss bowl carved into its summit. White Makrana marble. The contrast between geometric perfection and natural moss growth is the essence of the work.',
    image: 'https://images.unsplash.com/photo-1487530811015-780e8d47c2da?w=900&q=85',
    lifestyleImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=85',
    material: 'Makrana White Marble',
    sizes: ['24"', '36"'],
    useCases: ['Interior Centerpieces', 'Meditation Gardens', 'Luxury Residences'],
    featured: false,
  },
]

export type Product = typeof products[0]
export type Collection = typeof collections[0]
