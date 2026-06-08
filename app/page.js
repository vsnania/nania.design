'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const cluster1Ref = useRef([]);

  // 8 pieces spanning the full width horizontally 
  const cluster1Pieces = [
    { points: "0,20 25,0 20,35 0,30", fill: "#b45309", left: "2%", y: 4, w: 24, h: 24 },
    { points: "5,0 30,10 15,30 0,25", fill: "#d97706", left: "16%", y: 22, w: 28, h: 24 },
    { points: "15,0 35,15 20,35 0,25", fill: "#047857", left: "30%", y: 8, w: 28, h: 28 },
    { points: "10,20 30,15 25,45 0,35", fill: "#0369a1", left: "44%", y: 28, w: 24, h: 32 },
    { points: "15,10 35,20 20,45 5,35", fill: "#ca8a04", left: "58%", y: 12, w: 28, h: 32 },
    { points: "0,15 25,5 20,30 0,25", fill: "#b45309", left: "72%", y: 30, w: 28, h: 28 },
    { points: "5,5 30,0 15,25 0,30", fill: "#047857", left: "85%", y: 4, w: 24, h: 24 },
    { points: "10,0 35,15 20,35 5,20", fill: "#0369a1", left: "95%", y: 20, w: 28, h: 28 }
  ];

  // Unified Hover & Touch Brush Effect
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePointerMove = (e) => {
      // Determine if this is a mouse or touch event to get coordinates
      let clientX, clientY;
      if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const allShards = [...cluster1Ref.current].filter(Boolean);

      allShards.forEach((shard) => {
        const rect = shard.getBoundingClientRect();
        const shardCenterX = rect.left + rect.width / 2;
        const shardCenterY = rect.top + rect.height / 2;

        const deltaX = shardCenterX - clientX;
        const deltaY = shardCenterY - clientY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const proximityThreshold = 85;

        if (distance < proximityThreshold) {
          const force = Math.pow((proximityThreshold - distance) / proximityThreshold, 1.4);
          const angle = Math.atan2(deltaY, deltaX);

          const maxPush = 55; 
          const moveX = Math.cos(angle) * maxPush * force;
          const moveY = Math.sin(angle) * maxPush * force;
          const gentleTilt = moveX * 0.35;

          shard.style.transition = 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)';
          shard.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${gentleTilt}deg) scale(1.06)`;
        } else {
          shard.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
          shard.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
        }
      });
    };

    // Smooth reset when user lifts their finger off the screen
    const handleTouchEnd = () => {
      const allShards = [...cluster1Ref.current].filter(Boolean);
      allShards.forEach((shard) => {
        shard.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
        shard.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
      });
    };

    window.addEventListener('mousemove', handlePointerMove);
    // passive: true ensures we don't block the user's scrolling
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen pt-4 pb-20 lg:pb-28 tracking-tight z-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start relative z-10">
        
     {/* LEFT COLUMN: Narrative Hook */}
        <div className="lg:col-span-5 flex flex-col md:flex-wrap gap-8 lg:sticky lg:-top-12 items-start">
          
          {/* 1. The Image Container (Now Top: order-1) */}
          {/* md:mt-24 added here to align with Featured Work on desktop only */}
          <div className="order-1 w-full aspect-[4/3] bg-stone-400/20 border border-stone-400/40 rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden relative shadow-sm backdrop-blur-[2px] shrink-0 md:mt-20">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-sky-500/10 opacity-60 z-10" />
            <img
              src="/homepage/0f70a5d8-7cd2-45a2-8345-4e3d5aff38ce.jpeg"
              alt="Vincent Nania"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          {/* 2. Headline (Now below image: order-2) */}
          <div className="order-2 w-full pt-2 md:mb-4">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-snug max-w-md">
              I turn complexity into clarity, and ideas into products that people enjoy using.
            </h1>
          </div>

          {/* 3. The Shapes Container (Bottom: order-3) */}
          <div 
            className="order-3 relative w-full h-16 md:h-20 mt-2 shrink-0 pointer-events-none"
          >
            {cluster1Pieces.map((piece, i) => (
              <div
                key={i}
                ref={(el) => (cluster1Ref.current[i] = el)}
                className="mosaic-shard-wrapper absolute mix-blend-multiply opacity-80"
                style={{ top: `${piece.y}px`, left: piece.left, width: `${piece.w}px`, height: `${piece.h}px` }}
              >
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                  <polygon points={piece.points} fill={piece.fill} />
                </svg>
              </div>
            ))}
          </div>
          
        </div>

        {/* RIGHT COLUMN: Featured Work */}
        <div className="lg:col-span-7 pt-2 lg:pt-7">
          <h2 className="section-label mb-8">Featured Work</h2>
          
          <div className="flex flex-col gap-8">
            
            {/* 1. Verizon */}
            <Link href="/my-verizon-app" className="group flex flex-col justify-between p-6 bg-stone-100/95 border border-stone-400/25 border-l-4 border-l-amber-600 rounded-2xl hover:border-stone-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-950/5 transition-all duration-300 cursor-pointer relative z-10 shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-stone-200/60 px-3 py-1 rounded-md text-[10px] uppercase tracking-wider text-stone-700 font-medium">
                    My Verizon App
                  </span>
                  <span className="text-stone-400 text-[10px] ">2026</span>
                  <span className="ml-auto text-amber-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-[11px] tracking-wider">VIEW STUDY →</span>
                </div>
                <h3 className="text-xl font-medium leading-snug group-hover:text-amber-900 transition-colors">
                  Skim, Dip, Dive: Leading the My Verizon app transformation
                </h3>
                <p className="text-sm text-stone-600/90 mt-3 font-normal leading-relaxed max-w-xl">
                  Redesigning core interfaces into a lightweight pathfinder system for high-value user flows.
                </p>
              </div>
              <div className="w-full mt-6 flex justify-center bg-stone-200/50 rounded-tr-xl rounded-bl-xl border border-stone-400/15 overflow-hidden">
                <img 
                  src="/homepage/verizon-thumbnail.png" 
                  alt="Verizon thumbnail"
                  className="h-auto w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>

            {/* 2. American Eagle */}
            <Link href="/ae-bopis" className="group flex flex-col justify-between p-6 bg-stone-100/95 border border-stone-400/25 border-l-4 border-l-emerald-600/70 hover:border-l-emerald-600 rounded-2xl hover:border-stone-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/5 transition-all duration-300 cursor-pointer relative z-10 shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-stone-200/60 px-3 py-1 rounded-md text-[10px]  uppercase tracking-wider text-stone-700 font-medium">
                    Omni-channel E-com
                  </span>
                  <span className="text-stone-400 text-[10px] ">2024</span>
                  <span className="ml-auto text-emerald-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-[11px] tracking-wider">VIEW STUDY →</span>
                </div>
                <h3 className="text-xl font-medium leading-snug group-hover:text-emerald-900 transition-colors">
                  0 to 1 service design for a complex, omnichannel retail experience
                </h3>
                <p className="text-sm text-stone-600/90 mt-3 font-normal leading-relaxed max-w-xl">
                  Led a major cross-functional initiative to develop and launch a new in-store pickup channel for American Eagle and Aerie.
                </p>
              </div>
              <div className="w-full mt-6 flex justify-center bg-stone-200/50 rounded-tr-xl rounded-bl-xl border border-stone-400/15 overflow-hidden">
                <img 
                  src="/homepage/ae-thumbnail.png" 
                  alt="AE thumbnail"
                  className="h-auto w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>

            {/* 3. Conversational UX */}
            <Link href="/conversational-ux" className="group flex flex-col justify-between p-6 bg-stone-100/95 border border-stone-400/25 border-l-4 border-l-sky-600/70 hover:border-l-sky-600 rounded-2xl hover:border-stone-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-950/5 transition-all duration-300 cursor-pointer relative z-10 shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-stone-200/60 px-3 py-1 rounded-md text-[10px]  uppercase tracking-wider text-stone-700 font-medium">
                    Conversational UX
                  </span>
                  <span className="text-stone-400 text-[10px] ">2023</span>
                  <span className="ml-auto text-sky-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-[11px] tracking-wider">VIEW STUDY →</span>
                </div>
                <h3 className="text-xl font-medium leading-snug group-hover:text-sky-900 transition-colors">
                  Conversational UX on a zero-dollar budget
                </h3>
                <p className="text-sm text-stone-600/90 mt-3 font-normal leading-relaxed max-w-xl">
                  How a scrappy, interactive FAQ proved the value of conversational design and secured funding for a fully scaled automated support ecosystem.
                </p>
              </div>
              <div className="w-full mt-6 flex justify-center bg-stone-200/50 rounded-tr-xl rounded-bl-xl border border-stone-400/15 overflow-hidden">
                <img 
                  src="/homepage/conversational-ux-thumbnail.png" 
                  alt="Conversational UX thumbnail"
                  className="h-auto w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}