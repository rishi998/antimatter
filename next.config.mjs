/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-icons"],
  output:"export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
