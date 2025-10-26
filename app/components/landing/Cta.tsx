import CTAButton from './CTAButton';

const Cta = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-24"
      style={{ backgroundImage: "url('/path/to/your/inspirational-background.jpg')" }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Demuestra tu talento. Aprende, compite y alcanza la élite del código.
        </h2>
        <div className="mt-10">
          <CTAButton text="Crea tu perfil gratis" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
