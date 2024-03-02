/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "avatars.githubusercontent.com" },
            { hostname: "images2.imgbox.com" },
            { hostname: "lh3.googleusercontent.com" },
            { hostname: "media.licdn.com" },
            { hostname: "source.unsplash.com" },
            { hostname: "localhost" },
            { hostname: "local.com" },
            { hostname: "app.local.com" },
            { hostname: "cdn.sanity.io" },
            { hostname: "cdn.builder.io" },
            { hostname: "upload.wikimedia.org" },
            { hostname: "images.unsplash.com" },
            { hostname: 'perfect-buffalo-199.convex.cloud' },
            { hostname: 'target.scene7.com' }
        ]
    },
}

module.exports = nextConfig