'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTAButton from './CTAButton';

const Cta = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="cta" className="w-full bg-background py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl bg-secondary/50 p-12 text-center"
        >
          <div className="aurora-background absolute inset-0 opacity-50"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Demuestra tu Talento. <br />
              <span className="text-green-600">Alcanza la Élite del Código.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Aprende, compite y consigue el trabajo de tus sueños. Tu futuro como programador de élite empieza hoy.
            </p>
            <div className="mt-10">
              <CTAButton text="Crea tu Perfil Gratis" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
