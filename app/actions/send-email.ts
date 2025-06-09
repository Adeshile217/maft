"use server"

export async function sendEmailViaGmail(emailData: {
  to: string
  subject: string
  html: string
  replyTo: string
}) {
  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_APP_PASSWORD

  if (!gmailUser || !gmailPassword) {
    throw new Error("Gmail credentials not configured")
  }

  try {
    // Use Gmail's REST API instead of SMTP
    const auth = Buffer.from(`${gmailUser}:${gmailPassword}`).toString("base64")

    const message = [
      `To: ${emailData.to}`,
      `From: "MAFT Technology" <${gmailUser}>`,
      `Reply-To: ${emailData.replyTo}`,
      `Subject: ${emailData.subject}`,
      `Content-Type: text/html; charset=utf-8`,
      "",
      emailData.html,
    ].join("\r\n")

    const encodedMessage = Buffer.from(message)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "")

    // Use Gmail API endpoint
    const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raw: encodedMessage,
      }),
    })

    if (!response.ok) {
      throw new Error(`Gmail API error: ${response.status}`)
    }

    return { success: true }
  } catch (error) {
    console.error("Gmail API error:", error)
    throw error
  }
}
