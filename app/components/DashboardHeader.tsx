import { createClient } from '@/lib/supabase/server'
import UserNav from '@/app/components/UserNav'
import Link from 'next/link'

export default async function DashboardHeader() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/dashboard" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Dashboard</span>
          </Link>
          <Link
            href="/dashboard/problems"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Problems
          </Link>
          <Link
            href="/dashboard/submissions"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Submissions
          </Link>
        </nav>
        {user && <UserNav user={user} />}
      </div>
    </header>
  )
}
