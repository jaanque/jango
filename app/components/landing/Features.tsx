import { CodeBracketIcon, ZapIcon, TrophyIcon } from '../Icons';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section id="features" className="w-full bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Una Plataforma Diseñada para la Excelencia</h2>
        <div className="mt-16 grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          <FeatureCard
            icon={<CodeBracketIcon />}
            title="Retos Semanales"
            description="Enfréntate a problemas reales y demuestra tus habilidades cada semana."
          />
          <FeatureCard
            icon={<ZapIcon />}
            title="Puntuación por Mérito"
            description="Tu código es evaluado por su velocidad, eficiencia y rapidez de entrega."
          />
          <FeatureCard
            icon={<TrophyIcon />}
            title="Sistema de Divisiones"
            description="Compite, suma puntos y asciende en la clasificación para llegar a la élite."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
