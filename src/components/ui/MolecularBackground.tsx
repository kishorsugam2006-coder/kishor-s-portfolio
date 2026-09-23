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
  colorIndex: number;
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

    const lightColors = [
      [37, 99, 235],   // Blue #2563EB
      [6, 182, 212],   // Cyan #06B6D4
      [124, 58, 237],  // Violet #7C3AED
      [236, 72, 153],  // Pink #EC4899
    ];
    
    const darkColors = [
      [59, 130, 246],  // Electric Blue #3B82F6
      [34, 211, 238],  // Cyan #22D3EE
      [139, 92, 246],  // Violet #8B5CF6
      [168, 85, 247],  // Purple #A855F7
      [236, 72, 153],  // Pink #EC4899
    ];

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
          baseAlpha: Math.random() * 0.13 + 0.12, // 0.12 to 0.25 normal state opacity
          pulseOffset: Math.random() * Math.PI * 2,
          colorIndex: Math.floor(Math.random() * 5),
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

      mouseX += (targetMouseX - mouseX) * 0.7; // increased response speed
      mouseY += (targetMouseY - mouseY) * 0.7;

      const connectionDistance = 160;
      const mouseInteractionDistance = 200; // Increased influence radius

      const isDark = themeRef.current === 'dark';
      const colors = isDark ? darkColors : lightColors;

      // Draw subtle dynamic radial glow around cursor
      if (!isTouchDevice && mouseX > 0 && mouseY > 0 && !prefersReducedMotion) {
          const glowRadius = mouseInteractionDistance * 1.2;
          const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, glowRadius);
          if (isDark) {
            gradient.addColorStop(0, 'rgba(139, 92, 246, 0.12)'); // Violet glow
            gradient.addColorStop(0.4, 'rgba(59, 130, 246, 0.05)'); // Blue fade
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          } else {
            gradient.addColorStop(0, 'rgba(37, 99, 235, 0.08)'); // Blue glow
            gradient.addColorStop(0.4, 'rgba(6, 182, 212, 0.03)'); // Cyan fade
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          }
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(mouseX, mouseY, glowRadius, 0, Math.PI * 2);
          ctx.fill();
      }

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
              p.x -= (dx / dist) * force * 10.0; // 2.5x stronger interaction
              p.y -= (dy / dist) * force * 10.0;
            }
          }
        }

        let finalAlpha = p.baseAlpha;
        let finalRadius = p.radius;
        let intensity = 0;
        
        if (!isTouchDevice && mouseX > 0 && mouseY > 0 && !prefersReducedMotion) {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseInteractionDistance) {
               intensity = Math.pow(1 - (dist / mouseInteractionDistance), 1.5);
               const maxHoverAlpha = isDark ? 1.0 : 0.9;
               finalAlpha = Math.min(p.baseAlpha + (intensity * (maxHoverAlpha - p.baseAlpha)), maxHoverAlpha);
               finalRadius = p.radius + (intensity * 2.5); // radius increases
            }
        }

        const color = colors[p.colorIndex % colors.length];
        
        // Faked shadow glow for particles near cursor for performance
        if (intensity > 0.05) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, finalRadius * 3.0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${intensity * (isDark ? 0.25 : 0.15)})`;
            ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, finalRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${finalAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const baseLineOpacity = (1 - dist / connectionDistance) * (isDark ? 0.20 : 0.25); 
            let finalLineOpacity = baseLineOpacity;
            let currentLineWidth = 0.8;
            
            if (!isTouchDevice && mouseX > 0 && mouseY > 0 && !prefersReducedMotion) {
                const distToMouse = Math.sqrt(Math.pow(mouseX - (p.x + p2.x)/2, 2) + Math.pow(mouseY - (p.y + p2.y)/2, 2));
                if (distToMouse < mouseInteractionDistance) {
                    const lineIntensity = Math.pow(1 - (distToMouse / mouseInteractionDistance), 1.5);
                    const maxLineOpacity = isDark ? 0.9 : 0.8;
                    finalLineOpacity = Math.min(baseLineOpacity + (lineIntensity * (maxLineOpacity - baseLineOpacity)), maxLineOpacity);
                    currentLineWidth = 0.8 + (lineIntensity * 1.5); // slightly thicker lines
                }
            }

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${finalLineOpacity})`;
            ctx.lineWidth = currentLineWidth;
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
