import { z } from 'zod';

export const Input = z.object({
  message: z.string().min(1).max(100),
});
export type Input = z.infer<typeof Input>;
