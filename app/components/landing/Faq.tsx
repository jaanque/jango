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
    <section id="faq" className="w-full bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Preguntas Frecuentes</h2>
        <div className="mt-12">
          <FaqItem question="¿Cuánto cuesta registrarse?" answer="El registro es completamente gratuito. Ofrecemos planes premium opcionales para acceder a características avanzadas, pero siempre puedes competir gratis." />
          <FaqItem question="¿Puedo repetir retos?" answer="Sí, puedes intentar los retos tantas veces como quieras para mejorar tu puntuación, pero solo la primera solución contará para los rankings de la temporada." />
          <FaqItem question="¿Qué pasa si no subo de división?" answer="No pasa nada. Permanecerás en tu división actual, donde podrás seguir compitiendo y mejorando. Cada temporada es una nueva oportunidad." />
          <FaqItem question="¿Cómo se validan mis soluciones?" answer="Nuestro sistema de validación automática ejecuta tu código en un entorno seguro y lo prueba con un conjunto de casos de prueba confidenciales para garantizar que la solución es correcta y eficiente." />
          <FaqItem question="¿Qué tipo de premios existen?" answer="Los premios varían según la liga y el torneo. Pueden incluir desde premios en metálico y hardware de última generación hasta suscripciones a servicios premium y oportunidades laborales exclusivas." />
          <FaqItem question="¿Cómo puede participar mi empresa?" answer="Tu empresa puede crear una liga privada para tus empleados o candidatos. Contacta con nosotros para obtener más información y configurar un plan a medida." />
        </div>
      </div>
    </section>
  );
};

export default Faq;
