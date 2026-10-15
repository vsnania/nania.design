import ZoomableImage from '@/app/components/ZoomableImage';

// Image panel for case studies: the same tinted surface as the homepage work
// panels, with a quiet caption underneath.
export default function Figure({ caption, children, className = 'mb-20' }) {
  return (
    <figure className={className}>
      <div className="bg-[#EDEAE2] border border-[#121212]/[.08] rounded-[14px] p-5 md:p-12">
        {children}
      </div>
      {caption ? (
        <figcaption className="mt-3 font-[family-name:var(--f-mono)] text-[12px] leading-[1.5] tracking-[.02em] text-[#66645F] max-w-[60em]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

// A phone screenshot inside a Figure: rounded, shadowed, click to zoom.
// The frame follows the screenshot's own proportions, so nothing (like a
// bottom nav bar) gets cropped.
export function Phone({ src, alt, max = 250 }) {
  return (
    <div className="w-full rounded-[clamp(.8rem,3vw,1.5rem)] overflow-hidden bg-white shadow-2xl shadow-stone-950/20" style={{ maxWidth: max }}>
      <ZoomableImage src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}

// A flat artifact (map, blueprint, mosaic) inside a Figure.
export function Artifact({ src, alt, multiply = false, className = '' }) {
  return (
    <div className={`w-full rounded-xl shadow-lg border border-[#121212]/10 bg-white overflow-hidden ${className}`}>
      <ZoomableImage src={src} alt={alt} className={`w-full h-auto block rounded-xl ${multiply ? 'mix-blend-multiply' : ''}`} />
    </div>
  );
}
