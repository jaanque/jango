'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, CalendarIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Divisiones y Grupos',
    description: 'Compite en grupos de 100 usuarios para asegurar partidas justas y emocionantes.',
  },
  {
    icon: CalendarIcon,
    title: 'Temporadas Trimestrales',
    description: 'Nuevas misiones y rankings cada 3 meses para mantener la competición viva.',
  },
  {
    icon: TrophyIcon,
    title: 'Torneos Exclusivos',
    description: 'Participa en torneos abiertos o compite exclusivamente contra tu división.',
  },
  {
    icon: SparklesIcon,
    title: 'Recompensas de Élite',
    description: 'Gana trofeos para tu perfil y premios exclusivos en las ligas más altas.',
  },
];

const LeaguesAndTournaments = () => {
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
    <section id="leagues-tournaments" className="w-full bg-background py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ligas y Torneos: <span className="text-green-600">El Corazón de la Competición</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Nuestro ecosistema competitivo está diseñado para que siempre tengas un nuevo reto que superar.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
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
      </div>
    </section>
  );
};

export default LeaguesAndTournaments;
