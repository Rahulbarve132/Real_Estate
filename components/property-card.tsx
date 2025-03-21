"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Bed, Bath, Square } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Property } from "@/lib/types"

interface PropertyCardProps {
  property: Property
  index?: number
  enhanced?: boolean
}

export default function PropertyCard({ property, index = 0, enhanced = false }: PropertyCardProps) {
  const { id, title, location, price, bedrooms, bathrooms, area, image, status } = property

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  }

  const CardComponent = enhanced ? motion.div : "div"
  const cardProps = enhanced
    ? {
        variants: cardVariants,
        whileHover: { y: -10, transition: { duration: 0.3 } },
      }
    : {}

  return (
    <CardComponent
      {...cardProps}
      className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {status && <Badge className="absolute top-4 left-4 bg-navy text-white">{status}</Badge>}

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <div className="font-bold text-xl md:text-2xl font-playfair">${price.toLocaleString()}</div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold font-playfair mb-2 group-hover:text-navy transition-colors line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1 text-navy flex-shrink-0" />
          <span className="text-sm line-clamp-1">{location}</span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" />
            <span className="text-xs md:text-sm text-gray-700">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" />
            <span className="text-xs md:text-sm text-gray-700">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" />
            <span className="text-xs md:text-sm text-gray-700">{area} sq ft</span>
          </div>
        </div>

        <Button className="w-full bg-navy hover:bg-navy/90 text-white" asChild>
          <Link href={`/properties/${id}`}>View Details</Link>
        </Button>
      </div>
    </CardComponent>
  )
}

