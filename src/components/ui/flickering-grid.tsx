import React, { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlickeringGridProps extends React.HTMLAttributes<HTMLCanvasElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.08,
  color = "rgb(99, 102, 241)",
  maxOpacity = 0.4,
  className,
  ...props
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const opacitiesRef = useRef<number[]>([]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellSize = squareSize + gridGap;
    const rect = canvas.getBoundingClientRect();
    const cols = Math.ceil(rect.width / cellSize) + 1;
    const rows = Math.ceil(rect.height / cellSize) + 1;

    while (opacitiesRef.current.length < cols * rows) {
      opacitiesRef.current.push(Math.random() * maxOpacity);
    }

    ctx.clearRect(0, 0, rect.width, rect.height);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.random() < flickerChance) {
          opacitiesRef.current[i * cols + j] = Math.random() * maxOpacity;
        }
        ctx.fillStyle = color;
        ctx.globalAlpha = opacitiesRef.current[i * cols + j];
        ctx.fillRect(j * cellSize, i * cellSize, squareSize, squareSize);
      }
    }
    ctx.globalAlpha = 1;
  }, [squareSize, gridGap, flickerChance, color, maxOpacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      const ctx = canvas.getContext("2d");
      ctx?.scale(dpr, dpr);
    };

    resize();
    let raf: number;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none", className)}
      {...props}
    />
  );
}
