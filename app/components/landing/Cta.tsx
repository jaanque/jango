import CTAButton from './CTAButton';

const Cta = () => {
  return (
    <section className="w-full bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Tu Próximo Nivel te Espera</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Únete a miles de programadores que ya están construyendo su futuro, un reto a la vez. El código que escribas hoy es la carrera que tendrás mañana. ¿Estás listo?
        </p>
        <div className="mt-10">
          <CTAButton text="Empieza tu Ascenso Gratis" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
