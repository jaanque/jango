'use client';

import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  TrophyIcon,
  ChartBarIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  UsersIcon,
  ChartPieIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

const userAdvantages = [
  { icon: AcademicCapIcon, text: 'Aprende y mejora tus habilidades con retos reales.' },
  { icon: TrophyIcon, text: 'Gana puntos, insignias y trofeos por tu progreso.' },
  { icon: ChartBarIcon, text: 'Sube de liga y destaca en los rankings regionales.' },
  { icon: CodeBracketIcon, text: 'Conecta tu GitHub y demuestra tu evolución profesional.' },
  { icon: BriefcaseIcon, text: 'Accede a premios, sorteos y oportunidades laborales.' },
];

const companyAdvantages = [
  { icon: BuildingOffice2Icon, text: 'Crea tu propia liga privada para empleados o candidatos.' },
  { icon: UsersIcon, text: 'Refuerza la cultura de aprendizaje y la competencia sana.' },
  { icon: ChartPieIcon, text: 'Visualiza el rendimiento y la progresión de tus programadores.' },
  { icon: PaintBrushIcon, text: 'Personaliza la plataforma con tu logo, colores y URL propia.' },
];

const Advantages = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const cardHoverEffect = {
    scale: 1.03,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: { duration: 0.2 },
  };

  return (
    <section id="advantages" className="w-full bg-secondary/50 py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ventajas <span className="text-green-600">Diseñadas para Crecer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Tanto si buscas crecer como programador o encontrar el mejor talento, tenemos lo que necesitas.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2"
        >
          <div className="flex flex-col gap-6">
            <h3 className="text-center text-3xl font-bold text-foreground md:text-left">Para Programadores</h3>
            {userAdvantages.map((advantage, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={cardHoverEffect}>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <advantage.icon className="h-8 w-8 flex-shrink-0 text-green-600" />
                  <p className="text-muted-foreground">{advantage.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-center text-3xl font-bold text-foreground md:text-left">Para Empresas</h3>
            {companyAdvantages.map((advantage, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={cardHoverEffect}>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <advantage.icon className="h-8 w-8 flex-shrink-0 text-green-600" />
                  <p className="text-muted-foreground">{advantage.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
