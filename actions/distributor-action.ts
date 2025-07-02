"use server"

import nodemailer from "nodemailer"

interface DistributorFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  businessName: string
  businessType: string
  yearsInBusiness: string
  registrationNumber?: string
  country: string
  city: string
  territory?: string
  address: string
  currentBrands?: string
  monthlyVolume: string
  salesTeam?: string
  warehouse?: string
  whyPartner: string
  marketingPlan?: string
  references?: string
}

export async function submitDistributorApplication(formData: FormData) {
  try {
    // Extract form data
    const data: DistributorFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      businessName: formData.get("businessName") as string,
      businessType: formData.get("businessType") as string,
      yearsInBusiness: formData.get("yearsInBusiness") as string,
      registrationNumber: (formData.get("registrationNumber") as string) || "",
      country: formData.get("country") as string,
      city: formData.get("city") as string,
      territory: (formData.get("territory") as string) || "",
      address: formData.get("address") as string,
      currentBrands: (formData.get("currentBrands") as string) || "",
      monthlyVolume: formData.get("monthlyVolume") as string,
      salesTeam: (formData.get("salesTeam") as string) || "",
      warehouse: (formData.get("warehouse") as string) || "",
      whyPartner: formData.get("whyPartner") as string,
      marketingPlan: (formData.get("marketingPlan") as string) || "",
      references: (formData.get("references") as string) || "",
    }

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "businessName",
      "businessType",
      "yearsInBusiness",
      "country",
      "city",
      "address",
      "monthlyVolume",
      "whyPartner",
    ]

    for (const field of requiredFields) {
      if (!data[field as keyof DistributorFormData]) {
        return {
          success: false,
          message: `${field} is required`,
        }
      }
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Distributor Application - Peto Group</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .section { margin-bottom: 25px; }
          .section h3 { color: #1e3a8a; border-bottom: 2px solid #fbbf24; padding-bottom: 5px; }
          .field { margin-bottom: 10px; }
          .field strong { color: #1e3a8a; }
          .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Distributor Application</h1>
          <p>Peto Group Ltd - Manufacturing Excellence</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>Personal Information</h3>
            <div class="field"><strong>Name:</strong> ${data.firstName} ${data.lastName}</div>
            <div class="field"><strong>Email:</strong> ${data.email}</div>
            <div class="field"><strong>Phone:</strong> ${data.phone}</div>
          </div>

          <div class="section">
            <h3>Business Information</h3>
            <div class="field"><strong>Business Name:</strong> ${data.businessName}</div>
            <div class="field"><strong>Business Type:</strong> ${data.businessType}</div>
            <div class="field"><strong>Years in Business:</strong> ${data.yearsInBusiness}</div>
            ${data.registrationNumber ? `<div class="field"><strong>Registration Number:</strong> ${data.registrationNumber}</div>` : ""}
          </div>

          <div class="section">
            <h3>Location & Market</h3>
            <div class="field"><strong>Country:</strong> ${data.country}</div>
            <div class="field"><strong>City:</strong> ${data.city}</div>
            ${data.territory ? `<div class="field"><strong>Preferred Territory:</strong> ${data.territory}</div>` : ""}
            <div class="field"><strong>Business Address:</strong> ${data.address}</div>
          </div>

          <div class="section">
            <h3>Experience & Capacity</h3>
            ${data.currentBrands ? `<div class="field"><strong>Current Brands:</strong> ${data.currentBrands}</div>` : ""}
            <div class="field"><strong>Expected Monthly Volume:</strong> ${data.monthlyVolume}</div>
            ${data.salesTeam ? `<div class="field"><strong>Sales Team Size:</strong> ${data.salesTeam}</div>` : ""}
            ${data.warehouse ? `<div class="field"><strong>Warehouse Capacity:</strong> ${data.warehouse}</div>` : ""}
          </div>

          <div class="section">
            <h3>Additional Information</h3>
            <div class="field"><strong>Why Partner with Peto Group:</strong><br>${data.whyPartner.replace(/\n/g, "<br>")}</div>
            ${data.marketingPlan ? `<div class="field"><strong>Marketing Strategy:</strong><br>${data.marketingPlan.replace(/\n/g, "<br>")}</div>` : ""}
            ${data.references ? `<div class="field"><strong>Business References:</strong><br>${data.references.replace(/\n/g, "<br>")}</div>` : ""}
          </div>
        </div>

        <div class="footer">
          <p>This application was submitted through the Peto Group website on ${new Date().toLocaleString()}</p>
          <p>Please review and respond within 2-3 business days</p>
        </div>
      </body>
      </html>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.PETO_GROUP_EMAIL || process.env.GMAIL_USER,
      subject: `New Distributor Application - ${data.businessName} (${data.country})`,
      html: emailHtml,
      replyTo: data.email,
    })

    // Send confirmation email to applicant
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Application Received - Peto Group</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .highlight { background: #fef3c7; padding: 15px; border-left: 4px solid #fbbf24; margin: 20px 0; }
          .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Application Received</h1>
          <p>Thank you for your interest in becoming a Peto Group distributor</p>
        </div>
        
        <div class="content">
          <p>Dear ${data.firstName} ${data.lastName},</p>
          
          <p>Thank you for submitting your distributor application for <strong>${data.businessName}</strong>. We have received your application and our team will review it carefully.</p>
          
          <div class="highlight">
            <h3>What happens next?</h3>
            <ul>
              <li>Our team will review your application within 2-3 business days</li>
              <li>We may contact you for additional information or clarification</li>
              <li>If approved, we'll schedule a call to discuss next steps</li>
              <li>A formal distributor agreement will be prepared</li>
            </ul>
          </div>

          <p>We appreciate your interest in partnering with Peto Group and look forward to potentially working together to bring our premium products to your market.</p>

          <p>If you have any questions in the meantime, please don't hesitate to contact us.</p>

          <p>Best regards,<br>
          <strong>Peto Group Partnership Team</strong><br>
          Email: partnerships@petogroup.com<br>
          Phone: +250 788 123 456</p>
        </div>

        <div class="footer">
          <p>Peto Group Ltd - Manufacturing Excellence</p>
          <p>Proudly Made in Rwanda | Serving East Africa</p>
        </div>
      </body>
      </html>
    `

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: data.email,
      subject: "Application Received - Peto Group Distributor Program",
      html: confirmationHtml,
    })

    return {
      success: true,
      message: "Application submitted successfully",
    }
  } catch (error) {
    console.error("Error submitting distributor application:", error)
    return {
      success: false,
      message: "Failed to submit application. Please try again later.",
    }
  }
}
