"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EnquiryState = {
  success: boolean;
  message: string;
};

export async function submitEnquiry(
  _previousState: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const enquiry = String(formData.get("enquiry") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !enquiry || !message) {
    return {
      success: false,
      message: "Please complete all required fields.",
    };
  }

  if (!process.env.CONTACT_EMAIL) {
    return {
      success: false,
      message: "The enquiry email destination is not configured.",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: "MICT Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New MICT Website Enquiry — ${enquiry}`,
      text: `
New enquiry received through the MICT Technology Solutions website.

Name: ${name}
Organization: ${company || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Enquiry Type: ${enquiry}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend email error:", error);

      return {
        success: false,
        message:
          "We could not send your enquiry right now. Please contact us through WhatsApp.",
      };
    }

    return {
      success: true,
      message:
        "Thank you. Your enquiry has been received. We will get back to you shortly.",
    };
  } catch (error) {
    console.error("Unexpected enquiry error:", error);

    return {
      success: false,
      message:
        "Something went wrong while sending your enquiry. Please try again or contact us through WhatsApp.",
    };
  }
}