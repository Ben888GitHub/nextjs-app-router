const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/gitdagray/test-blogposts/main/images/**'
			},
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
				port: '',
				pathname: '/photos/**'
			}
		],
		domains: [process.env.NEXT_UNSPLASH_DOMAIN, process.env.NEXT_PICSUM_DOMAIN],
		formats: ['image/avif', 'image/webp']
	}
};

module.exports = nextConfig;
