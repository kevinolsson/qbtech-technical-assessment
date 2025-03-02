import { z } from 'zod';
import { parseDate } from '@internationalized/date';

const formSchema = z
  .object({
    departureDate: z.string().min(1, 'Departure date is required'),
    returnDate: z.string().refine(() => true, {
      message: 'Return date is required for return trips',
    }),
    passengers: z.number().min(1, 'At least 1 passenger is required').max(10, 'Maximum 10 passengers'),
    isReturnTrip: z.boolean().default(false),
  })
  .refine(
    (data) => {
      if (data.isReturnTrip) {
        return !!data.returnDate;
      }
      return true;
    },
    {
      message: 'Return date is required for return trips',
      path: ['returnDate'],
    },
  )
  .refine(
    (data) => {
      if (data.isReturnTrip && data.departureDate && data.returnDate) {
        const departure = parseDate(data.departureDate);
        const returnDate = parseDate(data.returnDate);
        return departure.compare(returnDate) <= 0;
      }
      return true;
    },
    {
      message: 'Departure date cannot be later than return date',
      path: ['departureDate'],
    },
  );

type FormValues = z.infer<typeof formSchema>;

export { formSchema, type FormValues };
