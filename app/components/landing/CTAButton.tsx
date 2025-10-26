import { ArrowRightIcon } from '../Icons';

const CTAButton = ({ text }: { text: string }) => {
  return (
    <a href="#" className="group flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-xl sm:w-auto">
      {text} <ArrowRightIcon />
    </a>
  );
};

export default CTAButton;
