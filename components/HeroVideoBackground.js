'use client';

import { useEffect, useRef, useState } from 'react';
import { heroBackground } from '@/lib/media';

export default function HeroVideoBackground() {
  const videoRef = useRef(null);
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const onPlaying = () => setVideoActive(true);
    const onError = () => setVideoActive(false);

    const play = () => {
      video.play().catch(() => setVideoActive(false));
    };

    video.addEventListener('playing', onPlaying);
    video.addEventListener('error', onError);
    video.addEventListener('canplay', play);
    play();

    return () => {
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('error', onError);
      video.removeEventListener('canplay', play);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden transform-gpu backface-hidden will-change-transform"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu backface-hidden will-change-transform"
        style={{ backgroundImage: `url('${heroBackground.image}')` }}
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transform-gpu backface-hidden will-change-transform transition-opacity duration-700 motion-reduce:hidden ${
          videoActive ? 'opacity-100' : 'opacity-0'
        }`}
        poster={heroBackground.image}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      >
        <source src={heroBackground.video} type="video/quicktime" />
        <source src={heroBackground.video} type="video/mp4" />
      </video>
    </div>
  );
}
