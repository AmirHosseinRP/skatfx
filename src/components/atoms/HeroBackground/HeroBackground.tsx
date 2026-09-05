"use client";

import { useCallback, useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

function generateMarketLine(width: number, height: number): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const segments = 80;
  const startX = -width * 0.1;
  const endX = width * 1.1;
  const step = (endX - startX) / segments;

  let y = height * 0.65;
  const drift = -0.6;

  for (let i = 0; i <= segments; i++) {
    const x = startX + i * step;
    const progress = i / segments;
    const trend = drift * progress * height * 0.35;
    const volatility = height * 0.04;
    const noise =
      (Math.sin(i * 0.8) * 0.4 + Math.sin(i * 1.7) * 0.3 + Math.sin(i * 3.1) * 0.2 + Math.sin(i * 5.3) * 0.1) *
      volatility;
    const pullback =
      progress > 0.3 && progress < 0.45 ? -height * 0.06 * Math.sin(((progress - 0.3) / 0.15) * Math.PI) : 0;
    const consolidation =
      progress > 0.55 && progress < 0.7 ? height * 0.015 * Math.sin(((progress - 0.55) / 0.15) * Math.PI * 4) : 0;

    y = height * 0.65 + trend + noise + pullback + consolidation;
    points.push({ x, y });
  }

  return points;
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Point[]>([]);
  const lineRef = useRef<{ x: number; y: number }[]>([]);
  const timeRef = useRef(0);

  const initNodes = useCallback((_width: number, _height: number) => {
    const line = lineRef.current;
    const nodes: Point[] = [];
    const nodeCount = Math.min(8, Math.floor(line.length / 10));

    for (let i = 0; i < nodeCount; i++) {
      const idx = Math.floor((i / nodeCount) * line.length) + Math.floor(Math.random() * 5);
      const point = line[Math.min(idx, line.length - 1)];
      nodes.push({
        x: point.x,
        y: point.y,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: 2 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.3,
        pulseSpeed: 0.5 + Math.random() * 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    nodesRef.current = nodes;
  }, []);

  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, time: number) => {
    const { width, height } = canvas;
    const dpr = window.devicePixelRatio || 1;
    const w = width / dpr;
    const h = height / dpr;

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.scale(dpr, dpr);

    // Subtle grid
    ctx.strokeStyle = "rgba(80, 87, 204, 0.04)";
    ctx.lineWidth = 0.5;
    const gridSize = 40;
    for (let x = 0; x < w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Ambient gradient glows
    const gradient1 = ctx.createRadialGradient(w * 0.2, h * 0.3, 0, w * 0.2, h * 0.3, w * 0.4);
    gradient1.addColorStop(0, "rgba(67, 1, 253, 0.04)");
    gradient1.addColorStop(1, "transparent");
    ctx.fillStyle = gradient1;
    ctx.fillRect(0, 0, w, h);

    const gradient2 = ctx.createRadialGradient(w * 0.8, h * 0.6, 0, w * 0.8, h * 0.6, w * 0.35);
    gradient2.addColorStop(0, "rgba(59, 225, 169, 0.025)");
    gradient2.addColorStop(1, "transparent");
    ctx.fillStyle = gradient2;
    ctx.fillRect(0, 0, w, h);

    // Market structure line
    const line = lineRef.current;
    if (line.length > 1) {
      // Glow
      ctx.beginPath();
      ctx.moveTo(line[0].x, line[0].y + Math.sin(time * 0.3) * 2);
      for (let i = 1; i < line.length; i++) {
        ctx.lineTo(line[i].x, line[i].y + Math.sin(time * 0.3 + i * 0.05) * 1.5);
      }
      ctx.strokeStyle = "rgba(67, 1, 253, 0.08)";
      ctx.lineWidth = 6;
      ctx.filter = "blur(4px)";
      ctx.stroke();
      ctx.filter = "none";

      // Main line
      ctx.beginPath();
      ctx.moveTo(line[0].x, line[0].y + Math.sin(time * 0.3) * 2);
      for (let i = 1; i < line.length; i++) {
        ctx.lineTo(line[i].x, line[i].y + Math.sin(time * 0.3 + i * 0.05) * 1.5);
      }
      ctx.strokeStyle = "rgba(80, 87, 204, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Nodes
    const nodes = nodesRef.current;
    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off line proximity
      const lineIdx = Math.floor(((node.x + w * 0.1) / (w * 1.2)) * line.length);
      const nearestPoint = line[Math.max(0, Math.min(lineIdx, line.length - 1))];
      if (nearestPoint) {
        const dy = nearestPoint.y - node.y;
        node.vy += dy * 0.0005;
      }

      node.vx *= 0.999;
      node.vy *= 0.999;

      const pulse = Math.sin(time * node.pulseSpeed + node.pulsePhase) * 0.3 + 0.7;
      const radius = node.radius * pulse;

      // Outer glow
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 4);
      gradient.addColorStop(0, `rgba(80, 87, 204, ${node.opacity * pulse * 0.15})`);
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius * 4, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = `rgba(80, 87, 204, ${node.opacity * pulse})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      lineRef.current = generateMarketLine(rect.width, rect.height);
      initNodes(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      timeRef.current += reducedMotion ? 0.05 : 0.16;
      draw(canvas, ctx, timeRef.current);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw, initNodes]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" tabIndex={-1} />;
}
