const withPlugins = require('next-compose-plugins');
// const withPurgeCss = require('next-purgecss');

// withPurgeCss(

const nextConfig = {
	// purgeCssPaths: [
	// 	'pages/**/*',
	// 	'src/components/**/*',
	// 	'src/views/**/*',
	// 	'node_modules/react-intl-tel-input/**/*.js',
	// 	'node_modules/react-bootstrap/**/*.js'
	// ],
	// purgeCss: {
	// 	whitelist: () => [],
	// 	rejected: true
	// },
	// purgeCssEnabled: ({ dev, isServer }) => true, // Enable PurgeCSS

	// compress: true,
	// trailingSlashes: false,

	webpack(config) {
		config.module.rules.push(
			// {
			// 	test: /\.(woff2|woff|ttf|png|jpe?g|eot)(\?v=\d+\.\d+\.\d+)?$/,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {
			// 				esModule: false
			// 			}
			// 		}
			// 	]
			// },
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

module.exports = withPlugins([], nextConfig);
