"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Award, Users, MapPin } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const [counters, setCounters] = useState({
    carsServiced: 0,
    branches: 0,
    customers: 0,
  })
  const cardRefs = useRef<HTMLDivElement[]>([])

  // Animated counter effect
  useEffect(() => {
    const targets = {
      carsServiced: 200,
      branches: 4,
      customers: 2500,
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        carsServiced: Math.floor(targets.carsServiced * progress),
        branches: Math.floor(targets.branches * progress),
        customers: Math.floor(targets.customers * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    // Glow border on counter cards when entering viewport
    const triggers: ScrollTrigger[] = []
    cardRefs.current.forEach((el) => {
      if (!el) return
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => {
            gsap.fromTo(
              el,
              { boxShadow: "0 0 0px rgba(220,38,38,0)" },
              { boxShadow: "0 0 16px rgba(220,38,38,0.6)", duration: 0.6, ease: "power2.out" }
            )
          },
        })
      )
    })
    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [prefersReducedMotion])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video hero-video-scale w-full h-full object-cover"
        >
          <source
            src="/placeholder.svg?height=1080&width=1920"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <motion.h1
            className="hero-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Luxury <span className="text-deep-red">Detailing</span>
            <br />
            Premium <span className="text-deep-red">Modifications</span>
            <br />
            Professional <span className="text-deep-red">Training</span>
          </motion.h1>

          <motion.p
            className="hero-subheading text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your vehicle with our premium automotive detailing,
            ceramic coating, and modification services. Experience luxury
            redefined.
          </motion.p>

    {/* CTA Buttons */}
<motion.div
  className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <Button
    size="lg"
    className="magnetic-btn bg-deep-red hover:bg-deep-red/80 text-white px-8 py-4 text-lg w-full sm:w-auto"
  >
    Book Now
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
  <Button
    size="lg"
    variant="outline"
    className="magnetic-btn border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-8 py-4 text-lg w-full sm:w-auto"
  >
    View Services
  </Button>
  <Link href="/franchise" className="w-full sm:w-auto">
    <Button
      size="lg"
      variant="outline"
      className="magnetic-btn border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-8 py-4 text-lg w-full"
    >
      Become a Franchisee
    </Button>
  </Link>
</motion.div>



          {/* Animated Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8">
            <motion.div
              ref={(el) => {
                if (el) cardRefs.current[0] = el
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-grey-2/50 backdrop-blur-sm rounded-lg p-6 border border-deep-red/20 h-full"
            >
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-deep-red mr-2" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {counters.carsServiced}+
              </div>
              <div className="text-gray-300">Cars Serviced Monthly</div>
            </motion.div>

            <motion.div
              ref={(el) => {
                if (el) cardRefs.current[1] = el
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-grey-2/50 backdrop-blur-sm rounded-lg p-6 border border-deep-red/20 h-full"
            >
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-8 w-8 text-deep-red mr-2" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {counters.branches}
              </div>
              <div className="text-gray-300">Branches in Ahmedabad</div>
            </motion.div>

            <motion.div
              ref={(el) => {
                if (el) cardRefs.current[2] = el
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-grey-2/50 backdrop-blur-sm rounded-lg p-6 border border-deep-red/20 h-full"
            >
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-deep-red mr-2" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {counters.customers}+
              </div>
              <div className="text-gray-300">Satisfied Customers</div>
            </motion.div>
          </div>
        </div>
      </div>

   {/* Brand Video Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Button
          variant="outline"
          size="lg"
          className="magnetic-btn border-white text-white hover:bg-white hover:text-primary-black rounded-full px-6 py-3 bg-transparent"
        >
          <Play className="h-5 w-5 mr-2" />
          Watch Our Story
        </Button>
      </div>

    </section>
  )
}
