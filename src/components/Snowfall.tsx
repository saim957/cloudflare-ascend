import { useEffect, useRef, useState } from 'react';

interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  vx: number;
  vy: number;
}

const Snowfall = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes: Snowflake[] = [];
    const snowflakeCount = 150;

    // Create snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.6 + 0.3,
        vx: 0,
        vy: 0,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();

        // Calculate distance to mouse
        const dx = mousePos.x - flake.x;
        const dy = mousePos.y - flake.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // If mouse is near, attract snowflake
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          flake.vx += (dx / distance) * force * 0.5;
          flake.vy += (dy / distance) * force * 0.5;
        }

        // Apply velocity with damping
        flake.x += flake.vx;
        flake.y += flake.vy;
        flake.vx *= 0.95;
        flake.vy *= 0.95;

        // Continue normal falling
        flake.y += flake.speed;
        flake.x += Math.sin(flake.y / 30) * 0.5;

        // Reset snowflake if it goes off screen
        if (flake.y > canvas.height) {
          flake.y = -10;
          flake.x = Math.random() * canvas.width;
          flake.vx = 0;
          flake.vy = 0;
        }
        
        // Keep snowflakes within bounds
        if (flake.x < 0) flake.x = canvas.width;
        if (flake.x > canvas.width) flake.x = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default Snowfall;
