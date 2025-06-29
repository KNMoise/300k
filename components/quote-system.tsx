"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useNotification } from "@/components/ui/notification-provider"
import { Calculator, Send, Loader2 } from "lucide-react"

interface QuoteFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  productCategory: string
  quantity: string
  customRequirements: string
  urgency: string
  budget: string
  newsletter: boolean
}

export function QuoteSystem() {
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    productCategory: "",
    quantity: "",
    customRequirements: "",
    urgency: "",
    budget: "",
    newsletter: false,
  })
  const [errors, setErrors] = useState<Partial<QuoteFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showNotification } = useNotification()

  const validateForm = (): boolean => {
    const newErrors: Partial<QuoteFormData> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.company.trim()) newErrors.company = "Company name is required"
    if (!formData.productCategory) newErrors.productCategory = "Please select a product category"
    if (!formData.quantity.trim()) newErrors.quantity = "Quantity is required"
    if (!formData.urgency) newErrors.urgency = "Please select urgency level"

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
      // Simulate API call to send email
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        showNotification({
          type: "success",
          title: "Quote Request Sent!",
          message: "We'll get back to you within 24 hours with a detailed quote.",
          duration: 6000,
        })

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          productCategory: "",
          quantity: "",
          customRequirements: "",
          urgency: "",
          budget: "",
          newsletter: false,
        })
        setErrors({})
      } else {
        throw new Error("Failed to send quote request")
      }
    } catch (error) {
      showNotification({
        type: "error",
        title: "Error",
        message: "Failed to send quote request. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof QuoteFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <Card className="modern-card bg-white shadow-xl border-0">
      <CardHeader className="bg-gradient-to-r from-navy-900 to-forest-800 text-white p-8">
        <div className="flex items-center gap-3">
          <Calculator className="h-8 w-8 text-gold-400" />
          <div>
            <CardTitle className="text-2xl font-bold">Request Custom Quote</CardTitle>
            <CardDescription className="text-gray-300 mt-2">
              Get a personalized quote for your bulk orders and custom requirements
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy-900 border-b border-gray-200 pb-2">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={`form-input ${errors.firstName ? "error" : ""}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={`form-input ${errors.lastName ? "error" : ""}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
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
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
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
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company/Organization *
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className={`form-input ${errors.company ? "error" : ""}`}
                placeholder="Your company name"
              />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
            </div>
          </div>

          {/* Product Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy-900 border-b border-gray-200 pb-2">Product Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productCategory" className="text-sm font-medium text-gray-700">
                  Product Category *
                </Label>
                <Select
                  value={formData.productCategory}
                  onValueChange={(value) => handleInputChange("productCategory", value)}
                >
                  <SelectTrigger className={`form-input ${errors.productCategory ? "error" : ""}`}>
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen-cleaning">Kitchen & Household Cleaning</SelectItem>
                    <SelectItem value="laundry">Laundry Solutions</SelectItem>
                    <SelectItem value="personal-hygiene">Personal Hygiene</SelectItem>
                    <SelectItem value="personal-care">Personal Care</SelectItem>
                    <SelectItem value="industrial">Industrial Cleaning</SelectItem>
                    <SelectItem value="custom">Custom Formulation</SelectItem>
                  </SelectContent>
                </Select>
                {errors.productCategory && <p className="text-red-500 text-xs mt-1">{errors.productCategory}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                  Estimated Quantity *
                </Label>
                <Input
                  id="quantity"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange("quantity", e.target.value)}
                  className={`form-input ${errors.quantity ? "error" : ""}`}
                  placeholder="e.g., 1000 units, 500L, 50 cases"
                />
                {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="customRequirements" className="text-sm font-medium text-gray-700">
                Custom Requirements & Specifications
              </Label>
              <Textarea
                id="customRequirements"
                value={formData.customRequirements}
                onChange={(e) => handleInputChange("customRequirements", e.target.value)}
                className="form-input min-h-[100px]"
                placeholder="Describe any specific requirements, custom formulations, packaging preferences, or special instructions..."
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy-900 border-b border-gray-200 pb-2">Project Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="urgency" className="text-sm font-medium text-gray-700">
                  Urgency Level *
                </Label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                  <SelectTrigger className={`form-input ${errors.urgency ? "error" : ""}`}>
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (2-4 weeks)</SelectItem>
                    <SelectItem value="priority">Priority (1-2 weeks)</SelectItem>
                    <SelectItem value="urgent">Urgent (3-7 days)</SelectItem>
                    <SelectItem value="emergency">Emergency (24-48 hours)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.urgency && <p className="text-red-500 text-xs mt-1">{errors.urgency}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                  Budget Range (Optional)
                </Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger className="form-input">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1000">Under $1,000</SelectItem>
                    <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                    <SelectItem value="over-50000">Over $50,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm text-gray-600">
              Subscribe to our newsletter for product updates and industry insights
            </Label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full modern-button text-black font-semibold py-3 text-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 loading-spinner" />
                  Sending Quote Request...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Request Quote
                </>
              )}
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>We'll respond to your quote request within 24 hours during business days.</p>
            <p className="mt-1">For urgent requests, please call us directly at +250 XXX XXX XXX</p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
