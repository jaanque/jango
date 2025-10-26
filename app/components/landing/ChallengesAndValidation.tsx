import { LockClosedIcon, CodeBracketIcon, AdjustmentsHorizontalIcon, LinkIcon } from '@heroicons/react/24/outline';

const ChallengesAndValidation = () => {
  return (
    <section id="challenges-validation" className="w-full bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Sistema de Retos y Validación
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
          Cada reto se resuelve desde nuestro editor seguro, diseñado para garantizar autenticidad. Sin copiar y pegar, tu progreso es 100% tuyo.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          <div className="flex flex-col items-center">
            <AdjustmentsHorizontalIcon className="h-10 w-10 text-green-600" />
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Retos únicos y adaptativos</h3>
            <p className="mt-2 text-slate-500">Desafíos que se ajustan a tu nivel de habilidad.</p>
          </div>
          <div className="flex flex-col items-center">
            <CodeBracketIcon className="h-10 w-10 text-green-600" />
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Editor integrado</h3>
            <p className="mt-2 text-slate-500">Valida tu código en tiempo real sin salir de la plataforma.</p>
          </div>
          <div className="flex flex-col items-center">
            <LinkIcon className="h-10 w-10 text-green-600" />
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Conexión con GitHub</h3>
            <p className="mt-2 text-slate-500">Opción de conectar tu repositorio para un seguimiento avanzado.</p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-slate-900">
            <LockClosedIcon className="inline-block h-6 w-6 text-green-600" /> Tu progreso es legítimo. Tus logros son reales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengesAndValidation;
