'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';
import TrustLogos from './components/landing/TrustLogos';
import HowItWorks from './components/landing/HowItWorks';
import WhyJango from './components/landing/WhyJango';
import PublicPrivateLeagues from './components/landing/PublicPrivateLeagues';
import Testimonials from './components/landing/Testimonials';
import Faq from './components/landing/Faq';
import Pricing from './components/landing/Pricing';
import Cta from './components/landing/Cta';


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TrustLogos />
      <HowItWorks />
      <WhyJango />
      <PublicPrivateLeagues />
      <Testimonials />
      <Faq />
      <Pricing />
      <Cta />
    </>
  );
}