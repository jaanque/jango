'use client'

import { usePathname } from 'next/navigation'
import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const noHeaderFooter =
    pathname === '/login' ||
    pathname === '/register' ||
    pathname.startsWith('/dashboard')

  return (
    <html lang="es" className="font-sans">
      <body className="antialiased" suppressHydrationWarning>
        {!noHeaderFooter && <Header />}
        <main>{children}</main>
        {!noHeaderFooter && <Footer />}
      </body>
    </html>
  )
}
