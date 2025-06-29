import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Award, Leaf, ArrowRight, Star, Shield, Truck, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 luxury-gradient opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 gold-gradient opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Premium Trust Indicators */}
        <div className="py-12 border-b border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 gold-gradient rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-white font-semibold mb-2">Quality Certified</h3>
              <p className="text-slate-400 text-sm">ISO Standards Compliant</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 gold-gradient rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
              <p className="text-slate-400 text-sm">Nationwide Coverage</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 gold-gradient rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-white font-semibold mb-2">Premium Quality</h3>
              <p className="text-slate-400 text-sm">Luxury Manufacturing</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 gold-gradient rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
              <p className="text-slate-400 text-sm">Always Available</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="fade-in-up">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="gold-gradient p-4 rounded-2xl shadow-2xl">
                    <span className="text-2xl font-bold text-slate-900">PG</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Peto Group Ltd</div>
                    <div className="text-sm font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      Luxury Made in Rwanda
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-8">
                  Rwanda's premier manufacturer of luxury personal care and cleaning products. 
                  We craft excellence through sustainable practices and innovative solutions.
                </p>

                {/* Social Media */}
                <div className="flex space-x-3">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <div className="absolute inset-0 gold-gradient rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative glass-effect p-3 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <Icon className="h-5 w-5 text-white group-hover:text-yellow-400 transition-colors duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="fade-in-up delay-100">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <div className="w-1 h-6 gold-gradient rounded-full mr-3"></div>
                Quick Links
              </h3>
              <nav className="space-y-4">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Our Products", href: "/products" },
                  { label: "Sustainability", href: "/sustainability" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="group flex items-center text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Product Categories */}
            <div className="fade-in-up delay-200">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <div className="w-1 h-6 gold-gradient rounded-full mr-3"></div>
                Luxury Collections
              </h3>
              <nav className="space-y-4">
                {[
                  { label: "Kitchen & Cleaning Excellence", href: "/products#kitchen-cleaning" },
                  { label: "Premium Laundry Care", href: "/products#laundry" },
                  { label: "Personal Hygiene Luxury", href: "/products#personal-hygiene" },
                  { label: "Exclusive Personal Care", href: "/products#personal-care" },
                  { label: "Industrial Solutions", href: "/products#industrial" }
                ].map((category, index) => (
                  <Link
                    key={index}
                    href={category.href}
                    className="group flex items-center text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    <Leaf className="h-4 w-4 mr-3 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {category.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact & Newsletter */}
            <div className="fade-in-up delay-300">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <div className="w-1 h-6 gold-gradient rounded-full mr-3"></div>
                Stay Connected
              </h3>
              
              {/* Contact Info */}
              <div className="space-y-6 mb-8">
                <div className="group flex items-start gap-4">
                  <div className="glass-effect p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="text-slate-300">
                    <div className="font-semibold text-white">Kamonyi Ruyenze</div>
                    <div>Kigali, Rwanda</div>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4">
                  <div className="glass-effect p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="text-slate-300">+250 788 431 288</div>
                </div>                
                <div className="group flex items-center gap-4">
                  <div className="glass-effect p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="text-slate-300">info@petogroup.rw</div>
                </div>
              </div>

             
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-sm">
              © 2024 Peto Group Ltd. All rights reserved. 
              </div>
            
            <div className="flex flex-wrap gap-8 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}