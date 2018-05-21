var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var index = require(path.join(__dirname, 'index.json'));
var env = process.env.NODE_ENV || 'development';

let entry = {};
let plugins = [];

_.forEach(index, item => {
	entry[item.key] = [];
	entry[item.key].push('@babel/polyfill');
	entry[item.key].push(path.resolve(__dirname, ('app/js/' + item.key + '.js')));
});

if (env === 'development') {
	_.forIn(entry, (val, key) => {
		// entry[key].unshift('webpack-hot-middleware/client');
	});
	plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
	mode: env,
	entry: entry,
	output: {
		"filename": "[name].js",
		"path": path.resolve(__dirname, 'dist/js'),
		"publicPath": "/js/"
	},
	module: {
		rules: [{
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {presets: [
					["@babel/env", {
						targets: {"chrome": "60"}
					}], 
					["@babel/react"],
					["@babel/preset-stage-0", {"decoratorsLegacy": true} ]
				]}
			}
		}]
	},
	plugins: plugins
}
