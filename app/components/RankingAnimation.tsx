'use client';

// Placeholder elegante para la animación de ranking

const RankingPlaceholder = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white/50 rounded-2xl border border-slate-200 backdrop-blur-sm shadow-lg">
      <div className="animate-pulse">
        {/* Fila 1 */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-200">
          <div className="flex items-center gap-4">
            <div className="h-5 w-5 rounded-full bg-slate-300"></div>
            <div className="h-4 w-24 rounded bg-slate-300"></div>
          </div>
          <div className="h-4 w-16 rounded bg-slate-300"></div>
        </div>

        <div className="h-3"></div>

        {/* Fila 2 */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-100">
          <div className="flex items-center gap-4">
            <div className="h-5 w-5 rounded-full bg-slate-300"></div>
            <div className="h-4 w-20 rounded bg-slate-300"></div>
          </div>
          <div className="h-4 w-14 rounded bg-slate-300"></div>
        </div>

        <div className="h-3"></div>

        {/* Fila 3 */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-100">
          <div className="flex items-center gap-4">
            <div className="h-5 w-5 rounded-full bg-slate-300"></div>
            <div className="h-4 w-28 rounded bg-slate-300"></div>
          </div>
          <div className="h-4 w-12 rounded bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default RankingPlaceholder;
