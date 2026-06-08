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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-900/95 backdrop-blur-sm cursor-zoom-out p-4 md:p-12 animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
          />
          <span className="absolute bottom-8 text-xs text-stone-400 tracking-widest uppercase">
            Click anywhere or press Esc to close
          </span>
        </div>
      )}
    </>
  );
}