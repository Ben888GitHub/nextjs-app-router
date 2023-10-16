/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [process.env.NEXT_UNSPLASH_DOMAIN, process.env.NEXT_PICSUM_DOMAIN],
		formats: ['image/avif', 'image/webp']
	}
};

module.exports = nextConfig;
