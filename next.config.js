/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['avatars.githubusercontent.com', 'github.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/u/**',
			},
		],
	},
}

module.exports = nextConfig
