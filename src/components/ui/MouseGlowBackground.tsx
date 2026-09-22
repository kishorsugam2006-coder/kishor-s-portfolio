import React, { useEffect, useRef } from 'react';

export const MouseGlowBackground: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Check if device supports hover/fine pointer (disables on mobile touch devices)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    let requestRef: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateGlow = () => {
      // Linear interpolation for a smooth chasing effect
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.setProperty('--mouse-x', `${currentX}px`);
        glowRef.current.style.setProperty('--mouse-y', `${currentY}px`);
      }
      requestRef = requestAnimationFrame(updateGlow);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    requestRef = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <div ref={glowRef} className="mouse-glow-background" aria-hidden="true" />
  );
};
