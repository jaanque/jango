'use client';

import { motion } from 'framer-motion';
import { UserPlusIcon, UsersIcon, CheckCircleIcon, ArrowUpCircleIcon, StarIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

const steps = [
  { icon: UserPlusIcon, title: 'Crea tu cuenta', description: 'Regístrate y configura tu perfil público en segundos.' },
  { icon: UsersIcon, title: 'Únete a una División', description: 'Entra en un grupo de 100 jugadores de tu mismo nivel.' },
  { icon: CheckCircleIcon, title: 'Completa Retos', description: 'Gana puntos, sube en el ranking y demuestra tu talento.' },
  { icon: ArrowUpCircleIcon, title: 'Asciende de División', description: 'Los 10 mejores suben, los 10 últimos descienden.' },
  { icon: StarIcon, title: 'Alcanza la Élite', description: 'Consigue visibilidad, premios y oportunidades laborales.' },
];

const GameSystem = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="game-system" className="w-full bg-background py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Un Sistema de Juego <span className="text-green-600">Sencillo y Adictivo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Desde tu primer reto hasta la liga de élite, nuestro sistema está diseñado para que siempre estés mejorando.
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
              <motion.div key={index} variants={itemVariants} className="relative flex items-center">
                <div className={`flex w-full items-start gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-secondary shadow-sm">
                    <step.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className={`w-full ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="h-4 w-4 rounded-full border-2 border-green-600 bg-background"></div>
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
