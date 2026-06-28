import React, { useEffect, useRef } from 'react';

export default function ConfettiCanvas({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isAnimating = true;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#6366f1', '#06b6d4', '#ec4899', '#f59e0b', '#10b981'];
    const particles = [];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngleIncremental: Math.random() * 0.07 + 0.02,
        tiltAngle: 0
      });
    }

    const drawConfetti = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, idx) => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(p.tiltAngle);
        p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;
        
        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();
      });

      let remaining = 0;
      particles.forEach(p => {
        if (p.y > canvas.height) {
          p.x = Math.random() * canvas.width;
          p.y = -20;
        } else {
          remaining++;
        }
      });

      if (remaining > 0 && isAnimating) {
        animationFrameId = requestAnimationFrame(drawConfetti);
      }
    };

    drawConfetti();

    // Fade out and clear after 5.5 seconds
    const timer = setTimeout(() => {
      isAnimating = false;
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5500);

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      isAnimating = false;
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  if (!active) return null;
  return <canvas ref={canvasRef} className="confetti-canvas" />;
}
