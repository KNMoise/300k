"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Download,
  Info,
  Shield,
  Droplets,
  Sparkles,
  Award,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductsPage() {
  // Header carousel images
  const headerImages = [
    {
      src: "/clean.jpg",
      title: "Kitchen Excellence",
      subtitle: "Professional-grade cleaning solutions",
    },
    {
      src: "/laundry.jpg",
      title: "Laundry Perfection",
      subtitle: "Premium fabric care formulations",
    },
    {
      src: "/movit.jpeg",
      title: "Personal Hygiene",
      subtitle: "Luxury antibacterial protection",
    },
    {
      src: "/100naturalglycerin.jpg",
      title: "Personal Care",
      subtitle: "Indulgent skincare solutions",
    },
    {
      src: "/Shampoo.png",
      title: "Hair Care",
      subtitle: "Nourishing hair treatments",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % headerImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [headerImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % headerImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + headerImages.length) % headerImages.length)
  }

  const productCategories = [
    {
      id: "kitchen-cleaning",
      name: "Kitchen & Household Excellence",
      description: "Professional-grade cleaning solutions that bring restaurant-quality cleanliness to your home",
      theme: "kitchen-theme",
      color: "slate",
      icon: Shield,
      products: [
        {
          name: "Kitchen Soap Concentrate",
          image: "/clean.jpg?height=400&width=400",
          description: "Heavy-duty degreasing formula crafted for the most demanding commercial and home kitchens",
          features: [
            "Ultra-concentrated formula",
            "Advanced grease-cutting technology",
            "Food-safe certified ingredients",
          ],
          usage:
            "Dilute 1:10 with water for general cleaning, 1:5 for heavy grease removal. Apply with confidence knowing our formula is restaurant-tested.",
          safety:
            "Wear protective gloves when handling concentrate. Store in cool, dry place away from children. Non-toxic when used as directed.",
          applications: [
            "Professional kitchen surfaces",
            "Commercial cookware",
            "Industrial equipment",
            "Home kitchen deep cleaning",
          ],
          luxury: true,
        },
        {
          name: "Multi-Surface Luxury Cleaner",
          image: "/dish.jpg?height=400&width=400",
          description: "Versatile cleaning solution that delivers exceptional results on all household surfaces",
          features: ["All-surface compatibility", "Signature luxury fragrance", "Quick-drying streak-free formula"],
          usage:
            "Spray directly on surface, allow 30 seconds contact time, wipe with premium microfiber cloth for best results.",
          safety:
            "Safe for food contact surfaces when used as directed. Eco-friendly formulation with biodegradable ingredients.",
          applications: ["Granite countertops", "Stainless steel appliances", "Glass surfaces", "Fine furniture"],
          luxury: true,
        },
        {
          name: "Luxury Glass Cleaner",
          image: "/glass.jpg?height=400&width=400",
          description: "Crystal-clear shine with streak-free finish, perfect for windows and mirrors",
          features: ["Ammonia-free formula", "Streak-free shine", "Professional-grade performance"],
          usage:
            "Spray directly onto glass surface, wipe with a clean, dry microfiber cloth. For best results, use in indirect sunlight.",
          safety:
            "Avoid contact with eyes. If contact occurs, rinse immediately with water. Keep out of reach of children.",
          applications: ["Windows", "Mirrors", "Glass doors", "Automotive glass"],
          luxury: true,
        },
      ],
    },
    {
      id: "laundry",
      name: "Laundry Perfection",
      description: "Transform your laundry experience with premium formulations that preserve and enhance",
      theme: "laundry-theme",
      color: "blue",
      icon: Sparkles,
      products: [
        {
          name: "Washing Baby Soap Liquid ",
          image: "/laundry.jpg?height=400&width=400",
          description: "Handcrafted soap bar combining traditional techniques with modern cleaning science",
          features: ["Long-lasting premium bar", "Gentle on luxury fabrics", "Superior stain removal power"],
          usage:
            "Wet soap bar with warm water, create rich lather, apply to stains, wash as normal. Perfect for delicate and luxury garments.",
          safety: "Dermatologically tested. Avoid contact with eyes. Safe for sensitive skin when used as directed.",
          applications: ["Hand washing delicates", "Pre-treatment of stains", "Luxury fabric care", "Travel laundry"],
          luxury: true,
        },
        {
          name: "High-Efficiency Powder Detergent",
          image: "/samplea.jpg?height=400&width=400",
          description:
            "Advanced enzyme technology delivers exceptional cleaning power while protecting fabric integrity",
          features: ["Enzyme-enhanced formula", "Color protection technology", "Signature fresh scent"],
          usage:
            "Use 1 cup for standard load, 1.5 cups for heavily soiled items. Works effectively in all water temperatures.",
          safety:
            "Keep container sealed and dry. Use provided measuring cup for accurate dosing. Store away from moisture.",
          applications: ["Machine washing", "Pre-soaking", "Heavy-duty cleaning", "Commercial laundry"],
          luxury: true,
        },
        {
          name: "Premium Liquid Detergent",
          image: "/jik.jpg?height=400&width=400",
          description: "Luxury liquid formula that delivers superior cleaning while adding subtle fabric conditioning",
          features: ["Pre-dissolved luxury formula", "Cold water effectiveness", "Built-in fabric softening"],
          usage: "Use cap to measure: 1 cap for standard load, 1.5 caps for large or heavily soiled loads.",
          safety: "Do not mix with bleach or other chemicals. Store in original container in cool, dry place.",
          applications: ["All temperature washing", "Delicate cycles", "Quick wash programs", "Luxury fabric care"],
          luxury: true,
        },
        {
          name: "Luxury Fabric Softener",
          image: "/20ljik.jpg?height=400&width=400",
          description: "Premium fabric softener that enhances softness and adds a touch of luxury to every wash",
          features: ["Long-lasting softness", "Signature luxury fragrance", "Static control technology"],
          usage:
            "Add 1/2 cup to final rinse cycle for standard loads, 3/4 cup for large or heavily soiled items. Compatible with all washing machines.",
          safety:
            "Keep out of reach of children. Do not ingest. Avoid contact with eyes. If contact occurs, rinse thoroughly with water.",
          applications: ["All fabric types", "Luxury linens", "Delicate garments", "Every wash for added luxury"],
          luxury: true,
        },
      ],
    },
    {
      id: "personal-hygiene",
      name: "Personal Hygiene Luxury",
      description: "Elevate your daily hygiene routine with naturally-inspired formulations",
      theme: "hygiene-theme",
      color: "forest",
      icon: Leaf,
      products: [
        {
          name: "Antibacterial Luxury Soap",
          image: "/movit.jpeg?height=400&width=400",
          description: "Premium antibacterial protection with moisturizing botanicals for daily luxury",
          features: ["99.9% germ elimination", "Moisturizing botanical blend", "Long-lasting protection"],
          usage:
            "Create rich lather with warm water, wash thoroughly for 20 seconds, rinse completely. Perfect for daily use.",
          safety:
            "For external use only. Discontinue if skin irritation occurs. Dermatologically tested for sensitive skin.",
          applications: ["Daily bathing ritual", "Hand hygiene", "Personal care routine", "Healthcare environments"],
          luxury: false,
        },
        {
          name: "Professional Hand Wash Solution",
          image: "/handwash.jpg?height=400&width=400",
          description: "Hospital-grade hand sanitizing solution with luxury moisturizing complex",
          features: ["Quick-acting antimicrobial", "Luxury moisturizing agents", "Sophisticated fragrance profile"],
          usage: "Apply 1-2 pumps to dry hands, rub thoroughly for 20 seconds until dry. No water required.",
          safety: "For external use only. Keep away from eyes and open flames. Flammable until dry.",
          applications: ["Healthcare facilities", "Food service industry", "Office environments", "Personal hygiene"],
          luxury: true,
        },
      ],
    },
    {
      id: "personal-care",
      name: "Personal Care Indulgence",
      description: "Indulge in premium personal care where luxury meets exceptional functionality",
      theme: "care-theme",
      color: "gold",
      icon: Award,
      products: [
        {
          name: "Glycerine-Enriched Body Lotion",
          image: "/100naturalglycerin.jpg?height=400&width=400",
          description: "Luxurious body lotion with natural glycerine and premium botanical extracts",
          features: ["24-hour deep hydration", "Non-greasy silk finish", "Suitable for all skin types"],
          usage:
            "Apply generously to clean, dry skin. Massage in circular motions until fully absorbed. Use daily for best results.",
          safety:
            "For external use only. Patch test recommended for sensitive skin. Dermatologically approved formula.",
          applications: ["Daily moisturizing ritual", "Dry skin treatment", "After-sun care", "Luxury spa treatments"],
          luxury: false,
        },
        {
          name: "Nourishing Hair Shampoo",
          image: "/Shampoo.png?height=400&width=400",
          description: "Gentle cleansing with essential nutrients and luxury conditioning complex",
          features: ["Sulfate-free formula", "Vitamin-enriched complex", "Color-safe technology"],
          usage:
            "Apply to wet hair, massage gently into scalp, work through lengths, rinse thoroughly. Follow with conditioner for optimal results.",
          safety: "Avoid contact with eyes. If contact occurs, rinse immediately with water. Safe for daily use.",
          applications: ["Daily hair care", "All hair types", "Color-treated hair", "Professional salon use"],
          luxury: false,
        },
        {
          name: "Professional Hair Styling Gel",
          image: "/hairgel.webp?height=400&width=400",
          description: "Strong hold styling gel with luxury finish and easy wash-out formula",
          features: ["Long-lasting professional hold", "Non-flaking formula", "Easy water-soluble removal"],
          usage: "Apply to damp hair, distribute evenly, style as desired. Builds with additional applications.",
          safety: "For external use only. Keep away from eyes. Wash hands after application.",
          applications: ["Daily styling", "Special occasions", "Professional styling", "All hair types"],
          luxury: false,
        },
      ],
    },
    {
      id: "industrial",
      name: "Industrial Strength Solutions",
      description: "Engineered for demanding commercial and industrial applications",
      theme: "industrial-theme",
      color: "navy",
      icon: Shield,
      products: [
        {
          name: "Heavy-Duty Industrial Degreaser",
          image: "/placeholder.svg?height=400&width=400",
          description: "Professional-strength degreasing solution for the most challenging industrial applications",
          features: ["Maximum strength formula", "Fast-acting technology", "Biodegradable components"],
          usage:
            "Dilute 1:5 for heavy grease, 1:10 for maintenance cleaning. Apply, allow contact time, rinse thoroughly.",
          safety:
            "Wear protective equipment including gloves and eye protection. Ensure adequate ventilation during use.",
          applications: [
            "Manufacturing facilities",
            "Automotive workshops",
            "Food processing plants",
            "Heavy machinery",
          ],
          luxury: false,
        },
        {
          name: "Commercial Floor Cleaner",
          image: "/placeholder.svg?height=400&width=400",
          description: "High-performance floor cleaning concentrate designed for commercial environments",
          features: ["No-rinse convenience", "Anti-slip properties", "Professional-grade scent"],
          usage: "Mix 1:40 with water for mopping solution. Apply with mop or auto-scrubber, no rinsing required.",
          safety: "Use in well-ventilated areas. Wear gloves when handling concentrate. Keep away from children.",
          applications: ["Office buildings", "Retail spaces", "Healthcare facilities", "Educational institutions"],
          luxury: false,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Image Carousel Header */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Image Slider */}
        <div className="relative w-full h-full">
          {headerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-4">
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <Button asChild variant="ghost" size="sm" className="text-white hover:bg-white/10 backdrop-blur-sm">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Return Home
                </Link>
              </Button>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-4 fade-in-up">
              Our Premium
              <span className="text-gold-400 block">Collection</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8 fade-in-up delay-200">
              {headerImages[currentImageIndex].subtitle}
            </p>

            {/* Current Image Info */}
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full inline-block fade-in-up delay-300">
              <span className="text-lg font-semibold">{headerImages[currentImageIndex].title}</span>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {headerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-gold-400 w-8" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Product Categories with Luxury Styling */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Explore Our Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of premium personal care and cleaning products, each meticulously crafted
              to deliver exceptional quality and performance.
            </p>
          </div>

          <Tabs defaultValue="kitchen-cleaning" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12 bg-white shadow-lg rounded-xl p-2">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-xs lg:text-sm font-medium data-[state=active]:bg-gold-gradient data-[state=active]:text-navy-900 transition-all duration-300"
                >
                  {category.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="fade-in-up">
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-${category.color}-100 p-3 rounded-xl`}>
                      <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-navy-900">{category.name}</h2>
                      <p className="text-lg text-navy-600 mt-2">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
                  {category.products.map((product, index) => (
                    <Card
                      key={index}
                      className={`luxury-card ${category.theme} border-0 shadow-xl overflow-hidden fade-in-up stagger-${index + 1}`}
                    >
                      <CardHeader className="p-0 relative">
                        <div className="relative overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                          />
                          {product.luxury && (
                            <div className="absolute top-4 right-4 bg-gold-gradient text-navy-900 px-3 py-1 rounded-full backdrop-blur-sm">
                              <Award className="h-4 w-4 inline mr-1" />
                              <span className="text-xs font-bold">LUXURY</span>
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="p-8">
                        <CardTitle className="text-2xl mb-3 text-navy-900">{product.name}</CardTitle>
                        <CardDescription className="text-navy-600 mb-6 text-base leading-relaxed">
                          {product.description}
                        </CardDescription>

                        <div className="space-y-6">
                          {/* Features */}
                          <div>
                            <h4 className="font-semibold text-navy-900 mb-3 flex items-center">
                              <Sparkles className="h-5 w-5 mr-2 text-gold-500" />
                              Premium Features
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {product.features.map((feature, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className={`text-xs bg-${category.color}-50 text-${category.color}-700 border-${category.color}-200`}
                                >
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Usage Instructions */}
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="usage" className="border-navy-200">
                              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                                <div className="flex items-center">
                                  <Info className="h-5 w-5 mr-2 text-blue-500" />
                                  Professional Usage Instructions
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="text-sm text-navy-600 leading-relaxed pt-2">
                                {product.usage}
                              </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="safety" className="border-navy-200">
                              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                                <div className="flex items-center">
                                  <Shield className="h-5 w-5 mr-2 text-red-500" />
                                  Safety & Handling
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="text-sm text-navy-600 leading-relaxed pt-2">
                                {product.safety}
                              </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="applications" className="border-navy-200">
                              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                                <div className="flex items-center">
                                  <Droplets className="h-5 w-5 mr-2 text-green-500" />
                                  Recommended Applications
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pt-2">
                                <ul className="text-sm text-navy-600 space-y-2">
                                  {product.applications.map((app, idx) => (
                                    <li key={idx} className="flex items-center">
                                      <div className={`w-2 h-2 bg-${category.color}-400 rounded-full mr-3`}></div>
                                      {app}
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>

                          <div className="flex gap-3 pt-4">
                            <Button size="sm" className="flex-1 luxury-button text-navy-900 font-semibold">
                              Request Premium Quote
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-navy-300 text-navy-700 hover:bg-navy-50 bg-transparent"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Luxury CTA Section */}
      <section className="py-20 luxury-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gold-500/10 rounded-full blur-xl floating"></div>
          <div
            className="absolute bottom-20 left-20 w-24 h-24 bg-forest-600/10 rounded-full blur-lg floating"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 fade-in-up">Bespoke Solutions Available</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-2">
            We offer custom formulations, private labeling services, and specialized solutions for bulk orders and
            unique requirements. Experience luxury tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-3">
            <Button asChild size="lg" className="luxury-button text-navy-900 font-semibold px-10 py-4 text-lg">
              <Link href="/contact">Request Custom Solutions</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 px-10 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">Download Luxury Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
