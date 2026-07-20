"use server";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(
  _prevState: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  // Honeypot — bots tend to fill every field, humans never see this one.
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const eventType = String(formData.get("eventType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !eventType || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "That email address doesn't look right." };
  }

  // NOTE: this is a placeholder handler — no email is actually sent yet.
  // Wire this up to a real provider before launch, e.g. Resend, SendGrid,
  // or a Formspree/Airtable webhook, using the validated fields above.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    status: "success",
    message: "Thank you! Your inquiry has been received, we'll reply within 1-2 business days.",
  };
}
