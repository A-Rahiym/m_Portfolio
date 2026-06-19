"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const GRID_SIZE = 20;

export function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const snakeRef = useRef([{ x: 10, y: 10 }]);
  const foodRef = useRef({ x: 15, y: 15 });
  const dxRef = useRef(1);
  const dyRef = useRef(0);
  const scoreRef = useRef(0);
  const gameLoopRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(true);

  const [gameState, setGameState] = useState<"idle" | "playing" | "over">("idle");
  const [score, setScore] = useState(0);

  const placeFood = useCallback(() => {
    let newFood: { x: number; y: number };
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (
      snakeRef.current.some(
        (part) => part.x === newFood.x && part.y === newFood.y
      )
    );
    foodRef.current = newFood;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellSize = canvas.width / GRID_SIZE;

    ctx.fillStyle = "#0c0e12";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#1d2024";
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(canvas.width, i * cellSize);
      ctx.stroke();
    }

    ctx.fillStyle = "#FFFFFF";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#FFFFFF";
    ctx.fillRect(
      foodRef.current.x * cellSize + 2,
      foodRef.current.y * cellSize + 2,
      cellSize - 4,
      cellSize - 4
    );
    ctx.shadowBlur = 0;

    snakeRef.current.forEach((part, index) => {
      ctx.fillStyle = index === 0 ? "#32E6E2" : "#7cb852";
      ctx.fillRect(
        part.x * cellSize + 1,
        part.y * cellSize + 1,
        cellSize - 2,
        cellSize - 2
      );
    });
  }, []);

  const move = useCallback(() => {
    const head = {
      x: snakeRef.current[0].x + dxRef.current,
      y: snakeRef.current[0].y + dyRef.current,
    };

    if (head.x < 0) head.x = GRID_SIZE - 1;
    if (head.x >= GRID_SIZE) head.x = 0;
    if (head.y < 0) head.y = GRID_SIZE - 1;
    if (head.y >= GRID_SIZE) head.y = 0;

    if (
      snakeRef.current.some(
        (part) => part.x === head.x && part.y === head.y
      )
    ) {
      return "collision" as const;
    }

    snakeRef.current.unshift(head);

    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      scoreRef.current += 100;
      setScore(scoreRef.current);
      placeFood();
    } else {
      snakeRef.current.pop();
    }

    return "ok" as const;
  }, [placeFood]);

  const update = useCallback(() => {
    if (isPausedRef.current) return;
    const result = move();
    draw();
    if (result === "collision") {
      isPausedRef.current = true;
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
        gameLoopRef.current = null;
      }
      setGameState("over");
    }
  }, [move, draw]);

  const initGame = useCallback(() => {
    snakeRef.current = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    dxRef.current = 1;
    dyRef.current = 0;
    scoreRef.current = 0;
    setScore(0);
    placeFood();
    isPausedRef.current = false;
    setGameState("playing");

    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    gameLoopRef.current = setInterval(update, 120);
  }, [placeFood, update]);

  const resizeCanvas = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const rect = container.getBoundingClientRect();
    const size =
      Math.floor(Math.min(rect.width, rect.height) / GRID_SIZE) * GRID_SIZE;
    canvas.width = size;
    canvas.height = size;
    draw();
  }, [draw]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [resizeCanvas, draw]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if ((key === "arrowup" || key === "w") && dyRef.current === 0) {
        dxRef.current = 0;
        dyRef.current = -1;
      }
      if ((key === "arrowdown" || key === "s") && dyRef.current === 0) {
        dxRef.current = 0;
        dyRef.current = 1;
      }
      if ((key === "arrowleft" || key === "a") && dxRef.current === 0) {
        dxRef.current = -1;
        dyRef.current = 0;
      }
      if ((key === "arrowright" || key === "d") && dxRef.current === 0) {
        dxRef.current = 1;
        dyRef.current = 0;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      ref={containerRef}
      className="grow relative flex items-center justify-center bg-surface-container-lowest overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="max-w-full max-h-full"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Game Overlay */}
      {gameState !== "playing" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20">
          <div className="text-center p-8 border-2 border-primary bg-surface max-w-[80%]">
            <h3 className="font-headline-lg text-primary mb-4">
              {gameState === "over" ? "Game Over" : "Snake Game"}
            </h3>
            <p className="font-label-mono text-label-mono text-on-surface-variant mb-6 uppercase tracking-wider">
              {gameState === "over"
                ? `Score: ${score}`
                : "Use arrow keys or WASD to play."}
            </p>
            {gameState === "idle" && (
              <div className="grid grid-cols-2 gap-4 mb-8 text-left max-w-xs mx-auto">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#32E6E2]" />
                  <span className="font-label-mono text-[10px] text-terminal-gray">
                    Snake head
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-white" />
                  <span className="font-label-mono text-[10px] text-terminal-gray">
                    Food
                  </span>
                </div>
              </div>
            )}
            <button
              onClick={initGame}
              className="bg-primary text-black px-8 py-3 font-label-mono text-label-mono border-2 border-black hover:bg-white transition-colors press-down w-full"
            >
              {gameState === "over" ? "Play Again" : "Start Game"}
            </button>
          </div>
        </div>
      )}

      {/* HUD */}
      {gameState === "playing" && (
        <div className="absolute top-8 left-4 font-label-mono text-primary z-10 pointer-events-none">
          <div className="bg-surface border border-border-main px-3 py-1">
            Score: {score}
          </div>
        </div>
      )}
    </div>
  );
}
