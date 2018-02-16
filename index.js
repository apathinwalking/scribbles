const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const app = new Koa();
const Pug = require('koa-pug');
const pug = new Pug({
	viewPath: "./views",
	app: app
});
// const webpack = require('webpack');
// const webpackMiddleware = require('koa-webpack-dev-middleware');
// const webpackConfig = require('./webpack.config.js');
//
// // if dev
// app.use(webpackMiddleware(webpack(webpackConfig), {
// 	publicPath: "/js/"
// }));

app.use(serve(__dirname + '/dist'));

router.get('/waves1', (ctx) => {
	ctx.render('waves1');
});

router.get('/waves2', (ctx) => {
	ctx.render('waves2');
});

app.use(router.routes())
	.use(router.allowedMethods());


app.listen(3000);
