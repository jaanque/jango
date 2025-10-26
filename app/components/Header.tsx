'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HamburgerIcon = () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>;
const CloseIcon = () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-slate-200 bg-white/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo Jango" width={28} height={28} className="h-7 w-7" />
              <span className="font-bold text-xl text-slate-900">Jango</span>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#how-it-works" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Cómo Funciona</Link>
            <Link href="#pricing" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Planes</Link>
            <Link href="#faq" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">FAQs</Link>
          </nav>

          {/* Botones y Menú Móvil */}
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block">Login</Link>
            <Link href="#pricing" className="hidden rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 sm:block">Únete a la Liga</Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 md:hidden"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200">
          <nav className="flex flex-col items-center gap-4 p-6">
            <Link href="#how-it-works" className="text-base font-medium text-slate-700 hover:text-slate-900" onClick={() => setIsOpen(false)}>Cómo Funciona</Link>
            <Link href="#pricing" className="text-base font-medium text-slate-700 hover:text-slate-900" onClick={() => setIsOpen(false)}>Planes</Link>
            <Link href="#faq" className="text-base font-medium text-slate-700 hover:text-slate-900" onClick={() => setIsOpen(false)}>FAQs</Link>
            <div className="w-full border-t border-slate-100 my-2"></div>
            <Link href="#" className="text-base font-medium text-slate-700 hover:text-slate-900" onClick={() => setIsOpen(false)}>Login</Link>
            <Link href="#pricing" className="w-full text-center rounded-md bg-slate-900 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-800" onClick={() => setIsOpen(false)}>Únete a la Liga</Link>
          </nav>
        </div>
      )}
    </header>
  );
}