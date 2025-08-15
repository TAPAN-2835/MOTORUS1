"use client"

import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      // Respect reduced motion users: do not initialize Lenis
      return
    }

    const lenis = new Lenis({
      // These options mirror the requested behavior
      smooth: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenisRef.current = lenis

    // Disable native smooth behavior to avoid conflicts
    try {
      document.documentElement.style.scrollBehavior = "auto"
    } catch {}

    const raf = (time: number) => {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return lenisRef
}


