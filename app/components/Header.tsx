'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import JoinButton from '../JoinButton';

const HamburgerIcon = () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>;
const CloseIcon = () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-[2px] border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image src="/logo.svg" alt="Logo Jango" width={28} height={28} className="h-7 w-7" />
              <span className="font-bold text-xl text-foreground">Jango</span>
            </Link>
          </div>
          <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-center">
            <nav className="flex items-center gap-2">
              <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground px-3 py-2 rounded-md">Sistema de Juego</Link>
              <Link href="#advantages" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground px-3 py-2 rounded-md">Ventajas</Link>
              <Link href="#leagues" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground px-3 py-2 rounded-md">Ligas y Torneos</Link>
              <Link href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground px-3 py-2 rounded-md">FAQs</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <JoinButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground md:hidden"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-sm border-t border-border">
          <nav className="flex flex-col items-start gap-4 p-6">
            <Link href="#how-it-works" className="text-base font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>Sistema de Juego</Link>
            <Link href="#advantages" className="text-base font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>Ventajas</Link>
            <Link href="#leagues" className="text-base font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>Ligas y Torneos</Link>
            <Link href="#faq" className="text-base font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>FAQs</Link>
            <div className="w-full border-t border-border my-2"></div>
            <Link href="#cta" className="w-full text-center rounded-md px-4 py-3 text-base font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors" onClick={() => setIsOpen(false)}>Únete</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
