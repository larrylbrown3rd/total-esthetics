'use client';

import { useEffect, useRef, useState } from 'react';
import { heroBackground } from '@/lib/media';

export default function HeroVideoBackground() {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      setShowVideo(false);
      return;
    }

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled || !video) return;
      video.play().catch(() => {});
    };

    const unlockOnTouch = () => tryPlay();

    video.addEventListener('canplay', tryPlay);
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('error', () => setShowVideo(false));

    const onVisibility = () => {
      if (document.visibilityState === 'visible') tryPlay();
    };

    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pageshow', onVisibility);
    document.addEventListener('touchstart', unlockOnTouch, {
      once: true,
      passive: true,
    });

    tryPlay();

    return () => {
      cancelled = true;
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('loadeddata', tryPlay);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pageshow', onVisibility);
    };
  }, [showVideo]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]"
      aria-hidden="true"
    >
      {showVideo ? (
        <video
          ref={videoRef}
          src={heroBackground.video}
          className="hero-cover-media"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />
      ) : (
        <div
          className="hero-cover-media bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroBackground.image}')` }}
        />
      )}
    </div>
  );
}
