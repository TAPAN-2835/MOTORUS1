"use client"

import { PropsWithChildren, useEffect, useRef } from "react"
import { useLenis } from "@/lib/useLenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function ClientRoot({ children }: PropsWithChildren) {
  const prefersReducedMotion = useReducedMotion()
  const lenis = useLenis()
  const hasRunRef = useRef(false)

  useEffect(() => {
    if (hasRunRef.current) return
    hasRunRef.current = true

    if (prefersReducedMotion) {
      return
    }

    // Keep ScrollTrigger in sync with Lenis
    const cleanupFns: Array<() => void> = []
    if (lenis.current && (lenis.current as any).on) {
      const onScroll = () => ScrollTrigger.update()
      ;(lenis.current as any).on("scroll", onScroll)
      cleanupFns.push(() => (lenis.current as any)?.off?.("scroll", onScroll))
    }

    // Page load animations: navbar slide-in, hero text fade/slide, bg video scale in
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.from(".site-nav", { y: -80, opacity: 0, duration: 0.6 })
      .from(
        [".hero-heading", ".hero-subheading", ".hero-ctas"],
        { y: 30, opacity: 0, duration: 0.6, stagger: 0.2 },
        "<+0.1"
      )
      .from(".hero-video-scale", { scale: 1.05, duration: 0.8 }, "<")

    // Magnetic buttons hover effect

    const initMagnetic = (button: HTMLElement) => {
      const strength = 20
      const onMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect()
        const relX = e.clientX - rect.left - rect.width / 2
        const relY = e.clientY - rect.top - rect.height / 2
        const x = (relX / (rect.width / 2)) * strength
        const y = (relY / (rect.height / 2)) * strength
        gsap.to(button, { x, y, duration: 0.3, ease: "power3.out" })
      }
      const onEnter = () => {
        gsap.to(button, { boxShadow: "0 0 20px rgba(220, 38, 38, 0.6)", duration: 0.3 })
      }
      const onLeave = () => {
        gsap.to(button, { x: 0, y: 0, boxShadow: "none", duration: 0.4, ease: "power3.out" })
      }
      button.addEventListener("mousemove", onMove)
      button.addEventListener("mouseenter", onEnter)
      button.addEventListener("mouseleave", onLeave)
      return () => {
        button.removeEventListener("mousemove", onMove)
        button.removeEventListener("mouseenter", onEnter)
        button.removeEventListener("mouseleave", onLeave)
      }
    }

    const magneticButtons = Array.from(document.querySelectorAll<HTMLElement>(".magnetic-btn"))
    magneticButtons.forEach((btn) => cleanupFns.push(initMagnetic(btn)))

    // Parallax background video in hero
    const heroSection = document.querySelector<HTMLElement>("section#home")
    const heroVideo = document.querySelector<HTMLElement>(".hero-video")
    if (heroSection && heroVideo) {
      gsap.to(heroVideo, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    return () => {
      cleanupFns.forEach((fn) => fn())
      ScrollTrigger.getAll().forEach((t) => t.kill())
      tl.kill()
    }
  }, [prefersReducedMotion, lenis])

  return children as JSX.Element
}


