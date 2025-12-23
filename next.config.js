/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable static optimization for pages with dynamic 3D content
    // This ensures proper client-side rendering for Three.js components
    reactStrictMode: true,

    // Configure image optimization
    // Temporarily disabled to fix deployment build error
    images: {
        remotePatterns: [],
        unoptimized: true, // Disable image optimization temporarily
    },

    // Webpack configuration for Three.js and GSAP
    webpack: (config) => {
        config.externals = config.externals || [];

        // Handle canvas for Three.js in server-side rendering
        config.externals.push({
            canvas: 'canvas',
        });

        return config;
    },

    // Enable experimental features if needed
    experimental: {
        optimizePackageImports: ['@react-three/fiber', '@react-three/drei'],
    },
};

module.exports = nextConfig;
