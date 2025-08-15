"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Sparkles, Car, Wrench, Star, Clock, Award } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { useReducedMotion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function ServicesSection() {
  const prefersReducedMotion = useReducedMotion()
  const detailingServices = [
    {
      title: "Ceramic Coating",
      image: "/placeholder.svg?height=300&width=400",
      description: "Premium ceramic coating for long-lasting gloss and protection.",
      benefits: ["UV Resistance", "Hydrophobic", "Enhanced Gloss", "Easy Maintenance"],
      warranty: "3 Years",
      icon: Shield,
    },
    {
      title: "Graphene Coating 10H",
      image: "/placeholder.svg?height=300&width=400",
      description: "Advanced graphene-infused 10H coating for superior durability.",
      benefits: ["10H Hardness", "Graphene Enhanced", "Self-Healing", "Anti-Static"],
      warranty: "5 Years",
      icon: Award,
    },
    {
      title: "Paint Protection Film (PPF)",
      image: "/placeholder.svg?height=300&width=400",
      description: "Invisible film that protects paint from chips, scratches, and stains.",
      benefits: ["Self-Healing", "Anti-Scratch", "Gloss/Matte Options", "Invisible Coverage"],
      warranty: "5 Years - Lifetime",
      icon: Shield,
    },
    {
      title: "Other Detailing Services",
      image: "/placeholder.svg?height=300&width=400",
      description: "Interior and exterior detailing to restore your car’s showroom shine.",
      benefits: ["Deep Cleaning", "Leather Conditioning", "Paint Correction", "Odor Elimination"],
      warranty: "-",
      icon: Sparkles,
    },
  ]

  const modificationServices = [
    {
      title: "Custom Wraps",
      image: "/placeholder.svg?height=300&width=400",
      description: "Premium wraps with matte, gloss, or custom finishes for a unique look.",
      benefits: ["Color Change", "Paint Protection", "Removable", "Custom Designs"],
      warranty: "-",
      icon: Sparkles,
    },
    {
      title: "Conversion Kit Upgrades",
      image: "/placeholder.svg?height=300&width=400",
      description: "Transform your car’s aesthetics with high-quality conversion kits.",
      benefits: ["OEM-like Fit", "Enhanced Styling", "Durable Materials", "Professional Install"],
      warranty: "-",
      icon: Wrench,
    },
    {
      title: "Interior Upgrades",
      image: "/placeholder.svg?height=300&width=400",
      description: "Custom upholstery, ambient lighting, and premium material upgrades.",
      benefits: ["Custom Upholstery", "Ambient Lighting", "Premium Materials", "Personalized Design"],
      warranty: "-",
      icon: Star,
    },
    {
      title: "Full Body Paint",
      image: "/placeholder.svg?height=300&width=400",
      description: "Factory-quality full body repaint with premium finishes and protection.",
      benefits: ["Premium Paint Systems", "Professional Booth", "Long-lasting Finish", "Color Matching"],
      warranty: "-",
      icon: Car,
    },
  ]

  useEffect(() => {
    if (prefersReducedMotion) return
    const cards = document.querySelectorAll<HTMLElement>(".services-reveal")
    cards.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%" } }
      )
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [prefersReducedMotion])

  return (
    <section id="services" className="py-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 services-reveal">
          <Badge className="bg-deep-red/20 text-deep-red border-deep-red/30 mb-4">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium <span className="text-deep-red">Automotive Care</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the finest in automotive detailing, protection, and modification services with industry-leading
            warranties and premium products.
          </p>
        </div>

        {/* Detailing & Coatings */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Detailing & Coatings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {detailingServices.map((service, index) => (
              <Card
                key={index}
                className="services-reveal bg-dark-grey-2 border-deep-red/30 hover:border-deep-red/50 transition-all hover:transform hover:scale-105 group h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-deep-red/90 rounded-full">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div>
                      <h5 className="text-white font-semibold mb-2">Benefits:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-deep-red/30 text-gray-300">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Warranty: {service.warranty}</span>
                    </div>
                    <Button className="mt-auto w-full bg-deep-red hover:bg-deep-red/80 text-white">Get Quote</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Modifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Modifications & Upgrades</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {modificationServices.map((service, index) => (
              <Card
                key={index}
                className="services-reveal bg-dark-grey-2 border-deep-red/30 hover:border-deep-red/50 transition-all hover:transform hover:scale-105 group h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-deep-red/90 rounded-full">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div>
                      <h5 className="text-white font-semibold mb-2 text-sm">Benefits:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-deep-red/30 text-gray-300">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Warranty: {service.warranty}</span>
                    </div>
                    <Button className="mt-auto w-full bg-deep-red hover:bg-deep-red/80 text-white">Get Quote</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote Form - same as ContactSection styles */}
        <div className="mt-20 max-w-3xl mx-auto services-reveal">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Request a Quote</h3>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-white mb-2 block">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-white mb-2 block">
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                placeholder="Enter your phone"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-white mb-2 block">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                placeholder="Tell us about your needs..."
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full bg-deep-red hover:bg-deep-red/80 text-white">
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
