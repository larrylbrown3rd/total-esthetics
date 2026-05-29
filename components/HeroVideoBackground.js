'use client';

import { useEffect, useRef, useState } from 'react';
import { heroBackground } from '@/lib/media';

export default function HeroVideoBackground() {
  const videoRef = useRef(null);
  const [videoActive, setVideoActive] = useState(false);
  const [enableVideo, setEnableVideo] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enableVideo) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      setEnableVideo(false);
      return;
    }

    let cancelled = false;
    let resumeTimer;

    const tryPlay = () => {
      if (cancelled || !video) return;
      if (!video.paused && !video.ended) return;

      video.play().catch(() => {
        // Mobile browsers may block autoplay until interaction — keep poster visible.
        setVideoActive(false);
      });
    };

    const scheduleResume = (delay = 400) => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(tryPlay, delay);
    };

    const onPlaying = () => setVideoActive(true);
    const onPause = () => {
      if (!document.hidden && !video.ended) {
        scheduleResume(200);
      }
    };
    const onStalled = () => scheduleResume(300);
    const onWaiting = () => scheduleResume(500);
    const onError = () => {
      setVideoActive(false);
      setEnableVideo(false);
    };
    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        scheduleResume(100);
      }
    };

    video.addEventListener('playing', onPlaying);
    video.addEventListener('pause', onPause);
    video.addEventListener('stalled', onStalled);
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('error', onError);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pageshow', onVisibility);
    window.addEventListener('focus', onVisibility);

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(resumeTimer);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('stalled', onStalled);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('error', onError);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pageshow', onVisibility);
      window.removeEventListener('focus', onVisibility);
    };
  }, [enableVideo]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroBackground.image}')` }}
      />
      {enableVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:hidden ${
            videoActive ? 'opacity-100' : 'opacity-0'
          }`}
          poster={heroBackground.image}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={heroBackground.video} type="video/quicktime" />
        </video>
      )}
    </div>
  );
}
