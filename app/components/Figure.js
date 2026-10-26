import ZoomableImage from '@/app/components/ZoomableImage';

// Image panel for case studies: one surface (the same tint as the homepage
// work panels), square-edged like a print, with a quiet caption underneath.
// bleed: break out of the article to the full page width, for the one big
// moment per case study.
export default function Figure({ caption, children, bleed = false, className = 'mb-[var(--space-section)]' }) {
  const panel = (
    <>
      <div className="bg-[#E3E1DC] rounded-[2px] p-5 md:p-12">
        {children}
      </div>
      {caption ? (
        <figcaption className="mt-3 font-[family-name:var(--f-mono)] text-[13px] leading-[var(--lh-body)] text-[#55534F] max-w-[60em]">
          {caption}
        </figcaption>
      ) : null}
    </>
  );
  return bleed ? (
    <figure className={className}>
      <div className="relative left-1/2 -translate-x-1/2 w-[min(1200px,calc(100vw-2*clamp(16px,4.5vw,64px)))]">{panel}</div>
    </figure>
  ) : (
    <figure className={className}>{panel}</figure>
  );
}

// A phone screenshot inside a Figure: white screen on the tinted panel,
// no outline or drop shadow. The frame follows the
// screenshot's own proportions, so nothing (like a bottom nav bar) gets cropped.
export function Phone({ src, alt, max = 250 }) {
  return (
    <div className="w-full rounded-[clamp(.8rem,3vw,1.5rem)] overflow-hidden bg-white" style={{ maxWidth: max }}>
      <ZoomableImage src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}

// A flat artifact (map, blueprint, mosaic) inside a Figure.
export function Artifact({ src, alt, multiply = false, className = '' }) {
  return (
    <div className={`w-full rounded-[2px] bg-white overflow-hidden ${className}`}>
      <ZoomableImage src={src} alt={alt} className={`w-full h-auto block ${multiply ? 'mix-blend-multiply' : ''}`} />
    </div>
  );
}
