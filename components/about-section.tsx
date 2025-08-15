"use client"

import { Card, CardContent } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { useReducedMotion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)
import { Badge } from "@/components/ui/badge"
import { Award, Heart, Lightbulb, Zap, Globe } from "lucide-react"

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion()
  const timeline = [
    {
      year: "2022",
      title: "Humble Beginnings",
      description: "Started our journey with a vision to redefine premium automotive care.",
    },
    {
      year: "2023",
      title: "First Store",
      description: "Opened our first store and began serving customers with world-class detailing.",
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Growing steadily with multiple branches and an expanding service portfolio.",
    },
  ]

  const coreValues = [
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising standards in every service we deliver, using only premium products and techniques.",
    },
    {
      icon: Heart,
      title: "Customer Relationship",
      description: "Building lasting relationships through exceptional service and personalized automotive care.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously adopting cutting-edge technologies and methods in automotive detailing.",
    },
    {
      icon: Zap,
      title: "Passion",
      description: "Driven by genuine love for automobiles and commitment to perfection in every detail.",
    },
  ]

  const team = [
    { name: "Arj Patel", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300", bio: "Leading Motorus with a vision for premium automotive care and innovation." },
    { name: "Farj Patel", role: "Founder & CMO", image: "/placeholder.svg?height=300&width=300", bio: "Driving brand growth and customer experience across all channels." },
    { name: "Maitrik Patel", role: "Head Of Operations", image: "/placeholder.svg?height=300&width=300", bio: "Ensuring operational excellence and consistent service quality." },
  ]

  useEffect(() => {
    if (prefersReducedMotion) return
    const items = document.querySelectorAll<HTMLElement>(".about-reveal")
    items.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      )
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [prefersReducedMotion])

  return (
    <section id="about" className="py-20 bg-dark-grey-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 about-reveal">
          <Badge className="bg-deep-red/20 text-deep-red border-deep-red/30 mb-4">About Motorus</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Journey to <span className="text-deep-red">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a small waterless car wash service to India's premier automotive detailing and modification brand.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Growth Story</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {timeline.map((item, index) => (
              <Card
                key={index}
                className="about-reveal bg-dark-grey-4 border-deep-red/30 hover:border-deep-red/50 transition-all hover:transform hover:scale-105 h-full"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Badge className="bg-deep-red text-white text-lg px-4 py-2">{item.year}</Badge>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="about-reveal bg-dark-grey-4 border-deep-red/30 hover:border-deep-red/50 transition-all hover:transform hover:scale-105 h-full"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-deep-red/20 rounded-full">
                      <value.icon className="h-8 w-8 text-deep-red" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="about-reveal bg-dark-grey-4 border-deep-red/30 hover:border-deep-red/50 transition-all hover:transform hover:scale-105 h-full"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-deep-red/30"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-deep-red font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center about-reveal">
          <Card className="bg-gradient-to-r from-dark-grey-4 to-dark-grey-2 border-deep-red/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-deep-red/20 rounded-full">
                  <Globe className="h-12 w-12 text-deep-red" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To become India's most trusted and comprehensive automotive care brand, with 100+ franchise locations
                nationwide, setting new standards in luxury detailing, professional training, and customer satisfaction.
              </p>
              <div className="flex justify-center items-center mt-6 space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-deep-red">100+</div>
                  <div className="text-sm text-gray-400">Target Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-deep-red">50+</div>
                  <div className="text-sm text-gray-400">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-deep-red">2028</div>
                  <div className="text-sm text-gray-400">Target Year</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
