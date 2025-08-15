"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  TrendingUp,
  Shield,
  Users,
  Award,
  MapPin,
  DollarSign,
  BookOpen,
  Headphones,
  CheckCircle,
  Building,
  Target,
  Zap,
} from "lucide-react"

export default function FranchiseSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    investment: "",
    experience: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Franchise application:", formData)
  }

  const whyPartner = [
    {
      icon: TrendingUp,
      title: "Proven Business Model",
      description: "Join a rapidly growing brand with established systems and proven profitability.",
    },
    {
      icon: Shield,
      title: "Brand Recognition",
      description: "Leverage the trusted Motorus brand name and reputation in the automotive industry.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Training",
      description: "Complete training program covering technical skills and business operations.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Continuous support in marketing, operations, and technical assistance.",
    },
  ]

  const franchiseModels = [
    {
      title: "Express Centre",
      investment: "-",
      area: "500-1000 sq.ft",
      services: ["Essential Detailing", "Ceramic Coating", "Quick Turnaround"],
      roi: "12-18 months",
      requirements: ["Automotive Interest", "Basic Investment", "Dedicated Space"],
    },
    {
      title: "Premium Centre",
      investment: "-",
      area: "1000-1500 sq.ft",
      services: ["Full Detailing", "PPF Installation", "Modifications"],
      roi: "18-24 months",
      requirements: ["Business Experience", "Prime Location", "Quality Team"],
    },
    {
      title: "Flagship Centre",
      investment: "-",
      area: "1500-2500 sq.ft",
      services: ["Complete Services", "Training Academy", "Franchise Support"],
      roi: "24-36 months",
      requirements: ["Extensive Experience", "Premium Investment", "Strategic Location"],
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: "Exclusive Territory Rights",
      description: "Protected territory with no competition from other Motorus centers.",
    },
    {
      icon: Target,
      title: "Marketing Support",
      description: "National advertising campaigns and local marketing assistance.",
    },
    {
      icon: Building,
      title: "Setup Assistance",
      description: "Complete support in center setup, equipment procurement, and staff training.",
    },
    {
      icon: Zap,
      title: "Technology Platform",
      description: "Advanced booking system, CRM, and business management tools.",
    },
    {
      icon: Users,
      title: "Staff Training",
      description: "Comprehensive training programs for your team members.",
    },
    {
      icon: DollarSign,
      title: "Financial Guidance",
      description: "Business planning, financial projections, and loan assistance.",
    },
  ]

  return (
    <section className="pt-32 pb-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-deep-red/20 text-deep-red border-deep-red/30 mb-4">Franchise Opportunity</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partner with <span className="text-deep-red">Motorus</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join India's fastest-growing automotive detailing franchise. Build a profitable business with our proven
            model, comprehensive training, and ongoing support.
          </p>
        </div>

        {/* Why Partner */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Partner with Motorus?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyPartner.map((item, index) => (
              <Card
                key={index}
                className="bg-dark-grey-2 border-deep-red/30 hover:border-deep-red/50 transition-all hover:transform hover:scale-105 text-center h-full"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-deep-red/20 rounded-full">
                      <item.icon className="h-8 w-8 text-deep-red" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Franchise Models */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Franchise Models</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {franchiseModels.map((model, index) => (
              <Card
                key={index}
                className={`bg-dark-grey-2 border-deep-red/30 hover:border-deep-red/50 transition-all hover:transform hover:scale-105 h-full ${
                  index === 1 ? "border-deep-red/50" : ""
                }`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{model.title}</CardTitle>
                  {index === 1 && <Badge className="bg-deep-red text-white mx-auto w-fit">Most Popular</Badge>}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-deep-red mb-2">{model.investment}</div>
                    <div className="text-gray-300">Total Investment</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 text-deep-red mr-2" />
                      <span>Area: {model.area}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <TrendingUp className="h-4 w-4 text-deep-red mr-2" />
                      <span>ROI: {model.roi}</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-white font-semibold mb-2">Services Offered:</h5>
                    <div className="space-y-1">
                      {model.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-3 w-3 text-deep-red mr-2" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-white font-semibold mb-2">Requirements:</h5>
                    <div className="space-y-1">
                      {model.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-3 w-3 text-deep-red mr-2" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="mt-auto w-full bg-deep-red hover:bg-deep-red/80 text-white">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Franchise Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-dark-grey-2 border-deep-red/30 hover:border-deep-red/50 transition-all hover:transform hover:scale-105 h-full"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-2 bg-deep-red/20 rounded-full mr-4 flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-deep-red" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-dark-grey-2 border-deep-red/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Apply for Franchise</CardTitle>
              <p className="text-gray-300">Take the first step towards owning your Motorus franchise</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red"
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
                      className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city" className="text-white mb-2 block">
                      Preferred City *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red"
                      placeholder="Enter preferred city"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="investment" className="text-white mb-2 block">
                      Investment Capacity *
                    </Label>
                    <Select onValueChange={(value) => handleSelectChange("investment", value)}>
                      <SelectTrigger className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red">
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent className="bg-dark-grey-4 border-deep-red/30">
                        <SelectItem value="15-25">₹15-25 Lakhs</SelectItem>
                        <SelectItem value="25-50">₹25-50 Lakhs</SelectItem>
                        <SelectItem value="50-75">₹50-75 Lakhs</SelectItem>
                        <SelectItem value="75+">₹75 Lakhs+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience" className="text-white mb-2 block">
                      Business Experience
                    </Label>
                    <Select onValueChange={(value) => handleSelectChange("experience", value)}>
                      <SelectTrigger className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-dark-grey-4 border-deep-red/30">
                        <SelectItem value="none">No Business Experience</SelectItem>
                        <SelectItem value="1-3">1-3 Years</SelectItem>
                        <SelectItem value="3-5">3-5 Years</SelectItem>
                        <SelectItem value="5+">5+ Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Additional Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red"
                    placeholder="Tell us about your interest in the franchise..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-deep-red hover:bg-deep-red/80 text-white py-3 text-lg">
                  Submit Application
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  Our franchise team will review your application and contact you within 48 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
