import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const method = searchParams.get("method");

  const getMessage = () => {
    switch (method) {
      case "credit":
        return "Please transfer the total to our IBAN: GB00 BANK 1234 5678 90. Your order will be processed once the payment is received.";
      case "paypal":
        return "Please complete your payment via PayPal at paypal.me/yourcompany. Your order will be confirmed after the transaction.";
      case "cash":
        return "You chose to pay on delivery. Please have the exact amount ready. We will confirm your order shortly.";
      default:
        return "Thank you for your order!";
    }
  };

  return (
    <div className="mx-auto max-w-xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Order Confirmed</h1>
      <p className="mb-2">
        Thank you for your order{email ? `, ${email}` : ""}.
      </p>
      <p className="mb-6">{getMessage()}</p>
      <Link href="/" className="text-blue-600 underline">
        Return to Homepage
      </Link>
    </div>
  );
}
