'use client';

export default function WorkNavLink({ className }) {
  const handleClick = (e) => {
    const el = document.getElementById('featured-work');
    if (el) {
      // already on the homepage — scroll to the work grid
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // on any other page — let the href navigate to the top of the homepage
  };

  return (
    <a href="/" onClick={handleClick} className={className}>
      work
    </a>
  );
}
