const withPlugins = require('next-compose-plugins');
const withPurgeCss = require('next-purgecss');

// withPurgeCss(

const nextConfig = {
	// reactStrictMode: true,
	purgeCssPaths: [
		'pages/**/*',
		'src/components/**/*',
	],
	purgeCss: {
		whitelist: () => [],
		rejected: true
	},
	purgeCssEnabled: ({ dev, isServer }) => true, // Enable PurgeCSS

	compress: true,
	trailingSlashes: false,

	webpack(config) {
		config.module.rules.push(
			{
				test: /\.(woff2|woff|ttf|png|jpe?g|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							esModule: false
						}
					}
				]
			},
			{
				test: /\.svg$/,
				issuer: {
					test: /\.(js|ts)x?$/,
				},
				use: ['@svgr/webpack']
			}
		);

		// config.plugins.push(
		// 	new webpack.optimize.LimitChunkCountPlugin({
		// 		maxChunks: 1,
		// 	}),
		// );
		return config;
	},

};

module.exports = withPlugins([withPurgeCss], nextConfig);
