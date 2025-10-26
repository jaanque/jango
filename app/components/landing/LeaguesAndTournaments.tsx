import { ShieldCheckIcon, CalendarIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/outline';

const LeaguesAndTournaments = () => {
  return (
    <section id="leagues-tournaments" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Ligas y Torneos</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
          El corazón competitivo de la plataforma.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Divisiones y grupos</h3>
            <p className="mt-4 text-slate-600">
              100 usuarios por grupo, ascensos y descensos cada temporada (3 meses).
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Temporadas</h3>
            <p className="mt-4 text-slate-600">
              Se reinician cada trimestre con nuevas misiones y rankings.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Torneos</h3>
            <p className="mt-4 text-slate-600">
              Universales: para todos los usuarios. Por liga: compites solo contra tu división.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Trofeos y recompensas</h3>
            <p className="mt-4 text-slate-600">
              Los ganadores obtienen trofeos visibles en su perfil. En ligas altas hay premios físicos o en metálico.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-8">
            <TrophyIcon className="h-12 w-12 text-yellow-500" />
            <ShieldCheckIcon className="h-12 w-12 text-blue-500" />
            <SparklesIcon className="h-12 w-12 text-purple-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaguesAndTournaments;
