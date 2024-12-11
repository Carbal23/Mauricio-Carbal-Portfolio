import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig ={
    swcMinify: true,
};

export default withNextIntl(nextConfig);
