import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-slate-900">Producto</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li><a href="#features" className="hover:text-slate-900">Características</a></li>
              <li><a href="#faq" className="hover:text-slate-900">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Comunidad</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Discord</a></li>
              <li><a href="#" className="hover:text-slate-900">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Empresa</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-slate-900">Contacto</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={24} height={24} />
            <p className="font-bold text-slate-900">Jango</p>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Jango. La Liga de Programadores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
