'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqData = [
  {
    question: '¿Cuánto cuesta registrarse?',
    answer: 'El registro es completamente gratuito. Ofrecemos planes premium opcionales para acceder a características avanzadas, pero siempre puedes competir gratis.',
  },
  {
    question: '¿Puedo repetir retos?',
    answer: 'Sí, puedes intentar los retos tantas veces como quieras para mejorar tu puntuación, pero solo la primera solución contará para los rankings de la temporada.',
  },
  {
    question: '¿Qué pasa si no subo de división?',
    answer: 'No pasa nada. Permanecerás en tu división actual, donde podrás seguir compitiendo y mejorando. Cada temporada es una nueva oportunidad.',
  },
  {
    question: '¿Cómo se validan mis soluciones?',
    answer: 'Nuestro sistema de validación automática ejecuta tu código en un entorno seguro y lo prueba con un conjunto de casos de prueba confidenciales para garantizar que la solución es correcta y eficiente.',
  },
  {
    question: '¿Qué tipo de premios existen?',
    answer: 'Los premios varían según la liga y el torneo. Pueden incluir desde premios en metálico y hardware de última generación hasta suscripciones a servicios premium y oportunidades laborales exclusivas.',
  },
  {
    question: '¿Cómo puede participar mi empresa?',
    answer: 'Tu empresa puede crear una liga privada para tus empleados o candidatos. Contacta con nosotros para obtener más información y configurar un plan a medida.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Preguntas <span className="text-green-600">Frecuentes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            ¿Tienes dudas? Aquí te dejamos las respuestas a las preguntas más comunes.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-foreground">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
