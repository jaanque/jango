'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '../Icons';

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

const Faq = () => {
  return (
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
  );
};

export default Faq;
