import CTAButton from './CTAButton';

const Cta = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">¿Listo para Competir?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Únete a miles de programadores que ya están llevando sus habilidades al siguiente nivel. Tu primer reto te espera.</p>
        <div className="mt-10">
          <CTAButton text="Empieza tu Ascenso" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
