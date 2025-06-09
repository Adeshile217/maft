// Email configuration - DO NOT commit real credentials to version control
export const emailConfig = {
  // These should be set via environment variables in production
  gmail: {
    user: process.env.GMAIL_USER || "muhammedibraheem.a@gmail.com",
    password: process.env.GMAIL_APP_PASSWORD || "ovpo sjvy psdy jvid",
  },
  // Fallback configuration
  fallback: {
    service: "console", // Will log to console if email fails
  },
}

// Validate email configuration
export function validateEmailConfig() {
  const { gmail } = emailConfig

  if (!gmail.user || !gmail.password) {
    console.warn("Gmail credentials not fully configured")
    return false
  }

  return true
}
