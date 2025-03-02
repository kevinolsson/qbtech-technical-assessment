import { PassengerForm } from "@/components/PassengerForm/PassengerForm";
import { DepartureSummary } from "@/components/DepartureSummary/DepartureSummary";
export default function Book() {
  return <section className="flex flex-col gap-6">
    <DepartureSummary />
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold">Passenger Information</h1>
      <p className="text-gray-500">You&apos;re almost done! We just need your fake passenger information before we&apos;re set!</p>
    </div>
    <PassengerForm />
  </section>;
}
