'use client'

import Link from 'next/link'

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/dashboard" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Dashboard</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
