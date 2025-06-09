"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  currency: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Validation
    const validatedData = formSchema.parse(formData)

    if (!validatedData.email || !validatedData.name) {
      return { success: false, error: "Required fields missing" }
    }

    // Gmail SMTP Configuration (v0 Compatible)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Create professional email template
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Quote Request - MAFT Technology
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Client Information</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Service of Interest:</strong> ${validatedData.service}</p>
          ${validatedData.budget ? `<p><strong>Budget:</strong> ${validatedData.currency} ${validatedData.budget}</p>` : ""}
        </div>

        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${validatedData.message}</p>
        </div>

        <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            <strong>📧 Reply to:</strong> ${validatedData.email}<br>
            <strong>🕒 Submitted:</strong> ${new Date().toLocaleString("en-US", {
              timeZone: "Asia/Qatar",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })} (Qatar Time)
          </p>
        </div>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
        
        <p style="color: #64748b; font-size: 12px; text-align: center;">
          This email was sent from the MAFT Technology website contact form.<br>
          Qatar Freezone Business Innovation Park | service@maft-project.com
        </p>
      </div>
    `

    // Send Email
    await transporter.sendMail({
      from: `"MAFT Technology" <${process.env.GMAIL_USER}>`,
      to: "service@maft-project.com",
      replyTo: validatedData.email,
      subject: `New Quote Request: ${validatedData.service} - ${validatedData.name}`,
      html: emailTemplate,
    })

    console.log("✅ Email sent successfully to service@maft-project.com")
    console.log("Client:", validatedData.name, "Email:", validatedData.email)

    return {
      success: true,
      message: "Your quote request has been sent successfully! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("❌ Form submission error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs and try again.",
        errors: error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      }
    }

    return {
      success: false,
      error: "Failed to send email. Please contact us directly at service@maft-project.com or call +974 5503 2892.",
    }
  }
}
