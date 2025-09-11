// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

type Body = { name?: string; email?: string; company?: string; message?: string };
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = (await req.json()) as Body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 1) Send to your team inbox
    const { data, error } = await resend.emails.send({
      from: "VEYR <info@veyr.ch>",
      to: ["info@veyr.ch"],
      reply_to: email, // so you can just hit Reply
      subject: `New contact form submission`,
      text: `Name: ${name}
Email: ${email}
Company: ${company ?? "N/A"}

${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message || "Email failed" }, { status: 500 });
    }

    // 2) Fire-and-forget auto-reply (don’t block the response)
    // guard against loops (don’t auto-reply to your own domain)
    if (!email.endsWith("@veyr.ch")) {
      resend.emails
        .send({
          from: "VEYR <info@veyr.ch>",
          to: [email],
          subject: "We received your message",
          text: `Hi ${name},

Thanks for contacting VEYR — we’ve received your message and will get back to you shortly.

If this wasn’t you, please ignore this email.

— VEYR
info@veyr.ch`,
        })
        .catch((e) => console.error("Auto-reply error:", e));
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to send" }, { status: 500 });
  }
}
