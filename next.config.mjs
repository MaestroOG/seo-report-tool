/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  serverComponentsExternalPackages: ['playwright-core', '@sparticuz/chromium-min'],
  reactCompiler: true,
};

export default nextConfig;
