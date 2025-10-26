'use client';

import Link from 'next/link';
import Image from 'next/image';

const HamburgerIcon = () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>;

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image src="/logo.svg" alt="Logo Jango" width={28} height={28} className="h-7 w-7" />
              <span className="font-bold text-lg text-slate-900">Jango</span>
            </Link>
            <nav className="hidden items-center gap-4 md:flex">
              <Link href="#features" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Características</Link>
              <Link href="#testimonials" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Testimonios</Link>
              <Link href="#faq" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">FAQs</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block">Login</Link>
            <Link href="#" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800">Únete a la Liga</Link>
            <button className="p-2 text-slate-700 md:hidden" aria-label="Abrir menú"><HamburgerIcon /></button>
          </div>
        </div>
      </div>
    </header>
  );
}