var gulp = require('gulp');
var data = require('gulp-data');
var stylus = require('gulp-stylus');
var path = require('path');
var _ = require('lodash');
var index = require(path.join(__dirname, 'index.json'));

gulp.task('styl', function() {
	_.forEach(index, item => {
		gulp.src(path.join(__dirname, '/app/css/' + item.key + '.styl'))
			.pipe(data(function(file){
				return {
					componentPath: '/' + (file.path.replace(file.base, '').replace(/\/[^\/]*$/, ''))
				};
				}))
			.pipe(stylus())
			.pipe(gulp.dest(path.join(__dirname, '/dist/css/')));
	});
});
