
module.exports = {
	entry: {
		waves1: "./app/js/waves1.js",
		waves2: "./app/js/waves2.js"
	},
	output: {
		publicPath: "/js/",
		filename: "./dist/js/[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
					presets: ['babel-preset-es2016']}
				}
			}
		]
	}
}
