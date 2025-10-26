'use client';

import { motion } from 'framer-motion';
import { UserPlusIcon, UsersIcon, CheckCircleIcon, ArrowUpCircleIcon, StarIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    icon: UserPlusIcon,
    title: 'Crea tu cuenta',
    description: 'Perfil público básico.',
  },
  {
    icon: UsersIcon,
    title: 'Empieza en una división',
    description: 'Entras en un grupo de 100 jugadores.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Completa retos',
    description: 'Ganas puntos y avanzas posiciones.',
  },
  {
    icon: ArrowUpCircleIcon,
    title: 'Asciende de división',
    description: 'Los 10 mejores suben, los últimos bajan.',
  },
  {
    icon: StarIcon,
    title: 'Llega a la élite',
    description: 'Visibilidad, premios y oportunidades laborales.',
  },
];

const GameSystem = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="game-system" className="w-full py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Un Sistema de Juego <span className="text-green-400">Hecho para Crecer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Desde tu primer reto hasta la liga de élite, nuestro sistema está diseñado para que siempre estés aprendiendo y mejorando.
          </p>
        </div>
        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" aria-hidden="true"></div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-center"
              >
                <div className={`flex w-full items-start gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-secondary shadow-md">
                    <step.icon className="h-8 w-8 text-green-400" />
                  </div>
                  <div className={`w-full text-left ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="h-4 w-4 rounded-full border-2 border-green-400 bg-background"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GameSystem;
