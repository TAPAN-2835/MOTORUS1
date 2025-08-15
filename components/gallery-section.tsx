"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Filter } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentSlide, setCurrentSlide] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    const items = document.querySelectorAll<HTMLElement>(".gallery-reveal")
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: "#gallery", start: "top 85%" },
      }
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [activeFilter, prefersReducedMotion])

  const filters = [
    { id: "all", label: "All Work" },
    { id: "detailing", label: "Detailing" },
    { id: "modifications", label: "Modifications" },
    { id: "training", label: "Training" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "detailing",
      type: "before-after",
      title: "BMW X5 Ceramic Coating",
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      description: "Complete paint correction and 10H ceramic coating application",
    },
    {
      id: 2,
      category: "modifications",
      type: "before-after",
      title: "Audi A4 PPF Installation",
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      description: "Full front PPF installation with color-changing film",
    },
    {
      id: 3,
      category: "detailing",
      type: "video",
      title: "Mercedes S-Class Detailing Timelapse",
      thumbnail: "/placeholder.svg?height=400&width=600",
      videoUrl: "#",
      description: "Complete interior and exterior detailing process",
    },
    {
      id: 4,
      category: "modifications",
      type: "before-after",
      title: "Range Rover Wrap",
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      description: "Complete vehicle wrap in matte black finish",
    },
    {
      id: 5,
      category: "training",
      type: "image",
      title: "Professional Training Session",
      image: "/placeholder.svg?height=400&width=600",
      description: "Students learning ceramic coating application techniques",
    },
    {
      id: 6,
      category: "detailing",
      type: "video",
      title: "Paint Correction Process",
      thumbnail: "/placeholder.svg?height=400&width=600",
      videoUrl: "#",
      description: "Step-by-step paint correction and polishing",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const BeforeAfterSlider = ({ item }: { item: any }) => {
    const [showAfter, setShowAfter] = useState(false)

    return (
      <div className="relative overflow-hidden rounded-lg group">
        <div className="relative h-64">
          <img
            src={showAfter ? item.afterImage : item.beforeImage}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className={`mb-2 ${showAfter ? "bg-green-600" : "bg-red-600"}`}>
              {showAfter ? "After" : "Before"}
            </Badge>
            <h4 className="text-white font-semibold">{item.title}</h4>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button onClick={() => setShowAfter(!showAfter)} className="bg-deep-red hover:bg-deep-red/80 text-white">
            {showAfter ? "Show Before" : "Show After"}
          </Button>
        </div>
      </div>
    )
  }

  const VideoCard = ({ item }: { item: any }) => (
    <div className="relative overflow-hidden rounded-lg group cursor-pointer">
      <div className="relative h-64">
        <img src={item.thumbnail || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-4 bg-deep-red/90 rounded-full group-hover:scale-110 transition-transform">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="bg-blue-600 mb-2">Video</Badge>
          <h4 className="text-white font-semibold">{item.title}</h4>
          <p className="text-gray-300 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  )

  const ImageCard = ({ item }: { item: any }) => (
    <div className="relative overflow-hidden rounded-lg group">
      <div className="relative h-64">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="bg-purple-600 mb-2">Gallery</Badge>
          <h4 className="text-white font-semibold">{item.title}</h4>
          <p className="text-gray-300 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section id="gallery" className="py-20 bg-dark-grey-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 gallery-reveal">
          <Badge className="bg-deep-red/20 text-deep-red border-deep-red/30 mb-4">Our Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gallery & <span className="text-deep-red">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Witness the transformation of vehicles through our expert detailing, modifications, and professional
            training programs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 gallery-reveal">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id
                  ? "bg-deep-red hover:bg-deep-red/80 text-white"
                  : "border-deep-red/30 text-gray-300 hover:bg-deep-red/20 hover:text-white bg-transparent"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="gallery-reveal bg-dark-grey-4 border-deep-red/30 hover:border-deep-red/50 transition-all overflow-hidden h-full"
            >
              <CardContent className="p-0">
                {item.type === "before-after" && <BeforeAfterSlider item={item} />}
                {item.type === "video" && <VideoCard item={item} />}
                {item.type === "image" && <ImageCard item={item} />}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 gallery-reveal">
          <Button className="magnetic-btn bg-deep-red hover:bg-deep-red/80 text-white px-8 py-3">Load More Projects</Button>
        </div>
      </div>
    </section>
  )
}
