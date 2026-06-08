'use client';

import { useRef, useEffect } from 'react';

const pieces = [
  { points: "0,20 25,0 20,35 0,30",   fill: "#b45309", left: "2%",  y: 4,  w: 24, h: 24 },
  { points: "5,0 30,10 15,30 0,25",   fill: "#d97706", left: "16%", y: 22, w: 28, h: 24 },
  { points: "15,0 35,15 20,35 0,25",  fill: "#047857", left: "30%", y: 8,  w: 28, h: 28 },
  { points: "10,20 30,15 25,45 0,35", fill: "#0369a1", left: "44%", y: 28, w: 24, h: 32 },
  { points: "15,10 35,20 20,45 5,35", fill: "#ca8a04", left: "58%", y: 12, w: 28, h: 32 },
  { points: "0,15 25,5 20,30 0,25",   fill: "#b45309", left: "72%", y: 30, w: 28, h: 28 },
  { points: "5,5 30,0 15,25 0,30",    fill: "#047857", left: "85%", y: 4,  w: 24, h: 24 },
  { points: "10,0 35,15 20,35 5,20",  fill: "#0369a1", left: "95%", y: 20, w: 28, h: 28 },
];

export default function ShardCluster() {
  const shardRefs = useRef([]);

  useEffect(() => {
    const reset = (shard) => {
      shard.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
      shard.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
    };

    const handlePointerMove = (e) => {
      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

      shardRefs.current.filter(Boolean).forEach((shard) => {
        const rect = shard.getBoundingClientRect();
        const dx = (rect.left + rect.width / 2) - clientX;
        const dy = (rect.top + rect.height / 2) - clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const threshold = 85;

        if (dist < threshold) {
          const force = Math.pow((threshold - dist) / threshold, 1.4);
          const angle = Math.atan2(dy, dx);
          const moveX = Math.cos(angle) * 55 * force;
          const moveY = Math.sin(angle) * 55 * force;
          shard.style.transition = 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)';
          shard.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${moveX * 0.35}deg) scale(1.06)`;
        } else {
          reset(shard);
        }
      });
    };

    const handleTouchEnd = () => shardRefs.current.filter(Boolean).forEach(reset);

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="relative w-full h-16 md:h-20 mt-2 shrink-0 pointer-events-none">
      {pieces.map((piece, i) => (
        <div
          key={i}
          ref={(el) => (shardRefs.current[i] = el)}
          className="absolute mix-blend-multiply opacity-80"
          style={{ top: `${piece.y}px`, left: piece.left, width: `${piece.w}px`, height: `${piece.h}px` }}
        >
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
            <polygon points={piece.points} fill={piece.fill} />
          </svg>
        </div>
      ))}
    </div>
  );
}
