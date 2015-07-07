var gulp = require('gulp'),
		sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('process-styles', function() {
	return sass("src/styles/main.scss", { style: "expanded" })
    .pipe(prefix(['last 2 version']))
    .pipe(gulp.dest("dest/styles"))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest("dest/styles"))
})

gulp.task('process-scripts', function(){
  return gulp.src('src/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dest/scripts'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dest/scripts'))
})

gulp.task('watch', function(){
  gulp.watch('src/scripts/*.js', ['process-scripts'])
});

gulp.task('default', function () {
	console.log("testing gulp task");
})