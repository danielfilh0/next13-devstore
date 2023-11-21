import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  const message = 'Invalid environment variables.'
  console.error(message, parsedEnv.error.flatten().fieldErrors)

  throw new Error(message)
}

export const env = parsedEnv.data
