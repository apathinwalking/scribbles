var gulp = require('gulp');
var data = require('gulp-data');
var stylus = require('gulp-stylus');
var _ = require('lodash');

gulp.task('styl', function() {
  gulp.src('./app/css/**/*.styl')
    .pipe(data(function(file){
      return {
        componentPath: '/' + (file.path.replace(file.base, '').replace(/\/[^\/]*$/, ''))
      };
    }))
    .pipe(stylus())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch-styl', function() {
	gulp.watch('./app/css/**/*.styl', ['styl']);
});
