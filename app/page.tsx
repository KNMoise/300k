import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Globe, Leaf, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductShowcase } from "@/components/product-showcase"
// import { QuoteSystem } from "@/components/quote-system"
import { QuoteModal } from "@/components/quote-modal"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center luxury-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gold-400/10 product-float"></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-forest-600/10 product-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gold-400/5 product-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* <div className="fade-in-up">
                  <span className="inline-block text-gold-400 font-semibold text-lg tracking-wide bg-white/10 px-4 py-2 backdrop-blur-sm">
                    PROUDLY MADE IN RWANDA
                  </span>
                </div> */}
                <h1 className="hero-text text-white fade-in-up delay-200">
                  <span className="block text-gold-400">Manufacturing</span>
                  <span className="block">Excellence</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed fade-in-up delay-300 max-w-2xl">
                  Peto Group Ltd delivers world-class personal care and cleaning solutions, empowering 70+ skilled
                  professionals while serving discerning customers across East Africa with uncompromising quality.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 fade-in-up delay-400">
                <Button asChild size="lg" className="modern-button text-black font-semibold px-8 py-4 text-lg">
                  <Link href="#products">
                    Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  <Link href="#quote">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative fade-in-right delay-300">
              <div className="relative z-10">
                <Image
                  src="/sample.jpg"
                  alt="Peto Group Manufacturing Excellence"
                  width={600}
                  height={700}
                  className="w-full h-auto shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 gold-gradient text-black p-8 shadow-2xl">
                  <div className="text-4xl font-bold">40+</div>
                  <div className="text-sm font-medium">Team Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in-up delay-100">
              <div className="text-5xl font-bold text-transparent bg-clip-text gold-gradient mb-3">70+</div>
              <div className="text-navy-700 font-medium">Lives Empowered</div>
            </div>
            <div className="text-center fade-in-up delay-200">
              <div className="text-5xl font-bold text-transparent bg-clip-text gold-gradient mb-3">15+</div>
              <div className="text-navy-700 font-medium">Premium Products</div>
            </div>
            <div className="text-center fade-in-up delay-300">
              <div className="text-5xl font-bold text-transparent bg-clip-text gold-gradient mb-3">100%</div>
              <div className="text-navy-700 font-medium">Quality Assured</div>
            </div>
            <div className="text-center fade-in-up delay-400">
              <div className="text-5xl font-bold text-transparent bg-clip-text gold-gradient mb-3">5+</div>
              <div className="text-navy-700 font-medium">Years Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <div id="products">
        <ProductShowcase />
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title text-navy-900 mb-6">Why Choose Peto Group</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver products that exceed international
              standards while supporting community development.
            </p>
          </div>

          <div className="modern-grid">
            <Card className="modern-card bg-white border-0 shadow-lg fade-in-up delay-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gold-100 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-gold-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Certified Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  ISO certified manufacturing processes ensure consistent quality and international compliance in every
                  product batch.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="modern-card bg-white border-0 shadow-lg fade-in-up delay-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Sustainable Practices</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  Environmentally responsible manufacturing with biodegradable formulations and sustainable packaging
                  solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="modern-card bg-white border-0 shadow-lg fade-in-up delay-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Community Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  Creating meaningful employment opportunities and contributing to Rwanda's economic development through
                  local manufacturing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="modern-card bg-white border-0 shadow-lg fade-in-up delay-400">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Global Standards</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  Meeting international quality benchmarks while maintaining competitive pricing for regional and global
                  markets.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title text-navy-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses across East Africa for consistent quality and reliable service.
            </p>
          </div>

          <div className="modern-grid">
            <Card className="modern-card bg-white border-0 shadow-lg fade-in-up delay-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Peto Group's kitchen cleaning products have transformed our restaurant operations. The quality is
                  exceptional and the results speak for themselves."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Sarah Mukamana</h4>
                    <p className="text-sm text-gray-500">Restaurant Manager, Kigali</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card bg-white border-0 shadow-lg fade-in-up delay-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "As a distributor, I appreciate the consistent quality and professional packaging. Our customers
                  always come back for more."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-navy-900">James Uwimana</h4>
                    <p className="text-sm text-gray-500">Wholesale Distributor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card bg-white border-0 shadow-lg fade-in-up delay-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The industrial cleaning solutions are incredibly effective. They've helped us maintain the highest
                  hygiene standards in our facility."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Marie Uwizeyimana</h4>
                    <p className="text-sm text-gray-500">Factory Supervisor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 luxury-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in-up">
            <h2 className="section-title text-white mb-6">Ready to Experience Excellence?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join our network of satisfied customers and experience the difference that premium quality makes. Contact
              us today for personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <QuoteModal>
                <Button size="lg" className="modern-button text-black font-semibold px-10 py-4 text-lg">
                  Request Quote
                </Button>
              </QuoteModal>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black px-10 py-4 text-lg font-semibold bg-transparent"
              >
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
