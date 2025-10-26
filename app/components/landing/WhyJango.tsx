'use client';

import { useInView } from 'react-intersection-observer';

const CheckIcon = () => (
  <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
    <svg className="h-6 w-6 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const WhyJango = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <section id="why-jango" className="w-full bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div
            ref={ref}
            className={`text-center transition-opacity duration-1000 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">¿Por Qué Jango es Diferente?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Has visto tutoriales y has hecho cursos. Jango no es eso. Es la evolución del aprendizaje para programadores.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
          {/* Métodos Tradicionales */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Métodos Tradicionales</h3>
            <p className="mt-2 text-slate-600">La forma pasiva de aprender.</p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Aprendizaje pasivo viendo videos</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Proyectos aislados sin feedback real</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Dificultad para medir tu progreso real</span>
              </li>
               <li className="flex items-start gap-3">
                <CrossIcon />
                <span>El conocimiento se queda en teoría</span>
              </li>
            </ul>
          </div>

          {/* La Vía Jango */}
          <div className="rounded-xl bg-green-50 p-8 ring-1 ring-green-200">
            <h3 className="text-2xl font-semibold text-slate-900">La Vía Jango</h3>
            <p className="mt-2 text-green-700">Aprende compitiendo.</p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span><strong>Aprendizaje activo</strong> resolviendo problemas reales</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span><strong>Portafolio validado</strong> con resultados medibles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span><strong>Ranking y divisiones</strong> que muestran tu nivel exacto</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span><strong>Habilidades aplicables</strong> y demandadas en la industria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJango;