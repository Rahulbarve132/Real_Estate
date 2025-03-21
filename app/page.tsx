"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PropertyCard from "@/components/property-card"
import { featuredProperties } from "@/lib/data"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <AboutPreview />
      <LatestProjects />
      <TestimonialPreview />
      <CtaSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2838614/pexels-photo-2838614.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Luxury Property"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
            Exceptional Properties for Extraordinary Lives
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
            Discover a curated collection of the world's most prestigious properties, tailored to meet the needs of
            discerning clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-navy hover:bg-navy/90 text-white" asChild>
              <Link href="/properties">View Properties</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
      >
        <button
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
          className="flex flex-col items-center gap-2 hover:text-navy transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronRight className="h-6 w-6 rotate-90" />
        </button>
      </motion.div>
    </section>
  )
}

function FeaturedProperties() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our handpicked selection of exceptional properties, each offering a unique blend of luxury,
              location, and lifestyle.
            </p>
          </div>
          <Link href="/properties" className="mt-4 md:mt-0 group flex items-center text-navy font-medium">
            View All Properties
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative">
              <Image src="/placeholder.svg?height=800&width=600" alt="Luxury Interior" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-lg max-w-xs">
              <p className="text-lg font-playfair italic text-gray-700">
                "Our mission is to connect extraordinary properties with extraordinary lives."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair">A Legacy of Luxury Real Estate Excellence</h2>
            <p className="text-gray-600">
              With over two decades of experience in the luxury real estate market, we have established ourselves as the
              premier choice for discerning clients seeking exceptional properties.
            </p>
            <p className="text-gray-600">
              Our team of dedicated professionals combines deep market knowledge with personalized service to ensure
              that each client finds their perfect property match.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-4xl font-bold text-navy mb-2">200+</h3>
                <p className="text-gray-600">Luxury Properties Sold</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-navy mb-2">15+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-navy mb-2">98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-navy mb-2">12</h3>
                <p className="text-gray-600">Industry Awards</p>
              </div>
            </div>
            <Button className="mt-4 bg-navy hover:bg-navy/90 text-white" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LatestProjects() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Latest Projects</h2>
          <p className="text-gray-400">
            Explore our most recent developments and exclusive property offerings that represent the pinnacle of luxury
            real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-square relative">
                <Image
                  src={`/placeholder.svg?height=600&width=600&text=Project ${item}`}
                  alt={`Project ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold font-playfair mb-2">Luxury Project {item}</h3>
                <p className="text-sm text-gray-200 mb-4">Residential • Los Angeles, CA</p>
                <Link
                  href={`/portfolio/${item}`}
                  className="text-sm font-medium flex items-center text-white hover:text-navy transition-colors"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function TestimonialPreview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonials = [
    {
      id: 1,
      name: "Alexandra Williams",
      role: "Property Investor",
      quote:
        "Working with LUXEESTATE was an exceptional experience. Their attention to detail and understanding of the luxury market is unparalleled. They found me exactly what I was looking for.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Jonathan Reynolds",
      role: "CEO, Reynolds Enterprises",
      quote:
        "The team at LUXEESTATE went above and beyond to ensure our property acquisition was smooth and efficient. Their market knowledge and negotiation skills are truly impressive.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Sophia Chen",
      role: "International Buyer",
      quote:
        "As an overseas investor, I needed a team I could trust. LUXEESTATE provided exceptional service, handling every detail with professionalism and making the entire process seamless.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Client Testimonials</h2>
          <p className="text-gray-600">
            Hear what our clients have to say about their experience working with our team of luxury real estate
            professionals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white p-8 md:p-12 shadow-lg">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 text-5xl text-navy font-serif">"</div>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl text-gray-700 italic mb-8 font-playfair">
                {testimonials[activeIndex].quote}
              </p>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-navy" : "bg-gray-300"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-navy hover:bg-navy/90 text-white" asChild>
            <Link href="/testimonials">Read More Testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact our team of luxury real estate experts today to begin your journey towards acquiring the perfect
            property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-navy hover:bg-gray-100" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

