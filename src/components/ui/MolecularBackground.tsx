import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulseOffset: number;
}

export const MolecularBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const area = window.innerWidth * window.innerHeight;
      const density = isTouchDevice ? 30000 : 18000;
      const particleCount = Math.floor(area / density);
      const clampedCount = Math.min(Math.max(particleCount, 25), 100);

      for (let i = 0; i < clampedCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.0, 
          vy: (Math.random() - 0.5) * 1.0,
          radius: Math.random() * 1.2 + 0.6,
          baseAlpha: Math.random() * 0.4 + 0.1,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    
    const onMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mouseX += (targetMouseX - mouseX) * 0.45;
      mouseY += (targetMouseY - mouseY) * 0.45;

      const connectionDistance = 160;
      const mouseInteractionDistance = 150; 

      particles.forEach((p, i) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          
          if (!isTouchDevice && mouseX > 0 && mouseY > 0) {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < mouseInteractionDistance) {
              const force = Math.pow((mouseInteractionDistance - dist) / mouseInteractionDistance, 2);
              p.x -= (dx / dist) * force * 4.0;
              p.y -= (dy / dist) * force * 4.0;
            }
          }
        }

        const time = Date.now() * 0.0015;
        const currentAlpha = p.baseAlpha + Math.sin(time + p.pulseOffset) * 0.15;
        const clampedAlpha = Math.max(0.05, Math.min(currentAlpha, 0.7));

        let finalAlpha = clampedAlpha;
        let finalRadius = p.radius;
        if (!isTouchDevice && mouseX > 0 && mouseY > 0) {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseInteractionDistance) {
               const intensity = 1 - (dist / mouseInteractionDistance);
               finalAlpha = Math.min(clampedAlpha + (intensity * 0.5), 0.9);
               finalRadius = p.radius + (intensity * 1.0);
            }
        }

        const isDark = themeRef.current === 'dark';
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, finalRadius, 0, Math.PI * 2);
        
        if (isDark) {
          ctx.fillStyle = `rgba(160, 132, 53, ${finalAlpha})`;
        } else {
          ctx.fillStyle = `rgba(37, 99, 235, ${finalAlpha})`;
        }
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.12; 
            
            let r = isDark ? 180 : 37;
            let g = isDark ? 145 : 99;
            let b = isDark ? 60 : 235;
            let finalOpacity = opacity;
            
            if (!isTouchDevice && mouseX > 0 && mouseY > 0) {
                const distToMouse = Math.sqrt(Math.pow(mouseX - (p.x + p2.x)/2, 2) + Math.pow(mouseY - (p.y + p2.y)/2, 2));
                if (distToMouse < mouseInteractionDistance) {
                    if (isDark) {
                      r = 220; g = 180; b = 80;
                    } else {
                      r = 59; g = 130; b = 246; 
                    }
                    const intensity = 1 - (distToMouse / mouseInteractionDistance);
                    finalOpacity = Math.min(opacity + (intensity * 0.18), 0.3);
                }
            }

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    window.addEventListener('resize', initCanvas);
    if (!isTouchDevice) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('mouseleave', onMouseLeave);
    }

    initCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', initCanvas);
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseleave', onMouseLeave);
      }
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
