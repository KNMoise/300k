"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { X, FileText, Send, CheckCircle, AlertCircle } from "lucide-react"

interface DistributorModalProps {
  children: React.ReactNode
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  businessName: string
  businessType: string
  yearsInBusiness: string
  registrationNumber: string
  country: string
  city: string
  territory: string
  address: string
  currentBrands: string
  monthlyVolume: string
  salesTeam: string
  warehouse: string
  whyPartner: string
  marketingPlan: string
  references: string
}

export function DistributorModal({ children }: DistributorModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    yearsInBusiness: "",
    registrationNumber: "",
    country: "",
    city: "",
    territory: "",
    address: "",
    currentBrands: "",
    monthlyVolume: "",
    salesTeam: "",
    warehouse: "",
    whyPartner: "",
    marketingPlan: "",
    references: "",
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const validateForm = (): string | null => {
    const requiredFields = [
      { field: "firstName", label: "First Name" },
      { field: "lastName", label: "Last Name" },
      { field: "email", label: "Email Address" },
      { field: "phone", label: "Phone Number" },
      { field: "businessName", label: "Business Name" },
      { field: "businessType", label: "Business Type" },
      { field: "yearsInBusiness", label: "Years in Business" },
      { field: "country", label: "Country" },
      { field: "city", label: "City" },
      { field: "address", label: "Business Address" },
      { field: "monthlyVolume", label: "Expected Monthly Volume" },
      { field: "whyPartner", label: "Why Partner with Peto Group" },
    ]

    for (const { field, label } of requiredFields) {
      if (!formData[field as keyof FormData].trim()) {
        return `${label} is required`
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return "Please provide a valid email address"
    }

    // Terms acceptance
    if (!acceptedTerms) {
      return "Please accept the terms and conditions to proceed"
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/distributor-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        // Reset form after 4 seconds
        setTimeout(() => {
          setIsOpen(false)
          setSubmitStatus("idle")
          setAcceptedTerms(false)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            businessName: "",
            businessType: "",
            yearsInBusiness: "",
            registrationNumber: "",
            country: "",
            city: "",
            territory: "",
            address: "",
            currentBrands: "",
            monthlyVolume: "",
            salesTeam: "",
            warehouse: "",
            whyPartner: "",
            marketingPlan: "",
            references: "",
          })
        }, 4000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.message || "Failed to submit application. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetModal = () => {
    setShowTerms(false)
    setAcceptedTerms(false)
    setSubmitStatus("idle")
    setErrorMessage("")
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
        if (!open) resetModal()
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-navy-900">Become a Peto Group Distributor</DialogTitle>
          <DialogDescription className="text-gray-600">
            Join our network of successful distributors across East Africa
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-120px)]">
          <div className="p-6 pt-0">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600 mb-2">Application Submitted Successfully!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for your interest in becoming a Peto Group distributor. We've sent a confirmation email to{" "}
                  <strong>{formData.email}</strong> with next steps.
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Our team will review your application and get back to you within 2-3 business days.
                </p>
                <p className="text-xs text-gray-400">This window will close automatically...</p>
              </div>
            ) : (
              <>
                {!showTerms ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Personal Information */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="firstName">First Name *</Label>
                              <Input
                                id="firstName"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange("firstName", e.target.value)}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="lastName">Last Name *</Label>
                              <Input
                                id="lastName"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange("lastName", e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              required
                            />
                          </div>
                        </CardContent>
                      </Card>

                      {/* Business Information */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Business Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <Label htmlFor="businessName">Business Name *</Label>
                            <Input
                              id="businessName"
                              value={formData.businessName}
                              onChange={(e) => handleInputChange("businessName", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="businessType">Business Type *</Label>
                            <Select
                              value={formData.businessType}
                              onValueChange={(value) => handleInputChange("businessType", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select business type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="retail">Retail Store</SelectItem>
                                <SelectItem value="wholesale">Wholesale Distributor</SelectItem>
                                <SelectItem value="supermarket">Supermarket Chain</SelectItem>
                                <SelectItem value="pharmacy">Pharmacy</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                            <Select
                              value={formData.yearsInBusiness}
                              onValueChange={(value) => handleInputChange("yearsInBusiness", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select years" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0-1">0-1 years</SelectItem>
                                <SelectItem value="2-5">2-5 years</SelectItem>
                                <SelectItem value="6-10">6-10 years</SelectItem>
                                <SelectItem value="10+">10+ years</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="registrationNumber">Business Registration Number</Label>
                            <Input
                              id="registrationNumber"
                              value={formData.registrationNumber}
                              onChange={(e) => handleInputChange("registrationNumber", e.target.value)}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Location and Market */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Location & Market Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="country">Country *</Label>
                            <Select
                              value={formData.country}
                              onValueChange={(value) => handleInputChange("country", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="rwanda">Rwanda</SelectItem>
                                <SelectItem value="uganda">Uganda</SelectItem>
                                <SelectItem value="kenya">Kenya</SelectItem>
                                <SelectItem value="tanzania">Tanzania</SelectItem>
                                <SelectItem value="burundi">Burundi</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="city">City *</Label>
                            <Input
                              id="city"
                              value={formData.city}
                              onChange={(e) => handleInputChange("city", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="territory">Preferred Territory</Label>
                            <Input
                              id="territory"
                              value={formData.territory}
                              onChange={(e) => handleInputChange("territory", e.target.value)}
                              placeholder="e.g., Northern Region"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="address">Business Address *</Label>
                          <Textarea
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            required
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Experience and Capacity */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Experience & Capacity</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="currentBrands">Current Brands Distributed</Label>
                            <Textarea
                              id="currentBrands"
                              value={formData.currentBrands}
                              onChange={(e) => handleInputChange("currentBrands", e.target.value)}
                              placeholder="List brands you currently distribute"
                            />
                          </div>
                          <div>
                            <Label htmlFor="monthlyVolume">Expected Monthly Volume *</Label>
                            <Select
                              value={formData.monthlyVolume}
                              onValueChange={(value) => handleInputChange("monthlyVolume", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select volume" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1000-5000">1,000 - 5,000 units</SelectItem>
                                <SelectItem value="5000-10000">5,000 - 10,000 units</SelectItem>
                                <SelectItem value="10000-25000">10,000 - 25,000 units</SelectItem>
                                <SelectItem value="25000+">25,000+ units</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="salesTeam">Sales Team Size</Label>
                          <Input
                            id="salesTeam"
                            type="number"
                            value={formData.salesTeam}
                            onChange={(e) => handleInputChange("salesTeam", e.target.value)}
                            placeholder="Number of sales representatives"
                          />
                        </div>
                        <div>
                          <Label htmlFor="warehouse">Warehouse/Storage Capacity</Label>
                          <Textarea
                            id="warehouse"
                            value={formData.warehouse}
                            onChange={(e) => handleInputChange("warehouse", e.target.value)}
                            placeholder="Describe your storage facilities and capacity"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Additional Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Additional Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="whyPartner">Why do you want to partner with Peto Group? *</Label>
                          <Textarea
                            id="whyPartner"
                            value={formData.whyPartner}
                            onChange={(e) => handleInputChange("whyPartner", e.target.value)}
                            required
                            placeholder="Tell us about your motivation and how you plan to promote our products"
                          />
                        </div>
                        <div>
                          <Label htmlFor="marketingPlan">Marketing Strategy</Label>
                          <Textarea
                            id="marketingPlan"
                            value={formData.marketingPlan}
                            onChange={(e) => handleInputChange("marketingPlan", e.target.value)}
                            placeholder="Describe your marketing and sales strategy for our products"
                          />
                        </div>
                        <div>
                          <Label htmlFor="references">Business References</Label>
                          <Textarea
                            id="references"
                            value={formData.references}
                            onChange={(e) => handleInputChange("references", e.target.value)}
                            placeholder="Provide contact information for 2-3 business references"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Terms and Conditions */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <FileText className="h-5 w-5 mr-2" />
                          Terms and Conditions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Button type="button" variant="outline" onClick={() => setShowTerms(true)} className="w-full">
                            <FileText className="h-4 w-4 mr-2" />
                            Read Terms and Conditions
                          </Button>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="acceptTerms"
                              checked={acceptedTerms}
                              onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                            />
                            <Label htmlFor="acceptTerms" className="text-sm">
                              I have read and accept the terms and conditions for becoming a Peto Group distributor *
                            </Label>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Error Message */}
                    {errorMessage && (
                      <div className="flex items-center p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                        <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-end space-x-4">
                      <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting || !acceptedTerms}
                        className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit Application
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <TermsAndConditions onBack={() => setShowTerms(false)} />
                )}
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

function TermsAndConditions({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-navy-900">Distributor Terms and Conditions</h3>
        <Button variant="outline" size="sm" onClick={onBack}>
          <X className="h-4 w-4 mr-2" />
          Back to Form
        </Button>
      </div>

      <ScrollArea className="h-96 border p-4">
        <div className="space-y-4 text-sm">
          <section>
            <h4 className="font-semibold text-navy-900 mb-2">1. DISTRIBUTOR AGREEMENT</h4>
            <p className="text-gray-700">
              This agreement establishes the terms and conditions for becoming an authorized distributor of Peto Group
              Ltd products. By submitting this application, you agree to comply with all terms outlined herein.
            </p>
          </section>

          <Separator />

          <section>
            <h4 className="font-semibold text-navy-900 mb-2">2. TERRITORY AND EXCLUSIVITY</h4>
            <p className="text-gray-700 mb-2">
              Territory assignments are subject to approval and availability. Exclusive territories may be granted based
              on:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Demonstrated sales capacity and market penetration</li>
              <li>Minimum order commitments</li>
              <li>Marketing and promotional activities</li>
              <li>Payment history and financial stability</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h4 className="font-semibold text-navy-900 mb-2">3. MINIMUM ORDER REQUIREMENTS</h4>
            <p className="text-gray-700 mb-2">Distributors must maintain minimum monthly order volumes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>New distributors: Minimum 1,000 units per month for first 6 months</li>
              <li>Established distributors: Minimum 2,500 units per month</li>
              <li>Exclusive territory holders: Minimum 5,000 units per month</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h4 className="font-semibold text-navy-900 mb-2">4. PRICING AND PAYMENT TERMS</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Distributor pricing is confidential and subject to signed agreement</li>
              <li>Payment terms: Net 30 days from invoice date</li>
              <li>Early payment discounts available (2% for payment within 10 days)</li>
              <li>Credit limits established based on financial assessment</li>
              <li>All prices are subject to change with 30 days written notice</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h4 className="font-semibold text-navy-900 mb-2">5. PRODUCT QUALITY AND STANDARDS</h4>
            <p className="text-gray-700 mb-2">Distributors must:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Maintain proper storage conditions for all products</li>
              <li>Follow FIFO (First In, First Out) inventory management</li>
              <li>Report any quality issues immediately</li>
              <li>Not alter, repackage, or modify products in any way</li>
              <li>Comply with all local regulations and licensing requirements</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h4 className="font-semibold text-navy-900 mb-2">6. MARKETING AND BRANDING</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Use only approved marketing materials and brand guidelines</li>
              <li>Obtain written approval for all promotional activities</li>
              <li>Participate in company-sponsored marketing campaigns</li>
              <li>Maintain professional representation of Peto Group brand</li>
              <li>Provide regular market feedback and sales reports</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h4 className="font-semibold text-navy-900 mb-2">7. TRAINING AND SUPPORT</h4>
            <p className="text-gray-700 mb-2">Peto Group provides:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Initial product training for distributor staff</li>
              <li>Ongoing technical support and consultation</li>
              <li>Marketing materials and promotional support</li>
              <li>Regular product updates and new product introductions</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h4 className="font-semibold text-navy-900 mb-2">8. CONFIDENTIALITY</h4>
            <p className="text-gray-700">
              All pricing, customer information, and business strategies shared by Peto Group are confidential.
              Distributors agree not to disclose this information to competitors or unauthorized parties.
            </p>
          </section>

          <Separator />

          <section>
            <h4 className="font-semibold text-navy-900 mb-2">9. TERMINATION</h4>
            <p className="text-gray-700 mb-2">
              This agreement may be terminated by either party with 30 days written notice for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Failure to meet minimum order requirements</li>
              <li>Breach of payment terms</li>
              <li>Violation of brand guidelines or quality standards</li>
              <li>Unauthorized sale outside designated territory</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h4 className="font-semibold text-navy-900 mb-2">10. GOVERNING LAW</h4>
            <p className="text-gray-700">
              This agreement is governed by the laws of Rwanda. Any disputes will be resolved through arbitration in
              Kigali, Rwanda.
            </p>
          </section>

          <Separator />

          <section>
            <h4 className="font-semibold text-navy-900 mb-2">11. APPLICATION PROCESS</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Applications are reviewed within 5-7 business days</li>
              <li>Credit and reference checks may be conducted</li>
              <li>Site visits may be required for territory assignments</li>
              <li>Final approval is at the sole discretion of Peto Group Ltd</li>
            </ul>
          </section>

          <div className="mt-6 p-4 bg-gold-50 border border-gold-200">
            <p className="text-sm text-gold-800">
              <strong>Note:</strong> These terms are subject to the final distributor agreement. Detailed terms and
              conditions will be provided upon approval of your application.
            </p>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
