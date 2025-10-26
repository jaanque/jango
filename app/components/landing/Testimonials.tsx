import Image from 'next/image';

const TestimonialCard = ({ quote, name, title, avatar }: { quote: string, name: string, title: string, avatar: string }) => (
  <figure className="flex flex-col items-center text-center">
    <blockquote className="text-xl italic text-slate-700">
      <p>"{quote}"</p>
    </blockquote>
    <figcaption className="mt-6 flex items-center justify-center gap-3">
      <Image src={avatar} alt={`Avatar de ${name}`} width={40} height={40} className="rounded-full bg-slate-200 p-1" />
      <div>
        <div className="text-base font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">{title}</div>
      </div>
    </figcaption>
  </figure>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">No te lo decimos nosotros, te lo dicen ellos</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Descubre cómo Jango ha impactado la carrera de desarrolladores como tú.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <TestimonialCard
            quote="Jango ha cambiado mi forma de aprender. La competición semanal me mantiene motivado y he mejorado mis algoritmos más en 3 meses que en los últimos 2 años."
            name="Alex Gómez"
            title="Desarrollador Full-Stack, División 2"
            avatar="/logo.svg"
          />
          <TestimonialCard
            quote="Como recién graduada, Jango me dio la confianza y el portafolio que necesitaba para conseguir mi primer trabajo. Las empresas valoran los resultados tangibles."
            name="Sofía Cheng"
            title="Frontend Developer, División 4"
            avatar="/logo.svg"
          />
          <TestimonialCard
            quote="Llevo 10 años en la industria y Jango es la mejor herramienta que he encontrado para mantenerme actualizado y competitivo. Los retos son de un nivel altísimo."
            name="Carlos Herrera"
            title="Senior Backend Engineer, División 1"
            avatar="/logo.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;