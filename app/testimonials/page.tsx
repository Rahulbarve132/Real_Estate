"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const testimonials = [
  {
    id: 1,
    name: "Alexandra Williams",
    role: "Property Investor",
    location: "Los Angeles, CA",
    quote:
      "Working with LUXEESTATE was an exceptional experience. Their attention to detail and understanding of the luxury market is unparalleled. They found me exactly what I was looking for in a timeframe that exceeded my expectations.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    propertyType: "Residential",
    featured: true,
  },
  {
    id: 2,
    name: "Jonathan Reynolds",
    role: "CEO, Reynolds Enterprises",
    location: "New York, NY",
    quote:
      "The team at LUXEESTATE went above and beyond to ensure our property acquisition was smooth and efficient. Their market knowledge and negotiation skills are truly impressive. I wouldn't hesitate to recommend them to anyone looking for luxury real estate.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    propertyType: "Commercial",
    featured: true,
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "International Buyer",
    location: "Shanghai, China",
    quote:
      "As an overseas investor, I needed a team I could trust. LUXEESTATE provided exceptional service, handling every detail with professionalism and making the entire process seamless. Their global perspective was invaluable.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    propertyType: "Residential",
    featured: true,
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Tech Entrepreneur",
    location: "San Francisco, CA",
    quote:
      "LUXEESTATE understood exactly what I was looking for in a modern luxury home. Their curated selection saved me countless hours, and their expertise in smart home technology was particularly helpful. A truly white-glove service.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    propertyType: "Residential",
    featured: false,
  },
  {
    id: 5,
    name: "Elizabeth Parker",
    role: "Interior Designer",
    location: "Miami, FL",
    quote:
      "I've worked with many real estate firms over my career, but LUXEESTATE stands out for their attention to architectural detail and understanding of design principles. They don't just sell properties; they match lifestyles with spaces.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    propertyType: "Residential",
    featured: false,
  },
  {
    id: 6,
    name: "Robert Garcia",
    role: "Hotel Developer",
    location: "Chicago, IL",
    quote:
      "The commercial division at LUXEESTATE has been instrumental in our hotel expansion. Their market analysis and property sourcing capabilities are exceptional, helping us secure prime locations that meet all our criteria.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    propertyType: "Commercial",
    featured: false,
  },
  {
    id: 7,
    name: "Victoria James",
    role: "Family Office Director",
    location: "Boston, MA",
    quote:
      "Managing real estate investments for a family office requires discretion and expertise. LUXEESTATE has consistently delivered both, along with returns that exceed our expectations. Their market insights are invaluable.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    propertyType: "Investment",
    featured: false,
  },
  {
    id: 8,
    name: "David Wilson",
    role: "Retired Executive",
    location: "Aspen, CO",
    quote:
      "Finding our perfect vacation home was a dream made reality by LUXEESTATE. They understood our lifestyle needs and found a property that exceeded our expectations. Their after-sale support has also been exemplary.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    propertyType: "Residential",
    featured: false,
  },
  {
    id: 9,
    name: "Olivia Martinez",
    role: "Art Collector",
    location: "Santa Fe, NM",
    quote:
      "LUXEESTATE found me a home that not only accommodates my art collection perfectly but enhances it. Their understanding of how space interacts with art showed a level of expertise I hadn't found elsewhere.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    propertyType: "Residential",
    featured: false,
  },
  {
    id: 10,
    name: "Thomas Wright",
    role: "Real Estate Developer",
    location: "Austin, TX",
    quote:
      "As a developer, I appreciate working with agents who understand the intricacies of luxury development. LUXEESTATE's team has been an invaluable partner in our expansion into new markets.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    propertyType: "Commercial",
    featured: false,
  },
  {
    id: 11,
    name: "Jennifer Lee",
    role: "Celebrity Manager",
    location: "Los Angeles, CA",
    quote:
      "Privacy and security are paramount for my clients. LUXEESTATE handles high-profile transactions with the utmost discretion and professionalism. Their off-market listings are particularly valuable.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    propertyType: "Residential",
    featured: false,
  },
  {
    id: 12,
    name: "Richard Bennett",
    role: "Vineyard Owner",
    location: "Napa Valley, CA",
    quote:
      "LUXEESTATE's expertise in vineyard properties is unmatched. They understood the specific requirements for our estate and found us a property with the perfect terroir and existing facilities.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    propertyType: "Agricultural",
    featured: false,
  },
]

const propertyTypes = ["All", "Residential", "Commercial", "Investment", "Agricultural"]

export default function TestimonialsPage() {
  const [selectedType, setSelectedType] = useState("All")
  const [featuredOnly, setFeaturedOnly] = useState(false)

  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      (selectedType === "All" || testimonial.propertyType === selectedType) && (!featuredOnly || testimonial.featured),
  )

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920&text=Client Testimonials"
            alt="Client Testimonials"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4">Client Testimonials</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with our team of luxury real estate
            professionals.
          </p>
        </motion.div>
      </section>

      {/* Featured Testimonials Carousel */}
      <FeaturedTestimonials />

      {/* All Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4 md:mb-0">All Testimonials</h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featuredOnly}
                  onChange={() => setFeaturedOnly(!featuredOnly)}
                  className="h-4 w-4 rounded border-gray-300 text-navy focus:ring-navy"
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                  Featured Only
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-2">No Testimonials Found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any testimonials matching your filter criteria.</p>
              <Button
                onClick={() => {
                  setSelectedType("All")
                  setFeaturedOnly(false)
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-playfair mb-4">Experience Our Service Firsthand</h2>
            <p className="text-gray-600 mb-8">
              Join our growing list of satisfied clients and discover the LUXEESTATE difference in luxury real estate.
            </p>
            <Button className="bg-navy hover:bg-navy/90 text-white" size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeaturedTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const featuredTestimonials = testimonials.filter((t) => t.featured)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % featuredTestimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-playfair mb-4">Featured Client Stories</h2>
          <p className="text-gray-600">
            Discover how we've helped our clients find their perfect luxury properties and exceed their real estate
            goals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 shadow-lg"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-navy rounded-full p-4">
                  <Quote className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="text-center pt-8">
                <p className="text-lg md:text-xl text-gray-700 italic mb-8 font-playfair">
                  {featuredTestimonials[activeIndex].quote}
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={featuredTestimonials[activeIndex].image || "/placeholder.svg"}
                      alt={featuredTestimonials[activeIndex].name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg">{featuredTestimonials[activeIndex].name}</h4>
                  <p className="text-gray-600 mb-2">{featuredTestimonials[activeIndex].role}</p>
                  <p className="text-navy text-sm">{featuredTestimonials[activeIndex].location}</p>

                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < featuredTestimonials[activeIndex].rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {featuredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-navy" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface Testimonial {
  id: number
  name: string
  role: string
  location: string
  quote: string
  image: string
  rating: number
  propertyType: string
  featured: boolean
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold">{testimonial.name}</h3>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>

        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <Quote className="h-6 w-6 text-navy mb-2" />
        <p className="text-gray-700 italic line-clamp-4">{testimonial.quote}</p>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">{testimonial.location}</span>
        <span className="text-sm text-navy font-medium">{testimonial.propertyType}</span>
      </div>

      {testimonial.featured && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded-full">Featured Testimonial</span>
        </div>
      )}
    </motion.div>
  )
}

