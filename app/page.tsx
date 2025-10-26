'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';
import HowItWorks from './components/landing/HowItWorks';
import PublicPrivateLeagues from './components/landing/PublicPrivateLeagues';
import Testimonials from './components/landing/Testimonials';
import Faq from './components/landing/Faq';
import Cta from './components/landing/Cta';


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PublicPrivateLeagues />
      <Testimonials />
      <Faq />

      <Cta />
    </>
  );
}