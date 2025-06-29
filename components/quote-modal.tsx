"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
  message: string
  urgency: string
}

interface QuoteModalProps {
  children: React.ReactNode
  productName?: string
  productCategory?: string
}

export function QuoteModal({ children, productName, productCategory }: QuoteModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    productCategory: productCategory || "",
    quantity: "",
    message: productName ? `I'm interested in ${productName}. Please provide a quote.` : "",
    urgency: "",
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

        // Reset form and close modal
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          productCategory: "",
          quantity: "",
          message: "",
          urgency: "",
        })
        setErrors({})
        setOpen(false)
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

  const handleInputChange = (field: keyof QuoteFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-navy-900">
            <Calculator className="h-6 w-6 text-gold-500" />
            What Can We Build Together?
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Get a personalized quote for your requirements. We'll respond within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
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
                  className={`form-input ${errors.firstName ? "border-red-500" : ""}`}
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
                  className={`form-input ${errors.lastName ? "border-red-500" : ""}`}
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
                  className={`form-input ${errors.email ? "border-red-500" : ""}`}
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
                  className={`form-input ${errors.phone ? "border-red-500" : ""}`}
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
                className={`form-input ${errors.company ? "border-red-500" : ""}`}
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
                  <SelectTrigger className={`form-input ${errors.productCategory ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen-cleaning">Kitchen & Household Cleaning</SelectItem>
                    <SelectItem value="laundry">Laundry Solutions</SelectItem>
                    <SelectItem value="personal-hygiene">Personal Hygiene</SelectItem>
                    <SelectItem value="personal-care">Personal Care</SelectItem>
                    <SelectItem value="industrial">Industrial Cleaning</SelectItem>
                    <SelectItem value="custom">Custom Formulation</SelectItem>
                    <SelectItem value="other">Partnership</SelectItem>
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
                  className={`form-input ${errors.quantity ? "border-red-500" : ""}`}
                  placeholder="e.g., 1000 units, 500L, 50 cases"
                />
                {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="urgency" className="text-sm font-medium text-gray-700">
                Urgency Level *
              </Label>
              <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                <SelectTrigger className={`form-input ${errors.urgency ? "border-red-500" : ""}`}>
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
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Additional Requirements
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="form-input min-h-[100px]"
                placeholder="Please provide any specific requirements, custom formulations, or special instructions..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-900 font-semibold py-3"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending Request...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Quote Request
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="px-6 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Quick Response Guarantee</p>
            <p>We'll respond to your quote request within 24 hours which may exted due to high volume of requests during business days.</p>
            <p className="mt-1">For urgent requests, please call us directly at +250 788 431 288</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
