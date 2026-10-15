/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // Shared-element morph from homepage work panel to case study hero
    viewTransition: true,
  },
};

export default nextConfig;
