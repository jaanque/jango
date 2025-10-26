'use client';

import Hero from './components/landing/Hero';
import GameSystem from './components/landing/GameSystem';
import Advantages from './components/landing/Advantages';
import LeaguesAndTournaments from './components/landing/LeaguesAndTournaments';
import ChallengesAndValidation from './components/landing/ChallengesAndValidation';
import PrivateLeagues from './components/landing/PrivateLeagues';
import Faq from './components/landing/Faq';
import Cta from './components/landing/Cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <GameSystem />
      <Advantages />
      <LeaguesAndTournaments />
      <ChallengesAndValidation />
      <PrivateLeagues />
      <Faq />
      <Cta />
    </main>
  );
}
