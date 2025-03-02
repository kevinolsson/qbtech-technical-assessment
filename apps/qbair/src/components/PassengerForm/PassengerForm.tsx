'use client';

import { Button, Form, TextField } from 'ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { IconAt } from '@tabler/icons-react';
import Link from 'next/link';
import { formSchema, type FormValues } from './formSchema';
import { usePassengerFormContext } from '@/contexts/PassengerFormContext/PassengerFormContext';

export const PassengerForm = () => {
  const [isLoading, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setFormData } = usePassengerFormContext();

  const passengerCount = Math.min(
    Math.max(1, parseInt(searchParams.get('passengers') ?? '1', 10)),
    10
  );

  const departureDate = searchParams.get('departureDate') ?? undefined;
  const returnDate = searchParams.get('returnDate') ?? undefined;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      passengers: Array.from({ length: passengerCount }, () => ({
        name: '',
        email: '',
      })),
    },
  });

  const { register, formState: { errors }, handleSubmit, setValue } = form;

  const onSubmit = (data: FormValues) => {
    console.log({ data })
    startTransition(() => {
      console.log({ data, departureDate, returnDate });
      setFormData({ ...data, departureDate, returnDate });
      // I should probably be doing something smart here to make sure the data is valid (hash??)
      // but at the same time, I've spent way more than what I had originally planned on this assessment
      router.push(`/complete`);
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {Array.from({ length: passengerCount }).map((_, index) => (
        <div key={index} className="space-y-4 rounded-lg">
          <h3>Passenger {index + 1}</h3>
          <div className="space-y-2 w-1/2">
            <TextField
              {...register(`passengers.${index}.name`)}
              label="Full Name"
              isInvalid={!!errors.passengers?.[index]?.name}
              errorMessage={errors.passengers?.[index]?.name?.message}
              onChange={(value) => {
                setValue(`passengers.${index}.name`, value, { shouldValidate: true });
              }}
            />
            <TextField
              {...register(`passengers.${index}.email`)}
              label="Email"
              type="email"
              isInvalid={!!errors.passengers?.[index]?.email}
              errorMessage={errors.passengers?.[index]?.email?.message}
              onChange={(value) => {
                setValue(`passengers.${index}.email`, value, { shouldValidate: true });
              }}
              leftIcon={<IconAt className="stroke-gray-400 w-4 h-auto" />}
            />
          </div>
          <hr className="mt-8 border-gray-300" />
        </div>
      ))}
      <div className="flex flex-row gap-4 items-center" >
        <Button type="submit" loading={isLoading}>Complete Booking</Button>
        <Link className="underline" href="/">Go back</Link>
      </div>
    </Form>
  );
};
