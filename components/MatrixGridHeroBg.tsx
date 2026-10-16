'use client';
import { useEffect, useRef } from 'react';

export default function MatrixGridHeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let resizeObserver: ResizeObserver;
    let animationId: number;
    let lastTimestamp = 0;
    const TARGET_FPS = 30;
    const FPS_INTERVAL = 1000 / TARGET_FPS;
    let isVisible = true;

    const chars = '0123456789';
    const charArr = chars.split('');
    const fontSize = 16;
    let drops: number[] = [];
    let waveOffsets: number[] = [];

    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      // 限制DPR，防止4K螢幕畫布過大
      const dpr = Math.min(window.devicePixelRatio, 1.2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);

      const columns = Math.floor(rect.width / fontSize);
      drops = Array(columns).fill(0);
      waveOffsets = Array.from({ length: columns }, () => Math.random() * Math.PI * 1.75);
    };

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw);

      // 離屏直接跳過繪圖
      if (!isVisible) return;
      // FPS节流
      if (timestamp - lastTimestamp < FPS_INTERVAL) return;
      lastTimestamp = timestamp;

      // 殘影淡出，完全保留你原本的透明度
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.fillRect(0, 0, canvas.width / Math.min(window.devicePixelRatio,1.2), canvas.height / Math.min(window.devicePixelRatio,1.2));

      ctx.fillStyle = '#0891b2';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        waveOffsets[i] += 0.015;
        const waveX = Math.sin(waveOffsets[i]) * 18;
        const text = charArr[Math.floor(Math.random() * charArr.length)];
        const x = i * fontSize + waveX;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > canvas.height / Math.min(window.devicePixelRatio,1.2) && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    setCanvasSize();
    animationId = requestAnimationFrame(draw);

    // 離屏偵測
    const io = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0 });
    io.observe(canvas);

    // 系統減少動畫偏好
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if(motionQuery.matches) isVisible = false;

    resizeObserver = new ResizeObserver(() => {
      setCanvasSize();
    });
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: '#f8fafc' }}
    />
  );
}
