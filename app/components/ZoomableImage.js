'use client';

import { useState, useEffect } from 'react';

export default function ZoomableImage({ src, alt, className }) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Allow closing the overlay with the Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsZoomed(false);
    };
    
    if (isZoomed) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling on the body when zoomed
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  return (
    <>
      {/* Base Image (What sits in your grid) */}
      <img 
        src={src} 
        alt={alt} 
        className={`${className} cursor-zoom-in outline outline-2 outline-transparent outline-offset-0 hover:outline-stone-400 hover:outline-offset-[6px] transition-all duration-200 ease-out`}
        onClick={() => setIsZoomed(true)}
      />

      {/* Expanded Overlay (The global zoom state) */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-900/95 backdrop-blur-sm animate-in fade-in duration-200 p-4 md:p-12 gap-5"
          style={{ cursor: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'14\' fill=\'%23292524\' fill-opacity=\'0.85\'/%3E%3Cline x1=\'11\' y1=\'11\' x2=\'21\' y2=\'21\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\'/%3E%3Cline x1=\'21\' y1=\'11\' x2=\'11\' y2=\'21\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\'/%3E%3C/svg%3E") 16 16, zoom-out' }}
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[85dvh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200 shrink"
          />
          <span className="shrink-0 text-xs text-stone-400 tracking-widest uppercase">
            Click anywhere or press Esc to close
          </span>
        </div>
      )}
    </>
  );
}