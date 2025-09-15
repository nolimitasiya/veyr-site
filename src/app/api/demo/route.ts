// app/api/demo/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const firstName = String(form.get("firstName") || "");
    const lastName  = String(form.get("lastName") || "");
    const email     = String(form.get("email") || "");
    const company   = String(form.get("company") || "");
    const countryCode = String(form.get("countryCode") || "");
    const otherCode   = String(form.get("otherCountryCode") || "");
    const phone     = String(form.get("phone") || "");
    const timezone  = String(form.get("timezone") || "");
    const preferred = String(form.get("preferredTimes") || "");
    const notes     = String(form.get("notes") || "");
    const source    = String(form.get("source") || "Homepage #demo");
    const phoneOut  = `${otherCode || countryCode} ${phone}`.trim();

    const resend = new Resend(process.env.RESEND_API_KEY!);
    const from = `VEYR <${process.env.FROM_EMAIL!}>`;
    const toOwner = process.env.DEMO_TO || process.env.FROM_EMAIL!;

    // 1) Notify you
    await resend.emails.send({
      from,
      to: toOwner,
      subject: "Demo Request",
      reply_to: email ? [email] : undefined,
      text:
`New demo request:

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Phone: ${phoneOut}
Timezone: ${timezone}
Preferred times: ${preferred}
Notes: ${notes}

Source: ${source}`,
      html:
`<h3>New demo request</h3>
<p><strong>Name:</strong> ${esc(firstName)} ${esc(lastName)}<br/>
<strong>Email:</strong> ${esc(email)}<br/>
<strong>Company:</strong> ${esc(company)}<br/>
<strong>Phone:</strong> ${esc(phoneOut)}<br/>
<strong>Timezone:</strong> ${esc(timezone)}<br/>
<strong>Preferred times:</strong> ${esc(preferred || "-")}</p>
<p><strong>Notes:</strong><br/>${esc(notes || "-").replace(/\n/g,"<br/>")}</p>
<p><em>Source:</em> ${esc(source)}</p>`
    });

    // 2) Auto-reply to the visitor
    if (email) {
      await resend.emails.send({
        from,
        to: email,
        subject: "VEYR — demo request received",
        text:
`Hi ${firstName || "there"},

Thanks for requesting a VEYR demo 

We’ll review your details and get back within 1–2 business days to schedule a time that works for you.

To speed things up, feel free to reply with:
• Preferred days/times (with timezone)
• Rough fleet size / vehicle types
• Any specific questions or outcomes you’re looking for

Thank you,
VEYR Team`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Resend demo error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Email send failed" },
      { status: 500 }
    );
  }
}
