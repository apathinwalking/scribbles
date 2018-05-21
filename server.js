var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';

var path = require('path');
var express = require('express');
var _ = require('lodash');
var app = express();
var router = express.Router();
var index = require(path.join(__dirname, 'index.json'));

index = _.map(index, item => {
	let key = item.key;
	let title = item.title ? item.title : _.startCase(key);
	let thisPath = item.path ? item.path : ('/' + key);
	let css = false;
	if (item.css !== false) {
		css = path.join('/css/', (key + '.css'));
	}
	let js = false;
	if (item.js !== false) {
		js = path.join('/js/', (key + '.js'));
	}
	let view = key;
	return {key,title,path:thisPath,view,css,js};
});

if (env === 'development') {
	var expressStylus = require("express-stylus-middleware");  
	var webpack = require('webpack');
	var webpackDevMiddleWare = require('webpack-dev-middleware');
	var webpackConfig = require('./webpack.config');
	var compiler = webpack(webpackConfig);

	app.use(webpackDevMiddleWare(compiler, {
		publicPath: webpackConfig.output.publicPath
	}));

	app.use('/css', expressStylus(path.join(__dirname, '/app/css')));
	app.use(express.static(path.join(__dirname, '/app')));
} else if (env == 'production') {
	app.use(express.static(path.join(__dirname, '/dist')));
}

app.set('view engine', 'pug');

router.get('/', function(req, res) {
	res.render('index', {index});
});

_.forEach(index, item => {
	router.get(item.path, function(req, res) {
		res.render(item.view, item);
	});
});

app.use('/', router);

app.listen(port, function() {
	console.log('Listening on port ' + port);
});
