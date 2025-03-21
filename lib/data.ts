import type { Property, PortfolioProject } from "./types"

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    description:
      "Luxurious beachfront villa with panoramic ocean views, featuring an infinity pool, private beach access, and state-of-the-art smart home technology.",
    location: "Malibu, CA",
    price: 12500000,
    bedrooms: 5,
    bathrooms: 6,
    area: 6200,
    image: "/placeholder.svg?height=600&width=800&text=Beachfront Villa",
    status: "For Sale",
    features: ["Infinity Pool", "Private Beach", "Smart Home", "Wine Cellar", "Home Theater"],
  },
  {
    id: 2,
    title: "Elegant Penthouse",
    description:
      "Stunning penthouse in the heart of the city with floor-to-ceiling windows, private elevator, and a spacious rooftop terrace with 360-degree views.",
    location: "Beverly Hills, CA",
    price: 8750000,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 4100,
    image: "/placeholder.svg?height=600&width=800&text=Elegant Penthouse",
    status: "For Sale",
    features: ["Rooftop Terrace", "Private Elevator", "Concierge Service", "Fitness Center", "Wine Room"],
  },
  {
    id: 3,
    title: "Historic Mansion",
    description:
      "Meticulously restored historic mansion with modern amenities, featuring a grand ballroom, library, and beautifully landscaped gardens.",
    location: "Pasadena, CA",
    price: 15900000,
    bedrooms: 7,
    bathrooms: 8,
    area: 12000,
    image: "/placeholder.svg?height=600&width=800&text=Historic Mansion",
    status: "For Sale",
    features: ["Grand Ballroom", "Library", "Wine Cellar", "Guest House", "Tennis Court"],
  },
  {
    id: 4,
    title: "Contemporary Mountain Retreat",
    description:
      "Modern architectural masterpiece nestled in the mountains, featuring walls of glass, a heated infinity pool, and breathtaking views.",
    location: "Aspen, CO",
    price: 9800000,
    bedrooms: 4,
    bathrooms: 4.5,
    area: 5800,
    image: "/placeholder.svg?height=600&width=800&text=Mountain Retreat",
    status: "For Sale",
    features: ["Infinity Pool", "Home Theater", "Wine Cellar", "Ski Room", "Heated Driveway"],
  },
  {
    id: 5,
    title: "Waterfront Estate",
    description:
      "Magnificent waterfront estate with private dock, boathouse, and panoramic water views from every room.",
    location: "Newport Beach, CA",
    price: 18500000,
    bedrooms: 6,
    bathrooms: 7,
    area: 9200,
    image: "/placeholder.svg?height=600&width=800&text=Waterfront Estate",
    status: "For Sale",
    features: ["Private Dock", "Boathouse", "Infinity Pool", "Guest House", "Home Theater"],
  },
  {
    id: 6,
    title: "Urban Luxury Loft",
    description:
      "Sophisticated loft in a converted historic building, featuring soaring ceilings, exposed brick, and high-end designer finishes.",
    location: "New York, NY",
    price: 7200000,
    bedrooms: 2,
    bathrooms: 2.5,
    area: 3800,
    image: "/placeholder.svg?height=600&width=800&text=Luxury Loft",
    status: "For Sale",
    features: ["Concierge Service", "Rooftop Terrace", "Wine Storage", "Fitness Center", "Private Parking"],
  },
]

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Oceanfront Luxury Development",
    description:
      "A collection of 12 luxury beachfront villas designed with sustainable materials and cutting-edge technology.",
    category: "Residential",
    location: "Malibu, CA",
    image: "/placeholder.svg?height=600&width=600&text=Oceanfront Development",
    year: 2022,
  },
  {
    id: 2,
    title: "The Skyline Tower",
    description: "A 45-story luxury condominium tower featuring panoramic city views and world-class amenities.",
    category: "Residential",
    location: "Los Angeles, CA",
    image: "/placeholder.svg?height=600&width=600&text=Skyline Tower",
    year: 2021,
  },
  {
    id: 3,
    title: "Heritage Plaza",
    description:
      "A mixed-use development combining retail, office space, and luxury apartments in a historic district.",
    category: "Commercial",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=600&width=600&text=Heritage Plaza",
    year: 2020,
  },
  {
    id: 4,
    title: "The Vineyard Estate",
    description:
      "A 200-acre vineyard estate featuring a modern main residence, guest houses, and wine production facilities.",
    category: "Luxury",
    location: "Napa Valley, CA",
    image: "/placeholder.svg?height=600&width=600&text=Vineyard Estate",
    year: 2022,
  },
  {
    id: 5,
    title: "Lakeside Residences",
    description: "A collection of 8 custom waterfront homes designed to maximize views and indoor-outdoor living.",
    category: "Waterfront",
    location: "Lake Tahoe, NV",
    image: "/placeholder.svg?height=600&width=600&text=Lakeside Residences",
    year: 2021,
  },
  {
    id: 6,
    title: "The Metropolitan",
    description:
      "A luxury boutique hotel conversion in a historic building, featuring 60 rooms and high-end amenities.",
    category: "Commercial",
    location: "Chicago, IL",
    image: "/placeholder.svg?height=600&width=600&text=The Metropolitan",
    year: 2019,
  },
  {
    id: 7,
    title: "Coastal Modern Residence",
    description:
      "A custom-designed modern home featuring floor-to-ceiling glass walls and sustainable design elements.",
    category: "Residential",
    location: "La Jolla, CA",
    image: "/placeholder.svg?height=600&width=600&text=Coastal Residence",
    year: 2022,
  },
  {
    id: 8,
    title: "The Summit Retreat",
    description:
      "A mountain-top luxury residence with panoramic views, featuring natural materials and seamless indoor-outdoor living.",
    category: "Luxury",
    location: "Aspen, CO",
    image: "/placeholder.svg?height=600&width=600&text=Summit Retreat",
    year: 2020,
  },
  {
    id: 9,
    title: "Harbor Point Marina",
    description: "A luxury marina development featuring high-end retail, dining, and waterfront condominiums.",
    category: "Waterfront",
    location: "Miami, FL",
    image: "/placeholder.svg?height=600&width=600&text=Harbor Point",
    year: 2021,
  },
]

