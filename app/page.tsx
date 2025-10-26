'use client';

import { useState } from 'react';
import Image from 'next/image';
import RankingAnimation from './components/RankingAnimation';

// --- Iconos y Componentes Internos ---
const ChevronDownIcon = () => <svg className="h-5 w-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;
const ArrowRightIcon = () => <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>;
const CodeBracketIcon = () => <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const ZapIcon = () => <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const TrophyIcon = () => <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6M9 19H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4m-6 0a2 2 0 002 2h2a2 2 0 002-2m-6 0V5" /></svg>;

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between text-left">
        <span className="text-lg font-medium text-slate-800">{question}</span>
        <span className={`${isOpen ? 'rotate-180' : ''}`}><ChevronDownIcon /></span>
      </button>
      {isOpen && <p className="mt-4 text-slate-600">{answer}</p>}
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative flex min-h-screen items-center overflow-hidden aurora-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-20 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              La Liga de Programadores
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
              <span className="font-semibold text-green-700">Jango</span> es la plataforma competitiva que gamifica tu aprendizaje. Asciende de división, demuestra tu mérito y conviértete en una leyenda del código.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#" className="group flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-xl sm:w-auto">
                Empieza tu Ascenso <ArrowRightIcon />
              </a>
            </div>
          </div>
          <div className="w-full">
            <RankingAnimation />
          </div>
        </div>
      </section>

      {/* --- Características Principales --- */}
      <section id="features" className="w-full bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Una Plataforma Diseñada para la Excelencia</h2>
          <div className="mt-16 grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            <div className="flex flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md"><CodeBracketIcon/></div><h3 className="mt-6 text-xl font-semibold text-slate-900">Retos Semanales</h3><p className="mt-2 text-slate-500">Enfréntate a problemas reales y demuestra tus habilidades cada semana.</p></div>
            <div className="flex flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md"><ZapIcon/></div><h3 className="mt-6 text-xl font-semibold text-slate-900">Puntuación por Mérito</h3><p className="mt-2 text-slate-500">Tu código es evaluado por su velocidad, eficiencia y rapidez de entrega.</p></div>
            <div className="flex flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md"><TrophyIcon/></div><h3 className="mt-6 text-xl font-semibold text-slate-900">Sistema de Divisiones</h3><p className="mt-2 text-slate-500">Compite, suma puntos y asciende en la clasificación para llegar a la élite.</p></div>
          </div>
        </div>
      </section>

      {/* --- Testimonios (NUEVA SECCIÓN) --- */}
      <section id="testimonials" className="w-full bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Lo que dicen nuestros programadores de élite</h2>
            <figure className="mt-10">
                <blockquote className="text-xl italic text-slate-700">
                    <p>"Jango ha cambiado mi forma de aprender. La competición semanal me mantiene motivado y he mejorado mis algoritmos más en 3 meses que en los últimos 2 años."</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center gap-3">
                    <Image src="/logo.svg" alt="Avatar" width={40} height={40} className="rounded-full bg-slate-200 p-1" />
                    <div>
                        <div className="text-base font-semibold text-slate-900">Alex Gómez</div>
                        <div className="text-sm text-slate-500">Desarrollador Full-Stack, División 2</div>
                    </div>
                </figcaption>
            </figure>
        </div>
      </section>
      
      {/* --- FAQ --- */}
      <section id="faq" className="w-full bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Preguntas Frecuentes</h2>
            <div className="mt-12">
                <FaqItem question="¿Qué nivel de habilidad necesito para unirme?" answer="Cualquier nivel. Empezarás en una división acorde a tu habilidad. ¡Lo importante es querer mejorar!" />
                <FaqItem question="¿Qué lenguajes de programación están soportados?" answer="Soportamos una amplia gama de lenguajes, incluyendo Python, JavaScript, Java, C++, Go y más. Nuestra plataforma se expande constantemente." />
                <FaqItem question="¿Puedo unirme a mitad de una temporada?" answer="¡Sí! Puedes unirte en cualquier momento. Empezarás en la división más baja y podrás empezar a competir en la siguiente jornada semanal para prepararte para la próxima temporada." />
            </div>
        </div>
      </section>

      {/* --- CTA Final --- */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">¿Listo para Competir?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Únete a miles de programadores que ya están llevando sus habilidades al siguiente nivel. Tu primer reto te espera.</p>
            <div className="mt-10">
                <a href="#" className="group flex items-center justify-center gap-2 rounded-md bg-slate-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-xl">
                    Empieza tu Ascenso <ArrowRightIcon />
                </a>
            </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="w-full border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div><h3 className="font-semibold text-slate-900">Producto</h3><ul className="mt-4 space-y-2 text-slate-600"><li><a href="#features" className="hover:text-slate-900">Características</a></li><li><a href="#faq" className="hover:text-slate-900">FAQs</a></li></ul></div>
                <div><h3 className="font-semibold text-slate-900">Comunidad</h3><ul className="mt-4 space-y-2 text-slate-600"><li><a href="#" className="hover:text-slate-900">Discord</a></li><li><a href="#" className="hover:text-slate-900">Twitter</a></li></ul></div>
                <div><h3 className="font-semibold text-slate-900">Empresa</h3><ul className="mt-4 space-y-2 text-slate-600"><li><a href="#" className="hover:text-slate-900">Sobre Nosotros</a></li><li><a href="#" className="hover:text-slate-900">Contacto</a></li></ul></div>
                <div className="flex items-center gap-2"><Image src="/logo.svg" alt="Logo" width={24} height={24} /><p className="font-bold text-slate-900">Jango</p></div>
            </div>
            <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Jango. La Liga de Programadores. Todos los derechos reservados.</p>
            </div>
        </div>
      </footer>
    </>
  );
}