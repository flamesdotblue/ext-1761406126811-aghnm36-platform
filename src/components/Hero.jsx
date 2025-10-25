import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 text-sm mb-4">
            <Rocket className="h-4 w-4" />
            <span>Discover live hackathons in real-time</span>
          </div>
          <h1 className="font-semibold tracking-tight text-4xl md:text-6xl leading-tight">
            Build faster. Compete smarter. Ship boldly.
          </h1>
          <p className="mt-4 text-white/80 md:text-lg">
            Browse and filter ongoing and upcoming hackathons across the globe. Find the perfect challenge for your team and ship something extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
