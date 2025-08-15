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
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Calendar,
} from "lucide-react"

export default function ContactSection() {
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    vehicle: "",
    date: "",
    time: "",
    message: "",
  })

  const [branchQuery, setBranchQuery] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setBookingForm({
      ...bookingForm,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", bookingForm)
  }

  const branches = [
    {
      name: "Motorus (Home) - Vaishnodevi Circle",
      address: "Vaishnodevi Circle, Ahmedabad, Gujarat",
      phone: "+91 98765 43210",
      whatsapp: "+91 98765 43210",
      email: "vaishnodevi@motorus.in",
      timings: "Mon-Sun: 9:00 AM - 8:00 PM",
      mapUrl:
        "https://maps.google.com",
    },
    {
      name: "Motorus - Gota",
      address: "Gota, Ahmedabad, Gujarat",
      phone: "+91 98765 43211",
      whatsapp: "+91 98765 43211",
      email: "gota@motorus.in",
      timings: "Mon-Sun: 9:00 AM - 8:00 PM",
      mapUrl:
        "https://maps.google.com",
    },
    {
      name: "Motorus - Motera",
      address: "Motera, Ahmedabad, Gujarat",
      phone: "+91 98765 43212",
      whatsapp: "+91 98765 43212",
      email: "motera@motorus.in",
      timings: "Mon-Sun: 9:00 AM - 8:00 PM",
      mapUrl:
        "https://maps.google.com",
    },
    {
      name: "Motorus - Hebatpur",
      address: "Hebatpur, Ahmedabad, Gujarat",
      phone: "+91 98765 43213",
      whatsapp: "+91 98765 43213",
      email: "hebatpur@motorus.in",
      timings: "Mon-Sun: 9:00 AM - 8:00 PM",
      mapUrl:
        "https://maps.google.com",
    },
  ]

  const services = [
    "Ceramic Coating 9H",
    "Ceramic Coating 10H",
    "Paint Protection Film (PPF)",
    "Interior Detailing",
    "Exterior Detailing",
    "Complete Detailing Package",
    "Vehicle Wraps",
    "Alloy Wheel Upgrades",
    "Interior Modifications",
    "Audio System Upgrades",
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ]

  const filteredBranches = branches.filter((b) => {
    const q = branchQuery.toLowerCase().trim()
    if (!q) return true
    return (
      b.name.toLowerCase().includes(q) ||
      b.address.toLowerCase().includes(q) ||
      b.email.toLowerCase().includes(q)
    )
  })

  return (
    <section id="contact" className="py-20 bg-dark-grey-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-deep-red/20 text-deep-red border-deep-red/30 mb-4">Contact Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-deep-red">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your vehicle? Contact us today to book an appointment or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Branches */}
          <div className="lg:col-span-7 space-y-8">
            <div className="hidden lg:block">
              <Input
                type="text"
                value={branchQuery}
                onChange={(e) => setBranchQuery(e.target.value)}
                placeholder="Search centers by name, area or email..."
                className="bg-dark-grey-4 border-deep-red/30 text-white focus:border-deep-red"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Locations</h3>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {filteredBranches.map((branch, index) => (
                  <Card
                    key={index}
                    className="bg-dark-grey-4 border-deep-red/30 hover:border-deep-red/50 transition-colors"
                  >
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{branch.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start text-gray-300">
                        <MapPin className="h-5 w-5 text-deep-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{branch.address}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center text-gray-300">
                          <Phone className="h-4 w-4 text-deep-red mr-2" />
                          <a href={`tel:${branch.phone}`} className="text-sm hover:text-deep-red transition-colors">
                            {branch.phone}
                          </a>
                        </div>

                        <div className="flex items-center text-gray-300">
                          <MessageCircle className="h-4 w-4 text-deep-red mr-2" />
                          <a
                            href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:text-deep-red transition-colors"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center text-gray-300">
                        <Mail className="h-4 w-4 text-deep-red mr-2" />
                        <a href={`mailto:${branch.email}`} className="text-sm hover:text-deep-red transition-colors">
                          {branch.email}
                        </a>
                      </div>

                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 text-deep-red mr-2" />
                        <span className="text-sm">{branch.timings}</span>
                      </div>

                      {/* Embedded Map */}
                      <div className="mt-4">
                        <div className="w-full h-48 bg-dark-grey-2 rounded-lg overflow-hidden">
                          <iframe
                            src={branch.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${branch.name} Location`}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-dark-grey-4 border border-deep-red/30 rounded-lg hover:bg-deep-red hover:border-deep-red transition-all"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-dark-grey-4 border border-deep-red/30 rounded-lg hover:bg-deep-red hover:border-deep-red transition-all"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-dark-grey-4 border border-deep-red/30 rounded-lg hover:bg-deep-red hover:border-deep-red transition-all"
                >
                  <Twitter className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-dark-grey-4 border border-deep-red/30 rounded-lg hover:bg-deep-red hover:border-deep-red transition-all"
                >
                  <Youtube className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Card className="bg-dark-grey-4 border-deep-red/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <Calendar className="h-6 w-6 text-deep-red mr-2" />
                    Book an Appointment
                  </CardTitle>
                  <p className="text-gray-300">Schedule your vehicle transformation today</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={bookingForm.name}
                          onChange={handleInputChange}
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
                          value={bookingForm.phone}
                          onChange={handleInputChange}
                          className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                          placeholder="Enter your phone"
                        />
                      </div>
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
                        value={bookingForm.email}
                        onChange={handleInputChange}
                        className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service" className="text-white mb-2 block">
                          Service Type *
                        </Label>
                        <Select onValueChange={(value) => handleSelectChange("service", value)}>
                          <SelectTrigger className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent className="bg-dark-grey-2 border-deep-red/30">
                            {services.map((service) => (
                              <SelectItem key={service} value={service} className="text-white hover:bg-deep-red/20">
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="vehicle" className="text-white mb-2 block">
                          Vehicle Details
                        </Label>
                        <Input
                          id="vehicle"
                          name="vehicle"
                          type="text"
                          value={bookingForm.vehicle}
                          onChange={handleInputChange}
                          className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                          placeholder="e.g., BMW X5 2020"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date" className="text-white mb-2 block">
                          Preferred Date *
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          value={bookingForm.date}
                          onChange={handleInputChange}
                          className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div>
                        <Label htmlFor="time" className="text-white mb-2 block">
                          Preferred Time *
                        </Label>
                        <Select onValueChange={(value) => handleSelectChange("time", value)}>
                          <SelectTrigger className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent className="bg-dark-grey-2 border-deep-red/30">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time} className="text-white hover:bg-deep-red/20">
                                {time}
                              </SelectItem>
                            ))}
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
                        value={bookingForm.message}
                        onChange={handleInputChange}
                        className="bg-dark-grey-2 border-deep-red/30 text-white focus:border-deep-red"
                        placeholder="Any specific requirements or questions..."
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-deep-red hover:bg-deep-red/80 text-white py-3 text-lg">
                      Book Appointment
                    </Button>

                    <p className="text-sm text-gray-400 text-center">
                      We'll confirm your appointment within 2 hours during business hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
