import { z } from 'zod';

export type Env = z.infer<typeof envSchema>;

const envSchema = z.object({
  USERNAME: z.string().min(1),
  PASSWORD: z.string().min(1)
});

export const env = envSchema.parse(process.env);
