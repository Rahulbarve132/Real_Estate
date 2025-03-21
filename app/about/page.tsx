"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Award, Users, Building, Clock } from "lucide-react"
import CountUp from "@/components/count-up"

const teamMembers = [
  {
    name: "Alexandra Reynolds",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in luxury real estate, Alexandra has built a reputation for excellence and integrity in the industry.",
    image: "/placeholder.svg?height=400&width=400&text=AR",
  },
  {
    name: "Jonathan Chen",
    role: "Chief Operating Officer",
    bio: "Jonathan brings his extensive background in property development and strategic planning to ensure operational excellence.",
    image: "/placeholder.svg?height=400&width=400&text=JC",
  },
  {
    name: "Sophia Williams",
    role: "Head of Acquisitions",
    bio: "Sophia's keen eye for value and potential has helped our clients secure some of the most prestigious properties on the market.",
    image: "/placeholder.svg?height=400&width=400&text=SW",
  },
  {
    name: "Michael Rodriguez",
    role: "Director of Marketing",
    bio: "Michael's innovative marketing strategies have revolutionized how luxury properties are presented to discerning clients.",
    image: "/placeholder.svg?height=400&width=400&text=MR",
  },
]

const milestones = [
  {
    year: 2005,
    title: "Company Founded",
    description: "LUXEESTATE was established with a vision to redefine luxury real estate services.",
  },
  {
    year: 2008,
    title: "Expansion to Beverly Hills",
    description: "Opened our flagship office on Rodeo Drive, establishing our presence in the luxury market.",
  },
  {
    year: 2012,
    title: "International Division Launch",
    description: "Expanded our services to international clients, offering global property solutions.",
  },
  {
    year: 2015,
    title: "100th Luxury Property Sold",
    description: "Reached a significant milestone of 100 luxury properties sold, totaling over $500 million.",
  },
  {
    year: 2018,
    title: "Luxury Developer Partnership",
    description: "Formed exclusive partnerships with premier luxury property developers worldwide.",
  },
  {
    year: 2021,
    title: "Digital Transformation",
    description: "Launched innovative virtual viewing technology for international clients.",
  },
  {
    year: 2023,
    title: "Sustainability Initiative",
    description: "Committed to carbon-neutral operations and promoting sustainable luxury properties.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSection />
      <StorySection />
      <StatsSection />
      <TeamSection />
      <TimelineSection />
      <ValuesSection />
      <CtaSection />
    </div>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=About Us"
          alt="About LUXEESTATE"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
            Our Story of Excellence
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
            For over two decades, LUXEESTATE has been redefining the standards of luxury real estate, connecting
            extraordinary properties with extraordinary lives.
          </p>
          <Button size="lg" className="bg-navy hover:bg-navy/90 text-white">
            Discover Our Legacy
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                A Legacy of Luxury Real Estate Excellence
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005 by Alexandra Reynolds, LUXEESTATE began with a simple yet ambitious vision: to create a
                real estate firm that truly understood the unique needs of discerning clients seeking exceptional
                properties.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a boutique agency in Los Angeles has grown into an international luxury real estate
                powerhouse, with a reputation built on discretion, expertise, and unparalleled service.
              </p>
              <p className="text-gray-600">
                Today, LUXEESTATE represents some of the most extraordinary properties around the world and serves a
                distinguished clientele who expect nothing but the best. Our success is measured not just by
                transactions completed, but by relationships built and dreams fulfilled.
              </p>
            </div>

            <div className="flex items-center pt-4">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                <Image
                  src="/placeholder.svg?height=200&width=200&text=AR"
                  alt="Alexandra Reynolds"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="italic text-gray-600 mb-2">
                  "Our mission has always been to connect extraordinary properties with extraordinary lives, creating
                  perfect matches that stand the test of time."
                </p>
                <p className="font-bold">Alexandra Reynolds, Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5]">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Our Story"
                alt="LUXEESTATE Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-40 h-40 bg-navy z-0" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gray-100 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-4"
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80"
          >
            Over the years, we've achieved remarkable milestones that reflect our commitment to excellence in luxury
            real estate.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-center mb-4">
              <Building className="h-10 w-10 text-white/90" />
            </div>
            <div className="text-4xl md:text-5xl font-bold">
              <CountUp end={500} duration={2.5} />+
            </div>
            <p className="text-white/80">Luxury Properties Sold</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10 text-white/90" />
            </div>
            <div className="text-4xl md:text-5xl font-bold">
              <CountUp end={1000} duration={2.5} />+
            </div>
            <p className="text-white/80">Satisfied Clients</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-2"
          >
            <div className="flex justify-center mb-4">
              <Award className="h-10 w-10 text-white/90" />
            </div>
            <div className="text-4xl md:text-5xl font-bold">
              <CountUp end={25} duration={2.5} />+
            </div>
            <p className="text-white/80">Industry Awards</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2"
          >
            <div className="flex justify-center mb-4">
              <Clock className="h-10 w-10 text-white/90" />
            </div>
            <div className="text-4xl md:text-5xl font-bold">
              <CountUp end={18} duration={2.5} />
            </div>
            <p className="text-white/80">Years of Excellence</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-4"
          >
            Meet Our Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600"
          >
            Our team of experienced professionals brings decades of expertise in luxury real estate to serve our
            discerning clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-square relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-1">{member.name}</h3>
              <p className="text-navy font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="mt-8" asChild>
            <Link href="/team">View Full Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-4"
          >
            Our Journey Through the Years
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600"
          >
            From our humble beginnings to becoming a leader in luxury real estate, our journey has been defined by
            excellence and innovation.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* Mobile timeline dot */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-navy md:hidden" />

                <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${index % 2 === 1 && "md:order-1"}`}>
                  <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-navy font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold font-playfair mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Desktop timeline dot - hidden on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-navy border-4 border-white z-10 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Excellence"
                  alt="Excellence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative mt-8">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Integrity"
                  alt="Integrity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative -mt-8">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Innovation"
                  alt="Innovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Service"
                  alt="Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Our Core Values</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from the properties we represent to the service we
                  provide our clients.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-gray-600">
                  We operate with unwavering integrity, building trust through transparency and honesty in every
                  interaction.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-gray-600">
                  We embrace innovation, constantly seeking new ways to enhance our services and the experience of our
                  clients.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Personalized Service</h3>
                <p className="text-gray-600">
                  We provide tailored, white-glove service that addresses the unique needs and preferences of each
                  client.
                </p>
              </div>
            </div>
          </motion.div>
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-6"
          >
            Join Our Journey of Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg opacity-90 mb-8"
          >
            Whether you're looking to buy, sell, or invest in luxury real estate, our team is ready to provide you with
            exceptional service and expertise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-navy hover:bg-gray-100" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/properties">View Properties</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

