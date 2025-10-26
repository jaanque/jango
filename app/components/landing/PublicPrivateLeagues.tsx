const PublicPrivateLeagues = () => {
  return (
    <section id="public-private-leagues" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Ligas Públicas y Privadas</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
          En Jango, puedes competir en nuestra liga pública global o crear una liga privada para tu empresa.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Ligas Públicas</h3>
            <p className="mt-4 text-slate-600">
              Compite contra programadores de todo el mundo, sube de división y gana premios en metálico y físicos. La liga pública es perfecta para demostrar tu talento y hacerte un nombre en la comunidad.
            </p>
            <ul className="mt-6 space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Premios en metálico y físicos</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Competición global</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Reconocimiento en la comunidad</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Ligas Privadas</h3>
            <p className="mt-4 text-slate-600">
              Crea una liga privada para tu empresa y fomenta la competición sana entre tus empleados. Las ligas privadas son una excelente herramienta para la formación, el desarrollo de habilidades y el team building.
            </p>
            <ul className="mt-6 space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>URL personalizada para tu empresa</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Premios personalizados</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Fomenta el team building</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicPrivateLeagues;
