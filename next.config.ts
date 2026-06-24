import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://www.google-analytics.com",
      "media-src 'self'",
      "connect-src 'self' https://formspree.io https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },

  // Allow larger photo uploads (up to 20 MB)
  serverExternalPackages: [],

  async redirects() {
    return [
      {
        source: "/locations/enderby",
        destination: "/locations/vernon",
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
