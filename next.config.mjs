/** @type {import('next').NextConfig} */
import nextIntlPlugin from 'next-intl/plugin';

const withNextIntl = nextIntlPlugin();

const nextConfig = {};

export default withNextIntl(nextConfig);