'use client';

import { motion } from 'framer-motion';
import { BuildingOfficeIcon, UserGroupIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';
import CTAButton from './CTAButton';

const features = [
  {
    icon: BuildingOfficeIcon,
    title: 'Ligas Personalizadas',
    description: 'Gamifica el aprendizaje y la evaluación de tu equipo con tu propia marca.',
  },
  {
    icon: UserGroupIcon,
    title: 'Rankings y Torneos',
    description: 'Fomenta la competencia sana con torneos corporativos y rankings internos.',
  },
  {
    icon: PresentationChartLineIcon,
    title: 'Panel de Métricas',
    description: 'Obtén una visión clara del progreso y la actividad de tu equipo.',
  },
];

const PrivateLeagues = () => {
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
    <section id="private-leagues" className="w-full bg-background py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ligas Privadas para <span className="text-green-600">Empresas</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Potencia el talento de tu equipo técnico con nuestra plataforma de gamificación.
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <CTAButton text="Contacta para Crear tu Liga" />
        </motion.div>
      </div>
    </section>
  );
};

export default PrivateLeagues;
