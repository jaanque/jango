const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">¿Cómo Funciona Jango?</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
          En Jango, compites en un sistema de ligas diseñado para que siempre te enfrentes a programadores de tu nivel. Así es como funciona:
        </p>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-green-600">1</div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Divisiones y Grupos</h3>
            <p className="mt-2 text-slate-500">
              Todos los jugadores empiezan en la división más baja. Cada división está dividida en grupos de 100 competidores para que las partidas sean justas y emocionantes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-green-600">2</div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Ascensos y Playoffs</h3>
            <p className="mt-2 text-slate-500">
              Los 3 mejores de cada grupo ascienden directamente a la siguiente división. El 4º clasificado juega un torneo de playoffs contra otros cuartos para tener una oportunidad de ascender.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-green-600">3</div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Ligas de Élite</h3>
            <p className="mt-2 text-slate-500">
              Las 5 primeras divisiones son la élite. En estas ligas, solo hay un grupo, y aquí es donde compiten los mejores programadores del mundo por grandes premios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
