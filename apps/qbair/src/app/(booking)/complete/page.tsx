import { BookingSummary } from "@/components/BookingSummary/BookingSummary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'QBair - Booking Complete - Technical Assessment',
};

export default function Complete() {
  return <section className="flex flex-col gap-6">
    <h1 className="text-2xl md:text-3xl font-semibold">Thank you for booking with us!</h1>
    <BookingSummary />
  </section>
}
