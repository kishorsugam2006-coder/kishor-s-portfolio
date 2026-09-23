import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  offsetX: number;
  offsetY: number;
  radius: number;
  randomAlpha: number;
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
      [168, 85, 247],  // Purple #A855F7
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
          offsetX: 0,
          offsetY: 0,
          radius: Math.random() * 1.2 + 0.6,
          randomAlpha: Math.random() * 0.3, // 0 to 0.3 variability
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

      mouseX += (targetMouseX - mouseX) * 0.7;
      mouseY += (targetMouseY - mouseY) * 0.7;

      const connectionDistance = 160;
      const mouseInteractionDistance = 220; // 180-240px

      const isDark = themeRef.current === 'dark';
      const colors = isDark ? darkColors : lightColors;
      
      const baseParticleAlpha = isDark ? 0.65 : 0.55; // 0.65-0.95 dark, 0.55-0.85 light

      particles.forEach((p, i) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          
          p.offsetX *= 0.90; // Dampen the offset smoothly
          p.offsetY *= 0.90;

          if (!isTouchDevice && mouseX > 0 && mouseY > 0) {
            const actualX = p.x + p.offsetX;
            const actualY = p.y + p.offsetY;
            const dx = actualX - mouseX; // Direction from mouse TO particle
            const dy = actualY - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < mouseInteractionDistance) {
              const force = Math.pow((mouseInteractionDistance - dist) / mouseInteractionDistance, 2);
              p.offsetX += (dx / dist) * force * 15.0; // PUSH AWAY
              p.offsetY += (dy / dist) * force * 15.0;
            }
          }
        }

        const actualX = p.x + p.offsetX;
        const actualY = p.y + p.offsetY;
        
        let intensity = 0;
        let finalAlpha = baseParticleAlpha + p.randomAlpha;
        let finalRadius = p.radius;
        
        if (!isTouchDevice && mouseX > 0 && mouseY > 0 && !prefersReducedMotion) {
            const dx = actualX - mouseX;
            const dy = actualY - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseInteractionDistance) {
               intensity = Math.pow(1 - (dist / mouseInteractionDistance), 1.5);
               const maxHoverAlpha = isDark ? 1.0 : 0.95;
               finalAlpha = Math.min(finalAlpha + (intensity * (maxHoverAlpha - finalAlpha)), maxHoverAlpha);
               finalRadius = p.radius + (intensity * 2.0); // radius increases
            }
        }

        const color = colors[p.colorIndex % colors.length];
        
        // Faked shadow glow for particles near cursor for performance
        if (intensity > 0.05) {
            ctx.beginPath();
            ctx.arc(actualX, actualY, finalRadius * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${intensity * (isDark ? 0.25 : 0.15)})`;
            ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(actualX, actualY, finalRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${finalAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const p2ActualX = p2.x + p2.offsetX;
          const p2ActualY = p2.y + p2.offsetY;
          
          const dx = actualX - p2ActualX;
          const dy = actualY - p2ActualY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Normal state line opacity: 0.25-0.45 light, 0.30-0.55 dark
            const minLineAlpha = isDark ? 0.30 : 0.25;
            const maxLineAlpha = isDark ? 0.55 : 0.45;
            const distRatio = 1 - (dist / connectionDistance);
            const baseLineOpacity = minLineAlpha + distRatio * (maxLineAlpha - minLineAlpha); 
            
            let finalLineOpacity = baseLineOpacity;
            let currentLineWidth = 0.8;
            
            if (!isTouchDevice && mouseX > 0 && mouseY > 0 && !prefersReducedMotion) {
                const distToMouse = Math.sqrt(Math.pow(mouseX - (actualX + p2ActualX)/2, 2) + Math.pow(mouseY - (actualY + p2ActualY)/2, 2));
                if (distToMouse < mouseInteractionDistance) {
                    const lineIntensity = Math.pow(1 - (distToMouse / mouseInteractionDistance), 1.5);
                    const hoverMaxLineOpacity = isDark ? 0.9 : 0.8;
                    finalLineOpacity = Math.min(baseLineOpacity + (lineIntensity * (hoverMaxLineOpacity - baseLineOpacity)), hoverMaxLineOpacity);
                    currentLineWidth = 0.8 + (lineIntensity * 1.5);
                }
            }

            ctx.beginPath();
            ctx.moveTo(actualX, actualY);
            ctx.lineTo(p2ActualX, p2ActualY);
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
