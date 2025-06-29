"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, Pause, Star, Award } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  image: string
  features: string[]
  description: string
  rating: number
  certifications: string[]
  isNew?: boolean
  isBestseller?: boolean
}

const products: Product[] = [
  {
    id: "1",
    name: "Kitchen Soap Concentrate",
    category: "Kitchen & Cleaning",
    image: "/kitchen.webp?height=400&width=400",
    features: ["Ultra-concentrated formula", "Advanced grease-cutting", "Food-safe certified"],
    description: "Professional-grade degreasing solution trusted by commercial kitchens worldwide.",
    rating: 4.9,
    certifications: ["ISO 9001", "Food Safe", "Eco-Friendly"],
    isBestseller: true,
  },
  {
    id: "2",
    name: "Hands Washing Liquid Soap",
    category: "Hands wash Solutions",
    image: "/Hand-Wash-Liquid-Green.webp?height=400&width=400",
    features: ["Handcrafted quality", "Gentle on fabrics", "Long-lasting"],
    description: "Traditional soap-making techniques combined with modern cleaning science.",
    rating: 4.8,
    certifications: ["Dermatologically Tested", "Biodegradable"],
    isNew: true,
  },
  {
    id: "3",
    name: "BABY & ADULTS BODY JELLY",
    category: "Personal Hygiene",
    image: "/BABY-JELLY-OLD.png?height=400&width=400",
    features: ["99.9% germ protection", "Moisturizing formula", "Natural botanicals"],
    description: "Premium body jelly designed for both babies and adults, ensuring safety and hydration.",
    rating: 4.7,
    certifications: ["RSB Approved", "Hypoallergenic", "Cruelty-Free"],
    isNew: true,
  },
  {
    id: "4",
    name: "Glycerine Body Lotion",
    category: "Personal Care",
    image: "/zoe-glycerine.jpg?height=400&width=400",
    features: ["24-hour hydration", "Non-greasy formula", "All skin types"],
    description: "Luxurious body lotion with natural glycerine and premium botanical extracts.",
    rating: 4.9,
    certifications: ["Dermatologist Approved", "Hypoallergenic"],
    isBestseller: true,
  },
  {
    id: "5",
    name: "Industrial Degreaser Pro",
    category: "Industrial Cleaning",
    image: "/handwash.jpg?height=400&width=400",
    features: ["Heavy-duty formula", "Fast-acting", "Biodegradable"],
    description: "Professional-strength solution for the most challenging industrial applications.",
    rating: 4.6,
    certifications: ["Industrial Grade", "Environmental Safe"],
  },
  {
    id: "6",
    name: "Toilet Bowl Cleaner Gel",
    category: "Bathroom Essentials",
    image: "/toilet.webp?height=400&width=400",
    features: ["Powerful stain removal", "Fresh scent", "Easy application"],
    description: "Advanced gel formula for deep cleaning and long-lasting freshness in toilets.",
    rating: 4.7,
    certifications: ["EPA Approved", "Non-Toxic"],
    isBestseller: true,
  },
  {
    id: "7",
    name: "Multi-Purpose Cleaner Liquid Soap",
    category: "Home Care",
    image: "/jet-handwash-floral-blue-5L-1.webp?height=400&width=400",
    features: ["Streak-free shine", "Safe for all surfaces", "Citrus scent"],
    description: "Versatile cleaner for kitchens, bathrooms, and more, with a refreshing citrus fragrance.",
    rating: 4.8,
    certifications: ["Eco-Friendly", "Non-Toxic"],
  },
  {
    id: "8",
    name: "Glass Cleaner Spray",
    category: "Home Care",
    image: "/shinex.jpg?height=400&width=400",
    features: ["Crystal clear finish", "Streak-free formula", "Ammonia-free"],
    description: "Professional-grade glass cleaner for spotless windows and mirrors.",
    rating: 4.9,
    certifications: ["EPA Approved", "Non-Toxic"],
  },
  {
    id: "9",
    name: "20L Multipurpose liquid soap lemon 20liters",
    category: "Home Care",
    image: "/multipurpose-liquid-soap-lemon-20liters.jpg?height=400&width=400",
    features: ["Large capacity", "Lemon fragrance", "Multipurpose use"],
    description: "Economical 20L multipurpose liquid soap with a refreshing lemon scent, ideal for various cleaning needs.",
    rating: 4.7,
    certifications: ["Eco-Friendly", "Bulk Pack"],
  },
  {
    id:"10",
    name: " Laundry Detergent Liquid on colored and white clothes",
    category: "Laundry Solutions",
    image: "/jik.webp?height=400&width=400",
    features: ["Color-safe formula", "Stain-fighting power", "Fresh scent"],
    description: "Advanced liquid detergent designed to keep your colored and white clothes looking their best.",
    rating: 4.8,
    certifications: ["Dermatologically Tested", "Biodegradable"],
    isNew: true,
    
  },
  //  hair gel curry styling gel
  {
    id: "11",
    name: "Hair Gel Curry Styling Gel",
    category: "Hair Care",
    image: "/mode-16-new-badge.png?height=400&width=400",
    features: ["Strong hold", "Non-flaking", "Easy to wash out"],
    description: "Professional styling gel for all-day hold and a natural finish.",
    rating: 4.5,
    certifications: ["Dermatologically Tested", "Cruelty-Free"],
    isNew: true,}
]

export function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const currentProduct = products[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title text-navy-900 mb-6">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of personal care and cleaning products, each crafted with precision and
            backed by quality certifications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image and Controls */}
            <div className="relative fade-in-left">
              <div className="relative bg-white p-8 shadow-2xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={currentProduct.image || "/placeholder.svg"}
                    alt={currentProduct.name}
                    width={400}
                    height={400}
                    className="w-full h-96 object-cover product-float"
                  />

                  {/* Product Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {currentProduct.isNew && <Badge className="bg-green-500 text-white px-3 py-1">NEW</Badge>}
                    {currentProduct.isBestseller && (
                      <Badge className="bg-gold-500 text-black px-3 py-1">BESTSELLER</Badge>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{currentProduct.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevProduct}
                    className="h-12 w-12 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextProduct}
                    className="h-12 w-12 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                {/* Auto-play Control */}
                <div className="absolute bottom-4 right-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="h-10 w-10 bg-white/80 backdrop-blur-sm hover:bg-white"
                  >
                    {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Product Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 transition-all duration-300 ${
                      index === currentIndex ? "bg-gold-500 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6 fade-in-right">
              <div>
                <Badge variant="outline" className="mb-3 text-gold-600 border-gold-600">
                  {currentProduct.category}
                </Badge>
                <h3 className="text-3xl font-bold text-navy-900 mb-4">{currentProduct.name}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{currentProduct.description}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {currentProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gold-500 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              {/* <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-3">
                  {currentProduct.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center bg-gray-100 px-3 py-2">
                      <Award className="h-4 w-4 text-gold-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="modern-button text-black font-semibold px-8 py-3">Request Quote</Button>
                <Button
                  variant="outline"
                  className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8 py-3 bg-transparent"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
