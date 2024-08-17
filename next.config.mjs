/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  // ignoreBuildErrors: true,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dcgyc8uwa",
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: "x0g5tgxk",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
