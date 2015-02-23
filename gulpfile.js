var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint())
})

gulp.task('sass', function () {
    gulp.src('./client/css/scss/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('./client/css'));
});

gulp.task('develop', ['sass'], function () {
  nodemon({ script: './bin/www', ext: 'html js', ignore: ['ignored.js'] })
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
    })
  gulp.watch('./client/css/scss/*.scss', ['sass']);
})

gulp.task('start', ['sass', 'develop']);
