"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, Clock, Users, Award, CheckCircle, Star, Wrench, MessageSquare } from "lucide-react"

export default function TrainingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Training enrollment:", formData)
  }

  const modules = [
    {
      icon: BookOpen,
      title: "Basic Car Care",
      description: "Fundamentals of car care, safety, and preparation.",
      duration: "Module 1",
      topics: ["Vehicle Assessment", "Surface Preparation", "Safety Protocols", "Tool Familiarization"],
    },
    {
      icon: Wrench,
      title: "Professional Car Wash",
      description: "Techniques for an efficient and swirl-free wash process.",
      duration: "Module 2",
      topics: ["Two-Bucket Method", "Foam Pre-Wash", "Wheel & Tire Care", "Drying Techniques"],
    },
    {
      icon: Star,
      title: "Paint Correction",
      description: "Correction methods including compounding, polishing, and finish refinement.",
      duration: "Module 3",
      topics: ["Defect Analysis", "Polishing Techniques", "Compound Selection", "Finishing Methods"],
    },
    {
      icon: Award,
      title: "Ceramic Coating",
      description: "Ceramic chemistry, application, and quality control.",
      duration: "Module 4",
      topics: ["Coating Types", "Application Techniques", "Curing Process", "Quality Control"],
    },
    {
      icon: MessageSquare,
      title: "Common Problems Solving",
      description: "Troubleshooting typical detailing issues and customer scenarios.",
      duration: "Module 5",
      topics: ["High Spots Removal", "Dust/Nibs", "Water Spots", "Aftercare Guidance"],
    },
  ]

  const facilities = [
    "Fully Equipped Training Center",
    "Professional Grade Tools & Equipment",
    "Practice Vehicles Provided",
    "Hands-on Learning Experience",
    "Expert Instructor Guidance",
    "Course Materials & Certification",
    "Post-Training Support",
    "Business Setup Guidance",
  ]

  return (
    <section id="training" className="py-20 bg-dark-grey-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-deep-red/20 text-deep-red border-deep-red/30 mb-4">Professional Training</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Motorus Professional <span className="text-deep-red">Detailing Training</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master the art of professional automotive detailing with our comprehensive 5-7 day training program. Learn
            from industry experts and start your own successful detailing business.
          </p>
        </div>

        {/* Course Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          <Card className="bg-dark-grey-4 border-deep-red/30 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-deep-red/20 rounded-full">
                  <Clock className="h-8 w-8 text-deep-red" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">5-7 Days</h3>
              <p className="text-gray-300">Intensive Training Duration</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-grey-4 border-deep-red/30 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-deep-red/20 rounded-full">
                  <Users className="h-8 w-8 text-deep-red" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Small Batches</h3>
              <p className="text-gray-300">Maximum 8 Students per Batch</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-grey-4 border-deep-red/30 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-deep-red/20 rounded-full">
                  <Award className="h-8 w-8 text-deep-red" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Certified</h3>
              <p className="text-gray-300">Industry Recognized Certificate</p>
            </CardContent>
          </Card>
        </div>

        {/* Training Modules */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Training Modules</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="bg-dark-grey-4 border-deep-red/30 hover:border-deep-red/50 transition-all hover:transform hover:scale-105 h-full"
              >
                <CardHeader className="pb-0">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-deep-red/20 rounded-full mr-4">
                      <module.icon className="h-6 w-6 text-deep-red" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{module.title}</CardTitle>
                      <Badge className="bg-deep-red/20 text-deep-red border-deep-red/30 mt-1">{module.duration}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-300">{module.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <h5 className="text-white font-semibold mb-3">Key Topics:</h5>
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-deep-red mr-2 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Facilities Provided */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Facilities Provided</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="h-5 w-5 text-deep-red mr-3 flex-shrink-0" />
                <span>{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-dark-grey-4 border-deep-red/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Enroll Now</CardTitle>
              <p className="text-gray-300">Start your journey to becoming a professional detailing expert</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white  mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                    placeholder="Enter your full name"
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                    placeholder="Enter your email address"
                  />
                </div>

                <Button type="submit" className="w-full bg-deep-red hover:bg-deep-red/80 text-white py-3 text-lg">
                  Enroll Now - Contact for Pricing
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  Our team will contact you within 24 hours to discuss course details and schedule.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
