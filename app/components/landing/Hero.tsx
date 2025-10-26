'use client';

import RankingAnimation from '../RankingAnimation';
import CTAButton from './CTAButton';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden aurora-background pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Jango - Donde tu Código te Define
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            <span className="font-semibold text-green-700">Jango</span> no es solo una plataforma, es tu arena. Resuelve retos, sube en el ranking y demuestra que eres el mejor. <span className="font-bold">Acelera tu carrera, código a código.</span>
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <CTAButton text="Empieza a Competir Ahora" />
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
