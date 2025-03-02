'use client';

import { createContext, useContext, useState } from 'react';
import { type FormValues } from '@/components/PassengerForm/formSchema';

type BookingFormData = FormValues & {
  departureDate?: string;
  returnDate?: string;
}

interface PassengerFormContextType {
  formData: BookingFormData | null;
  setFormData: (data: BookingFormData) => void;
  clearFormData: () => void;
}

const PassengerFormContext = createContext<PassengerFormContextType | undefined>(undefined);

const PassengerFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormDataState] = useState<BookingFormData | null>(null);

  const setFormData = (data: BookingFormData) => {
    setFormDataState(data);
  };

  const clearFormData = () => {
    setFormDataState(null);
  };

  return (
    <PassengerFormContext.Provider value={{ formData, setFormData, clearFormData }}>
      {children}
    </PassengerFormContext.Provider>
  );
};

const usePassengerFormContext = () => {
  const context = useContext(PassengerFormContext);
  if (context === undefined) {
    throw new Error('usePassengerFormContext must be used within a PassengerFormProvider');
  }
  return context;
};

export { PassengerFormProvider, usePassengerFormContext };
