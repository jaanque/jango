'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// --- Iconos de Ascenso/Descenso ---
const AscendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 20H20L12 4Z" fill="#16a34a"/>
  </svg>
);
const DescendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20L4 4H20L12 20Z" fill="#ef4444"/>
  </svg>
);

// --- Datos para la animación ---
const descendingPlayer = { id: 1, name: 'AlexCode', points: 1250, arrow: <DescendIcon /> };
const ascendingPlayer = { id: 2, name: 'ByteMaster', points: 1285, arrow: <AscendIcon /> };

const RankingRow = ({ player, rank }: { player: typeof descendingPlayer, rank: number }) => {
  const isTopPlayer = rank === 0;

  return (
    <motion.div
      key={player.id}
      layoutId={player.id.toString()}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      className={`relative flex items-center justify-between p-4 rounded-xl z-10 ${isTopPlayer ? 'bg-white shadow-2xl shadow-green-100 z-20' : 'bg-slate-100'}`}
    >
      {isTopPlayer && <motion.div layoutId="highlight" className="absolute inset-0 rounded-xl border-2 border-green-500"></motion.div>}

      <div className="flex items-center gap-4">
        <span className={`text-sm font-bold w-6 ${isTopPlayer ? 'text-green-600' : 'text-slate-500'}`}>{rank + 1}</span>
        <div className="flex items-center gap-3">
          {player.arrow}
          <span className="font-semibold text-slate-800">{player.name}</span>
        </div>
      </div>
      <span className="font-bold text-slate-900">{player.points} PTS</span>
    </motion.div>
  );
};

export default function RankingAnimation() {
  const [players, setPlayers] = useState([descendingPlayer, ascendingPlayer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers(prevPlayers => [...prevPlayers].reverse());
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-slate-50/50 rounded-2xl border border-slate-200 backdrop-blur-sm">
      <div className="space-y-3">
        <AnimatePresence>
          {players.map((player, index) => (
            <RankingRow key={player.id} player={player} rank={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}