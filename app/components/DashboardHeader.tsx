import { createClient } from '@/lib/supabase/server'
import UserNav from '@/app/components/UserNav'
import Link from 'next/link'
import ClientOnly from './ClientOnly'

export default async function DashboardHeader() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <nav className="flex items-center space-x-6">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-slate-900">Dashboard</span>
          </Link>
          <Link
            href="/dashboard/problems"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Problems
          </Link>
          <Link
            href="/dashboard/submissions"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Submissions
          </Link>
        </nav>
        {user && <ClientOnly><UserNav user={user} /></ClientOnly>}
      </div>
    </header>
  )
}
