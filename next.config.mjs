/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "awesome-dream-f80124217b.media.strapiapp.com",
            },
        ],
    },
};

export default nextConfig;
