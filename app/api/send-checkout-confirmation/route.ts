// app/api/send-checkout-confirmation/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const {
      email,
      name,
      address,
      city,
      postalCode,
      country,
      paymentMethod,
      cart,
    } = await req.json();

    const orderSummary = cart
      .map(
        (item: any) =>
          `<li>${item.name} × ${item.quantity} — €${(
            item.price * item.quantity
          ).toFixed(2)}</li>`,
      )
      .join("");

    const total = cart.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0,
    );

    await resend.emails.send({
      from: "trycaze@proton.me",
      to: email,
      subject: "Potvrda narudžbe",
      html: `
        <h2>Hvala na narudžbi, ${name}!</h2>
        <p><strong>Način plaćanja:</strong> ${
          paymentMethod === "credit"
            ? "Kartica - IBAN: HR12 3456 7890 1234"
            : paymentMethod === "paypal"
              ? 'PayPal - <a href="https://paypal.me/yourlink">klikni ovdje</a>'
              : "Plaćanje prilikom dostave"
        }</p>
        <ul>${orderSummary}</ul>
        <p><strong>Ukupno:</strong> €${total.toFixed(2)}</p>
      `,
    });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "trycaze@proton.me",
      subject: `Nova narudžba od ${name}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Adresa:</strong> ${address}, ${postalCode} ${city}, ${country}</p>
        <ul>${orderSummary}</ul>
        <p><strong>Ukupno:</strong> €${total.toFixed(2)}</p>
      `,
    });

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send checkout email" },
      { status: 500 },
    );
  }
}
