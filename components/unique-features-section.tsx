"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Leaf, Users, Globe } from "lucide-react"

const slides = [
  {
    heading: "Why Choose Peto Group",
    text: "We combine traditional craftsmanship with modern technology to deliver products that exceed international standards while supporting community development.",
   
    highlightHeading: "Certified Excellence",
    highlightText:
      "ISO certified manufacturing processes ensure consistent quality and international compliance in every product batch.",
   
  },
  {
    heading: "Sustainable Manufacturing",
    text: "Environmentally responsible manufacturing with biodegradable formulations and sustainable packaging solutions that protect our planet for future generations.",
   
    highlightHeading: "Sustainable Practices",
    highlightText:
      "Environmentally responsible manufacturing with biodegradable formulations and sustainable packaging solutions.",
   
  },
  {
    heading: "Community Development",
    text: "Creating meaningful employment opportunities and contributing to Rwanda's economic development through local manufacturing excellence and skills development.",
  
    highlightHeading: "Community Impact",
    highlightText:
      "Creating meaningful employment opportunities and contributing to Rwanda's economic development through local manufacturing.",
   
  },
  {
    heading: "Global Excellence",
    text: "Meeting international quality benchmarks while maintaining competitive pricing for regional and global markets with uncompromising standards.",
   
    highlightHeading: "Global Standards",
    highlightText:
      "Meeting international quality benchmarks while maintaining competitive pricing for regional and global markets.",
   
  },
]

export default function UniqueFeaturesSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 7000) // Change slide every 7 seconds

    return () => clearInterval(interval)
  }, [])

  const current = slides[index]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Curved Top Edge */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white transform -skew-y-1 origin-top-left"></div>

      {/* Main Content */}
      <div className="relative pt-16 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Section - Content */}
            <div className="lg:w-1/2 z-10 space-y-8">
              <div className="space-y-6 fade-in-up">
                <div className="inline-flex items-center space-x-2 font-semibold text-sm tracking-wider uppercase" style={{ color: '#d4af37' }}>
                  {/* <IconComponent className="h-5 w-5" /> */}
                  <span>Manufacturing Excellence</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#1a2332' }}>{current.heading}</h2>

                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">{current.text}</p>

               
              </div>

              {/* Progress Indicators */}
              <div className="flex space-x-3 mt-12">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === index
                        ? "w-12 gold-gradient"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Section - Highlight Circle */}
            <div className="lg:w-1/2 relative flex flex-col items-center justify-center mt-10 lg:mt-0">
              {/* Main Circle Background with Curved Design */}
              <div className="relative">
                {/* Outer Decorative Ring */}
                <div className="absolute inset-0 w-96 h-96 rounded-full animate-pulse" style={{ 
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(184, 134, 11, 0.2))' 
                }}></div>

                {/* Main Background Circle */}
                <div className="relative w-80 h-80 luxury-gradient rounded-full shadow-2xl overflow-hidden">
                  {/* Curved Edge Effect */}
                  <div className="absolute top-0 right-0 w-full h-full">
                    <div className="absolute top-8 right-8 w-16 h-16 rounded-full" style={{ 
                      backgroundColor: 'rgba(212, 175, 55, 0.2)' 
                    }}></div>
                    <div className="absolute bottom-12 left-12 w-8 h-8 rounded-full" style={{ 
                      backgroundColor: 'rgba(212, 175, 55, 0.3)' 
                    }}></div>
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
                    <div className="text-center space-y-6">
                      {/* <IconComponent className="h-12 w-12 mx-auto" style={{ color: '#d4af37' }} /> */}

                      <h3 className="text-2xl font-bold" style={{ color: '#d4af37' }}>{current.highlightHeading}</h3>

                      <p className="text-gray-200 text-base leading-relaxed max-w-xs">{current.highlightText}</p>
                    </div>
                  </div>
                </div>

                {/* Highlight Number Circle */}
                {/* <div className="absolute -bottom-8 -right-8 z-20">
                  <div className="w-32 h-32 gold-gradient rounded-full shadow-xl flex flex-col items-center justify-center border-4 border-white" style={{ color: '#1a2332' }}>
                    <span className="text-2xl font-bold leading-none">{current.highlightNumber}</span>
                    <p className="text-xs font-semibold text-center px-2 mt-1 leading-tight">{current.highlightNote}</p>
                  </div>
                </div> */}

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full animate-bounce delay-1000" style={{ 
                  backgroundColor: 'rgba(212, 175, 55, 0.4)' 
                }}></div>
                <div className="absolute -bottom-4 left-8 w-6 h-6 rounded-full animate-bounce delay-2000" style={{ 
                  backgroundColor: 'rgba(212, 175, 55, 0.6)' 
                }}></div>
                <div className="absolute top-1/2 -right-6 w-4 h-4 rounded-full animate-bounce delay-500" style={{ 
                  backgroundColor: 'rgba(212, 175, 55, 0.5)' 
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 transform skew-y-1 origin-bottom-right"></div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 rounded-full blur-xl" style={{ 
        backgroundColor: 'rgba(212, 175, 55, 0.05)' 
      }}></div>
      <div className="absolute bottom-1/4 right-8 w-48 h-48 rounded-full blur-xl" style={{ 
        backgroundColor: 'rgba(26, 35, 50, 0.05)' 
      }}></div>
    </section>
  )
}