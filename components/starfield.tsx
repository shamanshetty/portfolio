"use client"

import { useEffect, useRef } from "react"

export function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Generate stars and filter out those in the center text area
  const allStars = Array.from({ length: 150 }, (_, i) => {
    const left = (i * 13 + 7) % 100
    const top = (i * 19 + 11) % 100
    return {
      id: i,
      left: `${left}%`,
      top: `${top}%`,
      leftNum: left,
      topNum: top,
      size: i % 7 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
      animationClass: i % 5 === 0 ? "star-fast" : i % 3 === 0 ? "star-slow" : "star",
      delay: `${(i * 0.2) % 5}s`,
      opacity: i % 4 === 0 ? 0.3 : 0.15,
    }
  })

  // Reduce stars in center area but keep some (30% density in center vs 100% on edges)
  const stars = allStars.filter(star => {
    // If star is in center area (25-75%), only keep 30% of them
    if (star.leftNum >= 25 && star.leftNum <= 75) {
      return star.id % 10 < 1.5 // Keep ~30% in center
    }
    return true  // Keep all stars on edges
  })

  // Larger ambient stars - reduce in center, remove big stars completely from center
  const allBigStars = Array.from({ length: 20 }, (_, i) => {
    const left = (i * 29 + 5) % 100
    const top = (i * 37 + 3) % 100
    return {
      id: i + 200,
      left: `${left}%`,
      top: `${top}%`,
      leftNum: left,
      topNum: top,
      size: 4,
      delay: `${(i * 0.5) % 4}s`,
    }
  })

  // Remove all big stars from center text area (25-75%)
  const bigStars = allBigStars.filter(star => {
    return star.leftNum < 15 || star.leftNum > 85
  })

  // Interactive parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const stars = containerRef.current.querySelectorAll('[data-star]')
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      // Calculate normalized position (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2
      const y = (clientY / innerHeight - 0.5) * 2
      
      stars.forEach((star, index) => {
        const depth = index % 3 === 0 ? 1 : index % 2 === 0 ? 0.5 : 0.25
        const moveX = x * 15 * depth // Uses --parallax-strength from CSS
        const moveY = y * 15 * depth
        
        ;(star as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Small twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          data-star
          className={`absolute rounded-full bg-foreground ${star.animationClass} transition-transform duration-200 ease-out`}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Larger glowing stars */}
      {bigStars.map((star) => (
        <div
          key={star.id}
          data-star
          className="absolute rounded-full bg-primary/15 star-slow blur-[0.5px] transition-transform duration-200 ease-out"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Subtle nebula gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/[0.01] rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-500/[0.01] rounded-full blur-3xl" />
    </div>
  )
}
