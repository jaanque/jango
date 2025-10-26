import { BuildingOfficeIcon, UserGroupIcon, PresentationChartLineIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const PrivateLeagues = () => {
  return (
    <section id="private-leagues" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Empresas y Ligas Privadas
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Gamifica el aprendizaje y evaluación de tu equipo técnico.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <BuildingOfficeIcon className="h-10 w-10 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">Ligas personalizadas</h3>
            <p className="mt-2 text-slate-500">Con tu logo y dominio.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <UserGroupIcon className="h-10 w-10 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">Rankings internos</h3>
            <p className="mt-2 text-slate-500">Y torneos corporativos.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <PresentationChartLineIcon className="h-10 w-10 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">Panel de métricas</h3>
            <p className="mt-2 text-slate-500">Y actividad.</p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-green-600 px-8 py-3 text-lg font-semibold text-white hover:bg-green-700"
          >
            Contacta con nosotros para crear tu liga
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivateLeagues;
