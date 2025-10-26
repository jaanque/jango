'use client';

import RankingAnimation from '../RankingAnimation';
import CTAButton from './CTAButton';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden aurora-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-20 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            La Liga de Programadores
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            <span className="font-semibold text-green-700">Jango</span> es la plataforma competitiva que gamifica tu aprendizaje. Asciende de división, demuestra tu mérito y conviértete en una leyenda del código.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <CTAButton text="Empieza tu Ascenso" />
          </div>
        </div>
        <div className="w-full">
          <RankingAnimation />
        </div>
      </div>
    </section>
  );
};

export default Hero;
