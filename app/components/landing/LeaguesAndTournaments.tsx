'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, CalendarIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Divisiones y Grupos',
    description: 'Compite en grupos de 100 usuarios. Ascensos y descensos cada 3 meses.',
  },
  {
    icon: CalendarIcon,
    title: 'Temporadas Trimestrales',
    description: 'Nuevas misiones y rankings cada trimestre para mantener la emoción.',
  },
  {
    icon: TrophyIcon,
    title: 'Torneos Exclusivos',
    description: 'Participa en torneos universales o compite solo contra tu división.',
  },
  {
    icon: SparklesIcon,
    title: 'Recompensas de Élite',
    description: 'Trofeos para tu perfil y premios físicos o en metálico en las ligas altas.',
  },
];

const LeaguesAndTournaments = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
    <section id="leagues-tournaments" className="w-full py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ligas y Torneos: <span className="text-green-400">El Corazón Competitivo</span>
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
              className="rounded-lg border border-border bg-secondary/50 p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background">
                <feature.icon className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeaguesAndTournaments;
