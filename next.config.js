/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  i18n: {
    locales: ["fr"], // Une seule langue
    defaultLocale: "fr", // Langue par défaut
  },
};

module.exports = nextConfig;
