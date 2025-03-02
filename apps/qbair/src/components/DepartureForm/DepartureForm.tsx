'use client';

import { Button, DeparturePicker, Form, NumberField } from 'ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, type FormValues } from './formSchema';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { parseDate, today } from '@internationalized/date';

const getInitialValues = (searchParams: URLSearchParams): Partial<FormValues> => {
  const defaultValues = {
    passengers: 1,
    departureDate: today('Europe/Stockholm').toString(),
    returnDate: '',
    isReturnTrip: false,
  };

  try {
    return {
      ...defaultValues,
      ...(searchParams.get('departureDate') && {
        departureDate: parseDate(searchParams.get('departureDate')!).toString()
      }),
      ...(searchParams.get('returnDate') && {
        returnDate: parseDate(searchParams.get('returnDate')!).toString(),
        isReturnTrip: true
      }),
      ...(searchParams.get('passengers') && {
        passengers: Math.min(Math.max(1, parseInt(searchParams.get('passengers')!, 10)), 10)
      }),
      ...(searchParams.get('isReturnTrip') && {
        isReturnTrip: searchParams.get('isReturnTrip') === 'true'
      })
    };
  } catch (error) {
    console.warn('Invalid URL parameters:', error);
    return defaultValues;
  }
};

const DepartureForm = () => {
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialValues = getInitialValues(searchParams);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const { register, formState: { errors }, setValue } = form;

  const onSubmit = (data: FormValues) => {
    startTransition(() => {
      try {
        const params = new URLSearchParams({
          departureDate: data.departureDate,
          passengers: data.passengers.toString(),
          ...(data.isReturnTrip && data.returnDate ? { returnDate: data.returnDate } : {}),
        });

        router.push(`/book?${params.toString()}`);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)} className="block space-y-6">
      <DeparturePicker
        {...register('departureDate')}
        isInvalid={!!errors.departureDate}
        errorMessage={errors.departureDate?.message}
        departureDate={initialValues.departureDate}
        returnDate={initialValues.returnDate}
        hasReturnTrip={initialValues.isReturnTrip}
        onChange={({ departureDate, returnDate }) => {
          if (departureDate) {
            setValue('departureDate', departureDate.toString(), { shouldValidate: true });
          } else {
            setValue('departureDate', '', { shouldValidate: true });
          }

          if (returnDate) {
            setValue('returnDate', returnDate.toString(), { shouldValidate: true });
          } else {
            setValue('returnDate', '', { shouldValidate: true });
          }
        }}
        onReturnTripChange={(isReturnTrip) => {
          setValue('isReturnTrip', isReturnTrip, { shouldValidate: true });
          setValue('departureDate', '');
          setValue('returnDate', '');
        }}
      />
      <NumberField
        {...register('passengers')}
        value={form.watch('passengers')}
        minValue={1}
        maxValue={10}
        label="Number of passengers"
        isInvalid={!!errors.passengers}
        errorMessage={errors.passengers?.message}
        onChange={(value) => setValue('passengers', value, { shouldValidate: true })}
        onIncrement={() => {
          const currentValue = form.watch('passengers');
          if (currentValue < 10) {
            setValue('passengers', currentValue + 1, { shouldValidate: true });
          }
        }}
        onDecrement={() => {
          const currentValue = form.watch('passengers');
          if (currentValue > 1) {
            setValue('passengers', currentValue - 1, { shouldValidate: true });
          }
        }}
      />
      <div className="flex flex-col md:flex-row text-left gap-4 justify-center items-center">
        <Button loading={isLoading} type="submit">Book Trip</Button>
        <p className="text-sm opacity-50 md:max-w-2/3">
          You will be asked to enter (fake) passenger information in the next step.
        </p>
      </div>
    </Form>
  );
};

export { DepartureForm };
