import { UserPlusIcon, UsersIcon, CheckCircleIcon, ArrowUpCircleIcon, StarIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: UserPlusIcon,
    title: 'Crea tu cuenta',
    description: 'Perfil público básico.',
  },
  {
    icon: UsersIcon,
    title: 'Empieza en una división',
    description: 'Entras en un grupo de 100 jugadores.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Completa retos',
    description: 'Ganas puntos y avanzas posiciones.',
  },
  {
    icon: ArrowUpCircleIcon,
    title: 'Asciende de división',
    description: 'Los 10 mejores suben, los últimos bajan.',
  },
  {
    icon: StarIcon,
    title: 'Llega a la élite',
    description: 'Visibilidad, premios y oportunidades laborales.',
  },
];

const GameSystem = () => {
  return (
    <section id="game-system" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Sistema de Juego
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
          Explicación sencilla y visual del sistema de juego.
        </p>
        <div className="mt-16">
          <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600">
              División 5 → División 4 → División 3 → División 2 → División 1 → Liga Élite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSystem;
