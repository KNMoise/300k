import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Named export for POST method
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "company",
      "inquiryType",
      "message",
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
        <title>New Contact Inquiry - Peto Group</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1a2332 0%, #28693c 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">📧 New Contact Inquiry From Contact Page</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Peto Group Ltd - Professional Contact Form</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px;">
            <!-- Contact Information -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a2332; margin-bottom: 20px; font-size: 20px; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">👤 Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #555; width: 30%;">Name:</td>
                  <td style="padding: 12px 0; color: #333;">${formData.firstName} ${formData.lastName}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 12px 0; color: #333;">${formData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 12px 0; color: #333;">${formData.phone}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Company:</td>
                  <td style="padding: 12px 0; color: #333;">${formData.company}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Inquiry Type:</td>
                  <td style="padding: 12px 0; color: #333;">
                    <span style="background-color: #D4AF37; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
                      ${formData.inquiryType.toUpperCase()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            
            <!-- Message -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a2332; margin-bottom: 20px; font-size: 20px; border-bottom: 2px solid #28693c; padding-bottom: 10px;">💬 Message</h2>
              <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #D4AF37; border-radius: 4px;">
                <p style="margin: 0; color: #333; line-height: 1.6;">${formData.message}</p>
              </div>
            </div>
            
            ${formData.newsletter ? `
            <!-- Newsletter Subscription -->
            <div style="margin-bottom: 30px;">
              <div style="background: #e8f4f8; padding: 15px; border-left: 4px solid #28693c; border-radius: 4px;">
                <p style="margin: 0; color: #333; font-weight: bold;">📧 Newsletter Subscription Requested</p>
              </div>
            </div>
            ` : ""}
            
            <!-- Action Required -->
            <div style="background: linear-gradient(135deg, #1a2332 0%, #28693c 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 10px 0; font-size: 18px;">⚡ Action Required</h3>
              <p style="margin: 0; opacity: 0.9;">Please respond to this inquiry based on the selected response time</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #1a2332; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">📅 Inquiry submitted on ${new Date().toLocaleString()}</p>
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
        <title>Contact Confirmation - Peto Group</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1a2332 0%, #28693c 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">✅ Message Received</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Thank you for contacting Peto Group Ltd</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px;">
            <p style="font-size: 18px; color: #1a2332; margin-bottom: 20px;">Dear ${formData.firstName} ${formData.lastName},</p>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">
              Thank you for reaching out to Peto Group Ltd! We have successfully received your inquiry and our professional team is already reviewing your message.
            </p>
            
            <!-- Inquiry Summary -->
            <div style="background: #f8f9fa; padding: 25px; margin: 25px 0; border-left: 4px solid #D4AF37; border-radius: 4px;">
              <h3 style="margin: 0 0 15px 0; color: #1a2332; font-size: 18px;">📋 Your Inquiry Summary</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555; width: 40%;">Inquiry Type:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.inquiryType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Contact:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.email} | ${formData.phone}</td>
                </tr>
              </table>
            </div>
            
            <!-- Response Time -->
            <div style="background: linear-gradient(135deg, #e8f4f8 0%, #f0f9ff 100%); padding: 25px; margin: 25px 0; border-left: 4px solid #28693c; border-radius: 4px;">
              <h4 style="margin: 0 0 15px 0; color: #1a2332; font-size: 16px;">⏰ Expected Response Time</h4>
              <p style="margin: 0; color: #555; line-height: 1.6;">
                Based on your inquiry type (<strong>${formData.inquiryType}</strong>), you can expect our response within:
                <br><strong style="color: #28693c;">
                ${formData.inquiryType === "general" ? "24 hours" : 
                  formData.inquiryType === "products" || formData.inquiryType === "bulk" ? "4 hours" : 
                  formData.inquiryType === "support" ? "2 hours" : "48 hours"}
                </strong>
              </p>
            </div>
            
            <!-- Contact Info -->
            <div style="background: linear-gradient(135deg, #e8f4f8 0%, #f0f9ff 100%); padding: 25px; margin: 25px 0; border-left: 4px solid #28693c; border-radius: 4px;">
              <h4 style="margin: 0 0 15px 0; color: #1a2332; font-size: 16px;">Need immediate assistance?</h4>
              <p style="margin: 0; color: #555; line-height: 1.6;">
                <strong>Call us directly:</strong> +250 788 431 288<<br>
                <strong>Email us:</strong> info@petogroup.rw<br>
                <strong>Business Hours:</strong> Monday - Saturday, 8:00 AM - 6:00 PM
              </p>
            </div>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">
              We appreciate your interest in our premium manufacturing solutions and look forward to building a successful partnership with you.
            </p>
            
            <p style="color: #1a2332; font-weight: bold; margin-bottom: 5px;">
              Best regards,<br>
              The Peto Group Professional Team
            </p>
            <p style="color: #D4AF37; font-weight: bold; margin: 0;">
              Manufacturing Excellence in Rwanda
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background: #1a2332; color: white; padding: 25px; text-align: center;">
            <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: bold;">Peto Group Ltd</p>
            <p style="margin: 0; font-size: 14px; opacity: 0.8;">
              Premium Personal Care & Cleaning Products<br>
              Kamonyi Ruyenze, Kigali, Rwanda<br>
              📧 info@petogroup.rw | +250 788 431 288<
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
      subject: `📧 New Contact Inquiry from ${formData.firstName} ${formData.lastName} - ${formData.company}`,
      html: adminEmailHtml,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Peto Group Ltd" <${process.env.GMAIL_USER}>`,
      to: formData.email,
      subject: "✅ Contact Confirmation - Peto Group Ltd",
      html: customerEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Contact message sent successfully",
    });

  } catch (error) {
    console.error("Error sending contact message:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send contact message. Please try again.",
        error: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

// Optional: Add other HTTP methods if needed
export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint is working" },
    { status: 200 }
  );
}