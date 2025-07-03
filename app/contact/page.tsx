"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, Loader2, Award, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useNotification } from "@/components/ui/notification-provider"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  inquiryType: string
  message: string
  newsletter: boolean
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
    newsletter: false,
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showNotification } = useNotification()

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.company.trim()) newErrors.company = "Company name is required"
    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      showNotification({
        type: "error",
        title: "Validation Error",
        message: "Please fill in all required fields correctly.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        showNotification({
          type: "success",
          title: "Message Sent Successfully!",
          message: "Thank you for contacting us. We'll respond within 24 hours.",
          duration: 6000,
        })

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          inquiryType: "",
          message: "",
          newsletter: false,
        })
        setErrors({})
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      showNotification({
        type: "error",
        title: "Error",
        message: "Failed to send message. Please try again or call us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="min-h-screen luxury-gradient">
      {/* Header Section - Compact */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-gold-500/10 blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-forest-600/10 blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Navigation */}
          <div className="flex items-center gap-4 mb-8 fade-in-up">
            <Button asChild variant="ghost" size="sm" className="glass-effect text-white hover:bg-white/20">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Header Content */}
          <div className="text-center max-w-4xl mx-auto fade-in-up delay-200">
            <h1 className="hero-text text-white mb-6">
               <span className="text-gold-400">PETO GROUP LTD</span>
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Connect with Rwanda's manufacturing excellence leader. We're here to discuss partnerships, bulk orders,
              and custom solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Compact Layout */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <Card className="modern-card glass-effect border border-gold-400/20">
                  <CardHeader className="gold-gradient text-navy-900 p-8">
                    <div className="flex items-center gap-3">
                      <Send className="h-8 w-8" />
                      <div>
                        <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
                        <CardDescription className="text-navy-700 mt-2">
                          Professional inquiry form for partnerships and business opportunities
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-white font-medium">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className={`form-input ${errors.firstName ? "error" : ""}`}
                            placeholder="Enter your first name"
                          />
                          {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-white font-medium">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className={`form-input ${errors.lastName ? "error" : ""}`}
                            placeholder="Enter your last name"
                          />
                          {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={`form-input ${errors.email ? "error" : ""}`}
                            placeholder="your.email@company.com"
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white font-medium">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className={`form-input ${errors.phone ? "error" : ""}`}
                            placeholder="+250 XXX XXX XXX"
                          />
                          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-white font-medium">
                            Company/Organization *
                          </Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className={`form-input ${errors.company ? "error" : ""}`}
                            placeholder="Your company name"
                          />
                          {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType" className="text-white font-medium">
                            Inquiry Type *
                          </Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) => handleInputChange("inquiryType", value)}
                          >
                            <SelectTrigger className={`form-input ${errors.inquiryType ? "error" : ""}`}>
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
                          {errors.inquiryType && <p className="text-red-400 text-xs mt-1">{errors.inquiryType}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className={`form-input min-h-[120px] ${errors.message ? "error" : ""}`}
                          placeholder="Please provide details about your inquiry, requirements, or how we can assist you..."
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-gray-300 text-sm">
                          Subscribe to our newsletter for product updates and industry insights
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="modern-button w-full text-navy-900 font-bold py-3 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 loading-spinner" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information & Quick Info - 1 column */}
              <div className="space-y-6">
                {/* Contact Information */}
                <Card className="modern-card glass-effect border border-gold-400/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-2">
                      <Phone className="h-5 w-5 text-gold-400" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="glass-effect p-2 border border-gold-400/20">
                        <MapPin className="h-4 w-4 text-gold-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">Our Location</h4>
                        <p className="text-gray-300 text-sm">
                          Kamonyi Ruyenze
                          <br />
                          South, Rwanda
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="glass-effect p-2 border border-green-400/20">
                        <Phone className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">Phone Numbers</h4>
                        <p className="text-gray-300 text-sm">
                          Main: +250 788 431 288
                          <br />
                          Sales: +250 781 727 544
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="glass-effect p-2 border border-blue-400/20">
                        <Mail className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">Email Addresses</h4>
                        <p className="text-gray-300 text-sm">
                          General: info@petogroup.rw
                          <br />
                          Sales: sales@petogroup.rw
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="glass-effect p-2 border border-purple-400/20">
                        <Clock className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">Business Hours</h4>
                        <p className="text-gray-300 text-sm">
                          Mon-Fri: 8:00 AM - 6:00 PM
                          <br />
                          Saturday: 8:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Times */}
                <Card className="modern-card glass-effect border border-forest-400/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-center gap-2">
                      <Clock className="h-5 w-5 text-forest-400" />
                      Response Times
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">General Inquiries</span>
                        <span className="font-semibold text-green-400 text-sm">24 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Sales Inquiries</span>
                        <span className="font-semibold text-green-400 text-sm">4 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Partnership Requests</span>
                        <span className="font-semibold text-blue-400 text-sm">48 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Technical Support</span>
                        <span className="font-semibold text-green-400 text-sm">2 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="modern-card glass-effect border border-blue-400/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-400" />
                      Why Choose Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Shield className="h-4 w-4 text-gold-400" />
                        <span className="text-gray-300 text-sm">RSB Certified Quality</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-forest-400" />
                        <span className="text-gray-300 text-sm">70+ Team Members</span>
                      </div>
                      {/* <div className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-blue-400" />
                        <span className="text-gray-300 text-sm">5+ Years Excellence</span>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Compact */}
      <section className="py-12 glass-effect">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 fade-in-up">
            <h2 className="section-title text-white mb-4">Visit Our Facility</h2>
            <p className="text-lg text-gray-300">
              Located in Kamonyi Ruyenze, South - easily accessible for meetings and facility tours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-effect h-64 flex items-center justify-center border border-gold-400/20 fade-in-up delay-200">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold-400 mx-auto mb-4" />
                <p className="text-gray-300">Interactive map integration available</p>
                <p className="text-sm text-gray-400">Kamonyi Ruyenze, South, Rwanda</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
