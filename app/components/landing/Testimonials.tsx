import Image from 'next/image';

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Lo que dicen nuestros programadores de élite</h2>
        <figure className="mt-10">
          <blockquote className="text-xl italic text-slate-700">
            <p>"Jango ha cambiado mi forma de aprender. La competición semanal me mantiene motivado y he mejorado mis algoritmos más en 3 meses que en los últimos 2 años."</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center gap-3">
            <Image src="/logo.svg" alt="Avatar" width={40} height={40} className="rounded-full bg-slate-200 p-1" />
            <div>
              <div className="text-base font-semibold text-slate-900">Alex Gómez</div>
              <div className="text-sm text-slate-500">Desarrollador Full-Stack, División 2</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
