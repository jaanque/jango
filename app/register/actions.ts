'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function signup(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirm-password') as string
  const supabase = await createClient()

  if (password !== confirmPassword) {
    return redirect('/register?message=Passwords do not match')
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return redirect('/register?message=Could not authenticate user')
  }

  return redirect('/register?message=Check email to continue sign in process')
}
