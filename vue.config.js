module.exports = {
	// publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/': '/'
	// productionSourceMap: true,
	lintOnSave: process.env.NODE_ENV !== 'production',
	devServer: {
		// proxy: 'http://localhost:4000',
		overlay: {
			warnings: true,
			errors: true
		}
	},
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Html Editor - 可视化网页编辑器';
				return args;
			})
	}
}