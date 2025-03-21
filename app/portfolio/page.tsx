"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioProjects } from "@/lib/data"

const categories = ["All", "Residential", "Commercial", "Luxury", "Waterfront"]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-24 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Our Portfolio</h1>
        <p className="text-gray-600 mb-8">
          Explore our diverse collection of exceptional properties and projects, showcasing our commitment to quality
          and luxury in real estate.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "bg-navy hover:bg-navy/90" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold font-playfair mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-4">
                  {project.category} • {project.location}
                </p>
                <Link
                  href={`/portfolio/${project.id}`}
                  className="text-sm font-medium flex items-center text-white hover:text-navy transition-colors"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold font-playfair mb-1 group-hover:text-navy transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-2">
                {project.category} • {project.location}
              </p>
              <p className="text-gray-700 line-clamp-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

