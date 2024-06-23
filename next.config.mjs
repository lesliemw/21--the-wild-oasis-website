/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "labwvkenvddcehdsrknk.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/CabinImages/**",
      },
    ],
  },
};

export default nextConfig;
