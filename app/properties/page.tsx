"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PropertyCard from "@/components/property-card"
import { featuredProperties } from "@/lib/data"

// Add more properties for a fuller page
const allProperties = [
  ...featuredProperties,
  {
    id: 7,
    title: "Modernist Desert Oasis",
    description:
      "Stunning architectural masterpiece in the desert featuring floor-to-ceiling glass, a negative-edge pool, and breathtaking mountain views.",
    location: "Palm Springs, CA",
    price: 6800000,
    bedrooms: 4,
    bathrooms: 4.5,
    area: 5200,
    image: "/placeholder.svg?height=600&width=800&text=Desert Oasis",
    status: "For Sale",
    features: ["Negative-Edge Pool", "Guest House", "Home Office", "Outdoor Kitchen", "Solar Powered"],
  },
  {
    id: 8,
    title: "Lakefront Contemporary",
    description:
      "Sleek contemporary home on the lake with private dock, boathouse, and panoramic water views from every room.",
    location: "Lake Tahoe, NV",
    price: 11200000,
    bedrooms: 5,
    bathrooms: 6,
    area: 7800,
    image: "/placeholder.svg?height=600&width=800&text=Lakefront Home",
    status: "For Sale",
    features: ["Private Dock", "Boathouse", "Home Theater", "Wine Cellar", "Gym"],
  },
  {
    id: 9,
    title: "Historic Brownstone",
    description:
      "Meticulously restored historic brownstone with modern amenities, featuring original details, a garden, and a rooftop terrace.",
    location: "Brooklyn, NY",
    price: 8500000,
    bedrooms: 5,
    bathrooms: 4,
    area: 5600,
    image: "/placeholder.svg?height=600&width=800&text=Historic Brownstone",
    status: "For Sale",
    features: ["Garden", "Rooftop Terrace", "Original Details", "Wine Cellar", "Smart Home"],
  },
  {
    id: 10,
    title: "Tropical Modern Estate",
    description:
      "Stunning tropical modern estate with indoor-outdoor living, infinity pool, and lush landscaped gardens.",
    location: "Miami, FL",
    price: 14500000,
    bedrooms: 6,
    bathrooms: 7.5,
    area: 9200,
    image: "/placeholder.svg?height=600&width=800&text=Tropical Estate",
    status: "For Sale",
    features: ["Infinity Pool", "Summer Kitchen", "Guest House", "Home Theater", "Smart Home"],
  },
  {
    id: 11,
    title: "Mountain View Chalet",
    description:
      "Luxurious mountain chalet with panoramic views, featuring a great room with soaring ceilings, stone fireplace, and ski-in/ski-out access.",
    location: "Vail, CO",
    price: 13800000,
    bedrooms: 5,
    bathrooms: 5.5,
    area: 8400,
    image: "/placeholder.svg?height=600&width=800&text=Mountain Chalet",
    status: "For Sale",
    features: ["Ski-in/Ski-out", "Hot Tub", "Wine Cellar", "Game Room", "Heated Driveway"],
  },
  {
    id: 12,
    title: "Vineyard Estate",
    description:
      "Spectacular vineyard estate featuring a Tuscan-inspired main residence, wine production facilities, and panoramic valley views.",
    location: "Napa Valley, CA",
    price: 18900000,
    bedrooms: 6,
    bathrooms: 7,
    area: 10800,
    image: "/placeholder.svg?height=600&width=800&text=Vineyard Estate",
    status: "For Sale",
    features: ["Wine Cellar", "Pool", "Guest House", "Vineyard", "Olive Grove"],
  },
]

const locations = [...new Set(allProperties.map((property) => property.location))]
const statuses = ["For Sale", "For Rent", "Sold", "All"]
const propertyTypes = ["All Types", "House", "Condo", "Townhouse", "Villa", "Estate"]

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(allProperties)
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 20000000])
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [selectedType, setSelectedType] = useState("All Types")
  const [bedroomsMin, setBedroomsMin] = useState(0)
  const [bathroomsMin, setBathroomsMin] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Filter properties based on criteria
  useEffect(() => {
    let results = allProperties

    // Search term
    if (searchTerm) {
      results = results.filter(
        (property) =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.description?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Price range
    results = results.filter((property) => property.price >= priceRange[0] && property.price <= priceRange[1])

    // Location
    if (selectedLocation !== "All") {
      results = results.filter((property) => property.location === selectedLocation)
    }

    // Status
    if (selectedStatus !== "All") {
      results = results.filter((property) => property.status === selectedStatus)
    }

    // Bedrooms and bathrooms
    results = results.filter((property) => property.bedrooms >= bedroomsMin && property.bathrooms >= bathroomsMin)

    setFilteredProperties(results)
  }, [searchTerm, priceRange, selectedLocation, selectedStatus, selectedType, bedroomsMin, bathroomsMin])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920&text=Luxury Properties"
            alt="Luxury Properties"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4">Luxury Properties</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover our exclusive collection of luxury properties, each offering exceptional quality and unique
            character.
          </p>
        </motion.div>
      </section>

      {/* Search and Filters */}
      <section className="py-6 md:py-8 bg-white shadow-md sticky top-14 z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search properties..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex-1 w-full md:w-auto flex flex-wrap gap-2 md:gap-4 justify-start md:justify-end">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" className="gap-2 w-full sm:w-auto" onClick={() => setShowFilters(!showFilters)}>
                <SlidersHorizontal size={16} />
                {showFilters ? "Hide Filters" : "More Filters"}
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t">
                  <div className="space-y-4">
                    <h3 className="font-bold">Price Range</h3>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 20000000]}
                        max={20000000}
                        step={100000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="my-6"
                      />
                      <div className="flex justify-between text-sm">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold">Property Type</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {propertyTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={`type-${type}`}
                            checked={selectedType === type}
                            onCheckedChange={() => setSelectedType(type)}
                          />
                          <Label htmlFor={`type-${type}`}>{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold mb-2">Bedrooms (min)</h3>
                      <div className="flex gap-2">
                        {[0, 1, 2, 3, 4, 5].map((num) => (
                          <Button
                            key={`bed-${num}`}
                            variant={bedroomsMin === num ? "default" : "outline"}
                            className={`px-3 py-1 h-8 ${bedroomsMin === num ? "bg-navy" : ""}`}
                            onClick={() => setBedroomsMin(num)}
                          >
                            {num === 0 ? "Any" : num === 5 ? "5+" : num}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2">Bathrooms (min)</h3>
                      <div className="flex gap-2">
                        {[0, 1, 2, 3, 4, 5].map((num) => (
                          <Button
                            key={`bath-${num}`}
                            variant={bathroomsMin === num ? "default" : "outline"}
                            className={`px-3 py-1 h-8 ${bathroomsMin === num ? "bg-navy" : ""}`}
                            onClick={() => setBathroomsMin(num)}
                          >
                            {num === 0 ? "Any" : num === 5 ? "5+" : num}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button
                    variant="outline"
                    className="mr-2"
                    onClick={() => {
                      setSearchTerm("")
                      setPriceRange([0, 20000000])
                      setSelectedLocation("All")
                      setSelectedStatus("All")
                      setSelectedType("All Types")
                      setBedroomsMin(0)
                      setBathroomsMin(0)
                    }}
                  >
                    Reset Filters
                  </Button>
                  <Button className="bg-navy hover:bg-navy/90" onClick={() => setShowFilters(false)}>
                    Apply Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold font-playfair">{filteredProperties.length} Properties Found</h2>
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-md shadow-md overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="h-10 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProperties.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} enhanced={true} />
              ))}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <X className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Properties Found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any properties matching your search criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setPriceRange([0, 20000000])
                  setSelectedLocation("All")
                  setSelectedStatus("All")
                  setSelectedType("All Types")
                  setBedroomsMin(0)
                  setBathroomsMin(0)
                }}
              >
                Reset Filters
              </Button>
            </motion.div>
          )}

          {filteredProperties.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="outline" className="bg-navy text-white">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

