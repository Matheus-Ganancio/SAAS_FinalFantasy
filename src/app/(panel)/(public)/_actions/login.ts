// como é uma server action do Next.js, a gente tem que iniciar o arquivo com "use server"
"use server"

import { signIn } from '@/lib/auth'

export async function handleRegister(provider: string) {
    await signIn(provider, { redirectTo: '/dashboard' })
}