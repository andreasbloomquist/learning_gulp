var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    htmlmin = require('gulp-htmlmin'),
    server = require('gulp-express');

gulp.task('default', ['process-scripts', 'process-styles', 'process-views'], function () {
  console.log("Default tasks are running");
});

gulp.task('process-styles', function() {
	return sass("src/styles/main.scss", { style: "expanded" })
    .pipe(prefix(['last 2 version']))
    .pipe(gulp.dest("dest/styles"))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest("dest/styles"))
    .pipe(server.notify())
})

gulp.task('process-scripts', function(){
  return gulp.src('src/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dest/scripts'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dest/scripts'))
    .pipe(server.notify())
})

gulp.task('process-views', function(){
  return gulp.src('src/views/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dest/views/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dest/views/'))
    .pipe(server.notify())
})


gulp.task('watch', function(e){
  gulp.watch('src/scripts/*.js', ['process-scripts'])
  gulp.watch('src/styles/*.scss', ['process-styles'])
  gulp.watch('src/views/*.jade', ['process-views'])

});

gulp.task('server', function() {
  server.run(['app.js'])
  gulp.watch('src/scripts/*.js', ['process-scripts'], server.notify)
  gulp.watch('src/styles/*.scss', ['process-styles'], server.notify)
  gulp.watch('src/views/*.jade', ['process-views'], server.notify)
})