import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
