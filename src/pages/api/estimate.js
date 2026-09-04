import { Resend } from "resend";

const TO_EMAIL = "wreckitortechitmail@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, service, details } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  const resend = new Resend(apiKey);

  const subject = `New estimate request: ${service || "General"} — ${name}`;
  const text = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "(not provided)"}`,
    `Service: ${service || "(not specified)"}`,
    "",
    "Project details:",
    details || "(none provided)",
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
      <h2 style="color: #ff6a00;">New Tree Boss estimate request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || "(not provided)")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "(not specified)")}</p>
      <p><strong>Project details:</strong></p>
      <pre style="white-space: pre-wrap; background: #f5f5f5; padding: 12px; border-radius: 6px;">${escapeHtml(details || "(none provided)")}</pre>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "Tree Boss Estimates <estimates@treeboss.com>",
      to: [TO_EMAIL],
      replyTo: email || undefined,
      subject,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send the request. Please try again." });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, """)
    .replace(/'/g, "&#39;");
}
