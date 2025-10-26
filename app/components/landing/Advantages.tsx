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

const userAdvantages = [
  {
    icon: AcademicCapIcon,
    text: 'Aprende y mejora tus habilidades resolviendo retos reales.',
  },
  {
    icon: TrophyIcon,
    text: 'Gana puntos, insignias y trofeos por tu progreso.',
  },
  {
    icon: ChartBarIcon,
    text: 'Sube de liga y destaca en rankings regionales.',
  },
  {
    icon: CodeBracketIcon,
    text: 'Conecta tu GitHub y demuestra tu evolución real.',
  },
  {
    icon: BriefcaseIcon,
    text: 'Accede a premios, sorteos y oportunidades laborales.',
  },
];

const companyAdvantages = [
  {
    icon: BuildingOffice2Icon,
    text: 'Crea tu propia liga privada para empleados o candidatos.',
  },
  {
    icon: UsersIcon,
    text: 'Refuerza la cultura de aprendizaje y competencia sana.',
  },
  {
    icon: ChartPieIcon,
    text: 'Visualiza el rendimiento y la progresión de tus programadores.',
  },
  {
    icon: PaintBrushIcon,
    text: 'Personaliza con tu logo, colores y URL propia.',
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="w-full bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Ventajas de Participar
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-slate-900">Para los usuarios</h3>
            <ul className="mt-6 space-y-4">
              {userAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <advantage.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="ml-4 text-slate-600">{advantage.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-slate-900">Para las empresas</h3>
            <ul className="mt-6 space-y-4">
              {companyAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <advantage.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="ml-4 text-slate-600">{advantage.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
