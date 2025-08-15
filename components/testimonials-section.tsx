"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Send } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    rating: 5,
    message: "",
  })

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      location: "Mumbai",
      rating: 5,
      service: "Ceramic Coating",
      message:
        "Absolutely outstanding service! My BMW looks brand new after the ceramic coating. The team was professional and the results exceeded my expectations.",
      image: "/placeholder.svg?height=80&width=80",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Delhi",
      rating: 5,
      service: "PPF Installation",
      message:
        "The PPF installation on my Audi was flawless. The invisible protection gives me peace of mind, and the finish looks amazing. Highly recommended!",
      image: "/placeholder.svg?height=80&width=80",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Amit Kumar",
      location: "Bangalore",
      rating: 5,
      service: "Complete Detailing",
      message:
        "Best detailing service in the city! They transformed my 5-year-old car to look like it just came out of the showroom. Worth every penny!",
      image: "/placeholder.svg?height=80&width=80",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Hyderabad",
      rating: 5,
      service: "Interior Detailing",
      message:
        "The interior detailing service was exceptional. They removed stains I thought were permanent and made my car smell fresh again. Professional team!",
      image: "/placeholder.svg?height=80&width=80",
      date: "1 week ago",
    },
  ]

  const videoTestimonials = [
    {
      id: 1,
      name: "Vikram Singh",
      service: "Franchise Partner",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "2:30",
    },
    {
      id: 2,
      name: "Anita Gupta",
      service: "Training Graduate",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "1:45",
    },
    {
      id: 3,
      name: "Rohit Mehta",
      service: "Regular Customer",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "2:15",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedbackForm({
      ...feedbackForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleRatingChange = (rating: number) => {
    setFeedbackForm({
      ...feedbackForm,
      rating,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Feedback submitted:", feedbackForm)
    // Reset form
    setFeedbackForm({
      name: "",
      email: "",
      rating: 5,
      message: "",
    })
  }

  const renderStars = (rating: number, interactive = false, size = "h-5 w-5") => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-400"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={interactive ? () => handleRatingChange(star) : undefined}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-deep-red/20 text-deep-red border-deep-red/30 mb-4">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-deep-red">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers about their experience with Motorus.
          </p>
        </div>

        {/* Text Testimonials Carousel */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-dark-grey-2 border-deep-red/30">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-deep-red/30"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-gray-400">{testimonials[currentTestimonial].location}</p>
                      </div>
                      <div className="text-right">
                        {renderStars(testimonials[currentTestimonial].rating)}
                        <p className="text-sm text-gray-400 mt-1">{testimonials[currentTestimonial].date}</p>
                      </div>
                    </div>
                    <Badge className="bg-deep-red/20 text-deep-red border-deep-red/30 mb-4">
                      {testimonials[currentTestimonial].service}
                    </Badge>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-deep-red/30" />
                      <p className="text-gray-300 text-lg leading-relaxed pl-6">
                        {testimonials[currentTestimonial].message}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-deep-red hover:bg-deep-red/80 text-white rounded-full p-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-deep-red hover:bg-deep-red/80 text-white rounded-full p-2"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-deep-red" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Video Testimonials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videoTestimonials.map((video) => (
              <Card
                key={video.id}
                className="bg-dark-grey-2 border-deep-red/30 hover:border-deep-red/50 transition-all hover:transform hover:scale-105 cursor-pointer group h-full"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={`${video.name} testimonial`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-3 bg-deep-red/90 rounded-full group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-semibold">{video.name}</h4>
                      <p className="text-gray-300 text-sm">{video.service}</p>
                      <Badge className="bg-blue-600 text-white text-xs mt-1">{video.duration}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feedback Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-dark-grey-2 border-deep-red/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Submit Your Feedback</h3>
                <p className="text-gray-300">Share your experience with Motorus and help us improve our services</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={feedbackForm.name}
                      onChange={handleInputChange}
                      className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red"
                      placeholder="Enter your name"
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
                      value={feedbackForm.email}
                      onChange={handleInputChange}
                      className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white mb-3 block">Your Rating *</Label>
                  {renderStars(feedbackForm.rating, true, "h-8 w-8")}
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Your Feedback *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={feedbackForm.message}
                    onChange={handleInputChange}
                    className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red"
                    placeholder="Tell us about your experience with Motorus..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-deep-red hover:bg-deep-red/80 text-white py-3 text-lg">
                  <Send className="h-5 w-5 mr-2" />
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
