import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import ClientRoot from "@/components/client-root"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Motorus - Luxury Automotive Detailing & Modifications",
  description:
    "Premium automotive detailing, ceramic coating, PPF, and modification services. Professional training and franchise opportunities available.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <body className="font-sans bg-primary-black text-white">
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  )
}
