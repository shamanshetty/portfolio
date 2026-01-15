import type React from "react"
import type { Metadata, Viewport } from "next"
import { IBM_Plex_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Shaman Shetty — AI & Full-Stack Engineer",
  description: "Software Developer specializing in AI systems, computer vision, and full-stack development. Building intelligent solutions from data pipelines to scalable web applications.",
  keywords: ["AI", "Machine Learning", "Computer Vision", "Full-Stack Development", "Next.js", "TensorFlow", "PyTorch", "Software Engineer"],
  authors: [{ name: "Shaman Shetty" }],
  creator: "Shaman Shetty",
  openGraph: {
    title: "Shaman Shetty — AI & Full-Stack Engineer",
    description: "Software Developer specializing in AI systems, computer vision, and full-stack development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaman Shetty — AI & Full-Stack Engineer",
    description: "Software Developer specializing in AI systems, computer vision, and full-stack development.",
    creator: "@shamanshetty",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'Next.js'
}

export const viewport: Viewport = {
  themeColor: "#0d0d14",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} ${instrumentSerif.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
