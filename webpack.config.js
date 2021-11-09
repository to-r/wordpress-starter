const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );

module.exports = {
	...defaultConfig,
	resolve: {
		...defaultConfig.resolve,
		extensions: [ '.js' ],
	},
	plugins: [
		...defaultConfig.plugins,
		// 自動リロード
		new BrowserSyncPlugin( {
			host: 'localhost',
			port: 3000,
			proxy: 'http://localhost:8888',
			files: [ `themes/**/*` ],
		} ),
	],
};
