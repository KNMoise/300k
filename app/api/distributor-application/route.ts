import { type NextRequest, NextResponse } from "next/server"
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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Extract and validate form data
    const data: DistributorFormData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      businessName: formData.businessName,
      businessType: formData.businessType,
      yearsInBusiness: formData.yearsInBusiness,
      registrationNumber: formData.registrationNumber || "",
      country: formData.country,
      city: formData.city,
      territory: formData.territory || "",
      address: formData.address,
      currentBrands: formData.currentBrands || "",
      monthlyVolume: formData.monthlyVolume,
      salesTeam: formData.salesTeam || "",
      warehouse: formData.warehouse || "",
      whyPartner: formData.whyPartner,
      marketingPlan: formData.marketingPlan || "",
      references: formData.references || "",
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
        return NextResponse.json({ success: false, message: `${field} is required` }, { status: 400 })
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address" }, { status: 400 })
    }

    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing email configuration")
      return NextResponse.json({ success: false, message: "Email service is not configured" }, { status: 500 })
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
    } catch (error) {
      console.error("Email transporter verification failed:", error)
      return NextResponse.json({ success: false, message: "Email service configuration error" }, { status: 500 })
    }

    // Email content for Peto Group
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Distributor Application - Peto Group</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0; 
          }
          .container { max-width: 800px; margin: 0 auto; }
          .header { 
            background: linear-gradient(135deg, #1e3a8a, #3b82f6); 
            color: white; 
            padding: 30px 20px; 
            text-align: center; 
          }
          .header h1 { margin: 0; font-size: 28px; }
          .header p { margin: 10px 0 0 0; opacity: 0.9; }
          .content { padding: 30px 20px; }
          .section { 
            margin-bottom: 30px; 
            background: #f8f9fa; 
            padding: 20px; 
            border-radius: 8px; 
          }
          .section h3 { 
            color: #1e3a8a; 
            border-bottom: 3px solid #fbbf24; 
            padding-bottom: 8px; 
            margin-top: 0; 
          }
          .field { 
            margin-bottom: 12px; 
            padding: 8px 0; 
            border-bottom: 1px solid #e5e7eb; 
          }
          .field:last-child { border-bottom: none; }
          .field strong { color: #1e3a8a; font-weight: 600; }
          .field-value { margin-top: 4px; }
          .footer { 
            background: #f3f4f6; 
            padding: 20px; 
            text-align: center; 
            font-size: 14px; 
            color: #666; 
          }
          .highlight { 
            background: #fef3c7; 
            padding: 15px; 
            border-left: 4px solid #fbbf24; 
            margin: 20px 0; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Distributor Application</h1>
            <p>Peto Group Ltd - Manufacturing Excellence</p>
          </div>
          
          <div class="content">
            <div class="highlight">
              <strong>Application Summary:</strong> ${data.businessName} from ${data.city}, ${data.country} 
              has applied to become a distributor with expected monthly volume of ${data.monthlyVolume}.
            </div>

            <div class="section">
              <h3>👤 Personal Information</h3>
              <div class="field">
                <strong>Full Name:</strong>
                <div class="field-value">${data.firstName} ${data.lastName}</div>
              </div>
              <div class="field">
                <strong>Email Address:</strong>
                <div class="field-value">${data.email}</div>
              </div>
              <div class="field">
                <strong>Phone Number:</strong>
                <div class="field-value">${data.phone}</div>
              </div>
            </div>

            <div class="section">
              <h3>🏢 Business Information</h3>
              <div class="field">
                <strong>Business Name:</strong>
                <div class="field-value">${data.businessName}</div>
              </div>
              <div class="field">
                <strong>Business Type:</strong>
                <div class="field-value">${data.businessType}</div>
              </div>
              <div class="field">
                <strong>Years in Business:</strong>
                <div class="field-value">${data.yearsInBusiness}</div>
              </div>
              ${
                data.registrationNumber
                  ? `
              <div class="field">
                <strong>Registration Number:</strong>
                <div class="field-value">${data.registrationNumber}</div>
              </div>
              `
                  : ""
              }
            </div>

            <div class="section">
              <h3>📍 Location & Market</h3>
              <div class="field">
                <strong>Country:</strong>
                <div class="field-value">${data.country}</div>
              </div>
              <div class="field">
                <strong>City:</strong>
                <div class="field-value">${data.city}</div>
              </div>
              ${
                data.territory
                  ? `
              <div class="field">
                <strong>Preferred Territory:</strong>
                <div class="field-value">${data.territory}</div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <strong>Business Address:</strong>
                <div class="field-value">${data.address.replace(/\n/g, "<br>")}</div>
              </div>
            </div>

            <div class="section">
              <h3>📊 Experience & Capacity</h3>
              ${
                data.currentBrands
                  ? `
              <div class="field">
                <strong>Current Brands Distributed:</strong>
                <div class="field-value">${data.currentBrands.replace(/\n/g, "<br>")}</div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <strong>Expected Monthly Volume:</strong>
                <div class="field-value">${data.monthlyVolume}</div>
              </div>
              ${
                data.salesTeam
                  ? `
              <div class="field">
                <strong>Sales Team Size:</strong>
                <div class="field-value">${data.salesTeam} representatives</div>
              </div>
              `
                  : ""
              }
              ${
                data.warehouse
                  ? `
              <div class="field">
                <strong>Warehouse/Storage Capacity:</strong>
                <div class="field-value">${data.warehouse.replace(/\n/g, "<br>")}</div>
              </div>
              `
                  : ""
              }
            </div>

            <div class="section">
              <h3>💡 Additional Information</h3>
              <div class="field">
                <strong>Why Partner with Peto Group:</strong>
                <div class="field-value">${data.whyPartner.replace(/\n/g, "<br>")}</div>
              </div>
              ${
                data.marketingPlan
                  ? `
              <div class="field">
                <strong>Marketing Strategy:</strong>
                <div class="field-value">${data.marketingPlan.replace(/\n/g, "<br>")}</div>
              </div>
              `
                  : ""
              }
              ${
                data.references
                  ? `
              <div class="field">
                <strong>Business References:</strong>
                <div class="field-value">${data.references.replace(/\n/g, "<br>")}</div>
              </div>
              `
                  : ""
              }
            </div>
          </div>

          <div class="footer">
            <p><strong>Application submitted:</strong> ${new Date().toLocaleString()}</p>
            <p>Please review and respond within 2-3 business days</p>
            <p>Reply directly to this email to contact the applicant</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email to Peto Group
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.PETO_GROUP_EMAIL || process.env.GMAIL_USER,
      subject: `🚀 New Distributor Application - ${data.businessName} (${data.country})`,
      html: emailHtml,
      replyTo: data.email,
    })

    // Confirmation email for applicant
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Application Received - Peto Group</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0; 
          }
          .container { max-width: 600px; margin: 0 auto; }
          .header { 
            background: linear-gradient(135deg, #1e3a8a, #3b82f6); 
            color: white; 
            padding: 30px 20px; 
            text-align: center; 
          }
          .header h1 { margin: 0; font-size: 28px; }
          .header p { margin: 10px 0 0 0; opacity: 0.9; }
          .content { padding: 30px 20px; }
          .highlight { 
            background: #fef3c7; 
            padding: 20px; 
            border-left: 4px solid #fbbf24; 
            margin: 25px 0; 
            border-radius: 0 8px 8px 0; 
          }
          .highlight h3 { margin-top: 0; color: #92400e; }
          .highlight ul { margin: 10px 0; }
          .highlight li { margin: 8px 0; }
          .footer { 
            background: #f3f4f6; 
            padding: 20px; 
            text-align: center; 
            font-size: 14px; 
            color: #666; 
          }
          .contact-info { 
            background: #e0f2fe; 
            padding: 20px; 
            border-radius: 8px; 
            margin: 20px 0; 
          }
          .contact-info h4 { margin-top: 0; color: #0369a1; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Application Received</h1>
            <p>Thank you for your interest in becoming a Peto Group distributor</p>
          </div>
          
          <div class="content">
            <p>Dear <strong>${data.firstName} ${data.lastName}</strong>,</p>
            
            <p>Thank you for submitting your distributor application for <strong>${data.businessName}</strong>. 
            We have successfully received your application and our partnership team will review it carefully.</p>
            
            <div class="highlight">
              <h3>📋 What happens next?</h3>
              <ul>
                <li><strong>Review Process:</strong> Our team will review your application within 2-3 business days</li>
                <li><strong>Initial Assessment:</strong> We'll evaluate your business profile and market potential</li>
                <li><strong>Follow-up Contact:</strong> We may contact you for additional information or clarification</li>
                <li><strong>Decision & Next Steps:</strong> If approved, we'll schedule a call to discuss partnership details</li>
                <li><strong>Agreement:</strong> A formal distributor agreement will be prepared for successful applicants</li>
              </ul>
            </div>

            <p>We're excited about the possibility of partnering with you to bring our premium products to the ${data.country} market. 
            Your application shows great potential, and we look forward to exploring this opportunity together.</p>

            <div class="contact-info">
              <h4>📞 Need to reach us?</h4>
              <p>If you have any questions about your application or our products, please don't hesitate to contact our partnership team:</p>
              <p>
                <strong>Email:</strong> partnerships@petogroup.com<br>
                <strong>Phone:</strong> +250 788 123 456<br>
                <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM (EAT)
              </p>
            </div>

            <p>Thank you again for your interest in Peto Group. We appreciate the time you took to complete our comprehensive application.</p>

            <p>Best regards,<br>
            <strong>Peto Group Partnership Team</strong><br>
            <em>Manufacturing Excellence | Proudly Made in Rwanda</em></p>
          </div>

          <div class="footer">
            <p><strong>Peto Group Ltd</strong> - Manufacturing Excellence</p>
            <p>Serving East Africa with Premium Quality Products</p>
            <p><small>This is an automated confirmation. Please do not reply to this email.</small></p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send confirmation email to applicant
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: data.email,
      subject: "✅ Application Received - Peto Group Distributor Program",
      html: confirmationHtml,
    })

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Check your email for confirmation.",
    })
  } catch (error) {
    console.error("Error processing distributor application:", error)

    // Return appropriate error message
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: "Failed to submit application. Please try again later." },
        { status: 500 },
      )
    }

    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 },
    )
  }
}
