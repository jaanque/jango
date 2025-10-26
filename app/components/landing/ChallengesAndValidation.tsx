'use client';

import { motion } from 'framer-motion';
import { LockClosedIcon, CodeBracketIcon, AdjustmentsHorizontalIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Retos Adaptativos',
    description: 'Desafíos que se ajustan a tu nivel de habilidad para un aprendizaje continuo.',
  },
  {
    icon: CodeBracketIcon,
    title: 'Editor Integrado',
    description: 'Valida tu código en tiempo real sin salir de la plataforma.',
  },
  {
    icon: LinkIcon,
    title: 'Conexión con GitHub',
    description: 'Conecta tu repositorio para un seguimiento avanzado de tu progreso.',
  },
];

const ChallengesAndValidation = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="challenges-validation" className="w-full bg-secondary/50 py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Retos y Validación: <span className="text-green-600">Tu Progreso, 100% Tuyo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Nuestro editor seguro y nuestro sistema de validación garantizan que cada logro sea auténtico.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-4 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
        >
            <p className="mt-20 text-center text-xl font-semibold text-foreground">
                <LockClosedIcon className="inline-block h-6 w-6 text-green-600" /> Tu progreso es legítimo. Tus logros son reales.
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengesAndValidation;
