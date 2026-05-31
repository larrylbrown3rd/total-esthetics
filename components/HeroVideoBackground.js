'use client';

import { useEffect, useRef, useState } from 'react';
import { heroBackground } from '@/lib/media';

/** Instant static hero — mobile + first paint while desktop video mounts */
function HeroStaticLayer({ className = '' }) {
  return (
    <div
      className={`hero-cover-media bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url('${heroBackground.image}')` }}
      aria-hidden="true"
    />
  );
}

export default function HeroVideoBackground() {
  const videoRef = useRef(null);
  const [enableVideo, setEnableVideo] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)').matches;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    setEnableVideo(desktop && !reduced);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enableVideo) return;

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled || !video) return;
      video.play().catch(() => {});
    };

    video.addEventListener('canplay', tryPlay);
    video.addEventListener('error', () => setEnableVideo(false));

    const onVisibility = () => {
      if (document.visibilityState === 'visible') tryPlay();
    };

    document.addEventListener('visibilitychange', onVisibility);
    tryPlay();

    return () => {
      cancelled = true;
      video.removeEventListener('canplay', tryPlay);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [enableVideo]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]"
      aria-hidden="true"
    >
      {/* Mobile: static image only — no video download, no photo→video swap */}
      {!enableVideo && <HeroStaticLayer />}

      {/* Desktop: single video element; poster matches hero.jpg for seamless start */}
      {enableVideo && (
        <video
          ref={videoRef}
          src={heroBackground.video}
          className="hero-cover-media"
          poster={heroBackground.image}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />
      )}
    </div>
  );
}
