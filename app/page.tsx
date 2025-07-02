import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  Globe,
  Leaf,
  Star,
  MapPin,
  Phone,
  Mail,
  Store,
  Building2,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductShowcase } from "@/components/product-showcase";
// import { QuoteSystem } from "@/components/quote-system"
import { QuoteModal } from "@/components/quote-modal";
import { DistributorModal } from "@/components/distributor-modal";
import UniqueFeaturesSection from "@/components/unique-features-section";
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
                  Peto Group Ltd delivers world-class personal care and cleaning
                  solutions, empowering 70+ skilled professionals while serving
                  discerning customers across East Africa with uncompromising
                  quality.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 fade-in-up delay-400">
                <Button
                  asChild
                  size="lg"
                  className="modern-button text-black font-semibold px-8 py-4 text-lg"
                >
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
              <div className="text-5xl font-bold text-transparent bg-clip-text gold-gradient mb-3">
                70+
              </div>
              <div className="text-navy-700 font-medium">Lives Empowered</div>
            </div>
            <div className="text-center fade-in-up delay-200">
              <div className="text-5xl font-bold text-transparent bg-clip-text gold-gradient mb-3">
                15+
              </div>
              <div className="text-navy-700 font-medium">Premium Products</div>
            </div>
            <div className="text-center fade-in-up delay-300">
              <div className="text-5xl font-bold text-transparent bg-clip-text gold-gradient mb-3">
                100%
              </div>
              <div className="text-navy-700 font-medium">Quality Assured</div>
            </div>
            <div className="text-center fade-in-up delay-400">
              <div className="text-5xl font-bold text-transparent bg-clip-text gold-gradient mb-3">
                5+
              </div>
              <div className="text-navy-700 font-medium">Years Excellence</div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Showcase */}
      <div id="products">
        <ProductShowcase />
      </div>
      <UniqueFeaturesSection />

      {/* Where to Find Our Products Section */}
      <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title text-slate-800 mb-6">
            Where to Find Our Products
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our premium products are available through trusted distributors
            and retail partners across East Africa. Find the nearest location
            or become a distributor today.
          </p>
        </div>

        {/* Distribution Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="modern-card bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-lg fade-in-up delay-100">
            <div className="text-center pb-4 p-6">
              <div className="w-16 h-16 bg-slate-600 mx-auto mb-4 flex items-center justify-center rounded-lg">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-slate-800 font-semibold">
                Retail Stores
              </h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-slate-600 mb-4">
                Available in major supermarkets, pharmacies, and specialty
                stores across Rwanda, Uganda, and Kenya.
              </p>
              <button className="border border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white bg-transparent transition-colors px-4 py-2 rounded">
                Find Stores
              </button>
            </div>
          </div>

          <div className="modern-card bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 shadow-lg fade-in-up delay-200">
            <div className="text-center pb-4 p-6">
              <div className="w-16 h-16 gold-gradient mx-auto mb-4 flex items-center justify-center rounded-lg">
                <Building2 className="h-8 w-8 text-slate-800" />
              </div>
              <h3 className="text-xl text-slate-800 font-semibold">
                Wholesale Partners
              </h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-slate-600 mb-4">
                Bulk orders and wholesale distribution through our certified
                partner network for businesses.
              </p>
              <button className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white bg-transparent transition-colors px-4 py-2 rounded">
                Partner With Us
              </button>
            </div>
          </div>

          <div className="modern-card bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-lg fade-in-up delay-300">
            <div className="text-center pb-4 p-6">
              <div className="w-16 h-16 bg-green-600 mx-auto mb-4 flex items-center justify-center rounded-lg">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-slate-800 font-semibold">
                Online Platforms
              </h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-slate-600 mb-4">
                Order directly through our e-commerce partners and authorized
                online retailers for convenience.
              </p>
                <button
                className="border border-green-600 text-green-600 bg-transparent transition-colors px-4 py-2 rounded flex items-center justify-center opacity-60 cursor-not-allowed"
                disabled
                aria-disabled="true"
                title="Coming Soon"
                >
                <span className="ml-2 text-xs font-medium">Coming Soon</span>

                <span className="mr-2">Shop Online</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600 animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
                </button>
            </div>
          </div>
        </div>

        {/* Key Locations */}
        <div className="bg-slate-50 p-8 lg:p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-12 fade-in-up">
            Key Distribution Centers
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rwanda */}
            <div className="bg-white p-6 shadow-lg fade-in-up delay-100 border border-slate-200 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 flex items-center justify-center mr-4 rounded-lg">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Rwanda</h4>
                  <p className="text-sm text-slate-600">
                     Manufacturing Head Office
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-700">
                    Kamonyi - Main Distribution Center
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-700">+250 788 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-700">sales@petogroup.com</span>
                </div>
              </div>
            </div>

            {/* GASABO */}
            <div className="bg-white p-6 shadow-lg fade-in-up delay-200 border border-slate-200 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center mr-4 rounded-lg">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">GASABO</h4>
                  <p className="text-sm text-slate-600">
                    Local Distribution
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-700">
                    Kwa Mutananga - Regional Office
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-700">+256 700 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-700">jeanne@petogroup.com</span>
                </div>
              </div>
            </div>

            {/* Nyarugenge */}
            <div className="bg-white p-6 shadow-lg fade-in-up delay-300 border border-slate-200 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center mr-4 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Nyarugenge</h4>
                  <p className="text-sm text-slate-600">Local Trader</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-700">
                    INKUNDAMAHORO - Partner Network
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-700">+254 700 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-700">kevin@petogroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Become a Distributor CTA */}
        <div className="mt-16 text-center fade-in-up delay-400">
          <div className="gold-gradient p-8 lg:p-12 text-slate-800 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Become a Distributor</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join our growing network of successful distributors and bring
              premium quality products to your market. Competitive margins,
              marketing support, and exclusive territories available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <DistributorModal>
                  <Button
                    size="lg"
                    className="bg-gold text-white-400 hover:bg-blue-100 px-8 py-3 font-semibold"
                  >
                    Apply Now
                  </Button>
                </DistributorModal>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title text-navy-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses across East Africa for consistent quality
              and reliable service.
            </p>
          </div>

          <div className="modern-grid">
            <Card className="modern-card bg-white border-0 shadow-lg fade-in-up delay-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Peto Group's kitchen cleaning products have transformed our
                  restaurant operations. The quality is exceptional and the
                  results speak for themselves."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-navy-900">
                      Sarah Mukamana
                    </h4>
                    <p className="text-sm text-gray-500">
                      Restaurant Manager, Kigali
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card bg-white border-0 shadow-lg fade-in-up delay-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "As a distributor, I appreciate the consistent quality and
                  professional packaging. Our customers always come back for
                  more."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-navy-900">
                      James Uwimana
                    </h4>
                    <p className="text-sm text-gray-500">
                      Wholesale Distributor
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card bg-white border-0 shadow-lg fade-in-up delay-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The industrial cleaning solutions are incredibly effective.
                  They've helped us maintain the highest hygiene standards in
                  our facility."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-navy-900">
                      Marie Uwizeyimana
                    </h4>
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
            <h2 className="section-title text-white mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join our network of satisfied customers and experience the
              difference that premium quality makes. Contact us today for
              personalized solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <QuoteModal>
                <Button
                  size="lg"
                  className="modern-button text-black font-semibold px-10 py-4 text-lg"
                >
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
  );
}
