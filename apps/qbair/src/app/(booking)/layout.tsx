import { PassengerFormProvider } from '@/contexts/PassengerFormContext/PassengerFormContext';
import React from 'react';
import { Card, Logo } from 'ui';

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (<PassengerFormProvider>
    <div
      className="bg-gray-100 dark:bg-gray-950 w-full min-h-dvh h-full py-24"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-4 h-full p-4">
        <Logo />
        <Card className="p-6 shadow-none">
          {children}
        </Card>
      </div>

    </div>
  </PassengerFormProvider>);
}
