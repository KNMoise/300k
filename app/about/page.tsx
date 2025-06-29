import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Users, Award, Target, Heart, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button asChild variant="ghost" size="sm" className="text-white hover:bg-blue-800">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Peto Group Ltd</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Leading the way in personal care and cleaning products manufacturing in Rwanda, with a commitment to
            quality, sustainability, and community development.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to provide high-quality personal care and cleaning products to the Rwandan
                  market, Peto Group Ltd has grown from a small startup to a leading manufacturer serving customers
                  across East Africa.
                </p>
                <p>
                  Located in Kamonyi Ruyenze, Kigali, our state-of-the-art manufacturing facility employs 40 direct
                  workers and creates employment opportunities for over 70 individuals in our extended supply chain and
                  distribution network.
                </p>
                <p>
                  We take pride in being a 100% Rwandan company, contributing to the country's economic development
                  while maintaining international quality standards in all our products.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Peto Group Manufacturing Facility"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">Made in</div>
                <div className="text-xl font-semibold">Rwanda</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong values and guided by a clear vision for the future of manufacturing in Rwanda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  To manufacture and distribute high-quality personal care and cleaning products that improve the lives
                  of our customers while creating sustainable employment and contributing to Rwanda's economic growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  To become the leading manufacturer of personal care and cleaning products in East Africa, recognized
                  for our quality, innovation, and positive impact on communities and the environment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Quality excellence, environmental responsibility, community development, employee welfare, customer
                  satisfaction, and ethical business practices guide everything we do.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Manufacturing Process"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900">Manufacturing Excellence</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our modern manufacturing facility in Kamonyi Ruyenze is equipped with state-of-the-art machinery and
                  follows international quality standards to ensure consistent product quality.
                </p>
                <p>
                  We implement rigorous quality control processes at every stage of production, from raw material
                  sourcing to final packaging, ensuring that every product meets our high standards before reaching our
                  customers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-900">ISO</div>
                  <div className="text-sm text-gray-600">Quality Standards</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-900">100%</div>
                  <div className="text-sm text-gray-600">Quality Tested</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Employment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our success is built on the dedication and expertise of our team members, who are the heart of our
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">40</div>
              <div className="text-gray-600">Direct Employees</div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-900 mb-2">70+</div>
              <div className="text-gray-600">Total Employment Created</div>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-yellow-900 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-900 mb-2">100%</div>
              <div className="text-gray-600">Local Workforce</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Environmental Responsibility</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  We are committed to sustainable manufacturing practices that minimize our environmental impact while
                  maintaining the highest product quality standards.
                </p>
                <p>
                  Our formulations prioritize biodegradable ingredients, and we continuously work to reduce waste,
                  conserve water, and optimize energy usage in our manufacturing processes.
                </p>
                <p>
                  We believe that environmental responsibility and business success go hand in hand, and we're proud to
                  contribute to a cleaner, healthier Rwanda.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Eco-Friendly Formulations</div>
                  <div className="text-gray-600">Biodegradable and environmentally safe</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Sustainable Manufacturing"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for career opportunities, partnership possibilities, or want to learn more about our
            products, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
