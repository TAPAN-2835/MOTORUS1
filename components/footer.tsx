import { Phone, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Training", href: "#training" },
    { name: "Franchise", href: "#franchise" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Ceramic Coating (3 Years Warranty)",
    "Graphene Coating 10H (5 Years Warranty)",
    "Paint Protection Film (5 Years - Lifetime Warranty)",
    "Other Detailing Services",
    "Custom Wraps",
    "Conversion Kit Upgrades",
    "Interior Upgrades",
    "Full Body Paint",
  ]

  const branches = [
    { city: "Vaishnodevi Circle (Home)", timings: "Mon-Sun: 9:00 AM - 8:00 PM", phone: "+91 98765 43210" },
    { city: "Gota", timings: "Mon-Sun: 9:00 AM - 8:00 PM", phone: "+91 98765 43211" },
    { city: "Motera", timings: "Mon-Sun: 9:00 AM - 8:00 PM", phone: "+91 98765 43212" },
    { city: "Hebatpur", timings: "Mon-Sun: 9:00 AM - 8:00 PM", phone: "+91 98765 43213" },
  ]

  return (
    <footer className="bg-pure-black border-t border-deep-red/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white">
                MOTOR<span className="text-deep-red">US</span>
              </h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                India's premier automotive detailing and modification brand. Transforming vehicles with luxury care,
                professional training, and franchise opportunities nationwide.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-dark-grey-2 border border-deep-red/30 rounded-lg hover:bg-deep-red hover:border-deep-red transition-all"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-dark-grey-2 border border-deep-red/30 rounded-lg hover:bg-deep-red hover:border-deep-red transition-all"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-dark-grey-2 border border-deep-red/30 rounded-lg hover:bg-deep-red hover:border-deep-red transition-all"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-dark-grey-2 border border-deep-red/30 rounded-lg hover:bg-deep-red hover:border-deep-red transition-all"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-deep-red transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Timings */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Branch Timings</h4>
            <div className="space-y-4">
              {branches.map((branch) => (
                <div key={branch.city} className="border-l-2 border-deep-red/30 pl-4">
                  <h5 className="text-white font-medium">{branch.city}</h5>
                  <div className="flex items-center text-gray-300 text-sm mt-1">
                    <Clock className="h-4 w-4 text-deep-red mr-2" />
                    <span>{branch.timings}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm mt-1">
                    <Phone className="h-4 w-4 text-deep-red mr-2" />
                    <a href={`tel:${branch.phone}`} className="hover:text-deep-red transition-colors">
                      {branch.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-deep-red/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Motorus. All rights reserved. | Luxury Automotive Care & Modifications
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-deep-red transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-deep-red transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-deep-red transition-colors">
                Franchise Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
