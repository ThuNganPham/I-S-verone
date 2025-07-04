import withNextIntl from 'next-intl/plugin';
import nextIntlConfig from './next-intl.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextIntlConfig)(nextConfig);
