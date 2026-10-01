import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export function HeroVideo() {
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPlaying(!preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  return <>
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <img src="/assets/banner1.jpg" alt="" fetchPriority="high" className="h-full w-full object-cover object-[65%_center]" />
      {playing && <div className="hero-video-frame absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube-nocookie.com/embed/TwlPykc4EY4?autoplay=1&mute=1&start=0&end=35&loop=1&playlist=TwlPykc4EY4&controls=0&playsinline=1&disablekb=1&fs=0&rel=0"
          title="Vídeo de fundo de Balneário Camboriú"
          tabIndex={-1}
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          className="hero-video-player border-0"
        />
      </div>}
      <div className="home-hero-wash absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#f4f5f6] sm:h-56" />
    </div>
    <button type="button" onClick={() => setPlaying(value => !value)} aria-label={playing ? 'Pausar vídeo de fundo' : 'Reproduzir vídeo de fundo sem som'} className="absolute bottom-3 right-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-2 text-xs font-semibold text-navy shadow-sm backdrop-blur-sm transition hover:bg-white sm:right-8">
      {playing ? <Pause aria-hidden="true" className="h-4 w-4" /> : <Play aria-hidden="true" className="h-4 w-4" />}
      {playing ? 'Pausar fundo' : 'Reproduzir fundo'}
    </button>
  </>;
}
