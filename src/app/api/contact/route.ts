// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = (await req.json()) as Partial<ContactBody>;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 1) Send to your team inbox
    const { data, error } = await resend.emails.send({
      from: "VEYR <info@veyr.ch>",
      to: ["info@veyr.ch"],
      replyTo: email, // 👈 FIX: camelCase for the SDK
      subject: "New contact form submission",
      text: `Name: ${name}
Email: ${email}
Company: ${company ?? "N/A"}

${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message || "Email failed" }, { status: 500 });
    }

    // 2) Fire-and-forget auto-reply
    if (!email.endsWith("@veyr.ch")) {
      void resend.emails.send({
        from: "VEYR <info@veyr.ch>",
        to: [email],
        subject: "We received your message",
        text: `Hi ${name},

Thanks for contacting VEYR — we’ve received your message and will get back to you shortly.

— VEYR`,
      });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to send";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
