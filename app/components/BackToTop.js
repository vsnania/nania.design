'use client';

export default function BackToTop({ className }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={className}
    >
      Back to top <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
    </a>
  );
}
