import { ArrowRightIcon } from '../Icons';

const CheckIcon = () => (
  <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Un Plan Para Cada Meta</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Tanto si quieres brillar individualmente como si buscas potenciar a tu equipo, tenemos una opción para ti.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Plan Público */}
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Liga Pública</h3>
            <p className="mt-2 text-slate-600">Para el desarrollador individual que busca un desafío.</p>
            <div className="mt-6">
              <span className="text-5xl font-bold tracking-tight text-slate-900">Gratis</span>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3"><CheckIcon /><span>Compite contra miles de desarrolladores</span></li>
              <li className="flex items-center gap-3"><CheckIcon /><span>Asciende en el ranking mundial</span></li>
              <li className="flex items-center gap-3"><CheckIcon /><span>Gana premios y reconocimiento</span></li>
            </ul>
            <a href="#" className="group mt-auto flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-xl mt-8">
              Únete Gratis <ArrowRightIcon />
            </a>
          </div>

          {/* Plan Privado */}
          <div className="flex flex-col rounded-2xl border border-green-500 bg-green-50 p-8 shadow-lg ring-2 ring-green-500">
            <h3 className="text-2xl font-semibold text-slate-900">Ligas Privadas</h3>
            <p className="mt-2 text-green-700">La solución perfecta para empresas y equipos.</p>
            <div className="mt-6">
              <span className="text-5xl font-bold tracking-tight text-slate-900">Empresas</span>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3"><CheckIcon /><span>URL y branding personalizados</span></li>
              <li className="flex items-center gap-3"><CheckIcon /><span>Competición interna y formación continua</span></li>
              <li className="flex items-center gap-3"><CheckIcon /><span>Premios y métricas definidos por la empresa</span></li>
              <li className="flex items-center gap-3"><CheckIcon /><span>Dashboard de seguimiento para managers</span></li>
            </ul>
             <a href="#" className="group mt-auto flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-xl mt-8">
              Contactar con Ventas <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;