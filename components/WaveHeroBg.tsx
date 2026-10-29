'use client';
import { useEffect, useRef } from 'react';

export default function WhiteOscilloscopeHeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let lastTimestamp = 0;
    const TARGET_FPS = 30;
    const FPS_INTERVAL = 1000 / TARGET_FPS;
    let isVisible = true;

    let width = 0;
    let height = 0;
    const dprLimit = Math.min(window.devicePixelRatio, 1.2);
    let time = 0;

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * dprLimit;
      canvas.height = rect.height * dprLimit;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dprLimit, dprLimit);
    };

    // 背景網格
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.18)';
      ctx.lineWidth = 1;

      // 橫線
      for (let y = 40; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 直線
      for (let x = 40; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // 中心基準線
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
    };

    // 主要數位訊號波
    const drawSignalWave = () => {
      ctx.beginPath();
      for (let x = 0; x <= width; x += 3) {
        const y =
          height / 2 +
          Math.sin(x * 0.025 + time) * 40 +
          Math.sin(x * 0.06 + time * 1.4) * 14 +
          Math.sin(x * 0.12 + time * 0.7) * 6;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = '#0ea5e9';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(14, 165, 233, 0.7)';
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    // 訊號尾部陰影
    const drawSignalShadow = () => {
      ctx.beginPath();
      for (let x = 0; x <= width; x += 3) {
        const y =
          height / 2 +
          Math.sin(x * 0.025 + time) * 40 +
          Math.sin(x * 0.06 + time * 1.4) * 14 +
          Math.sin(x * 0.12 + time * 0.7) * 6;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = 'rgba(14, 165, 233, 0.18)';
      ctx.lineWidth = 8;
      ctx.stroke();
    };

    // 觸發線
    const drawTriggerLine = () => {
      const triggerY = height / 2 - 40;

      ctx.strokeStyle = 'rgba(239, 68, 68, 0.7)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(0, triggerY);
      ctx.lineTo(width, triggerY);
      ctx.stroke();
      ctx.setLineDash([]);

      // 觸發箭頭
      ctx.fillStyle = 'rgba(239, 68, 68, 0.85)';
      ctx.beginPath();
      ctx.moveTo(16, triggerY);
      ctx.lineTo(4, triggerY - 6);
      ctx.lineTo(4, triggerY + 6);
      ctx.closePath();
      ctx.fill();
    };

    // 左右掃描光標
    const drawCursor = () => {
      const cursorX = width * 0.22 + Math.sin(time * 0.3) * 20;
      const cursorX2 = width * 0.78 + Math.cos(time * 0.25) * 20;

      ctx.strokeStyle = 'rgba(14, 165, 233, 0.45)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      ctx.beginPath();
      ctx.moveTo(cursorX, 0);
      ctx.lineTo(cursorX, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cursorX2, 0);
      ctx.lineTo(cursorX2, height);
      ctx.stroke();

      ctx.setLineDash([]);

      // 光標標記
      ctx.fillStyle = 'rgba(14, 165, 233, 0.85)';
      ctx.fillRect(cursorX - 2, 8, 4, 10);
      ctx.fillRect(cursorX2 - 2, 8, 4, 10);
    };

    // 頻率刻度文字
    const drawScaleLabels = () => {
      ctx.fillStyle = 'rgba(71, 85, 105, 0.7)';
      ctx.font = '11px monospace';
      ctx.fillText('1 kHz', 12, height - 14);
      ctx.fillText('2 kHz', width / 2 - 22, height - 14);
      ctx.fillText('5 kHz', width - 58, height - 14);

      ctx.fillText('+2V', 12, height / 2 - 44);
      ctx.fillText('0V', 12, height / 2 + 4);
      ctx.fillText('-2V', 12, height / 2 + 48);
    };

    // 小型數位點
    const drawDigitalDots = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
      for (let i = 0; i < 14; i++) {
        const x = 80 + i * 44;
        const y = 22;
        ctx.beginPath();
        ctx.arc(x, y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw);

      if (!isVisible) return;
      if (timestamp - lastTimestamp < FPS_INTERVAL) return;
      lastTimestamp = timestamp;

      // 白底
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);

      drawGrid();
      drawScaleLabels();
      drawDigitalDots();
      drawSignalShadow();
      drawSignalWave();
      drawTriggerLine();
      drawCursor();

      time += 0.018;
    };

    setSize();
    animationId = requestAnimationFrame(draw);

    const io = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0 });
    io.observe(canvas);

    const resizeObserver = new ResizeObserver(() => setSize());
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
      style={{ background: '#ffffff' }}
    />
  );
}
