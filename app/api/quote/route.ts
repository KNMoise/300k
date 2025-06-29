import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "company",
      "productCategory",
      "quantity",
      "urgency",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Test the connection
    await transporter.verify();

    // Email to admin
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Quote Request - Peto Group</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1a2332 0%, #28693c 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🎯 New Quote Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Peto Group Ltd - Manufacturing</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px;">
            <!-- Contact Information -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a2332; margin-bottom: 20px; font-size: 20px; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">👤 Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #555; width: 30%;">Name:</td>
                  <td style="padding: 12px 0; color: #333;">${
                    formData.firstName
                  } ${formData.lastName}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 12px 0; color: #333;">${
                    formData.email
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 12px 0; color: #333;">${
                    formData.phone
                  }</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Company:</td>
                  <td style="padding: 12px 0; color: #333;">${
                    formData.company
                  }</td>
                </tr>
              </table>
            </div>
            
            <!-- Product Requirements -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a2332; margin-bottom: 20px; font-size: 20px; border-bottom: 2px solid #28693c; padding-bottom: 10px;">📦 Product Requirements</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #555; width: 30%;">Category:</td>
                  <td style="padding: 12px 0; color: #333;">${
                    formData.productCategory
                  }</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Quantity:</td>
                  <td style="padding: 12px 0; color: #333;">${
                    formData.quantity
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Urgency:</td>
                  <td style="padding: 12px 0; color: #333;">
                    <span style="background-color: ${
                      formData.urgency === "emergency"
                        ? "#ef4444"
                        : formData.urgency === "urgent"
                        ? "#f59e0b"
                        : formData.urgency === "priority"
                        ? "#3b82f6"
                        : "#10b981"
                    }; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
                      ${formData.urgency.toUpperCase()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            
            ${
              formData.message
                ? `
            <!-- Additional Requirements -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a2332; margin-bottom: 20px; font-size: 20px; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">💬 Additional Requirements</h2>
              <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #D4AF37; border-radius: 4px;">
                <p style="margin: 0; color: #333; line-height: 1.6;">${formData.message}</p>
              </div>
            </div>
            `
                : ""
            }
            
            <!-- Action Required -->
            <div style="background: linear-gradient(135deg, #1a2332 0%, #28693c 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 10px 0; font-size: 18px;">⚡ Action Required</h3>
              <p style="margin: 0; opacity: 0.9;">Please respond to this quote request within 24 hours</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #1a2332; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">📅 Request submitted on ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.7;">Peto Group Ltd - Kamonyi Ruyenze, Kigali, Rwanda</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quote Request Confirmation - Peto Group</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1a2332 0%, #28693c 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">✅ Quote Request Received</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Thank you for choosing Peto Group Ltd</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px;">
            <p style="font-size: 18px; color: #1a2332; margin-bottom: 20px;">Dear ${formData.firstName} ${formData.lastName},</p>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">
              Thank you for your quote request! We have received your inquiry and our team is already working on preparing a detailed, personalized quote for your requirements.
            </p>
            
            <!-- Request Summary -->
            <div style="background: #f8f9fa; padding: 25px; margin: 25px 0; border-left: 4px solid #D4AF37; border-radius: 4px;">
              <h3 style="margin: 0 0 15px 0; color: #1a2332; font-size: 18px;">📋 Your Request Summary</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555; width: 40%;">Product Category:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.productCategory}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Quantity:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.quantity}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Urgency:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.urgency}</td>
                </tr>
              </table>
            </div>
            
            <!-- What's Next -->
            <div style="margin: 30px 0;">
              <h3 style="color: #1a2332; margin-bottom: 15px; font-size: 18px;">What happens next?</h3>
              <div style="margin-left: 20px;">
                <div style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                  <span style="color: #D4AF37; font-weight: bold; margin-right: 10px;">1.</span>
                  <span style="color: #555; line-height: 1.5;">Our team will review your requirements within 2-4 hours</span>
                </div>
                <div style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                  <span style="color: #D4AF37; font-weight: bold; margin-right: 10px;">2.</span>
                  <span style="color: #555; line-height: 1.5;">We'll prepare a detailed quote with pricing and specifications</span>
                </div>
                <div style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                  <span style="color: #D4AF37; font-weight: bold; margin-right: 10px;">3.</span>
                  <span style="color: #555; line-height: 1.5;">You'll receive our comprehensive response within 24 hours</span>
                </div>
                <div style="display: flex; align-items: flex-start;">
                  <span style="color: #D4AF37; font-weight: bold; margin-right: 10px;">4.</span>
                  <span style="color: #555; line-height: 1.5;">For urgent requests, we'll prioritize and respond even faster</span>
                </div>
              </div>
            </div>
            
            <!-- Contact Info -->
            <div style="background: linear-gradient(135deg, #e8f4f8 0%, #f0f9ff 100%); padding: 25px; margin: 25px 0; border-left: 4px solid #28693c; border-radius: 4px;">
              <h4 style="margin: 0 0 15px 0; color: #1a2332; font-size: 16px;"> Need immediate assistance?</h4>
              <p style="margin: 0; color: #555; line-height: 1.6;">
                <strong>Call us directly:</strong> ++250 788 431 288<br>
                <strong>Email us:</strong> sales@petogroup.rw<br>
                <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM
              </p>
            </div>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">
              We appreciate your interest in our products and look forward to serving you with excellence.
            </p>
            
            <p style="color: #1a2332; font-weight: bold; margin-bottom: 5px;">
              Best regards,<br>
              The Peto Group Sales Team
            </p>
            <p style="color: #D4AF37; font-weight: bold; margin: 0;">
              Manufacturing Excellence
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background: #1a2332; color: white; padding: 25px; text-align: center;">
            <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: bold;">Peto Group Ltd</p>
            <p style="margin: 0; font-size: 14px; opacity: 0.8;">
              Personal Care & Cleaning Products<br>
              Kamonyi Ruyenze, Kigali, Rwanda<br>
              📧 info@petogroup.rw | +250 781 727 544
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: `"Peto Group Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `🎯 New Quote Request from ${formData.firstName} ${formData.lastName} - ${formData.company}`,
      html: adminEmailHtml,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Peto Group Ltd" <${process.env.GMAIL_USER}>`,
      to: formData.email,
      subject: "✅ Quote Request Confirmation - Peto Group Ltd",
      html: customerEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
    });
  } catch (error) {
    console.error("Error sending quote request:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send quote request. Please try again.",
      },
      { status: 500 }
    );
  }
}
