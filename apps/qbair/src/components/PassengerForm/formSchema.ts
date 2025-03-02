import { z } from 'zod';

const passengerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

const formSchema = z.object({
  passengers: z.array(passengerSchema),
});

type FormValues = z.infer<typeof formSchema>;

export { formSchema, type FormValues };
