"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: pathname === "/franchise" ? "/#about" : "#about" },
    { name: "Services", href: pathname === "/franchise" ? "/#services" : "#services" },
    { name: "Training", href: pathname === "/franchise" ? "/#training" : "#training" },
    { name: "Franchise", href: "/franchise" },
    { name: "Gallery", href: pathname === "/franchise" ? "/#gallery" : "#gallery" },
    { name: "Contact", href: pathname === "/franchise" ? "/#contact" : "#contact" },
  ]

  return (
    <nav className="site-nav fixed top-0 left-0 right-0 z-50 bg-primary-black/95 backdrop-blur-sm border-b border-deep-red/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-deep-red transition-colors">
              MOTOR<span className="text-deep-red">US</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-deep-red transition-colors duration-300 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-300">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 98765 43210</span>
            </div>
              <Button className="magnetic-btn bg-deep-red hover:bg-deep-red/80 text-white">Book Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-deep-red transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-grey-2 rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-deep-red block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <Button className="magnetic-btn w-full bg-deep-red hover:bg-deep-red/80 text-white">Book Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
