'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none isolate fixed z-[9999] hidden transform-gpu backface-hidden will-change-transform md:block"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
        transition: 'left 0.1s ease, top 0.1s ease',
      }}
      aria-hidden="true"
    />
  );
}
