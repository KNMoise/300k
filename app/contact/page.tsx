import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Users, Building, Truck, Send, CheckCircle, Star, Shield, Award, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Bar */}
      <nav className="glass-effect border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost" className="text-slate-700 hover:text-slate-900 hover:bg-white/50 group">
              <Link href="/">
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Link>
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="gold-gradient p-2 rounded-lg">
                <span className="text-sm font-bold text-slate-900">PG</span>
              </div>
              <div className="text-sm font-semibold text-slate-800">Contact Us</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 luxury-gradient opacity-95"></div>
        <div className="absolute top-10 right-10 w-96 h-96 gold-gradient opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center fade-in-up">
            <h1 className="hero-text text-white mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to experience luxury manufacturing excellence? Reach out to explore partnerships, 
              bulk orders, or learn about our premium product range.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 gold-gradient rounded-2xl mb-6 shadow-2xl">
                <CheckCircle className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Response</h3>
              <p className="text-slate-600">Quick turnaround on all inquiries with dedicated support team</p>
            </div>
            
            <div className="text-center fade-in-up delay-100">
              <div className="inline-flex items-center justify-center w-20 h-20 gold-gradient rounded-2xl mb-6 shadow-2xl">
                <Star className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Service</h3>
              <p className="text-slate-600">Personalized attention for every client and partnership opportunity</p>
            </div>
            
            <div className="text-center fade-in-up delay-200">
              <div className="inline-flex items-center justify-center w-20 h-20 gold-gradient rounded-2xl mb-6 shadow-2xl">
                <Shield className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trusted Partner</h3>
              <p className="text-slate-600">Industry-leading manufacturer with proven track record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-slate-900 mb-6">How Can We Help You?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the inquiry type that best fits your needs for faster, more targeted assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="modern-card glass-effect p-8 rounded-2xl text-center hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">General Inquiries</h3>
              <p className="text-slate-600 mb-6">Company information, product details, and general questions</p>
              <div className="text-sm text-emerald-600 font-semibold">Response: Within 4 hours</div>
            </div>

            <div className="modern-card glass-effect p-8 rounded-2xl text-center hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Partnership</h3>
              <p className="text-slate-600 mb-6">Distribution opportunities, retail partnerships, and collaborations</p>
              <div className="text-sm text-emerald-600 font-semibold">Response: Within 24 hours</div>
            </div>

            <div className="modern-card glass-effect p-8 rounded-2xl text-center hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl mb-6">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Bulk Orders</h3>
              <p className="text-slate-600 mb-6">Large quantities, custom formulations, and wholesale pricing</p>
              <div className="text-sm text-emerald-600 font-semibold">Response: Within 2 hours</div>
            </div>

            <div className="modern-card glass-effect p-8 rounded-2xl text-center hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-2xl mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Careers</h3>
              <p className="text-slate-600 mb-6">Join our team and grow with Rwanda's luxury manufacturer</p>
              <div className="text-sm text-emerald-600 font-semibold">Response: Within 48 hours</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-effect p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="gold-gradient p-3 rounded-xl">
                    <MessageSquare className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Send Us a Message</h3>
                    <p className="text-slate-600">We'll respond within hours, not days</p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-700 font-semibold">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        className="form-input h-12 text-slate-900 placeholder-slate-500"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-700 font-semibold">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        className="form-input h-12 text-slate-900 placeholder-slate-500"
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="form-input h-12 text-slate-900 placeholder-slate-500"
                      required 
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-semibold">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="form-input h-12 text-slate-900 placeholder-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-700 font-semibold">Company/Organization</Label>
                      <Input 
                        id="company" 
                        placeholder="Enter your company name" 
                        className="form-input h-12 text-slate-900 placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType" className="text-slate-700 font-semibold">Inquiry Type *</Label>
                    <Select required>
                      <SelectTrigger className="h-12 text-slate-900">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="products">Product Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership/Distribution</SelectItem>
                        <SelectItem value="bulk">Bulk Orders</SelectItem>
                        <SelectItem value="careers">Career Opportunities</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      className="form-input text-slate-900 placeholder-slate-500 resize-none"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="newsletter" className="border-slate-300" />
                      <Label htmlFor="newsletter" className="text-sm text-slate-600">
                        Subscribe to our newsletter for product updates and exclusive offers
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox id="privacy" required className="border-slate-300" />
                      <Label htmlFor="privacy" className="text-sm text-slate-600">
                        I agree to the privacy policy and terms of service *
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="modern-button w-full h-14 text-lg font-semibold">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="gold-gradient p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Our Location</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Kamonyi Ruyenze<br />
                        Kigali, Rwanda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-emerald-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Phone Numbers</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Main: +250 XXX XXX XXX<br />
                        Sales: +250 XXX XXX XXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-blue-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Email Addresses</h4>
                      <p className="text-slate-600 leading-relaxed">
                        General: luxury@petogroup.rw<br />
                        Sales: sales@petogroup.rw
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-purple-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Business Hours</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 8:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-3xl shadow-2xl">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Response Times</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="text-slate-600 font-medium">General Inquiries</span>
                    <span className="font-bold text-emerald-600">4 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="text-slate-600 font-medium">Sales Inquiries</span>
                    <span className="font-bold text-emerald-600">2 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="text-slate-600 font-medium">Partnership Requests</span>
                    <span className="font-bold text-blue-600">24 hours</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title text-slate-900 mb-6">Visit Our Manufacturing Facility</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Located in the heart of Kigali, our state-of-the-art facility is open for tours and meetings. 
              Experience luxury manufacturing excellence firsthand.
            </p>
          </div>

          <div className="relative">
            <div className="glass-effect h-96 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="gold-gradient p-6 rounded-full mb-6 inline-block">
                  <MapPin className="h-12 w-12 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Interactive Map Integration</h3>
                <p className="text-slate-600 mb-4">Kamonyi Ruyenze, Kigali, Rwanda</p>
                <Button className="modern-button">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}