import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TrainingSection from "@/components/training-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
// adding contact and footer sections
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="bg-primary-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainingSection />
      <GallerySection />
      <TestimonialsSection />
      {/* added contact and footer sections */}
      <ContactSection />
      <Footer />
    </main>
  )
}
