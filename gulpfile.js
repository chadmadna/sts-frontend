const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.build.js');
const replace = require('gulp-replace');

gulp.task('bundle', () => {
  gulp.src('./src/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./build/'));
});

gulp.task('html', () => {
  gulp.src('./index.html')
    .pipe(replace(/(build\/bundle\.js)/g, './bundle.js'))
    .pipe(gulp.dest('./build/'))
});

gulp.task('build', ['bundle', 'html']);
