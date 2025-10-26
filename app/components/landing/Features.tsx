'use client';

import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon, ZapIcon, TrophyIcon } from '../Icons';
import FeatureCard from './FeatureCard';

const AnimatedFeatureCard = ({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <FeatureCard
        icon={icon}
        title={title}
        description={description}
      />
    </div>
  );
};


const Features = () => {
  const features = [
    {
      icon: <CodeBracketIcon />,
      title: "Retos Semanales",
      description: "Enfréntate a problemas reales y demuestra tus habilidades cada semana."
    },
    {
      icon: <ZapIcon />,
      title: "Puntuación por Mérito",
      description: "Tu código es evaluado por su velocidad, eficiencia y rapidez de entrega."
    },
    {
      icon: <TrophyIcon />,
      title: "Sistema de Divisiones",
      description: "Compite, suma puntos y asciende en la clasificación para llegar a la élite."
    }
  ];

  return (
    <section id="features" className="w-full bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Una Plataforma Diseñada para la Excelencia</h2>
        <div className="mt-16 grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedFeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;