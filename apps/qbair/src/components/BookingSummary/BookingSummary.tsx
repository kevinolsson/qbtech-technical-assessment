"use client";
import { usePassengerFormContext } from "@/contexts/PassengerFormContext/PassengerFormContext";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Alert } from 'ui';
import { useEffect } from 'react';

export const BookingSummary = () => {
  const { formData } = usePassengerFormContext();

  useEffect(() => {
    if (!formData) {
      redirect('/');
    }
  }, [formData]);

  if (!formData) {
    return null;
  }

  const { departureDate, returnDate, passengers } = formData;

  return <div className="flex flex-col gap-4">
    <Alert variant="success">
      <p>
        <span className="font-semibold">Booking confirmed!</span>
      </p>
      <p>
        Your booking has been confirmed. You can view your booking details below.
      </p>
    </Alert>

    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Booking Details</h2>
      {departureDate && (
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold">Departure Date:</span> {departureDate}
          </p>
        </div>
      )}
      {returnDate && (
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold">Return Date:</span> {returnDate}
          </p>
        </div>
      )}
      {passengers.map((passenger, index) => (
        <div key={index} className="flex flex-col gap-2">
          <p>
            <span className="font-semibold">Passenger {index + 1}:</span> {passenger.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {passenger.email}
          </p>
        </div>
      ))}
    </div>
    <hr className="border-gray-300" />
    <Link href="/" className="underline">
      Back to home
    </Link>
  </div>
}