import { PassengerForm } from "@/components/PassengerForm/PassengerForm";
import { DepartureSummary } from "@/components/DepartureSummary/DepartureSummary";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'QBair - Passenger Information - Technical Assessment',
};


export default function Book() {
  return <section className="flex flex-col gap-6">
    <Suspense>
      <DepartureSummary />
    </Suspense>
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold">Passenger Information</h1>
      <p>You&apos;re almost done! We just need your fake passenger information before we&apos;re set!</p>
    </div>
    <Suspense>
      <PassengerForm />
    </Suspense>
  </section>;
}
