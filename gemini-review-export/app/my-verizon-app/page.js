'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const canvasRef = useRef(null);

  const secondaryProjects = [
    {
      company: "Conversational AI",
      title: "Ecosystem Strategy & UX Architecture",
      desc: "Deploying intelligent conversational patterns to surface data and eliminate friction.",
      year: "2025"
    },
    {
      company: "Omni-channel E-com",
      title: "Unified Customer Self-Service",
      desc: "Optimizing fulfillment workflows and order telemetry maps across complex retail touchpoints.",
      year: "2024"
    },
    {
      company: "Data Viz Platform",
      title: "Predictive Analytics Architecture",
      desc: "Translating live data streaming frameworks into highly intentional interaction models.",
      year: "2024"
    }
  ];

  const cluster1Pieces = [
    { points: "0,20 25,0 20,35 0,30", fill: "#b45309", top: "top-0", left: "left-0", w: "w-6", h: "h-6" },
    { points: "5,0 30,10 15,30 0,25", fill: "#d97706", top: "top-1", left: "left-7", w: "w-7", h: "h-6" },
    { points: "15,0 35,15 20,35 0,25", fill: "#047857", top: "top-2", left: "left-14", w: "w-7", h: "h-7" },
    { points: "10,20 30,15 25,45 0,35", fill: "#0369a1", top: "top-7", left: "left-2", w: "w-6", h: "h-8" },
    { points: "15,10 35,20 20,45 5,35", fill: "#ca8a04", top: "top-8", left: "left-9", w: "w-7", h: "h-8" },
    { points: "0,20 25,30 15,50 0,40", fill: "#b45309", top: "top-14", left: "left-5", w: "w-6", h: "h-8" }
  ];

  const cluster2Pieces = [
    { points: "0,20 30,5 25,35 2,30", fill: "#047857", top: "top-0", left: "left-2", w: "w-7", h: "h-7" },
    { points: "10,0 35,10 20,35 0,30", fill: "#0369a1", top: "top-1", left: "left-10", w: "w-7", h: "h-7" },
    { points: "5,25 25,20 20,50 0,40", fill: "#d97706", top: "top-7", left: "left-0", w: "w-6", h: "h-8" },
    { points: "10,20 35,18 25,50 5,45", fill: "#b45309", top: "top-8", left: "left-7", w: "w-7", h: "h-9" },
    { points: "20,25 40,15 32,45 10,50", fill: "#ca8a04", top: "top-6", left: "left-15", w: "w-8", h: "h-9" }
  ];

  const cluster3Pieces = [
    { points: "10,15 35,10 25,35 5,30", fill: "#0369a1", top: "top-0", left: "left-1", w: "w-7", h: "h-6" },
    { points: "15,0 40,10 25,35 5,30", fill: "#b45309", top: "top-0", left: "left-9", w: "w-8", h: "h-7" },
    { points: "5,20 25,20 15,45 0,35", fill: "#ca8a04", top: "top-6", left: "left-0", w: "w-6", h: "h-8" },
    { points: "15,18 35,25 22,50 5,40", fill: "#047857", top: "top-6", left: "left-7", w: "w-7", h: "h-9" }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parentCanvas = canvasRef.current;
    if (!parentCanvas) return;

    const handleMouseMove = (e) => {
      const allShards = parentCanvas.querySelectorAll('.mosaic-shard-wrapper');

      allShards.forEach((shard) => {
        const rect = shard.getBoundingClientRect();
        const shardCenterX = rect.left + rect.width / 2;
        const shardCenterY = rect.top + rect.height / 2;

        const deltaX = shardCenterX - e.clientX;
        const deltaY = shardCenterY - e.clientY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const proximityThreshold = 75;

        if (distance < proximityThreshold) {
          const force = Math.pow((proximityThreshold - distance) / proximityThreshold, 1.4);
          const angle = Math.atan2(deltaY, deltaX);

          const maxPush = 48; 
          const moveX = Math.cos(angle) * maxPush * force;
          const moveY = Math.sin(angle) * maxPush * force;
          const gentleTilt = moveX * 0.35;

          shard.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
          shard.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${gentleTilt}deg) scale(1.06)`;
        } else {
          shard.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
          shard.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={canvasRef} className="relative w-full min-h-screen py-20 lg:py-28 tracking-tight z-10">
      
      {/* ==================== WORKSPACE MAIN COLUMNS CONTAINER ==================== */}
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
        
        {/* 
          CLUSTER 1: BRAND MARQUEE ACCENT
          Nudged up from top-[-14rem] to top-[-16.5rem] to align the visual center 
          perfectly symmetrical to your name typography.
        */}
        <div className="absolute left-[-6.5rem] top-[-16.5rem] w-24 h-24 z-0 pointer-events-none">
          {cluster1Pieces.map((piece, i) => (
            <div 
              key={i} 
              className={`mosaic-shard-wrapper absolute ${piece.top} ${piece.left} ${piece.w} ${piece.h} mix-blend-multiply`}
            >
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                <polygon points={piece.points} fill={piece.fill} />
              </svg>
            </div>
          ))}
        </div>

        {/* Cluster 2: Main Card Intersection */}
        <div className="absolute top-[35%] right-[42%] w-28 h-28 z-0 pointer-events-none">
          {cluster2Pieces.map((piece, i) => (
            <div 
              key={i} 
              className={`mosaic-shard-wrapper absolute ${piece.top} ${piece.left} ${piece.w} ${piece.h} mix-blend-multiply`}
            >
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                <polygon points={piece.points} fill={piece.fill} />
              </svg>
            </div>
          ))}
        </div>

        {/* Cluster 3: Small Grid Anchor */}
        <div className="absolute bottom-[24%] right-[-1%] w-20 h-20 z-0 pointer-events-none">
          {cluster3Pieces.map((piece, i) => (
            <div 
              key={i} 
              className={`mosaic-shard-wrapper absolute ${piece.top} ${piece.left} ${piece.w} ${piece.h} mix-blend-multiply`}
            >
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                <polygon points={piece.points} fill={piece.fill} />
              </svg>
            </div>
          ))}
        </div>

        {/* LEFT COLUMN: Narrative Hook */}
        <div className="lg:col-span-5 flex flex-col gap-12 lg:sticky lg:top-28">
          <div className="pt-4">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-snug max-w-md">
              I turn complexity into clarity, and ideas into products that people enjoy using.
            </h1>
          </div>
          <div className="w-40 h-40 md:w-48 md:h-48 bg-stone-400/20 border border-stone-400/40 rounded-tl-[2rem] rounded-br-[2rem] flex items-center justify-center overflow-hidden relative shadow-sm backdrop-blur-[2px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-sky-500/10 opacity-60" />
            <span className="text-xs text-stone-500 font-mono">[ photo of v ]</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Featured Work landing index */}
        <div className="lg:col-span-7 pt-2">
          <h2 className="section-label">Featured Work</h2>

          <div className="flex flex-col gap-8">
            
            {/* 1. MAIN FEATURED CARD */}
            <Link href="/my-verizon-app" className="group flex flex-col justify-between p-6 bg-stone-100/90 border border-stone-400/30 border-l-4 border-l-amber-600 rounded-2xl hover:border-amber-700/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-950/5 transition-all duration-300 cursor-pointer">
              <div>
                <div className="flex justify-between items-baseline text-xs font-mono text-stone-500 mb-4">
                  <span className="bg-stone-200/60 px-3 py-1 rounded-md text-stone-700 border border-stone-400/20 font-medium">
                    My Verizon App
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">2026</span>
                    <span className="text-amber-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-[11px] tracking-wider">VIEW STUDY →</span>
                  </div>
                </div>
                <h3 className="text-xl font-medium leading-snug group-hover:text-amber-900 transition-colors">
                  Skim, Dip, Dive: Leading the My Verizon app transformation
                </h3>
                <p className="text-sm text-stone-600/90 mt-3 font-normal leading-relaxed max-w-xl">
                  Redesigning core interfaces into a lightweight pathfinder system for high-value user flows.
                </p>
              </div>
              <div className="w-full h-28 bg-stone-400/10 border border-stone-400/20 rounded-tr-xl rounded-bl-xl flex items-center justify-center mt-6">
                <span className="text-xs font-mono text-stone-500 group-hover:text-stone-800 transition-colors font-medium">
                  [ view transformation blueprints ]
                </span>
              </div>
            </Link>

            {/* SECONDARY PROJECTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col justify-between p-6 bg-stone-100/90 border border-stone-400/30 border-l-4 border-l-stone-400/70 rounded-2xl transition-all duration-300 min-h-[280px]"
                >
                  <div>
                    <div className="flex justify-between items-baseline text-xs font-mono text-stone-500 mb-4">
                      <span className="bg-stone-200/60 px-3 py-1 rounded-md text-stone-700 border border-stone-400/20 font-medium">
                        {project.company}
                      </span>
                      <span className="font-semibold">{project.year}</span>
                    </div>
                    <h3 className="text-lg font-medium leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-stone-600/90 mt-3 font-normal leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="w-full h-24 bg-stone-400/10 border border-stone-400/20 rounded-tr-xl rounded-bl-xl flex items-center justify-center mt-6 font-mono text-[10px] text-stone-400 italic">
                    [ Content details pending ]
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}